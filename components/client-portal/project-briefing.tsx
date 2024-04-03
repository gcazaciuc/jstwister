import { useSupabase } from "../providers/supabase-provider";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    Stack,
    Textarea,
    Button,
    useToast,
    Text,
    Flex,
    FormHelperText,
    Container,
    Divider,
} from "@chakra-ui/react";
import { BriefingStepper } from "./briefing-stepper";
import { SlArrowRight } from "react-icons/sl";
import { useRouter } from "next/navigation";

type FormValues = {
    websiteObjectives: string;
    hasBoughtDomain: string;
    hasLogo: string;
    preferredDomain: string;
    competitorWebsites: string;
    websitesLiked: string;
    designObservations: string;
};

interface WebsiteBriefingProps {
    projectId: number;
    briefing?: WebsiteBriefingDTO;
}

interface WebsiteBriefingDTO {
    websiteObjectives: string;
    hasBoughtDomain: string;
    hasLogo: string;
    preferredDomain: string;
    competitorWebsites: string;
    websitesLiked: string;
    designObservations: string;
    id?: number;
}

const WebsiteBriefingForm: React.FC<WebsiteBriefingProps> = ({
    projectId,
    briefing,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ values: briefing });
    const toast = useToast();
    const router = useRouter();
    const { supabase } = useSupabase();

    const onSubmit: SubmitHandler<FormValues> = async (
        data: WebsiteBriefingDTO
    ) => {
        console.log(data);
        await supabase.from("project_briefing").upsert([
            {
                website_objective: data.websiteObjectives,
                has_domain: !!data.hasBoughtDomain,
                has_logo: !!data.hasLogo,
                domain: data.preferredDomain,
                competitors: data.competitorWebsites,
                websites_liked: data.websitesLiked,
                design_observations: data.designObservations,
                project_id: projectId,
                id: briefing?.id,
            },
        ]);

        router.push("/portal/briefing/content");
    };

    return (
        <Box p={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={10} direction={"column"} color="gray.700">
                    <FormControl isRequired>
                        <FormLabel htmlFor="websiteObjectives">
                            Details about your business
                        </FormLabel>
                        <Textarea
                            id="websiteObjectives"
                            placeholder="Describe your business, objectives, challenges and what you're hoping to achieve with a new website..."
                            {...register("websiteObjectives")}
                        />
                    </FormControl>

                    <FormControl as="fieldset" isRequired mt={4}>
                        <FormLabel as="legend">
                            Do you have a website domain already bought ?
                        </FormLabel>
                        <RadioGroup defaultValue="no">
                            <Stack spacing={5} direction="row">
                                <Radio
                                    value="yes"
                                    {...register("hasBoughtDomain")}
                                >
                                    Yes
                                </Radio>
                                <Radio
                                    value="no"
                                    {...register("hasBoughtDomain")}
                                >
                                    No
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>

                    <FormControl isRequired mt={4}>
                        <FormLabel htmlFor="preferredDomain">Domain</FormLabel>
                        <Input
                            id="preferredDomain"
                            placeholder="Your domain..."
                            {...register("preferredDomain")}
                        />
                        <FormHelperText>
                            Either the domain you&apos;ve bought or the one
                            you&apos;d like.
                        </FormHelperText>
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel htmlFor="competitorWebsites">
                            Competitor websites
                        </FormLabel>
                        <Textarea
                            id="competitorWebsites"
                            placeholder="List of competitor websites..."
                            {...register("competitorWebsites")}
                        />
                        <FormHelperText>
                            Provide links to your main competitors so we can
                            better understand your business.
                        </FormHelperText>
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel htmlFor="websitesLiked">
                            Similar websites you like
                        </FormLabel>
                        <Textarea
                            id="websitesLiked"
                            placeholder="List websites you like with links..."
                            {...register("websitesLiked")}
                        />
                        <FormHelperText>
                            We will use this to understand your design
                            preferences.
                        </FormHelperText>
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel htmlFor="designObservations">
                            Design preferences
                        </FormLabel>
                        <Textarea
                            id="designObservations"
                            placeholder="Any design preferences like colors, specific fonts that you would like etc..."
                            {...register("designObservations")}
                        />
                    </FormControl>

                    <FormControl as="fieldset" isRequired mt={4}>
                        <FormLabel as="legend">
                            Do you have already have a logo ?
                        </FormLabel>
                        <RadioGroup defaultValue="no">
                            <Stack spacing={5} direction="row">
                                <Radio value="yes" {...register("hasLogo")}>
                                    Yes
                                </Radio>
                                <Radio value="no" {...register("hasLogo")}>
                                    No
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>

                    <Flex direction={"row"} justifyContent={"center"}>
                        <Button
                            mt={4}
                            // colorScheme="purple"
                            bgGradient="linear(to-r,rgba(2,0,36,1) 0%, rgba(121,40,202,1) 45%, rgba(255,0,128,0.5) 100%)"
                            transition={"all 0.2s ease-in-out"}
                            _hover={{
                                bgGradient:
                                    "linear(to-r,rgba(2,0,36,1) 0%, rgba(121,40,202,1) 85%, rgba(255,0,128,0.5) 100%)",
                            }}
                            color="white"
                            rightIcon={<SlArrowRight />}
                            type="submit"
                            size="lg"
                            maxW={"400px"}
                        >
                            Save design briefing
                        </Button>
                    </Flex>
                </Stack>
            </form>
        </Box>
    );
};

interface ProjectBriefingProps {
    projectId: string;
    briefing: WebsiteBriefingDTO | null;
}

export const ProjectBriefing = ({
    projectId,
    briefing,
}: ProjectBriefingProps) => {
    const { supabase } = useSupabase();

    return (
        <Box>
            <Stack
                direction="column"
                spacing={10}
                my={10}
                justifyContent={"center"}
            >
                <Heading as="h1" mt={4}>
                    Project briefing - let&lsquo;s get started!
                </Heading>
                <Text>
                    Before we can start building your website we just need a few
                    pieces of information from you.
                </Text>
                <Container maxW={"full"}>
                    <BriefingStepper />
                    <Divider orientation="horizontal" mt={10} />
                    <Box mt={50}>
                        {briefing && (
                            <WebsiteBriefingForm
                                projectId={Number(projectId)}
                                briefing={briefing}
                            />
                        )}
                    </Box>
                </Container>
            </Stack>
        </Box>
    );
};
