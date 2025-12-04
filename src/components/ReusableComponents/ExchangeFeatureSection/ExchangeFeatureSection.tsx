import Link from "next/link";
import { ReactNode } from "react";

interface Action {
  label: string;
  href: string;
}

interface FeatureItem {
  icon: ReactNode;
  text: string;
}

interface ExchangeFeatureSectionProps {
  title: string;
  features: FeatureItem[];
  actions?: Action[];
}

export default function ExchangeFeatureSection({
  title,
  features,
  actions = [],
}: ExchangeFeatureSectionProps) {
  return (
    <div className="space-y-4 flex flex-col items-center text-center">
      <h2 className="text-xl lg:text-3xl font-medium leading-9">{title}</h2>

      <div className="space-y-2">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2 text-base">
            {feature.icon}
            <p className="text-muted-foreground text-sm text-nowrap md:text-base">
              {feature.text}
            </p>
          </div>
        ))}
      </div>

      {actions.length > 0 && (
        <div className="flex gap-3">
          {actions.map((item, i) => (
            <Link key={i} href={item.href}>
              <button className="px-6 py-1 text-sm border cursor-pointer border-muted-foreground rounded transition-colors hover:bg-accent">
                {item.label}
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
