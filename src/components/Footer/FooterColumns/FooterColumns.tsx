import footerContentList from "@/data/footerContentList";
import Link from "next/link";

import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";

const icons = {
  instagram: IconBrandInstagram,
  telegram: IconBrandTelegram,
  linkedin: IconBrandLinkedin,
  github: IconBrandGithub,
};

export default function FooterColumns() {
  return (
    <>
      {footerContentList.map((footerItem) => {
        return (
          <div key={footerItem.id} className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">{footerItem.footerTitle}</h3>

            {footerItem.hasFooterContent &&
              footerItem.footerContent.length > 0 && (
                <ul className="flex flex-col gap-2 text-sm">
                  {footerItem.footerContent.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="hover:text-gray-300 text-muted-foreground transition-all"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            {footerItem.hasIcon &&
              Array.isArray(footerItem.icon) &&
              footerItem.icon.length > 0 && (
                <div className="flex items-center gap-4 mt-2">
                  {footerItem.icon.map((item, idx) => {
                    const IconComponent = icons[item.name];
                    return (
                      <Link
                        key={idx}
                        href={item.href}
                        target="_blank"
                        className="hover:text-gray-300 transition-all"
                      >
                        {IconComponent && <IconComponent size={24} />}
                      </Link>
                    );
                  })}
                </div>
              )}
          </div>
        );
      })}
    </>
  );
}
