import { motion } from "framer-motion";
import { MessageSquare, Sparkles, Calendar, Sun, TrendingUp, Heart } from "lucide-react";

const capabilities = [
  {
    icon: Sparkles,
    title: "Big-Picture Life Questions",
    description: "\"When will I land my first job?\" or \"What's the ideal time for marriage?\"",
  },
  {
    icon: TrendingUp,
    title: "Everyday Decisions",
    description: "\"What's the optimal time to send that sales proposal?\" or \"Best time for a romantic walk?\"",
  },
  {
    icon: Sun,
    title: "Daily Guidance",
    description: "Tailored to your unique profile, highlighting the best and least favourable times for key activities.",
  },
  {
    icon: Calendar,
    title: "Monthly Forecasts",
    description: "Detailed predictions on upcoming opportunities, challenges, and karmic unfoldings.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-card">
      <div className="container px-4">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            The World's Most Powerful Astrology AI
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Trained by <span className="text-primary font-semibold">Abhimanyu Rana</span>, an IIT Delhi B.Tech graduate turned professional Vedic astrologer, ProJyotish harnesses authentic Vedic Jyotish principles alongside innovative techniques. The result? Spot-on predictions with unmatched accuracy, every time.
          </p>
          <p className="font-body text-lg text-primary/80 mt-4 italic">
            It's like having an elite astrologer on call - a luxury once reserved for the ultra-wealthy and influential.
          </p>
        </motion.div>

        {/* What it can do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
            What ProJyotish Can Do For You
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-2xl p-6 shadow-soft border border-border hover:shadow-elevated hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How to get started */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              How to Get Started
            </h3>
          </div>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            It's incredibly straightforward. Just send a <span className="text-primary font-semibold">"Hi"</span> to ProJyotish on WhatsApp, and you're in. From there, share your queries, birth details, or any questions - we handle the rest with expert precision.
          </p>
        </motion.div>

        {/* Honesty & Fairness */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center">
              <Heart className="w-7 h-7 text-primary" />
            </div>
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Honesty & Fairness
          </h3>
          <blockquote className="font-body text-lg text-muted-foreground italic border-l-4 border-primary/30 pl-6 mb-6 text-left">
            "I will now describe the Shastra for the benefit of all."
            <footer className="text-sm text-primary/70 mt-2 not-italic">- Sage Parashara to Maitreya, Brihat Parashara Hora Shastra</footer>
          </blockquote>
          <p className="font-body text-muted-foreground leading-relaxed">
            We embody this timeless ethos. Technology is our bridge to democratize this ancient wisdom, making elite Vedic astrology accessible to everyone - not just the privileged few. We're transparent about being a high-quality blend of software and AI, because true empowerment starts with trust.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
