import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Wrench, ShieldCheck, Hand } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const carpalTunnelSyndromeData = {
  icon: (
    <Image
      src="/Images/treatment_icon_28.png"
      alt="treatment_icon_28"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Carpal Tunnel Syndrome",
  subtitle: "Relieve Hand Numbness and Tingling for Better Grip and Function",
  description:
    "Carpal Tunnel Syndrome (CTS) results from compression of the median nerve in the wrist, leading to hand pain, numbness, and weakness. Early diagnosis and treatment can prevent permanent nerve damage and restore normal hand use.",
  services: [
    {
      title: "Non-Surgical Therapy",
      subtitle:
        "Includes wrist splints, anti-inflammatory medications, and steroid injections to relieve nerve pressure.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Carpal Tunnel Release Surgery",
      subtitle:
        "Minimally invasive surgery to cut the ligament pressing on the median nerve, relieving symptoms and preventing further damage.",
      icon: <Hand className="w-6 h-6" />,
    },
    {
      title: "Ergonomic Advice & Prevention",
      subtitle:
        "Guidance on posture, workspace setup, and activity modification to prevent recurrence and support recovery.",
      icon: <Wrench className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Quick relief from hand tingling, pain, and weakness",
    "Restoration of grip strength and daily hand function",
    "Minimally invasive techniques for faster healing",
    "Prevents permanent nerve damage with early care",
  ],
  highlights: {
    title: "Protect Your Hands, Regain Control",
    description:
      "Our expert team uses advanced diagnostics and treatment methods to stop nerve damage and restore healthy hand use—ideal for professionals, athletes, and everyday individuals alike.",
    button: "Book a Nerve Evaluation",
  },
  keywords: [
    "Carpal tunnel treatment Jaipur",
    "Median nerve compression surgery",
    "Wrist pain and numbness doctor",
    "CTS specialist near me",
    "Best orthopedic for carpal tunnel",
  ],
};


export default function CarpalTunnelSyndrome() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={carpalTunnelSyndromeData} />
      <Footer />
    </>
  );
}
