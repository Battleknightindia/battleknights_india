"use client";

import { Bell } from "lucide-react";

export default function NewsletterCTA() {
    return (
        <section className="py-24 bg-zinc-950 font-sans">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="relative rounded-[3rem] bg-zinc-900 border border-zinc-800 overflow-hidden px-6 py-20 text-center">
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-full bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-xl">
                            <Bell className="w-6 h-6 text-emerald-400" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                            NEVER MISS <br />
                            <span className="text-zinc-500">A MATCH</span>
                        </h2>

                        <p className="text-zinc-400 text-lg">
                            Get the latest tournament announcements, schedule changes, and exclusive invites delivered to your inbox.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                            />
                            <button className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold transition-all hover:scale-105 active:scale-95">
                                Subscribe
                            </button>
                        </form>

                        <p className="text-zinc-600 text-xs">
                            We respect your privacy. No spam, just esports.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
