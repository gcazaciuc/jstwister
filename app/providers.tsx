// app/providers.tsx
"use client";

import SupabaseProvider from "@/components/providers/supabase-provider";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { messages as enMessages } from "@/locales/en/messages";
import { messages as roMessages } from "@/locales/ro/messages";

const isClient = typeof window !== "undefined";

// if (!isClient) {
i18n.load({
    en: enMessages,
    ro: roMessages,
});

i18n.activate("ro");
// }

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
                <I18nProvider i18n={i18n}>
                    <ChakraProvider theme={theme}>{children}</ChakraProvider>
                </I18nProvider>
            </SupabaseProvider>
        </CacheProvider>
    );
}
