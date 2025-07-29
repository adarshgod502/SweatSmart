import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">SweatSmart</h2>
            <p className="text-lg text-gray-300">
              SweatSmart is the ultimate platform for managing your gym bookings and class schedules with ease.
              Achieve your fitness goals faster with our streamlined system!
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="/" className="text-gray-300 hover:text-purple-700 transition">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-purple-700 transition">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-purple-700 transition">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-purple-700 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-gray-300 text-lg mb-4">
              123 Fitness St, Suite 200, Cityville, USA
            </p>
            <p className="text-gray-300 text-lg mb-4">
              Email: <a href="mailto:support@sweatsmart.com" className="text-gray-300 hover:text-purple-700 transition">support@sweatsmart.com</a>
            </p>
            <p className="text-gray-300 text-lg">
              Phone: <a href="tel:+11234567890" className="text-gray-300 hover:text-purple-700 transition">+1 (123) 456-7890</a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <p className="text-gray-400 text-center text-sm">
            &copy; 2025 SweatSmart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
