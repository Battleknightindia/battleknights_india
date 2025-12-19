"use client";

import { motion } from "framer-motion";
import { Calendar, Trophy, Timer, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function FeaturedEvent() {
    return (
        <section className="py-12 bg-zinc-950 font-sans">
            <div className="container mx-auto px-4 lg:px-6">

                <div className="mb-10 flex items-center gap-4">
                    <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm">Major Event Spotlight</span>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl group"
                >
                    {/* Background Image / Parallax */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10" />
                        <Image
                            src="/feature/banner.webp"
                            alt="Season 2 Banner"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                        />
                    </div>

                    <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16">

                        {/* Info Column */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/20 uppercase tracking-widest">
                                Season 2
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                                COLLEGIATE <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-500">
                                    WARZONE
                                </span>
                            </h2>

                            <p className="text-zinc-300 text-lg md:text-xl font-medium max-w-lg leading-relaxed">
                                The ultimate proving ground returns. Universities across the nation battle for glory, scholarships, and the championship cup.
                            </p>

                            <div className="flex flex-col gap-6 pt-4">
                                <div className="flex items-center gap-4 text-zinc-300">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                        <Trophy className="w-6 h-6 text-yellow-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-zinc-500 font-bold">Prize Pool</p>
                                        <p className="text-xl font-bold font-mono">₹ 1,00,000+</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-zinc-300">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                        <Calendar className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-zinc-500 font-bold">Date</p>
                                        <p className="text-xl font-bold">June 2025</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-emerald-400 transition-colors flex items-center gap-2">
                                    Register Team
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <p className="mt-4 text-zinc-500 text-sm flex items-center gap-2">
                                    <Timer className="w-4 h-4" />
                                    Registration closes in 24 days
                                </p>
                            </div>
                        </div>

                        {/* Visual/Stats Column (Hidden on mobile maybe? No, let's keep it stacked) */}
                        <div className="hidden lg:flex items-end justify-end">
                            <div className="p-8 rounded-3xl bg-zinc-950/50 border border-white/10 backdrop-blur-md max-w-sm w-full space-y-6">
                                <div>
                                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">Format</p>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-zinc-300">
                                            <Star className="w-4 h-4 text-emerald-500" />
                                            <span className="font-medium">5v5 MOBA</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-zinc-300">
                                            <Star className="w-4 h-4 text-emerald-500" />
                                            <span className="font-medium">Online Qualifiers</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-zinc-300">
                                            <Star className="w-4 h-4 text-emerald-500" />
                                            <span className="font-medium">LAN Finals (Mumbai)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-px bg-white/10" />
                                <div>
                                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Previous Winner</p>
                                    <p className="text-white font-bold text-lg">Team Vengeance</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
