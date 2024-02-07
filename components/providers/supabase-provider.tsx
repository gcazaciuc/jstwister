"use client";

// import type { Database } from "@/types_db";
import { createBrowserClient } from "@supabase/ssr";
import { SupabaseClient } from "@supabase/supabase-js";
import { getSupportedArchTriples } from "next/dist/build/swc";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type SupabaseContext = {
    supabase: SupabaseClient<any>;
};

const Context = createContext<SupabaseContext | undefined>(undefined);

export default function SupabaseProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [supabase] = useState(() =>
        createBrowserClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY!
        )
    );
    const router = useRouter();

    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            console.log("Supabase event:", event, session);
            if (event === "SIGNED_IN") router.refresh();
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [router, supabase]);

    return (
        <Context.Provider value={{ supabase }}>
            <>{children}</>
        </Context.Provider>
    );
}

export const useSupabase = () => {
    const context = useContext(Context);

    if (context === undefined) {
        throw new Error("useSupabase must be used inside SupabaseProvider");
    }

    return context;
};
