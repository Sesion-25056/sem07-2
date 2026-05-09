export default function ContactSection() {
  return (
    <section className="bg-surface-container-low/50 py-section-padding-mobile md:py-section-padding-desktop">
      <div className="max-w-[1200px] mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-headline-xl text-headline-xl text-primary mb-6">
            ¿Listo para empezar?
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            Nuestro equipo de expertos está listo para transformar sus retos en
            ventajas competitivas.
          </p>

          <div className="space-y-6">
            <ContactInfo icon="mail" title="Email" text="contacto@procore.com" />
            <ContactInfo
              icon="business_center"
              title="Sede Central"
              text="Distrito Financiero, Madrid"
            />
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-8 md:p-10 shadow-xl border border-outline-variant/10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Nombre" placeholder="Su nombre" type="text" />
              <Input label="Email" placeholder="email@ejemplo.com" type="email" />
            </div>

            <Input
              label="Asunto"
              placeholder="¿En qué podemos ayudarle?"
              type="text"
            />

            <div className="space-y-2">
              <label className="font-label-md text-label-md text-on-surface-variant">
                Mensaje
              </label>
              <textarea
                className="input-style resize-none"
                placeholder="Cuéntenos más sobre su proyecto..."
                rows="4"
              />
            </div>

            <button
              className="w-full bg-secondary text-on-secondary py-4 rounded-lg font-button-text text-button-text hover:shadow-lg transition-all active:scale-[0.98]"
              type="submit"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, title, text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-on-secondary-container">
        <span className="material-symbols-outlined">{icon}</span>
      </div>

      <div>
        <p className="font-label-md text-label-md text-on-surface-variant uppercase">
          {title}
        </p>
        <p className="font-body-md text-body-md font-semibold">{text}</p>
      </div>
    </div>
  );
}

function Input({ label, placeholder, type }) {
  return (
    <div className="space-y-2">
      <label className="font-label-md text-label-md text-on-surface-variant">
        {label}
      </label>
      <input className="input-style" placeholder={placeholder} type={type} />
    </div>
  );
}