import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-sm font-medium uppercase tracking-widest mb-4 opacity-80">
              Get in Touch
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
              Book a Consultation
            </h2>
            <p className="font-body text-lg opacity-90 max-w-2xl mx-auto">
              Ready to take the next step in your healthcare journey? 
              Contact Miss Rajeswari's secretary to arrange an appointment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-body text-sm opacity-70">Secretary: Suzi</p>
                  <a
                    href="tel:07534362607"
                    className="font-heading text-xl font-semibold hover:underline"
                  >
                    07534 362607
                  </a>
                </div>
              </div>
              <p className="font-body text-sm opacity-80">
                Contact Suzi directly to book an appointment or make enquiries.
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-body text-sm opacity-70">Email</p>
                  <a
                    href="mailto:secretary.d.rajeswari@gmail.com"
                    className="font-heading text-lg font-semibold hover:underline break-all"
                  >
                    secretary.d.rajeswari@gmail.com
                  </a>
                </div>
              </div>
              <p className="font-body text-sm opacity-80">
                For general enquiries, you can reach out via email and we'll respond promptly.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-sm opacity-80 mb-6">
              <Clock className="h-4 w-4" />
              <span>Appointments available throughout the week</span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                asChild
              >
                <a href="tel:07534362607">
                  <Phone className="h-4 w-4" />
                  Call to Book
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="mailto:secretary.d.rajeswari@gmail.com">
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
