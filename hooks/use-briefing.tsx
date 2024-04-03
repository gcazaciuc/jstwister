import { useSupabase } from "@/components/providers/supabase-provider";
import { useState, useEffect } from "react";

interface WebsiteBriefingDTO {
    websiteObjectives: string;
    hasBoughtDomain: string;
    hasLogo: string;
    preferredDomain: string;
    competitorWebsites: string;
    websitesLiked: string;
    designObservations: string;
    id: number;
}

const useBriefing = (projectId: string): WebsiteBriefingDTO | null => {
    const [briefing, setBriefing] = useState<WebsiteBriefingDTO | null>(null);
    const { supabase } = useSupabase();
    const fetchBriefing = async () => {
        // Fetch the projects from the database
        const { data: briefing, error } = await supabase
            .from("project_briefing")
            .select()
            .eq("project_id", projectId)
            .limit(1)
            .single();
        setBriefing({
            websiteObjectives: briefing?.website_objective,
            hasBoughtDomain: briefing?.has_domain,
            hasLogo: briefing?.has_logo,
            preferredDomain: briefing?.domain,
            competitorWebsites: briefing?.competitors,
            websitesLiked: briefing?.websites_liked,
            designObservations: briefing?.design_observations,
            id: briefing?.id,
        });
    };
    useEffect(() => {
        if (projectId) {
            fetchBriefing();
        }
    }, [projectId]);

    return briefing;
};

export default useBriefing;
