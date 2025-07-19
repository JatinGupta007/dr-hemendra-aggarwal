/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

import { Phone, Calendar, Navigation, Building2 } from "lucide-react";
import {
  ShieldCheck,
  Clock,
  MapPin,
  Award,
  Star,
  ArrowDown,
  ArrowUp,
} from "lucide-react";

const reasons = [
  {
    icon: <Clock className="h-6 w-6 text-[#197d85]" />,
    title: "15+ Years of Orthopedic Experience",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-[#197d85]" />,
    title: "Practicing at SMS Hospital Jaipur & Top Private Clinics",
  },
  {
    icon: <Award className="h-6 w-6 text-[#197d85]" />,
    title: "Specialized in Knee Replacement, Arthroscopy, Fracture Surgery",
  },
  {
    icon: <MapPin className="h-6 w-6 text-[#197d85]" />,
    title: "Clinics in Jaipur, Hanumangarh, and Alwar",
  },
  {
    icon: <Star className="h-6 w-6 text-[#197d85]" />,
    title: "300+ Positive Reviews by Real Patients",
  },
];

const locations = [
  {
    id: 1,
    title: "Narayana Multispeciality Hospital",
    subtitle: "Pratap Nagar, Jaipur",
    address: "Near Apex Circle, Pratap Nagar, Jaipur",
    timing: "Monday to Saturday | 8:00 AM – 9:00 PM",
    contact: "+91-9210696045",
    specialties: [
      "Joint replacement surgery",
      "Orthopedic surgery",
      "Hospital consultation",
    ],
    mapQuery: "Narayana+Multispeciality+Hospital+Pratap+Nagar+Jaipur",
    type: "Hospital",
    rating: 4.8,
    icon: Building2,
  },
  {
    id: 2,
    title: "Mansarovar Clinic",
    subtitle: "Jaipur",
    address:
      "Villa 19, balaji mandir, MANGLAM ARPAN, near mohanpura, Hajiwala, Mansarovar, Jaipur",
    timing: "Monday to Friday | 4:00 PM – 8:00 PM",
    contact: "+91-9210696045",
    specialties: [
      "Sports injury treatment",
      "Orthopedic consultation",
      "General orthopedics",
    ],
    mapQuery: "Mansarovar+Clinic+Jaipur",
    type: "Clinic",
    rating: 4.7,
    icon: MapPin,
  },

  {
    id: 4,
    title: "SMS Hospital Jaipur",
    subtitle: "Orthopedic Consultation & Surgical Services",
    address: "Jawahar Lal Nehru Marg, Ashok Nagar, Jaipur, Rajasthan 302001",
    timing: "24x7 Emergency Services",
    contact: "+91-9210696045",
    specialties: [
      "Knee replacement consultation",
      "Orthopedic surgery",
      "Specialized treatments",
    ],
    mapQuer:
      "!1m18!1m12!1m3!1d2582.0709417775247!2d75.8164472180632!3d26.906460982660946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc8733fd70039%3A0xed6e6608b8ca9783!2sSawai%20Man%20Singh%20Hospital%20(SMS)!5e0!3m2!1sen!2sin!4v1752913910999!5m2!1sen!2sin",
    type: "Specialized Clinic",
    rating: 4.6,
    icon: Calendar,
  },
];

const DoctorLocations = () => {
  return (
    <main>
      <Navbar />
      {/* Hero Section */}
      <section className="relative isolate bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:py-16 md:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column */}
            <div className="text-center lg:text-left">
              <h1
                data-aos="flip-up"
                className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
              >
                Consult the{" "}
                <span className="bg-gradient-to-r from-[#197d85]/50 to-[#97a345]/50 bg-clip-text text-transparent">
                  Best Orthopedic Doctor{" "}
                </span>
                Near You
              </h1>
              <p
                data-aos="flip-up"
                className="mt-6 text-lg leading-relaxed text-slate-700"
              >
                Dr. Hemendra Agarwal - 15+ years of surgical excellence in knee,
                hip & sports injuries. Ethical, high-quality orthopedic care
                across Rajasthan.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <button
                    data-aos="flip-up"
                    className="flex-1 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 text-black px-6 py-3 rounded-xl font-semibold hover:from-[#197d85]/60 hover:to-[#97a345]/60 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Book an Appointment
                  </button>
                </Link>
                <button
                  data-aos="flip-up"
                  className="flex items-center w-50 gap-9 mx-auto md:ml-0 rounded-lg bg-white px-6 py-3 text-base font-semibold text-[#197d85] shadow-md ring-1 ring-inset ring-[#197d85] hover:bg-[#197d85]/10 transition"
                >
                  View Clinics <ArrowDown className="text-[#197d85]" />
                </button>
              </div>
            </div>

            {/* Right column / image */}
            <div className="relative">
              <div
                data-aos="fade-up"
                className="relative h-80 w-full overflow-hidden rounded-2xl shadow-xl md:h-[480px]"
              >
                <img
                  src="/Images/dr_hemendra-removebg.png"
                  alt="Dr. Hemendra Agarwal consulting a patient"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* location Section */}
      <section
        id="locations"
        className="min-h-screen bg-sky-50 py-7 px-6 md:px-20"
      >
        {/* Header Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#197d85]/10 to-[#97a345]/10 rounded-full blur-3xl transform -rotate-6"></div>
            <div className="relative">
              <h2
                data-aos="fade-down"
                className="text-4xl md:text-6xl font-bold  text-black mb-4"
              >
                Find Dr. Hemendra Agarwal
              </h2>
              <p
                data-aos="fade-down"
                className="text-xl md:text-2xl text-gray-600 font-light mb-6"
              >
                Best Orthopedic Doctor Near You
              </p>
              <div
                data-aos="fade-down"
                className="flex items-center justify-center gap-2 text-yellow-500 mb-4"
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="text-gray-700 ml-2 font-medium">
                  4.8/5 Patient Rating
                </span>
              </div>
            </div>
          </div>

          {/* Location Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location) => (
              <div
                data-aos="zoom-in"
                key={location.id}
                className="group relative"
              >
                {/* Main Card */}
                <div className="relative bg-white/70 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden">
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 rounded-2xl shadow-lg">
                        <location.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {location.title}
                        </h3>
                        <p className="text-[#197d85] font-medium text-sm">
                          {location.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-700">
                        {location.rating}
                      </span>
                    </div>
                  </div>

                  {/* Location Info */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#197d85] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 font-medium leading-relaxed">
                        {location.address}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#97a345] flex-shrink-0" />
                      <span className="bg-gradient-to-r from-[#197d85]/10 to-[#97a345]/10 text-[#197d85] px-4 py-2 rounded-full text-sm font-medium">
                        {location.timing}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#197d85] flex-shrink-0" />
                      <span className="bg-gradient-to-r from-[#197d85]/10 to-[#97a345]/10 text-[#197d85] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#197d85]/20 hover:text-[#197d85] transition-colors cursor-pointer">
                        {location.contact}
                      </span>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {location.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-[#197d85]/10 to-[#97a345]/10 text-[#197d85] px-3 py-1 rounded-full text-xs font-medium border border-[#197d85]/20"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Map Container */}
                  <div className="relative rounded-2xl overflow-hidden shadow-inner bg-gray-100 group">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${location.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block group"
                    >
                      <iframe
                        src={`https://www.google.com/maps?q=${location.mapQuery}&output=embed`}
                        width="100%"
                        height="200"
                        style={{ border: 0, pointerEvents: "none" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="hover:grayscale-0 transition-all duration-500"
                      />
                      {/* Map Overlay Icon */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Navigation className="w-5 h-5 text-[#197d85]" />
                      </div>
                      {/* Decorative Glows */}
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#197d85]/10 to-[#97a345]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#97a345]/10 to-[#197d85]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="text-center mt-16 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 rounded-3xl p-8 text-black">
            <h3 data-aos="flip-up" className="text-2xl font-bold mb-4">
              Book an Appointment with Dr. Hemendra Agarwal
            </h3>
            <p data-aos="flip-up" className="text-lg mb-6">
              Whether you&apos;re in Jaipur, Hanumangarh, or Alwar, help is just
              a visit away. Get treated by one of the best orthopedic surgeons
              in Rajasthan.
            </p>
            <div
              data-aos="flip-up"
              className="flex items-center flex-wrap justify-center"
            >
              <Link href="/contact">
                <button className="bg-white text-[#197d85] px-7 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                  Book Your Appointment Now
                </button>
              </Link>
              <a href="tel:+919210696045" target="_blank">
                <button className="bg-white text-[#197d85] px-6 py-4 mx-6 my-6 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                  Call Now
                </button>
              </a>
              <button className="flex items-center gap-3 bg-white text-[#197d85] px-7 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                View All Locations on Map <ArrowUp className="text-[#197d85]" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Why Patients Trust Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-14 md:px-20">
          <h2
            data-aos="fade-down"
            className="text-3xl font-bold tracking-tight text-slate-900 text-center"
          >
            Why Patients Across Rajasthan Trust{" "}
            <span className="bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 bg-clip-text text-transparent">
              Dr. Hemendra Agarwal
            </span>
          </h2>

          {/* Grid of reasons */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <div
                data-aos="zoom-in"
                key={r.title}
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm"
              >
                <div className="shrink-0 rounded-full bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 p-2">
                  {r.icon}
                </div>
                <p className="text-base font-medium text-slate-800">
                  {r.title}
                </p>
              </div>
            ))}
          </div>

          {/* Quote block */}
          <blockquote
            data-aos="flip-up"
            className="mt-12 rounded-2xl bg-gradient-to-r from-[#197d85]/10 to-[#97a345]/10 p-8 text-center text-lg italic text-slate-700 ring-1 ring-inset ring-[#197d85]/20"
          >
            <p>
              “Now you don&apos;t have to travel far for quality care. Visit
              your nearest clinic and experience expert orthopedic treatment.”
            </p>
          </blockquote>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default DoctorLocations;
