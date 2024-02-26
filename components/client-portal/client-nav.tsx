"use client";
import {
    Flex,
    Text,
    Avatar,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import { SlUser } from "react-icons/sl";
import { useRouter } from "next/navigation";
import { useSupabase } from "../providers/supabase-provider";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
const UserMenuButton = (props: any) => (
    <Avatar
        {...props}
        size="md"
        bgColor="purple.500"
        name={`${props.userData?.firstName}-${props.userData?.lastName}`}
        icon={<SlUser color="red" />}
    />
);
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
            setUser(currentUser);
        }
    };
    useEffect(() => {
        fetchUser();
    }, []);
    const userData = user?.user_metadata;
    // console.log(userData);
    return (
        <Flex justify="space-between" align="center" bg="gray.100" p={4}>
            <Text fontSize="xl" fontWeight="bold" color="black">
                Netcraft - Client Portal
            </Text>
            {user ? (
                <Menu>
                    <MenuButton as={UserMenuButton} />
                    <MenuList>
                        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                    </MenuList>
                </Menu>
            ) : null}
        </Flex>
    );
};

export default Nav;
