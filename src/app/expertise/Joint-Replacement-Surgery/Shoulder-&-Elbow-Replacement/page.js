import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Activity, Zap, Eye, Stethoscope } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const shoulderElbowReplacementData = {
  icon: (
    <Image
      src="/Images/treatment_icon_6.png"
      alt="treatment_icon_4"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Shoulder & Elbow Replacement",
  subtitle: "Advanced Joint Replacement Surgery",
  description:
    "Shoulder and Elbow Replacement Surgery are advanced orthopedic procedures that replace damaged or worn-out joint surfaces with artificial implants. These are recommended when pain, stiffness, or joint damage severely limits movement and daily function.",
  services: [
    {
      title: "When is it Needed?",
      subtitle:
        "For severe arthritis, complex fractures, chronic joint pain, or failed previous surgeries.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Total Shoulder Replacement",
      subtitle:
        "Both the ball and socket of the shoulder joint are replaced with prosthetics.",
      icon: <Stethoscope className="w-6 h-6" />,
    },
    {
      title: "Partial Shoulder Replacement",
      subtitle:
        "Only the damaged shoulder portion is replaced, preserving natural bone.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Total Elbow Replacement",
      subtitle:
        "The entire elbow joint is replaced with artificial components to restore motion.",
      icon: <Eye className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Significant pain relief and improved arm function",
    "Restored range of motion and strength",
    "Faster recovery with modern surgical techniques",
    "Long-lasting and stable joint performance",
  ],
  highlights: {
    title: "Shoulder & Elbow Replacement in Jaipur",
    description:
      "Specialized surgeries for arthritis, trauma, and degenerative joint issues using durable prosthetics and expert techniques to ensure lasting results and faster recovery.",
    button: "Explore Shoulder & Elbow Care",
  },
  keywords: [
    "shoulder replacement Jaipur",
    "elbow replacement Jaipur",
    "orthopedic joint replacement Jaipur",
    "shoulder pain surgery Jaipur",
    "elbow arthritis treatment Jaipur",
  ],
};

export default function ShoulderAndElbowReplacement() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={shoulderElbowReplacementData} />
      <Footer />
    </>
  );
}
