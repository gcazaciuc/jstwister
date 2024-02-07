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

const SignupForm = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const { supabase } = useSupabase();
    const router = useRouter();

    const onSubmit = async (data: any) => {
        const { data: user, error } = await supabase.auth.signUp({
            email: data.email,
            password: "ABC1234",
            options: {
                data,
            },
        });

        router.push("/portal");
    };

    return (
        <>
            <Heading as="h1" fontSize="4xl" py={10}>
                Sign up
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel htmlFor="firstName">
                                First Name
                            </FormLabel>
                            <Controller
                                name="firstName"
                                control={control}
                                defaultValue=""
                                rules={{ required: "First name is required" }}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        type="text"
                                        id="firstName"
                                    />
                                )}
                            />
                            {errors.firstName && (
                                <Box color="red.500">
                                    {errors.firstName.message as string}
                                </Box>
                            )}
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel htmlFor="lastName">Last Name</FormLabel>
                            <Controller
                                name="lastName"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Last name is required" }}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        type="text"
                                        id="lastName"
                                    />
                                )}
                            />
                            {errors.lastName && (
                                <Box color="red.500">
                                    {errors.lastName.message as string}
                                </Box>
                            )}
                        </FormControl>
                    </GridItem>
                </Grid>

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
                            <Input {...field} type="email" id="email" />
                        )}
                    />
                    {errors.email && (
                        <Box color="red.500">
                            {errors.email.message as string}
                        </Box>
                    )}
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel htmlFor="phone">Phone</FormLabel>
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Phone number is required" }}
                        render={({ field }) => (
                            <Input {...field} type="tel" id="phone" />
                        )}
                    />
                    {errors.phone && (
                        <Box color="red.500">
                            {errors.phone.message as string}
                        </Box>
                    )}
                </FormControl>

                <FormControl my={4}>
                    <FormLabel htmlFor="company">Company</FormLabel>
                    <Controller
                        name="company"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Company name is required" }}
                        render={({ field }) => (
                            <Input {...field} type="text" id="company" />
                        )}
                    />
                    {errors.company && (
                        <Box color="red.500">
                            {errors.company.message as string}
                        </Box>
                    )}
                </FormControl>
                <Box textAlign={"right"}>
                    <Button
                        type="submit"
                        bg="black"
                        color="white"
                        _hover={{ bg: "gray.700" }}
                        size="lg"
                        mt={4}
                    >
                        Sign Up
                    </Button>
                </Box>
            </form>
        </>
    );
};

export default SignupForm;
