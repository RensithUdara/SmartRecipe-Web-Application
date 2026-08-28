import Image from "next/image";
import Link from "next/link";
import { GitBranch, Mail, Sparkles } from "lucide-react";

const FOOTER_LINKS = [
  { href: "/", label: "Generator" },
  { href: "/recipes", label: "Recipes" },
  { href: "/planner", label: "Planner" },
  { href: "/tips", label: "Tips" },
  { href: "/about", label: "About" },
];

export function AppFooter() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Image src="/logo.png" width={48} height={48} alt="" />
          <div>
            <strong>Smart Recipe</strong>
            <span>Cook smarter. Waste less. Eat better.</span>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          {FOOTER_LINKS.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="footer-actions" aria-label="Project links">
          <a href="mailto:hello@smartrecipe.local" aria-label="Email SmartRecipe">
            <Mail size={17} />
          </a>
          <a href="https://github.com" aria-label="GitHub">
            <GitBranch size={17} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} SmartRecipe Web Application</span>
        <span>
          <Sparkles size={14} />
          Powered by Gemini AI
        </span>
      </div>
    </footer>
  );
}
