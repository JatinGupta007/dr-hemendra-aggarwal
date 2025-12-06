import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Repeat2, ShieldCheck, MoveDiagonal, Snowflake } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const shoulderArthroscopyData = {
  icon: "/Images/treatment_icon_6.png",

  title: "Shoulder Arthroscopy (for Rotator Cuff, Labrum)",
  subtitle: "Minimally Invasive Shoulder Surgery",

  about:
    "Shoulder Arthroscopy is a minimally invasive procedure used to diagnose and treat various shoulder problems, including rotator cuff tears, labrum injuries (SLAP/Bankart), frozen shoulder, and impingement syndrome. Tiny incisions and a camera-guided approach ensure accurate treatment, less pain, and faster recovery.",

  recommended: [
    "Rotator cuff tears causing pain or weakness",
    "Labrum tears (SLAP or Bankart lesions)",
    "Recurrent shoulder dislocations or instability",
    "Shoulder impingement or bone spurs",
    "Frozen shoulder not improving with physiotherapy",
    "Chronic shoulder pain affecting daily activities",
    "Athletic shoulder injuries requiring precise repair",
  ],

  modernTechniques: [
    "Arthroscopic rotator cuff repair using suture anchors",
    "Labrum reattachment for shoulder stability",
    "Subacromial decompression for impingement",
    "Arthroscopic capsular release for frozen shoulder",
    "Debridement of loose cartilage or inflamed tissues",
    "Biologic augmentation (PRP) to enhance tendon healing",
  ],

  keyBenefits: [
    {
      title: "Minimally Invasive",
      desc: "Small incisions with quicker healing and minimal scarring.",
    },
    {
      title: "High Surgical Precision",
      desc: "Camera-guided visualization ensures accurate tendon and cartilage repairs.",
    },
    {
      title: "Less Pain, Faster Recovery",
      desc: "Reduced trauma to surrounding tissues speeds up healing.",
    },
    {
      title: "Restores Strength & Mobility",
      desc: "Effective for restoring shoulder stability and full motion.",
    },
    {
      title: "Ideal for Athletes",
      desc: "Allows safe return to sports with proper rehabilitation.",
    },
  ],

  services: [
    {
      title: "Rotator Cuff Repair",
      subtitle: "Restores torn or damaged tendons caused by injury or overuse.",
      icon: <Repeat2 className="w-6 h-6" />,
    },
    {
      title: "Labrum Tear Fix (SLAP/Bankart)",
      subtitle: "Corrects shoulder instability by repairing torn cartilage.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Impingement Relief",
      subtitle:
        "Removes bone spurs or inflamed tissues causing shoulder friction.",
      icon: <MoveDiagonal className="w-6 h-6" />,
    },
    {
      title: "Frozen Shoulder Treatment",
      subtitle:
        "Arthroscopic release improves stiffness and restores mobility.",
      icon: <Snowflake className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Shoulder Evaluation",
      desc: "Assessment of mobility, strength, pain levels, and instability.",
    },
    {
      step: 2,
      title: "Imaging & Diagnosis",
      desc: "MRI and X-ray help identify tendon tears, labrum damage, or impingement.",
    },
    {
      step: 3,
      title: "Surgical Planning",
      desc: "Choosing the right arthroscopic techniques for rotator cuff or labrum repair.",
    },
    {
      step: 4,
      title: "Arthroscopic Procedure",
      desc: "Camera-guided minimally invasive surgery to repair shoulder tissues.",
    },
    {
      step: 5,
      title: "Pain Management & Early Movement",
      desc: "Nerve blocks and early range-of-motion exercises help recovery.",
    },
    {
      step: 6,
      title: "Rehabilitation & Strengthening",
      desc: "Structured physiotherapy rebuilds shoulder function, strength, and flexibility.",
    },
    {
      step: 7,
      title: "Return to Sports & Daily Activities",
      desc: "Gradual return to full activity once strength and stability are restored.",
    },
  ],

  benefits: [
    "Tiny incisions and minimal scarring",
    "Faster healing and reduced postoperative pain",
    "High precision for tendon and cartilage repairs",
    "Quick return to daily routines and athletics",
  ],

  highlights: {
    title: "Expert Shoulder Arthroscopy in Jaipur",
    description:
      "Restore shoulder strength and flexibility with minimally invasive arthroscopy techniques. Trusted care for rotator cuff, labrum, and shoulder instability.",
    button: "Explore Shoulder Arthroscopy",
  },

  testimonials: [
    {
      name: "Amit Sharma",
      age: 35,
      surgery: "Rotator Cuff Repair",
      quote:
        "My shoulder pain was constant, and I couldn’t lift my arm. Arthroscopy fixed it perfectly. Recovery was smooth!",
      rating: 5,
    },
    {
      name: "Neeru Joshi",
      age: 28,
      surgery: "Labrum (Bankart) Repair",
      quote:
        "I had repeated shoulder dislocations. After arthroscopy, my shoulder feels stable and strong again.",
      rating: 5,
    },
    {
      name: "Rahul Meena",
      age: 40,
      surgery: "Frozen Shoulder Release",
      quote:
        "I struggled with stiffness for months. Arthroscopy restored my movement quickly.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Is shoulder arthroscopy painful?",
      answer:
        "No. It causes minimal pain due to small incisions and modern anesthesia. Discomfort reduces quickly with rehab.",
    },
    {
      question: "How soon can I move my shoulder?",
      answer:
        "Movement usually starts within 24–48 hours depending on the type of repair.",
    },
    {
      question: "Does arthroscopy prevent future dislocations?",
      answer:
        "Yes. Labrum repair strengthens the joint and reduces the risk of instability.",
    },
    {
      question: "When can I return to sports?",
      answer:
        "Athletes typically return within 3–6 months depending on healing and physiotherapy progress.",
    },
    {
      question: "Is physiotherapy necessary?",
      answer:
        "Absolutely. Rehab is essential for regaining strength, flexibility, and shoulder control.",
    },
  ],

  keywords: [
    "shoulder arthroscopy Jaipur",
    "rotator cuff surgery Jaipur",
    "labrum tear repair Jaipur",
    "shoulder pain treatment Jaipur",
  ],
};




export default function ShoulderArthroscopy() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={shoulderArthroscopyData} />
      <Footer />
    </>
  );
}
