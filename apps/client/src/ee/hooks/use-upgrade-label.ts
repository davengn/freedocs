import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { entitlementAtom } from "@/ee/entitlement/entitlement-atom";
import { isCloud } from "@/lib/config";

export function useUpgradeLabel(): string {
  const { t } = useTranslation();
  const [entitlements] = useAtom(entitlementAtom);

  if (!isCloud()) {
    return entitlements != null && entitlements.tier !== "free"
      ? t("Unavailable for the current workspace policy.")
      : t("Managed by workspace policy");
  }
  return t("Managed by workspace policy");
}
