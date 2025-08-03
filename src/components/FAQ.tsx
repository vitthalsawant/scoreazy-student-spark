import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is this course suitable for my 3-year-old?",
      answer: "Absolutely! Our course is specifically designed for children ages 3-5. We use age-appropriate activities, simple language, and engaging visuals that capture young children's attention while teaching valuable confidence-building skills."
    },
    {
      question: "How long does the course take to complete?",
      answer: "The course is designed as a 2-week program with 14 short lessons (5-10 minutes each). However, you can go at your own pace. Some families complete it faster, while others prefer to take more time to practice each skill."
    },
    {
      question: "Do I need to supervise my child during the lessons?",
      answer: "We recommend parent participation, especially for younger children (ages 3-4). The course includes parent guidance videos that show you how to support your child and reinforce the lessons throughout the day."
    },
    {
      question: "What if my child is very shy or reluctant to participate?",
      answer: "That's exactly who this course is designed for! We start with very gentle, low-pressure activities and gradually build confidence. Many of our most successful students started as extremely shy children."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes! We offer a 30-day money-back guarantee. If you don't see improvement in your child's confidence within 30 days, we'll refund your full purchase price, no questions asked."
    },
    {
      question: "Can multiple children use the same course?",
      answer: "Absolutely! The course can be used with siblings or multiple children in the same household. All activities are designed to work well with groups and can be adapted for different ages within the 3-5 range."
    },
    {
      question: "What devices can I use to access the course?",
      answer: "The course works on any device with internet access - computers, tablets, smartphones, or smart TVs. All videos and materials are optimized for mobile viewing, perfect for busy families."
    },
    {
      question: "Are there any additional costs after purchase?",
      answer: "No hidden fees! Your one-time payment of $29 gives you lifetime access to all course materials, including any future updates or bonus content we add."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about our confidence-building course.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <AccordionTrigger className="text-left py-6 text-lg font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help! Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@scoreazy.com" 
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                📧 Email Support
              </a>
              <a 
                href="tel:+1234567890" 
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors"
              >
                📞 Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;