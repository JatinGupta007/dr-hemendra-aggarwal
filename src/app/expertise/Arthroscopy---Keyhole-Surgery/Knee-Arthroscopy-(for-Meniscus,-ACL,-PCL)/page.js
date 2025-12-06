import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Slash, Move, CircleDashed, Droplets } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const kneeArthroscopyData = {
  icon: "/Images/treatment_icon_8.png",

  title: "Knee Arthroscopy (for Meniscus, ACL, PCL)",
  subtitle: "Minimally Invasive Knee Treatment",

  about:
    "Knee Arthroscopy is a minimally invasive surgical technique used to diagnose and treat a range of knee problems including meniscus tears, ACL injuries, PCL injuries, cartilage damage, and early arthritis. A tiny camera and special instruments allow precise joint repairs through small incisions, ensuring faster healing and minimal pain.",

  recommended: [
    "Meniscus tear due to twisting or trauma",
    "ACL or PCL ligament injuries",
    "Knee instability while walking or running",
    "Pain, locking, or catching sensations in the knee",
    "Cartilage damage or loose fragments inside the knee",
    "Persistent swelling not responding to rest or medication",
    "Sports injuries requiring accurate surgical repair",
  ],

  modernTechniques: [
    "Arthroscopic ACL and PCL ligament reconstruction",
    "Meniscus preservation techniques (repair instead of removal)",
    "Inside-out and all-inside suturing systems",
    "Microfracture & cartilage restoration procedures",
    "High-definition arthroscopic visualization",
    "Biologic support like PRP for faster ligament healing",
  ],

  keyBenefits: [
    {
      title: "Minimally Invasive",
      desc: "Tiny incisions lead to less pain, faster healing, and minimal scarring.",
    },
    {
      title: "Fast Mobility Recovery",
      desc: "Most patients walk the same day and return to light activities quickly.",
    },
    {
      title: "Precision Repairs",
      desc: "Accurate treatment of ligament and meniscus injuries with arthroscopic visualization.",
    },
    {
      title: "Sports-Friendly Outcomes",
      desc: "Enables athletes to return to play after proper rehabilitation.",
    },
    {
      title: "Low Complication Rate",
      desc: "Safer than open surgery with quicker rehabilitation.",
    },
  ],

  services: [
    {
      title: "Meniscus Tear Repair",
      subtitle:
        "Treats meniscus injuries from twisting, falls, or sports trauma.",
      icon: <Slash className="w-6 h-6" />,
    },
    {
      title: "ACL / PCL Reconstruction",
      subtitle: "Restores knee stability using grafts for torn ligaments.",
      icon: <Move className="w-6 h-6" />,
    },
    {
      title: "Cartilage Cleaning",
      subtitle: "Smoothing rough cartilage and removing loose fragments.",
      icon: <CircleDashed className="w-6 h-6" />,
    },
    {
      title: "Pain & Swelling Relief",
      subtitle:
        "Arthroscopy reduces inflammation in early arthritis and chronic knee irritation.",
      icon: <Droplets className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Initial Evaluation",
      desc: "Examination of knee stability, swelling, and movement limitations.",
    },
    {
      step: 2,
      title: "Imaging & Diagnosis",
      desc: "MRI and X-ray help identify torn ligaments, meniscus tears, or cartilage injuries.",
    },
    {
      step: 3,
      title: "Surgical Planning",
      desc: "Customized plan depending on whether meniscus repair or ACL/PCL reconstruction is required.",
    },
    {
      step: 4,
      title: "Arthroscopic Procedure",
      desc: "Camera and tools inserted through tiny incisions to repair or reconstruct the knee structures.",
    },
    {
      step: 5,
      title: "Post-Surgery Care",
      desc: "Pain control, compression, cold therapy, and early motion exercises.",
    },
    {
      step: 6,
      title: "Physiotherapy & Strengthening",
      desc: "Structured rehab restores movement, stability, and muscle strength.",
    },
    {
      step: 7,
      title: "Return to Activities",
      desc: "Athletes gradually return to sports after passing functional tests.",
    },
  ],

  benefits: [
    "Minimal cuts and reduced scarring",
    "Faster healing and less postoperative pain",
    "Quick return to sports and activities",
    "Same-day discharge in most cases",
  ],

  highlights: {
    title: "Trusted Knee Arthroscopy in Jaipur",
    description:
      "Get expert care for ligament injuries and meniscus repair using precision arthroscopy techniques. Minimal downtime, maximum recovery.",
    button: "Learn About Knee Arthroscopy",
  },

  testimonials: [
    {
      name: "Siddharth Mehta",
      age: 24,
      surgery: "ACL Reconstruction",
      quote:
        "After my football injury, ACL arthroscopy got me back on the field. Very smooth recovery and excellent care.",
      rating: 5,
    },
    {
      name: "Riya Soni",
      age: 32,
      surgery: "Meniscus Repair",
      quote:
        "I had locking and pain in my knee. The arthroscopy fixed the tear, and I was walking comfortably within days.",
      rating: 5,
    },
    {
      name: "Manoj Verma",
      age: 40,
      surgery: "PCL Reconstruction",
      quote:
        "My knee felt unstable after an accident. Arthroscopic surgery restored strength and stability. Highly recommended!",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Is knee arthroscopy painful?",
      answer:
        "No, it is minimally invasive and modern anesthesia makes the procedure comfortable with faster recovery.",
    },
    {
      question: "How soon can I walk after knee arthroscopy?",
      answer:
        "Most patients walk the same day or the next day depending on the type of repair.",
    },
    {
      question: "Is arthroscopy good for athletes?",
      answer:
        "Yes, ACL/PCL and meniscus arthroscopy are standard treatments for sports injuries.",
    },
    {
      question: "How long is the recovery?",
      answer:
        "Recovery ranges from 2–6 weeks for meniscus repair to 4–9 months for ACL/PCL reconstruction.",
    },
    {
      question: "Do I need physiotherapy after arthroscopy?",
      answer:
        "Absolutely. Proper rehab is essential for full knee strength and preventing re-injury.",
    },
  ],

  keywords: [
    "knee arthroscopy Jaipur",
    "ACL surgery Jaipur",
    "PCL ligament repair Jaipur",
    "meniscus tear treatment Jaipur",
  ],
};


export default function kneeArthroscopy() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={kneeArthroscopyData} />
      <Footer />
    </>
  );
}
