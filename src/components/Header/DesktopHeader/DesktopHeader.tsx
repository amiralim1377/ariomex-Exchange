"use client";
import { useEffect, useState } from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import NavigationHeaderMenu from "../NavigationHeaderMenu/NavigationHeaderMenu";
import LoginSignUpButton from "../LoginSignUpButton/LoginSignUpButton";
import ModeToggle from "@/components/ModeToggle";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export default function DesktopHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`hidden lg:block sticky top-0 z-50 backdrop-blur-md transition-colors duration-500 ${
        scrolled ? "bg-black/90" : "bg-heroSection"
      }`}
    >
      <div className="flex items-center py-2 px-3 justify-between">
        <section className="flex items-center gap-4">
          <HeaderLogo scrolled={scrolled} />
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
