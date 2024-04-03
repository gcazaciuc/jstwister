// components/SignupForm.js
"use client";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Text,
    Heading,
    Flex,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { useSupabase } from "../providers/supabase-provider";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const gotoCheckout = async function (priceId?: string, userId?: string) {
    if (!priceId) {
        return;
    }

    try {
        const response = await fetch("/api/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                lookup_key: priceId,
                customer_id: userId,
            }),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data.url) {
            window.location.href = data.url;
        } else {
            console.error("URL not found in response");
        }
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

const SigninForm = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const { supabase } = useSupabase();
    const [loginError, setLoginError] = useState<boolean | null>(null);
    const router = useRouter();
    const searchParams = useSearchParams();
    const subscribeTo = searchParams.get("subscribe_to");

    const onSubmit = async (data: any) => {
        const {
            data: { user, session, weakPassword },
            error,
        } = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,
        });
        const isSuccesfullyLoggedIn = !error && user && session;
        if (error) {
            setLoginError(true);
        }

        if (subscribeTo && isSuccesfullyLoggedIn) {
            console.log("Subscribing to", subscribeTo);
            await gotoCheckout(subscribeTo, user?.id);
            return;
        }

        if (isSuccesfullyLoggedIn) {
            // If the user is succesfully logged in, redirect to the portal
            router.push("/portal");
        }
    };

    return (
        <>
            <Heading as="h1" fontSize="4xl" py={10}>
                Login
            </Heading>
            {loginError && (
                <Text color="red.500">Invalid email or password!</Text>
            )}
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

                <Flex direction="row" justifyItems="space-between" mt={4}>
                    <Button
                        variant={"link"}
                        color={"black"}
                        pr={10}
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
                </Flex>
            </form>
        </>
    );
};

export default SigninForm;
