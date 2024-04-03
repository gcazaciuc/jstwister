"use client";
import { useState } from "react";
import {
    Heading,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { ProjectBriefing } from "./project-briefing";

interface TabbarProps {
    projectId: string;
}

const Tabbar = ({ projectId }: TabbarProps) => {
    const router = useRouter();
    const [tabIndex, setTabIndex] = useState(0);

    const [profile, setProfile] = useState<any | undefined>(undefined);
    const handleTabsChange = (index: number) => {
        setTabIndex(index);
    };

    return (
        <Tabs
            index={tabIndex}
            onChange={handleTabsChange}
            variant="soft-rounded"
            p={4}
        >
            <TabList>
                <Tab>Briefing</Tab>
                {/* <Tab>Tasks requests</Tab>
                <Tab>Additional services</Tab> */}
            </TabList>
            <TabPanels>
                <TabPanel>
                    <ProjectBriefing />
                </TabPanel>
                {/* <TabPanel>
                    <Heading as="h3" mt={4} fontSize={"lg"}>
                        Settings Content
                    </Heading>
                </TabPanel> */}
            </TabPanels>
        </Tabs>
    );
};

export default Tabbar;
