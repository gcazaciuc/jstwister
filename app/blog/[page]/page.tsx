import { HeroSection } from "@/components/blog-hero";
import { SimpleGrid, Stack } from "@chakra-ui/react";
import { fetchBlogItems } from "@/repositories/blog-repository";
import { BlogItemCard } from "@/components/blog-item-card";
import Pagination from "@/components/pagination";
import Navbar from "@/components/nav";
import { t } from "@lingui/macro";
const ITEMS_PER_PAGE = 3;
export default async function Blog({ params }: any) {
    const items = await fetchBlogItems();
    const currentPage = parseInt(params?.page || 1);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return (
        <>
            <Navbar />
            <Stack direction="column" bg="white" minH={"100vh"} height="100%" justifyContent={'space-between'}>
                <HeroSection title={t`Our blog`} />
                <Stack
                    p="5"
                    direction="column"
                    justifyContent={"space-between"}
                    spacing={4}
                >
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                        {items
                            .slice(startIndex, startIndex + ITEMS_PER_PAGE)
                            .map((item, index) => (
                                <BlogItemCard key={index} {...item} />
                            ))}
                    </SimpleGrid>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(items.length / ITEMS_PER_PAGE)}
                    />
                </Stack>
            </Stack>
        </>
    );
}
