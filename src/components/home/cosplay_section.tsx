"use client";

import Image from "next/image"
import { Camera } from "lucide-react"

// Types
interface CosplayItem {
    id: string;
    image_url: string;
}

// Mock Data (Replace with props if dynamic)
const MOCK_COSPLAY_DATA: CosplayItem[] = [
    { id: "c1", image_url: "/cosplay/cosplay1.webp" },
    { id: "c2", image_url: "/cosplay/cosplay2.webp" },
    { id: "c3", image_url: "/cosplay/cosplay7.png" },
    { id: "c5", image_url: "/cosplay/cosplay6.webp" },
];

type Props = {
    cosplayData?: CosplayItem[] // Optional prop to support external data
}

export default function CosplaySection({ cosplayData = MOCK_COSPLAY_DATA }: Props) {
    const items = cosplayData.length > 0 ? cosplayData : MOCK_COSPLAY_DATA;
    // Quadruple items for smooth infinite marquee even on huge screens
    const marqueeItems = [...items, ...items, ...items, ...items];

    return (
        <section id="cosplay-gallery" className="w-full bg-zinc-950 py-24 overflow-hidden border-t border-zinc-900">

            {/* Header / Context */}
            <div className="container mx-auto px-4 lg:px-6 mb-12 flex items-end justify-between">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-xs font-semibold tracking-widest uppercase mb-4 backdrop-blur-md">
                        <Camera className="w-3 h-3 text-amber-500" />
                        Showcase
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Cosplay <span className="text-zinc-600">Gallery</span>
                    </h2>
                </div>
            </div>

            {/* Layout Split: Mobile Snap vs Desktop Marquee */}

            {/* 1. Mobile & Tablet (< lg): Snap Scroll Rail */}
            <div className="lg:hidden w-full overflow-x-auto pb-8 pt-4 px-4 flex gap-4 snap-x snap-mandatory scrollbar-none">
                {items.map((item, index) => (
                    <CosplayCard key={`${item.id}-mobile-${index}`} item={item} className="snap-center w-[280px]" />
                ))}
                <div className="w-4 shrink-0" />
            </div>

            {/* 2. Desktop (>= lg): Infinite Marquee */}
            <div className="hidden lg:flex w-full relative overflow-hidden group">

                {/* Left & Right Fade Gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

                {/* Scroller Container */}
                <div
                    className="flex gap-8 px-4 animate-marquee group-hover:paused"
                    style={{ width: "max-content" }}
                >
                    {/* Render the duplicated list */}
                    {marqueeItems.map((item, index) => (
                        <div
                            key={`${item.id}-desktop-${index}`}
                            className=""
                        >
                            <CosplayCard item={item} className="w-[320px]" />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

// Reusable Card Component
function CosplayCard({ item, className }: { item: CosplayItem, className?: string }) {
    return (
        <div className={`relative shrink-0 aspect-3/4 group/card cursor-pointer ${className}`}>
            {/* Card Frame */}
            <div className="absolute inset-0 rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden transition-all duration-300 group-hover/card:border-emerald-500/50 group-hover/card:shadow-[0_0_30px_rgba(16,185,129,0.2)]">

                {/* Image */}
                <Image
                    src={item.image_url}
                    alt="Cosplay Showcase"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 280px, 320px"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity" />

                {/* Focus Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-emerald-500/0 group-hover/card:border-emerald-500 transition-all duration-300 rounded-tl-xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-500/0 group-hover/card:border-emerald-500 transition-all duration-300 rounded-br-xl" />

            </div>
        </div>
    );
}