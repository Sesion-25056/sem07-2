export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="max-w-[1200px] mx-auto px-gutter py-section-padding-mobile md:py-16 flex flex-col md:flex-row justify-between items-center gap-base">
        <div className="font-headline-lg text-headline-lg text-primary font-bold">
          PROCORE
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-on-surface-variant font-body-md text-body-md">
          <a className="footer-link" href="#">Services</a>
          <a className="footer-link" href="#">Case Studies</a>
          <a className="footer-link" href="#">About</a>
          <a className="footer-link" href="#">Privacy</a>
          <a className="footer-link" href="#">Contact</a>
        </div>

        <div className="text-on-surface-variant font-body-md text-body-md">
          © 2024 ProCore Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}