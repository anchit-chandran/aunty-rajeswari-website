# Project Context

## Overview
Professional medical practice website for **Miss Devanna Rajeswari**, a Consultant Obstetrician & Gynaecologist. This is a static single-page website showcasing her credentials, services, and contact information.

## Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui (Radix UI)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Fonts**: Cormorant Garamond (headings), Inter (body)

## Color Scheme
- **Primary**: Purple #862ca2 (HSL: 286 57% 40%)
- **Secondary**: Soft lavender tints
- **Background**: Warm cream
- **Accents**: Lavender shades

Colors are defined as CSS variables in `src/index.css`.

## Project Structure
```
src/
├── pages/
│   └── Index.tsx          # Main page (all sections)
├── components/
│   ├── Header.tsx         # Navigation
│   ├── Hero.tsx           # Landing section with photo
│   ├── About.tsx          # Background + achievements
│   ├── Services.tsx       # Conditions treated
│   ├── Locations.tsx      # 4 practice locations
│   ├── Testimonials.tsx   # Patient reviews
│   ├── Contact.tsx        # Secretary contact info
│   ├── Footer.tsx         # Footer
│   └── ui/                # shadcn components
├── assets/
│   └── dr-rajeswari.jpg   # Professional photo
└── index.css              # Global styles + CSS variables
```

## Key Information (from important-info.md)

### Doctor Details
- **Name**: Miss Devanna Rajeswari
- **Qualifications**: MBBS MRCPI FRCOG
- **Experience**: 30+ years in Gynaecology
- **Consultant since**: 2008
- **Specialisation**: Colposcopy and treatment of abnormal smears

### Contact
- **Secretary**: Suzi
- **Phone**: 07534 362607
- **Email**: secretary.d.rajeswari@gmail.com

### Practice Locations
1. **Runnymede Hospital** - Guildford Road, Chertsey, KT16 0RQ (01932 877800)
2. **Princess Margaret Hospital** - Osborne Road, Windsor, SL4 3SJ (01753 743434)
3. **Nuffield Health Woking** - Shores Road, Woking, GU21 4BY (01483 227800)
4. **Prime Health** - Horizon Business Village, 1 Brooklands Road, Weybridge, KT13 0TJ (01932 504999)

### Recognition
- Clinical Excellence Award (twice) from Ashford and St. Peter's
- Author of chapter in Oxford Handbook of Obstetrics and Gynaecology

### Services/Conditions Treated
- Menstrual Disorders (irregular/heavy periods, endometriosis, pelvic pain)
- Hormonal Disorders (PCOS, adolescent gynaecology)
- Colposcopy (abnormal smears, HPV, LLETZ)
- Menopause (HRT, perimenopause)
- Fertility problems
- Contraception (coil fittings)
- Prolapse conditions
- Uterine problems (fibroids, polyps)
- Vulval/vaginal disorders
- Surgical procedures (hysterectomy, hysteroscopy, etc.)

## Design Decisions
- Single-page layout with anchor navigation
- Hero image uses rounded rectangle frame (portrait orientation)
- NHS links provided for condition information
- Mobile-responsive with hamburger menu
- Elegant serif headings with clean sans-serif body text

## Commands
```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
```
