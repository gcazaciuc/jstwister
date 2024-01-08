// components/ServicesSection.tsx
import React from "react";
import HeartSVG from "../public/icons/heart.svg";
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

interface ServicesSectionProps {
    services?: ServiceItem[];
}
const servicesList: ServiceItem[] = [
    // Add your services here
    {
        id: 1,
        icon: <SlTag />,
        title: "Presentation websites",
        description:
            "We're experts in putting your business online. We hand craft crazy fast websites and we maintain them for you",
    },
    {
        id: 2,
        icon: <SlBasketLoaded />,
        title: "E-commerce websites",
        description:
            "Want to start selling with a highly customizable platform? We're here to help.",
    },
    {
        id: 3,
        icon: <SlSupport />,
        title: "Internal tools",
        description: "Got a business process that needs to be automated?",
    },
    {
        id: 4,
        icon: <SlCloudUpload />,
        title: "SASS apps",
        description: "Got an idea for the next Unicorn app ? Get in touch",
    },
    // ... other services
];
const ServicesSection: React.FC<ServicesSectionProps> = ({
    services = servicesList,
}) => {
    return (
        <Box as="section" p={5} bg="white" pt={100} pb={200}>
            <Container maxW="container.xl">
                <Stack direction="column" alignItems={"center"} spacing={4}>
                    <Badge colorScheme="purple">Services</Badge>
                    <Heading my={2}>
                        Services We Provide On Subscription
                    </Heading>
                    <Text color="gray.500" mb={4}>
                        We{" "}
                        <Image
                            src={"/icons/heart.svg"}
                            alt="Heart"
                            w={5}
                            h={5}
                            display={"inline"}
                        />{" "}
                        small businesses and startups.
                    </Text>
                </Stack>
                <Stack
                    spacing={4}
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
