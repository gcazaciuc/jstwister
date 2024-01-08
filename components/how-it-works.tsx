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
            "Choose a plan according to the size of the app you need built. Don't worry, will assist you in picking a right plan.You'll get your app built, monthly support and maintainance, hosting and even additional features implemented according to the plan limits, for a flat monthly fee.",
    },
    {
        title: "Build",
        description:
            "No additional fees. However, overall project development time is capped to the free hours of initial development included in each plan. We retain the source code of the app but you can buy it anytime for an extremely attractive fee.",
    },
    {
        title: "Launch",
        description:
            "We host your website/app and we offer continous monitoring, maintainance and support all included in the flat monthly fee at no extra charge. You can buy the app for an attractive fee and host it yourself if you want, so no worries there.",
    },
    {
        title: "Keep rolling",
        description:
            "With Netcraft you only pay a small monthly maintanance fee. Each plan has a number of monthly dev hours included which you can use for bugfixes, upgrades or any other features you need added.",
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
                Get your custom website/app created in a few easy steps
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
                                    fontSize="6xl"
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
                            <Text mt={5} color="lightGrey">
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
