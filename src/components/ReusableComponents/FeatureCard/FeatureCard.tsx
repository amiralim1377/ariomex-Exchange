import { FeatureCardProps } from "@/types/FeatureCardProps";
import Image from "next/image";

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center gap-2 p-4">
      <div className="mb-2">
        <Image src={icon} width={80} height={80} alt={title} />
      </div>
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
