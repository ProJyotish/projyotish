"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import testimonialsData from "@/content/testimonials.json";

const Testimonials = () => {
  const testimonials = testimonialsData.items;

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Our Users Say
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from people using ProJyotish
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border relative flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
              <p className="font-body text-foreground leading-relaxed italic flex-1 mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              {/* Attribution row */}
              <div className="flex items-center gap-3 border-t border-border/50 pt-4">
                <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center shrink-0 overflow-hidden">
                  {testimonial.name ? (
                    <span className="font-display text-base font-semibold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  ) : (
                    <span className="font-display text-sm font-semibold text-primary/40">★</span>
                  )}
                </div>
                <div>
                  {testimonial.name ? (
                    <>
                      <p className="font-body text-sm font-semibold text-foreground leading-tight">
                        {testimonial.name}
                      </p>
                      {testimonial.location && (
                        <p className="font-body text-xs text-muted-foreground leading-tight">
                          {testimonial.location}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="font-body text-xs text-muted-foreground italic">
                      Verified ProJyotish user
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
