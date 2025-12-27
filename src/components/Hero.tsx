import { ArrowRight, Award, Heart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import drRajeswari from "@/assets/dr-rajeswari.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-rose-light rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-light rounded-full blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="animate-fade-in-up">
              <p className="font-body text-sm font-medium text-primary uppercase tracking-widest mb-4">
                Consultant Obstetrician & Gynaecologist
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight mb-6 text-balance">
                Devanna Rajeswari
              </h1>
              <p className="font-body text-lg text-muted-foreground mb-2">
                MBBS MRCPI FRCOG
              </p>
              <p className="font-body text-lg text-foreground/80 max-w-xl mx-auto lg:mx-0 mb-8 text-balance">
                Providing compassionate, expert women's healthcare with a personal touch. 
                Consultant since 2008, offering private consultations across Surrey and Berkshire.
              </p>
            </div>

            <div className="animate-fade-in-up animation-delay-200 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" className="gap-2 text-base" asChild>
                <a href="#contact">
                  Book a Consultation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>

            <div className="animate-fade-in-up animation-delay-400 flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">30+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Heart className="h-5 w-5 text-secondary-foreground" />
                </div>
                <span className="font-medium">Patient-Centred Care</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">Flexible Appointments</span>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="animate-fade-in animation-delay-200 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-rose-light via-transparent to-teal-light rounded-3xl blur-2xl opacity-60" />
              <div className="relative w-72 h-80 sm:w-80 sm:h-[22rem] lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden border-4 border-background shadow-elevated">
                <img
                  src={drRajeswari}
                  alt="Miss Devanna Rajeswari - Consultant Obstetrician and Gynaecologist"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-3 -right-3 bg-background rounded-full px-4 py-2 shadow-card border border-border">
                <p className="font-heading text-sm font-semibold text-primary">MBBS MRCPI FRCOG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
