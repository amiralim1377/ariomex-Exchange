import FeatureCard from "../ReusableComponents/FeatureCard";

export default function PlatformBenefits() {
  return (
    <div className="bg-surfaceBg">
      <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <FeatureCard
          title="بازارهای تومان و تتر"
          description="در بیش از ۲۰۰ بازار معاملاتی خرید و فروش کنید"
          icon="/PlatformBenefits/eco1.svg"
        />
        <FeatureCard
          title="سفارش حدضرر و حدسود"
          description="همزمان دو سفارش برای سود و زیان داشته باشید"
          icon="/PlatformBenefits/eco2.svg"
        />
        <FeatureCard
          title="احراز هویت سریع"
          description="در کمتر از چند دقیقه احراز هویت کرده و شروع به معامله کنید"
          icon="/PlatformBenefits/eco3.svg"
        />
        <FeatureCard
          title="رابط API پیشرفته"
          description="با API آریومکس وارد دنیای معاملات الگوریتمی شوید"
          icon="/PlatformBenefits/eco4.svg"
        />
      </section>
    </div>
  );
}
