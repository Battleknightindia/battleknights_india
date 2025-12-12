import AboutSection from "@/components/home/about_section";
import CosplaySection from "@/components/home/cosplay_section";
import FeaturedSection from "@/components/home/feature_section";
import HeroSection from "@/components/home/hero_section";
import PastWorkSection from "@/components/home/past_work_section";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturedSection />
      <PastWorkSection />
      <CosplaySection />
      <AboutSection />
    </div>
  );
}
