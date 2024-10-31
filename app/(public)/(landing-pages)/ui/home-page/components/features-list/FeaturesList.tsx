import { features } from "@/app/lib/data";
import { Feature } from "@/app/lib/definitions";
import FeatureCard from "@/app/(public)/(landing-pages)/ui/home-page/components/features-card/FeatureCard";

export default function FeaturesList() {
  return (
    <div className="flex flex-col py-16 md:py-24 gap-16 md:gap-24">
      {features.map((feature: Feature, index) => (
        <FeatureCard
          key={index}
          feature={feature}
          className={index === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}
        />
      ))}
    </div>
  );
}
