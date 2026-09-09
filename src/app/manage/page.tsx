import { ManageApp } from "./ManageApp";
import { getPlanPricing } from "@/lib/planPricing";

export default async function ManagePage() {
  const pricing = await getPlanPricing();
  return <ManageApp pricing={pricing} />;
}
