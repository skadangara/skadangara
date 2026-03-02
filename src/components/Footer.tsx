import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <Link to="/" className="font-display text-lg font-bold text-foreground">
              Cogni<span className="text-primary">Kord</span>
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Supply chain exception resolution, orchestrated.
            </p>
          </div>

          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
            <Link to="/about" className="transition-colors hover:text-foreground">About Us</Link>
            <Link to="/products" className="transition-colors hover:text-foreground">Products</Link>
            <Link to="/contact" className="transition-colors hover:text-foreground">Contact Us</Link>
          </div>

          <p className="text-xs text-muted-foreground">
            © 2026 CogniKord AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
