import ProfileEditForm from "@/components/profile/profile_edit_form";

export default function ProfileSetupPage() {
    // Initial content for a new user
    const emptyProfile = {
        fullName: "",
        gameName: "",
        gameId: "",
        serverId: "",
        roles: [],
        state: "",
        city: "",
        avatar_url: "/mock-avatar.png",
    };

    return (
        <ProfileEditForm initialData={emptyProfile} mode="setup" />
    );
}
