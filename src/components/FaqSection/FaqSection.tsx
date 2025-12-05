import { IconSearch } from "@tabler/icons-react";
import { faqData } from "@/data/faq";
import ReusableAccordion from "../ReusableComponents/ReusableAccordion/ReusableAccordion";

export default function FaqSection() {
  return (
    <div className="bg-mainBg py-6">
      <div className="container">
        <section className="flex items-center gap-2">
          <IconSearch stroke={2} />
          <h3 className="text-base">سوالات متداول</h3>
        </section>
        <ReusableAccordion items={faqData} />
      </div>
    </div>
  );
}
