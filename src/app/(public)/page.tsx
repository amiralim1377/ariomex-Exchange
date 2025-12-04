import AuthFeatureSection from "@/components/AuthFeatureSection";
import BannerSection from "@/components/BannerSection";
import FaqSection from "@/components/FaqSection/FaqSection";
import GuidanceSection from "@/components/GuidanceSection/GuidanceSection";
import HeroSection from "@/components/HeroSection";
import LatestBlogs from "@/components/LatestBlogs";
import LatestCryptoCurrencyPrices from "@/components/LatestCryptoCurrencyPrices";
import MobileAppSection from "@/components/MobileAppSection";
import ProfitLossSection from "@/components/ProfitLossSection/ProfitLossSection";
import ReferralProgram from "@/components/ReferralProgram";
import SecurityFeatureCard from "@/components/SecurityFeatureCard/SecurityFeatureCard";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <BannerSection />
      <LatestBlogs />
      <LatestCryptoCurrencyPrices />
      <MobileAppSection />
      <ReferralProgram />
      <ProfitLossSection />
      <AuthFeatureSection />
      <FaqSection />
      <SecurityFeatureCard />
      <GuidanceSection />
    </div>
  );
}
