"use client";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react"; // Install lucide-react

export default function FaqAccordion({faqs}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-16 lg:px-0 py-16">
      <h4
        data-aos="flip-up"
        className="text-center text-[#197d85] uppercase text-xl md:text-2xl font-bold mb-2"
      >
        What People
      </h4>
      <h2
        data-aos="flip-up"
        className="text-center text-4xl md:text-6xl font-bold mb-12"
      >
        Usually Asked
      </h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-xl border border-[#d2eaef] transition-all duration-300 ${
              openIndex === index
                ? "bg-[#d2eaef] lg:translate-7 mb-16"
                : "bg-white"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full text-left px-5 py-4"
            >
              <span className="text-gray-800 text-xl">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="text-[#208ea4]" />
              ) : (
                <ChevronDown className="text-[#249ab1]" />
              )}
            </button>

            <div
              className={`transition-all px-5 overflow-hidden text-gray-600 text-lg duration-300 ${
                openIndex === index ? "max-h-60 py-2" : "max-h-0 py-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
