interface AccordionItem {
  question: string;
  answer: string;
}

export default interface AccordionProps {
  items: AccordionItem[];
}
