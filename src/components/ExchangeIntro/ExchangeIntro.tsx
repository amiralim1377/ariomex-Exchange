"use client";
import { useState } from "react";
import exchangeIntroData from "@/data/exchangeIntroData";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExchangeIntro() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="bg-mainBg">
      <section className="container">
        {!isVisible && (
          <div>
            <h2 className="text-sm">
              خرید و فروش بیت کوین و سایر ارزهای دیجیتال در صرافی آریومکس
            </h2>
            <p className="text-xs text-muted-foreground">
              آریومکس یک صرافی خرید و فروش بیت کوین و سایر ارزهای دیجیتال است...
            </p>
          </div>
        )}

        <AnimatePresence>
          {isVisible &&
            exchangeIntroData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mb-4"
              >
                <div className="flex flex-col items-center space-y-2  md:items-start">
                  <h2 className="text-sm">{item.title}</h2>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>

        <div className="flex items-center justify-center">
          <motion.button
            onClick={() => setIsVisible(!isVisible)}
            className="mt-4 px-3 py-1"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            {isVisible ? (
              <IconChevronUp
                className="hover:bg-mainBrand hover:rounded"
                stroke={2}
              />
            ) : (
              <IconChevronDown
                className="hover:bg-mainBrand hover:rounded"
                stroke={2}
              />
            )}
          </motion.button>
        </div>
      </section>
    </div>
  );
}
