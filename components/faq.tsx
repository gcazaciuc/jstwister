"use client";
import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Container,
    Heading,
} from "@chakra-ui/react";
import { Trans, t } from "@lingui/macro";

// Define the type for an FAQ item
interface FAQItem {
    question: string;
    answer: string;
}

// Mock data for the FAQ items
const faqData: FAQItem[] = [
    {
        question: t`What kind of website can I have in the small plan ?`,
        answer: t`Any presentation website between 1-10 pages will do. We can also build e-commerce websites, blogs, and more on larger plans.`,
    },
    {
        question: t`How much will my website cost ?`,
        answer: t`You only pay a small monthly fee, depending on yopur chosen plan and you get initial website development, hosting and maintainance included in the monthly plan. No upfront costs. No hidden fees. No surprises.`,
    },
    {
        question:
            t`Why not I should just use a website builder (like Wix etc) ?`,
        answer: t`The website you get is hand coded and custom designed to fit your business. It's not a template. It's not a drag and drop builder. It's a custom website, built for you, by us. As such you get much better security, performance and SEO optimizations.`,
    },
    {
        question:t`How can you help me get more business ?`,
        answer: t`First, the websites we build our fast, secure and SEO optimized. Second, we can help you with additional features like contact forms, newsletter signups, and more. Third, we can help you with online marketing and SEO optimizations. We can also help you with social media integrations and more.`,
    },
    // ...add other FAQ items here
];

const FAQSection: React.FC = () => {
    return (
        <Box bg="white" py={10}>
            <Container maxW="container.xl" py={10} bg="white">
                <Heading as="h2" size="xl" textAlign="center" mb={10}>
                    <Trans>Frequently Asked Questions</Trans>
                </Heading>
                <Accordion allowToggle>
                    {faqData.map((faq, index) => (
                        <AccordionItem key={index}>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton
                                            _hover={{
                                                bg: "purple.100",
                                                color: "black",
                                            }}
                                            _expanded={{
                                                bg: "purple.100",
                                                color: "black",
                                            }}
                                            px={8} // Horizontal padding
                                            py={6} // Vertical padding
                                            fontSize="xl" // Font size
                                            borderRadius="md"
                                        >
                                            <Box
                                                flex="1"
                                                textAlign="left"
                                                fontWeight={"bold"}
                                            >
                                                {faq.question}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        {faq.answer}
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    ))}
                </Accordion>
            </Container>
        </Box>
    );
};

export default FAQSection;
