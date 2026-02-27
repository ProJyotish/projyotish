"use client";
import { motion } from "framer-motion";
import { Linkedin, GraduationCap, Building, Instagram, Globe, Briefcase, Code, Star } from "lucide-react";
import foundersData from "@/content/founders.json";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "graduation-cap": GraduationCap,
  "building": Building,
  "briefcase": Briefcase,
  "code": Code,
  "star": Star,
};

const Founders = () => {
  const founders = foundersData.items;

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
          {founders.map((founder, index) => {
            const IconComponent = iconMap[founder.iconType] || GraduationCap;
            return (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 rounded-2xl shrink-0 overflow-hidden bg-accent/20 flex items-center justify-center">
                    {founder.photo ? (
                      <img
                        src={founder.photo}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <IconComponent className="w-8 h-8 text-primary" />
                    )}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Founders;
