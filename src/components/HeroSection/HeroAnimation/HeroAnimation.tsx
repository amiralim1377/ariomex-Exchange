"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function HeroAnimation() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "./animation/crypto.json",
    });

    return () => anim.destroy();
  }, []);

  return (
    <div
      ref={container}
      className=" w-[300px] h-[300px] md:h-[350px] md:w-[350px]  lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]"
    ></div>
  );
}
