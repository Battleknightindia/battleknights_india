"use client";

import { motion } from "framer-motion";
import { Trophy, Crown, Medal, User } from "lucide-react";
import Image from "next/image";

const NccWinnerSection = () => {
    const winners = [
        {
            rank: 1,
            teamName: "GUWAHATI INSTITUTE OF FASHION TECHNOLOGY",
            players: ["FATE.", "BIDD", "ART?", "ROMCOM", "VANN SATORU"],
            color: "from-yellow-300 to-yellow-500",
            shadow: "shadow-yellow-500/40",
            borderColor: "border-yellow-400",
            iconColor: "text-yellow-400",
            title: "Champions",
            image: "/winners/1.jpg",
            delay: 0,
        },
        {
            rank: 2,
            teamName: "DHANAMANJURI UNIVERSITY",
            players: ["SHENZU", "MADARA", "GODSPEED", "RORO", "YO MOM"],
            color: "from-slate-300 to-slate-400",
            shadow: "shadow-slate-500/20",
            borderColor: "border-slate-300",
            iconColor: "text-slate-300",
            title: "Runner Up",
            image: "/winners/2.jpg",
            delay: 0.2,
        },
        {
            rank: 3,
            teamName: "ENGLISH AND FOREIGN LANGUAGES UNIVERSITY",
            players: ["DARKK", "ABYSSTZY", "MISERYYYY", "LOMLOM MAI!!!", "VIOLE", "ZTADD"],
            color: "from-amber-700 to-amber-600",
            shadow: "shadow-amber-700/20",
            borderColor: "border-amber-700",
            iconColor: "text-amber-700",
            title: "2nd Runner Up",
            image: "/winners/3.jpg",
            delay: 0.3,

        },
    ];

    return (
        <section id="ncc-winners" className="w-full bg-zinc-950 text-zinc-100 py-12 md:py-24 font-sans relative overflow-hidden">
            {/* Background Elements to blend with feature section */}
            <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-zinc-950/80 to-transparent z-10" />

            <div className="container mx-auto px-4 lg:px-6 relative z-20">
                {/* Header - Updated to match site theme */}
                <div className="text-center mb-16 md:mb-24 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold tracking-widest uppercase backdrop-blur-md"
                    >
                        <Trophy className="w-3 h-3" />
                        NCC Season 1 Completed
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter"
                    >
                        HALL OF <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-emerald-200 to-blue-500">CHAMPIONS</span>
                    </motion.h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        The dust has settled, and history has been written. Witness the victors of the National College Cup Season 1.
                    </p>
                </div>

                {/* Winners Grid */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 lg:items-end min-h-[600px]">
                    {winners.map((winner) => (
                        <motion.div
                            key={winner.rank}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: winner.delay, duration: 0.8, type: "spring" }}
                            className={`relative group w-full max-w-md ${winner.rank === 1 ? 'lg:w-[45%] lg:-mt-12 z-20 order-first lg:order-2' :
                                winner.rank === 2 ? 'lg:w-[27.5%] z-10 order-last lg:order-1' :
                                    'lg:w-[27.5%] z-10 order-last lg:order-3'
                                }`}
                        >
                            {/* Card Container */}
                            <div className={`
                                relative overflow-hidden rounded-3xl bg-zinc-900 border-2 ${winner.borderColor} 
                                ${winner.shadow} shadow-2xl transition-transform duration-500 hover:-translate-y-2
                            `}>
                                {/* Image Area */}
                                <div className="relative w-full aspect-1610/2448 bg-zinc-800 group-hover:bg-zinc-800/80 transition-colors">
                                    <Image
                                        src={winner.image}
                                        alt={winner.teamName}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    {/* Gradient Overlay for text readability */}
                                    <div className={`absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90`} />

                                    {/* Color Accent Gradient */}
                                    <div className={`absolute inset-0 bg-linear-to-t ${winner.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay`} />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8">
                                    <div className="flex flex-col items-center text-center space-y-3">
                                        <div className={`
                                            inline-flex items-center justify-center w-12 h-12 rounded-full 
                                            bg-zinc-950 border ${winner.borderColor} ${winner.iconColor} 
                                            mb-2 shadow-lg
                                         `}>
                                            <span className="text-2xl font-black font-mono">#{winner.rank}</span>
                                        </div>

                                        <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tight text-white leading-tight`}>
                                            {winner.teamName}
                                        </h3>

                                        <div className={`
                                            px-4 py-1.5 rounded-full bg-linear-to-r ${winner.color} 
                                            text-black text-xs font-bold uppercase tracking-widest shadow-lg
                                        `}>
                                            {winner.title}
                                        </div>

                                        {/* Player List */}
                                        <div className="flex flex-wrap justify-center gap-1.5 mt-2 opacity-80">
                                            {winner.players.map((player, i) => (
                                                <span key={i} className="text-[10px] font-bold px-2 py-0.5 bg-black/50 rounded border border-white/10 text-zinc-300">
                                                    {player}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default NccWinnerSection;
