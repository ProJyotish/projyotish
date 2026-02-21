"use client";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import HowItWorks from "@/src/components/HowItWorks";
import UseCases from "@/src/components/UseCases";

 import Testimonials from "@/src/components/Testimonials";
import Founders from "@/src/components/Founders";
import CTA from "@/src/components/CTA";
import Footer from "@/src/components/Footer";
import { MessageCircle } from "lucide-react";
import { trackMetaEvent } from "@/src/lib/tracking";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <UseCases />
         <Testimonials />
        
        <Founders />
        <CTA />
      </main>
      <Footer />
      
      {/* Floating Get Started button - mobile only */}
      <a
        href="https://wa.me/918291218234?text=Namaste"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackMetaEvent("Lead", { content_name: "Floating WhatsApp CTA" })}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-full shadow-lg hover:bg-primary/90 transition-colors md:hidden"
      >
        <MessageCircle className="w-5 h-5" />
        Get Started
      </a>
    </div>
  );
};

export default Index;
