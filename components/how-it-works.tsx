import {
    Box,
    Flex,
    Text,
    Divider,
    Icon,
    Stack,
    Heading,
} from "@chakra-ui/react";
import { Trans, t } from "@lingui/macro";
import { Fragment } from "react";
import { SlArrowRightCircle } from "react-icons/sl";
const steps = [
    {
        title: t`Subscribe`,
        description: t`Subscribe to a plan and we'll built your website according to your specifications in 7-14 days on average.`,
    },
    {
        title: t`Launch`,
        description: t`You continue to pay monthly for the website, for 24 months, while benefiting from the perks included in the plan you subscribed to.`,
    },
    {
        title: t`Repeat ?`,
        description: t`After 24 months you can continue using our service and get a FREE website redesign. Or you can cancel your subscription and do whatever you like with your website.`,
    },
    // ... other steps
];

const HowItWorks = () => {
    return (
        <Box textAlign="left" bg="white" p={10} id="#how-it-works">
            <Heading as="h2" size="xl" textAlign="left" mb={5} color="darkBlue">
                <Trans>How it works</Trans>
            </Heading>
            <Text fontSize="lg" color="lightGrey">
                <Trans>
                    You pay for your website monthly over 24 months. When the 24
                    months are up, if you want to stick with us, we'll{" "}
                    <b>redesign</b> your website free of charge.
                </Trans>
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
