'use client';

import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Send, ArrowRight, Star } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

export default function EnhancedContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <main>
      <Navbar />
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-[#197d85]/70 to-[#97a345]/70 rounded-full blur-3xl animate-pulse"
            style={{
              left: mousePosition.x * 0.02,
              top: mousePosition.y * 0.02,
            }}
          />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-[#97a345]/70 to-[#197d85]/70 rounded-full blur-2xl animate-bounce" />
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl animate-pulse" />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <div className="relative">
                <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#197d85]/40 via-[#97a345] to-[#197d85]/40 mb-6 leading-tight">
                  Let&apos;s
                  <br />
                  <span className="relative">
                    Connect
                    <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 rounded-full transform -skew-x-12"></div>
                  </span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                  Ready to start your wellness journey? We&apos;re here to guide
                  you every step of the way with personalized care and expert
                  support.
                </p>

                <div className="flex gap-4 mb-8">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 text-black rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#97a345]/40 to-[#197d85]/40 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </button>

                  <button className="px-8 py-4 border-2 border-[#197d85] text-[#197d85] rounded-full font-semibold hover:bg-[#197d85] hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#197d85] to-[#97a345] rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#97a345] to-[#197d85] rounded-full animate-pulse delay-1000"></div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                  Send us a message
                </h2>

                <div className="space-y-6">
                  <div className="group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#197d85] focus:border-transparent transition-all duration-300 group-hover:shadow-md"
                    />
                  </div>

                  <div className="group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#197d85] focus:border-transparent transition-all duration-300 group-hover:shadow-md"
                    />
                  </div>

                  <div className="group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      rows="5"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#197d85] focus:border-transparent transition-all duration-300 group-hover:shadow-md resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 text-black font-semibold py-4 rounded-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="relative z-10 py-20 px-6 md:px-20">
          <div className="max-w-6xl mx-auto">
            <h2
              data-aos="flip-up"
              className="text-5xl font-bold text-center text-gray-800 mb-16"
            >
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#197d85] to-[#97a345]">
                Touch
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  info: "+91 92106 96045",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Mail,
                  title: "Email",
                  info: "cvibha@yahoo.com",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  info: "Pratap Nagar Clinic – Jaipur",
                  color: "from-green-500 to-emerald-500",
                },
              ].map((item, index) => (
                <div
                  data-aos="zoom-in"
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{item.info}</p>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="relative z-10 py-20 px-6 md:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 overflow-hidden">
              <h3
                data-aos="flip-up"
                className="text-3xl font-bold text-gray-800 mb-8 text-center"
              >
                Find Us on the Map
              </h3>

              <div
                data-aos="zoom-out"
                className="relative rounded-2xl overflow-hidden shadow-xl"
              >
                <iframe
                  src="https://www.google.com/maps?q=Pratap+Nagar+Clinic,+183/82,+Rana+Sanga+Marg,+Sector+18,+Pratap+Nagar,+Jaipur,+Rajasthan+302033&output=embed"
                  width="100%"
                  height="400"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter contrast-110 saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
