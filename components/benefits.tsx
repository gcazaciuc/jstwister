import {
    Box,
    SimpleGrid,
    Text,
    Icon,
    Center,
    VStack,
    Heading,
} from "@chakra-ui/react";
import { Trans, t } from "@lingui/macro";
import { MdSettings } from "react-icons/md";

const benefits = [
    {
        icon: MdSettings,
        title: t`No upfront costs`,
        description: t`Rent your website, custom built to your specifications, for a flat monthly fee. No upfront development costs, full service included.`,
    },
    {
        icon: MdSettings,
        title: t`Buy it anytime`,
        description: t`Want to get full ownership of your app/website? Buy it anytime for a small fee. No questions asked`,
    },
    {
        icon: MdSettings,
        title: t`Start now with no risks`,
        description: t`Start your project immediately: no unreliable freelancers, no interviews, no hiring, no proposals, no unforeseen costs. Cancel anytime if unsatisfied.`,
    },
    {
        icon: MdSettings,
        title: t`Top performance. Top SEO.`,
        description: t`We use latest tech. Not unsecure plugins. Not bloated themes. Not slow page builders. We hand code your website for top performance and SEO.`,
    },
    {
        icon: MdSettings,
        title: t`Full service`,
        description: t`Get everything: initial design & development per your specifications and monthtly hosting, maintenance, support, and more. All included in the monthly fee.`,
    },
    {
        icon: MdSettings,
        title: t`Exceptional service`,
        description: t`Instead of talking all day about quality, we put our money where our mouth is: we provide top quality solutions for your business because we only get paid if you continue to use our service.`,
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
                    <Trans>Why subscribe ?</Trans>
                </Heading>
                <Text fontSize="lg" color="lightGrey">
                    <Trans>Explore the benefits you get</Trans>
                </Text>
                <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={10} mt={10}>
                    {benefits.map((benefit, index) => (
                        <Box key={index}>
                            {/* <Icon as={MdSettings} /> */}
                            <Text
                                fontSize="xl"
                                fontWeight="bold"
                                color="darkBlue"
                                mb={4}
                            >
                                {benefit.title}
                            </Text>
                            <Text color={"lightGrey"} lineHeight={1.7}>
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
