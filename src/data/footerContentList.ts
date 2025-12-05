import FooterItem from "@/types/footerTypes";

const footerContentList: FooterItem[] = [
  {
    id: 1,
    footerTitle: "درباره ما",
    hasFooterContent: true,
    footerContent: [
      {
        title: "درباره آریومکس",
        href: "/about-us",
      },
      {
        title: "بلاگ آریومکس",
        href: "/blog",
      },
      {
        title: "قوانین و مقررات",
        href: "/terms",
      },
      {
        title: "سلب مسئولیت",
        href: "disclaimer",
      },
      {
        title: "بیانیه افشای ریسک",
        href: "/risk-disclosure",
      },
      {
        title: "حفظ حریم شخصی",
        href: "/privacy",
      },
    ],
    hasIcon: false,
    icon: undefined,
  },
  {
    id: 2,
    footerTitle: "راهنما",
    hasFooterContent: true,
    footerContent: [
      {
        title: "اطلاعیه ها",
        href: "/announcements",
      },
      {
        title: "راهنمای آریومکس",
        href: "/help",
      },
      {
        title: "پرسش های متداول",
        href: "/ariomex-faq",
      },
      {
        title: "راهنمای خرید و فروش",
        href: "/markets-trades-orders",
      },
      {
        title: "راهنمای احراز هویت",
        href: "/account/kyc/kyc/",
      },
      {
        title: "راهنمای واریز و برداشت",
        href: "/deposits-withdrawals",
      },
    ],
    hasIcon: false,
    icon: undefined,
  },
  {
    id: 3,
    footerTitle: "خدمات",
    hasFooterContent: true,
    footerContent: [
      {
        title: "مستنداتAPI ",
        href: "/https://apidoc.ariomex.com/#ariomex-api",
      },
      {
        title: "وضعیت واریز و برداشت",
        href: "/fee/deposit-withdraw",
      },
      {
        title: "ابزارک ها",
        href: "//widgets",
      },
      {
        title: "ربات تلگرام",
        href: "/https://t.me/Ariomex_bot",
      },
    ],
    hasIcon: false,
    icon: undefined,
  },
  {
    id: 4,
    footerTitle: "امنیت",
    hasFooterContent: true,
    footerContent: [
      {
        title: "کد دوعاملی",
        href: "/auth/login",
      },
      {
        title: "کیف پول سرد",
        href: "/help",
      },
      {
        title: "احراز هویت",
        href: "/help",
      },
    ],
    hasIcon: false,
    icon: undefined,
  },
  {
    id: 5,
    footerTitle: "خرید و فروش",
    hasFooterContent: true,
    footerContent: [
      {
        title: "بازار حرفه ای",
        href: "/trade/btc-irt",
      },
      {
        title: "بازار OTC",
        href: "/auth/login",
      },
      {
        title: "کارمزد واریز و برداشت",
        href: "/fee/deposit-withdraw",
      },
      {
        title: "کارمزد معاملات",
        href: "/fee/trade",
      },
      {
        title: "شرایط معامله",
        href: "/trade-rules",
      },

      {
        title: "خرید تتر",
        href: "/trade/usdt-irt",
      },
      {
        title: "خرید بیت کوین",
        href: "/btc-irt",
      },
      {
        title: "خرید اتریوم",
        href: "/trade/eth-irt",
      },
    ],
    hasIcon: false,
    icon: undefined,
  },
  {
    id: 6,
    footerTitle: "تماس با ما",
    hasFooterContent: true,
    footerContent: [
      {
        title: "support [at] ariomex [dot] com",
        href: "support [at] ariomex [dot] com",
      },
      {
        title: "021-91035089",
        href: "021-91035089",
      },
    ],
    hasIcon: false,
    icon: undefined,
  },
  {
    id: 7,
    footerTitle: "شبکه‌های اجتماعی",
    hasFooterContent: false,
    footerContent: [],
    hasIcon: true,
    icon: [
      { name: "instagram", href: "https://instagram.com/ariomex" },
      { name: "telegram", href: "https://t.me/ariomex" },
      { name: "linkedin", href: "https://instagram.com/ariomex_exchange" },
      { name: "github", href: "https://github.com/ariomex" },
    ],
  },
];

export default footerContentList;
