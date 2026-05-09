const services = [
  {
    title: "Consultoría Estratégica",
    description:
      "Diseñamos rutas críticas para el crecimiento sostenible de su organización, analizando riesgos y detectando oportunidades de mercado.",
    icon: "business_center",
  },
  {
    title: "Soporte Tecnológico",
    description:
      "Asistencia técnica experta 24/7 para garantizar la continuidad operativa de su infraestructura.",
    icon: "mail",
  },
  {
    title: "Optimización de Procesos",
    description:
      "Eliminamos cuellos de botella y automatizamos tareas repetitivas para maximizar la eficiencia y rentabilidad de su equipo humano.",
    icon: "psychology",
  },
];

export default function Services() {
  return (
    <section className="max-w-[1200px] mx-auto px-gutter py-section-padding-mobile md:py-section-padding-desktop">
      <div className="text-center mb-16">
        <span className="text-secondary font-label-md text-label-md uppercase tracking-widest">
          Nuestra Experiencia
        </span>
        <h2 className="font-headline-xl text-headline-xl text-primary mt-2">
          Servicios Integrales
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
        <div className="md:col-span-8 bg-surface-container-low rounded-xl p-8 flex flex-col justify-end relative overflow-hidden group shadow-sm hover:shadow-md transition-all">
          <div className="absolute top-8 right-8">
            <span className="material-symbols-outlined text-secondary text-5xl opacity-20 group-hover:opacity-100 transition-opacity">
              {services[0].icon}
            </span>
          </div>

          <div className="relative z-10">
            <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
              {services[0].title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              {services[0].description}
            </p>
          </div>
        </div>

        <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
          <span className="material-symbols-outlined text-secondary-fixed-dim text-4xl">
            {services[1].icon}
          </span>

          <div>
            <h3 className="font-headline-lg text-headline-lg mb-4">
              {services[1].title}
            </h3>
            <p className="font-body-md text-body-md opacity-80">
              {services[1].description}
            </p>
          </div>
        </div>

        <div className="md:col-span-12 bg-surface-container-highest rounded-xl p-8 flex flex-col md:flex-row items-center gap-base shadow-sm hover:shadow-md transition-all overflow-hidden">
          <div className="flex-1">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">
              {services[2].icon}
            </span>

            <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
              {services[2].title}
            </h3>

            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              {services[2].description}
            </p>
          </div>

          <div className="w-full md:w-1/3 h-48 md:h-full rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZhT1bbp5Yg-XgZL6v4Fc7W2hSLgLXWyV9dn4cuZQrNgVIZDvyMVedzeG89p5C-1QAuggaZnu4lgPGDjBy3Bp-q25Zv6yB8jPuwwVeTxC43eYU8SzCimSkoNxKyhnF4TfsfRsPu1GQ2bNtt8KPpFXyZvGde3oLfyQzH7DNiT6aKwELSVCGjkf4CFMZFZrfd4GP7Hne9Fs0WYIrU_P6_qcuFCUbqlgR1FtfRxLinrPBV8XTUNWR9WOKa7G0XmfoaT7Ga-boYO-WQ1ga"
              alt="Office workspace"
            />
          </div>
        </div>
      </div>
    </section>
  );
}