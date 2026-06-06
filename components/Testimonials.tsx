const testimonials = [
  {
    name: 'José Martínez',
    role: 'Cliente Residencial, Ciudad Juárez',
    message: 'ZEUS Piscinas transformó mi patio en un santuario. Su profesionalismo y atención al detalle son incomparables.'
  },
  {
    name: 'María López',
    role: 'Hotel Boutique, Chihuahua',
    message: 'La implementación de sistemas inteligentes ahorró tiempo y costos. ¡Totalmente recomendados para proyectos de alta gama!'
  },
  {
    name: 'Ricardo Gómez',
    role: 'Desarrollador Inmobiliario',
    message: 'Su enfoque ingenieril y estética mitológica hizo de cada piscina una obra de arte funcional.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-brand.blue">Testimonios</h2>
      <div className="space-y-8">
        {testimonials.map((t, i) => (
          <div key={i} className="border-l-4 border-brand.aqua pl-6">
            <p className="text-gray-800 italic mb-2">“{t.message}”</p>
            <p className="font-semibold">{t.name}</p>
            <p className="text-gray-600 text-sm">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
