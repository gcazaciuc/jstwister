"use client";
import {
    Box,
    useSteps,
    Stepper,
    Step,
    StepIndicator,
    StepStatus,
    StepIcon,
    StepNumber,
    StepTitle,
    StepDescription,
    StepSeparator,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const steps = [
    {
        title: "Website design",
        description: "Business & Design information",
        href: "/portal/briefing/design",
    },
    {
        title: "Website content",
        description: "Pages, structure and content",
        href: "/portal/briefing/content",
    },
    {
        title: "Review & submit",
        description: "Final review and submission",
        href: "/portal/briefing/review",
    },
];

interface BriefingStepperProps {
    defaultStep?: number;
}

export function BriefingStepper({ defaultStep = 1 }: BriefingStepperProps) {
    const { activeStep } = useSteps({
        index: defaultStep,
        count: steps.length,
    });
    const router = useRouter();

    return (
        <Stepper index={activeStep} colorScheme="purple">
            {steps.map((step, index) => (
                <Step key={index} onClick={() => router.push(step.href)}>
                    <StepIndicator>
                        <StepStatus
                            complete={<StepIcon />}
                            incomplete={<StepNumber />}
                            active={<StepNumber />}
                        />
                    </StepIndicator>

                    <Box flexShrink="0">
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                    </Box>

                    <StepSeparator />
                </Step>
            ))}
        </Stepper>
    );
}
