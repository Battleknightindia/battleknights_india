import { SignupForm } from "@/components/auth/signup-form";

export default function SignUpPage() {
    return (
        <div className="min-h-screen w-full bg-zinc-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">

            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)] opacity-20" />
            </div>

            {/* Signup Card (Client Component) */}
            <SignupForm />

            {/* Footer / Copyright */}
            <div className="absolute bottom-6 text-center">
                <p className="text-xs text-zinc-600">
                    &copy; 2025 BattleKnights India. All rights reserved.
                </p>
            </div>

        </div>
    );
}
