'use client';

import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, ArrowRight, Star, Navigation } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";
import Image from "next/image";

export default function EnhancedContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = () => {
  //   // Handle form submission here
  //   console.log("Form submitted:", formData);
  // };

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
        <section className="relative z-10 min-h-screen flex items-center justify-center bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 px-6 md:px-20">
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
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
                    <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 rounded-full transform -skew-x-12"></div>
                  </span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                  Ready to start your wellness journey? We&apos;re here to guide
                  you every step of the way with personalized care and expert
                  support.
                </p>

                <div className="flex gap-4 mb-8">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 text-black rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
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
            <Image src="/Images/dr_hemendra.jpg" alt="Dr Hemendra" height={500} width={480} className="rounded-4xl" />

            {/* Right Content - Contact Form */}
            {/* <div
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
                    className="w-full bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 text-black font-semibold py-4 rounded-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div> */}
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
                    className={`w-16 h-16 bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-8 h-8 text-white font-bold" />
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
        <section className="relative px-7 md:px-20 mb-4">
          <h2
            data-aos="fade-up"
            className="text-4xl font-bold text-center mb-3 md:mb-10"
          >
            Visit Our Clinics in Jaipur
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-7 lg:gap-10 relative">
            {/* Card 1 */}
            <div
              data-aos="fade-right"
              className="bg-gradient-to-r h-84 from-[#197d85]/20 to-[#97a345]/20 shadow-xl rounded-2xl p-6 w-full md:w-1/2 flex flex-col items-center text-center"
            >
              <div className="relative mb-4 h-48 rounded-2xl overflow-hidden shadow-inner bg-gray-100 group">
                <a
                  href="https://www.google.com/search?q=Narayana+Multispeciality+Hospital+%E2%80%93+Pratap+Nagar%2C+Jaipur&rlz=1C1CHZN_enIN1094IN1094&oq=Narayana+Multispeciality+Hospital+%E2%80%93+Pratap+Nagar%2C+Jaipur&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzM4NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" // e.g., "https://www.google.com/maps/place/..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block group"
                  aria-label="Open map in new tab"
                >
                  {/* Map Preview */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.413867637782!2d75.8253632!3d26.7949476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc999fe90f309%3A0x91760491563438ac!2sNarayana%20Hospital%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1753080256093!5m2!1sen!2sin" // e.g., embedded map URL
                    width="100%"
                    height="200"
                    style={{ border: 0, pointerEvents: "none" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="hover:grayscale-0 transition-all duration-500"
                    title="Map Preview"
                  />

                  {/* Navigation Icon Overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Navigation className="w-5 h-5 text-[#197d85]" />
                  </div>

                  {/* Decorative Glow Effects */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#197d85]/10 to-[#97a345]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#97a345]/10 to-[#197d85]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </a>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Narayana Hospital Jaipur
              </h3>
              <p className="text-black">For insured & emergency surgeries</p>
            </div>

            {/* Vertical Divider (only on md and above) */}
            <div className="hidden md:block w-1 h-100 bg-gradient-to-b from-[#197d85]/40 to-[#97a345]/40"></div>

            {/* Card 2 */}
            <div
              data-aos="fade-left"
              className="bg-gradient-to-r h-84 from-[#197d85]/20 to-[#97a345]/20 shadow-xl rounded-2xl p-6 w-full md:w-1/2 flex flex-col items-center text-center"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-inner mb-4 bg-gray-100 group">
                <a
                  href="https://g.co/kgs/RFjQ2wV" // e.g., "https://www.google.com/maps/place/..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block group"
                  aria-label="Open map in new tab"
                >
                  {/* Map Preview */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.29600027931!2d75.83297209999999!3d26.798702100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc90a0fbec191%3A0xfad7f9958d424be5!2sORTHO-KLINIK-Dr%20Hemendra%20Agrawal%20senior%20Orthopedic%20Surgeon!5e0!3m2!1sen!2sin!4v1753001468755!5m2!1sen!2sin" // e.g., embedded map URL
                    width="100%"
                    height="200"
                    style={{ border: 0, pointerEvents: "none" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="hover:grayscale-0 transition-all duration-500"
                    title="Map Preview"
                  />

                  {/* Navigation Icon Overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Navigation className="w-5 h-5 text-[#197d85]" />
                  </div>

                  {/* Decorative Glow Effects */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#197d85]/10 to-[#97a345]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#97a345]/10 to-[#197d85]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </a>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Pratap Nagar Clinic
              </h3>
              <p className="text-black">
                For appointments, procedures & follow-ups
              </p>
            </div>
            <div className="hidden md:block w-1 h-100 bg-gradient-to-b from-[#197d85]/40 to-[#97a345]/40"></div>
            {/* Card 3 */}
            <div
              data-aos="fade-right"
              className="bg-gradient-to-r h-84 from-[#197d85]/20 to-[#97a345]/20 text-black shadow-xl rounded-2xl p-6 w-full md:w-1/2 flex flex-col items-center text-center"
            >
              <div className="relative mb-4 rounded-2xl overflow-hidden shadow-inner bg-gray-100 group">
                <a
                  href="https://g.co/kgs/riT4Q2w" // e.g., "https://www.google.com/maps/place/..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block group"
                  aria-label="Open map in new tab"
                >
                  {/* Map Preview */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.3616659387435!2d75.7357402!3d26.8284468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db591ca3cb9b9%3A0x2077186374def3fe!2sDR%20HEMENDRA%20AGRAWAL%20ORTHOPEDIC%20DOCTOR!5e0!3m2!1sen!2sin!4v1753001116217!5m2!1sen!2sin" // e.g., embedded map URL
                    width="100%"
                    height="200"
                    style={{ border: 0, pointerEvents: "none" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="hover:grayscale-0 transition-all duration-500"
                    title="Map Preview"
                  />

                  {/* Navigation Icon Overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Navigation className="w-5 h-5 text-[#197d85]" />
                  </div>

                  {/* Decorative Glow Effects */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#197d85]/10 to-[#97a345]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#97a345]/10 to-[#197d85]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </a>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Mansarovar Clinic
              </h3>
              <p className="text-black">
                Orthopedic doctor in Mansarovar clinic Jaipur
              </p>
            </div>
          </div>
          <p
            data-aos="fade-down"
            className="text-xl text-center font-semibold text-[#197d85] mt-12 lg:mt-6"
          >
            Both clinics equipped with latest diagnostics & OT facilities.
          </p>
          
        </section>
      </div>
      <Footer />
    </main>
  );
}
