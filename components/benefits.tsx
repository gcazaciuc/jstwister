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
            "Rent your website, custom built to your specifications, for a flat monthly fee. No upfront development costs, full service included.",
    },
    {
        icon: MdSettings,
        title: "Buy it anytime",
        description:
            "Want to get full ownership of your app/website? Buy it anytime for a small fee. No questions asked",
    },
    {
        icon: MdSettings,
        title: "Start now with no risks",
        description:
            "Start your project immediately: no unreliable freelancers, no interviews, no hiring, no proposals, no unforeseen costs. Cancel anytime if unsatisfied.",
    },
    {
        icon: MdSettings,
        title: "Top performance. Top SEO.",
        description:
            "We use latest tech. Not unsecure plugins. Not bloated themes. Not slow page builders. We hand code your website for top performance and SEO.",
    },
    {
        icon: MdSettings,
        title: "Full service",
        description:
            "Get everything: initial design & development per your specifications and monthtly hosting, maintenance, support, and more. All included in the monthly fee.",
    },
    {
        icon: MdSettings,
        title: "Exceptional service",
        description:
            "Instead of talking all day about quality, we put our money where our mouth is: we provide top quality solutions for your business because we only get paid if you continue to use our service.",
    },
    // ... other benefits
];

export const BenefitsSection = () => {
    return (
        <Center bg="#f1f5f9" p={10} id="#benefits">
            <VStack>
                <Heading
                    as="h2"
                    size="xl"
                    textAlign="center"
                    mb={1}
                    color="darkBlue"
                    textTransform={"uppercase"}
                >
                    Why subscribe ?
                </Heading>
                <Text fontSize="lg" color="lightGrey">
                    Explore the benefits you get
                </Text>
                <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={10} mt={10}>
                    {benefits.map((benefit, index) => (
                        <Box key={index}>
                            {/* <Icon as={MdSettings} /> */}
                            <Text
                                fontSize="xl"
                                fontWeight="bold"
                                color="darkBlue"
                            >
                                {benefit.title}
                            </Text>
                            <Text color={"lightGrey"}>
                                {benefit.description}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </VStack>
        </Center>
    );
};

export default BenefitsSection;
