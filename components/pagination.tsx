"use client";
// components/Pagination.tsx
import { Box, Button, Center, Flex, HStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
    const baseColor = "white";
    const activeColor = "purple.300";
    const hoverColor = "purple.100";
    const router = useRouter();
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <Flex justifyContent={"center"} mt={100}>
            <HStack
                spacing={2}
                m={5}
                p={2}
                rounded="md"
                color="black"
                boxShadow="0 4px 6px rgba(0,0,0,0.1)"
            >
                <Button
                    isDisabled={currentPage === 1}
                    variant={"link"}
                    onClick={() => router.push(`/blog/${currentPage - 1}`)}
                >
                    Prev
                </Button>

                {pages.map((page) => (
                    <Button
                        key={page}
                        variant={"solid"}
                        bg={currentPage === page ? activeColor : baseColor}
                        rounded={currentPage === page ? "full" : "none"}
                        _hover={{ bg: hoverColor, rounded: "full" }}
                        onClick={() => router.push(`/blog/${page}`)}
                    >
                        {page}
                    </Button>
                ))}

                <Button
                    isDisabled={currentPage === totalPages}
                    variant={"link"}
                    onClick={() => router.push(`/blog/${currentPage + 1}`)}
                >
                    Next
                </Button>
            </HStack>
        </Flex>
    );
};

export default Pagination;
