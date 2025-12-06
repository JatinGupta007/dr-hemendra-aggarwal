import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Wrench, ShieldCheck, Hand } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const carpalTunnelSyndromeData = {
  icon: "/Images/treatment_icon_24.png",

  title: "Carpal Tunnel Syndrome",
  subtitle: "Relieve Hand Numbness and Tingling for Better Grip and Function",

  about:
    "Carpal Tunnel Syndrome occurs when the median nerve in the wrist becomes compressed, causing numbness, tingling, pain, and weakness in the hand. Early diagnosis and proper treatment help prevent permanent nerve damage and restore normal hand function.",

  recommended: [
    "Frequent hand numbness or tingling",
    "Nighttime wrist pain or burning sensation",
    "Difficulty gripping or holding objects",
    "Weakness or dropping things unexpectedly",
    "Symptoms worsened by repetitive hand movements",
    "Failure of home remedies or physiotherapy",
  ],

  modernTechniques: [
    "Nerve conduction studies for accurate diagnosis",
    "Ultrasound-guided steroid injections",
    "Endoscopic (keyhole) carpal tunnel release",
    "Open minimally invasive release technique",
    "Ergonomic correction and movement retraining",
    "Advanced microsurgical tools for precise ligament release",
  ],

  keyBenefits: [
    {
      title: "Fast Symptom Relief",
      desc: "Reduces tingling, numbness, and radiating wrist pain.",
    },
    {
      title: "Prevents Permanent Damage",
      desc: "Early treatment helps protect the median nerve from long-term harm.",
    },
    {
      title: "Restores Grip Strength",
      desc: "Improves hand function required for everyday activities.",
    },
    {
      title: "Minimally Invasive Options",
      desc: "Endoscopic and open techniques offer faster recovery and minimal scarring.",
    },
    {
      title: "Better Quality of Life",
      desc: "Improves comfort during work, typing, driving, and sleeping.",
    },
  ],

  services: [
    {
      title: "Non-Surgical Therapy",
      subtitle:
        "Wrist splints, anti-inflammatory medication, physiotherapy, and steroid injections to relieve nerve pressure.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Carpal Tunnel Release Surgery",
      subtitle:
        "Minimally invasive procedure to release pressure on the median nerve for long-term relief.",
      icon: <Hand className="w-6 h-6" />,
    },
    {
      title: "Ergonomic Advice & Prevention",
      subtitle:
        "Guidance on posture, workspace adjustments, and activity modification to prevent recurrence.",
      icon: <Wrench className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Nerve Evaluation",
      desc: "Clinical assessment and nerve conduction tests to diagnose CTS severity.",
    },
    {
      step: 2,
      title: "Conservative Management",
      desc: "Splinting, medication, and physiotherapy to relieve early-stage symptoms.",
    },
    {
      step: 3,
      title: "Advanced Diagnostics",
      desc: "Ultrasound or EMG-NCV testing for precise nerve pressure mapping.",
    },
    {
      step: 4,
      title: "Minimally Invasive Release",
      desc: "Endoscopic or open carpal tunnel release to decompress the nerve.",
    },
    {
      step: 5,
      title: "Post-Surgery Care",
      desc: "Wound care and early finger movement to promote healing.",
    },
    {
      step: 6,
      title: "Rehabilitation",
      desc: "Grip strengthening and mobility exercises for full recovery.",
    },
    {
      step: 7,
      title: "Return to Daily Activities",
      desc: "Most patients resume light work in days and full use within weeks.",
    },
  ],

  benefits: [
    "Quick relief from hand tingling, pain, and weakness",
    "Restoration of grip strength and daily hand function",
    "Minimally invasive techniques for faster healing",
    "Prevents permanent nerve damage with early care",
  ],

  highlights: {
    title: "Protect Your Hands, Regain Control",
    description:
      "Our expert team uses advanced diagnostics and treatment methods to stop nerve damage and restore healthy hand use—ideal for professionals, athletes, and everyday individuals alike.",
    button: "Book a Nerve Evaluation",
  },

  testimonials: [
    {
      name: "Seema Jain",
      age: 42,
      surgery: "Endoscopic Carpal Tunnel Release",
      quote:
        "My hand numbness used to wake me up at night. The minimally invasive surgery gave me instant relief with almost no downtime!",
      rating: 5,
    },
    {
      name: "Rajat Verma",
      age: 35,
      surgery: "Conservative Treatment",
      quote:
        "Wrist splints and physiotherapy helped me regain comfort and strength. Very effective treatment!",
      rating: 5,
    },
    {
      name: "Komal Singh",
      age: 48,
      surgery: "Open Carpal Tunnel Release",
      quote:
        "I had severe nerve compression. The surgery restored my grip and hand mobility within weeks.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Is carpal tunnel surgery painful?",
      answer:
        "No. It is performed under local anesthesia, and patients experience minimal discomfort with quick recovery.",
    },
    {
      question: "Will numbness disappear immediately?",
      answer:
        "Many patients feel relief right away, but full recovery may take a few weeks depending on nerve damage.",
    },
    {
      question: "Can carpal tunnel come back?",
      answer:
        "Recurrence is rare if proper ergonomics and hand care are maintained after treatment.",
    },
    {
      question: "When can I return to work after surgery?",
      answer:
        "Most patients return to light activities in 3–5 days and full activities within a few weeks.",
    },
    {
      question: "Is physiotherapy required?",
      answer:
        "Yes. Strengthening and stretching exercises help restore normal hand movements and prevent stiffness.",
    },
  ],

  keywords: [
    "Carpal tunnel treatment Jaipur",
    "Median nerve compression surgery",
    "Wrist pain and numbness doctor",
    "CTS specialist near me",
    "Best orthopedic for carpal tunnel",
  ],
};



export default function CarpalTunnelSyndrome() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={carpalTunnelSyndromeData} />
      <Footer />
    </>
  );
}
