import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

// Custom TikTok icon since lucide-react doesn't have it
const TikTokIcon = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/vickyejeh91",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/vickyejehmicah",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/vickyejehmicah/?hl=en",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@vicky_ejehmicah",
  },
  {
    name: "TikTok",
    icon: TikTokIcon,
    href: "https://www.tiktok.com/@vicky_ejeh?lang=en",
  },
];

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        {/* Connect Section */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-body mb-4">
            Let's Connect
          </p>
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6">
            Follow the Journey
          </h3>

          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow on ${social.name}`}
                className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <social.icon size={20} className="text-current" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-border mx-auto mb-10" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-lg text-foreground">
              In the Silence of Snow
            </p>
            <p className="font-body text-sm text-muted-foreground mt-1">
              © {new Date().getFullYear()} Victoria Onyi Ejeh. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Press Kit
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
