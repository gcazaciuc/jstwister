// components/ServicesSection.tsx
import React from "react";
import {
    Box,
    Heading,
    Text,
    Wrap,
    WrapItem,
    Badge,
    Center,
    Stack,
    Container,
    chakra,
    Image,
} from "@chakra-ui/react";
import ServiceBox, { ServiceItem } from "./service-box";
import {
    SlArrowRightCircle,
    SlBasketLoaded,
    SlCloudUpload,
    SlNote,
    SlSupport,
    SlTag,
} from "react-icons/sl";
import { Trans, t } from "@lingui/macro";

interface ServicesSectionProps {
    services?: ServiceItem[];
}
const servicesList: ServiceItem[] = [
    // Add your services here
    {
        id: 1,
        icon: <SlTag />,
        title: t`Website development`,
        description: t`We're experts in putting your business online. We hand craft perfectly optimized websites and we maintain them for you`,
    },
    {
        id: 2,
        icon: <SlBasketLoaded />,
        title: t`SEO`,
        description: t`For a small flat monthly fee we continously improve the on-page and off-page SEO of your website.`,
    },
    {
        id: 3,
        icon: <SlSupport />,
        title: t`Marketing`,
        description: t`We offer an addon subscription for all websites hosted with us: PPC and Social Media Marketing for a flat fee`,
    },
    {
        id: 4,
        icon: <SlCloudUpload />,
        title: t`Copywriting`,
        description: t`Need monthly blog posts ? Or maybe you need a revamp of the texts on your home page to better connect with customers ? We got you covered.`,
    },
    // ... other services
];
const ServicesSection: React.FC<ServicesSectionProps> = ({
    services = servicesList,
}) => {
    return (
        <Box as="section" p={5} bg="white" pt={100} pb={100}>
            <Container maxW="container.xl">
                <Stack direction="column" alignItems={"center"} spacing={4}>
                    <Badge colorScheme="purple">Services</Badge>
                    <Heading my={2}>
                        <Trans>Services We Provide On Subscription</Trans>
                    </Heading>
                    <Text color="gray.500" mb={4}>
                        <Trans>
                            We{" "}
                            <Image
                                src={"/icons/heart.svg"}
                                alt="Heart"
                                w={5}
                                h={5}
                                display={"inline"}
                            />{" "}
                            small businesses and startups.
                        </Trans>
                    </Text>
                </Stack>
                <Stack
                    bg="black"
                    color="white"
                    p={5}
                    spacing={4}
                    borderRadius="lg"
                    justify="center"
                    mt="10"
                    direction={"row"}
                    flexBasis={"100%"}
                >
                    {services.map((service) => (
                        <ServiceBox key={service.id} service={service} />
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default ServicesSection;
