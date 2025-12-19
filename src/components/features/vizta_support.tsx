"use client";

import { motion } from "framer-motion";
import { Gamepad2, Trophy, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function ViztaSupport() {
    return (
        <section className="py-32 bg-zinc-950 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-linear-to-b from-blue-950/10 via-zinc-950 to-zinc-950 pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square md:aspect-4/3 rounded-[2.5rem] bg-linear-to-br from-blue-600 to-indigo-700 p-1 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.3)] overflow-hidden group">
                            <div className="h-full w-full bg-zinc-950 rounded-[2.4rem] relative overflow-hidden flex items-center justify-center">
                                {/* Abstract Game Art Placeholder */}
                                <div className="absolute inset-0 bg-[url('/feature/banner.webp')] bg-cover bg-center opacity-40 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/50 to-blue-900/20" />

                                <div className="relative z-10 text-center p-8">
                                    <div className="w-24 h-24 mx-auto bg-blue-500 rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.5)] mb-6 group-hover:rotate-12 transition-transform duration-500">
                                        <span className="text-4xl font-black text-white">V</span>
                                    </div>
                                    <h3 className="text-3xl font-black text-white tracking-tight">VIZTA</h3>
                                    <p className="text-blue-200 font-medium tracking-wide text-sm mt-1 uppercase">Official Partner</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-8 -right-4 md:right-8 bg-zinc-900 border border-zinc-800 p-4 rounded-2xl shadow-xl flex items-center gap-3 pr-6"
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-zinc-400 font-bold uppercase">Verified</p>
                                <p className="text-white font-bold">Official License</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest"
                        >
                            <Trophy className="w-3.5 h-3.5" />
                            <span>Strategic Alliance</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]"
                        >
                            POWERED BY <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
                                VIZTA GAMES
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-zinc-400 text-lg leading-relaxed max-w-lg"
                        >
                            We are proud to have the official backing of Vizta, creators of the hit phenomenon <strong>Moba Legend 5v5</strong>. This partnership grants us direct API access, exclusive in-game rewards, and a verified pathway for aspiring pros.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <button className="px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group">
                                Explore The Game
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                            <button className="px-6 py-4 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold hover:bg-zinc-800 transition-all flex items-center justify-center gap-2">
                                <Gamepad2 className="w-4 h-4" />
                                Partnership Details
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
