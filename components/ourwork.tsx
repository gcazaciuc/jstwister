import React from "react";
import { Box, Heading, Container } from "@chakra-ui/react";

// Define the type for the work items
interface WorkItem {
  imageUrl: string;
  title: string;
}

// Mock data for the carousel
const workItems: WorkItem[] = [
  {
    imageUrl: "https://placekitten.com/600/300",
    title: "Project 1",
  },
  {
    imageUrl: "https://placekitten.com/600/301",
    title: "Project 2",
  },
  // Add more items as needed
];

const OurWorkSection: React.FC = () => {
  return (
    <Box id="our-work" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>
      <Container maxW="container.xl">
        <Heading as="h2" mb={5} textAlign="center">
          Our Work
        </Heading>
      </Container>
    </Box>
  );
};

export default OurWorkSection;
