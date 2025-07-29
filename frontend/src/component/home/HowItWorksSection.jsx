import React from 'react';
import { UserPlus, CalendarDays, CheckCircle, Activity } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus size={28} />,
    title: 'Sign Up or Login',
    description: 'Create your SweatSmart account or log in to access gym booking features.',
  },
  {
    icon: <CalendarDays size={28} />,
    title: 'Choose Your Session',
    description: 'Browse available fitness classes, personal training sessions, and timings.',
  },
  {
    icon: <CheckCircle size={28} />,
    title: 'Book Instantly',
    description: 'Reserve your slot instantly with real-time availability and receive confirmation.',
  },
  {
    icon: <Activity size={28} />,
    title: 'Show Up & Sweat!',
    description: 'Attend your session and enjoy a seamless, well-managed gym experience.',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          How SweatSmart Works
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Booking your next gym session is as easy as 1-2-3.
        </p>

        <div className="grid gap-10 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 hover:bg-purple-50 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl p-6 text-center"
            >
              <div className="bg-purple-100 text-purple-700 w-14 h-14 flex items-center justify-center rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
