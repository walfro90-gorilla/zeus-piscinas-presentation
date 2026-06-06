const images = [
  'https://source.unsplash.com/600x400/?luxury-pool',
  'https://source.unsplash.com/600x400/?swimming-pool',
  'https://source.unsplash.com/600x400/?pool-night'
];

export default function Gallery() {
  return (
    <section id="gallery" className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-brand.blue">Galería de Proyectos</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Proyecto ${i + 1}`} className="w-full h-60 object-cover rounded-lg" />
        ))}
      </div>
    </section>
  );
}
