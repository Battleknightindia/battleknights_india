"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export interface ProfileConfig {
    fullName: string;
    gameName: string;
    gameId: string;
    serverId: string;
    roles: string[];
    state: string;
    city: string;
    avatar_url: string;
}

export async function getProfile(): Promise<ProfileConfig | null> {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
        return null;
    }

    const { data: profile, error } = await supabase
        .from("profiles")
        .select(`
            "fullName",
            ign,
            game_id,
            server_id,
            roles,
            state,
            city,
            avatar_url
        `)
        .eq("user_id", user.id)
        .single();

    if (error && error.code !== 'PGRST116') {
        console.error("Error fetching profile:", error);
        return null;
    }

    if (profile) {
        return {
            fullName: profile.fullName || "",
            gameName: profile.ign || "",
            gameId: profile.game_id || "",
            serverId: profile.server_id || "",
            roles: profile.roles || [],
            state: profile.state || "",
            city: profile.city || "",
            avatar_url: profile.avatar_url || "/mock-avatar.png",
        };
    }

    // Fallback if no profile found (User skipped setup)
    // Construct default profile from Auth Metadata
    return {
        fullName: user.user_metadata.full_name || "",
        gameName: "",
        gameId: "",
        serverId: "",
        roles: [],
        state: "",
        city: "",
        avatar_url: user.user_metadata.avatar_url || "/mock-avatar.png",
    };
}

export async function updateProfile(formData: ProfileConfig) {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
        return { error: "Unauthorized" };
    }

    // Map frontend camelCase to DB snake_case/quoted columns
    const dbData = {
        user_id: user.id,
        "fullName": formData.fullName,
        ign: formData.gameName,
        game_id: formData.gameId,
        server_id: formData.serverId,
        roles: formData.roles,
        state: formData.state,
        city: formData.city,
        avatar_url: formData.avatar_url,
        updated_at: new Date().toISOString(),
    };

    const { error } = await supabase
        .from("profiles")
        .upsert(dbData, { onConflict: "user_id" });

    if (error) {
        console.error("Error updating profile:", error);
        return { error: error.message };
    }

    revalidatePath("/profile");
    revalidatePath("/profile/edit");
    revalidatePath("/profile/setup");

    return { success: true };
}
