import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-indigo-800 py-20 px-6 md:px-16 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Fitness Journey?
          </h2>
          <p className="text-lg md:text-xl text-purple-100">
            Join SweatSmart today and experience smarter gym session booking, seamless schedules, and real-time availability.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-purple-800 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition duration-300">
            Book a Session
          </button>
          <button className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white hover:text-purple-800 transition duration-300">
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
