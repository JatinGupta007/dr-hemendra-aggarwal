/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

import { Phone, Calendar, Navigation, Building2 } from "lucide-react";
import { ShieldCheck, Clock, MapPin, Award, Star } from "lucide-react";

const reasons = [
  {
    icon: <Clock className="h-6 w-6 text-[#197d85]" />,
    title: "14+ Years of Orthopedic Experience",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-[#197d85]" />,
    title: "Practicing at Top Private Clinics",
  },
  {
    icon: <Award className="h-6 w-6 text-[#197d85]" />,
    title: "Specialized in Knee Replacement, Arthroscopy, Fracture Surgery",
  },
  {
    icon: <MapPin className="h-6 w-6 text-[#197d85]" />,
    title: "Clinics in Pratap Nagar and Mansarovar Clinic",
  },
  {
    icon: <Star className="h-6 w-6 text-[#197d85]" />,
    title: "300+ Positive Reviews by Real Patients",
  },
];

const locations = [
  {
    id: 1,
    title: "Narayana Hospital, Jaipur",
    subtitle: "Orthopedic Consultation & Surgical Services",
    address:
      "SEC 28 Kumbha Marg Pratap Nagar, Sanganer, Sitapura Industrial Area, Sitapura, Jaipur, Rajasthan 302033",
    timing: "24x7 Emergency Services",
    contact: "+91-9210696045",
    specialties: [
      "Knee replacement consultation",
      "Orthopedic surgery",
      "Specialized treatments",
    ],
    mapLink:
      "https://www.google.com/search?q=Narayana+Multispeciality+Hospital+%E2%80%93+Pratap+Nagar%2C+Jaipur&rlz=1C1CHZN_enIN1094IN1094&oq=Narayana+Multispeciality+Hospital+%E2%80%93+Pratap+Nagar%2C+Jaipur&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzM4NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.413867637782!2d75.8253632!3d26.7949476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc999fe90f309%3A0x91760491563438ac!2sNarayana%20Hospital%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1753080256093!5m2!1sen!2sin",
    type: "Specialized Hospital",
    rating: 4.8,
    icon: Calendar,
  },

  {
    id: 2,
    title: "Pratap Nagar Clinic",
    subtitle: "Pratap Nagar, Jaipur",
    address:
      "183/82, Rana Sanga Marg, Sector 18, Pratap Nagar, Jaipur, Rajasthan 302033",
    timing: "Monday to Saturday | 8:00 AM – 9:00 PM",
    contact: "+91-9210696045",
    specialties: [
      "Joint replacement surgery",
      "Orthopedic surgery",
      "Hospital consultation",
    ],
    mapLink: "https://g.co/kgs/RFjQ2wV",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.29600027931!2d75.83297209999999!3d26.798702100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc90a0fbec191%3A0xfad7f9958d424be5!2sORTHO-KLINIK-Dr%20Hemendra%20Agrawal%20senior%20Orthopedic%20Surgeon!5e0!3m2!1sen!2sin!4v1753001468755!5m2!1sen!2sin",
    type: "Hospital",
    rating: 4.8,
    icon: Building2,
  },
  {
    id: 3,
    title: "Mansarovar Clinic",
    subtitle: "Jaipur",
    address:
      "Villa 19, balaji mandir, MANGLAM ARPAN, near mohanpura, Hajiwala, Mohanpura, Rajasthan 302029",
    timing: "Monday to Friday | 4:00 PM – 8:00 PM",
    contact: "+91-9210696045",
    specialties: [
      "Sports injury treatment",
      "Orthopedic consultation",
      "General orthopedics",
    ],
    mapLink: "https://g.co/kgs/riT4Q2w",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.3616659387435!2d75.7357402!3d26.8284468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db591ca3cb9b9%3A0x2077186374def3fe!2sDR%20HEMENDRA%20AGRAWAL%20ORTHOPEDIC%20DOCTOR!5e0!3m2!1sen!2sin!4v1753001116217!5m2!1sen!2sin",
    type: "Clinic",
    rating: 4.7,
    icon: MapPin,
  },
];

const DoctorLocations = () => {
  return (
    <main>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20">
        <div className="mx-auto px-6 py-18 md:px-10 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column */}
            <div className="text-center lg:text-left">
              <h1
                data-aos="flip-up"
                className="text-3xl font-bold tracking-tight text-slate-900 lg:text-[36px]"
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
                Dr. Hemendra Agrawal - 14+ years of surgical excellence in knee,
                hip & sports injuries. Ethical, high-quality orthopedic care
                across Rajasthan.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <button
                    data-aos="flip-up"
                    className="flex-1 bg-gradient-to-r from-[#197d85]/50 to-[#97a345]/50 text-black px-6 py-3 rounded-xl font-semibold hover:from-[#197d85]/60 hover:to-[#97a345]/60 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Book an Appointment
                  </button>
                </Link>
              </div>
            </div>

            {/* Right column / image */}
            <div className="relative">
              <div
                data-aos="fade-up"
                className="relative h-80 w-full overflow-hidden rounded-2xl shadow-xl md:h-[480px]"
              >
                <img
                  src="/Images/h.png"
                  alt="Dr. Hemendra Agrawal consulting a patient"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* location Section */}
      <section id="locations" className="py-7 px-6 md:px-10 lg:px-20">
        {/* Header Section */}
        <div className="mx-auto mt-10">
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#197d85]/10 to-[#97a345]/10 rounded-full blur-3xl transform -rotate-6"></div>
            <div className="relative">
              <h2
                data-aos="fade-down"
                className="text-4xl md:text-6xl font-bold  text-black mb-4"
              >
                Find Dr. Hemendra Agrawal
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
                <div className="relative bg-white/70 backdrop-blur-sm border border-white/20 rounded-3xl p-4 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden">
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-r from-[#197d85]/50 to-[#97a345]/50 rounded-2xl shadow-lg">
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
                      href={location.mapLink} // e.g., "https://www.google.com/maps/place/..."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block group"
                      aria-label="Open map in new tab"
                    >
                      {/* Map Preview */}
                      <iframe
                        src={location.src} // e.g., embedded map URL
                        width="100%"
                        height="250"
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
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="text-center mt-16 bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 rounded-3xl p-4 md:p-8 text-black">
            <h3 data-aos="flip-up" className="text-2xl font-bold mb-4">
              Book an Appointment with Dr. Hemendra Agrawal
            </h3>
            <p data-aos="flip-up" className="text-lg mb-6">
              Whether you&apos;re in Jaipur, Hanumangarh, or Alwar, help is just
              a visit away. Get treated by one of the best orthopedic surgeons
              in Rajasthan.
            </p>
            <div
              data-aos="flip-up"
              className="flex items-center flex-wrap justify-center gap-16"
            >
              <Link href="/contact">
                <button className="flex item-center gap-2 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 text-black hover:opacity-80 px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
                  <Calendar />
                  Book Your Appointment Now
                </button>
              </Link>
              <a href="tel:+919210696045" target="_blank">
                <button className="flex item-center gap-2 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 text-black hover:opacity-80 px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
                  <Phone />
                  Call Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Why Patients Trust Section */}
      <section className="bg-white">
        <div className="mx-auto px-6 py-16 sm:py-14 md:px-10 lg:px-20">
          <h2
            data-aos="fade-down"
            className="text-3xl font-bold tracking-tight text-slate-900 text-center"
          >
            Why Patients Across Rajasthan Trust{" "}
            <span className="bg-gradient-to-r from-[#197d85]/70 to-[#97a345]/70 bg-clip-text text-transparent">
              Dr. Hemendra Agrawal
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
                <div className="shrink-0 rounded-full bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 p-2">
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
