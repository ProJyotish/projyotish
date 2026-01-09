import { motion } from "framer-motion";
import { MessageSquare, Calendar, Sparkles, Clock } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Connect via WhatsApp or iMessage",
    description: "Simply message ProJyotish on your preferred platform. No app download needed.",
  },
  {
    icon: Calendar,
    title: "Share Your Birth Details",
    description: "Provide your birth date, time, and place to generate your personalized Kundli.",
  },
  {
    icon: Clock,
    title: "Receive Daily Muhurtas",
    description: "Get optimal time slots tailored to your chart for important activities each day.",
  },
  {
    icon: Sparkles,
    title: "Ask Deeper Questions",
    description: "Dive into karmic patterns, business blocks, relationships, and life purpose.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-card">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the wisdom of Vedic astrology through the convenience of your messaging app
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-primary/30 to-transparent -translate-x-1/2" />
              )}
              
              <div className="bg-background rounded-2xl p-6 shadow-soft border border-border hover:shadow-elevated hover:border-primary/20 transition-all duration-300 h-full">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-body font-bold text-sm shadow-soft">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
