'use client';

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {

    return (
        <div id="hero" className="relative bg-black selection:bg-emerald-500/30">
            {/* Hero Section */}
            <section
                className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
            >
                {/* 1. Dynamic Background Layers */}
                {/* <div className="absolute inset-0 z-0"> */}
                {/* Abstract Grid Map Effect */}
                {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]" /> */}

                {/* Ambient Glows */}
                {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
                </div> */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen animation-delay-2000" />
                    {/* Grid Pattern Overlay */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
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

                </div>

                {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-zinc-500"
            >
                <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Explore</span>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
            </section>
        </div>
    )
}