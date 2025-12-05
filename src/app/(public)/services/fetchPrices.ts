import Coin from "@/types/Coin";

async function fetchPrices(): Promise<Coin[]> {
  const res = await fetch("/api/prices");
  if (!res.ok) throw new Error("Failed to fetch prices");
  return res.json();
}

export default fetchPrices;
