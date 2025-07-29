import React from 'react';

const World = () => {
  const gyms = [
    { name: 'Fit Club', image: 'https://via.placeholder.com/150?text=Fit+Club', location: 'City Center' },
    { name: 'Powerhouse Gym', image: 'https://via.placeholder.com/150?text=Powerhouse+Gym', location: 'Downtown' },
    { name: 'Flex Fitness', image: 'https://via.placeholder.com/150?text=Flex+Fitness', location: 'Uptown' },
    { name: 'Active Life Gym', image: 'https://via.placeholder.com/150?text=Active+Life+Gym', location: 'South City' },
    { name: 'Body Fit', image: 'https://via.placeholder.com/150?text=Body+Fit', location: 'North Side' },
    { name: 'Energy Gym', image: 'https://via.placeholder.com/150?text=Energy+Gym', location: 'East End' },
    { name: 'Total Body', image: 'https://via.placeholder.com/150?text=Total+Body', location: 'West Park' },
    { name: 'Elite Fitness', image: 'https://via.placeholder.com/150?text=Elite+Fitness', location: 'Central City' },
    { name: 'Fitness Hub', image: 'https://via.placeholder.com/150?text=Fitness+Hub', location: 'Main Street' },
    { name: 'GymPro', image: 'https://via.placeholder.com/150?text=GymPro', location: 'Harbor View' },
    { name: 'Iron Temple', image: 'https://via.placeholder.com/150?text=Iron+Temple', location: 'Skyline' },
    { name: 'Peak Performance', image: 'https://via.placeholder.com/150?text=Peak+Performance', location: 'Bayside' },
    { name: 'Strength Lab', image: 'https://via.placeholder.com/150?text=Strength+Lab', location: 'Mountain View' },
    { name: 'PowerFit', image: 'https://via.placeholder.com/150?text=PowerFit', location: 'Riverdale' },
    { name: 'Zen Fitness', image: 'https://via.placeholder.com/150?text=Zen+Fitness', location: 'Sunset Boulevard' },
    { name: 'Fitness Factory', image: 'https://via.placeholder.com/150?text=Fitness+Factory', location: 'Downtown' },
    { name: 'Muscle Gym', image: 'https://via.placeholder.com/150?text=Muscle+Gym', location: 'Oakwood' },
    { name: 'Champion Fitness', image: 'https://via.placeholder.com/150?text=Champion+Fitness', location: 'Lakeview' },
    { name: 'Max Fitness', image: 'https://via.placeholder.com/150?text=Max+Fitness', location: 'Greenwich' },
    { name: 'GymX', image: 'https://via.placeholder.com/150?text=GymX', location: 'West End' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-black mb-12">Our Featured Gyms</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {gyms.map((gym, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img src={gym.image} alt={gym.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{gym.name}</h3>
                <p className="text-lg text-gray-600 mt-2">{gym.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default World;
