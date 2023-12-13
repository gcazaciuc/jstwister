// Import necessary components from Chakra UI
import BenefitsSection from "@/components/benefits";
import FAQSection from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import LatestFromBlog from "@/components/latest-blog";
import Navbar from "@/components/nav";
import PlansSection from "@/components/plans";
import RecentWorkSection from "@/components/recent-work";
import TechnologiesWeUse from "@/components/technologies";
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
        <HowItWorks />
        <BenefitsSection />
        <TechnologiesWeUse />
        <PlansSection />
        <RecentWorkSection />
        <LatestFromBlog />
        <FAQSection />
        <Footer />
        {/* Render other section components here */}
    </Box>
);

export default App;
