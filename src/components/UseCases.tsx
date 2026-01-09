import { motion } from "framer-motion";
import { Briefcase, Heart, TrendingUp, Clock, Users, Star } from "lucide-react";

const useCases = [
  {
    icon: Clock,
    title: "Perfect Timing for Key Decisions",
    description: "Find the ideal muhurta to send that crucial proposal, sign a contract, or launch your product.",
    example: "\"When is the best time to send my pitch to the investor?\"",
    color: "bg-saffron/20 text-saffron",
  },
  {
    icon: Briefcase,
    title: "Business & Career Blocks",
    description: "Understand karmic patterns affecting your professional growth and find remedies.",
    example: "\"Why does my business face repeated setbacks despite hard work?\"",
    color: "bg-primary/20 text-primary",
  },
  {
    icon: Heart,
    title: "Relationship Insights",
    description: "Navigate relationship challenges with astrological wisdom on compatibility and timing.",
    example: "\"What is blocking my relationship from progressing?\"",
    color: "bg-secondary/20 text-secondary",
  },
  {
    icon: TrendingUp,
    title: "Financial Muhurtas",
    description: "Optimize investments and financial decisions with planetary alignments.",
    example: "\"When should I invest in this opportunity?\"",
    color: "bg-sage/20 text-sage",
  },
  {
    icon: Users,
    title: "Daily Life Optimization",
    description: "Get personalized time slots for important meetings, travel, and daily activities.",
    example: "\"What are my favorable hours tomorrow for networking?\"",
    color: "bg-accent/30 text-accent-foreground",
  },
  {
    icon: Star,
    title: "Life Purpose & Direction",
    description: "Deep karmic analysis to understand your dharma and life path.",
    example: "\"What is my true calling according to my chart?\"",
    color: "bg-terracotta/20 text-terracotta",
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-24 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Can You Ask?
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            From daily timing optimization to deep karmic insights, ProJyotish guides you through life's decisions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 ${useCase.color} rounded-xl flex items-center justify-center mb-4`}>
                <useCase.icon className="w-6 h-6" />
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {useCase.title}
              </h3>
              
              <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed">
                {useCase.description}
              </p>
              
              <div className="bg-muted rounded-lg p-3 border-l-4 border-primary/40">
                <p className="font-body text-sm text-foreground/80 italic">
                  {useCase.example}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
