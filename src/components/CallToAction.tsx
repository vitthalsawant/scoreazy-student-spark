import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import confidentChild from "@/assets/confident-child.jpg";

const CallToAction = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <Card className="overflow-hidden border-0 shadow-medium bg-warm-gradient">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-8 lg:p-12 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground leading-tight">
                  Give Your Child the
                  <span className="block">Confidence Advantage</span>
                </h2>
                
                <p className="text-lg text-accent-foreground/80 leading-relaxed">
                  Join hundreds of parents who've seen remarkable improvements in their child's 
                  self-confidence, social skills, and overall happiness.
                </p>

                <div className="bg-white/20 rounded-lg p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-accent-foreground">
                    What's Included:
                  </h3>
                  <ul className="space-y-2 text-accent-foreground/90">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                      <span>14 interactive video lessons</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                      <span>Printable activity sheets</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                      <span>Parent guidance videos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                      <span>Progress tracking tools</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                      <span>30-day money-back guarantee</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="cta" 
                    size="xl"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Start Today - Only $29
                  </Button>
                  <Button 
                    variant="outline" 
                    size="xl"
                    className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                  >
                    Learn More
                  </Button>
                </div>

                <div className="text-sm text-accent-foreground/70">
                  ⚡ Limited time: Save $20 (Regular price $49)
                </div>
              </div>

              <div className="relative h-64 lg:h-full min-h-[400px]">
                <img 
                  src={confidentChild}
                  alt="Confident child raising hand with enthusiasm"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-accent/20"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;