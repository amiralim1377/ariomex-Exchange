import ReferralProgramContent from "./ReferralProgramContent/ReferralProgramContent";
import ReferralProgramSvg from "./ReferralProgramSvg/ReferralProgramSvg";

export default function ReferralProgram() {
  return (
    <div className="flex  bg-surfaceBg ">
      <div className="container flex flex-col   lg:flex-row lg:justify-between items-center">
        <ReferralProgramSvg />

        <ReferralProgramContent />
      </div>
    </div>
  );
}
