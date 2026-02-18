import { motion } from "framer-motion";
import { MessageCircle, Star, Clock, Heart } from "lucide-react";
import logo from "@/assets/projyotish-logo-new.jpeg";
import { trackMetaEvent } from "@/lib/tracking";

const MarriageTiming = () => {
  const whatsappUrl = "https://wa.me/918291218234?text=I%20want%20to%20know%20my%20marriage%20timing";

  const handleCTA = () => {
    trackMetaEvent("Lead", { content_name: "Marriage Timing CTA" });
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-saffron/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container px-4 py-20 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <img
                src={logo}
                alt="ProJyotish"
                className="w-20 h-20 mx-auto rounded-2xl shadow-elevated"
              />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Get Relationship{" "}
              <span className="text-gradient">Astrology Consultation</span>
            </motion.h1>

            {/* Body copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-5 mb-10"
            >
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
                High quality Astrologer developed by IITians who have studied Jyotisha as a science.
              </p>
              <p className="font-body text-lg md:text-xl text-foreground font-semibold leading-relaxed">
                Unlimited Questions. No Time Limits.
              </p>
              <p className="font-body text-lg md:text-xl text-primary leading-relaxed font-medium">
                Use the 3 day free trial to untangle Karma hindering relationships
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="space-y-4"
            >
              <button
                onClick={handleCTA}
                className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-display font-bold text-lg rounded-2xl shadow-elevated hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1"
              >
                <Heart className="w-6 h-6" />
                Start Free Trial Now
              </button>
              <p className="text-sm text-muted-foreground font-body">
                Chat with ProJyotish on WhatsApp — instant & private
              </p>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-14 pt-8 border-t border-border/50"
            >
              <div className="flex flex-wrap justify-center gap-6 items-center text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-saffron" />
                  <span className="font-body text-sm">Built by IIT alumni</span>
                </div>
                <span className="text-border hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-body text-sm">Responds in minutes</span>
                </div>
                <span className="text-border hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span className="font-body text-sm">WhatsApp & iMessage</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarriageTiming;
