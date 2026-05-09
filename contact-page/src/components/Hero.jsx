export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[707px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXJcxQBRX_ihRkOYyr2_i1pOdRn2mqc4fDdbLZQg4EJJeeR3RSY-7ahnrcjEOsG44kpM7lXjwWNRzm2PMVetwxyOa04W6P6W6eR4bkH-qlsV6BQQJGe7ksQA8TnEwJLKG9-s5ioKUEk_PzYeuwGM4L8SwD1JESnpjgU0krMKftANsHGcB6kJC6TPMByZJILIqTr53lBu42buLgbgvneISkwkcR-DyrqVjHg1UjQbONMPCHiLUPBHdbAwRz0d4TM-nwfR652Z9zEQ7P"
          alt="Corporate lobby"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-gutter w-full py-section-padding-mobile md:py-section-padding-desktop">
        <div className="max-w-2xl">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-base">
            Impulsa tu negocio con soluciones expertas
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
            Ayudamos a las empresas a navegar la complejidad del mercado moderno
            con estrategias sólidas y tecnología de vanguardia.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-button-text text-button-text scale-95 active:opacity-80 transition-all hover:scale-100 hover:shadow-lg">
              Contáctanos
            </button>

            <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-button-text text-button-text hover:bg-primary/5 transition-all">
              Nuestros Servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}