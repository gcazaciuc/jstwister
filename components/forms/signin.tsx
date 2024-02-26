// components/SignupForm.js
"use client";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Grid,
    GridItem,
    Container,
    Heading,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { useSupabase } from "../providers/supabase-provider";
import { useRouter } from "next/navigation";

const SigninForm = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const { supabase } = useSupabase();
    const router = useRouter();

    const onSubmit = async (data: any) => {
        const {
            data: { user, session, weakPassword },
        } = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,
        });
        if (user && session) {
            // If the user is succesfully logged in, redirect to the portal
            router.push("/portal");
        }
    };

    return (
        <>
            <Heading as="h1" fontSize="4xl" py={10}>
                Login
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl mt={4}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        }}
                        render={({ field }) => (
                            <Input
                                {...field}
                                borderColor={"black"}
                                type="email"
                                id="email"
                            />
                        )}
                    />
                    {errors.email && (
                        <Box color="red.500">
                            {errors.email.message as string}
                        </Box>
                    )}
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Password is required" }}
                        render={({ field }) => (
                            <Input
                                {...field}
                                borderColor={"black"}
                                type="password"
                                id="password"
                            />
                        )}
                    />
                    {errors.password && (
                        <Box color="red.500">
                            {errors.password.message as string}
                        </Box>
                    )}
                </FormControl>

                <Box textAlign={"right"}>
                    <Button
                        variant={"link"}
                        color={"black"}
                        px={6}
                        onClick={() => router.push("/auth/signup")}
                    >
                        Dont have an account? Please sign up
                    </Button>

                    <Button
                        type="submit"
                        bg="black"
                        color="white"
                        _hover={{ bg: "gray.700" }}
                        size="lg"
                        mt={4}
                    >
                        Login
                    </Button>
                </Box>
            </form>
        </>
    );
};

export default SigninForm;
