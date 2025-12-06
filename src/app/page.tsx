"use client";
import AuthFeatureSection from "@/components/AuthFeatureSection";
import BannerSection from "@/components/BannerSection";
import ExchangeIntro from "@/components/ExchangeIntro";
import FaqSection from "@/components/FaqSection/FaqSection";
import GuidanceSection from "@/components/GuidanceSection/GuidanceSection";
import HeroSection from "@/components/HeroSection";
import MobileAppSection from "@/components/MobileAppSection";
import PlatformBenefits from "@/components/PlatformBenefits";
import ProfitLossSection from "@/components/ProfitLossSection";
import ReferralProgram from "@/components/ReferralProgram";
import SecurityFeatureCard from "@/components/SecurityFeatureCard";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <BannerSection />

      <MobileAppSection />
      <ReferralProgram />
      <ProfitLossSection />
      <AuthFeatureSection />
      <FaqSection />
      <SecurityFeatureCard />
      <GuidanceSection />
      <PlatformBenefits />
      <ExchangeIntro />
    </div>
  );
}
