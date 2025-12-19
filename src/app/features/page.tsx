import FeaturesHero from "@/components/features/features_hero";
import CapabilitiesSection from "@/components/features/capabilities_grid";
import ViztaSupport from "@/components/features/vizta_support";
import SeasonHighlight from "@/components/features/season_highlight";

export const metadata = {
  title: "Features | Our Capabilities - BattleKnights",
  description: "Explore the comprehensive esports ecosystem provided by BattleKnights. Production, Streaming, Influencers, and Official Game Support.",
};

export default function FeaturesPage() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <FeaturesHero />
      <CapabilitiesSection />
      <ViztaSupport />
      <SeasonHighlight />
    </main>
  );
}
