"use client";

import React from "react";
import {
    Box,
    Text,
    Button,
    VStack,
    Center,
    Heading,
    HStack,
} from "@chakra-ui/react";
import EmText from "./EmText";
import { MotionBox } from "./motion-box";
import { scroller } from "react-scroll";
import Image from "next/image";
// import { FaHeart } from "@chakra-ui/icons";

const Hero: React.FC = () => {
    // Ensure the Grifter font is loaded in your index.css or App.css, or use @font-face here
    return (
        <Center
            id="#hero"
            minH="60vh"
            fontFamily="Grifter, sans-serif"
            bgColor={"white"}
            position="relative"
        >
            <Image
                src="/icons/top-blob.svg"
                alt="Top blob"
                width={300}
                height={300}
                style={{
                    position: "absolute",
                    top: "-30px",
                    left: "20%",
                }}
            />
            <HStack
                zIndex={2}
                color={"black"}
                textAlign={"left"}
                pt={40}
                justifyItems={"space-between"}
            >
                <Box px={10} position={"relative"}>
                    <Image
                        src="/icons/orange-star.svg"
                        alt="Orange flame"
                        width={60}
                        height={60}
                        style={{
                            position: "absolute",
                            top: "50px",
                            left: "-23%",
                        }}
                    />
                    <Image
                        src="/icons/orange-star.svg"
                        alt="Orange flame"
                        width={60}
                        height={60}
                        style={{
                            position: "absolute",
                            top: "30px",
                            left: "-16%",
                        }}
                    />
                    <Heading fontSize="xxx-large" mt={4}>
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
                </Box>
                <Box position={"relative"}>
                    <Image
                        src="/icons/flame.svg"
                        alt="flame"
                        width={400}
                        height={400}
                        style={{
                            position: "absolute",
                            bottom: "-10%",
                            left: "-20%",
                        }}
                    />
                    <Image
                        src="/icons/social-marketing.png"
                        alt="social marketing"
                        width={500}
                        height={500}
                    />
                    <Box display="flex" alignItems="center" mt={2}>
                        <Text fontSize="md" mr={2}></Text>
                        {/* <FaHeart color="red" /> */}
                    </Box>
                </Box>
            </HStack>
        </Center>
    );
};

export default Hero;
