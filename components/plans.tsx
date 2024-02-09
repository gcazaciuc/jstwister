"use client";
import React from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Stack,
    Badge,
    Link,
    Container,
    VStack,
    useColorModeValue,
    UnorderedList,
    ListItem,
    Tooltip,
    Icon,
    ListIcon,
    List,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { SlCheck } from "react-icons/sl";

const plans: PricingPlanProps[] = [
    {
        title: "Presentation",
        description: "Perfect for 1-10 pages presentation websites",
        price: "49",
        priceId: "price_1OVDX6IUzRJ2Go2AXsYE3Fbl",
        isPopular: true,
        benefits: [
            {
                label: "Monthly security & critical fixes included",
                tooltip:
                    "On the Presentation plan you get only security and regular tech updates. No new features or bugfixes are included, however you can order custom development.",
            },
            {
                label: "Template based graphic design",
                tooltip:
                    "An original graphic design is not included. We use a template and customize it to your needs(colors, fonts etc ).",
            },
            {
                label: "World class hosting included",
                tooltip: "We host your website. All in the same monthly price",
            },
            {
                label: "Permanent security, performance and uptime monitoring",
                tooltip: "We permantently monitor your website for any issues",
            },
            {
                label: "Buy it anytime",
                tooltip:
                    "Want to host it somewhere else ? You can buy it anytime",
            },
        ],
    },
    // {
    //     title: "Medium",
    //     description: "1-10 pages websites, small internal tools",
    //     price: "119",
    //     priceId: "price_1OVDYTIUzRJ2Go2A3q8YATrY",
    //     isPopular: true,
    //     benefits: [
    //         {
    //             label: "Up to 40 free hours of initial app development( worth 2K EUR )",
    //             tooltip:
    //                 "You get up to 40 hours of free development time to build your web app.",
    //         },
    //         {
    //             label: "1h of development/fixes per month",
    //             tooltip:
    //                 "Every month you get 1 hours of free development time to use for bugfixes, upgrades or any other features you need added.",
    //         },
    //         {
    //             label: "Free PREMIUM graphic design or bring your own",
    //             tooltip:
    //                 "Provide your own design(Figma) or we can create one for you(at no additional cost).",
    //         },
    //         {
    //             label: "Free security & critical bugfixes",
    //             tooltip: "Any major bugs are fixed free of charge",
    //         },
    //         {
    //             label: "World class hosting included",
    //             tooltip: "We host your website. All in the same monthly price",
    //         },
    //         {
    //             label: "Permanent security, performance and uptime monitoring",
    //             tooltip: "We permantently monitor your website for any issues",
    //         },
    //         {
    //             label: "Buy it anytime",
    //             tooltip:
    //                 "Want to host it somewhere else ? You can buy it anytime",
    //         },
    //     ],
    // },
    // {
    //     title: "Large",
    //     description: "Complex presentation websites, E-commerce stores",
    //     price: "299",
    //     disabled: true,
    //     ctaText: "Coming soon",
    //     benefits: [
    //         {
    //             label: "Up to 160 free hours of initial app development(worth 8K EUR)",
    //             tooltip:
    //                 "You get up to 160 hours of free development time to build your web app(worth 8K euro).",
    //         },
    //         {
    //             label: "4h of maintenance/support/development per month",
    //             tooltip:
    //                 "Every month you get 4 hours of free development time to use for bugfixes, upgrades or any other features you need added.",
    //         },
    //         {
    //             label: "Free PREMIUM graphic design or bring your own",
    //             tooltip:
    //                 "Provide your own design(Figma) or we can create one for you(at no additional cost).",
    //         },
    //         {
    //             label: "Free critical bugfixes",
    //             tooltip: "Any major bugs are fixed free of charge",
    //         },
    //         {
    //             label: "World class hosting included",
    //             tooltip: "We host your website. All in the same monthly price",
    //         },
    //         {
    //             label: "Permanent security, performance and uptime monitoring",
    //             tooltip: "We permantently monitor your website for any issues",
    //         },
    //         {
    //             label: "Buy it anytime",
    //             tooltip:
    //                 "Want to host it somewhere else ? You can buy it anytime",
    //         },
    //     ],
    // },
    {
        title: "Custom development",
        disabled: true,
        ctaText: "Fully booked",
        description:
            "Large app or any other special requirements ? No problem.",
        price: "7K",
        benefits: [
            {
                label: "Unlimited requests",
                tooltip:
                    "You can request unlimited tasks and they will be completed one at a time",
            },
            {
                label: "Fullstack development, architecture, system design",
                tooltip:
                    "We do full-stack development in Typescript, Node.js, React, Next.js, GraphQL, Prisma, PostgreSQL, MongoDB, Redis, AWS, Docker, Kubernetes. We emphasize testing, documentation and system architecture.",
            },
            {
                label: "3-4 business days delivery time on average",
                tooltip:
                    "Depending on the complexity of the request, it can take anywhere from same day delivery to 7 days. However, on average, we fullfill your request in aboput 3-4 days",
            },
            {
                label: "Pause subscription anytime",
                tooltip:
                    "If you don't have work to give us, just pause your subscription. You will not loose the remaining days of the month. You can then resume when you have work.",
            },
            {
                label: "Custom terms for maintenance/support/development",
                tooltip:
                    "Need support and maintainance after development stage ? We have you covered.",
            },
        ],
    },
];

interface PricingPlanProps {
    title: string;
    description: string;
    price: string;
    priceId?: string;
    isPopular?: boolean;
    disabled?: boolean;
    ctaText?: string;
    benefits: { label: string; tooltip: string }[];
}
const gotoCheckout = (priceId?: string) =>
    async function () {
        if (!priceId) {
            return;
        }

        try {
            const response = await fetch("/api/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    lookup_key: priceId,
                }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error("URL not found in response");
            }
        } catch (error) {
            console.error(
                "There was a problem with the fetch operation:",
                error
            );
        }
    };

const PricingPlanCard: React.FC<PricingPlanProps> = ({
    title,
    description,
    price,
    isPopular,
    benefits,
    disabled,
    priceId,
    ctaText = "Get started",
}) => {
    const bg = useColorModeValue("white", "gray.700");
    const textColor = useColorModeValue("gray.700", "white");
    const router = useRouter();

    return (
        <Box
            bg={bg}
            boxShadow={"xl"}
            rounded={"md"}
            border={"1px solid black"}
            p={6}
            textAlign={"center"}
            position={"relative"}
            width={"100%"}
            maxW={"500px"}
        >
            {isPopular && (
                <Badge
                    position={"absolute"}
                    top={3}
                    left={3}
                    textTransform={"uppercase"}
                    bg={"purple.600"}
                    rounded={"xl"}
                    px={2}
                    py={1}
                    color={"white"}
                    fontSize={"sm"}
                >
                    Most popular
                </Badge>
            )}
            <Heading
                size={"medium"}
                fontWeight={"bold"}
                color={textColor}
                pt={4}
            >
                {title}
            </Heading>
            <Text mt={2} fontSize={"sm"} color={"gray.500"}>
                {description}
            </Text>
            <Text mt={4} fontSize={"5xl"} fontWeight={"bold"} color={textColor}>
                <Text
                    as={"span"}
                    fontSize={"xl"}
                    lineHeight={"3rem"}
                    verticalAlign={"top"}
                >
                    &euro;
                </Text>
                {price}
                <Text
                    as={"span"}
                    fontSize={"xl"}
                    lineHeight={"3rem"}
                    verticalAlign={"top"}
                >
                    /m
                </Text>
            </Text>
            <Button
                isDisabled={disabled}
                onClick={() => router.push(`/auth/signup`)}
                mt={2}
                mb={2}
                bg={"black"}
                color={"white"}
                rounded={"full"}
                _hover={{ bg: "gray.900" }}
            >
                {ctaText}
            </Button>
            <Box>
                <Link
                    color={"black"}
                    borderBottom={"1px dotted black"}
                    textDecoration={"none"}
                >
                    Book a call
                </Link>
            </Box>
            <Box mt={8}>
                <Text fontSize={"medium"} mb={2}>
                    What is included
                </Text>
                <List spacing={2} textAlign={"left"}>
                    {benefits.map((benefit, index) => (
                        <React.Fragment key={benefit.label}>
                            <ListItem
                                key={index}
                                fontSize={"small"}
                                color="black"
                            >
                                <ListIcon as={SlCheck} color="green.500" />
                                {benefit.label}
                                <Tooltip
                                    key={index}
                                    label={benefit.tooltip}
                                    aria-label={benefit.tooltip}
                                >
                                    <Icon as={InfoOutlineIcon} ml={2} />
                                </Tooltip>
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </Box>
        </Box>
    );
};

const PricingPlansSection: React.FC = () => {
    return (
        <Box p={12} bgColor={"#f1f5f9"} id="#plans">
            <Heading as="h2" mb={10} textAlign="center">
                Plans
            </Heading>

            <Text mb={5} textAlign="center">
                Simple pricing with no hidden fees.
            </Text>
            <Text mb={5} textAlign="center">
                Start right away — cancel anytime, no contract, no risk.
            </Text>
            <Stack spacing={4} direction={["row"]} justifyContent={"center"}>
                {plans.map((plan, index) => (
                    <PricingPlanCard key={index} {...plan} />
                ))}
            </Stack>
        </Box>
    );
};

export default PricingPlansSection;
