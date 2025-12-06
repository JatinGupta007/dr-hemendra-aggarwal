import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Wrench, ShieldAlert, Bone, MoveHorizontal } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const revisionJointReplacementData = {
  icon: "/Images/treatment_icon_11.png",

  title: "Revision Joint Replacement Surgeries",
  subtitle: "Fixing Failed or Worn-Out Implants",

  about:
    "Revision Joint Replacement Surgery is performed when a previous joint replacement wears out, loosens, gets infected, or fails over time. The damaged implant is removed and replaced with a new, stronger, long-lasting prosthetic to restore stability, mobility, and comfort.",

  recommended: [
    "Loosening or wearing out of old implants",
    "Pain or instability after previous joint replacement",
    "Joint infection requiring implant removal",
    "Fracture around the implant (periprosthetic fracture)",
    "Stiffness or restricted joint movement",
    "Recurrent dislocations in previously treated joints",
  ],

  modernTechniques: [
    "Computer-assisted implant removal & precise reconstruction",
    "Advanced infection-control protocols",
    "Stemmed revision implants for stronger fixation",
    "Customized 3D-printed implants for severe bone loss",
    "Bone grafting and biologic rebuilding techniques",
    "Robotic-assisted revision replacement",
  ],

  keyBenefits: [
    {
      title: "Restored Joint Stability",
      desc: "Improves joint movement and prevents repeated giving-way sensations.",
    },
    {
      title: "Pain-Free Function",
      desc: "Replaces damaged or loose implants to eliminate chronic joint pain.",
    },
    {
      title: "Reconstruction of Lost Bone",
      desc: "Modern techniques rebuild bone defects for stronger implant support.",
    },
    {
      title: "Long-Term Durability",
      desc: "Modern revision implants are designed for long-lasting performance.",
    },
    {
      title: "Improved Quality of Life",
      desc: "Helps patients regain confidence, mobility, and independence.",
    },
  ],

  services: [
    {
      title: "Implant Loosening or Wear",
      subtitle:
        "Old or damaged implants are replaced with stronger, durable ones.",
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      title: "Infection Management",
      subtitle:
        "Infected implants are removed and replaced using safe, staged procedures.",
      icon: <ShieldAlert className="w-6 h-6" />,
    },
    {
      title: "Fracture or Bone Loss",
      subtitle:
        "Bone defects are rebuilt using grafts or augmented implants before revision.",
      icon: <Bone className="w-6 h-6" />,
    },
    {
      title: "Instability or Stiffness",
      subtitle:
        "Corrects misalignment, reduces stiffness, and restores smooth joint motion.",
      icon: <MoveHorizontal className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Assessment of Previous Implant",
      desc: "Detailed evaluation using X-rays, CT scans, and medical history.",
    },
    {
      step: 2,
      title: "Diagnosis of Failure Cause",
      desc: "Identifying implant loosening, infection, wear, or instability.",
    },
    {
      step: 3,
      title: "Surgical Planning",
      desc: "Selecting the right revision prosthetic based on bone condition.",
    },
    {
      step: 4,
      title: "Implant Removal & Reconstruction",
      desc: "Removal of old implant, bone grafting if needed, and placement of new implant.",
    },
    {
      step: 5,
      title: "Post-Surgery Monitoring",
      desc: "Pain control, infection prevention, and mobility checks.",
    },
    {
      step: 6,
      title: "Rehabilitation",
      desc: "Guided physiotherapy to rebuild joint strength and flexibility.",
    },
    {
      step: 7,
      title: "Long-Term Follow-Up",
      desc: "Regular reviews to maintain implant health and joint function.",
    },
  ],

  benefits: [
    "Restores joint stability and mobility",
    "Eliminates pain from worn-out implants",
    "Advanced implant designs for long-term performance",
    "Enhanced quality of life and daily comfort",
  ],

  highlights: {
    title: "Expert Revision Surgeries in Jaipur",
    description:
      "Get relief from failed joint implants with expert care, advanced tools, and durable prosthetics tailored for your comfort and mobility.",
    button: "Learn About Revision Surgeries",
  },

  testimonials: [
    {
      name: "Geeta Sharma",
      age: 64,
      surgery: "Knee Revision Replacement",
      quote:
        "My old knee implant became loose after 12 years. The revision surgery restored my walking ability, and the pain is completely gone.",
      rating: 5,
    },
    {
      name: "Mahendra Gupta",
      age: 70,
      surgery: "Hip Revision Surgery",
      quote:
        "I had an infection around my old implant. The doctor handled the entire process carefully, and now my hip feels stable again.",
      rating: 5,
    },
    {
      name: "Usha Rathore",
      age: 58,
      surgery: "Shoulder Revision Surgery",
      quote:
        "My previous surgery had failed, causing stiffness. After the revision, I have regained great movement and comfort.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Why do joint implants fail?",
      answer:
        "Implants may fail due to wear and tear, infection, bone loss, improper alignment, or trauma.",
    },
    {
      question: "Is revision surgery more complex than primary surgery?",
      answer:
        "Yes, revision surgeries require advanced expertise because they involve removing old implants and rebuilding bone.",
    },
    {
      question: "How long do revision implants last?",
      answer:
        "Modern revision implants are durable and can last 15–20 years or more with proper care.",
    },
    {
      question: "What is the recovery time?",
      answer:
        "Recovery may take 6–12 weeks depending on bone quality, implant type, and overall health.",
    },
    {
      question: "Is revision surgery safe?",
      answer:
        "When performed by experienced surgeons, revision surgeries have excellent long-term outcomes.",
    },
  ],

  keywords: [
    "revision joint replacement Jaipur",
    "failed knee implant surgery",
    "hip implant revision Jaipur",
    "shoulder revision surgery Jaipur",
  ],
};

export default function RivisionJointReplacement() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={revisionJointReplacementData} />
      <Footer />
    </>
  );
}
