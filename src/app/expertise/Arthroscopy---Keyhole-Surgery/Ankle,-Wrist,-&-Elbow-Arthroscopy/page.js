import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Footprints, Hand, Armchair } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const smallJointArthroscopyData = {
  icon: (
    <Image
      src="/Images/treatment_icon_5.png"
      alt="treatment_icon_11"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Ankle, Wrist, & Elbow Arthroscopy",
  subtitle: "Minimally Invasive Joint Repairs",
  description:
    "Ankle, Wrist, and Elbow Arthroscopy are keyhole procedures that help treat joint issues with high precision and minimal pain. These surgeries are ideal for injuries, arthritis, or chronic joint discomfort affecting mobility and daily function.",
  services: [
    {
      title: "Ankle Arthroscopy",
      subtitle: "For ligament injuries, bone spurs, or arthritis-related pain.",
      icon: <Footprints className="w-6 h-6" />,
    },
    {
      title: "Wrist Arthroscopy",
      subtitle: "Treats TFCC tears, ganglion cysts, and carpal instability.",
      icon: <Hand className="w-6 h-6" />,
    },
    {
      title: "Elbow Arthroscopy",
      subtitle: "Helps with tennis elbow, stiffness, or loose fragments.",
      icon: <Armchair className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Tiny incisions and minimal scarring",
    "Fast healing with less pain",
    "Precise treatment for small joints",
    "Quick return to normal activities",
  ],
  highlights: {
    title: "Precision Arthroscopy for Small Joints",
    description:
      "Restore pain-free movement in your ankle, wrist, or elbow with expert arthroscopic care. Trusted surgical solutions in Jaipur using modern tools and techniques.",
    button: "Explore Small Joint Arthroscopy",
  },
  keywords: [
    "ankle arthroscopy Jaipur",
    "wrist arthroscopy Jaipur",
    "elbow arthroscopy Jaipur",
    "TFCC repair Jaipur",
    "tennis elbow surgery Jaipur",
  ],
};


export default function SmallJointArthroscopy() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={smallJointArthroscopyData} />
      <Footer />
    </>
  );
}
