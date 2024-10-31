import FeaturesList from "@/app/(public)/(landing-pages)/ui/home-page/components/features-list/FeaturesList";
import FeaturesSectionHeading from "@/app/(public)/(landing-pages)/ui/home-page/components/features-section-heading/FeaturesSectionHeading";
import FeaturePages from "@/app/(public)/(landing-pages)/ui/home-page/components/features-pages/FeaturePages";

export default function FeaturesSection() {
  return (
    <div className="flex flex-col py-16 md:py-24 lg:py-44 bg-blue-300">
      <FeaturesSectionHeading />
      <FeaturesList />
      <FeaturePages />
    </div>
  );
}
