"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, MapPin, Calendar, ChevronLeft, ChevronRight, Trophy, Diamond, Users } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const CAMPUS_EVENTS = [
    {
        id: "ecclesia",
        title: "Ecclesia 3.0",
        location: "Assam Down Town University",
        date: "Nov 2025",
        subtitle: "The Varsity Showdown",
        description: "A true clash of legacies on campus. Where elite collegiate teams clashed in high-stakes MOBA Legend 5v5 combat.",
        stats: [
            { label: "Prize", value: "₹ 20k", icon: Trophy, color: "text-yellow-400" },
            { label: "Diamonds", value: "10k", icon: Diamond, color: "text-blue-400" },
            { label: "Teams", value: "32", icon: Users, color: "text-emerald-400" },
        ],
        images: [
            "/tournaments/Ecc/Ecc_1.webp",
            "/tournaments/Ecc/Ecc_2.webp",
            "/tournaments/Ecc/Ecc_3.webp",
        ]
    },
    {
        id: "transformation",
        title: "Transformation 2025",
        location: "SRM University Sikkim",
        date: "Oct 2025",
        subtitle: "Innovation Meets Competition",
        description: "Where innovation met competition. Fused cutting-edge technology with fierce esports glory.",
        stats: [
            { label: "Prize", value: "₹ 15k", icon: Trophy, color: "text-yellow-400" },
            { label: "Diamonds", value: "10k", icon: Diamond, color: "text-blue-400" },
            { label: "Teams", value: "24", icon: Users, color: "text-emerald-400" },
        ],
        images: [
            "/tournaments/Srm/SRM_1.webp",
            "/tournaments/Srm/SRM_2.webp",
            "/tournaments/Srm/SRM_3.webp",
        ]
    },
    {
        id: "sankardev",
        title: "SankarDev College Cup",
        location: "Shillong",
        date: "Oct 2025",
        subtitle: "The Hills Awakening",
        description: "A grassroots spectacle. Transforming the tech fest into a hallowed LAN ground.",
        stats: [
            { label: "Prize", value: "₹ 10k", icon: Trophy, color: "text-yellow-400" },
            { label: "Diamonds", value: "5k", icon: Diamond, color: "text-blue-400" },
            { label: "Teams", value: "16", icon: Users, color: "text-emerald-400" },
        ],
        images: [
            "/tournaments/Sdc/SDC_1.jpg",
            "/tournaments/Sdc/SDC_2.jpg",
            "/tournaments/Sdc/SDC_5.jpg",
        ]
    }
];

export default function CampusEvents() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const activeEvent = CAMPUS_EVENTS[activeIndex];

    // Auto-cycle images (Gallery)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % activeEvent.images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [activeEvent]);

    const nextEvent = () => {
        setActiveIndex((prev) => (prev + 1) % CAMPUS_EVENTS.length);
        setCurrentImageIndex(0);
    };

    const prevEvent = () => {
        setActiveIndex((prev) => (prev - 1 + CAMPUS_EVENTS.length) % CAMPUS_EVENTS.length);
        setCurrentImageIndex(0);
    };

    return (
        <section className="relative py-24 bg-zinc-950 font-sans border-b border-zinc-900 overflow-hidden min-h-[800px] flex items-center">

            {/* Background Blur derived from active event */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={activeEvent.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={activeEvent.images[0]}
                        alt="Background"
                        fill
                        className="object-cover blur-[100px]"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="container mx-auto px-4 lg:px-6 relative z-10 text-white">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                            <GraduationCap className="w-3.5 h-3.5" />
                            <span>Campus Takeover</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
                            COMMUNITY <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">ROOTS</span>
                        </h2>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center gap-4">
                        <button onClick={prevEvent} className="p-4 rounded-full bg-zinc-900/50 border border-zinc-700 hover:bg-white hover:text-black transition-all group">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button onClick={nextEvent} className="p-4 rounded-full bg-zinc-900/50 border border-zinc-700 hover:bg-white hover:text-black transition-all group">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Main Showcase Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Visual Side (Large Gallery) */}
                    <div className="lg:col-span-7 relative aspect-video md:aspect-16/10 rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl group">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${activeEvent.id}-${currentImageIndex}`}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={activeEvent.images[currentImageIndex]}
                                    alt={activeEvent.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent" />
                            </motion.div>
                        </AnimatePresence>

                        <div className="absolute bottom-8 right-8 flex gap-2">
                            {activeEvent.images.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Info Side */}
                    <div className="lg:col-span-5 space-y-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeEvent.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <span className="px-3 py-1 rounded bg-zinc-800 text-zinc-400 text-xs font-bold uppercase tracking-widest border border-zinc-700 flex items-center gap-2">
                                        <MapPin className="w-3 h-3" /> {activeEvent.location}
                                    </span>
                                    <span className="px-3 py-1 rounded bg-zinc-800 text-zinc-400 text-xs font-bold uppercase tracking-widest border border-zinc-700 flex items-center gap-2">
                                        <Calendar className="w-3 h-3" /> {activeEvent.date}
                                    </span>
                                </div>

                                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-2">
                                    {activeEvent.title}
                                </h3>
                                <p className="text-xl text-blue-400 font-bold mb-6">{activeEvent.subtitle}</p>

                                <p className="text-zinc-400 leading-relaxed text-lg border-l-2 border-blue-500/30 pl-6 mb-8">
                                    {activeEvent.description}
                                </p>

                                {/* Event Stats */}
                                <div className="grid grid-cols-3 gap-4">
                                    {activeEvent.stats.map((stat, i) => (
                                        <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl text-center">
                                            <div className={`flex justify-center mb-2 ${stat.color}`}>
                                                <stat.icon className="w-5 h-5" />
                                            </div>
                                            <p className="text-lg font-bold text-white">{stat.value}</p>
                                            <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
