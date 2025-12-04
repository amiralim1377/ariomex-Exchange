import { IconBox } from "@tabler/icons-react";
import Link from "next/link";

export default function ReferralProgramContent() {
  const btn = [
    { label: "دعوت از دوستان", href: "/auth/login" },
    { label: "بیشتر بدانید", href: "/help" },
  ];
  return (
    <div className="space-y-4 flex  flex-col items-center">
      <h2 className=" text-xl lg:text-3xl font-medium leading-9 ">
        درآمد پایدار با معرفی دوستان
      </h2>
      <div className="space-y-2">
        <div className="flex text-base  items-center gap-2">
          <IconBox stroke={1} />
          <p className="text-muted-foreground ">
            امکان تعیین درصد سود از 0 تا 30 درصد
          </p>
        </div>
        <div className="flex text-base  items-center gap-2">
          <IconBox stroke={1} />
          <p className="text-muted-foreground ">
            سود دو طرفه برای معرفی کننده و معرفی شونده
          </p>
        </div>
        <div className="flex text-base  items-center gap-2">
          <IconBox stroke={1} />
          <p className="text-muted-foreground ">
            امکان ایجاد 50 کد دعوت بدون نیاز به احراز هویت
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        {btn.map((item, i) => (
          <Link key={i} href={item.href}>
            <button className="px-6 py-1 text-sm border cursor-pointer border-muted-foreground rounded transition-colors hover:bg-accent">
              {item.label}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
