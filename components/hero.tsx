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
    Heading,
} from "@chakra-ui/react";
import EmText from "./EmText";
import { MotionBox } from "./motion-box";
import { scroller } from "react-scroll";
// import { FaHeart } from "@chakra-ui/icons";

const Hero: React.FC = () => {
    // Ensure the Grifter font is loaded in your index.css or App.css, or use @font-face here
    return (
        <Center
            id="#hero"
            height="50vh"
            bgImage="url('/hero-bg.png')" // Replace with your image path
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            position="relative"
            _after={{
                content: `""`,
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                opacity: 0.97,
                right: 0,
                background: "linear-gradient(to bottom, #0a0a0a, #0a0a0a)", // Adjust colors for the fade effect
            }}
            fontFamily="Grifter, sans-serif"
        >
            <VStack
                spacing={4}
                position={"absolute"}
                zIndex={2}
                color={"white"}
                textAlign={"center"}
            >
                <MotionBox
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Heading fontSize="4xl" mt={4}>
                        Hand crafted <EmText text="web sites & apps"></EmText>.
                    </Heading>
                    <Text fontSize="2xl" mt={4}>
                        Starting from 49 EUR/m,{" "}
                        <EmText text="0 down-payment"></EmText>.
                    </Text>
                    <Button
                        bg="black"
                        color="white"
                        _hover={{ bg: "gray.700" }}
                        size="lg"
                        mt={4}
                        onClick={() =>
                            scroller.scrollTo("#plans", {
                                smooth: true,
                                duration: 500, // Scroll animation duration in milliseconds
                                offset: -50, // Scrolls to element + 50 pixels down the page
                            })
                        }
                    >
                        See plans
                    </Button>
                    <Box display="flex" alignItems="center" mt={2}>
                        <Text fontSize="md" mr={2}></Text>
                        {/* <FaHeart color="red" /> */}
                    </Box>
                </MotionBox>
            </VStack>
        </Center>
    );
};

export default Hero;
