import React, { useState, useCallback } from 'react';

const Contact = React.memo(() => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agreeToTerms: false,
  });

  // State for success message
  const [successMessage, setSuccessMessage] = useState('');


  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(formData);
  
    setSuccessMessage("Your message has been sent!");
    setFormData({
      name: '',
      email: '',
      message: '',
      agreeToTerms: false,
    });

    setTimeout(() => setSuccessMessage(''), 3000);
  }, [formData]);

  return (
    <section id="contact" className="bg-gray-200 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Contact Us</h2>
        
        {/* Contact Details */}
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-center items-center space-x-0 md:space-x-12 mb-8 md:mb-12">
          <div className="flex items-center text-gray-700">
            <span className="mr-3 text-xl md:text-2xl">📞</span>
            <span className="text-md md:text-lg">(123) 456-7890</span>
          </div>
          <div className="flex items-center text-gray-700">
            <span className="mr-3 text-xl md:text-2xl">📍</span>
            <span className="text-md md:text-lg">123 Gourmet Street, Foodville, FC 12345</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-8 max-w-lg mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                rows="5"
                required
              />
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="form-checkbox text-yellow-500 focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <span className="ml-2 text-sm text-gray-600">I agree to the terms and conditions</span>
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Success message */}
          {successMessage && (
            <div className="text-green-500 mt-4 text-center">
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

export default Contact;

