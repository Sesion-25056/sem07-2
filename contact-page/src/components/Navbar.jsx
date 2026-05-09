export default function Navbar() {
  return (
    <header className="bg-surface/80 backdrop-blur-md sticky top-0 w-full z-50 border-b border-outline-variant/30 shadow-sm">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-gutter h-20">
        <div className="font-headline-lg text-headline-lg font-bold text-primary tracking-tight">
          PROCORE
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a className="nav-link" href="#">Services</a>
          <a className="nav-link" href="#">Expertise</a>
          <a className="nav-link" href="#">Client Success</a>
          <a className="text-primary font-semibold font-body-md text-body-md" href="#">
            Contáctanos
          </a>
        </nav>

        <div className="md:hidden">
          <span className="material-symbols-outlined text-primary text-3xl">
            menu
          </span>
        </div>
      </div>
    </header>
  );
}