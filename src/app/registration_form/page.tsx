import { RegistrationForm } from "@/components/registration_form/registration-form";

export default function RegistrationPage() {
    return (
        <div className="min-h-screen w-full bg-black flex flex-col items-center pt-24 pb-12 px-4 md:px-8 relative overflow-hidden">

            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen animation-delay-2000" />
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            {/* Registration Form (Client Component) */}
            <RegistrationForm />

            {/* Footer / Copyright */}
            <div className="mt-12 text-center relative z-10 pb-8">
                <p className="text-xs text-zinc-600">
                    &copy; 2025 BattleKnights India. All rights reserved.
                </p>
            </div>

        </div>
    );
}
