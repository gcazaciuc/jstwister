// app/providers.tsx
"use client";

import SupabaseProvider from "@/components/providers/supabase-provider";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

const theme = extendTheme(
    {
        colors: {
            darkBlue: "#0e1c2f",
            lightGrey: "#334155",
        },
        gradients: {
            blueToPurple: "linear-gradient(88deg, #7557ff 0,#fe97dc 100%)",
            // Add as many custom gradients as you like
        },
    },
    withProse()
);

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <SupabaseProvider>
                <ChakraProvider theme={theme}>{children}</ChakraProvider>
            </SupabaseProvider>
        </CacheProvider>
    );
}
