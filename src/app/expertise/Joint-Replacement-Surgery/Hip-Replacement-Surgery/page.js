import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Activity, Zap, Eye, Stethoscope } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const hipReplacementData = {
  icon: "/Images/treatment_icon_9.png",

  title: "Hip Replacement",
  subtitle: "Restoring Mobility & Comfort",

  about:
    "Hip Replacement Surgery is a highly effective orthopedic procedure performed to replace a damaged or worn-out hip joint with an artificial implant. It is recommended when hip pain, stiffness, or restricted movement affects daily life and non-surgical treatments fail.",

  recommended: [
    "Severe hip pain that limits walking or standing",
    "Chronic hip stiffness reducing mobility",
    "Hip arthritis (osteoarthritis, rheumatoid arthritis)",
    "Avascular necrosis causing bone collapse",
    "Hip fractures not suitable for fixation",
    "Failure to improve with physiotherapy or medications",
  ],

  modernTechniques: [
    "Minimally invasive hip replacement surgery",
    "Robotic-assisted hip replacement",
    "Ceramic-on-ceramic and metal-free implants",
    "Cementless biologic fixation for long-term durability",
    "3D planning & patient-specific implant positioning",
    "Enhanced recovery protocols for faster rehabilitation",
  ],

  keyBenefits: [
    {
      title: "Pain-Free Movement",
      desc: "Hip pain caused by arthritis, fractures, or degeneration is significantly reduced.",
    },
    {
      title: "Improved Mobility",
      desc: "Restores smooth walking, sitting, bending, and daily movements.",
    },
    {
      title: "Quick Recovery",
      desc: "Modern minimally invasive techniques help patients walk within 1–2 days.",
    },
    {
      title: "Durable Implants",
      desc: "Advanced implants last 15–25 years or more with proper care.",
    },
    {
      title: "Better Quality of Life",
      desc: "Helps elderly and active adults regain independence and comfort.",
    },
  ],

  services: [
    {
      title: "When is Hip Replacement Needed?",
      subtitle:
        "Recommended for severe arthritis, hip fractures, avascular necrosis, or long-term pain limiting mobility.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Total Hip Replacement",
      subtitle:
        "Replaces both the ball (femoral head) and socket (acetabulum) with artificial components.",
      icon: <Stethoscope className="w-6 h-6" />,
    },
    {
      title: "Partial Hip Replacement",
      subtitle:
        "Replaces only the femoral head while preserving the natural hip socket.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Surgical Procedure",
      subtitle:
        "Performed under anesthesia; damaged bone is replaced with metal, ceramic, or polymer implants.",
      icon: <Eye className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Orthopedic Evaluation",
      desc: "Assessment of hip pain, mobility, joint stiffness, and X-rays.",
    },
    {
      step: 2,
      title: "Advanced Imaging",
      desc: "X-ray, CT, or MRI to assess joint damage and plan surgery.",
    },
    {
      step: 3,
      title: "Customized Surgical Plan",
      desc: "Implant and approach selection based on age, condition, and lifestyle.",
    },
    {
      step: 4,
      title: "Hip Replacement Surgery",
      desc: "Minimally invasive or robotic-assisted procedure for precise implant placement.",
    },
    {
      step: 5,
      title: "Post-Operative Care",
      desc: "Pain control, wound care, and early walking within 24–48 hours.",
    },
    {
      step: 6,
      title: "Rehabilitation & Strength Building",
      desc: "Physiotherapy to restore mobility, strength, and balance.",
    },
    {
      step: 7,
      title: "Long-Term Follow-Up",
      desc: "Regular monitoring to ensure implant longevity and hip health.",
    },
  ],

  benefits: [
    "Long-term pain relief",
    "Improved walking ability",
    "Fast recovery with enhanced rehab protocols",
    "Durable, modern implants",
  ],

  highlights: {
    title: "Advanced Hip Replacement in Jaipur",
    description:
      "Offering precise hip replacement surgeries for arthritis, fractures, and chronic joint damage using modern implants and surgical techniques. Start walking within days after surgery with guided rehab.",
    button: "Discover Hip Replacement Solutions",
  },

  testimonials: [
    {
      name: "Mahesh Verma",
      age: 65,
      surgery: "Total Hip Replacement",
      quote:
        "I was unable to walk without pain for years. After the surgery, I started walking the very next day. My life has completely changed.",
      rating: 5,
    },
    {
      name: "Rekha Sharma",
      age: 59,
      surgery: "Partial Hip Replacement",
      quote:
        "My hip fracture made movement impossible. Thanks to Dr. Agarwal, I recovered quickly and can walk comfortably now.",
      rating: 5,
    },
    {
      name: "Om Prakash",
      age: 72,
      surgery: "Hip Osteoarthritis Treatment",
      quote:
        "I had severe arthritis and could barely climb stairs. Hip replacement helped me regain my independence.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How long do hip implants last?",
      answer:
        "Most modern hip implants last 15–25 years or more depending on activity level, bone quality, and implant material.",
    },
    {
      question: "When can I walk after hip replacement?",
      answer:
        "Most patients begin walking with support within 24–48 hours after surgery.",
    },
    {
      question: "Is hip replacement safe?",
      answer:
        "Yes. It is one of the most successful orthopedic surgeries with high success rates and quick recovery when performed by an experienced surgeon.",
    },
    {
      question: "Will I need physiotherapy?",
      answer:
        "Yes, physiotherapy plays a key role in restoring movement, strength, and balance after surgery.",
    },
    {
      question: "What activities can I do after surgery?",
      answer:
        "Most patients return to walking, light exercise, cycling, and daily activities within weeks. High-impact sports may require medical clearance.",
    },
  ],

  keywords: [
    "hip replacement surgery Jaipur",
    "total hip replacement Jaipur",
    "partial hip replacement Jaipur",
    "hip joint pain treatment Jaipur",
    "orthopedic hip surgeon Jaipur",
  ],
};


export default function HipReplacement() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={hipReplacementData} />
      <Footer />
    </>
  );
}
