import React from 'react';

const FeaturedProductsSection = () => {
  const cars = [
    {
      id: 1,
      name: 'Toyota Corolla',
      price: '$40/day',
      image: '/assets/car1.jpg',
      description: 'Compact and efficient — perfect for city drives.',
    },
    {
      id: 2,
      name: 'Ford Explorer',
      price: '$75/day',
      image: '/assets/car2.jpg',
      description: 'Spacious SUV for family trips and off-road fun.',
    },
    {
      id: 3,
      name: 'Tesla Model 3',
      price: '$100/day',
      image: '/assets/car3.jpg',
      description: 'Eco-friendly electric driving in luxury and style.',
    },
  ];

  return (
    <section className="bg-gray-100 text-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Featured Cars</h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto">
          Choose from our top-rated, most popular rental options.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold">{car.name}</h3>
                <p className="text-gray-700 mb-2">{car.description}</p>
                <p className="text-indigo-600 font-semibold">{car.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
