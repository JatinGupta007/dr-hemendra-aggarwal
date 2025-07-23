import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Bone, Syringe, Stethoscope } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const rotatorCuffTearData = {
  icon: (
    <Image
      src="/Images/treatment_icon_24.png"
      alt="treatment_icon_24"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Rotator Cuff Tears",
  subtitle: "Shoulder Tendon Repair for Strength & Mobility",
  description:
    "Rotator cuff tears affect the tendons that stabilize your shoulder joint. They can cause pain, weakness, and limited motion. Surgical repair is often needed to restore function and prevent long-term damage.",
  services: [
    {
      title: "Arthroscopic Rotator Cuff Repair",
      subtitle:
        "Minimally invasive surgery to reattach torn tendons to the bone using small incisions and specialized tools.",
      icon: <Syringe className="w-6 h-6" />,
    },
    {
      title: "Open Surgical Repair",
      subtitle:
        "Used for large or complex tears where direct access is needed to ensure proper tendon reattachment.",
      icon: <Bone className="w-6 h-6" />,
    },
    {
      title: "Tendon Grafting",
      subtitle:
        "In cases with significant tendon loss, grafts are used to restore the rotator cuff’s function and strength.",
      icon: <Stethoscope className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Relieves shoulder pain and discomfort",
    "Restores lifting and rotation strength",
    "Minimally invasive approach enables faster healing",
    "Prevents future shoulder instability or arthritis",
  ],
  highlights: {
    title: "Regain Full Shoulder Function",
    description:
      "Our shoulder specialists use advanced arthroscopic techniques to treat rotator cuff tears effectively. From accurate diagnosis to complete recovery, we ensure personalized care every step of the way.",
    button: "Book Shoulder Consultation Today",
  },
  keywords: [
    "Rotator cuff tear surgery Jaipur",
    "Shoulder pain treatment Rajasthan",
    "Arthroscopic shoulder surgery India",
    "Tendon repair surgeon Jaipur",
    "Shoulder specialist near me",
  ],
};


export default function RotatorCuffTear() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={rotatorCuffTearData} />
      <Footer />
    </>
  );
}
