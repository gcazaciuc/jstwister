import React from "react";
import { SimpleGrid, Heading, Text, VStack, Flex } from "@chakra-ui/react";

import { fetchBlogItems } from "@/repositories/blog-repository";
import { BlogItemCard, BlogItemProps } from "./blog-item-card";
// import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa";

const LatestFromBlog: React.FC = async () => {
    const blogItems: BlogItemProps[] = await fetchBlogItems();

    return (
        <Flex
            direction={{ base: "column", md: "column" }}
            w="full"
            justifyItems="center"
            position="relative"
            bg="white"
            _before={{
                content: '""',
                position: "absolute",
                height: "420px",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                // bg: "#f1f5f9",
                bg: "white",
            }}
        >
            <VStack
                w="full"
                justify="center"
                align="center"
                p={10}
                position={"relative"}
            >
                <Heading as="h2">Latest from the blog</Heading>
                <Text fontSize="lg" mt={2}>
                    Read more about engineering and design
                </Text>
            </VStack>
            <VStack w="full" justify="center" align="center" p={10} zIndex={1}>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    {blogItems.slice(0, 3).map((item, index) => (
                        <BlogItemCard key={index} {...item} />
                    ))}
                </SimpleGrid>
            </VStack>
        </Flex>
    );
};

export default LatestFromBlog;
