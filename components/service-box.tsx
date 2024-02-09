// components/ServiceBox.tsx
import React from "react";
import { Box, Text, useColorModeValue, VStack } from "@chakra-ui/react";

export interface ServiceItem {
    id: number;
    icon: JSX.Element; // You can replace this with the specific type for your icons
    title: string;
    description: string;
}

interface ServiceBoxProps {
    service: ServiceItem;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ service }) => {
    return (
        <Box
            py={4}
            px={4}
            flex={1}
            role="group"
            _hover={{
                transform: "scale(1.05)",
                boxShadow: "md",
            }}
            transition="transform 0.2s, border 0.2s"
        >
            <VStack spacing={2}>
                <Box
                    as="span"
                    fontSize="4xl"
                    transition="transform 0.5s"
                    mb={6}
                    color="purple.500"
                    _groupHover={{ transform: "rotate(360deg)" }}
                >
                    {service.icon}
                </Box>
                <Text fontWeight="bold" fontSize="xl">
                    {service.title}
                </Text>
                <Text color="white" textAlign={"center"}>
                    {service.description}
                </Text>
            </VStack>
        </Box>
    );
};

export default ServiceBox;
