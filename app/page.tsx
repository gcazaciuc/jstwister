// Import necessary components from Chakra UI
import FAQSection from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
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

// Define other components like OurWork, Benefits, Plans, Services, Footer similarly

// Main App component
const App = () => (
  <Box as="main">
    <Navbar />
    <Hero />
    <PlansSection />
    <OurWorkSection />
    <FAQSection />
    <Footer />
    {/* Render other section components here */}
  </Box>
);

export default App;
