"use client";

import { motion } from "framer-motion";
import { MapPin, Trophy, Users, Diamond, View } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const NEC_IMAGES = [
    "/tournaments/Nec/NEC_1.webp",
    "/tournaments/Nec/NEC_2.webp",
    "/tournaments/Nec/NEC_3.webp",
    "/tournaments/Nec/NEC_4.webp",
    "/tournaments/Nec/NEC_5.webp",
    "/tournaments/Nec/NEC_6.webp",
    "/tournaments/Nec/NEC_7.webp",
];



export default function NecShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % NEC_IMAGES.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-zinc-950 font-sans border-b border-zinc-900 relative overflow-hidden min-h-screen flex items-center">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[150px] pointer-events-none z-0" />

            <div className="container mx-auto px-4 lg:px-6 relative z-10">

                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Regional Powerhouse</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                        NORTHEAST <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-blue-500">
                            CUP 2024
                        </span>
                    </h2>

                    <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        Uniting the 8 sister states in a spectacle of skill. The NEC proved that the region is a dormant volcano of esports talent, waiting to erupt.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-20">
                    <div className="flex flex-col items-center p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm group hover:bg-zinc-900 transition-colors">
                        <Trophy className="w-8 h-8 text-yellow-400 mb-2 group-hover:scale-110 transition-transform" />
                        <p className="text-3xl font-black text-white">₹ 50k</p>
                        <p className="text-xs text-zinc-500 font-bold uppercase">Prize Pool</p>
                    </div>
                    <div className="flex flex-col items-center p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm group hover:bg-zinc-900 transition-colors">
                        <Diamond className="w-8 h-8 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                        <p className="text-3xl font-black text-white">200k</p>
                        <p className="text-xs text-zinc-500 font-bold uppercase">Diamonds</p>
                    </div>
                    <div className="flex flex-col items-center p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm group hover:bg-zinc-900 transition-colors">
                        <Users className="w-8 h-8 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
                        <p className="text-3xl font-black text-white">300+</p>
                        <p className="text-xs text-zinc-500 font-bold uppercase">Teams</p>
                    </div>
                    <div className="flex flex-col items-center p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm group hover:bg-zinc-900 transition-colors">
                        <View className="w-8 h-8 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
                        <p className="text-3xl font-black text-white">50k</p>
                        <p className="text-xs text-zinc-500 font-bold uppercase">Views</p>
                    </div>
                </div>

                <div className="relative w-full max-w-7xl mx-auto aspect-12/9 md:aspect-9/6 rounded-md overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl group">
                    {/* Main Image Cycler */}
                    {NEC_IMAGES.map((src, index) => (
                        <motion.div
                            key={src}
                            initial={false}
                            animate={{
                                opacity: index === currentIndex ? 1 : 0,
                                scale: index === currentIndex ? 1 : 1.1
                            }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={src}
                                alt="NCC Moment"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 via-transparent to-transparent" />
                        </motion.div>
                    ))}
                </div>
                
                {/* Navigation Bar */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                            {NEC_IMAGES.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`relative h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                                />
                            ))}
                        </div>
            </div>
        </section>
    );
}

