"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import logo from "@/src/assets/projyotish-logo-new.jpeg";
import HeroQueryInput from "./HeroQueryInput";

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
              src={logo.src}
              alt="ProJyotish Logo"
              className="w-40 h-40 md:w-52 md:h-52 mx-auto rounded-2xl shadow-elevated animate-float"
            />
          </motion.div>

          {/* Solar system SVG */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex justify-center mb-6"
          >
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-60 h-60 md:w-80 md:h-80 opacity-40">
              <defs>
                <filter id="sun-glow-hero" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <circle cx="200" cy="200" r="48" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="3 6" opacity="0.35" />
              <circle cx="200" cy="200" r="72" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="3 6" opacity="0.35" />
              <circle cx="200" cy="200" r="100" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="3 6" opacity="0.35" />
              <circle cx="200" cy="200" r="135" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="3 6" opacity="0.35" />
              <circle cx="200" cy="200" r="178" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="3 6" opacity="0.35" />
              <circle cx="200" cy="200" r="220" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="3 6" opacity="0.35" />
              <circle cx="200" cy="200" r="18" fill="#C4522A" filter="url(#sun-glow-hero)" opacity="0.9" />
              <circle cx="200" cy="200" r="22" fill="none" stroke="#D4623A" strokeWidth="1" opacity="0.5" />
              <g style={{ transformOrigin: "200px 200px", animation: "solar-orbit 12s linear infinite" }}>
                <circle cx="200" cy="152" r="4" fill="#B8A898" />
              </g>
              <g style={{ transformOrigin: "200px 200px", animation: "solar-orbit 18s linear infinite" }}>
                <circle cx="200" cy="128" r="6" fill="#D4A876" />
              </g>
              <g style={{ transformOrigin: "200px 200px", animation: "solar-orbit 25s linear infinite" }}>
                <circle cx="200" cy="100" r="6.5" fill="#4A7FC1" />
                <g style={{ transformOrigin: "200px 100px", animation: "solar-orbit 8s linear infinite" }}>
                  <circle cx="200" cy="84" r="2.5" fill="#C8C4BE" />
                </g>
              </g>
              <g style={{ transformOrigin: "200px 200px", animation: "solar-orbit 35s linear infinite" }}>
                <circle cx="200" cy="65" r="5" fill="#C4522A" />
              </g>
              <g style={{ transformOrigin: "200px 200px", animation: "solar-orbit 50s linear infinite" }}>
                <circle cx="200" cy="22" r="11" fill="#C9A84C" />
              </g>
              <g style={{ transformOrigin: "200px 200px", animation: "solar-orbit 70s linear infinite" }}>
                <ellipse cx="200" cy="-20" rx="16" ry="4" fill="none" stroke="#D4B896" strokeWidth="1.5" opacity="0.7" />
                <circle cx="200" cy="-20" r="9" fill="#D4B896" />
              </g>
            </svg>
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

          {/* Query Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6"
          >
            <HeroQueryInput />
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
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
