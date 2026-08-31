import { FunnelClient } from "./FunnelClient";
import { getPlanPricing } from "@/lib/planPricing";

export default async function FunnelPage() {
  const pricing = await getPlanPricing();
  return <FunnelClient pricing={pricing} />;
}
