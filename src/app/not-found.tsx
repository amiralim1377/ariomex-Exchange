import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">صفحه پیدا نشد</h2>
      <p className="text-gray-600 mb-6">
        منبع درخواستی پیدا نشد یا ممکن است حذف شده باشد
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-mainBrand text-white rounded-md hover:bg-mainBrand/90 transition"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
