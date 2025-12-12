"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, PlayCircle, Trophy, Users, Swords, CircleDot } from "lucide-react";
import Image from "next/image";

const FeaturedSection = () => {
    return (
        <section id="features" className="w-full bg-zinc-950 text-zinc-100 py-12 md:py-20 font-sans selection:bg-emerald-500/30">
            {/* Wider container for "Theater Mode" */}
            <div className="container mx-auto px-4 lg:px-6 py-24 max-w-[1500px]">
                {/* Section Header */}
                <div className="mb-12 md:mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-xs font-semibold tracking-widest uppercase backdrop-blur-md"
                    >
                        <CircleDot className="w-3 h-3 text-emerald-500 animate-pulse" />
                        Next Chapter
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                    >
                        The Battle <span className="text-zinc-600">Continues</span>
                    </motion.h2>
                </div>

                {/* 12-Column Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 min-h-[600px] lg:h-[750px]">

                    {/* LEFT COLUMN: THE STAGE (Hero Visual) - Spans 9 cols */}
                    <div className="group relative col-span-1 lg:col-span-9 flex flex-col lg:block rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.5)]">

                        {/* Image Wrapper */}
                        <div className="relative w-full aspect-video lg:absolute lg:inset-0 lg:h-full lg:aspect-auto">
                            <Image
                                src="/feature/banner.webp"
                                alt="Esports Arena"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                                priority
                            />
                            {/* Cinematic Gradients */}
                            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />
                            <div className="absolute inset-0 bg-linear-to-r from-zinc-950/80 via-transparent to-transparent opacity-80" />
                        </div>

                        {/* Main Title / Content (Below on Mobile, Overlay on Desktop) */}
                        <div className="relative p-6 pt-0 sm:pt-6 lg:p-12 lg:absolute lg:bottom-0 lg:left-0 z-20 max-w-4xl bg-zinc-900 lg:bg-transparent">
                            <div className="flex items-center gap-3 mb-4 opacity-100 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500">
                                <span className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/20 uppercase tracking-widest">Season 2</span>
                                <span className="px-3 py-1 rounded bg-zinc-800/80 text-zinc-300 text-xs font-bold border border-white/10 uppercase tracking-widest">Upcoming</span>
                            </div>
                            <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
                                PREPARE FOR <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-emerald-200 to-blue-500">
                                    GLORY
                                </span>
                            </h3>
                            <p className="mt-4 lg:mt-6 text-base sm:text-lg lg:text-2xl text-zinc-300 max-w-2xl font-medium leading-relaxed drop-shadow-md">
                                The biggest collegiate esports showdown returns. <br className="hidden lg:block" />
                                Bigger stage. Higher stakes.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: THE DASHBOARD (Stats & Actions) - Spans 3 cols */}
                    <div className="col-span-1 lg:col-span-3 flex flex-col gap-4 h-full">

                        {/* 1. Date & Location Module */}
                        <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-center gap-4 relative overflow-hidden group/card hover:border-zinc-700 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 shadow-inner">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-0.5">Start Date</span>
                                    <span className="text-lg font-semibold text-zinc-300">Coming Soon</span>
                                </div>
                            </div>
                            <div className="w-full h-px bg-zinc-800/50" />
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 shadow-inner">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-0.5">Arena</span>
                                    <span className="text-lg font-semibold text-zinc-300">Revealing Soon</span>
                                </div>
                            </div>
                        </div>

                        {/* 2. Stats Module (Hype) */}
                        <div className="flex-1 p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-center relative overflow-hidden group/stats">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent_50%)]" />

                            <div className="z-10 text-center space-y-4">
                                <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest">Prize Pool</p>
                                <p className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-zinc-200 to-zinc-600 tracking-tighter">
                                    EXPANDING
                                </p>
                            </div>
                        </div>

                        {/* 3. Actions Module (Passive) */}
                        <div className="p-6 rounded-2xl bg-zinc-950/50 border border-zinc-900 flex items-center justify-center text-center">
                            <p className="text-zinc-400 font-medium text-sm">
                                <span className="text-emerald-500 font-bold">Stay Tuned.</span> The arena awaits your arrival.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;