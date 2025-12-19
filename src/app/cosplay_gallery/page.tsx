
import type { Metadata } from "next";
import CosplayGallery from "@/components/cosplay/CosplayGallery";

export const metadata: Metadata = {
    title: "Cosplay Gallery | BattleKnights",
    description: "Explore the incredible cosplay showcased at BattleKnights events. From anime to sci-fi, witness the creativity of our community.",
};

export default function CosplayGalleryPage() {
    return (
        <main className="min-h-screen bg-black">
            <CosplayGallery />
        </main>
    );
}
