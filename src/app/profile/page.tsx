
import ProfileView from "@/components/profile/profile_view";
import { getProfile } from "@/lib/actions/profile-action";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    const profile = await getProfile();

    if (!profile) {
        // If no profile found (e.g. not logged in), redirect to login
        // Alternatively, could redirect to /profile/setup if logged in but no profile
        redirect("/auth/login");
    }

    return (
        <ProfileView profile={profile} />
    );
}
