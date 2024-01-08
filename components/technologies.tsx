"use client";
import React from "react";
import { InView } from "react-intersection-observer";
import {
    Box,
    SimpleGrid,
    Heading,
    Image,
    Text,
    VStack,
    Container,
    useColorModeValue,
} from "@chakra-ui/react";
import { MotionBox } from "./motion-box";

const variants = {
    hidden: { opacity: 0, y: -50, x: 10 },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.5 } },
    container: {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    },
};

interface TechnologyCardProps {
    logoUrl: string;
    label: string;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ logoUrl, label }) => {
    const cardBg = useColorModeValue("gray.200", "gray.600");

    return (
        <VStack
            bg={cardBg}
            rounded="md"
            boxShadow="sm"
            p={4}
            align="center"
            spacing={3}
        >
            <Image
                src={logoUrl}
                boxSize="50px"
                objectFit="contain"
                alt={label}
            />
            <Text fontSize="sm" fontWeight={"bold"}>
                {label}
            </Text>
        </VStack>
    );
};

const TechnologiesWeUse: React.FC = () => {
    const technologies: TechnologyCardProps[] = [
        // Populate with your technologies
        { logoUrl: "/react-2.svg", label: "React" },
        { logoUrl: "/next-js.svg", label: "Next.js" },
        { logoUrl: "/redux.svg", label: "Redux" },
        { logoUrl: "/mobx.svg", label: "MobX" },
        { logoUrl: "/typescript.svg", label: "TypeScript" },
        { logoUrl: "/nodejs.svg", label: "NodeJS" },
        // Add more technologies here
    ];

    return (
        <Box bg="white" py={10} id="#technology">
            <Container maxW="container.xl">
                <InView triggerOnce={true} threshold={0.5}>
                    {({ inView, ref }) => (
                        <>
                            <MotionBox
                                variants={variants}
                                initial="hidden"
                                animate={"visible"}
                                // You can add Chakra UI props here
                            >
                                <Heading
                                    as="h2"
                                    size="xl"
                                    textAlign="center"
                                    mb={6}
                                    color="darkBlue"
                                >
                                    Technologies We Use
                                </Heading>
                                <Text
                                    textAlign={"center"}
                                    mt="2"
                                    mb="10"
                                    color="lightGrey"
                                    ref={ref}
                                >
                                    We future proof your business. Forget about
                                    <b>
                                        {" "}
                                        low performance, security flawed
                                    </b>{" "}
                                    site creators or Wordpress sites: with us
                                    you get hand crafted cutting edge tech.
                                </Text>
                            </MotionBox>
                            <MotionBox
                                variants={variants.container}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                // You can add Chakra UI props here
                            >
                                <SimpleGrid
                                    columns={{ base: 2, md: 4, lg: 6 }}
                                    spacing={10}
                                    justifyContent="center"
                                >
                                    {technologies.map((tech, index) => (
                                        <MotionBox
                                            key={index}
                                            variants={variants}
                                            // Additional Chakra UI props
                                        >
                                            <TechnologyCard {...tech} />
                                        </MotionBox>
                                    ))}
                                </SimpleGrid>
                            </MotionBox>
                        </>
                    )}
                </InView>
            </Container>
        </Box>
    );
};

export default TechnologiesWeUse;
