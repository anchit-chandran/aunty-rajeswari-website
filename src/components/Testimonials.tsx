import { Quote, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import reviewsData from "@/data/reviews.json";

const testimonials = reviewsData;

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-body text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Patient Testimonials
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            What Her Patients Say
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Miss Rajeswari's patients consistently praise her compassionate
            approach and expert care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card p-6 rounded-xl border border-border hover:shadow-card transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                {/* Top section - stars and quote */}
                <div className="flex-grow">
                  <Quote className="absolute top-4 right-4 h-8 w-8 opacity-90 text-primary" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  {/* TEXT - truncate with ellipsis if too long */}
                  <blockquote className="font-body text-foreground/90 mb-4 line-clamp-[8]">
                    {testimonial.quote}
                  </blockquote>
                </div>

                {/* Bottom section - always aligned */}
                <div className="mt-auto">
                  {/* Sub-ratings */}
                  {testimonial.subRatings &&
                    Object.keys(testimonial.subRatings).length > 0 && (
                      <div className="space-y-2 mb-4 pb-4 border-b border-border">
                        {Object.entries(testimonial.subRatings).map(
                          ([category, stars]) => (
                            <div
                              key={category}
                              className="flex items-center justify-between text-xs"
                            >
                              <span className="font-body font-semibold text-muted-foreground">
                                {category}
                              </span>
                              <div className="flex gap-0.5">
                                {[...Array(stars as number)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="h-3 w-3 fill-gold text-gold"
                                  />
                                ))}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  <div className="font-body text-xs text-muted-foreground space-y-1">
                    {testimonial.date && (
                      <p className="font-medium">{testimonial.date}</p>
                    )}
                    <p>Written by a {testimonial.author}</p>

                    {testimonial.location && (
                      <p className="line-clamp-1">at {testimonial.location}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="gap-2" asChild>
            <a
              href="https://www.iwantgreatcare.org/doctors/miss-devanna-rajeswari"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More Reviews on iwantgreatcare
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
