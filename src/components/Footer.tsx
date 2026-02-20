import { Link } from "react-router-dom";
import logo from "@/assets/projyotish-logo-new.jpeg";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col gap-8">
          {/* Grid layout */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
            {/* Logo + Brand */}
            <div className="col-span-3 md:col-span-1">
              <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="ProJyotish" className="w-10 h-10 rounded-lg" />
                <span className="font-display text-xl font-semibold text-foreground">ProJyotish</span>
              </Link>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-2">
              <span className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Navigate</span>
              <a href="/#how-it-works" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
              <a href="/#use-cases" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Use Cases</a>
              <Link to="/pricing" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
              <a href="/#founders" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Team</a>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-2">
              <span className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Legal</span>
              <Link to="/terms" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Terms & Conditions</Link>
              <Link to="/privacy" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link>
            </div>

            {/* Guidance */}
            <div className="flex flex-col gap-2">
              <span className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Guidance</span>
              <Link to="/career" className="font-body text-xs text-muted-foreground/80 hover:text-foreground transition-colors">Career</Link>
              <Link to="/business" className="font-body text-xs text-muted-foreground/80 hover:text-foreground transition-colors">Business</Link>
              <Link to="/health" className="font-body text-xs text-muted-foreground/80 hover:text-foreground transition-colors">Health</Link>
              <Link to="/love" className="font-body text-xs text-muted-foreground/80 hover:text-foreground transition-colors">Love</Link>
              <Link to="/wealth" className="font-body text-xs text-muted-foreground/80 hover:text-foreground transition-colors">Wealth</Link>
              <Link to="/marriage-timing" className="font-body text-xs text-muted-foreground/80 hover:text-foreground transition-colors">Marriage Timing</Link>
            </div>
          </div>

          {/* Bottom row: Copyright */}
          <div className="border-t border-border pt-6 text-center">
            <p className="font-body text-sm text-muted-foreground">
              © 2026 ProJyotish. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
