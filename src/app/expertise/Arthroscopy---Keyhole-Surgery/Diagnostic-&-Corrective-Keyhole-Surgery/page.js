import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Search, Wrench, Puzzle } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const keyholeSurgeryData = {
  icon: "/Images/treatment_icon_12.png",

  title: "Diagnostic & Corrective Keyhole Surgery",
  subtitle: "Advanced Arthroscopy for Accurate Treatment",

  about:
    "Diagnostic and Corrective Keyhole Surgery, also known as arthroscopy, is a minimally invasive technique used to view, diagnose, and treat joint problems through tiny incisions. Using an arthroscope and precision tools, surgeons can repair ligaments, cartilage, and joint surfaces with exceptional accuracy and faster recovery.",

  recommended: [
    "Unexplained joint pain or swelling",
    "Suspected ligament tears or cartilage damage",
    "Sports injuries requiring precise diagnosis",
    "Joint locking, catching, or restricted movement",
    "Failed non-surgical treatments",
    "Need for minimally invasive joint repair",
  ],

  modernTechniques: [
    "High-resolution arthroscopic imaging",
    "Precision tools for ligament and cartilage repair",
    "Micro-instruments for removing loose fragments",
    "Biologic augmentation for healing (PRP, microfracture)",
    "Minimally invasive joint debridement",
    "Arthroscopic stabilization techniques",
  ],

  keyBenefits: [
    {
      title: "Dual Purpose: Diagnose & Treat",
      desc: "Provides real-time diagnosis and immediate corrective treatment during the same procedure.",
    },
    {
      title: "Minimally Invasive",
      desc: "Tiny incisions reduce pain, tissue damage, scarring, and recovery time.",
    },
    {
      title: "High Accuracy",
      desc: "Direct visual access inside the joint ensures precise repairs.",
    },
    {
      title: "Quick Recovery",
      desc: "Most patients return to normal activities much faster than with open surgery.",
    },
    {
      title: "Low Risk",
      desc: "Reduced chances of infection and complications due to small incision size.",
    },
  ],

  services: [
    {
      title: "Diagnostic Arthroscopy",
      subtitle:
        "Used to inspect joints internally for the cause of pain, swelling, or restricted movement.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: "Corrective Repairs",
      subtitle:
        "Repairs torn ligaments, cartilage, or removes loose bone fragments using precision instruments.",
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      title: "Multi-Joint Use",
      subtitle:
        "Effective for knees, shoulders, elbows, hips, wrists, and ankles — all through keyhole access.",
      icon: <Puzzle className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Clinical Evaluation",
      desc: "Assessment of pain, instability, or movement restriction to determine if arthroscopy is needed.",
    },
    {
      step: 2,
      title: "Imaging Tests",
      desc: "MRI, X-ray, or ultrasound used to guide diagnosis before the procedure.",
    },
    {
      step: 3,
      title: "Arthroscopic Diagnosis",
      desc: "A camera is inserted through a tiny incision to visually inspect joint structures.",
    },
    {
      step: 4,
      title: "Corrective Keyhole Surgery",
      desc: "Repairs are performed immediately if tears, damage, or loose fragments are found.",
    },
    {
      step: 5,
      title: "Early Mobilization",
      desc: "Patients begin gentle movement soon after surgery to prevent stiffness.",
    },
    {
      step: 6,
      title: "Rehabilitation",
      desc: "Customized physiotherapy plan to regain joint strength and mobility.",
    },
    {
      step: 7,
      title: "Return to Normal Activity",
      desc: "Most patients resume work and daily routines within a short recovery period.",
    },
  ],

  benefits: [
    "Diagnosis and treatment in one session",
    "Minimally invasive with tiny cuts",
    "Faster recovery and less pain",
    "Highly accurate repairs with real-time visuals",
  ],

  highlights: {
    title: "Keyhole Precision for Joint Health",
    description:
      "Get clear answers and precise treatment in one go. Our keyhole surgeries use high-definition arthroscopy for faster healing and better outcomes.",
    button: "Discover Keyhole Surgery Benefits",
  },

  testimonials: [
    {
      name: "Rajeev Sharma",
      age: 37,
      surgery: "Diagnostic Knee Arthroscopy",
      quote:
        "Keyhole surgery helped identify and fix my cartilage tear in one session. Recovery was quick and pain-free.",
      rating: 5,
    },
    {
      name: "Meenal Agarwal",
      age: 29,
      surgery: "Shoulder Keyhole Repair",
      quote:
        "I had shoulder pain for months. The corrective arthroscopy restored mobility and relieved discomfort completely.",
      rating: 5,
    },
    {
      name: "Sanjay Kumar",
      age: 44,
      surgery: "Wrist Arthroscopy",
      quote:
        "The procedure was smooth, and I returned to work within days. Excellent care and precise treatment!",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Is keyhole surgery painful?",
      answer:
        "No. It is minimally invasive and generally causes very little pain. Most patients recover quickly with minimal discomfort.",
    },
    {
      question: "How soon can I return to work?",
      answer:
        "Many patients return to light work in a few days, depending on the joint and extent of repair.",
    },
    {
      question: "What joints can be treated with keyhole surgery?",
      answer:
        "Knee, shoulder, elbow, wrist, hip, and ankle joints can all be evaluated and treated using arthroscopy.",
    },
    {
      question: "Is physiotherapy required after surgery?",
      answer:
        "Yes. Proper rehabilitation ensures full mobility, strength, and long-term recovery.",
    },
    {
      question: "Can arthroscopy prevent bigger surgeries later?",
      answer:
        "Yes. Early diagnosis and minimally invasive correction can stop joint problems from worsening.",
    },
  ],

  keywords: [
    "keyhole joint surgery Jaipur",
    "diagnostic arthroscopy Jaipur",
    "corrective keyhole surgery",
    "minimally invasive ligament surgery",
    "arthroscopic joint repair",
  ],
};



export default function KeyholeSurgery() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={keyholeSurgeryData} />
      <Footer />
    </>
  );
}
