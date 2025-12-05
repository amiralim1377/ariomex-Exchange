// "use client";
// import fetchPrices from "@/app/(public)/services/fetchPrices";
// import Coin from "@/types/Coin";
// import { useQuery } from "@tanstack/react-query";
// import CoinRow from "./CoinRow/CoinRow";

// const LatestCryptoCurrencyPrices = () => {
//   const { data, isLoading, isError, error } = useQuery<Coin[]>({
//     queryKey: ["prices"],
//     queryFn: fetchPrices,
//     refetchInterval: 60_000,
//     staleTime: 60_000,
//   });

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error!</div>;

//   return (
//     <div className="bg-mainBg">
//       <section className="container grid grid-cols-6 gap-4">
//         {data?.map((coin) => (
//           <CoinRow key={coin.id} coin={coin} />
//         ))}
//       </section>
//     </div>
//   );
// };

// export default LatestCryptoCurrencyPrices;
