import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Benefits = () => {
  const benefits = [
    {
      title: "Social Confidence",
      description: "Learn to make friends, share, and communicate effectively with peers",
      icon: "👥",
      highlight: "Most Popular"
    },
    {
      title: "Self-Expression",
      description: "Develop the ability to express feelings, thoughts, and needs clearly",
      icon: "🗣️",
      highlight: null
    },
    {
      title: "Problem Solving",
      description: "Build critical thinking skills to tackle challenges independently",
      icon: "🧩",
      highlight: null
    },
    {
      title: "Emotional Resilience",
      description: "Learn healthy ways to handle disappointment and setbacks",
      icon: "💪",
      highlight: "Parent Favorite"
    },
    {
      title: "Leadership Skills",
      description: "Encourage taking initiative and helping others in group activities",
      icon: "⭐",
      highlight: null
    },
    {
      title: "Body Language",
      description: "Understand and use confident posture, eye contact, and gestures",
      icon: "🤝",
      highlight: null
    }
  ];

  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Your Child Will Learn
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive curriculum covers essential confidence-building skills 
            through age-appropriate activities and proven techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="relative hover:shadow-medium transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              {benefit.highlight && (
                <Badge 
                  className="absolute -top-2 -right-2 bg-accent text-accent-foreground"
                  variant="secondary"
                >
                  {benefit.highlight}
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <CardTitle className="text-xl font-semibold">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-success-gradient rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
            Proven Results
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-secondary-foreground">
            <div>
              <div className="text-3xl font-bold mb-2">94%</div>
              <p className="text-sm">Parents report improved confidence</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2 weeks</div>
              <p className="text-sm">Average time to see results</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <p className="text-sm">Happy families served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;