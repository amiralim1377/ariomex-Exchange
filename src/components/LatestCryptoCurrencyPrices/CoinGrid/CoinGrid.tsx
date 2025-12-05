"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Coin from "@/types/Coin";
import CoinRow from "../CoinRow/CoinRow";

type Props = {
  coins: Coin[];
};

const CoinGrid = ({ coins }: Props) => {
  const coinsPerPage = 6;
  const [page, setPage] = useState(0);

  // تغییر اتوماتیک هر ۵ ثانیه
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) =>
        prev + 1 < Math.ceil(coins.length / coinsPerPage) ? prev + 1 : 0
      );
    }, 5000); // هر ۵ ثانیه
    return () => clearInterval(interval);
  }, [coins.length]);

  const startIndex = page * coinsPerPage;
  const visibleCoins = coins.slice(startIndex, startIndex + coinsPerPage);

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-6 gap-4"
        >
          {visibleCoins.map((coin) => (
            <CoinRow key={coin.id} coin={coin} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CoinGrid;
