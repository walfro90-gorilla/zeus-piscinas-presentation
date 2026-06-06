import React from 'react';

const portfolioItems = [
  { title: 'Proyecto Alpha', image: '/projects/alpha.jpg', description: 'Descripción corta del proyecto.' },
  { title: 'Proyecto Beta', image: '/projects/beta.jpg', description: 'Descripción corta del proyecto.' },
  { title: 'Proyecto Gamma', image: '/projects/gamma.jpg', description: 'Descripción corta del proyecto.' },
  { title: 'Proyecto Delta', image: '/projects/delta.jpg', description: 'Descripción corta del proyecto.' },
];

const Portfolio = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Portafolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, idx) => (
          <div key={idx} className="border rounded-lg overflow-hidden shadow-sm">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
