"use client";
import { motion } from "framer-motion";
import Coin from "@/types/Coin";
import Image from "next/image";

type Props = {
  coin: Coin;
};

const CoinRow = ({ coin }: Props) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 rounded-lg shadow bg-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* لوگو و نام کوین */}
      <div className="flex items-center gap-2 mb-2">
        <Image
          src={coin.image}
          alt={coin.name}
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="font-semibold">
          {coin.name} ({coin.symbol.toUpperCase()})
        </span>
      </div>

      {/* قیمت و درصد تغییر */}
      <div className="flex items-center gap-2">
        <span>{coin.current_price.toLocaleString()} IRT</span>
        <span
          className={
            coin.price_change_percentage_24h < 0
              ? "text-red-500"
              : "text-green-500"
          }
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </span>
      </div>
    </motion.div>
  );
};

export default CoinRow;
