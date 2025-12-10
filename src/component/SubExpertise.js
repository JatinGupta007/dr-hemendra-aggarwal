"use client";
import React, { useState } from "react";
import Image from "next/image";

import {
  CheckCircle,
  Clock,
  Shield,
  ArrowRight,
} from "lucide-react";

import { MdVerified, MdMedicalServices } from "react-icons/md";

export default function KneeReplacementPage({ pageData }) {
  const [open, setOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const Form = () => {
    return (
      <div className="fixed inset-0 z-40 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Card */}
        <div className="relative z-50 max-w-lg rounded-2xl bg-white/95 shadow-2xl p-7 lg:p-12">
          {/* Decorative dots (top-right and bottom-left) */}
          <div className="pointer-events-none">
            <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br from-[#197d85]/50 to-[#97a345]/80 blur-sm opacity-90" />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-tr from-[#197d85]/50 to-[#97a345]/80 blur-sm opacity-90" />
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-8">
            Send us a message
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-xl border border-slate-200 px-4 py-4 text-slate-700 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  // For demo: just close modal. Replace with submit logic.
                  setOpen(false);
                }}
                className="w-full rounded-2xl py-4 font-semibold bg-gradient-to-r from-[#197d85]/50 to-[#97a345]/80 border border-transparent shadow-inner hover:scale-[.997] transition-all"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Close button top-right */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 rounded-md p-2 hover:bg-slate-100"
            aria-label="close"
          >
            ✕
          </button>
        </div>
      </div>
    );
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="px-7 md:px-10 lg:px-20">
      {/* Hero Section - New Modern Design */}
      <div className="w-full flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="py-10 flex flex-col w-full lg:w-3/4">
          {/* Main Content */}
          <div className="space-y-5">
            <div data-aos="fade-right">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                {pageData.title} in Jaipur
                <br />
                By Dr. Hemendra Agrawal
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg">
                Restore your active lifestyle with advanced {pageData.title} by Dr. Hemendra Agrawal. With modern techniques, careful
                planning, and dedicated follow-up care, we help you recover
                faster and move comfortably again.
              </p>
            </div>

            {/* CTA Button */}

            <button
              data-aos="fade-right"
              onClick={() => setOpen(true)}
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-10 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg mb-5"
            >
              Book an Appointment
            </button>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-2">
              <div
                data-aos="fade-up"
                className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-[#1a7a7a]/20"
              >
                <p className="text-4xl font-bold text-[#1a7a7a] mb-2">20000+</p>
                <p className="text-gray-600 font-medium">
                  Successful Surgeries
                </p>
              </div>

              <div
                data-aos="fade-up"
                className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-[#1a7a7a]/20"
              >
                <p className="text-4xl font-bold text-[#1a7a7a] mb-2">14+</p>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </div>
            </div>
            <p data-aos="fade-left" className="text-gray-700 leading-relaxed">
              Trusted by patients for safe, precise and compassionate joint
              care.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div data-aos="fade-left">
          <div className="border-gray-100 md:flex lg:flex-col">
            <div className="relative h-70 lg:h-96 w-full">
              <Image
                src={pageData.icon}
                alt="Knee joint illustration"
                fill
                className="w-full"
              />
            </div>

            {/* Bottom Card */}
            <div className="bg-gradient-to-br from-[#dce9e5] to-[#f0f7f5] p-5 rounded-3xl text-center  max-w-md border-2 border-[#1a7a7a]/20 m-5">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                5K+ Total {pageData.title} Surgeries
              </h3>
            </div>
          </div>
        </div>
      </div>
      <section className="flex flex-col lg:flex-row items-center gap-16 py-10 px-4 md:px-10 shadow-2xl rounded-2xl bg-teal-50 mt-10">
        <div data-aos="fade-right">
          <Image
            src="/Images/dr_hemendra.jpg"
            alt="Doctor"
            width={500}
            height={500}
            className="rounded-2xl"
          />
        </div>
        <div className="space-y-6 w-full">
          <h1
            data-aos="fade-left"
            className="text-3xl lg:text-[36px] font-bold mb-8"
          >
            Dr. Hemendra Agrawal Experienced Orthopedic Surgeon in Jaipur
          </h1>
          <div
            data-aos="fade-left"
            className="flex flex-wrap items-center gap-4 mb-6"
          >
            <span className="bg-white px-3 py-2 rounded-xl text-sm font-semibold flex items-center transition duration-200 hover:scale-105 hover:shadow-lg">
              Google Reviews <span className="ml-2">⭐⭐⭐⭐⭐</span>
            </span>
            <span className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl text-sm font-semibold transition duration-200 hover:scale-105 hover:shadow-lg">
              Practo Verified <MdVerified color="#197d85" size={20} />
            </span>
            <span className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl text-sm font-semibold transition duration-200 hover:scale-105 hover:shadow-lg">
              Narayana Hospital Consultant{" "}
              <MdMedicalServices color="#197d85" size={20} />
            </span>
          </div>
          <h2 data-aos="fade-left" className="text-2xl font-semibold mb-6">
            Trusted by Thousands, Guided by Experience - Meet Dr. Hemendra
            Agrawal
          </h2>
          <p data-aos="fade-left" className="text-lg lg:w-xl pb-2">
            With over 14 years of clinical and surgical excellence, Dr. Hemendra
            Agrawal is a top-rated orthopedic surgeon in Jaipur, specializing in
            joint replacement, arthroscopy, ligament reconstruction, and sports
            injury management.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="mx-auto" data-aos="flip-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Understanding {pageData.title}
            </h2>

            <p
              data-aos="flip-up"
              className="text-lg text-gray-700 mb-8 text-center leading-relaxed"
            >
              {pageData.subtitle}
            </p>

            <div data-aos="flip-up" className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  Why does the {pageData.title} deteriorate?
                </h3>
                <p className="text-gray-700">
                  {pageData.whyDeteriorate}
                </p>
              </div>

              <div
                data-aos="flip-up"
                className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  How does {pageData.title} help?
                </h3>
                <p className="text-gray-700">
                  {pageData.howItHelps}
                </p>
              </div>
            </div>

            <h3
              data-aos="flip-up"
              className="text-2xl font-bold text-gray-900 mb-4"
            >
              Benefits of Modern TKR Techniques:
            </h3>
            <div data-aos="flip-up" className="grid md:grid-cols-2 gap-4">
              {pageData.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="mx-auto" data-aos="fade-down">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Is It Time for {pageData.title}
            </h2>

            <p
              data-aos="fade-down"
              className="text-lg text-gray-700 mb-8 text-center"
            >
              If you&apos;re experiencing any of these symptoms, it may be time
              to consult a {pageData.title} specialist:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {pageData.symptoms.map((symptom, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg shadow-sm flex items-start space-x-3 hover:shadow-md transition-shadow"
                  data-aos="fade-down"
                  data-aos-delay={idx * 100}
                >
                  <span className="text-green-600 text-xl">☑</span>
                  <span className="text-gray-800">
                    <strong>{symptom.title}</strong> {symptom.description}
                  </span>
                </div>
              ))}
            </div>

            <div
              data-aos="fade-down"
              className="bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 p-8 rounded-2xl text-center shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-3">
                Not Sure If You Need {pageData.title}?
              </h3>
              <p className="text-lg mb-4">
                Get your knee evaluated by Dr. Hemendra Agrawal
              </p>
              <button
                onClick={() => setOpen(true)}
                className="bg-white text-[#197d85] px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition-all hover:scale-105"
              >
                Schedule a Diagnostic Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div data-aos="zoom-in" className="mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Choosing the Right Procedure
            </h2>

            <p
              data-aos="zoom-in"
              className="text-lg text-gray-700 mb-12 text-center"
            >
              Not all {pageData.title} are the same. Dr. Hemendra Agrawal{" "}
              offers personalized treatment based on your specific condition.
            </p>

            {/* Comparison Table */}
            <div
              data-aos="zoom-in"
              className="overflow-x-auto mb-12 rounded-xl shadow-lg"
            >
              <table className="w-full bg-white">
                <thead className="bg-gradient-to-r from-[#197d85]/50 to-[#97a345]/50">
                  <tr>
                    <th className="px-6 py-6 text-left font-semibold">Type</th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Best For
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      What It Involves
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Recovery Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pageData.procedures.map((proc, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-gray-300 hover:bg-teal-50 ${
                        idx % 2 === 1 ? "bg-teal-50" : ""
                      }`}
                    >
                      <td className="px-6 py-6 font-semibold text-gray-900">
                        {proc.name}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {proc.bestFor}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {proc.involves}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {proc.recovery}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Procedure Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {pageData.procedures.map((proc, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-105"
                  data-aos="zoom-in"
                >
                 
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {proc.name}
                  </h3>
                  <p className="text-gray-700">{proc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="mx-auto">
            <h2
              data-aos="fade-right"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center"
            >
              The {pageData.title} Procedure - Step by Step
            </h2>

            <p
              data-aos="fade-right"
              className="text-lg text-gray-700 mb-12 text-center"
            >
              Understanding the process helps reduce anxiety and prepares you
              for a smooth recovery.
            </p>

            <div className="space-y-8">
              {pageData.timeline.map((phase, idx) => (
                <div data-aos="fade-right" key={idx} className="relative pl-12">
                  {/* Timeline Line */}
                  {idx !== pageData.timeline.length - 1 && (
                    <div className="absolute left-2 top-8 bottom-0 w-0.5 bg-teal-600"></div>
                  )}

                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 w-5 h-5 bg-teal-600 rounded-full"></div>
                  {/* Content Card */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-3">
                      <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {phase.phase}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">
                        {phase.title}
                      </h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      {phase.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start">
                          <span className="text-teal-600 mr-3 text-xs mt-1.5">
                            ●
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-4 my-12 md:p-12 shadow-2xl border border-white/30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              data-aos="fade-right"
              className="text-3xl md:text-4xl font-bold text-black mb-6"
            >
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#197d85]/90 to-[#97a345]/90">
                {pageData.title}
              </span>
              ?
            </h2>

            <div className="space-y-4 mb-8">
              {pageData.benefits.map((benefit, index) => (
                <div
                  data-aos="fade-right"
                  key={index}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-[#197d85] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <div
                data-aos="fade-right"
                className="flex items-center space-x-2 bg-[#197d85]/10 px-4 py-2 rounded-full"
              >
                <Clock className="w-5 h-5 text-[#197d85]" />
                <span className="text-sm font-medium text-[#197d85]">
                  Quick Recovery
                </span>
              </div>
              <div
                data-aos="fade-right"
                className="flex items-center space-x-2 bg-[#97a345]/10 px-4 py-2 rounded-full"
              >
                <Shield className="w-5 h-5 text-[#97a345]" />
                <span className="text-sm font-medium text-[#97a345]">
                  Safe Procedure
                </span>
              </div>
            </div>
          </div>

          {/* Highlight Box */}
          <div data-aos="fade-left" className="relative">
            <div className="bg-gradient-to-br from-[#197d85]/20 to-[#97a345]/20 rounded-2xl p-4 md:p-8 text-center">
              <div
                data-aos="fade-right"
                className="bg-white rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <Image
                  src={pageData.icon}
                  alt="Highlight Icon"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {pageData.highlights.title}
              </h3>
              <p className="text-gray-700 mb-6">
                {pageData.highlights.description}
              </p>

              <button
                onClick={() => setOpen(true)}
                className="group bg-gradient-to-r from-[#197d85]/50 to-[#97a345]/50 text-black px-3 md:px-8 py-1 md:py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center mx-auto space-x-1 md:space-x-2"
              >
                <span>{pageData.highlights.button}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#97a345]/30 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#197d85]/20 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Patient Testimonials */}
      <section className="py-12">
        <div data-aos="zoom-out" className="mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Real stories from real patients who found relief and renewed
            mobility
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {pageData.testimonials.map((testimonial, idx) => (
              <div
                data-aos="zoom-out"
                key={idx}
                className="bg-white rounded-xl p-8 shadow-lg border border-amber-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(pageData.testimonials[idx].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  &quot;{pageData.testimonials[idx].quote}&quot;
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">
                    {pageData.testimonials[idx].name},{" "}
                    {pageData.testimonials[idx].age} years
                  </p>
                  <p className="text-sm text-gray-600">
                    {pageData.testimonials[idx].surgery}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12">
        <div data-aos="fade-down" className="mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Get answers to common questions about joint replacement surgery
          </p>

          <div className="space-y-4">
            {pageData.faqs.map((faq, idx) => (
              <div
                data-aos="fade-down"
                data-aos-delay={idx * 100}
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-teal-600 flex-shrink-0">
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="p-6 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2
              data-aos="zoom-out"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center"
            >
              Transparent Pricing
            </h2>

            <p
              data-aos="zoom-out"
              className="text-lg text-gray-700 mb-8 text-center"
            >
              We believe in complete transparency. The cost varies based on
              several factors.
            </p>

            <div
              data-aos="zoom-out"
              className="bg-gradient-to-br from-[#197d85]/40 to-[#97a345]/40 p-8 rounded-2xl mb-8 text-center shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Typical Cost Range
              </h3>
              <button
                onClick={() => setOpen(true)}
                className="text-xl font-extrabold text-[#197d85] border border-[#197d85] px-7 py-2 rounded-xl mb-2 hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                Get Cost
              </button>

              <p className="text-gray-700">
                Price per knee replacement surgery
              </p>
            </div>
          </div>

          {/* Modal overlay */}
          {open && <Form />}
        </div>
      </section>
    </div>
  );
}
