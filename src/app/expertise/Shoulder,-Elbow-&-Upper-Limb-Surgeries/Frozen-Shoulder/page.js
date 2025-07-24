import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Scissors, StretchHorizontal, Droplet } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const frozenShoulderData = {
  icon: (
    <Image
      src="/Images/treatment_icon_19.png"
      alt="treatment_icon_27"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Frozen Shoulder",
  subtitle: "Restoring Mobility in Stiff and Painful Shoulders",
  description:
    "Frozen Shoulder, also known as Adhesive Capsulitis, causes pain and restricted movement in the shoulder joint. It develops gradually and can severely limit daily activities unless treated early with the right interventions.",
  services: [
    {
      title: "Physiotherapy & Medication",
      subtitle:
        "Combining guided exercises with anti-inflammatory medications or steroids to reduce pain and stiffness.",
      icon: <StretchHorizontal className="w-6 h-6" />,
    },
    {
      title: "Hydrodilatation",
      subtitle:
        "A targeted procedure that injects sterile fluid into the joint capsule to gently expand it and improve motion.",
      icon: <Droplet className="w-6 h-6" />,
    },
    {
      title: "Arthroscopic Capsular Release",
      subtitle:
        "Minimally invasive surgery to release thickened capsule tissue and restore full shoulder mobility.",
      icon: <Scissors className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Effective pain relief and shoulder mobility restoration",
    "Faster return to everyday tasks and active lifestyle",
    "Minimally invasive treatments for quicker healing",
    "Customized rehab plan ensures lasting results",
  ],
  highlights: {
    title: "Break Free from Shoulder Stiffness",
    description:
      "Our specialized treatment approach helps you move freely again—whether you’re in the early freezing phase or have had long-standing shoulder stiffness.",
    button: "Schedule Your Shoulder Assessment",
  },
  keywords: [
    "Frozen shoulder specialist Jaipur",
    "Adhesive capsulitis treatment India",
    "Shoulder stiffness doctor near me",
    "Best orthopedic for frozen shoulder",
    "Hydrodilatation for frozen shoulder",
  ],
};

export default function FrozenShoulder() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={frozenShoulderData} />
      <Footer />
    </>
  );
}
