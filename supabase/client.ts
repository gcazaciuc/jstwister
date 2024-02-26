import { createBrowserClient } from "@supabase/ssr";

// Create a single supabase client for interacting with your database
// export const db = createClient(
//     process.env.SUPABASE_URL as string,
//     process.env.SUPABASE_PUBLIC_KEY as string
// );

export function createClient() {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY!
    );
}
