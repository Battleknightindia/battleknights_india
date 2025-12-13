"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Trophy, Users, Star, Calendar, Sparkles, Globe, Diamond } from "lucide-react";
import Image from "next/image";

// Local Types
interface TournamentStat {
    label: string;
    value: string;
    icon: React.ReactNode;
    color: string;
}

interface TournamentItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image_url: string; // Keep as fallback/thumbnail
    gallery: string[];
    date: string;
    category: 'major' | 'community';
    stats: TournamentStat[];
    tags: string[];
}

// Mock Data
const PAST_TOURNAMENTS: TournamentItem[] = [
    {
        id: "ne-cup-2024",
        title: "NorthEast Cup 2024",
        subtitle: "The Regional Showdown",
        description: "A landmark event that brought together 300+ teams from across the 8 sister states. Witnessed record-breaking viewership and the rise of new local legends.",
        image_url: "/feature/banner.webp",
        gallery: [
            "/tournaments/Nec/NEC_1.webp",
            "/tournaments/Nec/NEC_2.webp",
            "/tournaments/Nec/NEC_3.webp",
            "/tournaments/Nec/NEC_4.webp",
            "/tournaments/Nec/NEC_5.webp",
            "/tournaments/Nec/NEC_6.webp",
            "/tournaments/Nec/NEC_7.webp",
            "/tournaments/Nec/NEC_8.webp",
            "/tournaments/Nec/NEC_9.webp",
        ],
        date: "March 2024",
        category: 'major',
        tags: ["Regional", "LAN Finals", "Guwahati"],
        stats: [
            { label: "Prize Money", value: "$3,000", icon: <Trophy className="w-4 h-4" />, color: "text-amber-400" },
            { label: "Diamonds", value: "200k", icon: <Sparkles className="w-4 h-4" />, color: "text-purple-400" },
            { label: "Participation", value: "512 Teams", icon: <Users className="w-4 h-4" />, color: "text-blue-400" },
            { label: "Viewership", value: "50k+ Peak", icon: <Star className="w-4 h-4" />, color: "text-emerald-400" },
        ]
    },
    {
        id: "national-college-cup",
        title: "National College Cup Season 1",
        subtitle: "The National Showdown",
        description: "The inaugural season that started it all. Intense 5v5 action that set the standard for collegiate esports in the India.",
        image_url: "/feature/banner.webp",
        gallery: [
            "/feature/banner.webp",
        ],
        date: "October 2025",
        category: 'major',
        tags: ["Online", "Season 1"],
        stats: [
            { label: "Diamonds", value: "250k", icon: <Sparkles className="w-4 h-4" />, color: "text-purple-400" },
            { label: "Participation", value: "512 Teams", icon: <Users className="w-4 h-4" />, color: "text-blue-400" },
            { label: "Viewership", value: "50k+ Peak", icon: <Star className="w-4 h-4" />, color: "text-emerald-400" },
        ]
    },
    {
        id: "ecclesia-3",
        title: "Ecclesia 3.0",
        subtitle: "Assam Down Town University",
        description: "A true clash of legacies on campus. Ecclesia 3.0 at Assam Downtown University transformed the arena into a battleground of strategy and skill, where the most elite collegiate teams clashed in high-stakes MOBA Legend 5v5 combat, defining a new era of esports prestige in the Northeast.",
        image_url: "/feature/banner.webp",
        gallery: [
            "/tournaments/Ecc/Ecc_1.webp",
            "/tournaments/Ecc/Ecc_2.webp",
            "/tournaments/Ecc/Ecc_3.webp",
            "/tournaments/Ecc/Ecc_4.webp",
            "/tournaments/Ecc/Ecc_5.webp"
        ],
        date: "November 2025",
        category: 'community',
        tags: ["Collegiate", "Varsity", "Assam Down Town University"],
        stats: [
            { label: "Prize Money", value: "₹20,000", icon: <Trophy className="w-4 h-4" />, color: "text-amber-400" },
            { label: "Diamonds", value: "10,000", icon: <Diamond className="w-4 h-4" />, color: "text-purple-400" },
            { label: "Participation", value: "32 Teams", icon: <Users className="w-4 h-4" />, color: "text-blue-400" },
            { label: "Format", value: "Tech Fest", icon: <Trophy className="w-4 h-4" />, color: "text-emerald-400" },
        ]
    },
    {
        id: "transformation",
        title: "Transformation 2025",
        subtitle: "SRM University SIKKIM",
        description: "Where innovation met competition. Transformation 2025 at SRM University Sikkim fused cutting-edge technology with fierce 5v5 esports glory, making its gaming arena a electrifying core of the tech fest and crowning new legends amidst a celebration of the future.",
        image_url: "/feature/banner.webp",
        gallery: [
            "/tournaments/Srm/SRM_1.webp",
            "/tournaments/Srm/SRM_2.webp",
            "/tournaments/Srm/SRM_3.webp",
            "/tournaments/Srm/SRM_4.webp",
        ],
        date: "October 2025",
        category: 'community',
        tags: ["Sikkim", "FunZone", "SRMUS"],
        stats: [
            { label: "Prize Money", value: "₹10,000", icon: <Trophy className="w-4 h-4" />, color: "text-amber-400" },
            { label: "Diamonds", value: "10,000", icon: <Diamond className="w-4 h-4" />, color: "text-purple-400" },
            { label: "Participation", value: "32 Teams", icon: <Users className="w-4 h-4" />, color: "text-blue-400" },
            { label: "Format", value: "Tech Fest", icon: <Trophy className="w-4 h-4" />, color: "text-emerald-400" },
        ]
    },
    {
        id: "sankardev-college-cup",
        title: "SankarDev College Cup 2025",
        subtitle: "SankarDev College Shillong",
        description: "A grassroots spectacle of pure, unadulterated skill. The SankarDev College Cup brought the thunder to Shillong, transforming its tech fest into a hallowed LAN ground where local titans clashed in visceral, offline MOBA Legend 5v5 battles, forging legacies in the heart of the campus.",
        image_url: "/feature/banner.webp",
        gallery: [
            "/tournaments/Sdc/SDC_1.jpg",
            "/tournaments/Sdc/SDC_2.jpg",
            "/tournaments/Sdc/SDC_3.jpg",
            "/tournaments/Sdc/SDC_4.jpg",
            "/tournaments/Sdc/SDC_5.jpg",
        ],
        date: "October 2025",
        category: 'community',
        tags: ["Shillong", "LAN", "SankarDev College"],
        stats: [
            { label: "Prize Money", value: "₹10,000", icon: <Trophy className="w-4 h-4" />, color: "text-amber-400" },
            { label: "Diamonds", value: "10,000", icon: <Diamond className="w-4 h-4" />, color: "text-purple-400" },
            { label: "Participation", value: "32 Teams", icon: <Users className="w-4 h-4" />, color: "text-blue-400" },
            { label: "Format", value: "Tech Fest", icon: <Trophy className="w-4 h-4" />, color: "text-emerald-400" },
        ]
    }
];

export default function PastWorkSection() {
    const [activeCategory, setActiveCategory] = useState<'major' | 'community'>('major');
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideshowIndex, setSlideshowIndex] = useState(0); // For Image Gallery
    const [direction, setDirection] = useState(0);

    const filteredItems = PAST_TOURNAMENTS.filter(item => item.category === activeCategory);
    const activeItem = filteredItems[activeIndex] || filteredItems[0]; // Fallback

    // Auto-cycle gallery images
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideshowIndex((prev) => (prev + 1) % (activeItem.gallery.length || 1));
        }, 3000); // Cycle every 3 seconds

        return () => clearInterval(interval);
    }, [activeItem]); // Re-set when item changes

    // Reset index when category changes
    const handleCategoryChange = (cat: 'major' | 'community') => {
        if (cat === activeCategory) return;
        setDirection(0);
        setActiveIndex(0);
        setSlideshowIndex(0);
        setActiveCategory(cat);
    };

    const nextSlide = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % filteredItems.length);
        setSlideshowIndex(0);
    };

    const prevSlide = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
        setSlideshowIndex(0);
    };

    const currentImage = activeItem.gallery[slideshowIndex] || activeItem.image_url;

    return (
        <section id="past-work" className="relative w-full py-24 bg-zinc-950 overflow-hidden font-sans selection:bg-emerald-500/30 min-h-[900px]">

            {/* Immersive Background Transitions */}
            <div className="absolute inset-0 z-0 transition-colors duration-1000 ease-in-out">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className={`absolute inset-0 ${activeCategory === 'major' ? 'bg-zinc-950' : 'bg-slate-950'}`}
                    >
                        {/* Dynamic Gradients */}
                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] blur-[150px] opacity-30 pointer-events-none rounded-full
                            ${activeCategory === 'major' ? 'hidden' : 'bg-blue-600'}
                         `} />
                    </motion.div>
                </AnimatePresence>

                {/* Image Blur Layer (Synced with Gallery) */}
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={`${activeItem?.id}-${slideshowIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }} // Slower crossfade for background
                        className="absolute inset-0"
                    >
                        <Image
                            src={currentImage}
                            alt="Background"
                            fill
                            className="object-cover blur-[100px] scale-110"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="container relative z-10 mx-auto px-4 lg:px-6">

                {/* Section Header & Switcher */}
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 md:mb-24">
                    <div className="space-y-4 max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-semibold tracking-widest uppercase backdrop-blur-md"
                        >
                            <Trophy className="w-3 h-3 text-orange-500" />
                            Archived Events
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight"
                        >
                            OUR <span className="bg-linear-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">LEGACY</span>
                        </motion.h2>
                    </div>

                    {/* Immersive Category Switcher */}
                    <div className="p-1 md:p-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-xl flex items-center gap-1">
                        <button
                            onClick={() => handleCategoryChange('major')}
                            className={`relative px-3 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeCategory === 'major' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                        >
                            {activeCategory === 'major' && (
                                <motion.div layoutId="switcher-pill" className="absolute inset-0 bg-orange-600 rounded-full shadow-lg shadow-orange-900/50" />
                            )}
                            <span className="relative z-10 flex items-center gap-2"><Sparkles className="w-3 h-3 md:w-4 md:h-4" /> Major Events</span>
                        </button>
                        <button
                            onClick={() => handleCategoryChange('community')}
                            className={`relative px-3 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeCategory === 'community' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                        >
                            {activeCategory === 'community' && (
                                <motion.div layoutId="switcher-pill" className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-900/50" />
                            )}
                            <span className="relative z-10 flex items-center gap-2"><Globe className="w-3 h-3 md:w-4 md:h-4" /> Community</span>
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[500px]">

                    {/* LEFT: Info Panel */}
                    <div className="lg:col-span-5 space-y-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeItem?.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-6"
                            >
                                {/* Tags */}
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded border 
                                        ${activeCategory === 'major' ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' : 'bg-blue-500/10 border-blue-500/20 text-blue-400'}
                                    `}>
                                        <Calendar className="w-3.5 h-3.5" />
                                        {activeItem?.date}
                                    </span>
                                    {activeItem?.tags.map(tag => (
                                        <span key={tag} className="text-zinc-500 text-xs font-bold uppercase tracking-wider bg-zinc-900/50 px-3 py-1.5 rounded border border-zinc-800">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Typography */}
                                <div>
                                    <h3 className="text-3xl md:text-5xl font-black text-white mb-3 leading-[0.9]">
                                        {activeItem?.title}
                                    </h3>
                                    <p className={`text-xl font-bold ${activeCategory === 'major' ? 'text-orange-500' : 'text-blue-500'}`}>
                                        {activeItem?.subtitle}
                                    </p>
                                </div>

                                <div className="h-52">
                                    <p className="text-zinc-400 leading-relaxed text-lg border-l-2 border-white/10 pl-6">
                                        {activeItem?.description}
                                    </p>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                                    {activeItem?.stats.map((stat, i) => (
                                        <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                                            <div className={`mb-2 ${stat.color}`}>{stat.icon}</div>
                                            <p className="text-lg font-bold text-white">{stat.value}</p>
                                            <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation */}
                        <div className="flex items-center gap-4 pt-6">
                            <button
                                onClick={prevSlide}
                                className="h-14 w-14 rounded-full border border-zinc-700 bg-zinc-800/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all active:scale-95 group"
                            >
                                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                            </button>
                            <div className="h-1 w-24 bg-zinc-800 rounded-full overflow-hidden">
                                <motion.div
                                    className={`h-full ${activeCategory === 'major' ? 'bg-orange-500' : 'bg-blue-500'}`}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${((activeIndex + 1) / filteredItems.length) * 100}%` }}
                                />
                            </div>
                            <button
                                onClick={nextSlide}
                                className="h-14 w-14 rounded-full border border-zinc-700 bg-zinc-800/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all active:scale-95 group"
                            >
                                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: Visual Deck (Gallery) */}
                    <div className="lg:col-span-7 relative h-[400px] lg:h-[500px] flex items-center justify-center perspective-[1000px]">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={activeItem.id} // Main transition for switching tournaments
                                custom={direction}
                                variants={{
                                    enter: (direction: number) => ({
                                        x: direction > 0 ? 500 : -500,
                                        opacity: 0,
                                        scale: 0.8,
                                        rotateY: direction > 0 ? 15 : -15,
                                    }),
                                    center: {
                                        zIndex: 1,
                                        x: 0,
                                        opacity: 1,
                                        scale: 1,
                                        rotateY: 0,
                                        transition: { duration: 0.6, type: "spring", bounce: 0.3 }
                                    },
                                    exit: (direction: number) => ({
                                        zIndex: 0,
                                        x: direction < 0 ? 500 : -500,
                                        opacity: 0,
                                        scale: 0.8,
                                        rotateY: direction < 0 ? 15 : -15,
                                        transition: { duration: 0.5 }
                                    })
                                }}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute w-full md:w-[700px] aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 group"
                            >
                                {/* Gallery Image Transition */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={slideshowIndex} // Inner transition for gallery shuffle
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={currentImage}
                                            alt={activeItem.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Overlay Gradient */}
                                <div className={`absolute inset-0 bg-linear-to-t via-transparent to-transparent opacity-80 pointer-events-none ${activeCategory === 'major' ? 'from-orange-950' : 'from-blue-950'}`} />

                                <div className="absolute top-4 right-4 flex gap-1 z-20">
                                    {activeItem.gallery?.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`h-1.5 rounded-full transition-all duration-500 ${idx === slideshowIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/30'}`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}