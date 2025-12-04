import FeatureCard from "../ReusableComponents/FeatureCard";

export default function SecurityFeatureCard() {
  return (
    <div className="bg-surfaceBg">
      <div className="container">
        <h2 className="md:text-3xl text-center md:text-right text-xl">
          امنیت در آریومکس
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title="نگهداری امن دارایی‌ها"
            description="نگهداری 99 درصد دارایی‌ها در کیف پول سرد-Cold Wallet"
            icon="/SecurityFeatureCard/secure.svg"
          />
          <FeatureCard
            title="نگهداری امن دارایی‌ها"
            description="نگهداری 99 درصد دارایی‌ها در کیف پول سرد-Cold Wallet"
            icon="/SecurityFeatureCard/secure2.svg"
          />
          <FeatureCard
            title="نگهداری امن دارایی‌ها"
            description="نگهداری 99 درصد دارایی‌ها در کیف پول سرد-Cold Wallet"
            icon="/SecurityFeatureCard/secure3.svg"
          />
          <FeatureCard
            title="نگهداری امن دارایی‌ها"
            description="نگهداری 99 درصد دارایی‌ها در کیف پول سرد-Cold Wallet"
            icon="/SecurityFeatureCard/secure4.svg"
          />
        </section>
      </div>
    </div>
  );
}
