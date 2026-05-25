import { useAtom } from "jotai";
import { entitlementAtom } from "@/ee/entitlement/entitlement-atom";
import {
  FeatureKey,
  FREEDOCS_FREE_FEATURE_SET,
} from "@/ee/features";

export const useHasFeature = (feature: string): boolean => {
  const [entitlements] = useAtom(entitlementAtom);
  return (
    FREEDOCS_FREE_FEATURE_SET.has(feature as FeatureKey) ||
    (entitlements?.features?.includes(feature) ?? false)
  );
};
