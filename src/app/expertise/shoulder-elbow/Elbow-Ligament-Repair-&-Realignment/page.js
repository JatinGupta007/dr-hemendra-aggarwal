import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Move3D, Bone, Syringe } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const elbowLigamentRepairData = {
  icon: (
    <Image
      src="/Images/treatment_icon_26.png"
      alt="treatment_icon_26"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Elbow Ligament Repair & Realignment",
  subtitle: "Restoring Stability to Damaged Elbow Ligaments",
  description:
    "Elbow Ligament Repair & Realignment is performed to fix torn or weakened ligaments, improving joint stability and function. It’s commonly needed after sports injuries or repeated strain, especially in throwing athletes.",
  services: [
    {
      title: "Ligament Repair",
      subtitle:
        "Stitching the torn ligament back to the bone to restore its function and support.",
      icon: <Bone className="w-6 h-6" />,
    },
    {
      title: "Ligament Reconstruction",
      subtitle:
        "Using a tendon graft to replace a severely damaged ligament—ideal for major tears or Tommy John injuries.",
      icon: <Syringe className="w-6 h-6" />,
    },
    {
      title: "Joint Realignment",
      subtitle:
        "Repositioning the elbow joint to ensure proper alignment and prevent instability or future damage.",
      icon: <Move3D className="w-6 h-6" />,
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
