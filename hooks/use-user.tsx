import { useSupabase } from "@/components/providers/supabase-provider";
import { User } from "@supabase/supabase-js";
import { useState, useEffect, use } from "react";

const useUser = () => {
    const [user, setUser] = useState<User | null>(null);
    const { supabase } = useSupabase();
    const logout = async () => {
        await supabase.auth.signOut();
    };
    const fetchUser = async () => {
        const {
            data: { user: currentUser },
        } = await supabase.auth.getUser();

        if (currentUser) {
            // Assuming the user's first name and last name are stored in the metadata
            // If not, adjust according to your user data structure
            setUser(currentUser);
        }
    };
    useEffect(() => {
        fetchUser();
    }, []);

    return { user, logout };
};

export default useUser;
