"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";
import { resetPassword } from "@/lib/sample_actions/reset_password";

export function ResetPasswordForm({ token }: { token: string }) {

    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        await resetPassword(token, password);
        setLoading(false);
    }

    return (
        <Card className="w-full max-w-md bg-zinc-900/50 backdrop-blur-xl border-zinc-800 shadow-2xl relative z-10">

            {/* Header */}
            <CardHeader className="space-y-2 text-center pb-4">
                <CardTitle className="text-2xl font-bold text-white tracking-tight">
                    Reset Password
                </CardTitle>
                <CardDescription className="text-zinc-400">
                    Create a new password for your account
                </CardDescription>
            </CardHeader>

            {/* Content */}
            <CardContent className="space-y-6 pt-2">
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* New Password */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">New Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                            <Input
                                type="password"
                                placeholder="Enter new password"
                                className="pl-10 bg-zinc-950/50 border-zinc-800 text-zinc-200 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Confirm Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                            <Input
                                type="password"
                                placeholder="Confirm new password"
                                className="pl-10 bg-zinc-950/50 border-zinc-800 text-zinc-200 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                                required
                            />
                        </div>
                    </div>

                    {/* Submit */}
                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full h-11 bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-900/20"
                    >
                        {loading ? "Resetting..." : "Reset Password"}
                    </Button>
                </form>
            </CardContent>

            {/* Footer */}
            <CardFooter className="flex flex-col items-center mt-2 pb-8">
                <p className="text-sm text-zinc-500">
                    Already changed your password?
                </p>
                <p className="text-sm text-zinc-400">
                    <a href="/auth/login" className="text-emerald-400 font-medium hover:underline">
                        Return to Login
                    </a>
                </p>
            </CardFooter>

        </Card>
    );
}
