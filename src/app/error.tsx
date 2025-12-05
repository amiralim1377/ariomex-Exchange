"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4 animate-pulse">⚠️</h1>
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        خطایی رخ داد!
      </h2>
      <p className="text-gray-600 mb-6 max-w-sm">
        متاسفانه مشکلی در بارگذاری این بخش پیش آمده. لطفاً دوباره تلاش کنید یا
        بعداً مراجعه کنید.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-mainBrand text-white rounded-md hover:bg-mainBrand/90 transition"
      >
        تلاش مجدد
      </button>
    </div>
  );
}
