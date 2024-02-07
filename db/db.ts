import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const db = createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_PUBLIC_KEY as string
);
