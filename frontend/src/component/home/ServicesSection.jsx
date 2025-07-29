import React from 'react';
import { Dumbbell, CalendarClock, UserCheck, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <CalendarClock size={32} />,
    title: 'Real-Time Booking',
    description:
      'Book gym sessions and fitness classes instantly with live availability tracking.',
  },
  {
    icon: <Dumbbell size={32} />,
    title: 'Class & Trainer Details',
    description:
      'Access class type, timings, trainer info, and slot availability in one place.',
  },
  {
    icon: <UserCheck size={32} />,
    title: 'User Account Management',
    description:
      'Register, log in, and manage all your bookings and preferences seamlessly.',
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Admin Control Panel',
    description:
      'Admins can manage schedules, users, trainers, and view booking history easily.',
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Why Choose SweatSmart?</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Streamline your fitness journey with smart booking and management tools.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-left"
            >
              <div className="bg-purple-100 text-purple-700 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
