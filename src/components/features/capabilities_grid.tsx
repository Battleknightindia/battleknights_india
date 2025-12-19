"use client";

import { motion } from "framer-motion";
import { Mic2, Users, Radio, GraduationCap, Calendar, ArrowRight, Activity, Zap } from "lucide-react";

const CapabilityCard = ({
    title,
    description,
    icon: Icon,
    className,
    delay = 0
}: {
    title: string,
    description: string,
    icon: React.ComponentType<{ className?: string }>,
    className?: string,
    delay?: number
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay, duration: 0.5 }}
        className={`relative group p-8 rounded-4xl bg-zinc-900/50 border border-zinc-800/50 overflow-hidden hover:border-zinc-700/50 transition-all duration-500 ${className}`}
    >
        <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 p-32 bg-emerald-500/5 blur-[100px] rounded-full group-hover:bg-emerald-500/10 transition-colors duration-500" />

        <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <ArrowRight className="w-5 h-5 text-zinc-600 -rotate-45 group-hover:rotate-0 group-hover:text-emerald-500 transition-all duration-300" />
            </div>

            <div className="mt-auto">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-emerald-400 transition-colors">{title}</h3>
                <p className="text-zinc-400 leading-relaxed font-medium">{description}</p>
            </div>
        </div>
    </motion.div>
);

export default function CapabilitiesSection() {
    return (
        <section className="py-24 bg-zinc-950 font-sans">
            <div className="container mx-auto px-4 lg:px-6">

                <div className="mb-20 max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Our <span className="text-zinc-600">Arsenal</span>
                    </h2>
                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                        Comprehensive solutions designed to elevate every aspect of the esports experience, from grassroots communities to professional stages.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">

                    {/* Large Card: Production */}
                    <CapabilityCard
                        title="Elite Production"
                        description="Broadcast-grade stage design, dynamic lighting, and immersive audio engineering. We craft the physical and digital spectacle."
                        icon={Mic2}
                        className="md:col-span-6 lg:col-span-8 min-h-[400px] bg-linear-to-br from-zinc-900 to-zinc-950"
                        delay={0}
                    />

                    {/* Tall Card: Streaming */}
                    <CapabilityCard
                        title="Premium Streaming"
                        description="4K broadcasts, instant replays, analytical storytelling. A viewing experience that rivals traditional sports."
                        icon={Radio}
                        className="md:col-span-6 lg:col-span-4 lg:row-span-2 min-h-[400px] bg-zinc-900"
                        delay={0.1}
                    />

                    {/* Standard Card: Influencers */}
                    <CapabilityCard
                        title="Influencer Network"
                        description="Connecting brands with the most influential voices. Creators who drive engagement."
                        icon={Users}
                        className="md:col-span-3 lg:col-span-4"
                        delay={0.2}
                    />

                    {/* Standard Card: College */}
                    <CapabilityCard
                        title="College Support"
                        description="Empowering university clubs with resources, mentorship, and league infrastructure."
                        icon={GraduationCap}
                        className="md:col-span-3 lg:col-span-4"
                        delay={0.3}
                    />

                    {/* Standard Card: Events */}
                    <CapabilityCard
                        title="Mega Events"
                        description="Organizing seamless tournaments at every scale. From qualifiers to LAN finals."
                        icon={Calendar}
                        className="md:col-span-3 lg:col-span-4"
                        delay={0.4}
                    />

                    {/* Standard Card: Analytics / More */}
                    <CapabilityCard
                        title="Data & Insights"
                        description="Real-time analytics and performance tracking for players and organizers."
                        icon={Activity}
                        className="md:col-span-3 lg:col-span-4"
                        delay={0.5}
                    />

                    {/* Wide Low Card: Consulting */}
                    <CapabilityCard
                        title="Strategic Consulting"
                        description="We help brands navigate the complex esports landscape with expert guidance and activation strategies."
                        icon={Zap}
                        className="md:col-span-6 lg:col-span-4"
                        delay={0.6}
                    />

                </div>
            </div>
        </section>
    );
}
