"use client";
import {
    Box,
    Flex,
    Text,
    Avatar,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useSupabase } from "../providers/supabase-provider";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

const Nav = () => {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const { supabase } = useSupabase();
    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/");
    };
    const fetchUser = async () => {
        const {
            data: { user: currentUser },
        } = await supabase.auth.getUser();

        if (currentUser) {
            // Assuming the user's first name and last name are stored in the metadata
            // If not, adjust according to your user data structure
            setUser(user);
        }
    };
    useEffect(() => {
        fetchUser();
    }, []);
    const userData = user?.user_metadata;
    console.log("User data", userData);
    return (
        <Flex justify="space-between" align="center" bg="gray.100" p={4}>
            <Text fontSize="xl" fontWeight="bold" color="black">
                Netcraft
            </Text>
            <Menu>
                <MenuButton as={Avatar} name="User Initials" />
                <MenuList>
                    <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    );
};

export default Nav;
