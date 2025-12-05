import HeroAnimation from "./HeroAnimation/HeroAnimation";
import HeroText from "./HeroText/HeroText";

export default function HeroSection() {
  return (
    <section className="bg-heroSection flex items-center justify-center   h-screen ">
      <section className="container  flex flex-col-reverse lg:flex-row items-center  justify-around text-center">
        <HeroText />

        <HeroAnimation />
      </section>
    </section>
  );
}
