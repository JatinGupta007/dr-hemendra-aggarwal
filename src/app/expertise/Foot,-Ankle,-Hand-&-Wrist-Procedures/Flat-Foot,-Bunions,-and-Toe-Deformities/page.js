import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { MoveUpRight, Footprints, Bone } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const footDeformitiesData = {
  icon: "/Images/treatment_icon_26.png",

  title: "Flat Foot, Bunions & Toe Deformities",
  subtitle: "Corrective Foot Care for Pain-Free Movement",

  about:
    "Flat feet, bunions, and toe deformities such as hammer toes or claw toes can cause pain, imbalance, walking difficulty, and long-term joint strain. These conditions may be genetic or arise from improper footwear, injury, or structural alignment issues. Early diagnosis and corrective treatment help restore comfort and natural foot movement.",

  recommended: [
    "Pain in the arch, heel, or ball of the foot",
    "Flat feet causing imbalance or early fatigue",
    "Visible bunion deformity or discomfort while walking",
    "Toe deformities like hammer, claw, or mallet toes",
    "Difficulty wearing regular footwear due to foot shape",
    "Progressive deformity affecting mobility",
    "Numbness, nerve pressure, or callus formation",
  ],

  modernTechniques: [
    "Custom 3D-designed orthotics for arch correction",
    "Minimally invasive bunion realignment surgery",
    "Tendon balancing procedures for flexible flat feet",
    "Osteotomy and joint preservation techniques",
    "Correction and pinning for toe deformities",
    "Physiotherapy for gait retraining and strengthening",
  ],

  keyBenefits: [
    {
      title: "Improved Foot Structure",
      desc: "Corrects misalignment to improve posture and joint health.",
    },
    {
      title: "Pain-Free Walking",
      desc: "Reduces pressure on nerves and joints for smooth movement.",
    },
    {
      title: "Permanent Correction",
      desc: "Modern surgical techniques provide long-lasting improvement.",
    },
    {
      title: "Better Balance & Stability",
      desc: "Strengthening and alignment restore natural movement patterns.",
    },
    {
      title: "Comfortable Footwear Use",
      desc: "Allows wearing regular shoes without pain or pressure.",
    },
  ],

  services: [
    {
      title: "Flat Foot Treatment",
      subtitle:
        "Custom orthotics, physiotherapy, and surgical correction to restore arch height and relieve pain.",
      icon: <Footprints className="w-6 h-6" />,
    },
    {
      title: "Bunion Care",
      subtitle:
        "Conservative care with pads and footwear, or minimally invasive bunion correction for advanced deformities.",
      icon: <Bone className="w-6 h-6" />,
    },
    {
      title: "Toe Deformity Correction",
      subtitle:
        "Treats hammer, claw, and mallet toes through splints, realignment surgery, and pressure relief techniques.",
      icon: <MoveUpRight className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Foot Examination",
      desc: "Assessment of foot alignment, arch height, walking pattern, and deformity severity.",
    },
    {
      step: 2,
      title: "Imaging & Diagnosis",
      desc: "X-rays and clinical evaluation to determine joint angles and deformity type.",
    },
    {
      step: 3,
      title: "Personalized Treatment Plan",
      desc: "Choosing between orthotics, physiotherapy, footwear correction, or surgery.",
    },
    {
      step: 4,
      title: "Corrective Procedures",
      desc: "Minimally invasive bunion correction, arch reconstruction, or toe realignment procedures.",
    },
    {
      step: 5,
      title: "Rehabilitation & Strength Training",
      desc: "Exercises to improve balance, foot strength, and gait symmetry.",
    },
    {
      step: 6,
      title: "Long-Term Foot Care",
      desc: "Footwear guidance, periodic checkups, and activity modifications for lasting comfort.",
    },
  ],

  benefits: [
    "Improves foot structure and function",
    "Reduces long-term joint and nerve damage",
    "Restores walking comfort and balance",
    "Permanent correction through advanced procedures",
  ],

  highlights: {
    title: "Step Confidently Again",
    description:
      "Our personalized approach helps correct structural foot problems, relieve pain, and enhance mobility with both non-surgical and surgical solutions.",
    button: "Book a Foot Alignment Consultation",
  },

  testimonials: [
    {
      name: "Renu Yadav",
      age: 39,
      surgery: "Bunion Correction",
      quote:
        "Walking was painful due to a large bunion. After the minimally invasive correction, I can walk comfortably again and even wear my favorite shoes!",
      rating: 5,
    },
    {
      name: "Vipul Sharma",
      age: 28,
      surgery: "Flat Foot Reconstruction",
      quote:
        "I had severe flat feet causing back and knee pain. Custom orthotics and surgery helped restore my arch and walking comfort.",
      rating: 5,
    },
    {
      name: "Geeta Solanki",
      age: 45,
      surgery: "Hammer Toe Correction",
      quote:
        "My toe deformity was painful and made wearing shoes difficult. The correction procedure fixed it beautifully with quick recovery.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Can flat feet be corrected?",
      answer:
        "Yes. Mild cases improve with orthotics and therapy, while severe cases may require surgical correction.",
    },
    {
      question: "Is bunion surgery painful?",
      answer:
        "Modern minimally invasive techniques greatly reduce pain and allow quicker recovery.",
    },
    {
      question: "When should I consider surgery for toe deformities?",
      answer:
        "When pain, footwear discomfort, or walking difficulty affects daily life, surgical correction may be recommended.",
    },
    {
      question: "How long is recovery for foot deformity surgeries?",
      answer:
        "Most patients recover within 4–8 weeks depending on the type of deformity and procedure.",
    },
    {
      question: "Do orthotics really help flat feet?",
      answer:
        "Yes. Custom arch supports improve alignment, reduce pain, and slow deformity progression.",
    },
  ],

  keywords: [
    "Flat foot correction Jaipur",
    "Bunion surgery specialist",
    "Toe deformity treatment",
    "Best orthotics for flat feet",
    "Hammer toe correction doctor",
  ],
};



export default function FootDeformities() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={footDeformitiesData} />
      <Footer />
    </>
  );
}
