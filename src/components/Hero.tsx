import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-children.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Build Your Child's 
                <span className="block text-accent"> Confidence</span>
                Early
              </h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Our expert-designed microcourse helps children ages 3-5 develop self-confidence, 
                social skills, and emotional resilience through fun, engaging activities.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl"
                className="bg-white text-primary hover:bg-white/90"
              >
                Enroll Now - $29
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Watch Preview
              </Button>
            </div>

            <div className="flex items-center gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Ages 3-5</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>2-week course</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Expert-led</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Happy children learning and building confidence"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-white/20 rounded-2xl blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;