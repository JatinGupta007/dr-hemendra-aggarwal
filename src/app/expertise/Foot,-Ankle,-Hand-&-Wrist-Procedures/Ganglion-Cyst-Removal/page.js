import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Scissors, Syringe, Hand } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const ganglionCystData = {
  icon: "/Images/treatment_icon_28.png",

  title: "Ganglion Cyst Removal",
  subtitle: "Quick Relief from Cysts Without Recurrence",

  about:
    "Ganglion cysts are noncancerous fluid-filled lumps that commonly appear on the wrist, hand, ankle, or foot. Though harmless, they may cause discomfort, pain, numbness, or restrict motion when they press on nearby nerves or tendons. Proper treatment ensures long-term relief and prevents recurrence.",

  recommended: [
    "Visible lump on wrist, hand, ankle, or foot",
    "Pain or discomfort during movement",
    "Numbness or tingling due to nerve pressure",
    "Reduced grip strength or difficulty using the hand",
    "Rapid increase in cyst size",
    "Recurring cysts after home remedies",
  ],

  modernTechniques: [
    "Ultrasound-guided aspiration for accurate drainage",
    "Minimally invasive excision using small incisions",
    "Complete cyst root removal to prevent recurrence",
    "Advanced microsurgical tools for delicate areas",
    "Wrist arthroscopy in selected deep cyst cases",
    "Post-treatment immobilization for optimal healing",
  ],

  keyBenefits: [
    {
      title: "Fast Symptom Relief",
      desc: "Removes pain, numbness, and discomfort caused by cyst pressure.",
    },
    {
      title: "Minimal Downtime",
      desc: "Quick return to normal activities with minimally invasive methods.",
    },
    {
      title: "Prevents Recurrence",
      desc: "Complete removal of the cyst and its root reduces future risk.",
    },
    {
      title: "Improved Hand/Foot Function",
      desc: "Restores comfortable movement and natural strength.",
    },
    {
      title: "Safe & Effective",
      desc: "Well-established procedure with high success and low risk.",
    },
  ],

  services: [
    {
      title: "Aspiration",
      subtitle:
        "Draining the cyst fluid using a sterile needle — effective for temporary relief and early-stage cysts.",
      icon: <Syringe className="w-6 h-6" />,
    },
    {
      title: "Surgical Removal",
      subtitle:
        "Outpatient excision to remove the cyst entirely, including its stalk, to prevent recurrence.",
      icon: <Scissors className="w-6 h-6" />,
    },
    {
      title: "Supportive Care",
      subtitle:
        "Immobilization, rest, and post-procedure care to reduce strain and ensure smooth healing.",
      icon: <Hand className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Evaluation & Diagnosis",
      desc: "Physical examination and ultrasound to confirm cyst type and depth.",
    },
    {
      step: 2,
      title: "Treatment Planning",
      desc: "Choosing between aspiration or surgical removal based on cyst size and symptoms.",
    },
    {
      step: 3,
      title: "Aspiration or Excision",
      desc: "Fluid drainage or complete cyst removal performed as a quick outpatient procedure.",
    },
    {
      step: 4,
      title: "Post-Procedure Care",
      desc: "Bandaging, immobilization, and pain control to protect healing tissues.",
    },
    {
      step: 5,
      title: "Rehabilitation",
      desc: "Light exercises and movement training to restore strength and flexibility.",
    },
    {
      step: 6,
      title: "Follow-Up",
      desc: "Monitoring recovery and ensuring no recurrence or nerve irritation.",
    },
  ],

  benefits: [
    "Permanent removal of ganglion cyst",
    "Quick and minimally invasive procedure",
    "Relief from pain, numbness, and swelling",
    "Improved hand or foot function",
  ],

  highlights: {
    title: "Say Goodbye to Painful Lumps",
    description:
      "Our expert care ensures safe, effective cyst removal using the latest techniques—minimizing downtime and maximizing comfort.",
    button: "Consult for Cyst Removal",
  },

  testimonials: [
    {
      name: "Rekha Sharma",
      age: 33,
      surgery: "Ganglion Cyst Excision",
      quote:
        "My wrist cyst kept coming back. After removal, the pain is gone and it hasn’t returned. Very happy with the care!",
      rating: 5,
    },
    {
      name: "Arun Singh",
      age: 41,
      surgery: "Aspiration Treatment",
      quote:
        "The aspiration procedure was quick and painless. I could use my hand normally the same day.",
      rating: 5,
    },
    {
      name: "Minal Jain",
      age: 29,
      surgery: "Surgical Removal",
      quote:
        "The cyst on my foot was making walking painful. After removal, recovery was smooth and comfortable.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Is ganglion cyst removal painful?",
      answer:
        "No. Both aspiration and surgical removal are done with local anesthesia, making the procedure comfortable.",
    },
    {
      question: "Can the cyst return after aspiration?",
      answer:
        "Yes, aspiration may not remove the cyst root, so recurrence is possible. Surgery offers a more permanent solution.",
    },
    {
      question: "How soon can I use my hand after removal?",
      answer:
        "Most patients resume light activities within 1–2 days and full use in about a week.",
    },
    {
      question: "Is surgery necessary for all cysts?",
      answer:
        "No. Surgery is recommended only for recurrent, painful, or movement-limiting cysts.",
    },
    {
      question: "Can I prevent ganglion cysts?",
      answer:
        "Using ergonomic postures and avoiding repetitive strain may help, but some cysts occur without clear cause.",
    },
  ],

  keywords: [
    "Ganglion cyst removal Jaipur",
    "Wrist lump treatment",
    "Foot cyst surgery",
    "Best orthopedic hand surgeon",
    "Minimally invasive ganglion removal",
  ],
};



export default function GanglionCyst() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={ganglionCystData} />
      <Footer />
    </>
  );
}
