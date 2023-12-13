import "@/styles/highlight-js/atom-one-dark.css";
import "@/styles/blog.css";
import { Providers } from "./providers";
import { Center } from "@chakra-ui/react";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return (
        <Providers>
            <Center>{children}</Center>
        </Providers>
    );
}
