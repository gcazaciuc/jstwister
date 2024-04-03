import { Box, Stack, VStack } from "@chakra-ui/react";
import Nav from "../../components/client-portal/client-nav";
import { redirect } from "next/navigation";
import { createClient } from "@/supabase/server";
import Tabbar from "@/components/client-portal/tabbar";

const PortalLayout = async ({ children }: { children: React.ReactNode }) => {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/");
    }

    return (
        <Stack bg="#F3F6FA" minHeight={"100vh"} spacing={0}>
            {children}
        </Stack>
    );
};

export default PortalLayout;
