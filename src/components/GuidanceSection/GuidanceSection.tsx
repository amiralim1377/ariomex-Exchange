import Image from "next/image";

type GuideStep = {
  icon: string;
  id: number;
  title: string;
  description: string;
};

export default function GuidanceSection() {
  const guidSteps: GuideStep[] = [
    {
      icon: "/guid/guide1.svg",
      id: 1,
      title: "ایجاد حساب کاربری آریومکس",
      description: "همانند حرفه‌ای‌ها معامله کنید",
    },
    {
      icon: "/guid/guide2.svg",
      id: 2,
      title: "تکمیل احراز هویت",
      description: "با تکمیل احراز هویت دسترسی کامل داشته باشید",
    },
    {
      icon: "/guid/guide3.svg",
      id: 3,
      title: "اقدام به واریز نمایید",
      description: "حساب خود را شارژ کنید و معامله نمایید",
    },
    {
      icon: "/guid/guide4.svg",
      id: 4,
      title: "شروع به معامله کنید",
      description: "خرید یا فروش رمزارز",
    },
  ];
  return (
    <div className="guid  ">
      <section className="container  w-full  grid   grid-cols-1    md:grid-cols-2  gap-y-10   ">
        {guidSteps.map((item, i) => (
          <div key={i} className="flex items-center gap-4 w-full">
            <Image src={item.icon} height={75} width={75} alt={item.title} />

            <div className="bg-secondaryBrand hidden w-5 md:flex items-center justify-center h-5 text-xs rounded">
              {item.id}
            </div>

            <div className="flex items-start space-y-2 flex-col">
              <h3 className="text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
