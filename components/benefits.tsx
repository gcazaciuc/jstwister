import {
    Box,
    SimpleGrid,
    Text,
    Icon,
    Center,
    VStack,
    Heading,
} from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";

const benefits = [
    {
        icon: MdSettings,
        title: "No upfront costs",
        description:
            "Rent apps & websites, custom built just for you, for a flat monthly fee. No upfront development costs, full service included.",
    },
    {
        icon: MdSettings,
        title: "Buy it anytime",
        description:
            "Want to get full ownership of your app/website? Buy it anytime for a small fee. No questions asked",
    },
    {
        icon: MdSettings,
        title: "Predictable & Risk-free",
        description:
            "Start your project immediately: no unreliable freelancers, no interviews, no hiring. Cancel anytime if unsatisfied.",
    },
    {
        icon: MdSettings,
        title: "Top-notch technology",
        description:
            "Future-proof your business with the latest tech. We use React, Next.js, Node.js, GraphQL, AWS, and more.",
    },
    {
        icon: MdSettings,
        title: "Full service",
        description:
            "Get everything: initial design & development per your specifications and monthtly hosting, maintenance, support, and more. All included in the monthly fee.",
    },
    {
        icon: MdSettings,
        title: "We go above & beyond",
        description:
            "We put our money where our mouth is: we go above & beyond to provide top quality solutions for your business because we only get paid if you continue to use our service.",
    },
    // ... other benefits
];

export const BenefitsSection = () => {
    return (
        <Center bg="#DBE3ED" p={10}>
            <VStack>
                <Heading as="h2" size="xl" textAlign="center" mb={1}>
                    Membership Benefits
                </Heading>
                <Text fontSize="lg">Explore the benefits you get</Text>
                <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={10} mt={10}>
                    {benefits.map((benefit, index) => (
                        <Box key={index}>
                            {/* <Icon as={MdSettings} /> */}
                            <Text fontSize="xl" fontWeight="bold">
                                {benefit.title}
                            </Text>
                            <Text>{benefit.description}</Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </VStack>
        </Center>
    );
};

export default BenefitsSection;
