import React from 'react';

const partners = [
  { name: 'Toyota', logo: '/assets/partners/toyota.png' },
  { name: 'Ford', logo: '/assets/partners/ford.png' },
  { name: 'BMW', logo: '/assets/partners/bmw.png' },
  { name: 'Audi', logo: '/assets/partners/audi.png' },
  { name: 'Honda', logo: '/assets/partners/honda.png' },
  { name: 'Hyundai', logo: '/assets/partners/hyundai.png' },
];

const PartnersSection = () => {
  return (
    <section className="bg-gray-100 text-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Our Trusted Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
