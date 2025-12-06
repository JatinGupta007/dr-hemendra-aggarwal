import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Activity, Zap, Eye, Stethoscope } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const shoulderElbowReplacementData = {
  icon: "/Images/treatment_icon_6.png",

  title: "Shoulder & Elbow Replacement",
  subtitle: "Advanced Joint Replacement Surgery",

  about:
    "Shoulder and Elbow Replacement surgeries are advanced orthopedic procedures designed to replace damaged joint surfaces with artificial implants. These procedures are ideal for patients experiencing severe pain, stiffness, arthritis, fractures, or failed previous surgeries, helping restore mobility, function, and comfort.",

  recommended: [
    "Severe shoulder or elbow arthritis",
    "Chronic pain not relieved by medications or physiotherapy",
    "Complex fractures that cannot be repaired",
    "Irreparable rotator cuff tears with arthritis",
    "Stiffness or deformity limiting daily activities",
    "Failed previous joint surgeries",
  ],

  modernTechniques: [
    "Minimally invasive and muscle-sparing approaches",
    "3D imaging and planning for precise implant alignment",
    "Total, partial, and hemi joint replacement options",
    "Advanced prosthetic materials for durability and mobility",
    "Computer-guided and navigation-assisted surgeries",
    "Anatomical and reverse shoulder implant options",
  ],

  keyBenefits: [
    {
      title: "Pain-Free Joint Movement",
      desc: "Eliminates chronic pain caused by arthritis or joint degeneration.",
    },
    {
      title: "Improved Range of Motion",
      desc: "Restores everyday movements such as lifting, bending, and rotating.",
    },
    {
      title: "Better Joint Strength",
      desc: "Re-establishes stability and functional power in the arm.",
    },
    {
      title: "Faster Rehabilitation",
      desc: "Modern surgical techniques shorten hospital stay and recovery time.",
    },
    {
      title: "Durable Implant Performance",
      desc: "High-quality prosthetics ensure long-lasting joint function.",
    },
  ],

  services: [
    {
      title: "When is it Needed?",
      subtitle:
        "Recommended for arthritis, complex fractures, chronic pain, stiffness, or unsuccessful previous surgeries.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Total Shoulder Replacement",
      subtitle:
        "Both the ball and socket are replaced with prosthetic components.",
      icon: <Stethoscope className="w-6 h-6" />,
    },
    {
      title: "Partial Shoulder Replacement",
      subtitle:
        "Only the damaged part of the shoulder is replaced, preserving healthy bone.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Total Elbow Replacement",
      subtitle:
        "Complete elbow joint replaced with durable prosthetic components to restore movement.",
      icon: <Eye className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Detailed Joint Evaluation",
      desc: "Assessment of shoulder and elbow mobility, pain, and structural damage.",
    },
    {
      step: 2,
      title: "Imaging & Diagnosis",
      desc: "X-ray, CT, or MRI scans to determine joint condition and treatment approach.",
    },
    {
      step: 3,
      title: "Customized Surgical Planning",
      desc: "Selecting the right implant type and surgical method based on the patient’s needs.",
    },
    {
      step: 4,
      title: "Joint Replacement Surgery",
      desc: "Procedure performed using advanced techniques for optimal precision and comfort.",
    },
    {
      step: 5,
      title: "Pain Management & Early Movement",
      desc: "Use of nerve blocks and early mobility exercises for smooth recovery.",
    },
    {
      step: 6,
      title: "Physiotherapy & Strength Restoration",
      desc: "Guided rehab to improve mobility, strength, and functional use.",
    },
    {
      step: 7,
      title: "Long-Term Recovery & Follow-Up",
      desc: "Regular checkups to ensure proper healing and long-term joint performance.",
    },
  ],

  benefits: [
    "Significant pain relief and improved arm function",
    "Restored range of motion and strength",
    "Faster recovery with modern surgical techniques",
    "Long-lasting and stable joint performance",
  ],

  highlights: {
    title: "Shoulder & Elbow Replacement in Jaipur",
    description:
      "Specialized surgeries for arthritis, trauma, and degenerative joint issues using durable prosthetics and expert techniques to ensure lasting results and faster recovery.",
    button: "Explore Shoulder & Elbow Care",
  },

  testimonials: [
    {
      name: "Ajay Verma",
      age: 55,
      surgery: "Total Shoulder Replacement",
      quote:
        "I suffered from severe shoulder arthritis for years. The surgery restored my mobility completely. Now I can lift my arm without any pain.",
      rating: 5,
    },
    {
      name: "Suman Jain",
      age: 62,
      surgery: "Elbow Replacement",
      quote:
        "My elbow fracture caused unbearable pain. After the replacement, I regained strength and movement. Very grateful for the expert care!",
      rating: 5,
    },
    {
      name: "Kailash Singh",
      age: 48,
      surgery: "Partial Shoulder Replacement",
      quote:
        "My shoulder pain was affecting daily activities. The surgery and rehab improved my ability to work and exercise again.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How long do shoulder and elbow implants last?",
      answer:
        "Most modern implants last 15–20 years or more depending on activity levels and care.",
    },
    {
      question: "Will I regain full movement after surgery?",
      answer:
        "Most patients regain excellent shoulder and elbow movement with proper rehabilitation.",
    },
    {
      question: "Is joint replacement safe?",
      answer:
        "Yes. These surgeries are highly safe and effective when performed by experienced orthopedic surgeons.",
    },
    {
      question: "How soon can I use my arm?",
      answer:
        "Light movement begins within days, while full recovery may take 6–12 weeks depending on the procedure.",
    },
    {
      question: "Is physiotherapy necessary?",
      answer:
        "Yes, physiotherapy is essential to restore strength, rotation, and functional motion.",
    },
  ],

  keywords: [
    "shoulder replacement Jaipur",
    "elbow replacement Jaipur",
    "orthopedic joint replacement Jaipur",
    "shoulder pain surgery Jaipur",
    "elbow arthritis treatment Jaipur",
  ],
};


export default function ShoulderAndElbowReplacement() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={shoulderElbowReplacementData} />
      <Footer />
    </>
  );
}
