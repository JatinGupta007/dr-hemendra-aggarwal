import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { BarChart2, HeartPulse, Hammer } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const ankleInstabilityData = {
  icon: (
    <Image
      src="/Images/treatment_icon_27.png"
      alt="treatment_icon_31"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Ankle Sprains & Instability",
  subtitle: "Rebuild Strength & Prevent Future Ankle Injuries",
  description:
    "Ankle sprains and instability often result from sudden twisting or rolling, commonly during sports or walking on uneven surfaces. Without proper care, repeated injuries can weaken the joint, leading to chronic instability.",
  services: [
    {
      title: "Conservative Treatment",
      subtitle:
        "RICE (Rest, Ice, Compression, Elevation), ankle braces, and physiotherapy to manage pain and restore function.",
      icon: <HeartPulse className="w-6 h-6" />,
    },
    {
      title: "Minimally Invasive Surgery",
      subtitle:
        "Arthroscopic repair or ligament reconstruction to restore joint stability in severe or recurrent cases.",
      icon: <Hammer className="w-6 h-6" />,
    },
    {
      title: "Rehabilitation Programs",
      subtitle:
        "Strengthening and balance training to prevent future ankle injuries and improve movement control.",
      icon: <BarChart2 className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Restores ankle strength and balance",
    "Reduces swelling and speeds recovery",
    "Prevents recurring ankle injuries",
    "Quick return to daily activities and sports",
  ],
  highlights: {
    title: "Get Back on Your Feet with Confidence",
    description:
      "We provide personalized care plans—from conservative management to advanced procedures—to treat sprains and long-standing ankle instability effectively.",
    button: "Schedule Ankle Evaluation",
  },
  keywords: [
    "Ankle sprain treatment Jaipur",
    "Ankle instability surgery",
    "Sports injury ankle rehab",
    "Best ankle surgeon near me",
    "Ligament tear ankle doctor",
  ],
};


export default function AnkleInstability() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={ankleInstabilityData} />
      <Footer />
    </>
  );
}
