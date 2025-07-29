import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do I book a gym session on SweatSmart?',
    answer:
      'Just sign in, browse available sessions, select your preferred time and trainer, and confirm your booking instantly.',
  },
  {
    question: 'Can I cancel or reschedule a session?',
    answer:
      'Yes, you can cancel or reschedule any session at least 2 hours before it begins from your dashboard.',
  },
  {
    question: 'Do I need to pay online to confirm my booking?',
    answer:
      'Payment options depend on your gym’s policy. Some allow online payments, while others let you pay at the gym.',
  },
  {
    question: 'Is SweatSmart free to use?',
    answer:
      'Yes, SweatSmart is free for users. Some premium features may be available for gym owners/admins.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Frequently Asked Questions</h2>
        <p className="text-gray-700 mb-12 text-lg">
          Got questions? We’ve got answers to help you get started with SweatSmart.
        </p>

        <div className="space-y-6 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-black rounded-lg p-5 hover:bg-gray-100 transition duration-300"
            >
              <button
                className="w-full flex justify-between items-center text-lg font-semibold text-black focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-800 transition-all duration-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
