"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import {
  ChevronRight,
  Stethoscope,
  Heart,
  Shield,
  Award,
  Users,
  Clock,
} from "lucide-react";

import Navbar from "@/component/Header";
import FaqAccordion from "@/component/FaqAccordion";
import Footer from "@/component/Footer";
import Link from "next/link";

import { FaMedal, FaHospital } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import {
  FaAward,
  FaHospitalSymbol,
  FaChartLine,
  FaStethoscope,
  FaCalendarCheck,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const services = [
  {
    title: "Joint Replacement Surgery",
    description:
      "Advanced total and partial joint replacement procedures using the latest minimally invasive techniques and premium implants.",
    treatmentTitle: "Treatment Options:",
    treatments: [
      "Total Hip Replacement",
      "Knee Replacement (Partial & Total)",
      "Shoulder Joint Replacement",
      "Revision Surgery",
    ],
    quote:
      "Restore mobility and eliminate pain with our state-of-the-art joint replacement procedures.",
    buttonText: "Learn More",
    icon: <Stethoscope className="w-8 h-8" color="#197d85" />,
  },
  {
    title: "Sports Medicine",
    description:
      "Comprehensive care for sports-related injuries with focus on rapid recovery and performance optimization.",
    treatmentTitle: "Specializations:",
    treatments: [
      "ACL/MCL Reconstruction",
      "Rotator Cuff Repair",
      "Meniscus Surgery",
      "Arthroscopic Procedures",
    ],
    quote:
      "Get back in the game faster with our specialized sports medicine expertise.",
    buttonText: "Book Consultation",
    icon: <Heart className="w-8 h-8" color="#197d85" />,
  },
  {
    title: "Spine Surgery",
    description:
      "Expert treatment for spinal conditions using cutting-edge minimally invasive surgical techniques.",
    treatmentTitle: "Services Include:",
    treatments: [
      "Disc Replacement",
      "Spinal Fusion",
      "Decompression Surgery",
      "Scoliosis Correction",
    ],
    quote: "Advanced spinal care to restore function and relieve chronic pain.",
    buttonText: "Schedule Visit",
    icon: <Shield className="w-8 h-8" color="#197d85" />,
  },
  {
    title: "Trauma & Emergency",
    description:
      "24/7 emergency orthopedic care for fractures, dislocations, and traumatic injuries.",
    treatmentTitle: "Emergency Services:",
    treatments: [
      "Fracture Repair",
      "Emergency Surgery",
      "Trauma Reconstruction",
      "Urgent Care",
    ],
    quote: "Immediate expert care when you need it most.",
    buttonText: "Emergency Info",
    icon: <Award className="w-8 h-8" color="#197d85" />,
  },
  {
    title: "Pediatric Orthopedics",
    description:
      "Specialized care for children's bone, joint, and muscle conditions with gentle, effective treatments.",
    treatmentTitle: "Pediatric Care:",
    treatments: [
      "Growth Plate Injuries",
      "Congenital Conditions",
      "Developmental Disorders",
      "Pediatric Trauma",
    ],
    quote: "Specialized care for your child's growing bones and joints.",
    buttonText: "Child Care Info",
    icon: <Users className="w-8 h-8" color="#197d85" />,
  },
  {
    title: "Rehabilitation Services",
    description:
      "Comprehensive physical therapy and rehabilitation programs for optimal recovery outcomes.",
    treatmentTitle: "Rehabilitation:",
    treatments: [
      "Post-Surgical Recovery",
      "Physical Therapy",
      "Occupational Therapy",
      "Pain Management",
    ],
    quote: "Complete recovery support from surgery to full function.",
    buttonText: "Recovery Plans",
    icon: <Clock className="w-8 h-8" color="#197d85" />,
  },
];

const stats = [
  { number: "15,000+", label: "Successful Surgeries" },
  { number: "25+", label: "Years Experience" },
  { number: "98%", label: "Patient Satisfaction" },
  { number: "24/7", label: "Emergency Care" },
];

const highlights = [
  {
    icon: <FaAward size={55} color="#197d85" />,
    text: "15+ Years of Expertise in orthopedic care",
  },
  {
    icon: <FaHospitalSymbol size={55} color="#197d85" />,
    text: "Practicing at SMS Hospital & Vaishali Nagar Clinic",
  },
  {
    icon: <FaChartLine size={55} color="#197d85" />,
    text: "3000+ Successful Surgeries with 95%+ Satisfaction",
  },
  {
    icon: <FaStethoscope size={55} color="#197d85" />,
    text: "Rusted for ethical, accurate diagnosis",
  },
  {
    icon: <GiBrain size={55} color="#197d85" />,
    text: "Personalized post-op rehab & recovery planning",
  },
];

const faqs = [
  {
    question: "What is the cost of knee replacement surgery in Jaipur?",
    answer:
      "The cost depends on implant type, hospital, and severity. We offer affordable packages with insurance assistance.",
  },
  {
    question: "How long is the recovery after ligament surgery?",
    answer:
      "Most patients return to basic activities in 2–4 weeks and sports in 3–6 months.",
  },
  {
    question: " Is arthroscopy better than open surgery?",
    answer:
      "Yes, arthroscopy offers smaller cuts, less pain, and quicker healing in most cases.",
  },
];

export default function ExpertisePage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <main>
      {/*Header*/}
      <Navbar />
      {/*Hero section */}
      <section className="flex flex-col lg:flex-row items-center gap-10 px-6 md:px-20 py-10 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40">
        {/* Title Section */}
        <div className="lg:w-3/2 space-y-5 order-2 lg:order-1">
          <h1
            data-aos="flip-up"
            className="text-4xl md:text-6xl font-bold text-black"
          >
            Our orthopedic treatments in Jaipur
          </h1>
          <p data-aos="flip-up" className="mt-4 text-lg text-black">
            If you&apos;re searching for the best orthopedic doctor in Jaipur,
            look no further. With over 15 years of experience and more than 3000
            successful surgeries, Dr. Hemendra Agarwal is known for delivering
            advanced, personalized treatments for joint, ligament, bone, and
            sports-related conditions.
          </p>
          <p data-aos="flip-up">
            Patients from Vaishali Nagar, Mansarovar, Ajmer Road, and all across
            Rajasthan choose Dr. Agarwal for his compassionate care, modern
            techniques, and accurate diagnosis.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
            <div
              data-aos="flip-up"
              className="flex items-center bg-white  backdrop-blur mt-7 px-7 py-4 w-fit text-gray-800 rounded-2xl tracking-tight leading-tight shadow-lg"
            >
              <FaHospital size={50} color="#197d85" />
              <span className="ml-4 text-gray-500 text-lg">
                Clinics in Mahapura & SMS Hospital Jaipur
              </span>
            </div>
            <div
              data-aos="flip-up"
              className="flex items-center bg-white  backdrop-blur mt-7 px-7 py-4 w-fit text-gray-800 rounded-2xl tracking-tight leading-tight shadow-lg"
            >
              <FaHospital size={50} color="#197d85" />
              <span className="ml-4 text-gray-500 text-lg">
                Pratap Nagar Clinic - Jaipur
              </span>
            </div>
          </div>
        </div>
        <div className="relative w-full order-1 lg:order-2">
          <img
            data-aos="fade-down"
            src="/Images/expertise_img.png"
            alt="Expertise"
            className="w-200"
          />
          <div
            data-aos="fade-down"
            className="flex flex-col justify-center items-center bg-white backdrop-blur absolute top-10 p-4 text-gray-800 rounded-2xl tracking-tight leading-tight shadow-lg"
          >
            <FaMedal size={50} color="#197d85" className="mb-3" />
            <span className="ml-2 text-gray-500">
              15+ Years of <br /> Experience
            </span>
          </div>
          <div
            data-aos="fade-left"
            className="flex justify-center items-center bg-white backdrop-blur absolute bottom-8 lg:-right-10 p-4 text-gray-800 rounded-2xl tracking-tight leading-tight shadow-lg"
          >
            <MdHealthAndSafety size={50} color="#197d85" />
            <span className="ml-2 text-gray-500">
              3000+ Successful Surgeries
            </span>
          </div>
        </div>
      </section>
      {/*Services section */}
      <div className="min-h-screen bg-sky-50">
        {/* Header Section */}
        <section className="px-6 md:px-20 pt-20 pb-12">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-600">
                Premier Orthopedic Care
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Specialized Orthopedic Services
            </h2>

            <p className="text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              We offer a comprehensive range of treatments tailored to your
              orthopedic condition - from conservative management to surgical
              excellence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#197d85] to-[#197d85] bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-6 md:px-20 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 overflow-hidden"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d0f3f6]/20 via-[#f1f5d0]/20 to-[#e6f1e8]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Animated border */}

                  <div className="relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 rounded-2xl text-black shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 group-hover:text-[#197d85] transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-base mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Treatments */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        {service.treatmentTitle}
                        <div className="h-0.5 bg-gradient-to-r from-[#28D2DF] to-transparent flex-1"></div>
                      </h4>
                      <ul className="space-y-2">
                        {service.treatments.map((treatment, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-slate-600 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#28D2DF] to-[#197d85] rounded-full"></div>
                            {treatment}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quote */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-[#d0f3f6]/30 to-[#e6f1e8]/30 rounded-xl border-l-4 border-[#28D2DF]">
                      <p className="text-slate-700 text-sm italic font-medium">
                        {service.quote}
                      </p>
                    </div>

                    {/* Button */}
                    <button className="w-full bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 text-black px-6 py-3 rounded-xl font-semibold text-sm shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group/btn">
                      {service.buttonText}
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-6 md:px-20 pb-20">
          <div className="mx-auto text-center">
            <div className="bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 rounded-3xl p-12 text-black shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Recovery Journey?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Our expert team is here to provide you with personalized care
                and treatment plans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#197d85] px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Schedule Consultation
                </button>
                <button className="text-[#197d85] px-8 py-4 rounded-xl font-bold bg-white hover:scale-105 transition-all duration-300">
                  Emergency Contact
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*Why choose us section */}
      <section className="py-20 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 text-black mx-7 md:mx-20 mt-24 mb-50 rounded-4xl">
        <div className="max-w-7xl mx-auto px-8">
          <h2
            data-aos="fade-down"
            className="text-4xl font-bold text-center mb-18"
          >
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center -mb-50">
            {highlights.map((item, index) => (
              <div
                data-aos="flip-right"
                key={index}
                className="bg-white text-black text-center w-full md:h-72 max-w-sm p-6 rounded-3xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:bg-sky-100"
              >
                <div className="mb-10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-1">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* clinic location section */}
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
            className="bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 shadow-xl rounded-2xl p-6 w-full md:w-1/2 flex flex-col items-center text-center"
          >
            <img
              src="/Images/location_1.webp"
              alt="SMS Hospital Jaipur"
              className="w-80 h-50 mb-4 rounded-2xl"
            />
            <h3 className="text-xl font-semibold mb-2 text-black">
              SMS Hospital Jaipur
            </h3>
            <p className="text-black">For insured & emergency surgeries</p>
          </div>

          {/* Vertical Divider (only on md and above) */}
          <div className="hidden md:block w-1 h-100 bg-gradient-to-b from-[#197d85]/40 to-[#97a345]/40"></div>

          {/* Card 2 */}
          <div
            data-aos="fade-left"
            className="bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 shadow-xl rounded-2xl p-6 w-full md:w-1/2 flex flex-col items-center text-center"
          >
            <img
              src="/Images/location_2.webp"
              alt="Vaishali Nagar Clinic"
              className="w-80 h-50 mb-4 rounded-2xl"
            />
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
            className="bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 text-black shadow-xl rounded-2xl p-6 w-full md:w-1/2 flex flex-col items-center text-center"
          >
            <img
              src="/Images/location_1.webp"
              alt="SMS Hospital Jaipur"
              className="w-80 h-50 mb-4 rounded-2xl"
            />
            <h3 className="text-xl font-semibold mb-2 text-black">
              Narayana Hospital
            </h3>
            <p className="text-black">
              Orthopedic doctor in Narayana Hospital Jaipur
            </p>
          </div>
        </div>
        <p
          data-aos="fade-down"
          className="text-xl text-center font-semibold text-[#197d85] mt-12 lg:mt-6"
        >
          Both clinics equipped with latest diagnostics & OT facilities.
        </p>
        <div
          data-aos="fade-down"
          className="flex flex-wrap items-center justify-center mt-7 gap-8"
        >
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 hover:opacity-80 text-black px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
            Get Directions & Timing →
          </button>
          <a href="tel:+919210696045" target="_blank">
            <button className="flex items-center gap-2 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 hover:opacity-80 text-black px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
              Call Now →
            </button>
          </a>
        </div>
      </section>
      {/*Q&A page */}
      <FaqAccordion faqs={faqs} />
      {/*Book appointment section */}
      <section className="bg-gradient-to-r gap-7 lg:gap-16 from-[#197d85]/40 to-[#97a345]/40 mt-28 rounded-2xl px-8 flex flex-col lg:flex-row items-center justify-between m-7 md:m-20 py-7">
        <div data-aos="fade-down" className="relative lg:w-230">
          <img
            src="/Images/dr_hemendra.jpg"
            alt="Dr. Hemendra Agarwal"
            width={500}
            height={400}
            className="object-top -mt-30 rounded-4xl"
          />
        </div>
        {/* Left Content */}
        <div data-aos="fade-left" className="lg:max-w-xl w-full">
          <p className="text-[#197d85] text-lg font-bold">
            Looking for a trusted orthopedic doctor near you in Jaipur?
          </p>
          <h2 className="text-3xl md:text-3xl font-semibold leading-tighter mb-7">
            Let Dr. Hemendra Agarwal help you get back on your feet with expert
            care, modern treatments, and long-term relief.
          </h2>
          <div className="flex items-center flex-wrap gap-5">
            <Link href="/contact">
              <button className="flex items-center gap-2 bg-white hover:opacity-80 text-[#197d85] px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
                <FaCalendarCheck size={20} />
                Book Appointment
              </button>
            </Link>
            <a href="tel:+919210696045" target="_blank">
              <button className="flex items-center gap-2 bg-white hover:opacity-80 text-[#197d85] px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
                <FaPhoneAlt size={20} />
                Call Now
              </button>
            </a>
            <a href="https://wa.me/919210696045" target="_blank">
              <button className="flex items-center gap-2 bg-white hover:opacity-80 text-[#197d85] px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
                <FaWhatsapp size={20} />
                <p>WhatsApp</p>
              </button>
            </a>
          </div>
        </div>

        {/* Right Image */}
      </section>
      {/*Footer*/}
      <Footer />
    </main>
  );
}
