import { SupabaseClient } from "@supabase/supabase-js";

export const signIn = async (
    supabase: SupabaseClient,
    email: string,
    password: string
) => {
    const {
        data: { user, session, weakPassword },
    } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    return { user, session, weakPassword };
};
