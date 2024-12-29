'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; // Import emailjs-com

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // EmailJS send method
    emailjs
      .send(
        'service_co2agsm',       // Service ID from EmailJS
        'template_wxingul',      // Template ID from EmailJS
        { 
          name: formState.name, 
          email: formState.email, 
          message: formState.message 
        },  // Data to send (must match the template placeholders)
        'GXGuIOkoVmw_uXgv8'           // User ID from EmailJS
      )
      .then((response) => {
        setStatus('Message Sent!');
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        setStatus('Error sending message.');
        console.log('Error sending email:', error);
      });
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Contact Me</h2>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-blue-300 text-white py-3 px-4 rounded-md hover:bg-blue-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Show the status of the message */}
        {status && (
          <div className="mt-4 text-center text-lg font-medium text-gray-700">
            {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
