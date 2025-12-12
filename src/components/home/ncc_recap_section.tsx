"use client";

import { motion } from "framer-motion";
import { Users, Eye, Trophy, Globe } from "lucide-react";

const NccRecapSection = () => {
    return (
        <section className="relative w-full py-24 bg-zinc-950 font-sans overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[32px_32px] opacity-20" />
            </div>

            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                {/* Memorial Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-6"
                    >
                        <span className="px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                            Season 1 Report
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6 max-w-4xl"
                    >
                        HISTORY <span className="text-transparent bg-clip-text bg-linear-to-b from-zinc-200 to-zinc-600">WRITTEN</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed font-medium"
                    >
                        From the first match to the final nexus explosion, Season 1 was a testament to the rising power of collegiate esports.
                    </motion.p>
                </div>

                {/* Recap Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Stat Item 1 */}
                    <RecapCard
                        label="Total Viewership"
                        value="120K+"
                        icon={<Eye className="w-5 h-5" />}
                        delay={0.1}
                    />
                    {/* Stat Item 2 */}
                    <RecapCard
                        label="Teams Competed"
                        value="566"
                        icon={<Users className="w-5 h-5" />}
                        delay={0.2}
                    />
                    {/* Stat Item 3 */}
                    <RecapCard
                        label="Universities"
                        value="85+"
                        icon={<Globe className="w-5 h-5" />}
                        delay={0.3}
                    />
                    {/* Stat Item 4 */}
                    <RecapCard
                        label="Prize Distributed"
                        value="₹7.5L"
                        icon={<Trophy className="w-5 h-5" />}
                        delay={0.4}
                    />
                </div>

                {/* Narrative Divider */}
                <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent my-20 opacity-50" />

                <div className="text-center">
                    <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest pl-2 border-l border-emerald-500/50 inline-block">
                        End of Transmission // S1 Archive
                    </p>
                </div>
            </div>
        </section>
    );
};

const RecapCard = ({ label, value, icon, delay }: { label: string, value: string, icon: React.ReactNode, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm overflow-hidden hover:bg-zinc-900/60 transition-colors"
    >
        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity text-emerald-500">
            {icon}
        </div>
        <div className="relative z-10 flex flex-col justify-end h-full min-h-[120px]">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight group-hover:scale-105 transition-transform origin-left duration-500">
                {value}
            </h3>
            <p className="text-sm font-bold text-zinc-500 uppercase tracking-wider group-hover:text-emerald-500/80 transition-colors">
                {label}
            </p>
        </div>
        {/* Hover Gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
);

export default NccRecapSection;
