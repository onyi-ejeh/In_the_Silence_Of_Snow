const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-lg text-foreground">
              In the Silence of Snow
            </p>
            <p className="font-body text-sm text-muted-foreground mt-1">
              © 2025 Victoria Onyi Ejeh. All rights reserved.
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
