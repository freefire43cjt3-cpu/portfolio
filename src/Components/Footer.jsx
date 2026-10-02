import { ArrowUp, Mail } from "lucide-react";
import { FaXTwitter, FaRedditAlien, FaTiktok } from "react-icons/fa6";
import "./Footer.css";

const NAME = "Raymond Charles";
const EMAIL = "charlessamuelraymond@gmail.com";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: FaXTwitter, href: "https://x.com/rayghog?s=11", label: "X" },
  { icon: FaRedditAlien, href: "https://www.reddit.com/u/RAYghog/s/bcjfBDxmvE", label: "Reddit" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@ray_tech2", label: "TikTok" },
  { icon: Mail, href: `mailto:${EMAIL}`, label: "Email" },
];

function Footer() {
  return (
    <footer className="ft-footer">
      <div className="ft-inner">
        <div className="ft-top">
          {/* BRAND */}
          <div className="ft-brand">
            <a href="#home" className="ft-logo">
              {NAME.split(" ")[0].toUpperCase()}<span>.C</span>
            </a>
            <p>
              Frontend web developer building clean, modern and responsive web
              experiences for businesses and brands.
            </p>
          </div>

          {/* LINKS */}
          <nav className="ft-links" aria-label="Footer">
            <h4>Quick Links</h4>
            {LINKS.map(({ label, href }) => (
              <a key={label} href={href}>{label}</a>
            ))}
          </nav>

          {/* SOCIALS */}
          <div className="ft-connect">
            <h4>Connect</h4>
            <div className="ft-socials">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="ft-bottom">
          <p>© {new Date().getFullYear()} {NAME}. All rights reserved.</p>
          <a href="#home" className="ft-top-btn" aria-label="Back to top">
            Back to top <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;