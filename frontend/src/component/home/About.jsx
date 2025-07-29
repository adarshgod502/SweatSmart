import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          About SweatSmart
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          SweatSmart is your all-in-one solution for managing gym bookings, class schedules, and
          personalized fitness sessions. We aim to optimize gym operations and provide users with a
          seamless booking experience.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="flex-1 text-left">
            <h3 className="text-2xl font-semibold text-black mb-4">Why SweatSmart?</h3>
            <ul className="text-gray-700 space-y-4">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-purple-700 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Easy and convenient gym session booking.</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-purple-700 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Real-time updates on class availability.</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-purple-700 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Streamlined admin management of schedules and users.</span>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <img
              src="https://via.placeholder.com/500x300?text=SweatSmart+Gym"
              alt="About SweatSmart"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-black mb-4">Our Mission</h3>
          <p className="text-gray-700 text-lg">
            At SweatSmart, we strive to make fitness management easy, efficient, and accessible for
            everyone. Our platform is designed to help gym-goers and administrators manage gym
            sessions effortlessly while promoting healthier lifestyles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
