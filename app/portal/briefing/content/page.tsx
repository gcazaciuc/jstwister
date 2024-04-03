import { BriefingStepper } from "@/components/client-portal/briefing-stepper";
import {
    Box,
    Container,
    Divider,
    Heading,
    Stack,
    Text,
} from "@chakra-ui/react";

interface ContentBriefingProps {
    projectId: string;
}

const ContentBriefing = async ({ projectId }: ContentBriefingProps) => {
    return (
        <Box>
            <Stack
                direction="column"
                spacing={10}
                my={10}
                justifyContent={"center"}
            >
                <Heading>Content briefing</Heading>
                <Text>Define the website pages and their content</Text>
                <Container maxW={"full"}>
                    <BriefingStepper defaultStep={2} />
                    <Divider orientation="horizontal" mt={10} />
                </Container>
            </Stack>
        </Box>
    );
};

export default ContentBriefing;
