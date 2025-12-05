import BannerAnimation from "./BannerAnimation/BannerAnimation";
import BannerText from "./BannerText/BannerText";

export default function BannerSection() {
  return (
    <div className="bg-bannerSection py-6    ">
      <section className="container  flex-col  lg:flex-row justify-between flex items-center">
        <BannerAnimation />
        <BannerText />
      </section>
    </div>
  );
}
