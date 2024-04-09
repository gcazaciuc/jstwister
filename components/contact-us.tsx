"use client";
import {
    Badge,
    Flex,
    Heading,
    Text,
    VStack,
    HStack,
    Input,
    Button,
    Icon,
    useColorModeValue,
    Textarea,
    Link,
    FormErrorMessage,
    FormControl,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form, useForm } from "react-hook-form";
import { MdPhone, MdEmail } from "react-icons/md";
import SyncLoader from "react-spinners/SyncLoader";
import { Trans, t } from "@lingui/macro";

interface ContactForm {
    name: string;
    email: string;
    message: string;
}

const ContactSection = () => {
    const bg = useColorModeValue("gray.50", "gray.800"); // Adjust the color mode value
    const inputBg = useColorModeValue("white", "gray.700");
    const emojiString = String.fromCodePoint(parseInt("1F607", 16));
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactForm>({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const toast = useToast();

    const contactUs = async (contactFormData: ContactForm) => {
        setIsLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({
                    name: contactFormData.name,
                    email: contactFormData.email,
                    message: contactFormData.message,
                }),
            });
            const emailResponse = await res.json();
            if (!emailResponse.error) {
                toast({
                    title: t`Message sent!`,
                    description: t`Thank you for contacting us! We will be in touch shortly.`,
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                });
                reset();
            } else {
                toast({
                    title: t`An error occurred.`,
                    description: t`Sorry for the incovenience. Please try again shortly.`,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                });
            }
        } catch (error) {
            toast({
                title: t`An error occurred.`,
                description: t`Sorry for the incovenience. Please try again shortly.`,
                status: "error",
                duration: 9000,
                isClosable: true,
            });
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        // <Container maxW="container.full" py={20} bg="white">
        <Flex
            bg={bg}
            p={10}
            borderRadius="md"
            boxShadow="xl"
            alignItems="start"
            justifyContent="space-between"
        >
            <Flex flex={1} justifyContent={"center"}>
                <VStack alignItems="start" spacing={4} mr={10}>
                    <Badge colorScheme="purple">Get in touch</Badge>
                    <Heading as="h2" size="xl" mb="4" color="darkBlue">
                        <Trans>Have something in mind ?</Trans>
                    </Heading>
                    <Text color="gray.600">
                        <Trans>Let's have a chat...</Trans> {emojiString}
                    </Text>
                    <HStack>
                        <Icon
                            as={MdEmail}
                            color="purple.500"
                            boxSize={"1.5rem"}
                        />
                        <Text>
                            <Trans>Mail us 24/7 hello@netcraft.digital</Trans>
                        </Text>
                    </HStack>
                    <HStack>
                        <Icon
                            as={MdPhone}
                            color="purple.500"
                            boxSize={"1.5rem"}
                        />
                        <Link href="tel:+40749807375">+4 0749.807.375</Link>
                    </HStack>
                </VStack>
            </Flex>
            <Flex flex={1} justifyContent={"end"}>
                <VStack
                    alignItems="end"
                    spacing={10}
                    mr={10}
                    maxWidth={"500px"}
                    width={"100%"}
                >
                    <FormControl isRequired isInvalid={!!errors.name}>
                        <Input
                            {...register("name", { required: true })}
                            placeholder={t`Your Name`}
                            bg={inputBg}
                        />
                        <FormErrorMessage>
                            <Trans>This field is required</Trans>
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isRequired isInvalid={!!errors.email}>
                        <Input
                            {...register("email", { required: true })}
                            placeholder={t`Email Address`}
                            bg={inputBg}
                        />
                        <FormErrorMessage>
                            <Trans>This field is required</Trans>
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isRequired isInvalid={!!errors.name}>
                        <Textarea
                            {...register("message", { required: true })}
                            placeholder={t`How can help you?`}
                            bg={inputBg}
                            size="lg"
                        />
                        <FormErrorMessage>
                            <Trans>This field is required</Trans>
                        </FormErrorMessage>
                    </FormControl>
                    <Button
                        size="lg"
                        width={"100%"}
                        px={10}
                        bg="black"
                        color="white"
                        border="2px"
                        borderColor="white"
                        borderRadius="10px"
                        isLoading={isLoading}
                        spinner={<SyncLoader size={8} color="white" />}
                        onClick={handleSubmit(contactUs)}
                        _hover={{
                            bg: "white",
                            color: "black",
                            borderColor: "black",
                        }}
                        transition="all 0.3s"
                        _active={{
                            transform: "translateY(-2px)",
                        }}
                    >
                        <Trans>Contact us</Trans>
                    </Button>
                </VStack>
            </Flex>
        </Flex>
        // </Container>
    );
};

export default ContactSection;
