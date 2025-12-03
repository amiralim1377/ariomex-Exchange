import Link from "next/link";

export default function HeroText() {
  return (
    <div className="flex flex-col items-center space-y-4 lg:items-start">
      <h1 className=" mt-8 md:mt-0 text-2xl lg:text-5xl">
        صرافی ارز دیجیتال آریومکس
      </h1>
      <h2 className="text-xs lg:text-2xl text-muted-foreground ">
        بازار آنلاین و معتبر خرید و فروش ارزهای دیجیتال
      </h2>
      <Link className="" href={"/auth/signup"}>
        <button className="px-4 py-2 rounded  bg-mainBrand text-white hover:bg-mainBrandAlternative">
          ثبت نام
        </button>
      </Link>
      <p className="text-muted-foreground hidden md:block  text-xs">
        در کمتر از چند دقیقه ثبت‌نام، احراز هویت و شروع به معامله کنید
      </p>
    </div>
  );
}
