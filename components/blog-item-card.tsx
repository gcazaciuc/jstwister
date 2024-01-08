import { VStack, Stack, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export interface BlogItemProps {
    imageUrl: string;
    datePublished: string;
    readTime: string;
    title: string;
    summary: string;
    slug: string;
}

export const BlogItemCard: React.FC<BlogItemProps> = ({
    imageUrl,
    datePublished,
    readTime,
    title,
    slug,
    summary: description,
}) => {
    return (
        <Link href={"/post/" + slug} passHref key={slug}>
            <VStack
                bg="white"
                rounded="md"
                boxShadow="md"
                spacing={3}
                align="start"
                border={"5px solid white"}
                height="400px"
                p={4}
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
