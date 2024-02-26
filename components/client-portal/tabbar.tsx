"use client";
import { useState } from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
const Tabbar = () => {
    const router = useRouter();
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabsChange = (index: number) => {
        setTabIndex(index);
        // if (index === 0) {
        //     router.push("/dashboard");
        // } else {
        //     router.push("/settings");
        // }
    };

    return (
        <Tabs
            index={tabIndex}
            onChange={handleTabsChange}
            variant="soft-rounded"
            p={4}
        >
            <TabList>
                <Tab>Projects</Tab>
                <Tab>Profile</Tab>
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
    );
};

export default Tabbar;
