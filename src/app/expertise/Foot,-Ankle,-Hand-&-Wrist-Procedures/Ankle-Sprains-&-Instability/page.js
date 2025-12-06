import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { BarChart2, HeartPulse, Hammer } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const ankleInstabilityData = {
  icon: "/Images/treatment_icon_27.png",

  title: "Ankle Sprains & Instability",
  subtitle: "Rebuild Strength & Prevent Future Ankle Injuries",

  about:
    "Ankle sprains occur when the ligaments supporting the ankle stretch or tear, often due to twisting or rolling motions. If not treated properly, repeated sprains can weaken the ligaments and lead to chronic ankle instability. Timely care helps restore balance, strength, and prevents long-term problems.",

  recommended: [
    "Frequent ankle sprains",
    "Ankle giving-way during walking or sports",
    "Persistent swelling or pain after injury",
    "Difficulty balancing on uneven surfaces",
    "Ligament tears shown on MRI",
    "Instability after untreated ankle sprain",
  ],

  modernTechniques: [
    "Arthroscopic evaluation of ligament and cartilage damage",
    "Broström and modified ligament reconstruction techniques",
    "Internal brace and suture-anchor repair",
    "Tendon graft reconstruction for severe instability",
    "PRP and biologic augmentation for ligament healing",
    "Advanced physiotherapy protocols for strength & balance",
  ],

  keyBenefits: [
    {
      title: "Restored Stability",
      desc: "Rebuilds ligament strength to prevent the ankle from giving way.",
    },
    {
      title: "Faster & Safer Recovery",
      desc: "Minimally invasive options reduce swelling and speed healing.",
    },
    {
      title: "Improved Balance & Control",
      desc: "Targeted rehab enhances mobility and reduces fall risk.",
    },
    {
      title: "Prevents Re-Injury",
      desc: "Strong ligaments lower the risk of sprains during sports or walking.",
    },
    {
      title: "Return to Sports",
      desc: "Athletes safely resume training after proper recovery.",
    },
  ],

  services: [
    {
      title: "Conservative Treatment",
      subtitle:
        "RICE therapy, ankle bracing, medications, and physiotherapy to relieve pain and restore function.",
      icon: <HeartPulse className="w-6 h-6" />,
    },
    {
      title: "Minimally Invasive Surgery",
      subtitle:
        "Arthroscopic repair or ligament reconstruction for chronic or severe instability.",
      icon: <Hammer className="w-6 h-6" />,
    },
    {
      title: "Rehabilitation Programs",
      subtitle:
        "Strengthening and proprioception training to restore balance and prevent future injuries.",
      icon: <BarChart2 className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Clinical Examination",
      desc: "Assessment of ankle mobility, balance, ligament laxity, and injury history.",
    },
    {
      step: 2,
      title: "Imaging & Diagnosis",
      desc: "X-ray or MRI identifies ligament tears, swelling, and joint alignment issues.",
    },
    {
      step: 3,
      title: "Treatment Planning",
      desc: "Choosing between conservative care or surgery depending on severity.",
    },
    {
      step: 4,
      title: "Conservative / Surgical Care",
      desc: "Includes physiotherapy or ligament reconstruction for stability.",
    },
    {
      step: 5,
      title: "Rehabilitation & Strength Training",
      desc: "Balance, coordination, and strengthening exercises to restore full function.",
    },
    {
      step: 6,
      title: "Return to Activity",
      desc: "Gradual reintroduction to sports and daily tasks with medical guidance.",
    },
  ],

  benefits: [
    "Restores ankle strength and balance",
    "Reduces swelling and speeds recovery",
    "Prevents recurring ankle injuries",
    "Quick return to daily activities and sports",
  ],

  highlights: {
    title: "Get Back on Your Feet with Confidence",
    description:
      "We provide personalized care plans—from conservative management to advanced procedures—to treat ankle sprains and long-standing instability effectively.",
    button: "Schedule Ankle Evaluation",
  },

  testimonials: [
    {
      name: "Ankit Verma",
      age: 27,
      surgery: "Ankle Ligament Repair",
      quote:
        "My ankle kept twisting again and again. The reconstruction surgery helped me regain stability, and now I play sports confidently.",
      rating: 5,
    },
    {
      name: "Poonam Shastri",
      age: 34,
      surgery: "Instability Rehab",
      quote:
        "Physiotherapy and strengthening exercises made a big difference. My ankle feels strong and stable now.",
      rating: 5,
    },
    {
      name: "Rohit Sharma",
      age: 22,
      surgery: "Arthroscopic Repair",
      quote:
        "I had a severe ligament tear. The minimally invasive repair helped me recover fast without major scars.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How do I know if my ankle instability is serious?",
      answer:
        "If your ankle frequently twists or feels like it may give way, or if pain persists after a sprain, you may have chronic instability.",
    },
    {
      question: "Is surgery always needed?",
      answer:
        "No. Many cases improve with physiotherapy and bracing. Surgery is recommended only when instability continues.",
    },
    {
      question: "How long does recovery take?",
      answer:
        "Mild sprains recover in 2–4 weeks; instability surgery may take 8–12 weeks for full return to sports.",
    },
    {
      question: "Can ankle instability be cured?",
      answer:
        "Yes. With proper treatment and strengthening, most people regain full ankle stability.",
    },
    {
      question: "Can athletes return to sports after instability surgery?",
      answer:
        "Yes, most athletes return stronger after proper rehabilitation and clearance.",
    },
  ],

  keywords: [
    "ankle sprain treatment Jaipur",
    "ankle instability surgery",
    "sports injury ankle rehab",
    "best ankle surgeon near me",
    "ligament tear ankle doctor",
  ],
};



export default function AnkleInstability() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={ankleInstabilityData} />
      <Footer />
    </>
  );
}
