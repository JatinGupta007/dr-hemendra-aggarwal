import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { MoveDiagonal, CircleDashed } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const labralTearRepairData = {
  icon: (
    <Image
      src="/Images/treatment_icon_14.png"
      alt="treatment_icon_16"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Labral Tear Repairs",
  subtitle: "Minimally Invasive Repair of Shoulder or Hip Labrum Tears",
  description:
    "Labral Tear Repair Surgery is used to fix cartilage damage in the shoulder or hip joints. These repairs reduce pain, restore joint stability, and improve motion using keyhole (arthroscopic) techniques for faster recovery and minimal scarring.",
  services: [
    {
      title: "Shoulder Labral Repair (Bankart/SLAP)",
      subtitle:
        "Arthroscopic correction of labral tears caused by instability or repeated dislocations.",
      icon: <MoveDiagonal className="w-6 h-6" />,
    },
    {
      title: "Hip Labral Repair",
      subtitle:
        "Restores the cushioning and function of the hip joint by repairing or smoothing torn cartilage.",
      icon: <CircleDashed className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Restores joint stability and range of motion",
    "Minimally invasive approach with smaller incisions",
    "Reduces pain, locking, or clicking sensations",
    "Prevents future joint wear or arthritis",
  ],
  highlights: {
    title: "Reclaim Smooth, Stable Joint Movement",
    description:
      "Our labral tear repairs help you regain smooth, pain-free movement in your shoulders or hips. Whether from sports, trauma, or repetitive use, we provide lasting relief through advanced arthroscopic care.",
    button: "Explore Labral Repair Options",
  },
  keywords: [
    "Labral tear treatment Jaipur",
    "Shoulder labrum repair surgery",
    "Hip labral tear repair Jaipur",
    "SLAP tear surgery Jaipur",
    "Arthroscopic labrum surgery",
  ],
};


export default function LabralTearRepair() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={labralTearRepairData} />
      <Footer />
    </>
  );
}
