import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Hammer, Bone, Stethoscope } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const polytraumaData = {
  icon: "/Images/treatment_icon_18.png",

  title: "Complex Polytrauma Surgeries",
  subtitle: "Comprehensive Care for Multiple Severe Injuries",

  about:
    "Complex polytrauma involves multiple severe injuries occurring at the same time—often due to road accidents, high-impact falls, or industrial trauma. These cases require rapid stabilization, coordinated multi-specialty care, and staged surgical procedures to save lives, restore function, and ensure long-term recovery.",

  recommended: [
    "Multiple fractures or crush injuries",
    "Severe road traffic accidents",
    "High-energy trauma affecting limbs and joints",
    "Combined injuries involving bones, soft tissues, and nerves",
    "Patients requiring staged surgeries for stabilization & recovery",
    "Polytrauma requiring ICU support and coordinated care",
  ],

  modernTechniques: [
    "Damage Control Orthopedics (DCO) for rapid stabilization",
    "External fixators for early fracture control",
    "Internal fixation using rods, plates, and screws",
    "3D imaging and CT-guided surgical planning",
    "Advanced soft tissue, nerve, and vessel repair",
    "Reconstruction procedures for long-term limb function",
    "Early physiotherapy and enhanced recovery protocols",
  ],

  keyBenefits: [
    {
      title: "Life-Saving Stabilization",
      desc: "Immediate fracture control to prevent shock, bleeding, and further injury.",
    },
    {
      title: "Coordinated Multi-Specialty Care",
      desc: "Expert collaboration ensures every injury is treated appropriately and promptly.",
    },
    {
      title: "Reduced Long-Term Disability",
      desc: "Timely, accurate surgical management preserves limb function and mobility.",
    },
    {
      title: "Faster & Safer Recovery",
      desc: "Stage-wise treatment allows safe rehabilitation and improved long-term outcomes.",
    },
    {
      title: "Comprehensive Rehabilitation",
      desc: "Dedicated physiotherapy ensures muscle recovery, balance, and return to daily life.",
    },
  ],

  services: [
    {
      title: "Damage Control Orthopedics (DCO)",
      subtitle:
        "Early stabilization of severe fractures using external fixators to control bleeding, swelling, and prevent further trauma.",
      icon: <Hammer className="w-6 h-6" />,
    },
    {
      title: "Definitive Fixation & Reconstruction",
      subtitle:
        "Definitive surgery using internal fixation (plates, screws, rods) along with soft tissue repair once the patient is stable.",
      icon: <Bone className="w-6 h-6" />,
    },
    {
      title: "Joint & Soft Tissue Recovery",
      subtitle:
        "Reconstruction of joints, tendons, ligaments, and nerves to maximize long-term function and limb restoration.",
      icon: <Stethoscope className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Emergency Stabilization",
      desc: "Airway, breathing, circulation, and initial fracture stabilization to save life and prevent deterioration.",
    },
    {
      step: 2,
      title: "Diagnostic Assessment",
      desc: "CT scans, X-rays, and blood tests to map all injuries and plan staged surgeries.",
    },
    {
      step: 3,
      title: "Damage Control Surgery",
      desc: "External fixation, wound care, and hemorrhage control during the initial critical period.",
    },
    {
      step: 4,
      title: "Definitive Reconstruction",
      desc: "Internal fixation, joint reconstruction, and soft tissue repair once the patient is physiologically stable.",
    },
    {
      step: 5,
      title: "Rehabilitation Phase",
      desc: "Intensive physiotherapy to improve mobility, muscle strength, and joint function.",
    },
    {
      step: 6,
      title: "Long-Term Recovery",
      desc: "Regular follow-up, functional assessment, and specialized care for complete recovery.",
    },
  ],

  benefits: [
    "Life-saving early stabilization of critical injuries",
    "Reduces long-term disability through expert surgical care",
    "Enables faster recovery with targeted treatment plans",
    "Team-based approach ensures full-body rehabilitation",
  ],

  highlights: {
    title: "Saving Lives, Restoring Function",
    description:
      "Our polytrauma team specializes in critical injury management—ensuring every fracture, ligament, and soft tissue injury is treated with precision. From emergency stabilization to complete rehabilitation, we support patients at every stage.",
    button: "Learn More About Trauma Recovery",
  },

  testimonials: [
    {
      name: "Raghav Sharma",
      age: 35,
      surgery: "Multiple Fracture Reconstruction",
      quote:
        "A severe accident left me with multiple fractures. The coordinated treatment and surgeries saved my life and restored my mobility. Truly grateful.",
      rating: 5,
    },
    {
      name: "Meena Solanki",
      age: 28,
      surgery: "Pelvis + Leg Reconstruction",
      quote:
        "The trauma team handled my injuries with great skill. The recovery plan helped me walk again within months.",
      rating: 5,
    },
    {
      name: "Tarun Verma",
      age: 42,
      surgery: "Damage Control + Definitive Fixation",
      quote:
        "Their quick decision-making and expert surgical care ensured the best outcome after my accident.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "What is polytrauma?",
      answer:
        "Polytrauma refers to multiple severe injuries occurring simultaneously, requiring rapid and coordinated multi-specialty treatment.",
    },
    {
      question: "What is Damage Control Orthopedics?",
      answer:
        "DCO is an early-stage procedure focusing on temporary stabilization to prevent further injury during the critical phase.",
    },
    {
      question: "How long does polytrauma recovery take?",
      answer:
        "Recovery varies depending on injuries but can range from weeks to several months, followed by rehabilitation.",
    },
    {
      question: "Do all polytrauma patients require surgery?",
      answer:
        "Most serious polytrauma cases do require staged surgeries, but the exact plan depends on injury severity and patient stability.",
    },
    {
      question: "Is rehabilitation necessary?",
      answer:
        "Yes. Physiotherapy is crucial for regaining strength, mobility, and long-term function after polytrauma surgeries.",
    },
  ],

  keywords: [
    "Polytrauma surgeon Jaipur",
    "Multiple fracture treatment Rajasthan",
    "Road accident injury hospital",
    "Orthopedic trauma surgery Jaipur",
    "Complex injury rehabilitation specialist",
  ],
};



export default function ComplexPolytraumaSurgeries() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={polytraumaData} />
      <Footer />
    </>
  );
}
