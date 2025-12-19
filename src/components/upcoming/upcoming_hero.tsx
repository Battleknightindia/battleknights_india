"use client";

import { motion } from "framer-motion";
import { ChevronDown, CalendarClock } from "lucide-react";

export default function UpcomingHero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
            {/* Ambient Background - Deep Red/Orange for "Battle" feels, or stick to Zinc/Emerald? 
                Sticking to Emerald/Blue/Zinc for consistency but maybe a hint of Amber for "Upcoming/Time"? 
                Let's stay brand consistent: Emerald/Blue/Zinc. 
            */}
            {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] mix-blend-screen animation-delay-2000" /> */}
                {/* Grid Pattern */}
                {/* <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[100px_100px] mask-[radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
            </div> */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen animation-delay-2000" />
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-xs font-bold uppercase tracking-widest backdrop-blur-sm"
                    >
                        <CalendarClock className="w-3.5 h-3.5 text-blue-400" />
                        <span>Tournament Calendar</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter leading-[0.9]">
                        THE ARENA <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-emerald-200 to-blue-500">
                            AWAITS
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
                        Mark your dates. From grassroots skirmishes to grand finals, witness the future of <span className="text-white font-medium">Champions</span>.
                    </p>
                </motion.div>
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
    );
}
