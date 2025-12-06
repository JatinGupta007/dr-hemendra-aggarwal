import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Crosshair, ShieldCheck, Scissors} from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const meniscusData = {
  icon: "/Images/treatment_icon_15.png",

  title: "Meniscus Repair & Debridement",
  subtitle: "Treat Knee Cartilage Tears with Minimally Invasive Surgery",

  about:
    "Meniscus tears are one of the most common knee injuries, often caused by twisting movements, sports injuries, or age-related wear. Meniscus Repair & Debridement are arthroscopic procedures designed to either repair the torn cartilage or trim damaged portions for smooth knee function, reduced pain, and long-term joint protection.",

  recommended: [
    "Pain or swelling on the inside or outside of the knee",
    "Knee locking, catching, or clicking sensations",
    "Difficulty squatting or twisting the knee",
    "Acute sports injuries causing cartilage tears",
    "Degenerative meniscus tears in older adults",
    "MRI-confirmed meniscus tear needing surgical care",
  ],

  modernTechniques: [
    "Arthroscopic keyhole surgery for minimal tissue damage",
    "Inside-out and all-inside meniscus repair techniques",
    "Meniscus debridement for frayed or complex tears",
    "Root repair for complete meniscus detachment",
    "Advanced suture anchors and repair devices",
    "Biologic augmentation with PRP for faster healing",
  ],

  keyBenefits: [
    {
      title: "Natural Joint Preservation",
      desc: "Repairing the meniscus protects knee cartilage and prevents early arthritis.",
    },
    {
      title: "Faster Recovery",
      desc: "Keyhole surgery ensures minimal pain and a quicker return to daily activities.",
    },
    {
      title: "Improved Knee Stability",
      desc: "Restores smooth movement and reduces locking or catching sensations.",
    },
    {
      title: "Long-Term Knee Health",
      desc: "Proper treatment reduces risk of future joint damage or chronic pain.",
    },
  ],

  services: [
    {
      title: "Meniscus Repair",
      subtitle:
        "Suturing the torn cartilage to allow natural healing—ideal for younger patients or fresh injury tears.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Meniscus Debridement",
      subtitle:
        "Trimming or smoothing damaged portions of the meniscus to relieve pain and restore movement.",
      icon: <Scissors className="w-6 h-6" />,
    },
    {
      title: "Arthroscopic Precision",
      subtitle:
        "Performed through tiny incisions with high-definition visualization for accurate treatment.",
      icon: <Crosshair className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Clinical Examination",
      desc: "Assessment of knee movement, pain points, and stability.",
    },
    {
      step: 2,
      title: "MRI & Diagnosis",
      desc: "Confirming the type and location of the meniscus tear.",
    },
    {
      step: 3,
      title: "Non-Surgical Trial (If Suitable)",
      desc: "Rest, physiotherapy, and medication for mild cases.",
    },
    {
      step: 4,
      title: "Arthroscopic Repair or Debridement",
      desc: "Keyhole surgery to repair or clean the damaged meniscus.",
    },
    {
      step: 5,
      title: "Rehabilitation Program",
      desc: "Strengthening and mobility exercises to restore full knee function.",
    },
    {
      step: 6,
      title: "Return to Activity",
      desc: "Gradual return to sports with improved confidence and stability.",
    },
  ],

  benefits: [
    "Restores knee stability and smooth movement",
    "Reduces pain, swelling, and locking sensations",
    "Minimally invasive surgery with faster healing",
    "Prevents long-term knee damage or early arthritis",
  ],

  highlights: {
    title: "Strong Knees Start with the Meniscus",
    description:
      "Protect and restore your knees with expert meniscus surgery. Our minimally invasive approach ensures quick recovery, long-term joint health, and freedom from knee pain.",
    button: "Explore Meniscus Treatment",
  },

  testimonials: [
    {
      name: "Aarav Jain",
      age: 28,
      surgery: "Meniscus Repair",
      quote:
        "My knee kept locking after a football injury. The repair surgery fixed everything—I'm back on the field again!",
      rating: 5,
    },
    {
      name: "Sanjay Sharma",
      age: 45,
      surgery: "Meniscus Debridement",
      quote:
        "Pain and stiffness were affecting my daily life. Debridement gave me instant relief and quick recovery.",
      rating: 5,
    },
    {
      name: "Neha Gupta",
      age: 32,
      surgery: "Arthroscopic Meniscus Treatment",
      quote:
        "The entire process was smooth, and my knee feels stable again. Highly recommended!",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Is meniscus repair better than removal?",
      answer:
        "Repair is preferred whenever possible because it preserves natural knee function and prevents early arthritis.",
    },
    {
      question: "How long does recovery take?",
      answer:
        "Repair may take 2–3 months for full recovery, while debridement often heals faster—within 3–6 weeks.",
    },
    {
      question: "Will I need physiotherapy?",
      answer:
        "Yes, rehabilitation is essential for restoring strength, mobility, and long-term joint stability.",
    },
    {
      question: "Can a repaired meniscus tear again?",
      answer:
        "With proper care and rehab, risk is low. Avoiding twisting movements early on helps protect healing tissue.",
    },
  ],

  keywords: [
    "Meniscus surgery Jaipur",
    "Knee cartilage repair",
    "Arthroscopic meniscus debridement",
    "Meniscus tear treatment Jaipur",
    "Keyhole meniscus surgery",
  ],
};



export default function Meniscus() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={meniscusData} />
      <Footer />
    </>
  );
}
