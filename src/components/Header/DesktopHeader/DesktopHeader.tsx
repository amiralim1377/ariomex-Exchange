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
      className={`hidden bg-heroSection lg:block sticky top-0 w-full z-50 transition-colors duration-500 backdrop-blur-md ${
        scrolled ? "bg-black bg-opacity-90" : "bg-transparent"
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
