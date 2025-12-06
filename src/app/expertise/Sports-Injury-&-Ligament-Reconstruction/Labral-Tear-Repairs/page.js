import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { MoveDiagonal, CircleDashed } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const labralTearRepairData = {
  icon: "/Images/treatment_icon_14.png",

  title: "Labral Tear Repairs",
  subtitle: "Minimally Invasive Repair of Shoulder or Hip Labrum Tears",

  about:
    "A labral tear occurs when the ring of cartilage that stabilizes the shoulder or hip joint becomes damaged due to injury, repetitive movement, or instability. Arthroscopic Labral Repair helps restore joint stability, reduce pain, and prevent long-term degeneration through precise minimally invasive techniques.",

  recommended: [
    "Pain, clicking, or popping in the shoulder or hip",
    "Recurrent shoulder dislocations or instability",
    "Deep groin pain made worse by twisting or turning",
    "SLAP tear from sports or overhead activities",
    "Hip labral tear due to impingement or arthritis",
    "Failure of rest, medication, or physiotherapy",
  ],

  modernTechniques: [
    "Arthroscopic suture anchor repair",
    "SLAP and Bankart repair for shoulder instability",
    "Hip labral repair and reconstruction with precision tools",
    "Debridement of frayed labrum for symptom relief",
    "High-resolution arthroscopy for clear visualization",
  ],

  keyBenefits: [
    {
      title: "Restored Joint Stability",
      desc: "Prevents dislocations and improves joint support and strength.",
    },
    {
      title: "Faster Recovery",
      desc: "Minimally invasive arthroscopy reduces pain and speeds healing.",
    },
    {
      title: "Improved Range of Motion",
      desc: "Repairs allow smooth and stable movement in daily activities and sports.",
    },
    {
      title: "Long-Term Joint Protection",
      desc: "Reduces risk of cartilage wear and early arthritis.",
    },
  ],

  services: [
    {
      title: "Shoulder Labral Repair (Bankart/SLAP)",
      subtitle:
        "Arthroscopic repair of torn shoulder labrum caused by instability, repeated dislocations, or overhead activities.",
      icon: <MoveDiagonal className="w-6 h-6" />,
    },
    {
      title: "Hip Labral Repair",
      subtitle:
        "Restoration of the hip labrum to improve cushioning, reduce pain, and restore smooth joint movement.",
      icon: <CircleDashed className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Clinical Evaluation",
      desc: "Assessment of pain patterns, instability, and joint mechanics.",
    },
    {
      step: 2,
      title: "MRI & Diagnosis",
      desc: "Detailed imaging to confirm SLAP tears, Bankart tears, or hip labral damage.",
    },
    {
      step: 3,
      title: "Non-Surgical Management",
      desc: "Initial physiotherapy, rest, and medications for symptom relief.",
    },
    {
      step: 4,
      title: "Arthroscopic Labral Repair",
      desc: "Keyhole repair using sutures and anchors to restore labrum structure.",
    },
    {
      step: 5,
      title: "Rehabilitation",
      desc: "Strengthening and mobility training for safe return to activities.",
    },
    {
      step: 6,
      title: "Return to Sport",
      desc: "Gradual progression to full athletic performance with medical clearance.",
    },
  ],

  benefits: [
    "Restores joint stability and natural movement",
    "Reduces clicking, locking, and pain",
    "Minimally invasive with faster recovery",
    "Prevents progression to arthritis or chronic instability",
  ],

  highlights: {
    title: "Reclaim Smooth, Stable Joint Movement",
    description:
      "Our labral tear repairs help you regain smooth, pain-free movement in your shoulders or hips. Whether caused by sports, trauma, or repetitive strain, our arthroscopic techniques deliver precise and lasting results.",
    button: "Explore Labral Repair Options",
  },

  testimonials: [
    {
      name: "Karan Mehta",
      age: 27,
      surgery: "Shoulder Labrum (Bankart) Repair",
      quote:
        "After repeated shoulder dislocations, labral repair gave me complete stability. I’m back to gym workouts confidently.",
      rating: 5,
    },
    {
      name: "Aditi Rao",
      age: 33,
      surgery: "Hip Labral Repair",
      quote:
        "Hip pain was affecting my daily life for years. The arthroscopic repair changed everything—smooth movement with no locking!",
      rating: 5,
    },
    {
      name: "Vivek Sharma",
      age: 24,
      surgery: "SLAP Tear Repair",
      quote:
        "As a professional swimmer, my shoulder injury was limiting my career. After SLAP repair and rehab, I'm back in full form.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Does a labral tear always need surgery?",
      answer:
        "Not always. Minor tears can improve with physiotherapy, but large or unstable tears usually require arthroscopic repair.",
    },
    {
      question: "How long is recovery after labral repair?",
      answer:
        "Most patients resume daily tasks in 3–6 weeks and return to sports in 3–6 months depending on rehabilitation.",
    },
    {
      question: "Is arthroscopic repair safe?",
      answer:
        "Yes, it is a minimally invasive and highly precise technique with very low complication rates.",
    },
    {
      question: "Can a repaired labrum tear again?",
      answer:
        "With proper surgery and rehab, the likelihood is low. Avoiding early heavy lifting helps protect the repair.",
    },
  ],

  keywords: [
    "Labral tear treatment Jaipur",
    "Shoulder labrum repair surgery",
    "Hip labral tear repair Jaipur",
    "SLAP tear surgery Jaipur",
    "Arthroscopic labrum surgery",
  ],
};



export default function LabralTearRepair() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={labralTearRepairData} />
      <Footer />
    </>
  );
}
