import { motion } from "framer-motion";
import { Check, Crown, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

const features = [
  "Unlimited Questions",
  "Daily Favourable Time Reports",
  "Customised for Your Kundli",
  "Personalised for Your Profession",
];

const plans = [
  {
    name: "Monthly",
    price: "₹499",
    duration: "/month",
    description: "Billed monthly",
    badge: null,
    savings: null,
    razorpayButtonId: "pl_SCMdcIb09vDfin",
    popular: false,
  },
  {
    name: "Quarterly",
    price: "₹399",
    duration: "/month",
    description: "Billed quarterly",
    badge: "Best Value",
    savings: "Save 20%",
    razorpayButtonId: "pl_SCMacxJd2kUNx6",
    popular: true,
  },
];

const RazorpayButton = ({ buttonId }: { buttonId: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear any existing content
    containerRef.current.innerHTML = '';
    
    // Create form and script
    const form = document.createElement('form');
    const script = document.createElement('script');
    script.src = 'https://cdn.razorpay.com/static/widget/subscription-button.js';
    script.setAttribute('data-subscription_button_id', buttonId);
    script.setAttribute('data-button_theme', 'brand-color');
    script.async = true;
    
    form.appendChild(script);
    containerRef.current.appendChild(form);
    
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [buttonId]);

  return <div ref={containerRef} className="w-full flex justify-center" />;
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
            Choose Your Plan
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Start with a 3-day free trial. Complete Vedic astrology guidance.
          </p>
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="font-body text-sm font-medium">3 Days Free Trial - No Limits</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
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
                  <Crown className={`w-7 h-7 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                </div>
                
                <h3 className={`font-display text-2xl font-bold mb-2 ${
                  plan.popular ? "" : "text-foreground"
                }`}>
                  {plan.name}
                </h3>
                <p className={`font-body text-sm ${
                  plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {plan.description}
                </p>
                
                <div className="mt-4">
                  <span className={`font-display text-4xl font-bold ${
                    plan.popular ? "" : "text-foreground"
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`font-body ${
                    plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}>
                    {plan.duration}
                  </span>
                </div>
                
                {plan.savings && (
                  <span className="inline-block mt-2 bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-body font-semibold">
                    {plan.savings}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {features.map((feature) => (
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

              <RazorpayButton buttonId={plan.razorpayButtonId} />
              
              <p className={`mt-3 text-center text-xs font-body ${
                plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"
              }`}>
                You will see "Agni108" on the payment page
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
