"use client";
import { usePathname } from "next/navigation";
import { CheckCircle, Clock, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import { GrYoga } from "react-icons/gr";
import { GiBerriesBowl } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { MdVerified, MdMedicalServices } from "react-icons/md";

const postSurgeryCare = [
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
  const [open, setOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const Form = () => {
    return (
      <div className="fixed inset-0 z-40 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Card */}
        <div className="relative z-50 max-w-xl rounded-2xl bg-white/95 shadow-2xl p-10 md:p-12">
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
    testimonials,
  } = data;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 py-10 px-6 md:px-10 lg:px-16">
      <div className="w-full flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="py-10 flex flex-col w-full lg:w-3/4">
          {/* Doctor Profile */}{/* Main Content */}
          <div className="space-y-5">
            <div data-aos="fade-right">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                {title} in Jaipur
                <br />
                By Dr. Hemendra Agrawal
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg">
                Restore your active lifestyle with advanced {title} by Dr. Hemendra Agrawal. With modern techniques, careful
                planning, and dedicated follow-up care, we help you recover
                faster and move comfortably again.
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setOpen(true)}
              data-aos="fade-right"
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
                src={data.icon}
                alt="Knee joint illustration"
                fill
                className="w-full"
              />
            </div>

            {/* Bottom Card */}
            <div className="bg-gradient-to-br from-[#dce9e5] to-[#f0f7f5] p-5 rounded-3xl text-center  max-w-md border-2 border-[#1a7a7a]/20 m-5">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                5K+ Total {title.replaceAll("Surgery", "Surgeries")} Performed
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
      <div className="relative mx-auto mt-20">
        {/* Header Section */}
        <section className="py-10">
          <div className="mx-auto">
            <h2
              data-aos="zoom-in"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
            >
              Understanding {title}
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3
                  data-aos="fade-left"
                  className="text-2xl font-semibold text-gray-900 mb-4"
                >
                  What is {title}?
                </h3>
                <p
                  data-aos="fade-left"
                  className="text-gray-700 mb-6 leading-relaxed"
                >
                  {about}
                </p>

                <h3
                  data-aos="fade-left"
                  className="text-2xl font-semibold text-gray-900 mb-4"
                >
                  When is it Recommended?
                </h3>
                <ul className="space-y-3 text-gray-700 mb-4">
                  {recommended.map((item, index) => (
                    <li
                      data-aos="fade-left"
                      data-aos-delay={index * 100}
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <span className="text-[#197d85] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3
                  data-aos="fade-left"
                  className="text-2xl font-semibold text-gray-900 mb-4"
                >
                  Modern Techniques
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {modernTechniques.map((item, index) => (
                    <li
                      data-aos="fade-left"
                      data-aos-delay={index * 100}
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <span className="text-[#197d85] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3
                  data-aos="fade-right"
                  className="text-2xl font-semibold text-gray-900 mb-4"
                >
                  Key Benefits
                </h3>
                <div className="space-y-4 mb-8">
                  {keyBenefits.map((benefit, index) => (
                    <div
                      data-aos="fade-right"
                      data-aos-delay={index * 100}
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
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-gray-900 my-12 text-center"
        >
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
                  data-aos="flip-down"
                  data-aos-delay={index * 100}
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

                <button
                  onClick={() => setOpen(true)}
                  className="group bg-gradient-to-r from-[#197d85]/50 to-[#97a345]/50 text-black px-3 md:px-8 py-1 md:py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center mx-auto space-x-1 md:space-x-2"
                >
                  <span>{highlights.button}</span>
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
      </div>
      {open && <Form />}
    </div>
  );
}
