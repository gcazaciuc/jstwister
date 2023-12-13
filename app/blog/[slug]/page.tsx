import {
    BlogPostImage,
    BlogPostMeta,
    HeroSection,
} from "@/components/blog-hero";
import { Box, Stack, Text } from "@chakra-ui/react";
import { getPost } from "@/repositories/blog-repository";
import { MDXRemote } from "next-mdx-remote/rsc"; // Add this import statement
import rehypeHighlight from "rehype-highlight";

const options = {
    mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [rehypeHighlight],
    },
};

export default function Post({ params }: any) {
    const props = getPost(params);
    return (
        <Stack direction="column">
            <HeroSection title={props.title} slug={props.slug} />
            <Box as="div" p="5" bg="white">
                <BlogPostImage imageUrl={props.imageUrl} />
                <BlogPostMeta
                    tags={props.tags}
                    publishDate={props.datePublished}
                />
                <Text>{props.summary}</Text>
                {/*@ts-expect-error Server Component*/}
                <MDXRemote source={props.content} options={options} />
            </Box>
        </Stack>
    );
}
