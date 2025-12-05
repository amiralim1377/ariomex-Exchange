import {
  IconClock,
  IconDeviceMobile,
  IconFingerprint,
  IconShieldCheck,
} from "@tabler/icons-react";
import ExchangeFeatureSection from "../ReusableComponents/ExchangeFeatureSection/ExchangeFeatureSection";
import Image from "next/image";

export default function AuthFeatureSection() {
  return (
    <div className="bg-surfaceBg py-6">
      <div className="container flex flex-col   lg:flex-row lg:justify-between items-center">
        <div className="max-w-[200px] md:max-w-[400px]">
          <Image
            src={"/AuthFeatureSection/kyc.svg"}
            height={210}
            width={350}
            alt="ProfitLossSection-svg"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <section>
          <ExchangeFeatureSection
            title="در کمتر از 5 دقیقه شروع کنید"
            features={[
              {
                icon: <IconFingerprint stroke={1} />,
                text: "احراز هویت بیومتریک و سریع",
              },
              {
                icon: <IconShieldCheck stroke={1} />,
                text: "امنیت بالا و جلوگیری از دسترسی غیرمجاز",
              },
              {
                icon: <IconClock stroke={1} />,
                text: "فعال‌سازی و تایید حساب در کمتر از ۵ دقیقه",
              },
              {
                icon: <IconDeviceMobile stroke={1} />,
                text: "پشتیبانی از موبایل و دسکتاپ برای راحتی کاربر",
              },
            ]}
            actions={[{ label: "ثبت نام", href: "/auth/signup" }]}
          />
        </section>
      </div>
    </div>
  );
}
