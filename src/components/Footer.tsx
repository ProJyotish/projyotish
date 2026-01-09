import { Link } from "react-router-dom";
import logo from "@/assets/projyotish-logo.jpg";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col gap-8">
          {/* Top row: Logo, Navigation, Legal */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="ProJyotish"
                className="w-10 h-10 rounded-lg"
              />
              <span className="font-display text-xl font-semibold text-foreground">
                ProJyotish
              </span>
            </Link>

            <nav className="flex flex-wrap justify-center gap-6">
              <a
                href="/#how-it-works"
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                How It Works
              </a>
              <a
                href="/#use-cases"
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Use Cases
              </a>
              <a
                href="/#pricing"
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </a>
              <a
                href="/#founders"
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Team
              </a>
            </nav>

            <nav className="flex flex-wrap justify-center gap-6">
              <Link
                to="/terms"
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy"
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
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
