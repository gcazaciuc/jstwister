import React from "react";
import {
    Box,
    SimpleGrid,
    Heading,
    Text,
    VStack,
    Image,
    Flex,
    Stack,
    Icon,
    useColorModeValue,
} from "@chakra-ui/react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Link from "next/link";
// import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa";

interface BlogItemProps {
    imageUrl: string;
    datePublished: string;
    readTime: string;
    title: string;
    summary: string;
    slug: string;
}

const BlogItemCard: React.FC<BlogItemProps> = ({
    imageUrl,
    datePublished,
    readTime,
    title,
    summary: description,
}) => {
    return (
        <VStack
            bg="white"
            rounded="md"
            boxShadow="md"
            p={3}
            spacing={3}
            align="start"
            border={"5px solid white"}
        >
            <Image
                src={imageUrl}
                alt={title}
                borderRadius="lg"
                m={2}
                width="full"
                objectFit="cover"
                maxH={'200px'}
            />
            <Stack
                direction="row"
                alignItems="center"
                fontSize="sm"
                spacing={1}
            >
                {/* <Icon as={FaRegCalendarAlt} /> */}
                <Text>{datePublished}</Text>
                {/* <Icon as={FaRegClock} /> */}
                <Text>{readTime}</Text>
            </Stack>
            <Heading size="md" fontWeight="bold">
                {title}
            </Heading>
            <Text fontSize="sm" noOfLines={2}>
                {description}
            </Text>
        </VStack>
    );
};

const fetchBlogItems = async (): Promise<BlogItemProps[]> => {
    const blogDir = "posts/";

    // 2) Find all files in the blog directory
    const files = fs.readdirSync(path.join(blogDir));

    // 3) For each blog found
    const blogs = files
        .map((filename) => {
            // 4) Read the content of that blog
            const fileContent = fs.readFileSync(
                path.join(blogDir, filename),
                "utf-8"
            );

            // 5) Extract the metadata from the blog's content
            const { data: frontMatter } = matter(fileContent);
            // 6) Return the metadata and page slug
            return {
                ...frontMatter,
                imageUrl:
                    frontMatter.imageUrl || "https://picsum.photos/200/300",
                slug: filename.replace(".mdx", ""),
            } as BlogItemProps;
        })
        .slice(0, 3);

    return blogs;
};
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
                bg: "#FBF1EF",
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
                    {blogItems.map((item, index) => (
                        <BlogItemCard key={index} {...item} />
                    ))}
                </SimpleGrid>
            </VStack>
        </Flex>
    );
};

export default LatestFromBlog;
