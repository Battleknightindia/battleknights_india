'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Trophy, Users, Star, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";

// Local Types
interface TournamentStat {
    label: string;
    value: string;
    icon: React.ReactNode;
    color: string;
}

interface TournamentItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image_url: string;
    date: string;
    stats: TournamentStat[];
    tags: string[];
}

// Mock Data
const PAST_TOURNAMENTS: TournamentItem[] = [
    {
        id: "ne-cup-2024",
        title: "NorthEast Cup 2024",
        subtitle: "The Regional Showdown",
        description: "A landmark event that brought together 300+ teams from across the 8 sister states. Witnessed record-breaking viewership and the rise of new local legends.",
        image_url: "/feature/banner.webp", // Placeholder, using existing asset
        date: "March 2024",
        tags: ["Regional", "LAN Finals", "Guwahati"],
        stats: [
            { label: "Prize Pool", value: "₹2.5 Lakhs", icon: <Trophy className="w-4 h-4" />, color: "text-amber-400" },
            { label: "Participation", value: "320 Teams", icon: <Users className="w-4 h-4" />, color: "text-blue-400" },
            { label: "Viewership", value: "15k+ Peak", icon: <Star className="w-4 h-4" />, color: "text-emerald-400" },
        ]
    },
    {
        id: "ne-cup-2023",
        title: "Winter Skirmish",
        subtitle: "Season 1 Finale",
        description: "The inaugural season that started it all. Intense 5v5 action that set the standard for collegiate esports in the region.",
        image_url: "/feature/banner.webp", // Placeholder
        date: "December 2023",
        tags: ["Online", "Season 1"],
        stats: [
            { label: "Prize Pool", value: "₹1.0 Lakhs", icon: <Trophy className="w-4 h-4" />, color: "text-amber-400" },
            { label: "Participation", value: "150 Teams", icon: <Users className="w-4 h-4" />, color: "text-blue-400" },
            { label: "Viewership", value: "5k+ Peak", icon: <Star className="w-4 h-4" />, color: "text-emerald-400" },
        ]
    },
    {
        id: "campus-rivals",
        title: "Campus Rivals",
        subtitle: "Inter-University League",
        description: "University vs University. The battle for institutional pride where top colleges clash for supremacy.",
        image_url: "/feature/banner.webp", // Placeholder
        date: "October 2023",
        tags: ["Collegiate", "Varsity"],
        stats: [
            { label: "Prize Pool", value: "₹50,000", icon: <Trophy className="w-4 h-4" />, color: "text-amber-400" },
            { label: "Participation", value: "45 Colleges", icon: <Users className="w-4 h-4" />, color: "text-blue-400" },
            { label: "Format", value: "League", icon: <Trophy className="w-4 h-4" />, color: "text-emerald-400" },
        ]
    }
];

export default function PastWorkSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const activeItem = PAST_TOURNAMENTS[activeIndex];

    const nextSlide = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % PAST_TOURNAMENTS.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + PAST_TOURNAMENTS.length) % PAST_TOURNAMENTS.length);
    };

    return (
        <section className="relative w-full py-28 bg-zinc-950 overflow-hidden font-sans selection:bg-emerald-500/30">

            {/* 1. Immersive Blurred Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeItem.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={activeItem.image_url}
                            alt="Background"
                            fill
                            className="object-cover blur-[100px] scale-110 opacity-50"
                        />
                        <div className="absolute inset-0 bg-zinc-950/80" /> {/* Dark overlay */}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="container relative z-10 mx-auto px-4 lg:px-6 max-w-9xl">

                {/* Section Header */}
                <div className="mb-12 md:mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-xs font-semibold tracking-widest uppercase backdrop-blur-md"
                    >
                        <Trophy className="w-3 h-3 text-emerald-500" />
                        Hall of Legends
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                    >
                        Our Legacy <span className="text-zinc-600">Archived</span>
                    </motion.h2>
                </div>

                {/* Split Layout: Info (Left) & Visual Deck (Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT: Dynamic Info Panel */}
                    <div className="lg:col-span-5 space-y-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeItem.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-6"
                            >
                                {/* Tags & Date */}
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="flex items-center gap-1.5 text-emerald-400 text-sm font-medium bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {activeItem.date}
                                    </span>
                                    {activeItem.tags.map(tag => (
                                        <span key={tag} className="text-zinc-400 text-sm font-medium bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Typography */}
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                                        {activeItem.title}
                                    </h3>
                                    <p className="text-xl text-blue-400 font-medium">{activeItem.subtitle}</p>
                                </div>

                                <div className="h-20">
                                    <p className="text-zinc-400 leading-relaxed text-lg border-l-2 border-zinc-800 pl-4">
                                        {activeItem.description}
                                    </p>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-3 gap-4 py-6">
                                    {activeItem.stats.map((stat, i) => (
                                        <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl backdrop-blur-sm">
                                            <div className={`mb-2 ${stat.color}`}>{stat.icon}</div>
                                            <p className="text-lg font-bold text-white">{stat.value}</p>
                                            <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation Actions */}
                                <div className="flex items-center gap-4 pt-2">
                                    <button
                                        onClick={prevSlide}
                                        className="h-12 w-12 rounded-full border border-zinc-700 bg-zinc-800/50 flex items-center justify-center text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all active:scale-95"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="h-12 w-12 rounded-full border border-zinc-700 bg-zinc-800/50 flex items-center justify-center text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all active:scale-95"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                    <span className="text-zinc-500 text-sm font-medium ml-2">
                                        {activeIndex + 1} / {PAST_TOURNAMENTS.length}
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* RIGHT: Visual Deck (3D Slider) */}
                    <div className="lg:col-span-7 relative h-[300px] lg:h-[450px] flex items-center justify-center perspective-[1000px]">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={activeItem.id}
                                custom={direction}
                                variants={{
                                    enter: (direction: number) => ({
                                        x: direction > 0 ? 1000 : -1000,
                                        opacity: 0,
                                        scale: 0.8,
                                        rotateY: direction > 0 ? 45 : -45,
                                    }),
                                    center: {
                                        zIndex: 1,
                                        x: 0,
                                        opacity: 1,
                                        scale: 1,
                                        rotateY: 0,
                                        transition: { duration: 0.6, type: "spring", bounce: 0.3 }
                                    },
                                    exit: (direction: number) => ({
                                        zIndex: 0,
                                        x: direction < 0 ? 1000 : -1000,
                                        opacity: 0,
                                        scale: 0.8,
                                        rotateY: direction < 0 ? 45 : -45,
                                        transition: { duration: 0.6 }
                                    })
                                }}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute w-full md:w-[600px] aspect-3/2 rounded-2xl overflow-hidden border border-zinc-700/50 shadow-2xl bg-zinc-900 group"
                            >
                                <Image
                                    src={activeItem.image_url}
                                    alt={activeItem.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />

                                {/* Corner Badge */}
                                <div className="absolute bottom-6 right-6">
                                    <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                        <ArrowRight className="w-5 h-5 text-white -rotate-45 group-hover:rotate-0 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}