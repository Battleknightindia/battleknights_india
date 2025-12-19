import React from "react";
import UpcomingHero from "@/components/upcoming/upcoming_hero";
import FeaturedEvent from "@/components/upcoming/featured_event";
import EventsCalendar from "@/components/upcoming/events_calendar";
import NewsletterCTA from "@/components/upcoming/newsletter_cta";

export const metadata = {
    title: "Upcoming Tournaments | BattleKnights Schedule",
    description: "Check out the upcoming BattleKnights esports calendar. Major tournaments, collegiate leagues, and community scrims.",
};

export default function UpcomingPage() {
    return (
        <main className="bg-zinc-950 min-h-screen">
            <UpcomingHero />
            <FeaturedEvent />
            <EventsCalendar />
            <NewsletterCTA />
        </main>
    );
}