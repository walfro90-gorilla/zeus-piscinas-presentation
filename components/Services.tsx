const servicios = [
  {
    title: 'Diseño y Construcción de Piscinas de Lujo',
    description: 'Creamos piscinas sofisticadas con sistemas de iluminación LED, cascadas y acabados premium que realzan tu espacio.'
  },
  {
    title: 'Mantenimiento Integral y Automatización',
    description: 'Programamos limpiezas profesionales, control químico y sistemas inteligentes para un agua siempre perfecta.'
  },
  {
    title: 'Rehabilitación y Reforma de Piscinas',
    description: 'Renovamos estructuras antiguas con ingeniería moderna y materiales de alta resistencia para mayor durabilidad.'
  }
];

export default function Services() {
  return (
    <section id="services" className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-brand.blue">Nuestros Servicios</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {servicios.map((s, i) => (
          <div key={i} className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-700">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
