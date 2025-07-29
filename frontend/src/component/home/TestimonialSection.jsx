import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ava Thompson',
    role: 'Fitness Enthusiast',
    comment:
      'SweatSmart has completely changed how I book my sessions. It’s fast, smooth, and super easy to use!',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
  },
  {
    name: 'Liam Martinez',
    role: 'Gym Trainer',
    comment:
      'Managing schedules has never been easier. I can focus on training while SweatSmart handles the rest.',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    rating: 5,
  },
  {
    name: 'Sophia Patel',
    role: 'Yoga Lover',
    comment:
      'I love how I can see availability in real-time. No more missed classes!',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 4,
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">What Our Users Say</h2>
        <p className="text-lg text-gray-600 mb-12">
          Hear it straight from the community that's getting stronger and smarter.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-purple-500"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{t.name}</h3>
                  <p className="text-sm text-purple-600">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">"{t.comment}"</p>
              <div className="flex text-yellow-400">
                {Array.from({ length: t.rating }, (_, index) => (
                  <Star key={index} size={20} fill="currentColor" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
