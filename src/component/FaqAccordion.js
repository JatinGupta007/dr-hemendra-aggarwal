"use client";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react"; // Install lucide-react

const faqs = [
  {
    question: "What is the cost of knee replacement surgery in Jaipur?",
    answer:
      "The cost of knee replacement surgery varies depending on the type of implant, procedure, and hospital. At a reputable orthopaedic clinic, an experienced orthopaedic doctor will assess your condition and recommend the most suitable and cost-effective treatment plan for long-term relief.",
  },
  {
    question: "Do I need surgery for ligament tear or can it heal naturally?",
    answer:
      "Some ligament tears may heal with rest and physiotherapy, while others—especially complete tears-may require surgery. Consulting a skilled orthopedic in Jaipur helps determine the right approach based on your condition, activity level, and recovery goals.",
  },
  {
    question: "Is arthroscopy better than open surgery?",
    answer:
      "Yes, arthroscopy is often a better option due to its minimally invasive nature, quicker recovery, and reduced risk of complications. A trained surgeon at a leading orthopaedic clinic can recommend arthroscopy for various joint issues, including ligament tears and cartilage damage.",
  },
  {
    question: "What recovery can I expect after joint replacement?",
    answer:
      "After joint replacement, patients typically begin recovery within a few days, with improvements in mobility and pain relief over the following weeks. An expert orthopaedic doctor provides a tailored rehabilitation plan to ensure safe, effective healing and faster return to normal activities.",
  },
  {
    question: "Which orthopedic doctor is best in Jaipur for sports injuries?",
    answer:
      "The best orthopedic in Jaipur for sports injuries is one with expertise in arthroscopy, sports medicine, and minimally invasive surgery. A knowledgeable orthopaedic doctor ensures accurate diagnosis and a customized treatment plan to restore strength and function efficiently.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h4 className="text-center text-blue-600 uppercase text-2xl font-semibold mb-2">
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
