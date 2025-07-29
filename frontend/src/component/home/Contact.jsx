import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Contact Us
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          We'd love to hear from you! Whether you have questions, feedback, or suggestions, feel free to get in touch.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-black mb-4">Visit Us</h3>
            <p className="text-gray-700 mb-6">
              Our gym is located at the heart of the city, easily accessible for all fitness enthusiasts.
            </p>
            <p className="text-lg text-gray-600">123 Fitness St, Suite 200, Cityville, USA</p>
            <p className="text-lg text-gray-600 mt-2">Open 7 days a week</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-black mb-4">Call Us</h3>
            <p className="text-gray-700 mb-6">
              Have any questions or want to know more? We're just a phone call away.
            </p>
            <p className="text-lg text-gray-600">+1 (123) 456-7890</p>
            <p className="text-lg text-gray-600 mt-2">+1 (800) 987-6543</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-black mb-4">Email Us</h3>
            <p className="text-gray-700 mb-6">
              For inquiries, support, or feedback, reach out to us via email. We'll respond promptly.
            </p>
            <p className="text-lg text-gray-600">support@sweatsmart.com</p>
            <p className="text-lg text-gray-600 mt-2">info@sweatsmart.com</p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-black mb-4">Follow Us</h3>
          <div className="flex justify-center gap-8">
            <a href="https://facebook.com" className="text-gray-700 hover:text-purple-700 transition">
              <i className="fab fa-facebook-f text-3xl"></i>
            </a>
            <a href="https://twitter.com" className="text-gray-700 hover:text-purple-700 transition">
              <i className="fab fa-twitter text-3xl"></i>
            </a>
            <a href="https://instagram.com" className="text-gray-700 hover:text-purple-700 transition">
              <i className="fab fa-instagram text-3xl"></i>
            </a>
            <a href="https://linkedin.com" className="text-gray-700 hover:text-purple-700 transition">
              <i className="fab fa-linkedin-in text-3xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
