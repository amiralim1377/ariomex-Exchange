"use client";
import { useScroll } from "@/context/ScrollContext";
import { IconWorld } from "@tabler/icons-react";
export default function LanguageSwitcher() {
  const { scrolled } = useScroll();

  return (
    <div className="hidden lg:block">
      {scrolled ? (
        <IconWorld color="white" stroke={2} />
      ) : (
        <IconWorld stroke={2} />
      )}
    </div>
  );
}
