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
} from "@chakra-ui/react";

const plans: PricingPlanProps[] = [
    {
        title: "Micro",
        description: "Perfect for Presentation/Portfolio/Landing page websites",
        price: "149 EUR/month",
        benefits: [
            "Up to 50 free hours of initial development",
            "3h of maintenance/support/development per month",
            "Free web design or bring your own",
            "Free critical bugfixes",
            "Hosting/infrastructure included",
            "Buy it anytime starting from 1 EUR",
        ],
    },
    {
        title: "Small",
        description: "Small SASS apps, E-commerce apps",
        price: "499 EUR/month",
        benefits: [
            "Up to 250 free hours of initial development",
            "8h of maintenance/support/development per month",
            "Free web design or bring your own",
            "Free critical bugfixes",
            "Hosting/infrastructure costs included",
            "Buy it anytime starting from 1 EUR",
        ],
    },
    {
        title: "Standard",
        description: "Medium sized SAAS apps, E-commerce apps, Social networks",
        isPopular: true,
        price: "999 EUR/month",
        benefits: [
            "Up to 500 free hours of initial development",
            "16h of maintenance/support/development per month",
            "Free web design or bring your own",
            "Free critical bugfixes",
            "Hosting/infrastructure costs included",
            "Buy it anytime starting from 1 EUR",
        ],
    },
    {
        title: "Custom",
        description: "Large app or any other special requirements ? No problem.",
        price: "Get a quote",
        benefits: [
            "Any complexity apps",
            "Hosting/infrastructure costs included",
            "Buy it anytime",
            "Up time monitoring included",
        ],
    },
];

interface PricingPlanProps {
    title: string;
    description: string;
    price: string;
    isPopular?: boolean;
    benefits: string[];
}

const PricingPlanCard: React.FC<PricingPlanProps> = ({
    title,
    description,
    price,
    isPopular,
    benefits,
}) => {
    const bg = useColorModeValue("white", "gray.700");
    const textColor = useColorModeValue("gray.700", "white");

    return (
        <Box
            bg={bg}
            boxShadow={"xl"}
            rounded={"md"}
            // overflow={"hidden"}
            p={6}
            textAlign={"center"}
            position={"relative"}
            width={"100%"}
        >
            {isPopular && (
                <Badge
                    position={"absolute"}
                    top={3}
                    left={3}
                    textTransform={"uppercase"}
                    bg={"red.400"}
                    rounded={"xl"}
                    px={2}
                    py={1}
                    color={"white"}
                    fontSize={"sm"}
                >
                    Most popular
                </Badge>
            )}
            <Heading size={"lg"} fontWeight={"bold"} color={textColor}>
                {title}
            </Heading>
            <Text mt={2} fontSize={"sm"} color={"gray.500"}>
                {description}
            </Text>
            <Text mt={4} fontSize={"5xl"} fontWeight={"bold"} color={textColor}>
                {price}
            </Text>
            <Button
                mt={8}
                mb={2}
                bg={"black"}
                color={"white"}
                rounded={"full"}
                _hover={{ bg: "gray.900" }}
            >
                Get started
            </Button>
            <Box>
                <Link color={"black"} borderBottom={"1px dotted black"}>
                    Book a call
                </Link>
            </Box>
            <Box mt={8}>
                <Text fontSize={"xl"} mb={2}>
                    What is included
                </Text>
                <UnorderedList spacing={2} textAlign={"left"}>
                    {benefits.map((benefit, index) => (
                        <ListItem key={index}>{benefit}</ListItem>
                    ))}
                </UnorderedList>
            </Box>
        </Box>
    );
};

const PricingPlansSection: React.FC = () => {
    return (
        <Box p={12} bgColor={"#DBE3ED"}>
            <Heading as="h2" mb={10} textAlign="center">
                Plans
            </Heading>

            <Text mb={5} textAlign="center">
                Simple pricing with no hidden fees.
            </Text>
            <Text mb={5} textAlign="center">
                Start right away — cancel anytime, no contract, no risk.
            </Text>
            <Stack spacing={4} direction={["row"]}>
                {plans.map((plan, index) => (
                    <PricingPlanCard key={index} {...plan} />
                ))}
            </Stack>
        </Box>
    );
};

export default PricingPlansSection;
