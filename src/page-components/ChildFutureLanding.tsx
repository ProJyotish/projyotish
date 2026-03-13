"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Shield, Clock, Globe, CheckCircle } from "lucide-react";
import logo from "@/src/assets/file.svg";
import { trackMetaEvent } from "@/src/lib/tracking";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WHATSAPP_URL = "https://wa.me/919821956888?text=I%20have%20a%20question%20about%20my%20child%27s%20future";

const WhatsAppButton = ({ text = "Start with 10 free questions", className = "" }: { text?: string; className?: string }) => (
  <motion.a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => trackMetaEvent("Lead", { content_name: "Child Future Landing WhatsApp CTA" })}
    whileHover={{ scale: 1.03, y: -2 }}
    whileTap={{ scale: 0.97 }}
    className={`inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-body font-bold text-lg rounded-2xl shadow-elevated hover:bg-[#20BD5A] transition-colors duration-300 ${className}`}
  >
    <WhatsAppIcon className="w-6 h-6" />
    {text}
  </motion.a>
);

const RotatingText = ({ texts, className = "" }: { texts: string[]; className?: string }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % texts.length), 2500);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <span className={`inline-block relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="inline-block"
          style={{
            backgroundImage: "linear-gradient(135deg, hsl(15 55% 42%) 0%, hsl(40 80% 55%) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const WhatsAppChat = ({ messages }: { messages: { text: string; sent: boolean; time?: string }[] }) => (
  <div className="bg-[#ECE5DD] rounded-2xl p-4 shadow-elevated max-w-sm w-full">
    <div className="flex items-center gap-3 pb-3 border-b border-[#D1C7B7] mb-3">
      <img src={logo.src} alt="ProJyotish" className="w-10 h-10 rounded-full" />
      <div>
        <p className="font-body font-semibold text-sm text-[#111B21]">ProJyotish</p>
        <p className="font-body text-xs text-[#667781]">online</p>
      </div>
    </div>
    <div className="space-y-2">
      {messages.map((msg, i) => (
        <div key={i} className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}>
          <div className={`max-w-[85%] px-3 py-2 rounded-lg font-body text-sm leading-relaxed ${msg.sent ? "bg-[#DCF8C6] text-[#111B21]" : "bg-white text-[#111B21]"}`}>
            <p>{msg.text}</p>
            {msg.time && <p className="text-[10px] text-[#667781] text-right mt-1">{msg.time}</p>}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const QuestionCard = ({ question }: { question: string }) => (
  <div className="bg-[#ECE5DD] rounded-2xl p-4 shadow-soft min-w-[280px] max-w-[300px] flex-shrink-0">
    <div className="flex items-center gap-3 pb-3 border-b border-[#D1C7B7] mb-3">
      <img src={logo.src} alt="ProJyotish" className="w-8 h-8 rounded-full" />
      <p className="font-body font-semibold text-xs text-[#111B21]">ProJyotish</p>
    </div>
    <div className="flex justify-start">
      <div className="bg-white px-3 py-2 rounded-lg font-body text-sm text-[#111B21] leading-relaxed">{question}</div>
    </div>
  </div>
);

const heroRotatingTexts = ["your child's exam results", "the right college for them", "their ideal career path", "their academic potential"];

const carouselQuestions = [
  "Will my child score well in boards?",
  "Which stream is best for my child?",
  "Will my son/daughter get into IIT or AIIMS?",
  "Is my child meant for foreign education?",
  "Should I invest in expensive coaching?",
  "What career will suit my child's nature?",
  "Will my child be successful in life?",
  "When is the right age to start competitive prep?",
];

const testimonials = [
  {
    messages: [
      { text: "My son is 16 and refuses to study. I don't know what to do anymore. Nothing motivates him", sent: false, time: "Feb 10, 9:00 PM" },
      { text: "His 5th house activates strongly after April. He's in a low-interest phase right now - this is temporary. Pressure will backfire. What subjects does he actually enjoy?", sent: true, time: "Feb 10, 9:15 PM" },
      { text: "He likes computers and drawing but we wanted him to do science", sent: false, time: "Feb 10, 9:19 PM" },
      { text: "His chart shows creative-technical fields as his natural path. Science is fine but don't force a branch that doesn't match him.", sent: true, time: "Feb 10, 9:24 PM" },
      { text: "He scored 87% in boards. Took CS. First in class in his college semester 🙏 I wish I had listened earlier", sent: false, time: "Dec 4, 6:30 PM" },
    ],
  },
  {
    messages: [
      { text: "My daughter wants to do arts but we want science. She's very talented in drawing but we're worried about career", sent: false, time: "Jun 5, 4:00 PM" },
      { text: "Venus and Moon dominate her chart - creative fields are genuinely her strength. She will struggle in a purely technical path and excel in design, media, or psychology.", sent: true, time: "Jun 5, 4:18 PM" },
      { text: "But design doesn't pay well, does it?", sent: false, time: "Jun 5, 4:21 PM" },
      { text: "That's an old assumption. Her chart shows strong 2nd house - she will earn well through her creativity, more than she would through science.", sent: true, time: "Jun 5, 4:27 PM" },
      { text: "She got into NID Ahmedabad. We couldn't be prouder. Thank you for giving us the courage to let her choose 🙏", sent: false, time: "Aug 20, 7:00 PM" },
    ],
  },
  {
    messages: [
      { text: "Son has been preparing for JEE for 2 years. 2nd attempt next month. He's devastated from last year", sent: false, time: "Nov 28, 8:00 PM" },
      { text: "Jupiter enters a strong 5th house period in December. The second attempt is much better placed than the first. His confidence is the only thing to protect right now.", sent: true, time: "Nov 28, 8:18 PM" },
      { text: "Got into NIT Trichy. Rank 3400. He cried when the result came out 🙏 Thank you for keeping hope alive", sent: false, time: "May 2, 9:00 AM" },
    ],
  },
  {
    messages: [
      { text: "My daughter is very bright but her board results don't reflect it. Teachers say she has potential but something is blocking her", sent: false, time: "Apr 12, 3:30 PM" },
      { text: "Ketu in her 5th house creates mental blocks and exam anxiety specifically - she knows the material but performs below level in formal exams. This eases after she turns 18.", sent: true, time: "Apr 12, 3:48 PM" },
      { text: "That's exactly what it looks like. What can we do now?", sent: false, time: "Apr 12, 3:52 PM" },
      { text: "Reduce exam pressure at home. Let her explain answers verbally to you - it builds her confidence. A Ketu remedy will also help.", sent: true, time: "Apr 12, 3:58 PM" },
      { text: "Her score went from 62% to 81% in one year. The verbal practice made a huge difference. We had no idea about the anxiety 🙏", sent: false, time: "Mar 18, 5:00 PM" },
    ],
  },
];

const ChildFutureLanding = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      {/* ===== HERO ===== */}
      <section className="relative pt-20 pb-8 flex items-center justify-center bg-gradient-hero">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15 md:opacity-20">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[500px] h-[500px] md:w-[700px] md:h-[700px]">
            <defs>
              <filter id="sun-glow-child" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <circle cx="200" cy="200" r="48" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="3 6" opacity="0.35" />
            <circle cx="200" cy="200" r="72" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="3 6" opacity="0.35" />
            <circle cx="200" cy="200" r="100" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="3 6" opacity="0.35" />
            <circle cx="200" cy="200" r="135" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="3 6" opacity="0.35" />
            <circle cx="200" cy="200" r="178" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="3 6" opacity="0.35" />
            <circle cx="200" cy="200" r="220" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="3 6" opacity="0.35" />
            <circle cx="200" cy="200" r="18" fill="#C4522A" filter="url(#sun-glow-child)" opacity="0.9" />
            <circle cx="200" cy="200" r="22" fill="none" stroke="#D4623A" strokeWidth="1" opacity="0.5" />
            <g style={{ transformOrigin: "200px 200px", animation: "solar-orbit 12s linear infinite" }}><circle cx="200" cy="152" r="4" fill="#B8A898" /></g>
            <g style={{ transformOrigin: "200px 200px", animation: "solar-orbit 18s linear infinite" }}><circle cx="200" cy="128" r="6" fill="#D4A876" /></g>
            <g style={{ transformOrigin: "200px 200px", animation: "solar-orbit 25s linear infinite" }}>
              <circle cx="200" cy="100" r="6.5" fill="#4A7FC1" />
              <g style={{ transformOrigin: "200px 100px", animation: "solar-orbit 8s linear infinite" }}><circle cx="200" cy="84" r="2.5" fill="#C8C4BE" /></g>
            </g>
            <g style={{ transformOrigin: "200px 200px", animation: "solar-orbit 35s linear infinite" }}><circle cx="200" cy="65" r="5" fill="#C4522A" /></g>
            <g style={{ transformOrigin: "200px 200px", animation: "solar-orbit 50s linear infinite" }}><circle cx="200" cy="22" r="11" fill="#C9A84C" /></g>
            <g style={{ transformOrigin: "200px 200px", animation: "solar-orbit 70s linear infinite" }}>
              <ellipse cx="200" cy="-20" rx="16" ry="4" fill="none" stroke="#D4B896" strokeWidth="1.5" opacity="0.7" />
              <circle cx="200" cy="-20" r="9" fill="#D4B896" />
            </g>
          </svg>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-saffron/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="container px-4 py-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="mb-8">
              <img src={logo.src} alt="ProJyotish" className="w-20 h-20 mx-auto rounded-2xl shadow-elevated" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 leading-tight">
              Concerned about{" "}<RotatingText texts={heroRotatingTexts} />?
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Every child has a hidden path. Find out yours before the wrong door closes.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-8">
              <WhatsAppButton />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.45 }} className="flex flex-wrap justify-center gap-4 text-muted-foreground font-body text-sm">
              <div className="flex items-center gap-1.5"><Star className="w-4 h-4 text-saffron" /><span>1000s of parents helped</span></div>
              <span className="text-border hidden sm:inline">•</span><span>Vedic Astrology</span>
              <span className="text-border hidden sm:inline">•</span><span>Built by IIT graduates</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== QUESTIONS CAROUSEL ===== */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="font-body text-muted-foreground text-lg mb-2">Parents ask us</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Questions we answer every day</h2>
          </motion.div>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="flex gap-4 animate-marquee" style={{ animationDuration: "20s" }}>
              {[...carouselQuestions, ...carouselQuestions].map((q, i) => (
                <QuestionCard key={`${q}-${i}`} question={q} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS GRID ===== */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Real conversations, real results</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <WhatsAppChat messages={t.messages} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POST-TESTIMONIALS CTA ===== */}
      <section className="py-14 bg-card border-t border-border">
        <div className="container px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-xl mx-auto">
            <p className="font-body text-muted-foreground mb-5 text-lg">Thousands have found answers. Your turn.</p>
            <WhatsAppButton />
          </motion.div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">How it works</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { step: "1", title: "Share your birth details", desc: "Date, time, and place of birth. Takes 30 seconds." },
              { step: "2", title: "Get your reading", desc: "Our Vedic astrologer analyses your Kundli. First reply in under 2 minutes." },
              { step: "3", title: "Ask your 10 questions free", desc: "No card needed. No call. No catch." },
            ].map(({ step, title, desc }, i) => (
              <motion.div key={step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-primary-foreground">{step}</span>
                </div>
                <p className="font-body font-semibold text-primary-foreground text-base">{title}</p>
                <p className="font-body text-primary-foreground/80 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Your child&apos;s bright future is written in the stars</h2>
            <p className="font-body text-lg text-muted-foreground mb-10">Chat with our Astrologer and understand your child&apos;s true potential</p>
            <WhatsAppButton text="Start with 10 free questions" />
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-muted-foreground font-body text-sm">
              <span>100% private</span><span className="text-border">•</span><span>Instant reply</span><span className="text-border">•</span><span>No calls required</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChildFutureLanding;
