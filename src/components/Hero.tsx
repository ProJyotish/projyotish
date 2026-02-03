import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import logo from "@/assets/projyotish-logo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-saffron/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <img
              src={logo}
              alt="ProJyotish Logo"
              className="w-40 h-40 md:w-52 md:h-52 mx-auto rounded-2xl shadow-elevated animate-float"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Ancient Wisdom,{" "}
            <span className="text-gradient">Instant Guidance</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            AI-powered Vedic Astrology on WhatsApp & iMessage. Get personalized 
            muhurtas for key decisions and deep karmic insights. Trained by 
            IITian who studied Vedic Astrology as a science on ancient knowledge and thousands of real cases.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                (window as any).gtagSendEvent("https://wa.me/918291218234?text=Namaste");
              }}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-xl shadow-elevated hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <Sparkles className="w-5 h-5" />
              Start Your Journey
            </button>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 bg-card text-foreground font-body font-medium rounded-xl shadow-soft border border-border hover:border-primary/30 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              See How It Works
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground mb-4">Built by IIT alumni • Trusted by professionals</p>
            <div className="flex justify-center gap-6 items-center text-muted-foreground/60">
              <span className="font-body text-sm">WhatsApp</span>
              <span className="text-border">•</span>
              <span className="font-body text-sm">iMessage</span>
              <span className="text-border">•</span>
              <span className="font-body text-sm">24/7 Available</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
