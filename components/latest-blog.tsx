import React from "react";
import {
    SimpleGrid,
    Heading,
    Text,
    VStack,
    Image,
    Flex,
    Stack,
} from "@chakra-ui/react";

import { fetchBlogItems } from "@/repositories/blog-repository";
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
    slug,
    summary: description,
}) => {
    return (
        <Link href={"/blog/" + slug} passHref key={slug}>
            <VStack
                bg="white"
                rounded="md"
                boxShadow="md"
                spacing={3}
                align="start"
                border={"5px solid white"}
                height="400px"
            >
                <Image
                    src={imageUrl}
                    alt={title}
                    borderRadius="lg"
                    mb={2}
                    width="full"
                    objectFit="cover"
                    maxH={"200px"}
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
        </Link>
    );
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
                bg: "#DBE3ED",
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
