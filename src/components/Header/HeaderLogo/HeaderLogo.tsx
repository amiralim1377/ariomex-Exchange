import { useScroll } from "@/context/ScrollContext";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function HeaderLogo() {
  const { scrolled } = useScroll();

  const { resolvedTheme } = useTheme();

  return (
    <div>
      <Image
        src={
          scrolled
            ? "/logo/Ariomex-Dark-Logo.svg"
            : resolvedTheme !== "dark"
            ? "/logo/Ariomex-Light-Logo.svg"
            : "/logo/Ariomex-Dark-Logo.svg"
        }
        width={150}
        height={150}
        alt="logo"
      />
    </div>
  );
}
