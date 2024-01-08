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
    Container,
    Box,
} from "@chakra-ui/react";
import { MdPhone, MdEmail } from "react-icons/md";

const ContactSection = () => {
    const bg = useColorModeValue("gray.50", "gray.800"); // Adjust the color mode value
    const inputBg = useColorModeValue("white", "gray.700");
    const buttonBg = useColorModeValue("teal.300", "teal.500"); // Or any other gradient
    const emojiString = String.fromCodePoint(parseInt("1F607", 16));
    return (
        // <Container maxW="container.full" py={20} bg="white">
        <Flex
            bg={bg}
            p={10}
            borderRadius="md"
            boxShadow="xl"
            alignItems="start"
            justifyContent="center"
        >
            <Flex flex={1} justifyContent={"center"}>
                <VStack alignItems="start" spacing={4} mr={10}>
                    <Badge colorScheme="purple">Get in touch</Badge>
                    <Heading as="h2" size="xl" mb="4" color="darkBlue">
                        Have something to say ?
                    </Heading>
                    <Text color="gray.600">
                        We are just an email away... {emojiString}
                    </Text>
                    <HStack>
                        <Icon as={MdEmail} color="purple.500" />
                        <Text>Mail us 24/7 hello@netcraft.digital</Text>
                    </HStack>
                </VStack>
            </Flex>
            <Flex flex={1} justifyContent={"center"}>
                <VStack alignItems="start" spacing={4} mr={10}>
                    <Input placeholder="Your Name" bg={inputBg} />
                    <Input placeholder="Email Address" bg={inputBg} />
                    <Textarea
                        placeholder="How can help you?"
                        bg={inputBg}
                        size="lg"
                    />
                    <Button
                        size="lg"
                        width={"100%"}
                        px={10}
                        bg="black"
                        color="white"
                        border="2px"
                        borderColor="white"
                        borderRadius="10px"
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
                        Contact us
                    </Button>
                </VStack>
            </Flex>
        </Flex>
        // </Container>
    );
};

export default ContactSection;
