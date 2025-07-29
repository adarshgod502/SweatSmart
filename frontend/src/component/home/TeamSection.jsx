import React from 'react';

const teamMembers = [
  {
    name: 'Aarav Mehta',
    role: 'Founder & CEO',
    image: '/assets/team/ceo.jpg',
  },
  {
    name: 'Sneha Kapoor',
    role: 'Head of Operations',
    image: '/assets/team/operations.jpg',
  },
  {
    name: 'Ravi Singh',
    role: 'Lead Developer',
    image: '/assets/team/developer.jpg',
  },
  {
    name: 'Anita Joshi',
    role: 'Marketing Head',
    image: '/assets/team/marketing.jpg',
  },
];

const TeamSection = () => {
  return (
    <section className="bg-gray-100 text-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
