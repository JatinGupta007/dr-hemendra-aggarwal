"use client";
import { usePathname } from "next/navigation";
import { CheckCircle, Clock, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import { GrYoga } from "react-icons/gr";
import { GiBerriesBowl } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";

const  postSurgeryCare = [
    {
      icon: <GrYoga size={40} color="#197d85" />,
      title: "Exercise & Physiotherapy",
      routine: [
        "Home exercise guidance",
        "Regular physiotherapy sessions",
        "Strengthening programs",
        "Gait training",
      ],
    },
    {
      icon: <GiBerriesBowl size={40} color="#197d85" />,
      title: "Diet & Lifestyle",
      routine: [
        "Nutrition counseling",
        "Weight management guidance",
        "Activity modifications",
        "Lifestyle recommendations",
      ],
    },
    {
      icon: <FaCalendarAlt size={40} color="#197d85" />,
      title: "Follow-Up & Timeline",
      routine: [
        "Regular follow-up schedule",
        "Return to work: 6-8 weeks",
        "Driving: 4-6 weeks",
        "Full recovery: 3-6 months",
      ],
    },
  ];

export default function SpecificExpertise({ data }) {
  const pathname = usePathname();

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  console.log(pathname);
  const {
    title,
    about,
    recommended,
    modernTechniques,
    keyBenefits,
    treatmentJourney,
    services,
    benefits,
    highlights,
    faqs,
    testimonials
  } = data;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 py-20 px-6 md:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        {/* LEFT CONTENT */}
        <div className="flex-1 w-full">
          {/* Doctor info */}
          <div className="flex items-center gap-4">
            <div data-aos="fade-up" className="relative h-24 w-24 md:h-28 md:w-28 rounded-full border-4 border-[#197d85] overflow-hidden shadow-md">
              <Image
                src="/Images/h.png" // change path if needed
                alt="Dr. Hemendra Agrawal"
                fill
                className="object-cover"
              />
            </div>

            <div data-aos="fade-up" className="flex flex-col">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                Dr. Hemendra Agrawal
              </h2>
              <p className="text-sm md:text-base font-semibold text-[#97a345]">
                MS Orthopaedics, Joint Replacement Specialist
              </p>
              <p className="text-sm md:text-base text-gray-700 mt-1">
                Senior Consultant – Orthopaedics & Joint Replacement
              </p>
              <p className="text-sm md:text-base text-gray-700">
                Knee & Hip Replacement Expert
              </p>
            </div>
          </div>

          {/* Main heading */}
          <div data-aos="fade-right" className="mt-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              {title} Expertise
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-700 max-w-2xl">
              Regain pain-free mobility with expert {title} by Dr. Hemendra
              Agrawal. Experience precision surgery, faster recovery, and
              personalized orthopedic care.
            </p>
          </div>

          {/* CTA buttons */}
          <div data-aos="fade-down" className="mt-8 flex flex-wrap items-center gap-4">
            {/* Hospital badge */}
            <button
              type="button"
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm hover:shadow-md transition"
            >
              <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-sm font-semibold text-red-600">
                NH
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-gray-800">
                  NARAYANA HOSPITAL
                </p>
              </div>
            </button>

            {/* Book appointment */}
            <Link href="/contact">
              <button
                type="button"
                className="rounded-xl bg-slate-900 px-6 py-3 text-sm md:text-base font-semibold text-white shadow-md hover:bg-slate-800 hover:shadow-lg transition cursor-pointer"
              >
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div data-aos="fade-left">
          <div className="rounded-3xl bg-white border border-gray-100 shadow-xl overflow-hidden">
            <div className="relative h-72 md:h-80 lg:h-96">
              <Image
                src={data.icon} // change path if needed
                alt="Knee joint illustration"
                fill
                className=""
              />
            </div>
            <div className="px-6 py-4 border-t border-gray-100">
              <p className="text-sm md:text-base font-semibold text-gray-900">
                5K+ Total {title.replace("Surgery", "Surgeries")}
              </p>
              <p className="text-xs md:text-sm text-gray-600">
                Trusted by patients for safe, precise and compassionate joint
                care.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-20">
        {/* Header Section */}
        <section className="py-10">
          <div className="mx-auto">
            <h2 data-aos="zoom-in" className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Understanding {title}
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 data-aos="fade-left" className="text-2xl font-semibold text-gray-900 mb-4">
                  What is {title}?
                </h3>
                <p data-aos="fade-left" className="text-gray-700 mb-6 leading-relaxed">{about}</p>

                <h3 data-aos="fade-left" className="text-2xl font-semibold text-gray-900 mb-4">
                  When is it Recommended?
                </h3>
                <ul className="space-y-3 text-gray-700 mb-4">
                  {recommended.map((item, index) => (
                    <li data-aos="fade-left" data-aos-delay={index * 100} key={index} className="flex items-start gap-3">
                      <span className="text-[#197d85] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 data-aos="fade-left" className="text-2xl font-semibold text-gray-900 mb-4">
                  Modern Techniques
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {modernTechniques.map((item, index) => (
                    <li data-aos="fade-left" data-aos-delay={index * 100} key={index} className="flex items-start gap-3">
                      <span className="text-[#197d85] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 data-aos="fade-right" className="text-2xl font-semibold text-gray-900 mb-4">
                  Key Benefits
                </h3>
                <div className="space-y-4 mb-8">
                  {keyBenefits.map((benefit, index) => (
                    <div data-aos="fade-right" data-aos-delay={index * 100}
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-gray-900 my-12 text-center">
          Types of {title}
        </h2>
        {/* Services Grid */}
        <div className="flex flex-wrap items-center justify-center gap-7 mb-16">
          {services.map((service, index) => {
            const isActive =
              pathname === `/expertise/${title.replaceAll(" ", "-")}`;
            const cardContent = (
              <div
                data-aos="zoom-in"
                className={`group flex flex-col justify-center items-center w-78 h-60 bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg transition-all duration-300 border border-white/20 ${
                  isActive
                    ? "hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                    : "opacity-60 cursor-not-allowed"
                }`}
                style={!isActive ? { pointerEvents: "none" } : {}}
              >
                <div className="flex items-center justify-center w-18 h-18 bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-bold text-center text-lg text-black mb-2 group-hover:text-[#197d85] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {service.subtitle}
                </p>
              </div>
            );
            return isActive ? (
              <Link
                key={index}
                href={`/expertise/${title.replaceAll(
                  " ",
                  "-"
                )}/${service.title.replaceAll(" ", "-")}`}
              >
                {cardContent}
              </Link>
            ) : (
              <div key={index}>{cardContent}</div>
            );
          })}
        </div>
        {/* treatment journey */}
        <section className="py-10">
          <div data-aos="flip-up" className="mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">
              Your Treatment Journey
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              A comprehensive step-by-step process ensuring the best outcomes
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {treatmentJourney.map((item) => (
                <div
                data-aos="flip-up"
                  key={item.step}
                  className="bg-white rounded-3xl p-6 shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#197d85] to-[#97a345] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-4 my-12 md:p-12 shadow-2xl border border-white/30">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                data-aos="fade-right"
                className="text-3xl md:text-4xl font-bold text-black mb-6"
              >
                Why Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#197d85]/90 to-[#97a345]/90">
                  {title}
                </span>
                ?
              </h2>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
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
                    src={data.icon}
                    alt="Highlight Icon"
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {highlights.title}
                </h3>
                <p className="text-gray-700 mb-6">{highlights.description}</p>

                <Link href="/contact">
                  <button className="group bg-gradient-to-r from-[#197d85]/50 to-[#97a345]/50 text-black px-3 md:px-8 py-1 md:py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center mx-auto space-x-1 md:space-x-2">
                    <span>{highlights.button}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
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
              {testimonials.map((testimonial, idx) => (
                <div
                  data-aos="zoom-out"
                  key={idx}
                  className="bg-white rounded-xl p-8 shadow-lg border border-amber-100"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}, {testimonial.age} years
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.surgery}
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
              {faqs.map((faq, idx) => (
                <div data-aos="fade-down" data-aos-delay={idx * 100}
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
                    <span className="text-2xl text-blue-600 flex-shrink-0">
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

        {/* Post-Surgery Care */}
        <section className="py-10">
          <div data-aos="flip-down" className="mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Post-Surgery Care & Physiotherapy
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Comprehensive support for a smooth and successful recovery
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {postSurgeryCare.map((care, index) => (
                <div
                  data-aos="flip-down" data-aos-delay={index * 100}
                  className="bg-white rounded-2xl p-8 shadow-md border border-green-100 mb-6"
                  key={index}
                >
                  <div className="text-4xl mb-4 flex justify-center">
                    {care.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {care.title}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    {care.routine.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
