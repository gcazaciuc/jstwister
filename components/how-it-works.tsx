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
import { MdArrowForward } from "react-icons/md";
const steps = [
    {
        title: "You subscribe to a plan",
        description:
            "Choose a plan according to the size of the app you need built. Don't worry, will assist you in picking a right plan.You'll get your app built, monthly support and maintainance, hosting and even additional features implemented according to the plan limits, for a flat monthly fee.",
    },
    {
        title: "We build your app",
        description:
            "No additional fees. However, overall project development time is capped to the free hours of initial development included in each plan. We retain the source code of the app but you can buy it anytime for an extremely attractive fee.",
    },
    { title: "We launch the app", description: "We host your website/app and we offer continous monitoring, maintainance and support all included in the flat monthly fee at no extra charge. You can buy the app for an attractive fee and host it yourself if you want, so no worries there." },
    {
        title: "We maintain it for you",
        description:
            "With JSTwister you only pay a small monthly maintanance fee. Each plan has a number of monthly dev hours included which you can use for bugfixes, upgrades or any other features you need added.",
    },
    // ... other steps
];

const HowItWorks = () => {
    return (
        <Box textAlign="left" bg="white" p={10}>
            <Heading as="h2" size="xl" textAlign="left" mb={1}>
                How it works
            </Heading>
            <Text fontSize="lg">
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
                        <Flex direction="column" align="left" flex="1">
                            <Box>
                                <Text
                                    fontSize="6xl"
                                    bgGradient="linear(to-r, #7928CA, #FF0080)"
                                    bgClip="text"
                                >
                                    {index + 1}
                                </Text>
                            </Box>
                            <Text fontSize="xl" fontWeight="bold">
                                {step.title}
                            </Text>
                            <Divider
                                borderColor="purple"
                                width="20%"
                                borderWidth="2px"
                            />
                            <Text mt={5} color="gray.500">{step.description}</Text>
                        </Flex>

                        {/* {index < steps.length - 1 && ( */}
                        {/* <Icon
                            as={MdArrowForward}
                            color="purple.500"
                            boxSize={6}
                        /> */}
                        {/* )} */}
                    </Fragment>
                ))}
            </Stack>
        </Box>
    );
};

export default HowItWorks;