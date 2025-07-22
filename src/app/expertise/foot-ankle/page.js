import { CheckCircle } from "lucide-react";
import SpecificExpertise from "@/component/SpecificExpertise";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";
import Image from "next/image";

const handFootData = {
  icon: <Image
            src="/Images/treatment_icon_5.png"
            alt="treatment_icon_5"
            width={60}
            height={60}
            className="mx-auto"
          />,
  title: "Foot, Ankle, Hand &",
  subtitle: "Wrist Procedures",
  description:
    "Pain or deformity in your feet, hands, or wrists can disrupt your daily activities. Dr. Hemendra Agarwal treats a wide range of peripheral orthopedic problems with both surgical and non-surgical options.",
  services: [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Carpal Tunnel Syndrome",
      subtitle: "Relieve hand numbness with effective surgery",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Plantar Fasciitis",
      subtitle: "Heel pain treatment with custom plans",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Flat Foot, Bunions & Toe Deformities",
      subtitle: "Realignment and correction procedures",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Ankle Sprains & Instability",
      subtitle: "Sports and trauma care for ankles",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Ganglion Cyst Removal",
      subtitle: "Safe, outpatient surgery for cysts",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Trigger Finger Release",
      subtitle: "Quick procedure to restore finger mobility",
    },
  ],
  benefits: [
    "Specialized care for hand, foot, and ankle issues",
    "Surgical & non-surgical treatments available",
    "Precise diagnosis and imaging support",
    "Minimally invasive techniques for faster healing",
  ],
  highlights: {
    title: "See Hand & Foot Surgery Options",
    description:
      "Return to your routine without pain or stiffness. Book a consultation with Dr. Agarwal to explore the best orthopedic solutions for your feet and hands.",
    button: "Consult for Hand/Foot Issues",
  },
  keywords: [
    "foot surgeon Jaipur",
    "hand surgeon in Jaipur",
    "carpal tunnel surgery Jaipur",
  ],
};

export default function FootAnklePage() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={handFootData} />
      <Footer />
    </>
  );
}
