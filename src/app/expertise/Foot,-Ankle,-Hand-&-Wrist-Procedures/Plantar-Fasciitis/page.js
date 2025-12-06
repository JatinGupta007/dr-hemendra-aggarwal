import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Syringe, Footprints, Flame } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const plantarFasciitisData = {
  icon: "/Images/treatment_icon_25.png",

  title: "Plantar Fasciitis",
  subtitle: "Heel Pain Relief for a Comfortable Step Forward",

  about:
    "Plantar Fasciitis is one of the most common causes of heel pain. It happens due to inflammation of the plantar fascia — the strong tissue band supporting your foot arch. This condition causes sharp, stabbing heel pain, especially during the first steps in the morning or after long periods of standing. Early treatment prevents chronic pain and supports normal foot mechanics.",

  recommended: [
    "Sharp heel pain, especially during first morning steps",
    "Foot pain after long standing or walking",
    "Tight calf muscles causing pressure on the heel",
    "Foot arch problems such as flat feet or high arches",
    "Athletes or runners with repeated strain",
    "Failure of home remedies or persistent pain for weeks",
  ],

  modernTechniques: [
    "High-energy shockwave therapy for fast healing",
    "Ultrasound-guided steroid or PRP injections",
    "Custom orthotic arch supports for alignment",
    "Minimally invasive plantar fascia release",
    "Gait analysis for correcting mechanical strain",
    "Advanced physiotherapy targeting fascia tension",
  ],

  keyBenefits: [
    {
      title: "Reduces Sharp Heel Pain",
      desc: "Targets the inflamed fascia to reduce morning and activity-related pain.",
    },
    {
      title: "Restores Normal Walking",
      desc: "Improves mobility, allowing comfortable daily movement.",
    },
    {
      title: "Long-Term Relief",
      desc: "Advanced therapies prevent recurrence and chronic strain.",
    },
    {
      title: "Supports Foot Alignment",
      desc: "Custom orthotics correct arch issues and distribute pressure evenly.",
    },
    {
      title: "Minimally Invasive Options",
      desc: "Many treatments require no surgery and have quick recovery.",
    },
  ],

  services: [
    {
      title: "Non-Surgical Care",
      subtitle:
        "Rest, ice, physiotherapy, stretching routines, and anti-inflammatory medication to reduce pain and tissue tension.",
      icon: <Footprints className="w-6 h-6" />,
    },
    {
      title: "Advanced Therapies",
      subtitle:
        "Shockwave therapy, PRP injections, and steroid injections for moderate to severe plantar fasciitis that does not respond to basic treatment.",
      icon: <Flame className="w-6 h-6" />,
    },
    {
      title: "Surgical Intervention",
      subtitle:
        "Rarely needed; minimally invasive plantar fascia release for chronic, severe cases that resist all conservative options.",
      icon: <Syringe className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Foot Assessment",
      desc: "Examination of heel tenderness, arch structure, and walking pattern.",
    },
    {
      step: 2,
      title: "Imaging & Diagnosis",
      desc: "Ultrasound or X-ray to rule out bone spurs or other heel conditions.",
    },
    {
      step: 3,
      title: "Initial Conservative Care",
      desc: "Stretching exercises, pain management, and footwear modification.",
    },
    {
      step: 4,
      title: "Advanced Treatment",
      desc: "Shockwave therapy or injections to boost healing of the plantar fascia.",
    },
    {
      step: 5,
      title: "Rehabilitation",
      desc: "Strengthening of foot muscles, calf stretching, and orthotic support.",
    },
    {
      step: 6,
      title: "Return to Activity",
      desc: "Gradual increase in walking, running, and sports with guided progress.",
    },
  ],

  benefits: [
    "Reduces sharp heel pain and swelling",
    "Enables walking and running without discomfort",
    "Supports foot alignment with custom orthotics",
    "Minimally invasive treatments available",
  ],

  highlights: {
    title: "Walk Without Pain Again",
    description:
      "Our personalized plantar fasciitis treatment plans focus on long-term relief and mobility restoration so you can move freely without heel pain holding you back.",
    button: "Schedule Your Foot Assessment",
  },

  testimonials: [
    {
      name: "Pooja Rathore",
      age: 37,
      surgery: "Shockwave Therapy",
      quote:
        "My heel pain was unbearable in the mornings. Shockwave therapy gave me amazing relief, and I’m back to my daily walks.",
      rating: 5,
    },
    {
      name: "Amit Tiwari",
      age: 42,
      surgery: "Physiotherapy & Orthotics",
      quote:
        "Custom insoles and stretching exercises completely changed my foot comfort. I can stand for hours without pain now.",
      rating: 5,
    },
    {
      name: "Sarika Jain",
      age: 50,
      surgery: "Injection Therapy",
      quote:
        "The pain had lasted for months. One guided injection followed by exercises worked wonders for me.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Is plantar fasciitis permanent?",
      answer:
        "No. With proper treatment, over 90% of patients recover fully without surgery.",
    },
    {
      question: "Does heel pain mean I need surgery?",
      answer:
        "Surgery is rarely needed. Most cases improve with physiotherapy, orthotics, and advanced non-surgical therapies.",
    },
    {
      question: "How long does recovery take?",
      answer:
        "Most people improve significantly within 4–8 weeks, depending on severity and adherence to exercises.",
    },
    {
      question: "Do orthotics really help?",
      answer:
        "Yes. Custom orthotics support the arch, reduce pressure, and prevent recurrence.",
    },
    {
      question: "Is shockwave therapy safe?",
      answer:
        "Yes. It is a non-invasive, evidence-based treatment that accelerates healing for chronic plantar fasciitis.",
    },
  ],

  keywords: [
    "Plantar fasciitis treatment Jaipur",
    "Heel pain specialist near me",
    "Foot pain orthopedic doctor",
    "Best orthotics for heel pain",
    "Shockwave therapy plantar fasciitis",
  ],
};



export default function PlantarFasciitis() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={plantarFasciitisData} />
      <Footer />
    </>
  );
}
