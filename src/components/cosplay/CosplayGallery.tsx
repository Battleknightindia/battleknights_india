"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Dummy data for the gallery
const COSPLAY_IMAGES = [
    {
        id: 1,
        src: "/cosplay/cosplay1.webp",
        alt: "Cyberpunk Cosplay",
        category: "Sci-Fi",
        photographer: "NeoTokyo Lens"
    },
    {
        id: 2,
        src: "/cosplay/cosplay2.webp",
        alt: "Medieval Knight",
        category: "Fantasy",
        photographer: "Kingsguard"
    },
    {
        id: 3,
        src: "/cosplay/cosplay3.webp",
        alt: "Anime Character",
        category: "Anime",
        photographer: "Studio Ghibli Fan"
    },
    {
        id: 4,
        src: "/cosplay/cosplay4.webp",
        alt: "Fantasy Warrior",
        category: "Fantasy",
        photographer: "Realm Walker"
    },
    {
        id: 5,
        src: "/cosplay/cosplay5.webp",
        alt: "Steampunk Inventor",
        category: "Steampunk",
        photographer: "Gear Heart"
    },
    {
        id: 6,
        src: "/cosplay/cosplay6.webp",
        alt: "Jedi Knight",
        category: "Sci-Fi",
        photographer: "Force User"
    },
    {
        id: 7,
        src: "/cosplay/cosplay7.webp",
        alt: "Witcher Cosplay",
        category: "Gaming",
        photographer: "White Wolf"
    },
    {
        id: 8,
        src: "/cosplay/cosplay8.webp",
        alt: "Superhero",
        category: "Comics",
        photographer: "Daily Bugle"
    },
];

export default function CosplayGallery() {
    return (
        <section className="py-20 px-4 md:px-6 bg-zinc-950 min-h-screen">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center space-y-4 mt-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter"
                    >
                        COSPLAY <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-blue-500">SHOWCASE</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-zinc-400 max-w-2xl mx-auto text-lg"
                    >
                        Celebrating the creativity and dedication of our community. Witness the characters come alive.
                    </motion.p>
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-0">
                    {COSPLAY_IMAGES.map((image, index) => (
                        <GalleryItem key={image.id} image={image} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function GalleryItem({ image, index }: { image: typeof COSPLAY_IMAGES[0], index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-zinc-900 shadow-xl border border-zinc-800 mb-4 md:mb-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-full overflow-hidden">
                {/* Image Container - we don't fix height, let it be natural for masonry */}
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />

                {/* Overlay Gradient */}
                <div className={cn(
                    "absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300",
                    isHovered ? "opacity-100" : "opacity-0 md:opacity-0" // Hidden by default, show on hover
                )} />
            </div>
        </motion.div>
    );
}
