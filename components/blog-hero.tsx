// components/HeroSection.tsx
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Image,
    Flex,
    Tag,
    Text,
    Center,
} from "@chakra-ui/react";

interface HeroSectionProps {
    title: string;
    slug?: string;
}

const HeroSection = ({ title, slug }: HeroSectionProps) => (
    <Box bg="#DBE3ED" p={10} mt={"50px"}>
        <Center>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                </BreadcrumbItem>
                {slug ? (
                    <BreadcrumbItem>
                        <BreadcrumbLink href={`/post/${slug}`}>
                            {title}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                ) : null}
                {/* Add more BreadcrumbItems if needed */}
            </Breadcrumb>
        </Center>
        <Center>
            <Heading mt={2}>{title}</Heading>
        </Center>
    </Box>
);

interface BlogPostImageProps {
    imageUrl: string;
}

const BlogPostImage = ({ imageUrl }: BlogPostImageProps) => (
    <Box my={4} display="flex" justifyContent="center">
        <Image src={imageUrl} borderRadius="lg" maxWidth="80%" />
    </Box>
);

interface BlogPostMetaProps {
    tags: string[];
    publishDate: string; // Assuming ISO string format
}

const BlogPostMeta = ({ tags, publishDate }: BlogPostMetaProps) => {
    const formattedDate = new Date(publishDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <Flex justifyContent="space-between" my={4}>
            <Box>
                {tags.map((tag) => (
                    <Tag key={tag} m={1} size={"lg"}>
                        #{tag}
                    </Tag>
                ))}
            </Box>
            <Text>{formattedDate}</Text>
        </Flex>
    );
};

export { HeroSection, BlogPostImage, BlogPostMeta };
