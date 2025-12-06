"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function BannerAnimation() {
  return (
    <>
      <DotLottieReact
        className="w-[300px] md:w-[600px] md:h-[400px]  h-[200px]"
        src="./animation/banner-crypto.json"
        loop
        autoplay
      />
    </>
  );
}
