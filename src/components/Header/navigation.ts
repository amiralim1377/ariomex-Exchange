const navigationMenuList = [
  {
    id: 1,
    label: "معامله",
    icon: "test",
    href: "/trade/btc-irt",
    hasSubMenu: true,
    subMenu: [
      {
        label: "بازار حرفه ای",
        content: "ابزارهای پیشرفته معاملاتی",
        href: "/trade/btc-irt",
        icon: "",
      },
      {
        label: "بازار OTC",
        content: "تبدیل سریع رمزارز",
        href: "/otc",
        icon: "",
      },
      {
        label: "ماشین حساب",
        content: "ماشین حساب",
        href: "/calculator",
        icon: "",
      },
    ],
  },
  {
    id: 2,
    label: "قیمت ارز های دیجیتال",
    icon: "d",
    hasSubMenu: true,
    subMenu: [
      {
        label: "قیمت لحظه ای رمز ارزها",
        content: "مشاهده تمامی بازار ها",
        href: "/services/currency",
        icon: "",
      },
      {
        label: "قیمت بیت کوین",
        content: "قیمت لحظه ای بیت کوین",
        href: "/services/payment",
        icon: "",
      },
      {
        label: "قیمت اتریوم",
        content: "قیمت لحظه ای اتریوم",
        href: "/services/global",
        icon: "",
      },
      {
        label: "قیمت تتر",
        content: "قیمت لحظه ای تتر",
        href: "/services/global",
        icon: "",
      },
      {
        label: "نقشه بازار",
        content: "مشاهده بازار در نمودار",
        href: "/services/global",
        icon: "",
      },
    ],
  },
  {
    id: 3,
    label: "بلاگ",
    icon: "",
    href: "/blog",
    hasSubMenu: false,
    subMenu: [],
  },
  {
    id: 4,
    label: "راهنما",
    href: "/help",
    icon: "",
    hasSubMenu: false,
    subMenu: [],
  },
];

export default navigationMenuList;
