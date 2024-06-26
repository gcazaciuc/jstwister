"use client";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import NextLink from "next/link";
import {
    Box,
    Flex,
    IconButton,
    Stack,
    useDisclosure,
    Center,
    Link,
    useBreakpointValue,
    Text,
    HStack,
    Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { usePathname, useRouter } from "next/navigation";
import { useSupabase } from "./providers/supabase-provider";
import { User } from "@supabase/supabase-js";
import { SlArrowRight } from "react-icons/sl";
import { Trans, t } from "@lingui/macro";

// Define the navigation links
const defaultNavLinks = [
    { label: t`Home`, href: "#hero" },
    { label: t`How it works`, href: "#how-it-works" },
    { label: t`Benefits`, href: "#benefits" },
    { label: t`Technology`, href: "#technology" },
    { label: t`Plans`, href: "#plans" },
    { label: t`Blog`, href: "/blog/1" }, // Assuming this is a separate page
];

interface NavbarProps {
    navLinks?: { label: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ navLinks = defaultNavLinks }) => {
    const { isOpen, onToggle } = useDisclosure();
    const pathname = usePathname();
    const router = useRouter();
    const [user, setUser] = useState<User | undefined | null>(undefined);
    const { supabase } = useSupabase();
    // Determine if the current breakpoint is desktop or mobile
    const isMobile = useBreakpointValue({ base: false, sm: true, md: false });
    const PortalUser =
        user === null ? (
            <Button
                bg="white"
                color="black"
                _hover={{ bg: "gray.300" }}
                size="lg"
                mt={4}
                onClick={() => router.push("/auth/signin")}
            >
                <Trans>Login</Trans>
            </Button>
        ) : user !== undefined ? (
            <Button
                bg="white"
                color="black"
                _hover={{ bg: "gray.300" }}
                size="lg"
                variant={"ghost"}
                rightIcon={<SlArrowRight />}
                mt={4}
                onClick={() => router.push("/portal")}
            >
                <Trans>Client portal</Trans>
            </Button>
        ) : null;
    const fetchUser = async () => {
        const {
            data: { user: currentUser },
        } = await supabase.auth.getUser();

        setUser(currentUser);
    };

    useEffect(() => {
        const hash = window.location.hash; // Remove the '#' character from the hash
        if (hash) {
            scroller.scrollTo(hash, {
                duration: 500, // Scroll animation duration in milliseconds
                smooth: "easeInOutQuart", // Type of easing animation
                offset: -50,
            });
        }
        fetchUser();
    }, []);

    return (
        <Box
            as="nav"
            pos="fixed"
            top={isMobile ? "0" : "initial"}
            left="0"
            right="0"
            zIndex="3"
            bg="black"
            color="white"
            borderRadius={0}
            borderColor={"white"}
            mx="auto"
            width="full"
        >
            <Flex justifyContent={"space-between"} p={2}>
                <HStack p={2} spacing={10}>
                    <Text
                        sx={{
                            fontSize: "3xl", // Set the size
                            color: "white", // Choose a color
                            letterSpacing: "wider", // Adjust letter spacing
                            textTransform: "uppercase", // Uppercase letters
                            fontWeight: "bold",
                            lineHeight: "shorter",
                            mr: "10",
                            // You can add more CSS properties here for further customization
                        }}
                    >
                        Netcraft
                    </Text>

                    <Flex
                        h="50px"
                        alignItems="center"
                        justifyContent="center"
                        wrap="wrap"
                    >
                        {isMobile ? (
                            <IconButton
                                size={"md"}
                                icon={
                                    isOpen ? <CloseIcon /> : <HamburgerIcon />
                                }
                                aria-label={"Open Menu"}
                                color="white"
                                onClick={onToggle}
                                position="absolute"
                                top="1rem"
                                right="1rem"
                            />
                        ) : null}
                        <Stack
                            direction={isMobile ? "column" : "row"}
                            display={isOpen || !isMobile ? "flex" : "none"}
                            width={isMobile ? "full" : "auto"}
                            alignItems="center"
                            justifyContent={"center"}
                            flexGrow={1}
                            mt={{ base: 4, md: 0 }}
                            spacing={4}
                            rounded="md"
                        >
                            {navLinks.map((link, index) =>
                                link.href.indexOf("#") >= 0 &&
                                pathname === "/" ? (
                                    <ScrollLink
                                        to={link.href}
                                        smooth={true}
                                        duration={500}
                                        offset={-50}
                                        key={link.href}
                                        spy={true}
                                        hashSpy={true}
                                    >
                                        <Link
                                            p={2}
                                            href={link.href}
                                            borderRadius="md"
                                            _hover={{
                                                bg: "whiteAlpha.300",
                                            }}
                                        >
                                            {link.label}
                                        </Link>
                                    </ScrollLink>
                                ) : (
                                    <Link
                                        key={link.href}
                                        p={2}
                                        href={
                                            link.href.indexOf("#") === 0
                                                ? `/${link.href}`
                                                : link.href
                                        }
                                        borderRadius="md"
                                        _hover={{ bg: "whiteAlpha.300" }}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}
                        </Stack>
                    </Flex>
                </HStack>
                {PortalUser}
            </Flex>
        </Box>
    );
};

export default Navbar;
