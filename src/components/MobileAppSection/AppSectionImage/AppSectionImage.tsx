import Image from "next/image";

export default function AppSectionImage() {
  return (
    <div>
      <Image
        src={"/MobileAppSection/mobile.webp"}
        width={550}
        height={500}
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ width: "100%", height: "auto" }}
        alt="AppSectionImage"
      />
    </div>
  );
}
