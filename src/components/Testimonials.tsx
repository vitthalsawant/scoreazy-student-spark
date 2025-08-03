import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import testimonialImage from "@/assets/testimonial-parent.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Mom of Emma (4 years old)",
      content: "Emma was so shy before this course. Now she confidently introduces herself to new friends at the playground. The transformation has been incredible!",
      rating: 5,
      image: testimonialImage
    },
    {
      name: "Michael Chen",
      role: "Dad of Alex (5 years old)",
      content: "The activities were perfect for Alex's age. He learned to express his feelings better and now handles disappointments much more maturely.",
      rating: 5,
      image: null
    },
    {
      name: "Lisa Rodriguez",
      role: "Mom of Twins (3 years old)",
      content: "Both my twins benefited so much from this program. They're more independent and confident in trying new things. Worth every penny!",
      rating: 5,
      image: null
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xl ${i < rating ? 'text-accent' : 'text-muted'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Parents Are Saying
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real families who've seen their children blossom 
            with newfound confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <Avatar className="w-12 h-12">
                    <AvatarImage 
                      src={testimonial.image || undefined} 
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-card rounded-full px-8 py-4 shadow-soft">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i}
                  className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium border-2 border-background"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Join 500+ Happy Families</div>
              <div className="text-sm text-muted-foreground">Average rating: 4.9/5 stars</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;