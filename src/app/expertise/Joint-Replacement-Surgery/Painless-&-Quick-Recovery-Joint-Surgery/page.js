import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Activity, Zap, Home, Stethoscope } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const painlessJointSurgeryData = {
  icon: (
    <Image
      src="/Images/treatment_icon_10.png"
      alt="treatment_icon_7"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Painless & Quick Recovery Joint Surgery",
  subtitle: "Minimally Invasive | Faster Healing",
  description:
    "These advanced joint surgeries focus on pain reduction and faster recovery using modern techniques like minimally invasive surgery, enhanced anesthesia, and early rehabilitation. Ideal for patients seeking a smoother post-operative experience.",
  services: [
    {
      title: "Minimally Invasive Techniques",
      subtitle:
        "Smaller incisions for reduced pain, tissue damage, and scarring.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Advanced Pain Management",
      subtitle:
        "Regional anesthesia and nerve blocks for comfort during recovery.",
      icon: <Stethoscope className="w-6 h-6" />,
    },
    {
      title: "Fast-Track Rehabilitation",
      subtitle: "Early physiotherapy to promote faster movement and healing.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Reduced Hospital Stay",
      subtitle: "Most patients can return home within 1–2 days post-surgery.",
      icon: <Home className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Less postoperative pain and discomfort",
    "Faster return to daily activities",
    "Lower risk of infections or complications",
    "Enhanced long-term joint mobility",
  ],
  highlights: {
    title: "Painless Joint Surgery in Jaipur",
    description:
      "Experience quicker recovery and lasting joint relief with the latest surgical innovations and patient-centered care.",
    button: "Explore Fast-Recovery Surgeries",
  },
  keywords: [
    "painless joint surgery Jaipur",
    "quick recovery joint replacement Jaipur",
    "minimally invasive orthopedic surgery",
  ],
};


export default function PainlessJointSurgery() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={painlessJointSurgeryData} />
      <Footer />
    </>
  );
}
