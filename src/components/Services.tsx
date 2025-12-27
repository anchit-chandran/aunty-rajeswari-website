import {
  Activity,
  Heart,
  Microscope,
  ThermometerSun,
  Baby,
  Shield,
  CircleDot,
  Stethoscope,
  Scissors,
  HeartPulse
} from "lucide-react";

const serviceCategories = [
  {
    icon: Activity,
    title: "Menstrual Disorders",
    conditions: [
      { name: "Irregular periods", link: "https://www.nhs.uk/conditions/irregular-periods/" },
      { name: "Prolonged or heavy periods", link: "https://www.nhs.uk/conditions/heavy-periods/" },
      { name: "Pelvic pain", link: "https://www.nhs.uk/conditions/pelvic-pain/" },
      { name: "Endometriosis", link: "https://www.nhs.uk/conditions/endometriosis/" },
      { name: "Premenstrual tension", link: "https://www.nhs.uk/conditions/pre-menstrual-syndrome/" },
    ],
  },
  {
    icon: Heart,
    title: "Hormonal Disorders",
    conditions: [
      { name: "Polycystic Ovarian Syndrome", link: "https://www.nhs.uk/conditions/polycystic-ovary-syndrome-pcos/" },
      { name: "Adolescent and Paediatric Gynaecology", link: null },
    ],
  },
  {
    icon: Microscope,
    title: "Colposcopy",
    conditions: [
      { name: "Abnormal cervical smear", link: "https://www.nhs.uk/conditions/cervical-screening/your-results/" },
      { name: "HPV positive", link: "https://www.nhs.uk/conditions/cervical-screening/your-results/" },
      { name: "Treatment for abnormal smear (LLETZ procedure)", link: "https://www.nhs.uk/conditions/colposcopy/what-happens/" },
      { name: "Bleeding after sex", link: "https://www.nhs.uk/common-health-questions/womens-health/what-causes-a-woman-to-bleed-after-sex/" },
    ],
  },
  {
    icon: ThermometerSun,
    title: "Menopause",
    conditions: [
      { name: "Perimenopause", link: "https://www.nhs.uk/conditions/menopause/" },
      { name: "Hormone Replacement Therapy", link: "https://www.nhs.uk/conditions/hormone-replacement-therapy-hrt/" },
      { name: "Irregular bleeding in perimenopause / on HRT", link: null },
    ],
  },
  {
    icon: Baby,
    title: "Fertility & Pregnancy",
    conditions: [
      { name: "Fertility investigation and management", link: null },
      { name: "Recurrent miscarriage", link: null },
      { name: "Missed miscarriage management", link: null },
    ],
  },
  {
    icon: Shield,
    title: "Contraception",
    conditions: [
      { name: "Contraception counselling", link: null },
      { name: "Copper coil", link: "https://www.nhs.uk/conditions/contraception/iud-coil/" },
      { name: "Mirena coil", link: "https://www.nhs.uk/conditions/contraception/ius-intrauterine-system/" },
    ],
  },
  {
    icon: CircleDot,
    title: "Prolapse",
    conditions: [
      { name: "Bladder prolapse with urinary problems", link: "https://www.nhs.uk/conditions/pelvic-organ-prolapse/" },
      { name: "Uterine prolapse", link: "https://www.nhs.uk/conditions/pelvic-organ-prolapse/" },
      { name: "Bowel prolapse (Rectocele)", link: "https://www.nhs.uk/conditions/pelvic-organ-prolapse/" },
    ],
  },
  {
    icon: Stethoscope,
    title: "Uterine Problems",
    conditions: [
      { name: "Fibroid uterus", link: "https://www.nhs.uk/conditions/fibroids/" },
      { name: "Adenomyosis", link: null },
      { name: "Polyp: uterine / cervical", link: null },
    ],
  },
  {
    icon: HeartPulse,
    title: "Vulval & Vaginal Disorders",
    conditions: [
      { name: "Vaginismus", link: "https://www.nhs.uk/conditions/vaginismus/" },
      { name: "Vulvodynia", link: "https://www.nhs.uk/conditions/vulvodynia/" },
      { name: "Vestibulitis", link: null },
      { name: "Bartholin's Cyst", link: "https://www.nhs.uk/conditions/bartholins-cyst/" },
    ],
  },
  {
    icon: Scissors,
    title: "Procedures",
    conditions: [
      { name: "Hysterectomy", link: "https://www.nhs.uk/conditions/hysterectomy/" },
      { name: "Oophorectomy / Ovarian cystectomy", link: null },
      { name: "Hysteroscopy", link: "https://www.nhs.uk/conditions/hysteroscopy/" },
      { name: "Endometrial ablation", link: null },
      { name: "Uterine / cervical polyp removal", link: null },
      { name: "Treatment for painful sex", link: null },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-body text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Expert Care
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Conditions Treated
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Miss Rajeswari provides comprehensive care across a wide range of gynaecological conditions,
            with a special interest in Colposcopy and the treatment of abnormal smears.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {serviceCategories.map((category) => (
            <div
              key={category.title}
              className="group bg-card p-5 rounded-xl border border-border hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground leading-tight">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.conditions.map((condition) => (
                  <li key={condition.name} className="font-body text-sm text-muted-foreground">
                    {condition.link ? (
                      <a
                        href={condition.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary hover:underline transition-colors"
                      >
                        {condition.name}
                      </a>
                    ) : (
                      condition.name
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
