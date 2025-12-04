import Image from "next/image";

export default function ReferralProgramSvg() {
  return (
    <div>
      <Image
        src="/ReferralProgram/referral.svg"
        width={350}
        height={210}
        alt="ReferralProgramSvg"
        sizes="(max-width: 768px) 100vw, 33vw"
        layout="responsive"
      />
    </div>
  );
}
