import { siteConfig } from "@/data/siteConfig";

export function DisclaimerBanner() {
  return (
    <aside className="rounded-md border border-[#d7e2ed] bg-mist p-5 text-sm leading-6 text-charcoal">
      <strong className="text-navy">Medical disclaimer: </strong>
      {siteConfig.disclaimer}
    </aside>
  );
}

