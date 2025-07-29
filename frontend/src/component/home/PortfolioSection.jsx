import React from 'react';

const PortfolioSection = () => {
  const portfolioImages = [
    {
      id: 1,
      title: 'Luxury Ride',
      image: '/assets/portfolio1.jpg',
    },
    {
      id: 2,
      title: 'Adventure SUV',
      image: '/assets/portfolio2.jpg',
    },
    {
      id: 3,
      title: 'City Compact',
      image: '/assets/portfolio3.jpg',
    },
    {
      id: 4,
      title: 'Electric Drive',
      image: '/assets/portfolio4.jpg',
    },
  ];

  return (
    <section className="bg-gray-100 text-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Car Gallery</h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto">
          Explore our portfolio of premium and reliable vehicles.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {portfolioImages.map((item) => (
            <div key={item.id} className="rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-3 bg-white">
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
