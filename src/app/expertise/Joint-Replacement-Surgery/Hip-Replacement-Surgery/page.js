import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Activity, Zap, Eye, Stethoscope } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const hipReplacementData = {
  icon: (
    <Image
      src="/Images/treatment_icon_9.png"
      alt="treatment_icon_3"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Hip Replacement",
  subtitle: "Restoring Mobility & Comfort",
  description:
    "Hip Replacement Surgery is a highly effective orthopedic procedure performed to replace a damaged or worn-out hip joint with an artificial implant. It’s recommended when hip pain, stiffness, or restricted movement significantly affects quality of life and non-surgical treatments fail.",
  services: [
    {
      title: "When is Hip Replacement Needed?",
      subtitle:
        "For severe arthritis, hip fractures, avascular necrosis, or chronic pain limiting daily activities.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Total Hip Replacement",
      subtitle:
        "Replaces both the ball (femoral head) and socket (acetabulum) with artificial components.",
      icon: <Stethoscope className="w-6 h-6" />,
    },
    {
      title: "Partial Hip Replacement",
      subtitle:
        "Only the femoral head is replaced; the natural socket remains intact.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Surgical Procedure",
      subtitle:
        "Performed under anesthesia; damaged bone is replaced with metal, ceramic, or plastic parts.",
      icon: <Eye className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Long-term pain relief and restored joint function",
    "Improved mobility and walking ability",
    "Faster rehabilitation with modern surgical techniques",
    "Durable implants for long-lasting results",
  ],
  highlights: {
    title: "Advanced Hip Replacement in Jaipur",
    description:
      "Offering precise hip replacement surgeries for arthritis, fractures, and chronic joint damage using modern implants and surgical techniques. Start walking within days after surgery with guided rehab.",
    button: "Discover Hip Replacement Solutions",
  },
  keywords: [
    "hip replacement surgery Jaipur",
    "total hip replacement Jaipur",
    "partial hip replacement Jaipur",
    "hip joint pain treatment Jaipur",
    "orthopedic hip surgeon Jaipur",
  ],
};

export default function HipReplacement() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={hipReplacementData} />
      <Footer />
    </>
  );
}
