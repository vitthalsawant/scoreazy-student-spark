import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent">Scoreazy</h3>
            <p className="text-background/80 leading-relaxed">
              Empowering children with confidence and essential life skills through 
              expert-designed educational programs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                📘 Facebook
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                📷 Instagram
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                🐦 Twitter
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Courses</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-accent transition-colors">Confidence Building (3-5)</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Social Skills (6-8)</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Leadership (9-12)</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Academic Boosters</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Parent Resources</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-background/80 text-sm">
              Get tips, resources, and updates delivered to your inbox.
            </p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button 
                variant="cta" 
                size="sm"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/60 text-sm">
              © 2024 Scoreazy. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-background/60">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Accessibility</a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-background/10 rounded-full px-6 py-3">
              <span className="text-accent text-lg">🛡️</span>
              <span className="text-background/80 text-sm">
                30-Day Money-Back Guarantee • Secure Payment • Child-Safe Content
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;