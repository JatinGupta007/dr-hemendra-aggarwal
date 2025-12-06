import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import {Activity, Zap, Eye, Stethoscope} from 'lucide-react'
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const jointReplacementData = {
  icon: "/Images/treatment_icon_1.png",

  title: "Joint Replacement",
  subtitle: "Total & Partial Knee Replacement",

  about:
    "Total and Partial Knee Replacement surgeries are performed to relieve severe knee pain, stiffness, and reduced mobility caused by arthritis or injury. The damaged knee joint surfaces are replaced with artificial components that restore natural movement and long-term comfort.",

  recommended: [
    "Severe knee arthritis (osteoarthritis, rheumatoid arthritis)",
    "Chronic knee pain not relieved by medications or physiotherapy",
    "Difficulty walking, climbing stairs, or standing for long periods",
    "Knee deformities such as bow-legs or knock-knees",
    "Joint damage due to injury or degeneration",
    "Failure of non-surgical treatments",
  ],

  modernTechniques: [
    "Minimally invasive surgical approaches",
    "Computer-assisted and navigation-guided knee replacement",
    "Patient-specific implants and 3D planning",
    "High-flexion implants for improved movement",
    "Robotic-assisted knee replacement for precision",
    "Cemented and cementless fixation techniques",
  ],

  keyBenefits: [
    {
      title: "Significant Pain Relief",
      desc: "Reduces or eliminates long-standing knee pain from arthritis or joint damage.",
    },
    {
      title: "Improved Mobility",
      desc: "Restores smooth walking, bending, and daily function.",
    },
    {
      title: "Fast Recovery",
      desc: "Enhanced rehabilitation allows early walking within 24–48 hours.",
    },
    {
      title: "Custom-Fit Implants",
      desc: "Modern designs ensure natural movement and long-lasting durability.",
    },
    {
      title: "Better Quality of Life",
      desc: "Allows return to normal daily activities with comfort and confidence.",
    },
  ],

  services: [
    {
      title: "Why is Knee Replacement Needed?",
      subtitle:
        "Recommended for patients with severe arthritis, deformities, chronic pain, or injury-related joint damage.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Total Knee Replacement (TKR)",
      subtitle:
        "The entire knee joint is replaced — ideal for advanced arthritis affecting all knee compartments.",
      icon: <Stethoscope className="w-6 h-6" />,
    },
    {
      title: "Partial Knee Replacement (PKR)",
      subtitle:
        "Only the damaged part of the knee is replaced, preserving healthy bone and ligaments.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Surgical Approach",
      subtitle:
        "Performed under advanced anesthesia with precise implant placement using imaging and navigation tools.",
      icon: <Eye className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Orthopedic Examination",
      desc: "Assessment of knee pain, mobility, deformity, and joint wear.",
    },
    {
      step: 2,
      title: "Imaging & Diagnosis",
      desc: "X-rays and MRI to evaluate the extent of damage and decide TKR or PKR.",
    },
    {
      step: 3,
      title: "Personalized Treatment Plan",
      desc: "Planning implant type, size, and surgical technique tailored to patient needs.",
    },
    {
      step: 4,
      title: "Knee Replacement Surgery",
      desc: "Minimally invasive Total or Partial Knee Replacement performed with precision.",
    },
    {
      step: 5,
      title: "Post-Surgery Care",
      desc: "Pain management, wound care, and early mobilization.",
    },
    {
      step: 6,
      title: "Rehabilitation & Physiotherapy",
      desc: "Structured exercises to restore strength, flexibility, and comfort.",
    },
    {
      step: 7,
      title: "Long-Term Follow-Up",
      desc: "Regular checkups to monitor implant performance and knee health.",
    },
  ],

  benefits: [
    "Significant pain relief",
    "Improved mobility and flexibility",
    "Faster recovery with minimally invasive techniques",
    "Long-lasting results with high-quality implants",
  ],

  highlights: {
    title: "Expert Knee Replacement in Jaipur",
    description:
      "Dr. Hemendra Agrawal performs Total and Partial Knee Replacement surgeries using advanced imaging, precision tools, and minimally invasive methods. Each procedure is tailored for optimal recovery and long-term success.",
    button: "Explore Knee Replacement Options",
  },

  testimonials: [
    {
      name: "Rakesh Gupta",
      age: 63,
      surgery: "Total Knee Replacement",
      quote:
        "I couldn’t walk without pain for years. After TKR, I was walking with support the next day. The results are amazing and life-changing!",
      rating: 5,
    },
    {
      name: "Sushila Devi",
      age: 58,
      surgery: "Partial Knee Replacement",
      quote:
        "My pain was only on one side of the knee. PKR helped me recover very fast. I’m back to daily activities comfortably.",
      rating: 5,
    },
    {
      name: "Vimal Kumar",
      age: 70,
      surgery: "Knee Deformity Correction",
      quote:
        "My knees were bent and painful. After surgery, the alignment improved and the pain disappeared. Excellent care!",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Which is better — Total or Partial Knee Replacement?",
      answer:
        "It depends on the extent of damage. PKR is ideal when only one part of the knee is affected, while TKR is recommended for total joint degeneration.",
    },
    {
      question: "How long do knee implants last?",
      answer:
        "Modern implants last 15–25 years or more with proper care and activity levels.",
    },
    {
      question: "When can I walk after surgery?",
      answer:
        "Most patients begin walking with support within 24–48 hours after surgery.",
    },
    {
      question: "Is knee replacement painful?",
      answer:
        "Advanced anesthesia and pain management make the procedure and recovery much more comfortable.",
    },
    {
      question: "Can I climb stairs after knee replacement?",
      answer:
        "Yes. Patients gradually return to stair climbing within weeks as strength improves.",
    },
  ],

  keywords: [
    "total knee replacement Jaipur",
    "partial knee replacement Jaipur",
    "best knee replacement surgeon in Jaipur",
    "joint replacement surgery Jaipur",
    "orthopedic surgeon Jaipur",
  ],
};



export default function TotalKneeReplacement(){
  return(
    <>
    <Navbar />
    <SpecificExpertise data={jointReplacementData} />
    <Footer />
    </>
  )
}
