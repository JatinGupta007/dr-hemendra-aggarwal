import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Activity, Zap, Home, Stethoscope } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const painlessJointSurgeryData = {
  icon: "/Images/treatment_icon_10.png",

  title: "Painless & Quick Recovery Joint Surgery",
  subtitle: "Minimally Invasive | Faster Healing",

  about:
    "Painless and quick-recovery joint surgeries use the latest medical advancements to reduce pain, minimize tissue damage, and help patients return to daily life sooner. These techniques prioritize comfort, safety, and fast rehabilitation.",

  recommended: [
    "Chronic knee, hip, or shoulder pain affecting daily activities",
    "Patients seeking minimal downtime after surgery",
    "Those wanting smaller incisions and faster wound healing",
    "Individuals needing early-mobility rehabilitation",
    "People afraid of postoperative pain or long recovery periods",
  ],

  modernTechniques: [
    "Minimally invasive surgical approaches",
    "Advanced nerve blocks & regional anesthesia",
    "Enhanced recovery after surgery (ERAS) protocols",
    "3D planning & patient-specific surgical precision",
    "Robotic-assisted joint surgeries for accuracy",
    "Biologic treatments to support healing",
  ],

  keyBenefits: [
    {
      title: "Reduced Pain",
      desc: "Nerve blocks and minimally invasive techniques greatly minimize postoperative discomfort.",
    },
    {
      title: "Faster Mobility",
      desc: "Patients begin walking or moving joints within 24–48 hours.",
    },
    {
      title: "Shorter Hospital Stay",
      desc: "Most procedures allow discharge within 1–2 days.",
    },
    {
      title: "Better Long-Term Outcomes",
      desc: "Precise surgical techniques improve implant longevity and joint mobility.",
    },
    {
      title: "Minimal Scarring",
      desc: "Small incisions promote better cosmetic results and quicker healing.",
    },
  ],

  services: [
    {
      title: "Minimally Invasive Techniques",
      subtitle:
        "Smaller incisions that reduce pain, tissue damage, and visible scarring.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Advanced Pain Management",
      subtitle:
        "Regional anesthesia and nerve blocks for a comfortable recovery experience.",
      icon: <Stethoscope className="w-6 h-6" />,
    },
    {
      title: "Fast-Track Rehabilitation",
      subtitle:
        "Early physiotherapy for faster mobility and long-term strength.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Reduced Hospital Stay",
      subtitle: "Many patients return home within 1–2 days post-surgery.",
      icon: <Home className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Clinical Assessment",
      desc: "Comprehensive evaluation to determine suitability for minimally invasive surgery.",
    },
    {
      step: 2,
      title: "Advanced Imaging",
      desc: "X-rays, MRI, or CT scans to plan precise surgical intervention.",
    },
    {
      step: 3,
      title: "Customized Surgical Plan",
      desc: "Tailored approach ensuring minimal tissue disturbance and faster healing.",
    },
    {
      step: 4,
      title: "Minimally Invasive Surgery",
      desc: "Small incisions, advanced anesthesia, and precise implant placement.",
    },
    {
      step: 5,
      title: "Pain-Control Protocols",
      desc: "Nerve blocks and medications for a nearly painless recovery.",
    },
    {
      step: 6,
      title: "Early Physiotherapy",
      desc: "Rehab begins within hours to regain mobility and reduce stiffness.",
    },
    {
      step: 7,
      title: "Return to Daily Life",
      desc: "Most patients resume light activities within days and normal activities in weeks.",
    },
  ],

  benefits: [
    "Less postoperative pain and discomfort",
    "Faster return to daily activities",
    "Lower risk of infection or complications",
    "Enhanced long-term joint mobility",
  ],

  highlights: {
    title: "Painless Joint Surgery in Jaipur",
    description:
      "Experience quicker recovery and lasting joint relief with the latest surgical innovations and patient-centered care.",
    button: "Explore Fast-Recovery Surgeries",
  },

  testimonials: [
    {
      name: "Suresh Mehta",
      age: 57,
      surgery: "Painless Knee Procedure",
      quote:
        "I was walking with support just a day after surgery. The pain was much less than I expected. Truly a smooth experience.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      age: 49,
      surgery: "Minimally Invasive Hip Treatment",
      quote:
        "The recovery was unbelievably fast. I was home within 24 hours and walking comfortably soon after.",
      rating: 5,
    },
    {
      name: "Vijay Singh",
      age: 62,
      surgery: "Shoulder Pain-Free Surgery",
      quote:
        "I feared pain after surgery, but the advanced pain management made everything comfortable. Highly recommended!",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Is painless joint surgery truly painless?",
      answer:
        "Advanced regional anesthesia and minimally invasive techniques significantly reduce pain, but mild discomfort during recovery is normal.",
    },
    {
      question: "How soon can I walk after surgery?",
      answer:
        "Most patients start walking within 24–48 hours, depending on the procedure.",
    },
    {
      question: "Is minimally invasive surgery safe?",
      answer:
        "Yes. It reduces tissue trauma, lowers infection risk, and offers quicker recovery when performed by an experienced surgeon.",
    },
    {
      question: "How long is the recovery period?",
      answer:
        "Many patients resume light activities within a few days and normal routines within 3–6 weeks.",
    },
    {
      question: "Who is a good candidate for painless joint surgery?",
      answer:
        "Patients with joint pain, arthritis, injuries, or mobility issues who want faster recovery and less postoperative pain.",
    },
  ],

  keywords: [
    "painless joint surgery Jaipur",
    "quick recovery joint replacement Jaipur",
    "minimally invasive orthopedic surgery",
  ],
};



export default function PainlessJointSurgery() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={painlessJointSurgeryData} />
      <Footer />
    </>
  );
}
