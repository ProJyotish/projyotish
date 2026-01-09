import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
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
              Terms and Conditions
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 9, 2026
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using InstaJyotish services through WhatsApp, iMessage, or any other platform, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  2. Description of Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  InstaJyotish provides AI-powered Vedic astrology services including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Personalized daily muhurta (auspicious timing) recommendations</li>
                  <li>Kundli (birth chart) based insights</li>
                  <li>Astrological consultations via messaging platforms</li>
                  <li>Karmic analysis and guidance</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  3. User Accounts and Registration
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To use our services, you must provide accurate birth details including date, time, and place of birth. You are responsible for maintaining the confidentiality of your account information and for all activities under your account.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  4. Subscription Plans and Payments
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  InstaJyotish offers various subscription tiers (Trial, Flow, Karma) with different features and pricing. By subscribing to a paid plan:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>You authorize us to charge the applicable fees to your chosen payment method</li>
                  <li>Subscriptions auto-renew unless cancelled before the renewal date</li>
                  <li>Refunds are subject to our refund policy as outlined below</li>
                  <li>Prices may change with 30 days prior notice</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  5. Refund Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We offer a 7-day money-back guarantee for new subscribers. Refund requests must be submitted within 7 days of the initial subscription. Partial refunds for unused portions of subscriptions are not available after this period.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  6. Messaging Services (WhatsApp/iMessage)
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By opting in to receive messages from InstaJyotish:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>You consent to receive service-related messages including daily recommendations</li>
                  <li>Message frequency depends on your subscription tier</li>
                  <li>Standard messaging rates may apply based on your carrier</li>
                  <li>You can opt-out at any time by messaging "STOP"</li>
                  <li>We will not share your phone number with third parties for marketing</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  7. Disclaimer of Warranties
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  InstaJyotish services are provided for informational and entertainment purposes only. Astrological guidance should not be considered as a substitute for professional advice in medical, legal, financial, or other matters. We make no guarantees about the accuracy of predictions or outcomes.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  8. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  InstaJyotish and its founders shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the services in the 12 months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  9. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, algorithms, methodologies, and materials provided through InstaJyotish are proprietary and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  10. Termination
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to suspend or terminate your access to our services at our discretion, including for violation of these terms. Upon termination, your right to use the services ceases immediately.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  11. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  12. Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  13. Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms and Conditions, please contact us at:
                </p>
                <p className="text-foreground mt-4">
                  <strong>Email:</strong> support@instajyotish.com
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
