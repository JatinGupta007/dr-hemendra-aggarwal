import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { MoveUpRight, Footprints, Bone } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const footDeformitiesData = {
  icon: (
    <Image
      src="/Images/treatment_icon_30.png"
      alt="treatment_icon_30"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Flat Foot, Bunions & Toe Deformities",
  subtitle: "Corrective Foot Care for Pain-Free Movement",
  description:
    "Flat feet, bunions, and toe deformities like hammer toes can lead to pain, discomfort, and walking issues. These foot conditions often stem from genetics, structural problems, or improper footwear. Timely intervention can correct alignment and improve mobility.",
  services: [
    {
      title: "Flat Foot Treatment",
      subtitle:
        "Custom orthotics, physical therapy, and surgical options to restore arch support and reduce pain.",
      icon: <Footprints className="w-6 h-6" />,
    },
    {
      title: "Bunion Care",
      subtitle:
        "Non-surgical solutions like bunion pads and supportive shoes, or surgical correction for advanced cases.",
      icon: <Bone className="w-6 h-6" />,
    },
    {
      title: "Toe Deformity Correction",
      subtitle:
        "Minimally invasive procedures, splints, and specialized footwear to treat hammer, claw, or mallet toes.",
      icon: <MoveUpRight className="w-6 h-6" />,
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
