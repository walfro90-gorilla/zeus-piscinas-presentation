export default function Hero() {
  return (
    <section id="hero" className="pt-24 bg-gradient-to-r from-brand.aqua to-brand.blue text-white">
      <div className="container mx-auto text-center py-32 px-4">
        <h1 className="text-5xl font-bold mb-4">Ingeniería y Excelencia en Piscinas de Lujo</h1>
        <p className="text-xl mb-8">En ZEUS Piscinas fusionamos la fuerza de la mitología griega con tecnología de vanguardia para crear tu oasis personal en Ciudad Juárez.</p>
        <div className="space-x-4">
          <a href="#contact" className="px-6 py-3 bg-brand.gold text-blue-900 font-semibold rounded-lg hover:opacity-90 transition">Contrata Ahora</a>
          <a href="#services" className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-brand.blue transition">Ver Servicios</a>
        </div>
      </div>
    </section>
  );
}
