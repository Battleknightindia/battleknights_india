"use client";

import React from "react";
import Image from "next/image";
import { Target, Globe, Trophy, Zap } from "lucide-react";

const AboutSection = () => {
    return (
        <section id="about-us" className="relative bg-zinc-950 py-16 md:py-24 overflow-hidden border-t border-zinc-900">

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Structured Narrative */}
                    <div className="space-y-12">

                        {/* Header */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-xs font-semibold tracking-widest uppercase mb-6">
                                <Zap className="w-3 h-3 text-amber-500" />
                                Our Identity
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Forging the Future of <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-blue-500">
                                    Mobile Esports in India
                                </span>
                            </h2>
                            <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
                                BattleKnights is India&apos;s premier competitive esports organization. We engineer unforgettable experiences, from grassroots qualifiers to national championship finals.
                            </p>
                        </div>

                        {/* The Three Pillars Grid */}
                        <div className="space-y-8">

                            {/* 1. The Origin */}
                            <div className="flex gap-5 group">
                                <div className="shrink-0 h-12 w-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-500 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors">
                                    <Target className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">The Origin</h3>
                                    <p className="text-zinc-400 leading-relaxed text-sm lg:text-base">
                                        Founded by <span className="text-zinc-200 font-medium">Reinhardt</span>, we stormed the scene with the <span className="text-zinc-200 font-medium">North East Cup</span>.
                                        This landmark LAN event united skilled players from the 8 sister states, placing the region firmly on the esports map.
                                    </p>
                                </div>
                            </div>

                            {/* 2. The Mission */}
                            <div className="flex gap-5 group">
                                <div className="shrink-0 h-12 w-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-500 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-colors">
                                    <Trophy className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">The Mission</h3>
                                    <p className="text-zinc-400 leading-relaxed text-sm lg:text-base">
                                        We are leveling up with the <span className="text-zinc-200 font-medium">National College Cup (NCC)</span>.
                                        Our goal is to provide a rigorous platform for university talent to shine, creating a direct path from campus rivalries to professional glory.
                                    </p>
                                </div>
                            </div>

                            {/* 3. The Future */}
                            <div className="flex gap-5 group">
                                <div className="shrink-0 h-12 w-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500 group-hover:border-amber-500/30 group-hover:bg-amber-500/10 transition-colors">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">The Vision</h3>
                                    <p className="text-zinc-400 leading-relaxed text-sm lg:text-base">
                                        Whether you&apos;re a player or a fan, BattleKnights is building a sustainable ecosystem. We are dedicated to cultivating a vibrant, competitive landscape for the <span className="text-zinc-200 font-medium">MOBA Legends 5v5</span> community.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Column: Visual Totem */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md aspect-square flex items-center justify-center">

                            {/* Decorative Rings */}
                            <div className="absolute inset-0 border border-zinc-800/50 rounded-full animate-[spin_60s_linear_infinite]" />
                            <div className="absolute inset-8 border border-zinc-800/30 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

                            {/* Main Logo with Glow */}
                            <div className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 drop-shadow-[0_0_50px_rgba(16,185,129,0.15)]">
                                <Image
                                    src="/logo/main.png"
                                    alt="BattleKnights Emblem"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Floating Keywords */}
                            <div className="absolute top-10 right-10 px-4 py-2 bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-full text-xs font-bold text-emerald-400 shadow-lg animate-bounce duration-3000">
                                LAN Events
                            </div>
                            <div className="absolute bottom-20 left-0 px-4 py-2 bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-full text-xs font-bold text-blue-400 shadow-lg animate-bounce duration-4000">
                                Online Leagues
                            </div>
                            <div className="absolute bottom-0 right-20 px-4 py-2 bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-full text-xs font-bold text-amber-400 shadow-lg animate-bounce duration-5000">
                                Community
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;