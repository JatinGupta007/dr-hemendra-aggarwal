import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Wrench, Settings2, Layers3 } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const shoulderDislocationData = {
  icon: "/Images/treatment_icon_6.png",

  title: "Shoulder Dislocation Surgery",
  subtitle: "Restore Shoulder Stability After Recurrent Dislocations",

  about:
    "Shoulder Dislocation Surgery is performed to restore stability in patients who suffer repeated shoulder dislocations. These occur due to ligament tears, labrum injuries, or bone loss around the shoulder joint. Surgical repair helps strengthen the joint, prevent future instability, and enable safe return to daily activities or sports.",

  recommended: [
    "Repeated shoulder dislocations during sports or daily activities",
    "Feeling of shoulder slipping out or instability",
    "Torn labrum (Bankart lesion) confirmed on MRI",
    "Failed physiotherapy or bracing attempts",
    "Shoulder pain with overhead or throwing movements",
    "Bone loss around the shoulder joint causing instability",
  ],

  modernTechniques: [
    "Arthroscopic Bankart Repair for minimally invasive stabilization",
    "Open shoulder stabilization for severe ligament injury",
    "Latarjet or bone block procedures for major bone loss",
    "Capsular tightening (capsular shift) for loose joints",
    "High-strength suture anchors for durable ligament repair",
    "Advanced imaging for precise pre-surgical planning",
  ],

  keyBenefits: [
    {
      title: "Strong Shoulder Stability",
      desc: "Reattaches or reconstructs torn structures to stop repeated dislocations.",
    },
    {
      title: "Safer Return to Sports",
      desc: "Especially helpful for athletes involved in throwing, contact sports, or overhead activities.",
    },
    {
      title: "Minimally Invasive Options",
      desc: "Arthroscopic repairs use tiny cuts, reducing pain and recovery time.",
    },
    {
      title: "Long-Term Protection",
      desc: "Prevents cartilage wear, arthritis, and further shoulder damage.",
    },
  ],

  services: [
    {
      title: "Arthroscopic Bankart Repair",
      subtitle:
        "Minimally invasive technique to fix torn labrum and ligaments.",
      icon: <Settings2 className="w-6 h-6" />,
    },
    {
      title: "Open Stabilization Surgery",
      subtitle:
        "Used in complex or failed cases where stronger repair is required.",
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      title: "Bone Block Procedures",
      subtitle:
        "For patients with bone loss or frequent dislocations requiring added stability.",
      icon: <Layers3 className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Clinical Assessment",
      desc: "Joint stability testing and evaluation of recurrent dislocations.",
    },
    {
      step: 2,
      title: "Imaging (X-ray/MRI/CT)",
      desc: "Detailed imaging to assess labrum tears, ligament injury, or bone loss.",
    },
    {
      step: 3,
      title: "Personalized Surgery Plan",
      desc: "Selection of arthroscopic repair or bone block based on injury severity.",
    },
    {
      step: 4,
      title: "Shoulder Stabilization Surgery",
      desc: "Repairing ligaments, tightening capsule, or adding bone graft if needed.",
    },
    {
      step: 5,
      title: "Rehabilitation",
      desc: "Gradual physiotherapy to restore strength, movement, and joint stability.",
    },
    {
      step: 6,
      title: "Return to Activity",
      desc: "Safe return to gym, sports, and full overhead activity with medical clearance.",
    },
  ],

  benefits: [
    "Restores shoulder strength and joint stability",
    "Prevents repeated dislocations",
    "Minimally invasive options for faster healing",
    "Enables return to sports and physical work",
  ],

  highlights: {
    title: "Freedom from Shoulder Instability",
    description:
      "Stop the cycle of dislocations and regain confidence in every movement. Our expert surgeons ensure safe, lasting shoulder stabilization with modern surgical techniques.",
    button: "Learn About Shoulder Surgery",
  },

  testimonials: [
    {
      name: "Rajat Verma",
      age: 27,
      surgery: "Arthroscopic Bankart Repair",
      quote:
        "My shoulder used to pop out repeatedly. After surgery, I feel completely stable and have returned to gym workouts without fear.",
      rating: 5,
    },
    {
      name: "Kabir Sharma",
      age: 22,
      surgery: "Latarjet Procedure",
      quote:
        "I had bone loss from repeated dislocations. The bone block surgery gave my shoulder new strength. Best decision I made.",
      rating: 5,
    },
    {
      name: "Manish Gupta",
      age: 34,
      surgery: "Stabilization Surgery",
      quote:
        "I couldn't even lift my arm confidently. Post-surgery, my pain is gone and the instability has completely stopped.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Why does my shoulder keep dislocating?",
      answer:
        "Recurrent dislocations usually happen due to torn ligaments, labrum damage, or bone loss. Surgery helps repair these structures.",
    },
    {
      question: "Is surgery necessary after a dislocation?",
      answer:
        "Not always. But if instability continues or dislocations repeat, surgery is strongly recommended.",
    },
    {
      question: "How long is recovery after shoulder dislocation surgery?",
      answer:
        "Most patients resume light work in 3–4 weeks, full movement by 3 months, and sports by 4–6 months.",
    },
    {
      question: "Will my shoulder become normal again?",
      answer:
        "Yes. Most patients regain excellent stability, strength, and full function with proper surgery and physiotherapy.",
    },
  ],

  keywords: [
    "Shoulder dislocation surgery Jaipur",
    "Bankart repair Jaipur",
    "Recurrent shoulder instability treatment",
    "Minimally invasive shoulder repair",
    "Shoulder stabilization surgery Jaipur",
  ],
};



export default function ShoulderDislocationData() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={shoulderDislocationData} />
      <Footer />
    </>
  );
}
