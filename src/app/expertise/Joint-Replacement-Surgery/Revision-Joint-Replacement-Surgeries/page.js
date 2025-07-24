import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Wrench, ShieldAlert, Bone, MoveHorizontal } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const revisionJointReplacementData = {
  icon: (
    <Image
      src="/Images/treatment_icon_11.png"
      alt="treatment_icon_8"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Revision Joint Replacement Surgeries",
  subtitle: "Fixing Failed or Worn-Out Implants",
  description:
    "Revision Joint Replacement Surgery is done when an old joint implant wears out, loosens, or fails due to infection, injury, or wear over time. It restores joint function and stability using modern prosthetics.",
  services: [
    {
      title: "Implant Loosening or Wear",
      subtitle: "Replaces implants that have become loose or worn with use.",
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      title: "Infection Management",
      subtitle:
        "Removes infected implants and replaces them with clean prosthetics.",
      icon: <ShieldAlert className="w-6 h-6" />,
    },
    {
      title: "Fracture or Bone Loss",
      subtitle: "Rebuilds damaged bone before inserting the new implant.",
      icon: <Bone className="w-6 h-6" />,
    },
    {
      title: "Instability or Stiffness",
      subtitle: "Restores smooth, stable motion in previously replaced joints.",
      icon: <MoveHorizontal className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Restores joint stability and movement",
    "Eliminates pain from failed implants",
    "Long-lasting results with modern prosthetics",
    "Improved quality of life and joint function",
  ],
  highlights: {
    title: "Expert Revision Surgeries in Jaipur",
    description:
      "Get relief from failed joint implants with expert care, advanced tools, and durable prosthetics tailored for your comfort and mobility.",
    button: "Learn About Revision Surgeries",
  },
  keywords: [
    "revision joint replacement Jaipur",
    "failed knee implant surgery",
    "hip implant revision Jaipur",
    "shoulder revision surgery Jaipur",
  ],
};

export default function RivisionJointReplacement() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={revisionJointReplacementData} />
      <Footer />
    </>
  );
}
