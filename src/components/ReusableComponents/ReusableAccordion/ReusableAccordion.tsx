import AccordionProps from "@/types/AccordionProps";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ReusableAccordion({ items }: AccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((accordionItem, i) => (
        <AccordionItem dir="rtl" key={i} value={`item-${i}`}>
          <AccordionTrigger>{accordionItem.question}</AccordionTrigger>
          <AccordionContent className="text-right">
            {accordionItem.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
