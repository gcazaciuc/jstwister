"use client";

import React from "react";
import {
    Box,
    Text,
    Button,
    VStack,
    Center,
    Image,
    useColorModeValue,
} from "@chakra-ui/react";
// import { FaHeart } from "@chakra-ui/icons";

const Hero: React.FC = () => {

    // Ensure the Grifter font is loaded in your index.css or App.css, or use @font-face here
    return (
        <Center
            height="50vh"
            bg={"#DBE3ED"}
            bgImage="url('/path-to-your-light-texture.png')" // Replace with the actual path to your texture image
            color="black"
            fontFamily="Grifter, sans-serif"
        >
            <VStack spacing={4}>
                {/* Replace with the actual path to your logo image */}
                {/* <Image
          src="/path-to-your-logo.svg"
          alt="JSTwister Logo"
          boxSize="150px"
        /> */}
                <Text fontSize="6xl">JSTwister</Text>
                <Text fontSize="xl">
                    Web development subscriptions for everyone
                </Text>
                <Button
                    bg="black"
                    color="white"
                    _hover={{ bg: "gray.700" }}
                    size="lg"
                    mt={4}
                >
                    Get started
                </Button>
                <Box display="flex" alignItems="center" mt={2}>
                    <Text fontSize="md" mr={2}>
                        Web development you'll enjoy
                    </Text>
                    {/* <FaHeart color="red" /> */}
                </Box>
            </VStack>
        </Center>
    );
};

export default Hero;
