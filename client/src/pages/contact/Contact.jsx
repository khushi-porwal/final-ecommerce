import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import Footer from "../../utils/Footer";
import Header from "../../utils/Header";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:4000/api/contact", {
        name,
        email,
        message,
      });

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:p-16 bg-white">
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in touch with us</h2>
          <p className="text-gray-600 mb-6">
            Have questions about your order, need help with returns, or just want to give feedback?
            We're here to help! Reach out to our support team and we'll get back to you as soon as possible.
          </p>

          <div className="space-y-6 text-gray-800">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#233a95]" />
              <p>+977 98 12345678</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#233a95]" />
              <p>info@wfashionnepal.org.np</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#233a95]" />
              <p>Kathmandu, Nepal</p>
            </div>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
          <textarea
            rows={4}
            placeholder="Your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
          <button
            type="submit"
            className="bg-[#233a95] text-white flex items-center gap-2 px-6 py-2 rounded-md hover:bg-blue-400 transition"
          >
            Submit <FaArrowRight />
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
