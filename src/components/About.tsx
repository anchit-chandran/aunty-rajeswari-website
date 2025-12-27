import { GraduationCap, Stethoscope, Globe, Users, Award, BookOpen, Microscope } from "lucide-react";
import sideShotImage from "../assets/side-shot.jpg";

const milestones = [
  {
    icon: GraduationCap,
    title: "Medical Training",
    description: "Trained in India, with further training in Kenya and the Republic of Ireland",
  },
  {
    icon: Globe,
    title: "UK Experience",
    description: "Higher specialist training in North West London",
  },
  {
    icon: Stethoscope,
    title: "NHS Consultant",
    description: "Appointed Consultant at St. Peter's Hospital in 2008",
  },
  {
    icon: Users,
    title: "Current Practice",
    description: "NHS practice at Ashford and St. Peter's Foundation Trust",
  },
];

const achievements = [
  {
    icon: Award,
    title: "Clinical Excellence Award",
    description: "Awarded the 'Ashford and St. Peter's Clinical Excellence Award' twice for outstanding patient care",
  },
  {
    icon: BookOpen,
    title: "Academic Contribution",
    description: "Selected to author a chapter in the Oxford Handbook of Obstetrics and Gynaecology",
  },
  {
    icon: Microscope,
    title: "Specialisation",
    description: "Primary specialty in Colposcopy and the treatment of abnormal smears",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform rotate-3"></div>
                <img
                  src={sideShotImage}
                  alt="Miss Rajeswari"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="order-1 lg:order-2">
              <p className="font-body text-sm font-medium text-primary uppercase tracking-widest mb-4">
                About Miss Rajeswari
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
                Dedicated to Women's Health
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Miss Rajeswari has been a Consultant Obstetrician and Gynaecologist since 2008.
                Her extensive international training and years of NHS experience allow her to provide
                the highest standard of care with warmth and understanding.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.title}
              className="group p-6 rounded-xl gradient-card border border-border hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <milestone.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {milestone.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements & Recognition */}
        <div className="mt-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground text-center mb-8">
            Recognition & Expertise
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="group p-6 rounded-xl bg-secondary/50 border border-border hover:shadow-card transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <achievement.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {achievement.title}
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
