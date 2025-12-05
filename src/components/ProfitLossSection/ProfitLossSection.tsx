import { IconChartLine, IconFileText } from "@tabler/icons-react";
import ExchangeFeatureSection from "../ReusableComponents/ExchangeFeatureSection/ExchangeFeatureSection";
import Image from "next/image";

export default function ProfitLossSection() {
  return (
    <div className="bg-mainBg ">
      <div className="container flex flex-col-reverse    lg:flex-row lg:justify-between items-center">
        <section>
          <ExchangeFeatureSection
            title="سود یا زیان، اعداد مهم هستند"
            features={[
              {
                icon: <IconChartLine stroke={1} />,
                text: "گزارش‌دهی روزانه، هفتگی و ماهانه سود و زیان",
              },
              {
                icon: <IconChartLine stroke={1} />,
                text: "نمودار‌های تحلیلی عملکرد معاملات",
              },
              {
                icon: <IconFileText stroke={1} />,
                text: "امکان گزارش‌گیری به صورت فایل اکسل",
              },
            ]}
            actions={[
              { label: "بیشتر بدانید", href: "/help" },
              { label: "سود و زیان", href: "/auth/login" },
            ]}
          />
        </section>
        <div className="max-w-[200px] md:max-w-[400px]">
          <Image
            src={"/ProfitLossSection/pnl.svg"}
            height={210}
            width={350}
            alt="ProfitLossSection-svg"
            layout="responsive"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
}
