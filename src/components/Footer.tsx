export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground text-background/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-heading text-lg font-semibold text-background mb-1">
              Miss Devanna Rajeswari
            </p>
            <p className="font-body text-sm">
              MBBS MRCPI FRCOG — Consultant Obstetrician & Gynaecologist
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="font-body text-sm">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
