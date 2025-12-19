"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Gamepad2, User, Save, Loader2, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { updateProfile, ProfileConfig } from "@/lib/actions/profile-action";
import { useRouter } from "next/navigation";

interface ProfileEditFormProps {
    initialData: ProfileConfig;
    mode?: "edit" | "setup";
}

const AVAILABLE_ROLES = ["hyper", "marksmen", "tank", "mage", "fighter", "support"];

export default function ProfileEditForm({ initialData, mode = "edit" }: ProfileEditFormProps) {
    const router = useRouter();
    const [formData, setFormData] = useState<ProfileConfig>(initialData);
    const [isSaving, setIsSaving] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const toggleRole = (role: string) => {
        setFormData(prev => {
            const currentRoles = prev.roles;
            if (currentRoles.includes(role)) {
                return { ...prev, roles: currentRoles.filter(r => r !== role) };
            } else {
                return { ...prev, roles: [...currentRoles, role] };
            }
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            const result = await updateProfile(formData);

            if (result.error) {
                alert(`Error: ${result.error}`);
            } else {
                setShowSuccess(true);
                // Auto redirect after 2 seconds
                setTimeout(() => {
                    const targetPath = mode === "setup" ? "/" : "/profile";
                    router.push(targetPath);
                }, 2000);
            }
        } catch (error) {
            console.error("Failed to update profile", error);
            alert("An unexpected error occurred.");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <section className="min-h-screen relative w-full overflow-hidden bg-zinc-950 font-sans selection:bg-emerald-500/30 flex flex-col justify-center py-30 md:py-50 lg:py-50">

            {/* Background: Tactical Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(39,39,42,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(39,39,42,0.4)_1px,transparent_1px)] bg-size-[60px_60px] opacity-20" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-size-[15px_15px] mask-[radial-gradient(circle_at_center,black_40%,transparent_100%)]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center grow max-w-2xl">

                {/* Edit Form Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden"
                >
                    <div className="h-1.5 w-full bg-linear-to-r from-emerald-500 via-blue-500 to-purple-500" />

                    <div className="p-8">
                        <div className="flex items-center gap-3 mb-8">
                            <h1 className="text-2xl font-black text-white">
                                {mode === "setup" ? "Complete Your Profile" : "Edit Profile"}
                            </h1>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-800 text-zinc-400 border border-zinc-700 uppercase">
                                {mode === "setup" ? "Required Steps" : "Personal Info"}
                            </span>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">

                            {/* Visual Avatar Editor Placeholder */}
                            <div className="flex items-center gap-6">
                                <div className="h-20 w-20 rounded-2xl bg-zinc-800 border-2 border-zinc-700 relative overflow-hidden group cursor-pointer">
                                    <Image
                                        src={formData.avatar_url || '/mock-avatar.png'}
                                        alt="Avatar"
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-[10px] font-bold text-white uppercase">Upload</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-zinc-300">Profile Picture</p>
                                    <p className="text-xs text-zinc-500 mt-1">Recommended 500x500px. Max 2MB.</p>
                                </div>
                            </div>

                            {/* Identity Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Game Name (IGN)</label>
                                    <div className="relative">
                                        <User className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                                        <input
                                            name="gameName"
                                            value={formData.gameName}
                                            onChange={handleChange}
                                            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-white placeholder-zinc-600 focus:outline-hidden focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all font-medium"
                                            placeholder="e.g. ShadowSlayer"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Full Name</label>
                                    <input
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-3 px-4 text-white placeholder-zinc-600 focus:outline-hidden focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all font-medium"
                                        placeholder="e.g. Arjun Verma"
                                    />
                                </div>
                            </div>

                            {/* Game Data */}
                            <div className="bg-zinc-950/30 border border-zinc-800/50 rounded-2xl p-5 space-y-4">
                                <h3 className="text-sm font-bold text-emerald-500 uppercase flex items-center gap-2">
                                    <Gamepad2 className="w-4 h-4" /> Game Details
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Game ID</label>
                                        <input
                                            name="gameId"
                                            value={formData.gameId}
                                            onChange={handleChange}
                                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white font-mono placeholder-zinc-600 focus:outline-hidden focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Server ID</label>
                                        <input
                                            name="serverId"
                                            value={formData.serverId}
                                            onChange={handleChange}
                                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white font-mono placeholder-zinc-600 focus:outline-hidden focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Region */}
                            <div className="grid grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">City</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                                        <input
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-white placeholder-zinc-600 focus:outline-hidden focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all font-medium"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">State</label>
                                    <input
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-3 px-4 text-white placeholder-zinc-600 focus:outline-hidden focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all font-medium"
                                    />
                                </div>
                            </div>

                            {/* Roles Selection */}
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Preferred Roles</label>
                                <div className="flex flex-wrap gap-2">
                                    {AVAILABLE_ROLES.map((role) => {
                                        const isSelected = formData.roles.includes(role);
                                        return (
                                            <button
                                                key={role}
                                                type="button"
                                                onClick={() => toggleRole(role)}
                                                className={`px-4 py-2 rounded-xl text-sm font-bold capitalize border transition-all ${isSelected
                                                    ? "bg-emerald-500 text-white border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                                                    : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200"
                                                    }`}
                                            >
                                                {role}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="pt-4 flex items-center gap-4">
                                <button
                                    type="submit"
                                    disabled={isSaving}
                                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-900/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                                    {isSaving ? "Saving..." : (mode === "setup" ? "Create Profile" : "Save Changes")}
                                </button>

                                {mode === "edit" && (
                                    <Link
                                        href="/profile"
                                        className="px-6 py-3.5 rounded-xl border border-zinc-800 text-zinc-400 font-bold hover:bg-zinc-900 hover:text-white transition-all text-center"
                                    >
                                        Cancel
                                    </Link>
                                )}
                            </div>

                            {/* Skip Button for Setup Mode */}
                            {mode === "setup" && (
                                <div className="text-center pt-2">
                                    <Link
                                        href="/"
                                        className="text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors"
                                    >
                                        Skip for now
                                    </Link>
                                </div>
                            )}

                        </form>
                    </div>
                </motion.div>

                {/* Success Modal */}
                <AnimatePresence>
                    {showSuccess && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                            />
                            {/* Modal */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                            >
                                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 max-w-sm w-full shadow-2xl flex flex-col items-center text-center pointer-events-auto relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-emerald-500/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 ring-1 ring-emerald-500/50">
                                        <Check className="w-8 h-8 text-emerald-500" />
                                    </div>

                                    <h3 className="text-2xl font-black text-white mb-2">Success!</h3>
                                    <p className="text-zinc-400 mb-8">
                                        Your profile has been {mode === "setup" ? "created" : "updated"} successfully.
                                    </p>

                                    <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden mb-2">
                                        <motion.div
                                            initial={{ width: "0%" }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 2, ease: "linear" }}
                                            className="h-full bg-emerald-500"
                                        />
                                    </div>
                                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Redirecting...</p>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
