"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mic2, Monitor, Settings, Wifi } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ProductionCategory = ({
    title,
    subtitle,
    description,
    icon: Icon,
    images,
    align = 'left'
}: {
    title: string,
    subtitle: string,
    description: string,
    icon: React.ComponentType<{ className?: string }>,
    images: string[],
    align?: 'left' | 'right'
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-rotate carousel every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className={`flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center mb-20 md:mb-28 lg:mb-32 ${align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Info Side - Adjusted width for landscape layout */}
            <div className="w-full lg:w-2/5 space-y-4 md:space-y-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                </div>
                <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight mb-1 md:mb-2">
                        {title}
                    </h3>
                    <p className="text-emerald-500 font-bold uppercase tracking-widest text-xs md:text-sm">
                        {subtitle}
                    </p>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base lg:text-lg">
                    {description}
                </p>
            </div>

            {/* Landscape Carousel Side */}
            <div className="w-full lg:w-3/5">
                {/* Landscape Carousel Container */}
                <div className="relative aspect-video md:aspect-16/10 rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl group">
                    
                    {/* AnimatePresence for smooth transitions */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${title}-${currentImageIndex}`}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={images[currentImageIndex]}
                                alt={`${title} - Image ${currentImageIndex + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                                className="object-cover"
                                priority={currentImageIndex === 0}
                            />
                            {/* Gradient overlay like in your example */}
                            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Dots - Bottom Right (same style as your example) */}
                    <div className="absolute bottom-6 right-6 flex gap-2">
                        {images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    idx === currentImageIndex 
                                        ? 'w-6 bg-white' 
                                        : 'w-1.5 bg-white/40'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function ProductionShowcase() {
    return (
        <section className="py-16 md:py-24 lg:py-32 bg-zinc-950 font-sans overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                
                {/* Header Section - Adjusted spacing for landscape layout */}
                <motion.div 
                    className="text-center mb-16 md:mb-24 lg:mb-28 max-w-5xl mx-auto px-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs md:text-sm font-bold uppercase tracking-widest mb-4 md:mb-6"
                    >
                        <Settings className="w-3.5 h-3.5 md:w-4 md:h-4 animate-spin-slow" />
                        <span>The Backbone</span>
                    </motion.div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight mb-4 md:mb-6 leading-tight">
                        BEHIND THE <span className="text-zinc-700">SCENES</span>
                    </h2>
                    
                    <p className="text-zinc-400 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-3xl mx-auto">
                        Esports isn&apos;t just played; it&apos;s produced. Meet the technical wizardry and creative minds ensuring every frame is perfect.
                    </p>
                </motion.div>

                {/* Categories Container */}
                <div className="space-y-20 md:space-y-24 lg:space-y-32">
                    <ProductionCategory
                        title="Casting & Analysis"
                        subtitle="The Voice of the Game"
                        description="Our casting desk brings the hype. Featuring professional shoutcasters and analysts who break down every play with passion and precision, ensuring the audience never misses a beat."
                        icon={Mic2}
                        images={["/tournaments/Production/1.webp", "/tournaments/Production/2.webp"]}
                        align="left"
                    />

                    <ProductionCategory
                        title="Broadcast Control"
                        subtitle="Mission Control"
                        description="The nerve center of our operations. Our directing team manages multi-cam setups, replays, and real-time graphics to deliver a TV-grade viewing experience."
                        icon={Monitor}
                        images={["/tournaments/Production/3.webp", "/tournaments/Production/4.webp"]}
                        align="right"
                    />

                    <ProductionCategory
                        title="Technical Ops"
                        subtitle="Seamless Execution"
                        description="Server management, low-latency streaming infrastructure, and hardware support. We ensure zero downtime and competitive integrity for every match."
                        icon={Wifi}
                        images={["/tournaments/Production/5.webp", "/tournaments/Production/6.webp"]}
                        align="left"
                    />
                </div>
            </div>
        </section>
    );
}