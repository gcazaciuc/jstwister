import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { Trans, t } from "@lingui/macro";

const FeaturesSection: React.FC = () => {
    const items = [
        {
            title: t`Up to 2 hours monthly dev/support`,
            description: t`Depending on the plan, you can get up to 2 hours each month to use however you like: request small design updates, a section added,  a new page built, a custom graphic created and more. And the best part: unused hours are not lost, they roll over to the next month.`,
        },
        {
            title: t`100% custom design. No templates.`,
            description: t`Templates ? No thanks, we're not like other agencies. You get a 100% custom design and logo included with each plan.`,
        },
        {
            title: t`SEO ? Included.`,
            description: t`Each website benefits from extensive on-page SEO optimization from our experts, right before launch.`,
        },
        {
            title: t`Incredible performance`,
            description: t`Mark a perfect Google Page Speed score with out hyper optimized websites. It will boost your SEO efforts a lot and help you win clients.`,
        },
        {
            title: t`Hosting, SSL, CDN included`,
            description: t`We use a top-tier hosting provider offering globally fast, infinitely scalable, and always reliable web apps. SSL and CDN included for top security and performance.`,
        },
        {
            title: t`Free re-design`,
            description: t`After a while websites start to look dated. So , after 24 months of subscription, we offer a completely free re-design to all of our clients. Same team, same quality, same service.`,
        },
    ];
    return (
        <Box p={12} bgColor={"#f1f5f9"}>
            <Heading as="h2" mb={10} textAlign="center" fontSize={"xxx-large"}>
                <Trans>With NETCRAFT, everything comes as standard</Trans>
            </Heading>

            <Grid templateColumns="repeat(2, 1fr)" gap={6} p={5}>
                {items.map((item, index) => (
                    <Box key={index} p={5}>
                        <Heading size="lg">{item.title}</Heading>
                        <Text mt={4}>{item.description}</Text>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
};

export default FeaturesSection;
