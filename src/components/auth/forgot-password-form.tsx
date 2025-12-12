"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { useState } from "react";
import { forgotPassword } from "@/lib/sample_actions/forgot_password";

export function ForgotPasswordForm() {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        await forgotPassword(email);
        setLoading(false);
    }

    return (
        <Card className="w-full max-w-md bg-zinc-900/50 backdrop-blur-xl border-zinc-800 shadow-2xl relative z-10">

            {/* Header */}
            <CardHeader className="space-y-2 text-center pb-4">
                <CardTitle className="text-2xl font-bold text-white tracking-tight">
                    Forgot Password
                </CardTitle>
                <CardDescription className="text-zinc-400">
                    Enter your email to receive a reset link
                </CardDescription>
            </CardHeader>

            {/* Content */}
            <CardContent className="space-y-6 pt-2">

                {/* Input Field */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                        <Input
                            type="email"
                            placeholder="name@example.com"
                            className="pl-10 bg-zinc-950/50 border-zinc-800 text-zinc-200 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    disabled={loading}
                    onClick={handleSubmit}
                    className="w-full h-11 bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-900/20"
                >
                    {loading ? "Sending..." : "Send Reset Link"}
                </Button>
            </CardContent>

            {/* Footer */}
            <CardFooter className="flex flex-col items-center mt-2 pb-8">
                <p className="text-sm text-zinc-500">
                    Remember your password?{" "}
                    <Link href="/auth/login" className="text-emerald-400 hover:underline">
                        Go back to login
                    </Link>
                </p>
            </CardFooter>
        </Card>
    );
}
