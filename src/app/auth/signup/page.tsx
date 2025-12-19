import { SignupForm } from "@/components/auth/signup-form";

export default function SignUpPage() {
    return (
        <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen animation-delay-2000" />
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
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
