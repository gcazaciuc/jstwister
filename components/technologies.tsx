"use client";
import React from "react";
import {
    Box,
    SimpleGrid,
    Heading,
    Image,
    Text,
    VStack,
    Container,
    useColorModeValue,
} from "@chakra-ui/react";

interface TechnologyCardProps {
    logoUrl: string;
    label: string;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ logoUrl, label }) => {
    const cardBg = useColorModeValue("gray.200", "gray.600");

    return (
        <VStack
            bg={cardBg}
            rounded="md"
            boxShadow="sm"
            p={4}
            align="center"
            spacing={3}
        >
            <Image
                src={logoUrl}
                boxSize="50px"
                objectFit="contain"
                alt={label}
            />
            <Text fontSize="sm" fontWeight={"bold"}>
                {label}
            </Text>
        </VStack>
    );
};

const TechnologiesWeUse: React.FC = () => {
    const technologies: TechnologyCardProps[] = [
        // Populate with your technologies
        { logoUrl: "/react-2.svg", label: "React" },
        { logoUrl: "/next-js.svg", label: "Next.js" },
        { logoUrl: "/redux.svg", label: "Redux" },
        { logoUrl: "/mobx.svg", label: "MobX" },
        { logoUrl: "/typescript.svg", label: "TypeScript" },
        { logoUrl: "/nodejs.svg", label: "NodeJS" },
        // Add more technologies here
    ];

    return (
        <Box bg="white" py={10}>
            <Container maxW="container.xl">
                <Heading as="h2" size="xl" textAlign="center" mb={6}>
                    Technologies We Use
                </Heading>
                <SimpleGrid
                    columns={{ base: 2, md: 4, lg: 6 }}
                    spacing={10}
                    justifyContent="center"
                >
                    {technologies.map((tech, index) => (
                        <TechnologyCard key={index} {...tech} />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default TechnologiesWeUse;
