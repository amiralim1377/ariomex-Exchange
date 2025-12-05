type IconName = "instagram" | "telegram" | "linkedin" | "github";

type FooterIconItem = {
  name: IconName;
  href: string;
};

type FooterItem = {
  id: number;
  footerTitle: string;
  hasFooterContent: boolean;
  footerContent: { title: string; href: string }[];
  hasIcon: boolean;
  icon?: FooterIconItem[];
};

export default FooterItem;
