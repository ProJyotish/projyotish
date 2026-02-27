"use client";
import Navbar from "@/src/components/Navbar";
import Pricing from "@/src/components/Pricing";
import Footer from "@/src/components/Footer";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
