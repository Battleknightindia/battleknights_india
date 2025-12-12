import { mockProfile } from "@/lib/constants/profile";
import ProfileEditForm from "@/components/profile/profile_edit_form";

export default function EditProfilePage() {
    return (
        <ProfileEditForm initialData={mockProfile} />
    );
}
