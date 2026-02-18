import { motion } from "framer-motion";
import { Heart, Sparkles, Quote, CheckCircle, Clock, MessageCircle, ShieldCheck, Infinity } from "lucide-react";
import logo from "@/assets/projyotish-logo-new.jpeg";
import { trackMetaEvent } from "@/lib/tracking";

const whatsappUrl = "https://wa.me/918291218234?text=I%20want%20to%20know%20my%20marriage%20timing";

const handleCTA = () => {
  trackMetaEvent("Lead", { content_name: "Marriage Timing CTA" });
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};

const testimonials = [
  {
    quote: "It told me about my break-up last year. Also told me how to avoid a repeat. Very useful inputs.",
  },
  {
    quote: "It told me that I will have a medical procedure. And I had one the very next week! Freaky!",
  },
  {
    quote: "My billionaire boss used to set her crucial meeting time astrologically. Now I do it too.",
  },
];

const benefits = [
  {
    icon: Infinity,
    title: "Unlimited Questions",
    description: "Ask as many questions as you need — no caps, no hidden limits.",
  },
  {
    icon: Clock,
    title: "No Time Limits",
    description: "Take your time. Sessions don't expire; your chart stays ready.",
  },
  {
    icon: ShieldCheck,
    title: "Science-Based Approach",
    description: "Built by IITians who studied Jyotisha as a rigorous, evidence-driven science.",
  },
  {
    icon: Heart,
    title: "Relationship Focused",
    description: "Identify karmic patterns and exact timing windows for commitment.",
  },
];

const CTAButton = ({ className = "" }: { className?: string }) => (
  <button
    onClick={handleCTA}
    className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-body font-semibold rounded-xl shadow-elevated hover:bg-primary-foreground/90 transition-all duration-300 hover:-translate-y-1 ${className}`}
  >
    <Sparkles className="w-5 h-5" />
    Start Free Trial Now
  </button>
);

const MarriageTiming = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-saffron/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
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
                className="w-28 h-28 md:w-40 md:h-40 mx-auto rounded-2xl shadow-elevated animate-float"
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

            {/* Sub-headline — pain point + solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
                High quality Astrologer developed by IITians who have studied Jyotisha as a science.
              </p>
              <p className="font-body text-lg md:text-xl text-foreground font-semibold leading-relaxed">
                Unlimited Questions. No Time Limits.
              </p>
              <p className="font-body text-lg md:text-xl text-primary leading-relaxed font-medium">
                Use the 3 day free trial to untangle Karma hindering relationships.
              </p>
            </motion.div>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="space-y-3"
            >
              <button
                onClick={handleCTA}
                className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-display font-bold text-lg rounded-2xl shadow-elevated hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1"
              >
                <Heart className="w-6 h-6" />
                Start Free Trial Now
              </button>
              <p className="text-sm text-muted-foreground font-body">
                Chat on WhatsApp — instant, private & free for 3 days
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── USP / WHY PROJYOTISH ─── */}
      <section className="py-20 bg-card">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Why ProJyotish Is Different
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Not a generic horoscope app. A serious Vedic astrology tool built with scientific rigour by IIT alumni.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background rounded-2xl p-6 shadow-soft border border-border flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">{b.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{b.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT HELPS (Problem → Solution) ─── */}
      <section className="py-20 bg-background">
        <div className="container px-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Meeting People but Nothing Finalises?
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Vedic astrology explains why — and when it will change.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            {[
              "Marriage happens only during active commitment periods in your birth chart.",
              "Outside these windows, conversations happen but commitment delays.",
              "ProJyotish identifies your exact marriage activation period using your birth details.",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                <p className="font-body text-foreground text-lg leading-relaxed">{text}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <button
              onClick={handleCTA}
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-display font-bold text-lg rounded-2xl shadow-elevated hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1"
            >
              <Heart className="w-6 h-6" />
              Start Free Trial Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF ─── */}
      <section className="py-20 bg-card">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from people using ProJyotish
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background rounded-2xl p-6 shadow-soft border border-border relative"
              >
                <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
                <p className="font-body text-foreground leading-relaxed italic">"{t.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA (same design as home CTA) ─── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl" />
        </div>

        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Sparkles className="w-12 h-12 mx-auto mb-6 text-accent" />

            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Your Karmic Relationship Window — Revealed
            </h2>

            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Start a free 3-day trial. Unlimited questions, no time limits. Find out exactly when your stars align for commitment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-primary-foreground font-body font-medium rounded-xl border-2 border-primary-foreground/30 hover:border-primary-foreground/60 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TRUST FOOTER ─── */}
      <footer className="py-8 bg-background border-t border-border/50">
        <div className="container px-4 text-center">
          <p className="font-body text-sm text-muted-foreground">
            Built by IIT alumni • WhatsApp & iMessage • Responds in minutes
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MarriageTiming;
