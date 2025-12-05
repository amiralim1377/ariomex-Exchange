import { IconBox } from "@tabler/icons-react";
import ExchangeFeatureSection from "../ReusableComponents/ExchangeFeatureSection/ExchangeFeatureSection";
import ReferralProgramSvg from "./ReferralProgramSvg/ReferralProgramSvg";

export default function ReferralProgram() {
  return (
    <div className="flex  bg-surfaceBg py-6 ">
      <div className="container flex flex-col   lg:flex-row lg:justify-between items-center">
        <ReferralProgramSvg />

        {/* <ReferralProgramContent /> */}
        <ExchangeFeatureSection
          title="درآمد پایدار با معرفی دوستان"
          features={[
            {
              icon: <IconBox stroke={1} />,
              text: "امکان تعیین درصد سود از 0 تا 30 درصد",
            },
            {
              icon: <IconBox stroke={1} />,
              text: "سود دو طرفه برای معرفی کننده و معرفی شونده",
            },
            {
              icon: <IconBox stroke={1} />,
              text: "امکان ایجاد 50 کد دعوت بدون نیاز به احراز هویت",
            },
          ]}
          actions={[
            { label: "دعوت از دوستان", href: "/auth/login" },
            { label: "بیشتر بدانید", href: "/help" },
          ]}
        />
      </div>
    </div>
  );
}
