"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Add this
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronRight, Zap, LogOut, User } from "lucide-react";
import { navlinks } from "@/lib/constants/navlinks";
import { User as SupabaseUser } from "@supabase/supabase-js";
import { signOut } from "@/lib/actions/auth_actions";

interface NavbarProps {
    user: SupabaseUser | null;
}

export default function Navbar({ user }: NavbarProps) {
    const pathname = usePathname(); // Get current URL path
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Track mobile menu state

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Helper to check if link is active (removes the need for activeSection state)
    const isLinkActive = (href: string) => {
        if (href === "/") return pathname === href;
        return pathname.startsWith(href);
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

                {/* Logo */}
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

                {/* Desktop Navigation - Now using isLinkActive() instead of activeSection state */}
                <nav className="hidden xl:flex items-center gap-1 bg-zinc-900/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-zinc-800/50">
                    {navlinks.map((link) => {
                        const active = isLinkActive(link.href);
                        return (
                            <Link
                                key={link.id}
                                href={link.href}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                                    active
                                        ? "text-white bg-emerald-600/20 border border-emerald-500/30"
                                        : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                                )}
                            >
                                {link.label}
                                {active && (
                                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full"></span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Actions & Mobile Toggle */}
                <div className="flex items-center gap-3">
                    {/* Desktop Actions */}
                    <div className="hidden xl:flex items-center gap-3">
                        {user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                                        <Avatar className="h-10 w-10 border border-zinc-700">
                                            <AvatarImage src={user.user_metadata.avatar_url} alt={user.user_metadata.full_name || "User"} />
                                            <AvatarFallback className="bg-emerald-900 text-emerald-200 font-bold">
                                                {user.email?.charAt(0).toUpperCase() || "U"}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56 bg-zinc-950 border-zinc-800 text-zinc-200" align="end" forceMount>
                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-sm font-medium leading-none text-white">{user.user_metadata.full_name}</p>
                                            <p className="text-xs leading-none text-zinc-400">
                                                {user.email}
                                            </p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator className="bg-zinc-800" />
                                    <Link href="/profile">
                                        <DropdownMenuItem className="cursor-pointer focus:bg-zinc-900 focus:text-white">
                                            <User className="mr-2 h-4 w-4" />
                                            <span>Profile</span>
                                        </DropdownMenuItem>
                                    </Link>
                                    <DropdownMenuSeparator className="bg-zinc-800" />
                                    <DropdownMenuItem className="cursor-pointer focus:bg-red-900/20 focus:text-red-400 text-red-400" onClick={() => signOut()}>
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Log out</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <>
                                <Link href="/auth/login">
                                    <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-zinc-800">
                                        Login
                                    </Button>
                                </Link>
                                <Link href="/auth/signup">
                                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20 group">
                                        Get Started
                                        <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu */}
                    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="xl:hidden border-zinc-800 bg-zinc-900/50 text-white hover:bg-zinc-800">
                                <Menu className="w-5 h-5" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-full sm:w-[400px] p-0 border-l border-zinc-800 bg-zinc-950">
                            <div className="flex flex-col h-full bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-emerald-900/20 via-zinc-950 to-zinc-950">
                                {/* Header */}
                                <div className="p-6 flex items-center justify-between border-b border-zinc-800/50">
                                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                                    <span className="font-bold text-xl tracking-tight text-white">MENU</span>
                                    <SheetClose asChild>
                                        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                                            <X className="w-6 h-6" /> {/* Fixed: Removed hidden class */}
                                        </Button>
                                    </SheetClose>
                                </div>

                                {/* Links */}
                                <div className="flex-1 overflow-y-auto py-8 px-6">
                                    <nav className="flex flex-col space-y-2">
                                        {navlinks.map((link) => {
                                            const active = isLinkActive(link.href);
                                            return (
                                                <SheetClose key={link.id} asChild>
                                                    <Link
                                                        href={link.href}
                                                        onClick={() => setIsMenuOpen(false)} // Close menu on click
                                                        className={cn(
                                                            "group flex items-center justify-between p-4 rounded-xl text-2xl font-bold border transition-all",
                                                            active
                                                                ? "text-white bg-emerald-900/20 border-emerald-500/30"
                                                                : "text-zinc-400 hover:text-white hover:bg-zinc-900/50 border-transparent hover:border-zinc-800"
                                                        )}
                                                    >
                                                        <span className="group-hover:translate-x-2 transition-transform">
                                                            {link.label}
                                                        </span>
                                                        <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-emerald-500" />
                                                    </Link>
                                                </SheetClose>
                                            );
                                        })}
                                    </nav>

                                    {/* Mobile Ad */}
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
                                    {user ? (
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-center gap-4 px-2">
                                                <Avatar className="h-10 w-10 border border-zinc-700">
                                                    <AvatarImage src={user.user_metadata.avatar_url} alt={user.user_metadata.full_name || "User"} />
                                                    <AvatarFallback className="bg-emerald-900 text-emerald-200 font-bold">
                                                        {user.email?.charAt(0).toUpperCase() || "U"}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="flex flex-col">
                                                    <p className="text-sm font-medium text-white">{user.user_metadata.full_name}</p>
                                                    <p className="text-xs text-zinc-400">{user.email}</p>
                                                </div>
                                            </div>

                                            <Link href="/profile" className="w-full">
                                                <Button
                                                    variant="outline"
                                                    className="w-full border-zinc-700 text-zinc-200 hover:bg-zinc-800 hover:text-white justify-start"
                                                >
                                                    <User className="mr-2 h-4 w-4" />
                                                    My Profile
                                                </Button>
                                            </Link>

                                            <Button
                                                variant="outline"
                                                className="w-full border-red-900/30 bg-red-500 text-white hover:bg-red-600 hover:text-white hover:border-red-500 justify-start"
                                                onClick={() => signOut()}
                                            >
                                                <LogOut className="mr-2 h-4 w-4" />
                                                Log out
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-2 gap-4">
                                            <Link href="/auth/login" className="w-full">
                                                <Button variant="outline" className="w-full border-zinc-700 text-zinc-200 hover:bg-zinc-800 hover:text-white">
                                                    Login
                                                </Button>
                                            </Link>
                                            <Link href="/auth/signup" className="w-full">
                                                <Button className="w-full bg-emerald-600 text-white hover:bg-emerald-500 border-0">
                                                    Sign Up
                                                </Button>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}