"use client";
import { useState } from "react";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Nav from "../../components/client-portal/client-nav";
import { useRouter } from "next/navigation";

const HomePage = () => {
    const router = useRouter();
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabsChange = (index: number) => {
        setTabIndex(index);
        if (index === 0) {
            router.push("/dashboard");
        } else {
            router.push("/settings");
        }
    };

    return (
        <Box bg="white">
            <Nav />
            <Tabs index={tabIndex} onChange={handleTabsChange}>
                <TabList>
                    <Tab>Dashboard</Tab>
                    <Tab>Settings</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>Dashboard Content</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Settings Content</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default HomePage;
