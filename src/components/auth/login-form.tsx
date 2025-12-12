"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock } from "lucide-react";

export function LoginForm() {
    return (
        <Card className="w-full max-w-md bg-zinc-900/50 backdrop-blur-xl border-zinc-800 shadow-2xl relative z-10">
            <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-2xl font-bold text-white tracking-tight">
                    Welcome Back
                </CardTitle>
                <CardDescription className="text-zinc-400">
                    Enter your credentials to access your account
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">

                {/* OAuth Buttons */}
                <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full border-zinc-700 bg-zinc-800/50 text-zinc-200 hover:bg-zinc-800 hover:text-white hover:border-zinc-600 transition-all h-11">
                        {/* Google Icon SVG */}
                        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Google
                    </Button>
                    <Button variant="outline" className="w-full border-zinc-700 bg-zinc-800/50 text-zinc-200 hover:bg-zinc-800 hover:text-white hover:border-zinc-600 transition-all h-11">
                        {/* Discord Icon SVG */}
                        <svg className="mr-2 h-4 w-4 fill-[#5865F2]" viewBox="0 0 127.14 96.36">
                            <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.89,105.89,0,0,0,126.6,80.22c1.24-24.57-5.15-48.45-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                        </svg>
                        Discord
                    </Button>
                </div>

                {/* Divider */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-zinc-800" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-zinc-900 px-2 text-zinc-500 font-medium tracking-wide">
                            Or continue with
                        </span>
                    </div>
                </div>

                {/* Form */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                            <Input
                                type="email"
                                placeholder="name@example.com"
                                className="pl-10 bg-zinc-950/50 border-zinc-800 text-zinc-200 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                            <Input
                                type="password"
                                placeholder="Password"
                                className="pl-10 bg-zinc-950/50 border-zinc-800 text-zinc-200 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                            />
                        </div>
                    </div>
                    <Button className="w-full h-11 bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-900/20">
                        Sign In
                    </Button>
                </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4 text-center pb-8">
                <div className="text-sm text-zinc-500">
                    <Link href="/auth/forgot-password" className="hover:text-emerald-400 hover:underline transition-colors">
                        Forgot your password?
                    </Link>
                </div>
                <div className="text-sm text-zinc-400">
                    Don&apos;t have an account?{" "}
                    <Link href="/auth/signup" className="text-emerald-500 font-bold hover:text-emerald-400 hover:underline transition-colors">
                        Sign up
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
}
