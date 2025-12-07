"use client";
import NavigationHeaderMenu from "../NavigationHeaderMenu/NavigationHeaderMenu";
import LoginSignUpButton from "../LoginSignUpButton/LoginSignUpButton";
import ModeToggle from "@/components/ModeToggle";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useScroll } from "@/context/ScrollContext";
import dynamic from "next/dynamic";
const HeaderLogo = dynamic(
  () => import("@/components/Header/HeaderLogo/HeaderLogo"),
  {
    ssr: false,
  }
);

export default function DesktopHeader() {
  const { scrolled } = useScroll();

  return (
    <header
      className={` lg:block sticky top-0 z-50 backdrop-blur-md transition-colors duration-500 ${
        scrolled ? "bg-black/90" : "bg-heroSection"
      }`}
    >
      <div className="flex items-center py-2 px-3 justify-between">
        <section className="flex items-center gap-4">
          <HeaderLogo />
          <NavigationHeaderMenu />
        </section>

        <section className="flex items-center gap-4">
          <LoginSignUpButton />
          <ModeToggle />
          <LanguageSwitcher />
        </section>
      </div>
    </header>
  );
}
