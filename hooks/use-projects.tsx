import { useSupabase } from "@/components/providers/supabase-provider";
import { useState, useEffect } from "react";

const useProjects = () => {
    const [projects, setProjects] = useState<Array<any> | null>([]);
    const { supabase } = useSupabase();
    const fetchProjects = async () => {
        // Fetch the projects from the database
        const { data: projects, error } = await supabase
            .from("projects")
            .select();
        setProjects(projects);
    };
    useEffect(() => {
        fetchProjects();
    }, []);

    return projects;
};

export default useProjects;
