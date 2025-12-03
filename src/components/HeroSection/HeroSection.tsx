import HeroAnimation from "./HeroAnimation/HeroAnimation";

export default function HeroSection() {
  return (
    <section className="bg-heroSection   h-screen ">
      <section className="container  flex flex-col lg:flex-row items-center justify-around text-center">
        <div>text</div>

        <HeroAnimation />
      </section>
    </section>
  );
}
