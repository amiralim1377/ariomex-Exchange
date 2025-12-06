import Image from "next/image";

export default function AppSectionImage() {
  return (
    <div className="max-w-[350px]  md:max-w-[450px] lg:max-w-[650px]">
      <Image
        src={"./MobileAppSection/mobile.webp"}
        width={550}
        height={500}
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ width: "100%", height: "auto" }}
        alt="AppSectionImage"
      />
    </div>
  );
}
