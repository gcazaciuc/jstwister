"use client";
import React from "react";
import { Box, Text, Button, Center, VStack } from "@chakra-ui/react";

const Footer: React.FC = () => {
    return (
        <Box bg="black" color="white" py={10}>
            <Center>
                <VStack spacing={4}>
                    <Text fontSize="xl" fontWeight="bold">
                        See if Netcraft is right for you
                    </Text>
                    <Text fontSize="md">
                        Your journey to web development begins here
                    </Text>
                    <Button
                        size="lg"
                        px={10}
                        bg="black"
                        color="white"
                        border="2px"
                        borderColor="white"
                        borderRadius="full"
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
                        Get started
                    </Button>
                    <Box my={10}></Box>
                </VStack>
            </Center>
        </Box>
    );
};

export default Footer;
