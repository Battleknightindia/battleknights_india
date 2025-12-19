
import ProfileEditForm from "@/components/profile/profile_edit_form";
import { getProfile } from "@/lib/actions/profile-action";
import { redirect } from "next/navigation";

export default async function EditProfilePage() {
    const profile = await getProfile();

    if (!profile) {
        redirect("/auth/login");
    }

    return (
        <ProfileEditForm initialData={profile} mode="edit" />
    );
}
