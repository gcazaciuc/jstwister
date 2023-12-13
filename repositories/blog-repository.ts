import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export interface BlogItem {
    imageUrl: string;
    datePublished: string;
    readTime: string;
    title: string;
    summary: string;
    slug: string;
}

export interface SinglePost {
    slug: string;
    content: string;
    title: string;
    imageUrl: string;
    datePublished: string;
    summary: string;
    tags: string[];
}

const BLOG_DIR = "posts/";

export const fetchBlogItems = async (): Promise<BlogItem[]> => {
    // 2) Find all files in the blog directory
    const files = fs.readdirSync(path.join(BLOG_DIR));

    // 3) For each blog found
    const blogs = files
        .map((filename) => {
            // 4) Read the content of that blog
            const fileContent = fs.readFileSync(
                path.join(BLOG_DIR, filename),
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
            } as BlogItem;
        })
        .slice(0, 3);

    return blogs;
};

export function getPost({ slug }: { slug: string }) {
    const markdownFile = fs.readFileSync(
        path.join(BLOG_DIR, slug + ".mdx"),
        "utf-8"
    );
    const { data: frontMatter, content } = matter(markdownFile);
    return {
        ...frontMatter,
        slug,
        content: content,
    } as SinglePost;
}
