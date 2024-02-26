"use client";
import SignupForm from "@/components/forms/signup";
import {
    Stack,
    Box,
    Button,
    Container,
    Heading,
    Text,
    Image,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { SlArrowLeft } from "react-icons/sl";

export default function Layout({ children }: any) {
    const router = useRouter();
    return (
        <Stack
            direction="row"
            spacing={0}
            color="black"
            bg="white"
            height={"100vh"}
            // justifyContent={"center"}
        >
            <Box
                // bgImage={"/icons/login-bg.svg"}
                // backgroundSize={"cover"}
                // bgRepeat={"no-repeat"}
                width="70%"
                height={"100vh"}
                borderRight={"1px solid black"}
                my={4}
                justifyContent={"center"}
            >
                <Stack
                    direction="column"
                    spacing={0}
                    p={10}
                    color="black"
                    alignItems={"center"}
                    justifyItems={"center"}
                >
                    <Image
                        src="/login.svg"
                        alt="Login"
                        width={400}
                        height={400}
                    />
                    <Heading as="h1" fontSize="4xl" py={10}>
                        Welcome
                    </Heading>
                    <Text fontSize="xl">
                        Please login or create an account to start using
                        Netcraft.
                    </Text>
                </Stack>
            </Box>
            <Box as="div" p={10} bg="transparent" color="black">
                <Container maxW="container.xl">
                    <Button
                        leftIcon={<SlArrowLeft />}
                        variant="ghost"
                        onClick={() => router.push("/")}
                        _hover={{ textDecoration: "underline" }}
                    >
                        Back
                    </Button>
                    {children}
                </Container>
            </Box>
        </Stack>
    );
}
