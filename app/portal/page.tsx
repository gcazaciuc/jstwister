"use client";
import Nav from "@/components/client-portal/client-nav";
import { ProjectBriefing } from "@/components/client-portal/project-briefing";
import Sidebar from "@/components/client-portal/sidebar";
import Tabbar from "@/components/client-portal/tabbar";
import useBriefing from "@/hooks/use-briefing";
import useProjects from "@/hooks/use-projects";
import { Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const PortalMainPage = () => {
    const [projectId, setSelectedProject] = useState<string>("");
    const projects = useProjects();
    const briefing = useBriefing(projectId);
    const onProjectChange = (projId: string) => {
        setSelectedProject(projId);
    };
    useEffect(() => {
        if (projects && projects.length && !projectId) {
            setSelectedProject(projects[0]?.id);
        }
    }, [projects]);
    return (
        <Stack color="black" minHeight={"100vh"} spacing={0}>
            <Nav onProjectChange={onProjectChange} projects={projects} />
            <Sidebar />
            <Stack ml={250}>
                <ProjectBriefing projectId={projectId} briefing={briefing} />
            </Stack>
        </Stack>
    );
};

export default PortalMainPage;
