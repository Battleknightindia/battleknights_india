

import { mockProfile } from "@/lib/constants/profile";
import ProfileView from "@/components/profile/profile_view";

export default function ProfilePage() {
    return (
        <ProfileView profile={mockProfile} />
    );
}
