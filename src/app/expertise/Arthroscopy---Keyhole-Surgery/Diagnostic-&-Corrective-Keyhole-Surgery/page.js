import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Search, Wrench, Puzzle } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const keyholeSurgeryData = {
  icon: (
    <Image
      src="/Images/treatment_icon_12.png"
      alt="treatment_icon_12"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Diagnostic & Corrective Keyhole Surgery",
  subtitle: "Advanced Arthroscopy for Accurate Treatment",
  description:
    "This minimally invasive procedure allows both diagnosis and repair of joint problems using an arthroscope and special tools. Ideal for treating torn ligaments, cartilage damage, and unexplained joint pain through tiny incisions.",
  services: [
    {
      title: "Diagnostic Arthroscopy",
      subtitle: "Used to inspect joints internally for pain or swelling.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: "Corrective Repairs",
      subtitle:
        "Repairs to torn ligaments, cartilage, or bone fragments using precision tools.",
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      title: "Multi-Joint Use",
      subtitle:
        "Effective on knees, shoulders, elbows, wrists, hips, and ankles.",
      icon: <Puzzle className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Diagnosis and treatment in one session",
    "Minimally invasive with tiny cuts",
    "Faster recovery and less pain",
    "Highly accurate repairs with real-time visuals",
  ],
  highlights: {
    title: "Keyhole Precision for Joint Health",
    description:
      "Get clear answers and precise treatment in one go. Our keyhole surgeries use high-definition arthroscopy for faster healing and better outcomes.",
    button: "Discover Keyhole Surgery Benefits",
  },
  keywords: [
    "keyhole joint surgery Jaipur",
    "diagnostic arthroscopy Jaipur",
    "corrective keyhole surgery",
    "minimally invasive ligament surgery",
    "arthroscopic joint repair",
  ],
};


export default function KeyholeSurgery() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={keyholeSurgeryData} />
      <Footer />
    </>
  );
}
