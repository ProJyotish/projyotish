import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";

const launchPlan = {
  name: "Launch Special",
  icon: Crown,
  price: "₹499",
  duration: "/month",
  description: "Complete Vedic astrology guidance at an exclusive launch price",
  features: [
    "Customised Monthly Karma unfolding",
    "Daily Favourable and unfavourable times",
    "No limits access to Life Astrology",
    "No limits access to favourable moment suggestions",
  ],
  cta: "Subscribe Now",
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-card">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Launch Special
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Get complete Vedic astrology guidance at an exclusive price
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl p-8 bg-primary text-primary-foreground shadow-glow max-w-md w-full"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-body font-semibold shadow-soft">
              Limited Time Offer
            </div>

            <div className="text-center mb-6">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center bg-primary-foreground/20">
                <Crown className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="font-display text-2xl font-bold mb-2">{launchPlan.name}</h3>
              <p className="font-body text-sm text-primary-foreground/80">
                {launchPlan.description}
              </p>
              
              <div className="mt-4">
                <span className="font-display text-4xl font-bold">{launchPlan.price}</span>
                <span className="font-body text-primary-foreground/80">{launchPlan.duration}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {launchPlan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 shrink-0 mt-0.5 text-accent" />
                  <span className="font-body text-sm text-primary-foreground/90">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button className="w-full py-3 px-6 rounded-xl font-body font-semibold transition-all duration-300 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              {launchPlan.cta}
            </button>
            <p className="mt-3 text-center text-xs text-primary-foreground/70 font-body">
              You will see the name Agni108 on the payment page
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
