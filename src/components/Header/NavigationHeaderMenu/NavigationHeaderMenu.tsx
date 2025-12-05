"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import navigationMenuList from "@/data/navigationMenuList";

export default function NavigationHeaderMenu() {
  return (
    <NavigationMenu dir="rtl">
      <NavigationMenuList className="flex-wrap">
        {navigationMenuList.map((menuItem) => (
          <NavigationMenuItem key={menuItem.id}>
            {menuItem.hasSubMenu && menuItem.subMenu?.length ? (
              <>
                <NavigationMenuTrigger>{menuItem.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 sm:w-20 md:w-[150px] lg:w-[200px]">
                    {menuItem.subMenu.map((subItem, i) => (
                      <ListItem
                        key={i}
                        title={subItem.label}
                        content={subItem.content}
                        href={subItem.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={menuItem.href || "#"}
                  className={navigationMenuTriggerStyle()}
                >
                  {menuItem.label}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  content,
  href,
}: {
  title: string;
  content: string;
  href: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block rounded-md p-4 hover:bg-muted/50 transition-colors"
        >
          <div className="font-medium text-sm">{title}</div>
          <p className="text-muted-foreground text-xs mt-1 line-clamp-2">
            {content}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
