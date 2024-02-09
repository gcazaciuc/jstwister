import {
    Box,
    Flex,
    Text,
    Divider,
    Icon,
    Stack,
    Heading,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { SlArrowRightCircle } from "react-icons/sl";
const steps = [
    {
        title: "Subscribe",
        description:
            "Subscribe to a plan. After that, we'll build your custom presentation website according to your specifications, FOR FREE. We only charge a flat monthly fee for support, maintainance and hosting, no strings attached.",
    },
    {
        title: "Build",
        description:
            "After you subscribe you'll fill a design briefing so we can understand how would you like your website to look and function. We'll build your website in 7-14 days after this step.",
    },
    {
        title: "Launch",
        description:
            "We host your website and we offer continous monitoring, maintainance and support all included  at no extra charge. However, you can buy the website for an attractive fee and host it yourself if you want.",
    },
    {
        title: "Maintain",
        description:
            "We take care of the monthly security updates, performance optimizations, tech stack upgrades and we make sure your website is always up and running. At no extra charge.",
    },
    // ... other steps
];

const HowItWorks = () => {
    return (
        <Box textAlign="left" bg="white" p={10} id="#how-it-works">
            <Heading as="h2" size="xl" textAlign="left" mb={5} color="darkBlue">
                How it works
            </Heading>
            <Text fontSize="lg" color="lightGrey">
                Get your custom website created by us in a few easy steps
            </Text>

            <Stack
                direction="row"
                justify="space-between"
                align="center"
                mt={6}
            >
                {steps.map((step, index) => (
                    <Fragment key={index}>
                        <Flex direction="column" align="left" flex="1" mx={4}>
                            <Box>
                                <Text
                                    fontSize="4xl"
                                    bgGradient="linear(to-r, #7928CA, #FF0080)"
                                    bgClip="text"
                                >
                                    {index + 1}
                                </Text>
                            </Box>
                            <Text
                                fontSize="xl"
                                fontWeight="bold"
                                color="darkBlue"
                            >
                                {step.title}
                            </Text>
                            <Divider
                                borderColor="purple"
                                width="20%"
                                borderWidth="2px"
                            />
                            <Text mt={4} color="lightGrey" fontSize={"md"}>
                                {step.description}
                            </Text>
                        </Flex>

                        {index < steps.length - 1 && (
                            <SlArrowRightCircle color="purple.500" />
                        )}
                    </Fragment>
                ))}
            </Stack>
        </Box>
    );
};

export default HowItWorks;
