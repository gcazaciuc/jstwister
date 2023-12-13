// app/providers.tsx
"use client";
import { Providers as CommonProviders } from "../../providers";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CommonProviders>
            <Prose>{children}</Prose>
        </CommonProviders>
    );
}
