import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold text-primary">
              Scoreazy
            </a>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                Benefits
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Reviews
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button variant="cta" size="sm">
              Enroll Now
            </Button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-foreground transition-all ${isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
              <span className={`block h-0.5 w-6 bg-foreground transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-6 bg-foreground transition-all ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                Benefits
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Reviews
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
                <Button variant="cta" size="sm">
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;