import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import {
  FeatureKey,
  FREEDOCS_FREE_FEATURE_SET,
} from '../../common/features';
import { EnvironmentService } from './environment.service';

@Injectable()
export class LicenseCheckService {
  constructor(
    private moduleRef: ModuleRef,
    private environmentService: EnvironmentService,
  ) {}

  isValidEELicense(licenseKey: string): boolean {
    if (this.environmentService.isCloud()) {
      return true;
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const LicenseModule = require('../../ee/licence/license.service');
      const licenseService = this.moduleRef.get(LicenseModule.LicenseService, {
        strict: false,
      });
      return licenseService.isValidEELicense(licenseKey);
    } catch {
      return false;
    }
  }

  hasFeature(licenseKey: string, feature: string, plan?: string): boolean {
    if (this.isFreedocsFreeFeature(feature)) {
      return true;
    }

    if (this.environmentService.isCloud()) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const { getFeaturesForCloudPlan } = require('../../ee/licence/feature-registry');
        return getFeaturesForCloudPlan(plan).has(feature);
      } catch {
        return false;
      }
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const LicenseModule = require('../../ee/licence/license.service');
      const licenseService = this.moduleRef.get(LicenseModule.LicenseService, {
        strict: false,
      });
      return licenseService.hasFeature(licenseKey, feature);
    } catch {
      return false;
    }
  }

  getFeatures(licenseKey: string): string[] {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const LicenseModule = require('../../ee/licence/license.service');
      const licenseService = this.moduleRef.get(LicenseModule.LicenseService, {
        strict: false,
      });
      return this.mergeWithFreedocsFreeFeatures(
        licenseService.getFeatures(licenseKey),
      );
    } catch {
      return this.mergeWithFreedocsFreeFeatures([]);
    }
  }

  resolveFeatures(licenseKey: string, plan: string): string[] {
    if (this.environmentService.isCloud()) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const { getFeaturesForCloudPlan } = require('../../ee/licence/feature-registry');
        return this.mergeWithFreedocsFreeFeatures(getFeaturesForCloudPlan(plan));
      } catch {
        return this.mergeWithFreedocsFreeFeatures([]);
      }
    }

    return this.getFeatures(licenseKey);
  }

  resolveTier(licenseKey: string, plan: string): string {
    if (this.environmentService.isCloud()) {
      return plan ?? 'standard';
    }

    return this.getLicenseType(licenseKey) ?? 'free';
  }

  private getLicenseType(licenseKey: string): string | null {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const LicenseModule = require('../../ee/licence/license.service');
      const licenseService = this.moduleRef.get(LicenseModule.LicenseService, {
        strict: false,
      });
      return licenseService.getLicenseType(licenseKey);
    } catch {
      return null;
    }
  }

  private isFreedocsFreeFeature(feature: string): boolean {
    return FREEDOCS_FREE_FEATURE_SET.has(feature as FeatureKey);
  }

  private mergeWithFreedocsFreeFeatures(features: Iterable<string>): string[] {
    const mergedFeatures = new Set<string>(features);

    for (const feature of FREEDOCS_FREE_FEATURE_SET) {
      mergedFeatures.add(feature);
    }

    return [...mergedFeatures];
  }
}
