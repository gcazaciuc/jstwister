"use client";
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Badge,
  Link,
  Container,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const plans: PricingPlanProps[] = [
  {
    title: "Basic Plan",
    description: "One request at a time. Pause or cancel anytime.",
    price: "$3900",
    isPopular: true,
    benefits: ["One request at a time", "Average 48 hour delivery"],
  },
  {
    title: "Premium Plan",
    description: "Unlimited requests. Priority support.",
    price: "$7500",
    benefits: ["2 requests at a time", "Average 48 hour delivery"],
  },
];

interface PricingPlanProps {
  title: string;
  description: string;
  price: string;
  isPopular?: boolean;
  benefits: string[];
}

const PricingPlanCard: React.FC<PricingPlanProps> = ({
  title,
  description,
  price,
  isPopular,
  benefits,
}) => {
  const bg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Box
      bg={bg}
      boxShadow={"xl"}
      rounded={"md"}
      overflow={"hidden"}
      p={6}
      textAlign={"center"}
      position={"relative"}
      width={"100%"}
    >
      {isPopular && (
        <Badge
          position={"absolute"}
          top={3}
          left={3}
          textTransform={"uppercase"}
          bg={"red.400"}
          rounded={"xl"}
          px={2}
          py={1}
          color={"white"}
          fontSize={"sm"}
        >
          Most popular
        </Badge>
      )}
      <Heading size={"lg"} fontWeight={"bold"} color={textColor}>
        {title}
      </Heading>
      <Text mt={2} fontSize={"sm"} color={"gray.500"}>
        {description}
      </Text>
      <Text mt={4} fontSize={"5xl"} fontWeight={"bold"} color={textColor}>
        {price}
      </Text>
      <Button
        mt={8}
        mb={2}
        bg={"black"}
        color={"white"}
        rounded={"full"}
        _hover={{ bg: "gray.900" }}
      >
        Get started
      </Button>
      <Box>
        <Link color={"black"} borderBottom={"1px dotted black"}>
          Book a call
        </Link>
      </Box>
      <Box mt={8}>
        <Text fontSize={"xl"} mb={2}>
          What is included
        </Text>
        <Stack spacing={2} textAlign={"center"}>
          {benefits.map((benefit, index) => (
            <Text key={index}>{benefit}</Text>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

const PricingPlansSection: React.FC = () => {
  return (
    <Box p={12} bgColor={"#FBF1EF"}>
      <Heading as="h2" mb={10} textAlign="center">
        Plans
      </Heading>
      <Stack spacing={4} direction={["row"]}>
        {plans.map((plan, index) => (
          <PricingPlanCard key={index} {...plan} />
        ))}
      </Stack>
    </Box>
  );
};

export default PricingPlansSection;
