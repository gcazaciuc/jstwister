"use client";
import React from "react";
import {
    Box,
    Heading,
    Text,
    Button,
    SimpleGrid,
    Image,
    VStack,
    Center,
    Container,
    useColorModeValue,
    Stack,
    Flex,
} from "@chakra-ui/react";

interface ProjectScreenshotsProps {
    images: string[];
}

const ProjectCard: React.FC<ProjectScreenshotsProps> = ({ images }) => {
    const cardBg = useColorModeValue("white", "gray.700");

    return (
        <Stack
            direction={"row"}
            bg={cardBg}
            rounded="lg"
            overflow="hidden"
            boxShadow="md"
            align="center"
            spacing={4}
            p={4}
        >
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt={`Screenshot ${index + 1}`}
                    boxSize="250px"
                    objectFit="cover"
                    transform={
                        index % 2 === 0 ? "rotate(-3deg)" : "rotate(3deg)"
                    }
                    m={2}
                />
            ))}
        </Stack>
    );
};

const RecentWorkSection: React.FC = () => {
    const projects: ProjectScreenshotsProps[] = [
        // Populate with your project data
        { images: ["/path-to-image1.jpg", "/path-to-image2.jpg"] },
        // Add more projects here
    ];

    return (
        <Box py={10}>
            <Container maxW="container.xl">
                <VStack spacing={6}>
                    <Heading as="h2" size="xl" textAlign="center">
                        Recent Work
                    </Heading>
                    <Text fontSize="lg" textAlign="center">
                        Explore our latest projects and creations
                    </Text>
                    <Button colorScheme="blackAlpha" bg="black" color="white">
                        View Recent Work
                    </Button>
                </VStack>
                <Flex justifyContent="center" mt={10}>
                    <SimpleGrid
                        columns={{ base: 1, md: 2, lg: 4 }}
                        spacing={10}
                        mt={10}
                    >
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </SimpleGrid>
                </Flex>
            </Container>
        </Box>
    );
};

export default RecentWorkSection;
