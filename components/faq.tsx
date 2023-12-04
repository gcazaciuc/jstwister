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

// Define the type for an FAQ item
interface FAQItem {
    question: string;
    answer: string;
}

// Mock data for the FAQ items
const faqData: FAQItem[] = [
    {
        question: "What tech stack do you use for your projects?",
        answer: "We use mainly React, Next.js, and Chakra UI for our projects. We skillfully use other technologies as needed.",
    },
    // ...add other FAQ items here
];

const FAQSection: React.FC = () => {
    return (
        <Container maxW="container.xl" py={10} bg="white">
            <Heading as="h2" size="xl" textAlign="center" mb={5}>
                Frequently Asked Questions
            </Heading>
            <Accordion allowToggle>
                {faqData.map((faq, index) => (
                    <AccordionItem key={index}>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
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
    );
};

export default FAQSection;
