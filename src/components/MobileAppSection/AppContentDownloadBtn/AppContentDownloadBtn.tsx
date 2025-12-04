"use client";
import Link from "next/link";
import { IconBrandAndroid } from "@tabler/icons-react";
import { IconBrandApple } from "@tabler/icons-react";

export default function AppContentDownloadBtn() {
  const btn = [
    {
      label: "iOS",
      href: "/download",
      icon: <IconBrandApple stroke={1} />,
    },
    {
      label: "اندروید",
      href: "/download",
      icon: <IconBrandAndroid className="text-successBg" stroke={1} />,
    },
  ];

  return (
    <div className="flex gap-4 mt-4">
      {btn.map((item, i) => (
        <Link key={i} href={item.href}>
          <button className="flex items-center cursor-pointer gap-2 px-6 py-1 border border-gray-50  text-white rounded  transition">
            {item.icon}
            <span>{item.label}</span>
          </button>
        </Link>
      ))}
    </div>
  );
}
