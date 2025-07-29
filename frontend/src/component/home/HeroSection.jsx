import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Left Side Text Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Book Smarter. Train Harder.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            SweatSmart makes gym session booking easier than ever. 
            Schedule classes, track availability in real time, and never miss a workout.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Get Started
            </button>
            <button className="border border-purple-400 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1583454110551-21d2fa223b26?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
            alt="Gym workout"
            className="rounded-xl shadow-lg w-full max-w-md md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
