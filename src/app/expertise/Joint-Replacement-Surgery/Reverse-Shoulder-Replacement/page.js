import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Activity, Zap, Eye, Stethoscope } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const reverseShoulderReplacementData = {
  icon: (
    <Image
      src="/Images/treatment_icon_19.png"
      alt="treatment_icon_5"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Reverse Shoulder Replacement",
  subtitle: "For Severe Shoulder Damage",
  description:
    "Reverse Shoulder Replacement is a specialized surgery for patients with massive rotator cuff tears, failed prior surgeries, or complex arthritis. It reverses the ball-and-socket structure of the shoulder, allowing other muscles like the deltoid to perform shoulder movement.",
  services: [
    {
      title: "When is it Recommended?",
      subtitle:
        "For severe rotator cuff tears, failed surgeries, complex fractures, or chronic instability.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Reversed Joint Mechanics",
      subtitle:
        "Ball placed on the shoulder blade and socket on the arm bone to bypass damaged muscles.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Muscle Compensation",
      subtitle:
        "Deltoid muscle takes over movement, improving stability and motion.",
      icon: <Stethoscope className="w-6 h-6" />,
    },
    {
      title: "Quick Rehabilitation",
      subtitle:
        "Early movement encouraged post-surgery with dedicated physiotherapy.",
      icon: <Eye className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Improved ability to lift and rotate the arm",
    "Significant pain relief",
    "Better shoulder stability and function",
    "Reliable long-term results with advanced implants",
  ],
  highlights: {
    title: "Reverse Shoulder Replacement in Jaipur",
    description:
      "Expert care for complex shoulder issues using advanced reverse prosthetic design and proven surgical techniques.",
    button: "Know More About Shoulder Surgery",
  },
  keywords: [
    "reverse shoulder replacement Jaipur",
    "rotator cuff tear surgery Jaipur",
    "shoulder arthritis treatment Jaipur",
    "orthopedic shoulder specialist Jaipur",
  ],
};

export default function RiverseShoulderReplacement() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={reverseShoulderReplacementData} />
      <Footer />
    </>
  );
}
