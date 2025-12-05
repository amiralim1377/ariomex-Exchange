"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AppSectionImage from "./AppSectionImage/AppSectionImage";
import AppSectionContent from "./AppSectionContent/AppSectionContent";

export default function MobileAppSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="bg-mainBg  py-6   ">
      <section className=" container   flex flex-col-reverse lg:flex-row items-center  lg:items-start  justify-between">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="">
            <AppSectionContent />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="">
            <AppSectionImage />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
