"use client";
import { ProjectBriefing } from "@/components/client-portal/project-briefing";
import useBriefing from "@/hooks/use-briefing";

interface DesignBriefingProps {
    projectId: string;
}

const DesignBriefing = ({ projectId }: DesignBriefingProps) => {
    const briefing = useBriefing(projectId);
    console.log("briefing", briefing, projectId);

    return <ProjectBriefing projectId={projectId} briefing={briefing} />;
};

export default DesignBriefing;
