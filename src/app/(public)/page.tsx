import BannerSection from "@/components/BannerSection";
import HeroSection from "@/components/HeroSection";
import LatestBlogs from "@/components/LatestBlogs";
import LatestCryptoCurrencyPrices from "@/components/LatestCryptoCurrencyPrices";
import MobileAppSection from "@/components/MobileAppSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <BannerSection />
      <LatestBlogs />
      <LatestCryptoCurrencyPrices />
      <MobileAppSection />
    </div>
  );
}
