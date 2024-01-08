"use client";
import {
    Box,
    Badge,
    Text,
    Image,
    Button,
    Link,
    Stack,
    Flex,
} from "@chakra-ui/react";
import { MotionBox } from "./motion-box";
import { InView } from "react-intersection-observer";

interface ValuePropositionProps {
    badgeText: string;
    title: string;
    description: string | string[];
    imageUrl: string;
    readMoreLink?: string;
    imagePosition?: "left" | "right";
}

const ValueProposition: React.FC<ValuePropositionProps> = ({
    badgeText,
    title,
    description,
    imageUrl,
    readMoreLink,
    imagePosition = "left",
}) => {
    const descriptionLines = Array.isArray(description)
        ? description
        : [description];
    return (
        <InView triggerOnce={true} threshold={0.5}>
            {({ inView, ref }) => (
                <Stack
                    alignItems="top"
                    bg="white"
                    p={12}
                    direction={"row"}
                    ref={ref}
                >
                    <MotionBox
                        initial={{ opacity: 0, y: -20 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: -20 }
                        }
                        transition={{ duration: 1.5 }}
                        flex="1"
                        textAlign="left"
                        order={imagePosition === "left" ? 1 : 2}
                    >
                        <Badge colorScheme="purple">{badgeText}</Badge>
                        <Text
                            fontSize="4xl"
                            fontWeight="bold"
                            mt="2"
                            color={"darkBlue"}
                        >
                            {title}
                        </Text>
                        {descriptionLines.map((line, index) => (
                            <Text
                                mt="2"
                                mr={2}
                                color={"lightGrey"}
                                key={index}
                                fontSize={"medium"}
                            >
                                {line}
                            </Text>
                        ))}
                        {readMoreLink && (
                            <Link href={readMoreLink} isExternal>
                                <Button mt="4" colorScheme="blue">
                                    Read More
                                </Button>
                            </Link>
                        )}
                    </MotionBox>
                    <Flex
                        flex="1"
                        justifyContent={"center"}
                        order={imagePosition === "left" ? 2 : 1}
                    >
                        <Image
                            src={imageUrl}
                            alt={title}
                            borderRadius="lg"
                            objectFit="fill"
                            objectPosition={"center"}
                            width="100%"
                            height={"auto"}
                            maxW={"400px"}
                        />
                    </Flex>
                </Stack>
            )}
        </InView>
    );
};

export default ValueProposition;
