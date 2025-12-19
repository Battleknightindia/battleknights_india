"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, CircleDot } from "lucide-react";
import Image from "next/image";

export default function SeasonHighlight() {
    return (
        <section className="w-full bg-zinc-950 text-zinc-100 py-24 font-sans selection:bg-emerald-500/30 border-t border-zinc-900">
            <div className="container mx-auto px-4 lg:px-6 max-w-[1500px]">

                {/* Decorative Header */}
                <div className="flex items-center gap-4 mb-16 opacity-50">
                    <div className="h-px bg-zinc-700 flex-1" />
                    <span className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-bold">Now Active</span>
                    <div className="h-px bg-zinc-700 flex-1" />
                </div>

                {/* Section Header */}
                <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-widest uppercase backdrop-blur-md"
                        >
                            <CircleDot className="w-3 h-3 text-emerald-500 animate-pulse" />
                            Season 2
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
                        >
                            The Battle <span className="text-zinc-700">Continues</span>
                        </motion.h2>
                    </div>
                </div>

                {/* 12-Column Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 min-h-[600px] lg:h-[700px]">

                    {/* HERO IMAGE CARD */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative col-span-1 lg:col-span-8 rounded-4xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl"
                    >
                        <div className="relative w-full h-full min-h-[400px]">
                            <Image
                                src="/feature/banner.webp"
                                alt="Esports Arena"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            {/* Cinematic Gradients */}
                            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                            <div className="absolute inset-0 bg-linear-to-r from-zinc-950/50 via-transparent to-transparent" />
                        </div>

                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                            <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none mb-4 drop-shadow-lg">
                                PREPARE FOR <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-500">
                                    GLORY
                                </span>
                            </h3>
                            <p className="text-zinc-300 text-lg max-w-xl font-medium drop-shadow-md">
                                The biggest collegiate esports showdown returns. Bigger stage. Higher stakes.
                            </p>
                        </div>
                    </motion.div>

                    {/* SIDEBAR CARDS */}
                    <div className="col-span-1 lg:col-span-4 flex flex-col gap-6 h-full">

                        {/* Status Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 rounded-4xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors flex-1 flex flex-col justify-center gap-6"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-500">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1">Start Date</span>
                                    <span className="text-xl font-bold text-white">Coming Soon</span>
                                </div>
                            </div>
                            <div className="w-full h-px bg-zinc-800" />
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-500">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1">Arena</span>
                                    <span className="text-xl font-bold text-white">Revealing Soon</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Prize Pool Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 rounded-4xl bg-zinc-900 border border-zinc-800 flex-1 flex flex-col justify-center relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_60%)] group-hover:opacity-100 opacity-50 transition-opacity" />
                            <div className="z-10">
                                <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-2">Prize Pool</p>
                                <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-600 tracking-tighter">
                                    EXPANDING
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
