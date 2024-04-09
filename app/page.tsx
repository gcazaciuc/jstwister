// Import necessary components from Chakra UI
import BenefitsSection from "@/components/benefits";
import ContactSection from "@/components/contact-us";
import FAQSection from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero-v2";
import HowItWorks from "@/components/how-it-works";
import LatestFromBlog from "@/components/latest-blog";
import Navbar from "@/components/nav";
import PlansSection from "@/components/plans";
import ServicesSection from "@/components/services";
import TechnologiesWeUse from "@/components/technologies";
import ValueProposition from "@/components/value-proposition";
import { Box, Heading } from "@chakra-ui/react";
import { t } from "@lingui/macro";

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
        <ServicesSection />
        <BenefitsSection />

        <ValueProposition
            badgeText={t`Cost control`}
            title={t`Optimize your expenses`}
            description={t`Why pay thousands upfront to some unknown agency or freelancer ? With us you pay only a small monthly fee and we build your site exactly as you wanted! Seriosuly, it's the real deal: hand crafted, custom coded & custom designed website for your business.`}
            imageUrl="/optimize-cost.svg"
        />

        <TechnologiesWeUse />
        <ValueProposition
            badgeText={t`Maintainance`}
            title={t`Maintainance & support included`}
            description={[
                t`We take care of everything: hosting, maintenance, security, on page SEO optimizations, support, and more. All included in the monthly fee.`,
                t`Got a bug or need a new feature? We got you covered. We provide a number of monthly development hours included in each plan.`,
                t`Need more development hours? No problem, we can provide them at a very attractive rate.`,
                t`No more chasing around expensive, un-reliable freelancers to maintain your website.`,
            ]}
            imageUrl="/maintainance.svg"
        />

        <PlansSection />
        {/* <RecentWorkSection /> */}
        <LatestFromBlog />
        <FAQSection />
        <ContactSection />
        <Footer />
        {/* Render other section components here */}
    </Box>
);

export default App;
