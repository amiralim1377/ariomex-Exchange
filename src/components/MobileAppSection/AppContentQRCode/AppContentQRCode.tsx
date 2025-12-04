import Image from "next/image";

export default function AppContentQRCode() {
  return (
    <div>
      <Image
        src={"/MobileAppSection/QR-code.png"}
        height={190}
        width={190}
        alt="QR-code"
      />
    </div>
  );
}
