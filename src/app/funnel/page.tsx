import { FunnelClient } from "./FunnelClient";
import { getFunnelPricing } from "@/lib/funnelPricing";

export default async function FunnelPage() {
  const pricing = await getFunnelPricing();
  return <FunnelClient pricing={pricing} />;
}
