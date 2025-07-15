"use client";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react"; // Install lucide-react

const faqs = [
  {
    question: "What is the cost of knee replacement surgery in Jaipur?",
    answer:
      "ProHealth provides a wide range of medical and healthcare services including diagnostics, consultations, treatments, and surgeries.",
  },
  {
    question: "Do I need surgery for ligament tear or can it heal naturally?",
    answer:
      "You can schedule an appointment via our website or by calling our front desk during business hours.",
  },
  {
    question: "Is arthroscopy better than open surgery?",
    answer:
      "Yes, we accept most major insurance providers. Please contact us with your policy details to confirm.",
  },
  {
    question: "What recovery can I expect after joint replacement?",
    answer:
      "Please bring your ID, insurance card, past medical records (if any), and a list of current medications.",
  },
  {
    question: "Which orthopedic doctor is best in Jaipur for sports injuries?",
    answer:
      "Please bring your ID, insurance card, past medical records (if any), and a list of current medications.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h4 className="text-center text-blue-600 uppercase text-xl font-semibold mb-2">
        What People
      </h4>
      <h2 className="text-center text-3xl md:text-6xl font-bold mb-16">
        Usually Asked
      </h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-xl border border-[#d2eaef] transition-all duration-300 ${
              openIndex === index ? "bg-[#d2eaef] translate-7 mb-16" : "bg-white"
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
