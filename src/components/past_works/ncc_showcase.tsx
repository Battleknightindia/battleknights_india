"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Star, Diamond, Crown, University } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import NccWinnerSection from "@/components/past_works/ncc_winner_section";

const GALLERY_IMAGES = [
    "/tournaments/Ncc/NCC_1.jpg",
    "/tournaments/Ncc/NCC_2.jpg",
    "/tournaments/Ncc/NCC_3.jpg",
    "/tournaments/Ncc/NCC_4.jpg",
    "/tournaments/Ncc/NCC_5.jpg",
];

const StatCard = ({ icon: Icon, label, value, color }: { icon: React.ComponentType<{ className?: string }>, label: string, value: string, color: string }) => (
    <div className="flex flex-col items-center p-6 bg-zinc-900/50 border border-zinc-800 rounded-3xl backdrop-blur-sm hover:bg-zinc-900 transition-colors group">
        <div className={`p-4 rounded-2xl bg-zinc-950 border border-zinc-800 mb-4 group-hover:scale-110 transition-transform ${color}`}>
            <Icon className="w-6 h-6" />
        </div>
        <span className="text-3xl font-black text-white tracking-tight mb-1">{value}</span>
        <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{label}</span>
    </div>
);

export default function NccShowcase() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative py-32 bg-zinc-950 font-sans border-b border-zinc-900 overflow-hidden">

            {/* Ambient Background for Section */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-6 relative z-10">

                {/* 1. Immersive Header Section */}
                <div className="mb-24 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <Crown className="w-4 h-4" />
                        <span>The Flagship Event</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8"
                    >
                        NATIONAL <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-emerald-200 to-blue-600">
                            COLLEGE CUP
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-xl font-medium max-w-3xl mx-auto leading-relaxed"
                    >
                        The inaugural season that redefined collegiate esports.
                        A nationwide hunt for the ultimate champions, bringing together
                        teams from every corner of India to one grand stage.
                    </motion.p>
                </div>
                <div className="relative w-full max-w-7xl mb-10 mx-auto aspect-15/9 md:aspect-14/9 rounded-md overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl group">
                    <Image 
                    src={"/feature/banner.webp"}
                    alt="ncc_banner"
                    fill
                    className="object-cover"
                    />
                </div>

                {/* 2. Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 mb-24 max-w-5xl mx-auto">
                    <StatCard icon={Trophy} label="Total Prize Pool" value="₹ 1.5 L" color="text-emerald-400" />
                    <StatCard icon={Diamond} label="Diamonds" value="500,000" color="text-emerald-400" />
                    <StatCard icon={Users} label="Teams Registered" value="512+" color="text-emerald-400" />
                    <StatCard icon={University} label="Universities Covered" value="28" color="text-emerald-400" />
                </div>

                {/* 3. Winners Section (Reused) */}
                <div className="mb-32">
                    <NccWinnerSection />
                </div>

                {/* 4. Immersive Gallery (No Overlay, Integrated) */}
                <div className="space-y-12 relative">
                    <div className="text-center space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-bold uppercase tracking-widest">
                            <Star className="w-3 h-3 text-emerald-500" />
                            <span>Highlights</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                            MOMENTS OF <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-emerald-200 to-blue-500">GLORY</span>
                        </h3>
                    </div>

                    <div className="relative w-full max-w-7xl mx-auto aspect-12/9 md:aspect-21/9 rounded-md overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl group">
                        {/* Main Image Cycler */}
                        {GALLERY_IMAGES.map((src, index) => (
                            <motion.div
                                key={src}
                                initial={false}
                                animate={{
                                    opacity: index === currentImageIndex ? 1 : 0,
                                    scale: index === currentImageIndex ? 1 : 1.1
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
                            {GALLERY_IMAGES.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImageIndex(idx)}
                                    className={`relative h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                                />
                            ))}
                        </div>
                </div>

            </div>
        </section>
    );
}
