"use client";
import { motion } from "framer-motion";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import EmailReveal from "@/src/components/EmailReveal";
import { Mail, Clock } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg mb-12">
              Have questions about ProJyotish? We're here to help.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                className="bg-card border border-border rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  Email Support
                </h2>
                <p className="text-muted-foreground mb-4">
                  For general inquiries, support requests, or feedback.
                </p>
                <EmailReveal email="support@projyotish.com" />
              </motion.div>

              <motion.div
                className="bg-card border border-border rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  Response Time
                </h2>
                <p className="text-muted-foreground">
                  We typically respond within 24-48 hours during business days. For urgent matters related to your subscription or billing, please include your registered phone number in your email.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
