"use client";
 import { motion } from "framer-motion";
 import { Quote } from "lucide-react";
 
 const testimonials = [
   {
      quote: "It told me that I will have a medical procedure. And I had one the very next week! Freaky!",
   },
   {
     quote: "My billionaire boss used to set her crucial meeting time astrologically. Now I do it too.",
   },
   {
     quote: "It told me about my break-up last year. Also told me how to avoid a repeat. Very useful inputs",
   },
 ];
 
 const Testimonials = () => {
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
               className="bg-card rounded-2xl p-6 shadow-soft border border-border relative"
             >
               <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
               <p className="font-body text-foreground leading-relaxed italic">
                 "{testimonial.quote}"
               </p>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Testimonials;