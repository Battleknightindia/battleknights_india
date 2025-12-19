import React from "react";
import PastWorksHero from "@/components/past_works/past_works_hero";
import NccShowcase from "@/components/past_works/ncc_showcase";
import NecShowcase from "@/components/past_works/nec_showcase";
import CampusEvents from "@/components/past_works/campus_events";
import ProductionShowcase from "@/components/past_works/production_showcase";

export const metadata = {
    title: "Past Works | Hall of Champions - BattleKnights",
    description: "Relive the glory of past BattleKnights tournaments. NCC Season 1, NorthEast Cup, and our legacy of campus events.",
};

export default function PastWorksPage() {
    return (
        <main className="bg-zinc-950 min-h-screen">
            <PastWorksHero />
            <NccShowcase />
            <NecShowcase />
            <CampusEvents />
            <ProductionShowcase />
        </main>
    );
}
