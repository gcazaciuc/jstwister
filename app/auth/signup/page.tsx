"use client";
import SignupForm from "@/components/forms/signup";
import { Stack, Box, Button, Container } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { SlArrowLeft } from "react-icons/sl";

export default function Post({ params }: any) {
    const router = useRouter();
    return (
        <Stack
            direction="column"
            spacing={0}
            bg="white"
            height={"100vh"}
            justifyContent={"center"}
            bgImage={"/account-bg.jpg"}
            backgroundSize={"cover"}
            bgRepeat={"no-repeat"}
        >
            {/* <HeroSection title={props.title} slug={props.slug} /> */}
            <Box as="div" p={10} bg="transparent" color="white">
                <Container maxW="container.xl">
                    <Button
                        leftIcon={<SlArrowLeft />}
                        variant="ghost"
                        onClick={() => router.push("/")}
                    >
                        Back
                    </Button>
                    <SignupForm />
                </Container>
            </Box>
        </Stack>
    );
}
