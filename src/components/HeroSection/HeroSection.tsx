import HeroAnimation from "./HeroAnimation/HeroAnimation";
import HeroText from "./HeroText/HeroText";

export default function HeroSection() {
  return (
    <section className="bg-heroSection   h-screen ">
      <section className="container  flex flex-col lg:flex-row items-center justify-around text-center">
        <HeroText />

        <HeroAnimation />
      </section>
    </section>
  );
}
