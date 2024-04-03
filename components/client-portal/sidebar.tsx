"use client";
import { List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { SlGlobe, SlPeople, SlWallet } from "react-icons/sl";

interface SectionProps {
    title: string;
    items?: { title: string; href: string; icon: any }[];
    expanded?: boolean;
}
const sections = [
    {
        title: "Dashboard",
        href: "/dashboard",
        items: [
            { title: "My website", href: "/projects", icon: SlGlobe },
            { title: "My account", href: "/profile", icon: SlPeople },
            { title: "Billing", href: "/billing", icon: SlWallet },
        ],
    },
];

const MotionStack = motion(Stack);
const Section = (props: SectionProps) => (
    <Stack direction="column" mb={8}>
        <Text
            fontSize="md"
            fontWeight="bold"
            color="gray.600"
            textAlign={"center"}
        >
            {props.expanded ? props.title : "..."}
        </Text>
        <Stack
            direction="column"
            spacing={4}
            rounded={"md"}
            bg="white"
            border={"1px solid black"}
            p={8}
        >
            <List spacing={3}>
                {props.items?.map((item, index) => (
                    <ListItem key={item.title} fontSize={"sm"}>
                        <ListIcon as={item.icon} color="gray.500" />
                        {props.expanded ? (
                            <Link href={"/portal"}>{item.title}</Link>
                        ) : null}
                    </ListItem>
                ))}
            </List>
        </Stack>
    </Stack>
);

const Sidebar = () => {
    const router = useRouter();
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <MotionStack
            direction="column"
            p={4}
            maxW={"300px"}
            position="absolute"
            top="80px"
            bottom="0"
            left="0"
            borderRight={"1px solid"}
            borderColor={"gray.200"}
            // whileHover={{ width: "auto", opacity: 1 }}
            // onMouseOver={() => setIsExpanded(true)}
            // onMouseOut={() => setIsExpanded(false)}
            whiteSpace={"nowrap"}
        >
            {sections.map((section, index) => {
                return (
                    <Section
                        key={section.title}
                        title={section.title}
                        items={section.items}
                        expanded={isExpanded}
                    />
                );
            })}
        </MotionStack>
    );
};

export default Sidebar;
