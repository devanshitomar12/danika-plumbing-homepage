import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EmergencyAndBenefits from "@/components/EmergencyAndBenefits";
import ProblemCards from "@/components/ProblemCards";
import WhyAndTestimonials from "@/components/WhyAndTestimonials";
import BigFiveServices from "@/components/BigFiveServices";
import EveryPlumbingService from "@/components/EveryPlumbingService";
import DanikaWayAndProjects from "@/components/DanikaWayAndProjects";
import EducationalAndCosts from "@/components/EducationalAndCosts";
import AreasFaqFooter from "@/components/AreasFaqFooter";
import StickyCallCTA from "@/components/StickyCallCTA";
import GetHelpTab from "@/components/GetHelpTab";
import ContactDrawer from "@/components/ContactDrawer";
import FloatingChatbot from "@/components/FloatingChatbot";
import { DrawerProvider } from "@/context/DrawerContext";

export default function Home() {
  return (
    <DrawerProvider>
      <Header />
      <main className="min-h-screen flex flex-col w-full selection:bg-danika-maroon selection:text-white pb-16 sm:pb-0 relative">
        {/* B. Hero Section with Integrated Get Help NOW Form */}
        <Hero />

        {/* D. Emergency Services Banner & E. Benefits Strip */}
        <EmergencyAndBenefits />

        {/* F. Plumbing Services Intro & G. 8 Problem Cards & H. Residential/Commercial & I. Contact CTA */}
        <ProblemCards />

        {/* J. Why Choose Danika & K. Testimonials Carousel & L. Licence & Registration */}
        <WhyAndTestimonials />

        {/* M. The Big Five Interactive Categories */}
        <BigFiveServices />

        {/* N. Every Plumbing Service, One Call (Original 16-Service Grid) */}
        <EveryPlumbingService />

        {/* O. The Danika Way (5-Step Process) & P. Recent Plumbing Projects */}
        <DanikaWayAndProjects />

        {/* Q. Older Everett Homes & R. Water Quality/Pressure & S. Plumbing Costs & T. Electrical Services */}
        <EducationalAndCosts />

        {/* U. Service Areas & V. FAQ & W. Serving Since 2009 & Y. Map/Location & Z. Footer */}
        <AreasFaqFooter />

        {/* 1. FLOATING CHATBOT (Fixed bottom-right corner) */}
        <FloatingChatbot />

        {/* 2. VERTICAL GET HELP NOW TAB (Fixed right edge of viewport) */}
        <GetHelpTab />

        {/* 3. CONTACT FORM DRAWER & OVERLAY */}
        <ContactDrawer />

        {/* Mobile Sticky CTA */}
        <StickyCallCTA />
      </main>
    </DrawerProvider>
  );
}
