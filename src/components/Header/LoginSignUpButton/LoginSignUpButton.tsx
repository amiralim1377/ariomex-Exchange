"use client";

import Link from "next/link";

export default function LoginSignUpButton() {
  const buttons = [
    {
      label: "ورود",
      href: "/auth/login",
      className: "border text-sm border-ring  px-5 py-1 rounded  transition",
    },
    {
      label: "ثبت‌ نام",
      href: "/auth/signup",
      className:
        " bg-mainBrand text-white text-sm   px-5 py-1 rounded hover:bg-mainBrandAlternative transition",
    },
  ];

  return (
    <div className="flex gap-3">
      {buttons.map((btn, i) => (
        <Link key={i} href={btn.href} className={btn.className}>
          {btn.label}
        </Link>
      ))}
    </div>
  );
}
