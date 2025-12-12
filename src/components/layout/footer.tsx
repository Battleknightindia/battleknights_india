"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Twitter, Mail, MapPin, ArrowRight, Gamepad2, Twitch } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative w-full bg-zinc-950 text-zinc-400 overflow-hidden border-t border-zinc-900 pt-20 pb-10">

            {/* Background Brand Watermark */}
            <div className="absolute -top-24 -right-24 opacity-[0.03] pointer-events-none select-none">
                <Image
                    src="/1.png"
                    alt="Watermark"
                    width={800}
                    height={800}
                    className="object-contain grayscale"
                />
            </div>

            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                {/* 2. Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative">
                                <Image
                                    src="/logo/5.png"
                                    alt="BattleKnights"
                                    width={300}
                                    height={200}
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed text-zinc-500">
                            Forging legends in the digital arena. India&apos;s premier platform for competitive mobile esports and collegiate gaming.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[
                                { icon: Instagram, href: "#" },
                                { icon: Youtube, href: "#" },
                                { icon: Twitter, href: "#" },
                                { icon: Twitch, href: "#" }
                            ].map((social, i) => (
                                <Link
                                    key={i}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all custom-transition"
                                >
                                    <social.icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links: Tournaments */}
                    <div>
                        <h4 className="font-bold text-white mb-6 flex items-center gap-2">
                            <Gamepad2 className="w-4 h-4 text-emerald-500" />
                            Tournaments
                        </h4>
                        <ul className="space-y-3">
                            {['National College Cup', 'North East Cup', 'Community Scrims', 'Ranked Ladders'].map(item => (
                                <li key={item}>
                                    <Link href="#" className="text-sm hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0 text-emerald-500" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links: Company */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Careers', 'Brand Assets', 'Contact Support'].map(item => (
                                <li key={item}>
                                    <Link href="#" className="text-sm hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-sm">
                                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                                <span>hello@battleknights.in</span>
                            </li>
                            <li className="flex gap-3 text-sm">
                                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                                <span>
                                    Esports Complex, Tech City,<br />
                                    Guwahati, Assam - 781001
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* 3. Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-900 text-xs text-zinc-600">
                    <p>
                        &copy; {currentYear} BattleKnights India. All rights reserved.
                    </p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-zinc-400">Privacy Policy</Link>
                        <Link href="#" className="hover:text-zinc-400">Terms of Service</Link>
                        <Link href="#" className="hover:text-zinc-400">Cookie Policy</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};