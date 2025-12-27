import { MapPin, ExternalLink, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    name: "Runnymede Hospital",
    area: "Chertsey",
    address: "Guildford Road, Chertsey, KT16 0RQ",
    phone: "01932 877800",
    link: "https://www.runnymedehospital.com",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.3661380132753!2d-0.5261525482150317!3d51.37794847951393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487677ae3acdf42b%3A0xfbda2c4eef7df913!2sThe%20Runnymede%20Hospital!5e0!3m2!1sen!2suk!4v1684686966237!5m2!1sen!2suk",
  },
  {
    name: "Princess Margaret Hospital",
    area: "Windsor",
    address: "Osborne Road, Windsor, SL4 3SJ",
    phone: "01753 743434",
    link: "https://www.bmihealthcare.co.uk/hospitals/bmi-princess-margaret-hospital",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.097848755419!2d-0.6149766285032745!3d51.47471821427085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767afe37f7f33d%3A0xc15405bd068f7d14!2sThe%20Princess%20Margaret%20Hospital!5e0!3m2!1sen!2suk!4v1684687014104!5m2!1sen!2suk",
  },
  {
    name: "Nuffield Health Woking Hospital",
    area: "Woking",
    address: "Shores Road, Woking, GU21 4BY",
    phone: "01483 227800",
    link: "https://www.nuffieldhealth.com/hospitals/woking",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.867423940827!2d-0.5634770482162875!3d51.33195827950655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875d81c56af628d%3A0xc58a707a58b6ce88!2sNuffield%20Health%20Woking%20Hospital!5e0!3m2!1sen!2suk!4v1684687025226!5m2!1sen!2suk",
  },
  {
    name: "Prime Health",
    area: "Weybridge",
    address: "Horizon Business Village, 1 Brooklands Road, Weybridge, KT13 0TJ",
    phone: "01932 504999",
    link: "https://www.primehealth.co.uk",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.3407667924635!2d-0.4665776482160424!3d51.34164417950826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875df546de0a119%3A0xdd1358756cd9886c!2sPrime%20Health%20Surrey!5e0!3m2!1sen!2suk!4v1684687039151!5m2!1sen!2suk",
  },
];

export function Locations() {
  return (
    <section id="locations" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-body text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Private Consultations
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Consultation Locations
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Miss Rajeswari offers private consultations at several convenient locations 
            across Surrey and Berkshire.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={location.name}
              className="group bg-card p-6 rounded-xl border border-border hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-rose-light flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                    {location.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-2">
                    {location.address}
                  </p>
                  <a
                    href={`tel:${location.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-primary hover:underline mb-3"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {location.phone}
                  </a>
                  <div>
                    <a
                      href={location.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary hover:underline transition-colors"
                    >
                      Visit Website
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden">
                <iframe
                  src={location.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${location.name}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
