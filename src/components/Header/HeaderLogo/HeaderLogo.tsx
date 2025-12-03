import Image from "next/image";

export default function HeaderLogo({ scrolled }: { scrolled: boolean }) {
  return (
    <div>
      <Image
        src={
          scrolled
            ? "/logo/Ariomex-Dark-Logo.svg"
            : "/logo/Ariomex-Light-Logo.svg"
        }
        width={120}
        height={120}
        alt="logo"
      />
    </div>
  );
}
