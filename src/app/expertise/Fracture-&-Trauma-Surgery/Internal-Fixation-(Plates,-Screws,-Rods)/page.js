import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Wrench, Hammer, MoveRight } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const internalFixationData = {
  icon: "/Images/treatment_icon_16.png",

  title: "Internal Fixation (Plates, Screws, Rods)",
  subtitle: "Surgical Bone Stabilization with Durable Implants",

  about:
    "Internal Fixation is an advanced orthopedic surgical method used to stabilize and align fractured bones using metal implants such as plates, screws, rods, or wires. This technique ensures accurate bone healing, allows early mobility, and reduces complications compared to traditional casting. It is especially useful for complex, unstable, or multi-fragment fractures.",

  recommended: [
    "Unstable or displaced fractures",
    "Complex fractures involving multiple bone fragments",
    "Fractures that cannot heal properly with casts alone",
    "Open fractures requiring surgical stabilization",
    "Fractures of major bones like femur, tibia, humerus, or forearm",
    "Patients needing early mobilization (athletes, elderly, workers)",
  ],

  modernTechniques: [
    "Locking plates and screws for high stability",
    "Intramedullary nailing for long bone fractures",
    "Mini-fragment plates for wrist, hand, and foot fractures",
    "Percutaneous fixation with minimal incisions",
    "Biocompatible titanium and stainless-steel implants",
    "Fluoroscopy-guided accurate implant placement",
  ],

  keyBenefits: [
    {
      title: "Strong & Stable Fixation",
      desc: "Provides rigid support to fractured bones for reliable healing.",
    },
    {
      title: "Early Movement",
      desc: "Allows patients to move joints sooner, preventing stiffness and muscle loss.",
    },
    {
      title: "Accurate Bone Alignment",
      desc: "Reduces the risk of deformity or improper healing.",
    },
    {
      title: "Durable Implants",
      desc: "High-quality materials offer long-term stability and comfort.",
    },
    {
      title: "Better Recovery Outcomes",
      desc: "Improves functional performance and reduces long-term disability.",
    },
  ],

  services: [
    {
      title: "Plates and Screws",
      subtitle:
        "Robust metal plates and screws are placed along the bone to hold fracture fragments in perfect alignment.",
      icon: <Hammer className="w-6 h-6" />,
    },
    {
      title: "Intramedullary Rods or Nails",
      subtitle:
        "Long rods inserted into the central bone canal to stabilize large bones like the femur, tibia, and humerus.",
      icon: <MoveRight className="w-6 h-6" />,
    },
    {
      title: "Pins and Wires",
      subtitle:
        "Lightweight fixation devices ideal for small bone fractures in the hand, wrist, foot, or ankle.",
      icon: <Wrench className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Fracture Assessment",
      desc: "Detailed X-rays or CT scans to evaluate bone displacement and plan fixation.",
    },
    {
      step: 2,
      title: "Pre-Surgery Preparation",
      desc: "Stabilization, pain control, and surgical planning depending on fracture type.",
    },
    {
      step: 3,
      title: "Internal Fixation Surgery",
      desc: "Precise placement of plates, screws, nails, or wires to stabilize the bone.",
    },
    {
      step: 4,
      title: "Post-Operative Monitoring",
      desc: "Pain management, wound care, and early movement under supervision.",
    },
    {
      step: 5,
      title: "Rehabilitation",
      desc: "Physiotherapy to restore joint motion, strength, and functional ability.",
    },
    {
      step: 6,
      title: "Long-Term Healing",
      desc: "Periodic X-rays to ensure proper bone union and implant stability.",
    },
  ],

  benefits: [
    "Provides strong stabilization for complex fractures",
    "Allows early movement and functional recovery",
    "Prevents deformities and promotes accurate bone healing",
    "Durable implants ensure long-term support",
  ],

  highlights: {
    title: "Reliable Bone Healing Through Advanced Fixation",
    description:
      "Our internal fixation procedures use high-quality implants to ensure your bones heal safely and correctly, helping you get back to your normal routine faster.",
    button: "Learn About Bone Fixation",
  },

  testimonials: [
    {
      name: "Suresh Sharma",
      age: 48,
      surgery: "Femur Intramedullary Nailing",
      quote:
        "The surgery stabilized my fracture perfectly. I was able to walk with support much sooner than expected.",
      rating: 5,
    },
    {
      name: "Nidhi Verma",
      age: 32,
      surgery: "Wrist Plate Fixation",
      quote:
        "My wrist fracture healed beautifully. Mobility and strength came back quicker than expected.",
      rating: 5,
    },
    {
      name: "Raj Kumar",
      age: 55,
      surgery: "Tibia Plate & Screw Fixation",
      quote:
        "Excellent care and a smooth recovery. The implant feels stable and pain-free.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Are the implants permanent?",
      answer:
        "In many cases, yes. Plates and screws may remain lifelong unless they cause discomfort or require removal.",
    },
    {
      question: "Is internal fixation safe?",
      answer:
        "Yes. It is a widely used and highly effective procedure for stabilizing fractures with excellent outcomes.",
    },
    {
      question: "How long does recovery take?",
      answer:
        "Bone healing usually takes 6–12 weeks, depending on fracture severity and patient health.",
    },
    {
      question: "Will I be able to walk after the surgery?",
      answer:
        "Most patients can start partial weight-bearing soon after surgery based on medical advice.",
    },
    {
      question: "Do implants set off metal detectors?",
      answer:
        "Some may, but most orthopedic implants do not trigger detectors. It depends on material type and location.",
    },
  ],

  keywords: [
    "Internal fixation surgery Jaipur",
    "Plates and screws orthopedic treatment",
    "Intramedullary nail fracture repair",
    "Rod and screw fracture fixation",
    "Orthopedic implant surgery Rajasthan",
  ],
};



export default function InternalFixation() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={internalFixationData} />
      <Footer />
    </>
  );
}
