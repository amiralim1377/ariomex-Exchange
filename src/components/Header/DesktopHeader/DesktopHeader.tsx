"use client";
import { useEffect, useState } from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import NavigationHeaderMenu from "../NavigationHeaderMenu/NavigationHeaderMenu";
import LoginSignUpButton from "../LoginSignUpButton/LoginSignUpButton";

export default function DesktopHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`hidden lg:block sticky top-0 w-full z-50 transition-colors duration-500 backdrop-blur-md ${
        scrolled ? "bg-black bg-opacity-90" : "bg-transparent"
      }`}
    >
      <div className="flex items-center p-6 justify-between">
        <section className="flex items-center gap-4">
          <HeaderLogo scrolled={scrolled} />
          <NavigationHeaderMenu />
        </section>

        <section className="flex items-center gap-4">
          <LoginSignUpButton />
          <span>دارک مود / لایت مود</span>
          <span>زبان سایت</span>
        </section>
      </div>
    </header>
  );
}
