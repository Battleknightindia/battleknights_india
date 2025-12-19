"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Gamepad2, ArrowUpRight } from "lucide-react";

interface Event{
    id: number
    title: string
    type: string
    date: string
    format: "Online" | "LAN" | "Hybrid"
    prize: string
    status: "Open" | "Registering" | "Upcoming"
}

// Mock Data
const EVENTS: Event[] = [
    {
        id: 1,
        title: "Community Scrims #42",
        type: "Community",
        date: "This Weekend",
        format: "Online",
        prize: "₹ 5,000",
        status: "Open"
    },
    {
        id: 2,
        title: "IIT TechFest Cup",
        type: "Campus",
        date: "Dec 20, 2024",
        format: "Hybrid",
        prize: "₹ 25,000",
        status: "Registering"
    },
    {
        id: 3,
        title: "Rookie Draft Series",
        type: "Community",
        date: "Jan 05, 2025",
        format: "Online",
        prize: "Mentorship",
        status: "Upcoming"
    },
    {
        id: 4,
        title: "Winter LAN Party",
        type: "Campus",
        date: "Jan 15, 2025",
        format: "LAN",
        prize: "Trophies",
        status: "Upcoming"
    }
];

const EventCard = ({ event }: { event: Event }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="group p-6 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col h-full"
    >
        <div className="flex justify-between items-start mb-6">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${event.type === 'Campus' ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' :
                    'bg-orange-500/10 text-orange-400 border-orange-500/20'
                }`}>
                {event.type}
            </span>
            {event.status === 'Open' || event.status === 'Registering' ? (
                <span className="flex items-center gap-1.5 text-emerald-500 text-xs font-bold uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                </span>
            ) : (
                <span className="text-zinc-600 text-xs font-bold uppercase">Soon</span>
            )}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{event.title}</h3>

        <div className="space-y-3 mb-6 flex-1">
            <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <Gamepad2 className="w-4 h-4" />
                <span>{event.format}</span>
            </div>
        </div>

        <div className="pt-6 border-t border-zinc-800 flex items-center justify-between">
            <div>
                <p className="text-xs text-zinc-500 font-bold uppercase">Prize</p>
                <p className="text-zinc-300 font-mono font-bold">{event.prize}</p>
            </div>
            <button className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white group-hover:bg-emerald-500 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
            </button>
        </div>
    </motion.div>
);

export default function EventsCalendar() {
    const [filter, setFilter] = useState("All");

    const filteredEvents = filter === "All"
        ? EVENTS
        : EVENTS.filter(e => e.type === filter);

    return (
        <section className="py-24 bg-zinc-950 font-sans border-t border-zinc-900">
            <div className="container mx-auto px-4 lg:px-6">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                            Upcoming Roadmap
                        </h2>
                        <p className="text-zinc-400 max-w-lg">
                            Stay up to date with our community events, daily scrims, and campus takeovers.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex p-1 rounded-xl bg-zinc-900 border border-zinc-800">
                        {['All', 'Community', 'Campus'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab)}
                                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${filter === tab
                                        ? 'bg-zinc-800 text-white shadow-lg'
                                        : 'text-zinc-500 hover:text-zinc-300'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    <AnimatePresence>
                        {filteredEvents.map(event => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredEvents.length === 0 && (
                    <div className="py-20 text-center text-zinc-600">
                        <p>No events found for this category.</p>
                    </div>
                )}

            </div>
        </section>
    );
}
