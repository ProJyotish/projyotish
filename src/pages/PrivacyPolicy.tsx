import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailReveal from "@/components/EmailReveal";

const PrivacyPolicy = () => {
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
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 9, 2026
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  1. Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  ProJyotish ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered Vedic astrology services through WhatsApp, iMessage, or our website.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  2. Information We Collect
                </h2>
                
                <h3 className="font-display text-xl font-medium text-foreground mb-3 mt-6">
                  2.1 Personal Information
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information you provide directly:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Full name</li>
                  <li>Date, time, and place of birth</li>
                  <li>Phone number (for WhatsApp/iMessage services)</li>
                  <li>Email address</li>
                  <li>Payment information (processed securely by third-party payment processors)</li>
                  <li>Questions and messages you send us</li>
                </ul>

                <h3 className="font-display text-xl font-medium text-foreground mb-3 mt-6">
                  2.2 Automatically Collected Information
                </h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Device information (type, operating system)</li>
                  <li>IP address and approximate location</li>
                  <li>Usage data and interaction patterns</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Generate personalized astrological readings and muhurta recommendations</li>
                  <li>Provide daily time slot notifications via WhatsApp/iMessage</li>
                  <li>Process payments and manage subscriptions</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our AI models and service quality</li>
                  <li>Send service-related communications</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  4. Data Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell your personal information. We may share your data with:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li><strong>Service Providers:</strong> Payment processors, cloud hosting providers, and messaging platforms (WhatsApp, Apple) necessary to deliver our services</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>With Your Consent:</strong> For any other purpose with your explicit permission</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  5. WhatsApp and iMessage Communications
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  When you use our services via WhatsApp or iMessage:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Your phone number is used solely to deliver our astrological services</li>
                  <li>Message content is processed to provide personalized readings</li>
                  <li>We retain conversation history to improve service quality</li>
                  <li>You can request deletion of your message history at any time</li>
                  <li>We comply with WhatsApp's Business Policy and Apple's guidelines</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  6. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement industry-standard security measures including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure payment processing through PCI-DSS compliant providers</li>
                  <li>Regular security audits and assessments</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  7. Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as your account is active or as needed to provide services. After account deletion, we may retain certain data for up to 3 years for legal compliance and legitimate business purposes.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  8. Your Rights and Choices
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Data Portability:</strong> Receive your data in a structured format</li>
                  <li><strong>Withdraw Consent:</strong> Revoke previously given consent</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, contact us at: <EmailReveal email="support@projyotish.com" />
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  9. Cookies and Tracking
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website uses cookies and similar technologies for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Essential website functionality</li>
                  <li>Analytics and performance monitoring</li>
                  <li>Remembering your preferences</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You can manage cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  10. Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors. If we become aware of such collection, we will promptly delete the data.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  11. International Data Transfers
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your data may be processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in compliance with applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  12. Third-Party Links
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  13. Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy periodically. We will notify you of material changes via email or through our services. The "Last updated" date at the top indicates the latest revision.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  14. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For privacy-related inquiries or to exercise your rights:
                </p>
                <div className="mt-4 space-y-2">
                  <p><EmailReveal email="support@projyotish.com" label="Email:" /></p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  15. Grievance Officer
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  In accordance with Information Technology Act 2000 and rules made thereunder, the name and contact details of the Grievance Officer are provided below:
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground"><strong>Name:</strong> Abhimanyu Arora</p>
                  <p><EmailReveal email="support@projyotish.com" label="Email:" /></p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
