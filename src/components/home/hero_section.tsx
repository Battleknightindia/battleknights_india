'use client';

import { ChevronDown, Trophy, Users, Shield, ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "../ui/button";

export default function HeroSection() {

    return (
        <div id="hero" className="relative bg-zinc-950 selection:bg-emerald-500/30">
            {/* Hero Section */}
            <section
                className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden"
            >
                {/* 1. Dynamic Background Layers */}
                <div className="absolute inset-0 z-0">
                    {/* Abstract Grid Map Effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]" />

                    {/* Ambient Glows */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
                </div>

                {/* 2. Main Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center pt-20">

                    {/* Identity Badge */}
                    <div className="inline-flex mt-10 items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-8 backdrop-blur-md animate-fade-in-up text-center">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                        India&apos;s Premier Competitive Esports Platform
                    </div>

                    {/* Headline - The "Why" */}
                    <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter text-white mb-6 leading-[0.9] drop-shadow-2xl">
                        FORGE YOUR <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-emerald-200 to-blue-500">
                            LEGEND
                        </span>
                    </h1>

                    {/* Subtext - The "What" */}
                    <p className="max-w-2xl mx-auto text-lg sm:text-2xl text-zinc-400 font-medium leading-relaxed mb-10">
                        The ultimate <span className="text-zinc-200">5v5 MOBA battlefield</span> for gamers across India.
                        Gather your squad, prove your skills, and fight for the <span className="text-emerald-400">national championship</span>.
                    </p>

                    {/* Season 2 Hype Badge (Replaced Buttons) */}
                    <div className="mb-16 animate-fade-in">
                        <div className="inline-flex flex-col items-center gap-2 px-8 py-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-md relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500">
                            <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <span className="text-sm font-bold text-emerald-500 uppercase tracking-[0.2em]">Next Chapter</span>
                            <span className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                                SEASON 2 <span className="text-zinc-600">INCOMING</span>
                            </span>
                        </div>
                    </div>

                    {/* Trust Signals / Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-zinc-800/50 pt-10 mt-4 animate-fade-in">
                        <div className="flex flex-col items-center gap-2">
                            <div className="p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-emerald-500 mb-1">
                                <Users className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white tabular-nums">500+</p>
                                <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Teams</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-blue-500 mb-1">
                                <Trophy className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white tabular-nums">₹7.5L</p>
                                <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Prize Pool</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-purple-500 mb-1">
                                <Shield className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white tabular-nums">Pan-India</p>
                                <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Coverage</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-amber-500 mb-1">
                                <span className="font-black text-lg leading-none">S1</span>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white uppercase">Completed</p>
                                <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Tournament</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Scroll Indicator */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                    <ChevronDown className="w-10 h-10 text-zinc-600 opacity-50" />
                </div>
            </section>
        </div>
    )
}