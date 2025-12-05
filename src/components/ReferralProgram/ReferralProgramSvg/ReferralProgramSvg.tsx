import Image from "next/image";

export default function ReferralProgramSvg() {
  return (
    <div className=" max-w-[200px] md:max-w-[400px]">
      <Image
        src="/ReferralProgram/referral.svg"
        width={350}
        height={210}
        alt="ReferralProgramSvg"
        sizes="(max-width: 700px) 100vw, 700px"
      />
    </div>
  );
}
