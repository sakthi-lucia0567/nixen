"use client";

import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section
      className="relative bg-cover bg-center py-16 px-4"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 sm:text-xl mb-8">
          Let us know how we can assist you.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-primary-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-primary-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-primary-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-primary-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Service
            </label>
            <input
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-primary-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Your Message
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-primary-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-700 text-white p-3 rounded-lg hover:bg-primary-800 focus:ring focus:ring-primary-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
