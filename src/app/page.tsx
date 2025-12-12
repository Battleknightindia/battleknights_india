import AboutSection from "@/components/home/about_section";
import CosplaySection from "@/components/home/cosplay_section";
import FeaturedSection from "@/components/home/feature_section";
import NccWinnerSection from "@/components/home/ncc_winner_section";
import NccRecapSection from "@/components/home/ncc_recap_section";
import HeroSection from "@/components/home/hero_section";
import PastWorkSection from "@/components/home/past_work_section";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturedSection />
      <NccWinnerSection />
      <NccRecapSection />
      <PastWorkSection />
      <CosplaySection />
      <AboutSection />
    </div>
  );
}
