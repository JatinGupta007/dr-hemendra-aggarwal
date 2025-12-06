import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Move3D, Bone, Syringe } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const elbowLigamentRepairData = {
  icon: "/Images/treatment_icon_23.png",

  title: "Elbow Ligament Repair & Realignment",
  subtitle: "Restoring Stability to Damaged Elbow Ligaments",

  about:
    "Elbow ligament injuries often occur due to sports activities, overuse, sudden trauma, or repetitive throwing motions. When ligaments weaken or tear, the joint becomes unstable, painful, and difficult to use. Elbow Ligament Repair & Realignment restores stability by repairing, reconstructing, or repositioning the ligaments to support healthy joint movement.",

  recommended: [
    "Recurrent elbow instability or frequent 'giving way'",
    "Ligament tears from sports like cricket, baseball, or javelin",
    "Pain or weakness during throwing or lifting",
    "Previous elbow injury that never fully healed",
    "Ulnar collateral ligament (UCL) injury or Tommy John injury",
    "Difficulty maintaining grip or arm control due to instability",
  ],

  modernTechniques: [
    "Arthroscopic ligament repair using suture anchors",
    "UCL reconstruction (Tommy John surgery) using grafts",
    "Internal bracing for early stability restoration",
    "Minimally invasive joint realignment procedures",
    "Advanced imaging guidance for accurate ligament placement",
  ],

  keyBenefits: [
    {
      title: "Restored Stability",
      desc: "Strengthens weakened ligaments to prevent elbow ‘giving way’.",
    },
    {
      title: "Improved Strength & Control",
      desc: "Allows safe lifting, throwing, and daily arm movements.",
    },
    {
      title: "Minimally Invasive Options",
      desc: "Arthroscopic procedures reduce pain and recovery time.",
    },
    {
      title: "Return to Sports",
      desc: "Ideal for athletes needing strong and stable elbow function.",
    },
    {
      title: "Reduced Long-Term Damage",
      desc: "Prevents future arthritis, chronic pain, or structural deformity.",
    },
  ],

  services: [
    {
      title: "Ligament Repair",
      subtitle:
        "Stitching the torn ligament back to its bone attachment using anchors to restore strength and stability.",
      icon: <Bone className="w-6 h-6" />,
    },
    {
      title: "Ligament Reconstruction",
      subtitle:
        "Replacing a severely damaged ligament with a tendon graft—ideal for major UCL tears or Tommy John injuries.",
      icon: <Syringe className="w-6 h-6" />,
    },
    {
      title: "Joint Realignment",
      subtitle:
        "Correcting elbow alignment issues to enhance joint function and prevent repeated ligament strain.",
      icon: <Move3D className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Clinical Evaluation",
      desc: "Assessment of pain, stability, and movement to detect ligament insufficiency.",
    },
    {
      step: 2,
      title: "Imaging Diagnosis",
      desc: "MRI and X-ray to identify ligament tears, joint gaps, or structural deformities.",
    },
    {
      step: 3,
      title: "Personalized Treatment Plan",
      desc: "Choosing repair or reconstruction based on injury severity and patient activity level.",
    },
    {
      step: 4,
      title: "Surgical Procedure",
      desc: "Arthroscopic or open repair with grafts or anchors depending on the ligament condition.",
    },
    {
      step: 5,
      title: "Rehabilitation",
      desc: "Guided physiotherapy to rebuild strength, motion, and throwing power.",
    },
    {
      step: 6,
      title: "Return to Activity",
      desc: "Gradual return to sports, gym, and work with medical supervision.",
    },
  ],

  benefits: [
    "Restores joint strength and elbow stability",
    "Minimally invasive options for faster healing",
    "Reduces chronic pain and prevents future injuries",
    "Enables safe return to sports and active lifestyle",
  ],

  highlights: {
    title: "Precision Ligament Surgery for Active Recovery",
    description:
      "Whether you're an athlete or dealing with daily elbow instability, our advanced repair and realignment procedures ensure long-term joint stability and pain-free motion.",
    button: "Book Your Elbow Consultation",
  },

  testimonials: [
    {
      name: "Kunal Verma",
      age: 22,
      surgery: "UCL Reconstruction (Tommy John)",
      quote:
        "As a fast bowler, my elbow pain ended my performance. After ligament reconstruction, I’m back to training with full confidence.",
      rating: 5,
    },
    {
      name: "Shreya S.",
      age: 34,
      surgery: "Elbow Ligament Repair",
      quote:
        "My elbow kept slipping when I lifted things. The repair surgery fixed the instability completely.",
      rating: 5,
    },
    {
      name: "Mahesh Chauhan",
      age: 41,
      surgery: "Joint Realignment",
      quote:
        "Years of strain damaged my elbow alignment. The surgery restored smooth movement and eliminated pain.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How do I know if my elbow ligament is torn?",
      answer:
        "Common signs include instability, pain during throwing, difficulty lifting, and frequent elbow ‘giving way’. MRI confirms the diagnosis.",
    },
    {
      question: "Is ligament reconstruction permanent?",
      answer:
        "Yes. Graft-based reconstruction provides strong, long-lasting stability when paired with proper rehabilitation.",
    },
    {
      question: "When can athletes return to sports?",
      answer:
        "Most athletes return within 4–9 months depending on injury severity and sport type.",
    },
    {
      question: "Is the surgery minimally invasive?",
      answer:
        "Many ligament repairs are arthroscopic, offering smaller incisions and faster recovery.",
    },
    {
      question: "Will my elbow regain full strength?",
      answer:
        "With proper surgery and physiotherapy, most patients regain excellent strength and stability.",
    },
  ],

  keywords: [
    "Elbow ligament repair Jaipur",
    "Tommy John surgery specialist India",
    "Elbow instability treatment Rajasthan",
    "Elbow ligament reconstruction surgeon",
    "Sports injury elbow specialist near me",
  ],
};


export default function ElbowLigamentRepair() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={elbowLigamentRepairData} />
      <Footer />
    </>
  );
}
