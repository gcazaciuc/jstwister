"use client";
import {
    Flex,
    Text,
    Avatar,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    forwardRef,
    Stack,
    Select,
    Box,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import useUser from "@/hooks/use-user";
import { SlLogout } from "react-icons/sl";
import Link from "next/link";

const UserMenuButton = forwardRef((props: any, ref) => (
    <Avatar
        {...props}
        size="md"
        ref={ref}
        bgColor="#020024"
        // name={`${props.userData?.firstName}-${props.userData?.lastName}`}
    />
));
interface NavProps {
    onProjectChange: (projectId: string) => void;
    projects?: any[] | null;
}

const Nav = ({ onProjectChange, projects }: NavProps) => {
    const router = useRouter();
    const { user, logout } = useUser();

    const handleLogout = async () => {
        await logout();
        router.push("/");
    };
    const userData = user?.user_metadata;
    // console.log(userData);
    return (
        <Flex
            justify="space-between"
            align="center"
            bgGradient="linear(to-r,rgba(2,0,36,1) 0%, rgba(121,40,202,1) 85%, rgba(255,0,128,0.5) 100%)"
            p={4}
        >
            <Box w={180} borderRight="1px solid gray.500">
                <Text fontSize="xl" fontWeight="bold" color="white">
                    <Link href="/">Netcraft</Link>
                </Text>
            </Box>
            <Stack direction="row" spacing={4}>
                <Select
                    size="md"
                    color="white"
                    onChange={(ev) => onProjectChange(ev.currentTarget.value)}
                >
                    {projects?.map((project) => (
                        <option key={project.name} value={project.id} selected>
                            {project.name}
                        </option>
                    ))}
                </Select>
                {user ? (
                    <Menu>
                        <MenuButton as={UserMenuButton} />
                        <MenuList>
                            <MenuItem
                                onClick={handleLogout}
                                icon={<SlLogout />}
                                p={4}
                                _hover={{ bg: "gray.100" }}
                                _focus={{ bg: "gray.300" }}
                            >
                                Log Out
                            </MenuItem>
                        </MenuList>
                    </Menu>
                ) : null}
            </Stack>
        </Flex>
    );
};

export default Nav;
