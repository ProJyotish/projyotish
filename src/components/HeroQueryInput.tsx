import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const suggestions = [
  "Career guidance",
  "Marriage compatibility",
  "Health insights",
  "Best muhurat",
  "Kundli reading",
  "Business decisions",
  "Relationship advice",
  "Financial timing",
  "Education prospects",
  "Travel timing",
];

const HeroQueryInput = () => {
  const [query, setQuery] = useState("");

  const handleSend = () => {
    const message = query.trim() || "Namaste";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/918291218234?text=${encodedMessage}`;
    (window as any).gtagSendEvent(url);
  };

  const handleChipClick = (suggestion: string) => {
    setQuery(suggestion);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Input field with send button */}
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about your kundli, muhurat, career..."
          className="w-full h-14 pl-5 pr-14 bg-card border-2 border-border rounded-full font-body text-foreground placeholder:text-muted-foreground shadow-soft focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
        />
        <motion.button
          onClick={handleSend}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-2 w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground rounded-full shadow-elevated hover:shadow-glow transition-all duration-300"
        >
          <Send className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Suggestion chips with marquee animation */}
      <div className="mt-4 overflow-hidden relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div className="flex gap-2 animate-marquee hover:pause-marquee">
          {/* Duplicate chips for seamless loop */}
          {[...suggestions, ...suggestions].map((suggestion, index) => (
            <motion.button
              key={`${suggestion}-${index}`}
              onClick={() => handleChipClick(suggestion)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 px-4 py-2 bg-card border border-border rounded-full font-body text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-accent/10 transition-all duration-200 cursor-pointer"
            >
              {suggestion}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroQueryInput;
