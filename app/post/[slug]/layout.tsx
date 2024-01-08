import "@/styles/highlight-js/atom-one-dark.css";
import "@/styles/blog.css";
import { Providers } from "./providers";
import { Center } from "@chakra-ui/react";
import Navbar from "@/components/nav";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
        <Providers>
            <Navbar />
            {children}
        </Providers>
    );
}
