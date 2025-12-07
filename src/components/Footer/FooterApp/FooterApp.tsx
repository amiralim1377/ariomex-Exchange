import Image from "next/image";
import Link from "next/link";

export default function FooterApp() {
  const appLogo = [
    {
      id: 1,
      label: "گوگل پلی",
      icon: "./FooterApp/Google_Play_2022_icon.svg",
      href: "/https://cafebazaar.ir/app/com.ariomex",
    },
    {
      id: 2,
      label: "سیب آپ",
      icon: "./FooterApp/sibapp-svgrepo-com.svg",
      href: "/https://sibapp.com/applications/AriomexPlus",
    },
    {
      id: 3,
      label: "سیبچه",
      icon: "./FooterApp/default@2x.png",
      href: "/https://sibche.com/applications/ariomex",
    },
    {
      id: 4,
      label: "آی اپس",
      icon: "./FooterApp/iApps.svg",
      href: "/https://iapps.ir/app/ariomex-plus/607584082",
    },
    {
      id: 5,
      label: "سیب ایرانی",
      icon: "./FooterApp/SibIrani.svg",
      href: "/https://sibirani.com/apps/ariomex",
    },
    {
      id: 6,
      label: "بازار",
      icon: "./FooterApp/cafebazaar-svgrepo-com.svg",
      href: "/https://cafebazaar.ir/app/com.ariomex",
    },
    {
      id: 7,
      label: "دانلود فایل APK",
      icon: "./FooterApp/android.webp",
      href: "/https://cdn.ariomex.ir/app/ariomex.apk",
    },
  ];
  return (
    <div className="space-y-3 mt-5">
      <p className="text-sm text-muted-foreground">دانلود اپلیکیشن آریومکس</p>
      <p className="text-muted-foreground text-xs">
        هر آنچه که در بازارهای معاملاتی نیاز دارید
      </p>

      <div className="flex flex-row flex-wrap gap-3 mt-3">
        {appLogo.map((item) => (
          <Link key={item.id} href={item.href}>
            <div className="inline-flex items-center gap-1 bg-mainBrand/20  px-2 py-1 rounded-md  transition duration-300 ease-in-out transform hover:scale-105">
              <p className="text-xs text-mainBrand whitespace-nowrap">
                {item.label}
              </p>
              <Image src={item.icon} width={12} height={12} alt={item.label} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
