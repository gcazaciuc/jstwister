import { Box, Stack, VStack } from "@chakra-ui/react";
import Nav from "../../components/client-portal/client-nav";
import { redirect } from "next/navigation";
import { createClient } from "@/supabase/server";
import Tabbar from "@/components/client-portal/tabbar";

const PortalPage = async () => {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/");
    }

    return (
        <Stack bg="white" height={"100vh"} spacing={4}>
            <Nav />
            <Tabbar />
        </Stack>
    );
};

export default PortalPage;
