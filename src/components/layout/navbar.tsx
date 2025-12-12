"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X, ChevronRight, Zap } from "lucide-react";
import { navlinks } from "@/lib/constants/navlinks";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    // Scroll effect for "Floating Glass" look
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = navlinks.map(link => link.id);
            const scrollPosition = window.scrollY + 100; // Offset for navbar

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll function
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const navbarHeight = 80; // Adjust based on your navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    // Handle link click
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        scrollToSection(id);
    };

    return (
        <header
            className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-zinc-950/80 backdrop-blur-xl border-zinc-800 py-3"
                    : "bg-transparent border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 lg:px-6 flex items-center justify-between">

                {/* Logo Area */}
                <Link href="/" className="relative z-50 flex items-center gap-2 group">
                    <div className="relative">
                        <Image
                            src="/logo/5.png"
                            alt="BattleKnights"
                            width={200}
                            height={100}
                            className="object-contain transition-transform group-hover:scale-105"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden xl:flex items-center gap-1 bg-zinc-900/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-zinc-800/50">
                    {navlinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => handleLinkClick(e, link.id)}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer",
                                activeSection === link.id
                                    ? "text-white bg-emerald-600/20 border border-emerald-500/30"
                                    : "text-zinc-400 hover:text-white hover:bg-zinc-800",
                            )}
                        >
                            {link.label}
                            {activeSection === link.id && (
                                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full"></span>
                            )}
                        </a>
                    ))}
                </nav>

                {/* Actions & Mobile Toggle */}
                <div className="flex items-center gap-3">

                    {/* Desktop Actions */}
                    <div className="hidden xl:flex items-center gap-3">
                        <Link href="/auth/login">
                            <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-zinc-800">
                                Login
                            </Button>
                        </Link>
                        <Link href={"/auth/signup"}>
                            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20 group">
                                Get Started
                                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Trigger */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="xl:hidden border-zinc-800 bg-zinc-900/50 text-white hover:bg-zinc-800">
                                <Menu className="w-5 h-5" />
                            </Button>
                        </SheetTrigger>

                        {/* Immersive Mobile Menu Content */}
                        <SheetContent side="right" className="w-full sm:w-[400px] p-0 border-l border-zinc-800 bg-zinc-950">
                            <div className="flex flex-col h-full bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-emerald-900/20 via-zinc-950 to-zinc-950">

                                {/* Header */}
                                <div className="p-6 flex items-center justify-between border-b border-zinc-800/50">
                                    <span className="font-bold text-xl tracking-tight text-white">
                                        MENU
                                    </span>
                                    <SheetClose asChild className="">
                                        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                                            <X className="w-6 h-6 hidden" />
                                        </Button>
                                    </SheetClose>
                                </div>

                                {/* Links */}
                                <div className="flex-1 overflow-y-auto py-8 px-6">
                                    <nav className="flex flex-col space-y-2">
                                        {navlinks.map((link, index) => (
                                            <SheetClose key={link.id} asChild>
                                                <a
                                                    href={`#${link.id}`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        scrollToSection(link.id);
                                                    }}
                                                    className={cn(
                                                        "group flex items-center justify-between p-4 rounded-xl text-2xl font-bold border border-transparent transition-all cursor-pointer",
                                                        activeSection === link.id
                                                            ? "text-white bg-emerald-900/20 border-emerald-500/30"
                                                            : "text-zinc-400 hover:text-white hover:bg-zinc-900/50 hover:border-zinc-800"
                                                    )}
                                                >
                                                    <span className="group-hover:translate-x-2 transition-transform">
                                                        {link.label}
                                                    </span>
                                                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-emerald-500" />
                                                </a>
                                            </SheetClose>
                                        ))}
                                    </nav>

                                    {/* Mobile Ad / Highlight */}
                                    <div className="mt-8 p-5 rounded-2xl bg-linear-to-br from-emerald-900/20 to-zinc-900 border border-emerald-500/20 relative overflow-hidden">
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
                                                <Zap className="w-4 h-4 fill-emerald-400" />
                                                New Season
                                            </div>
                                            <p className="text-zinc-300 text-sm mb-4">
                                                Registrations for the National College Cup are now live!
                                            </p>
                                            <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white border-0">
                                                Register Team
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Actions */}
                                <div className="p-6 border-t border-zinc-800/50 bg-zinc-900/30 backdrop-blur-md">
                                    <div className="grid grid-cols-2 gap-4">
                                        <Link href="/auth/login" className="w-full">
                                            <Button variant="outline" className="w-full border-zinc-700 text-zinc-200 hover:bg-zinc-800 hover:text-white">
                                                Login
                                            </Button>
                                        </Link>
                                        <Link href="/auth/signup" className="w-full">
                                            <Button className="w-full bg-white text-black hover:bg-zinc-200">
                                                Sign Up
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>
        </header>
    );
}