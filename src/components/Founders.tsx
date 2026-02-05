import { motion } from "framer-motion";
import { Linkedin, GraduationCap, Building, Instagram, Globe } from "lucide-react";

const founders = [
  {
    name: "Abhimanyu",
    role: "Co-Founder & Chief Astrologer",
    description:
      "IIT graduate and practicing Vedic Astrologer. Has developed proprietary techniques honed over thousands of cases, bringing ancient wisdom into the AI age.",
    linkedin: "https://www.linkedin.com/in/arana/",
    instagram: "https://instagram.com/agni108_",
    website: "https://www.pinpointjyotish.com",
    credentials: ["IIT Graduate", "Vedic Astrologer"],
    icon: GraduationCap,
  },
  {
    name: "Nishant Kyal",
    role: "Co-Founder & Tech Lead",
    description:
      "Built tech at Amazon and Freecharge. Brings years of experience building LLM models across sectors, ensuring ProJyotish delivers accurate and instant insights.",
    linkedin: "https://www.linkedin.com/in/nishant-kyal/",
    credentials: ["IIT Graduate", "Ex-Amazon", "Ex-Freecharge", "LLM Expert"],
    icon: Building,
  },
];

const Founders = () => {
  return (
    <section id="founders" className="py-24 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Meet the Founders
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining ancient Vedic wisdom with cutting-edge AI technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                  <founder.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {founder.name}
                  </h3>
                  <p className="font-body text-sm text-primary font-medium">
                    {founder.role}
                  </p>
                </div>
              </div>

              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                {founder.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {founder.credentials.map((credential) => (
                  <span
                    key={credential}
                    className="px-3 py-1 bg-muted rounded-full text-xs font-body font-medium text-muted-foreground"
                  >
                    {credential}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-body font-medium transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                {founder.instagram && (
                  <a
                    href={founder.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-body font-medium transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </a>
                )}
                {founder.website && (
                  <a
                    href={founder.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-body font-medium transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                    Website
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
