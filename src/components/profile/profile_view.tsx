"use client";

import { motion } from "framer-motion";
import { MapPin, Shield, Gamepad2, Award, User, Copy, Edit2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Define interface for the profile prop
interface ProfileConfig {
    fullName: string;
    gameName: string;
    gameId: string;
    serverId: string;
    roles: string[];
    state: string;
    city: string;
    avatar_url: string;
}

interface ProfileViewProps {
    profile: ProfileConfig;
}

const ProfileView: React.FC<ProfileViewProps> = ({ profile }) => {
    return (
        <section className="min-h-screen relative w-full overflow-hidden bg-zinc-950 font-sans selection:bg-emerald-500/30 flex flex-col justify-center py-24 md:py-12">

            {/* Background: Tactical Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Base Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(39,39,42,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(39,39,42,0.4)_1px,transparent_1px)] bg-size-[60px_60px] opacity-20" />

                {/* Secondary Micro Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-size-[15px_15px] mask-[radial-gradient(circle_at_center,black_40%,transparent_100%)]" />

                {/* Glow Orbs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
            </div>

            <div className="container mx-auto px-4 relative z-10 flex justify-center items-center grow">
                {/* Main Player Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0 }}
                    className="w-full max-w-[640px] bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden"
                >
                    {/* Header: Identity Block */}
                    <div className="relative pt-12 pb-8 px-6 md:px-8 border-b border-zinc-800/50">
                        {/* Decorative Top-Right Badge */}
                        <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-3">
                            <Link href="/profile/edit">
                                <Button variant="outline" size="sm" className="hidden md:flex bg-zinc-950/50 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900">
                                    <Edit2 className="w-3.5 h-3.5 mr-2" />
                                    Edit Profile
                                </Button>
                                {/* Mobile Icon Only */}
                                <Button variant="outline" size="icon" className="md:hidden h-8 w-8 bg-zinc-950/50 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-full">
                                    <Edit2 className="w-3.5 h-3.5" />
                                </Button>
                            </Link>

                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950/50 border border-zinc-800 backdrop-blur-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none">Online</span>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                            {/* Avatar */}
                            <div className="relative shrink-0 group">
                                <div className="h-28 w-28 md:h-32 md:w-32 rounded-3xl border-4 border-zinc-950 bg-zinc-800 shadow-2xl relative z-10 overflow-hidden ring-1 ring-white/5">
                                    <Image
                                        src={profile.avatar_url || '/mock-avatar.png'}
                                        alt={profile.fullName}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                {/* Glow behind avatar */}
                                <div className="absolute inset-0 bg-emerald-500/20 blur-2xl -z-10 opacity-50 transition-opacity duration-300 group-hover:opacity-80" />
                            </div>

                            {/* Name & Title */}
                            <div className="text-center md:text-left pt-2">
                                <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
                                    {profile.gameName}
                                </h1>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950/50 border border-zinc-800/50">
                                    <User className="w-3.5 h-3.5 text-zinc-400" />
                                    <span className="text-sm font-medium text-zinc-300">{profile.fullName}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8 space-y-4">

                        {/* Unified ID Row - FORCED SINGLE LINE */}
                        <div className="bg-zinc-950/60 border border-zinc-800 rounded-2xl p-4 flex items-center justify-between gap-3 group hover:border-emerald-500/30 transition-all">
                            <div className="flex items-center gap-4 overflow-hidden">
                                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-500 shrink-0">
                                    <Gamepad2 className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-0.5 whitespace-nowrap">Player ID</p>
                                    <div className="flex items-baseline gap-1.5 text-white font-mono truncate">
                                        <span className="text-lg md:text-xl font-bold">{profile.gameId}</span>
                                        <span className="text-zinc-600 font-medium text-sm md:text-base">({profile.serverId})</span>
                                    </div>
                                </div>
                            </div>

                            <button className="shrink-0 p-2.5 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors active:scale-95" title="Copy to clipboard">
                                <Copy className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Roles */}
                            <div className="bg-zinc-950/30 border border-zinc-800/50 rounded-2xl p-4 hover:bg-zinc-950/50 transition-colors">
                                <div className="flex items-center gap-2 mb-3">
                                    <Shield className="w-3.5 h-3.5 text-emerald-500" />
                                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Roles</span>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {profile.roles.map((role) => (
                                        <span key={role} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-bold text-zinc-300 uppercase tracking-wide">
                                            {getRoleIcon(role)}
                                            {role}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Region */}
                            <div className="bg-zinc-950/30 border border-zinc-800/50 rounded-2xl p-4 hover:bg-zinc-950/50 transition-colors">
                                <div className="flex items-center gap-2 mb-3">
                                    <MapPin className="w-3.5 h-3.5 text-blue-500" />
                                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Region</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-white font-bold">{profile.city}</span>
                                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                                    <span className="text-zinc-500 text-sm">{profile.state}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Helper
const getRoleIcon = (role: string) => {
    switch (role.toLowerCase()) {
        case 'hyper': return <Gamepad2 className="w-3 h-3 text-red-500/80" />;
        case 'marksmen': return <Award className="w-3 h-3 text-amber-500/80" />;
        case 'tank': return <Shield className="w-3 h-3 text-blue-500/80" />;
        case 'mage': return <Gamepad2 className="w-3 h-3 text-purple-500/80" />;
        default: return <Gamepad2 className="w-3 h-3 text-zinc-500" />;
    }
}

export default ProfileView;
