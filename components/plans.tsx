import React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";

interface Plan {
  name: string;
  features: string[];
}

const plansData: Plan[] = [
  {
    name: "X1",
    features: ["One request at a time", "Average 48 hours delivery time"],
  },
  {
    name: "X2",
    features: ["Two requests at a time", "Average 48 hours delivery time"],
  },
];

const PlanCard: React.FC<Plan> = ({ name, features }) => (
  <Box
    p={4}
    display={{ md: "flex" }}
    maxWidth="32rem"
    borderWidth={1}
    margin={2}
    borderRadius={10}
    boxShadow={"lg"}
  >
    <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
      <Text
        fontWeight="bold"
        textTransform="uppercase"
        fontSize="lg"
        letterSpacing="wide"
        color="teal.600"
      >
        {name}
      </Text>
      <Text mt={2}>
        {features.map((feature, index) => (
          <Text key={index} mb={1}>
            {feature}
          </Text>
        ))}
      </Text>
      <Button mt={3} colorScheme="teal" size="md">
        Subscribe
      </Button>
    </Box>
  </Box>
);

const PlansSection = () => {
  const bg = "white";

  return (
    <Box bg={bg} p={5}>
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" textAlign="center" mb={5}>
          Plans
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="center"
          align="center"
          spacing={4}
        >
          {plansData.map((plan, index) => (
            <PlanCard key={index} name={plan.name} features={plan.features} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default PlansSection;
