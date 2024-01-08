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
            p={4}
            flex={1}
            bg={"gray.100"}
            borderRadius="lg"
            boxShadow="md"
            role="group"
            _hover={{
                transform: "scale(1.05)",
                boxShadow: "md",
                border: "1px solid transparent",
            }}
            transition="transform 0.2s, border 0.2s"
        >
            <VStack spacing={2}>
                <Box
                    as="span"
                    fontSize="2xl"
                    transition="transform 0.5s"
                    _groupHover={{ transform: "rotate(360deg)" }}
                >
                    {service.icon}
                </Box>
                <Text fontWeight="bold">{service.title}</Text>
                <Text color="gray.500">{service.description}</Text>
            </VStack>
        </Box>
    );
};

export default ServiceBox;
