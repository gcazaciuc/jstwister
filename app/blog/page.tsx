// Import necessary components from Chakra UI
import Footer from "@/components/footer";
import Navbar from "@/components/nav";
import OurWorkSection from "@/components/ourwork";
import PlansSection from "@/components/plans";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

// Define the types for your props as needed
interface SectionProps {
  title: string;
  children: React.ReactNode;
}

// Define a Section component
const Section: React.FC<SectionProps> = ({ title, children }) => (
  <Box as="section" p={10}>
    <Heading as="h2" size="xl" mb={6}>
      {title}
    </Heading>
    {children}
  </Box>
);

// Define the Hero component
const Hero = () => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="400px"
    bg="blue.300"
    bgImage="url('abstract-background.png')"
    bgPos="center"
    bgSize="cover"
  >
    <Container>
      <Heading as="h1" size="2xl" color="white">
        Your Next Website Awaits
      </Heading>
      <Button mt={4} colorScheme="teal">
        See Plans
      </Button>
    </Container>
  </Flex>
);

// Define other components like OurWork, Benefits, Plans, Services, Footer similarly

// Main App component
const App = () => (
  <Box as="main">
    <Navbar />
    <Hero />
    <PlansSection />
    <OurWorkSection />
    <Footer />
    {/* Render other section components here */}
  </Box>
);

export default App;
