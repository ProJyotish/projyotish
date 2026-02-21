"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Mail, Check, RefreshCw } from "lucide-react";

interface EmailRevealProps {
  email: string;
  label?: string;
}

const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return { num1, num2, answer: num1 + num2 };
};

const EmailReveal = ({ email, label }: EmailRevealProps) => {
  const [revealed, setRevealed] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha);
  const [userAnswer, setUserAnswer] = useState("");
  const [error, setError] = useState(false);

  const handleRevealClick = () => {
    setShowCaptcha(true);
    setError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(userAnswer) === captcha.answer) {
      setRevealed(true);
      setShowCaptcha(false);
    } else {
      setError(true);
      setCaptcha(generateCaptcha());
      setUserAnswer("");
    }
  };

  const handleRefresh = () => {
    setCaptcha(generateCaptcha());
    setUserAnswer("");
    setError(false);
  };

  if (revealed) {
    return (
      <motion.a
        href={`mailto:${email}`}
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Mail className="w-4 h-4" />
        {label && <span className="text-foreground mr-1">{label}</span>}
        {email}
      </motion.a>
    );
  }

  return (
    <div className="inline-block">
      <AnimatePresence mode="wait">
        {!showCaptcha ? (
          <motion.button
            key="reveal-button"
            onClick={handleRevealClick}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Mail className="w-4 h-4" />
            {label && <span className="text-foreground mr-1">{label}</span>}
            <span className="underline underline-offset-2">Click to reveal email</span>
          </motion.button>
        ) : (
          <motion.form
            key="captcha-form"
            onSubmit={handleSubmit}
            className="inline-flex items-center gap-2 flex-wrap"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <span className="text-muted-foreground text-sm">
              Solve: {captcha.num1} + {captcha.num2} =
            </span>
            <Input
              type="number"
              value={userAnswer}
              onChange={(e) => {
                setUserAnswer(e.target.value);
                setError(false);
              }}
              className={`w-16 h-8 text-center ${error ? "border-destructive" : ""}`}
              placeholder="?"
              autoFocus
            />
            <Button type="submit" size="sm" variant="default" className="h-8">
              <Check className="w-4 h-4" />
            </Button>
            <Button
              type="button"
              size="sm"
              variant="ghost"
              className="h-8"
              onClick={handleRefresh}
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
            {error && (
              <span className="text-destructive text-sm w-full">
                Incorrect, try again
              </span>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmailReveal;
