"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import navigationMenuList from "../navigation";
import Link from "next/link";

export default function NavigationHeaderMenu() {
  return (
    <NavigationMenu dir="rtl">
      <NavigationMenuList className="flex-wrap">
        {navigationMenuList.map((menuItem) => (
          <NavigationMenuItem key={menuItem.id}>
            {menuItem.hasSubMenu ? (
              <>
                <NavigationMenuTrigger>{menuItem.label}</NavigationMenuTrigger>
                {menuItem.subMenu && menuItem.subMenu.length > 0 && (
                  <NavigationMenuContent>
                    {menuItem.subMenu.map((subItem, i) => (
                      <NavigationMenuLink key={i} asChild>
                        <Link href={subItem.href}> {subItem.label}</Link>
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                )}
              </>
            ) : (
              <NavigationMenuLink href={menuItem.href || "#"}>
                {menuItem.label}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
