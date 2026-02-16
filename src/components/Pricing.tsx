import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Crown, Sparkles, MessageCircle, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackMetaEvent } from "@/lib/tracking";

const plansData = {
  india: [
    {
      name: "Premium",
      icon: Crown,
      monthly: { price: "₹499", total: "₹499/month", whatsapp: "Send me Premium Monthly subscription link" },
      quarterly: { price: "₹366", total: "₹1,099/quarter", whatsapp: "Send me Premium Quarterly subscription link", savings: "Save 27%" },
      features: [
        "Unlimited Questions",
        "Daily Favourable Time Reports",
        "Customised for Your Kundli",
        "Personalised for Your Profession",
      ],
      popular: false,
      badge: null,
    },
    {
      name: "Power User",
      icon: Users,
      monthly: { price: "₹599", total: "₹599/month", whatsapp: "Send me Power User Monthly subscription link" },
      quarterly: { price: "₹446", total: "₹1,339/quarter", whatsapp: "Send me Power User Quarterly subscription link", savings: "Save 25%" },
      features: [
        "Everything in Premium",
        "Support for multiple profiles",
      ],
      popular: true,
      badge: "Most Popular",
    },
  ],
  international: [
    {
      name: "Premium",
      icon: Crown,
      monthly: { price: "$19.99", total: "$19.99/month", whatsapp: "Send me Premium Monthly subscription link (International)" },
      quarterly: { price: "$16.00", total: "$47.99/quarter", whatsapp: "Send me Premium Quarterly subscription link (International)", savings: "Save 20%" },
      features: [
        "Unlimited Questions",
        "Daily Favourable Time Reports",
        "Customised for Your Kundli",
        "Personalised for Your Profession",
      ],
      popular: false,
      badge: null,
    },
    {
      name: "Power User",
      icon: Users,
      monthly: { price: "$24.99", total: "$24.99/month", whatsapp: "Send me Power User Monthly subscription link (International)" },
      quarterly: { price: "$20.00", total: "$59.99/quarter", whatsapp: "Send me Power User Quarterly subscription link (International)", savings: "Save 20%" },
      features: [
        "Everything in Premium",
        "Support for multiple profiles",
      ],
      popular: true,
      badge: "Most Popular",
    },
  ],
};

const Pricing = () => {
  const [isQuarterly, setIsQuarterly] = useState(false);
  const [region, setRegion] = useState<"india" | "international">("india");

  const plans = plansData[region];

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
            Choose Your Plan
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Start with a 3-day free trial. Complete Vedic astrology guidance.
          </p>
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="font-body text-sm font-medium">3 Days Free Trial - No Limits</span>
          </div>

          {/* Region Toggle */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <div className="inline-flex bg-muted rounded-full p-1">
              <button
                onClick={() => setRegion("india")}
                className={`px-4 py-1.5 rounded-full text-sm font-body font-medium transition-colors ${
                  region === "india"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                🇮🇳 India
              </button>
              <button
                onClick={() => setRegion("international")}
                className={`px-4 py-1.5 rounded-full text-sm font-body font-medium transition-colors ${
                  region === "international"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                🌍 International
              </button>
            </div>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3">
            <span className={`font-body text-sm font-medium transition-colors ${!isQuarterly ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsQuarterly(!isQuarterly)}
              className={`relative inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isQuarterly ? "bg-primary" : "bg-input"}`}
            >
              <span className={`pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform ${isQuarterly ? "translate-x-7" : "translate-x-1"}`} />
            </button>
            <span className={`font-body text-sm font-medium transition-colors ${isQuarterly ? "text-foreground" : "text-muted-foreground"}`}>
              Quarterly
            </span>
            {isQuarterly && (
              <span className="bg-accent/20 text-accent px-2 py-0.5 rounded-full text-xs font-body font-semibold">
                Best Value
              </span>
            )}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => {
            const billing = isQuarterly ? plan.quarterly : plan.monthly;
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-background border-2 border-border"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-body font-semibold shadow-soft">
                    {plan.badge}
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                    plan.popular ? "bg-primary-foreground/20" : "bg-primary/10"
                  }`}>
                    <Icon className={`w-7 h-7 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                  </div>

                  <h3 className={`font-display text-2xl font-bold mb-2 ${
                    plan.popular ? "" : "text-foreground"
                  }`}>
                    {plan.name}
                  </h3>
                  <p className={`font-body text-sm ${
                    plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}>
                    {billing.total}
                  </p>

                  <div className="mt-4">
                    <span className={`font-display text-4xl font-bold ${
                      plan.popular ? "" : "text-foreground"
                    }`}>
                      {billing.price}
                    </span>
                    <span className={`font-body ${
                      plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}>
                      /month
                    </span>
                  </div>

                  {isQuarterly && "savings" in billing && (
                    <span className="inline-block mt-2 bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-body font-semibold">
                      {(billing as { savings: string }).savings}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 mt-0.5 ${
                        plan.popular ? "text-accent" : "text-primary"
                      }`} />
                      <span className={`font-body text-sm ${
                        plan.popular ? "text-primary-foreground/90" : "text-foreground"
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                  size="lg"
                >
                  <a
                    href={`https://wa.me/918291218234?text=${encodeURIComponent(billing.whatsapp)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackMetaEvent("Lead", { content_name: `Pricing ${plan.name} ${isQuarterly ? "Quarterly" : "Monthly"}` })}
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Get Started
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
