// src/lib/actions/auth-actions.ts
'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function signInWithOAuth(provider: 'github' | 'google' | 'discord') {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback?next=/profile/setup`,
        },
    });

    if (error) {
        return { error: error.message };
    }

    if (data.url) {
        redirect(data.url);
    }
}

export async function signOut() {
    const supabase = await createClient();

    await supabase.auth.signOut();
    revalidatePath('/', 'layout');
    redirect('/auth/login');
}