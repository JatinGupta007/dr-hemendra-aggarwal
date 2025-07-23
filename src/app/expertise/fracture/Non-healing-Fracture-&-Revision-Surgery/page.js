import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Ruler, Screwdriver, Bone } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const revisionSurgeryData = {
  icon: (
    <Image
      src="/Images/treatment_icon_22.png"
      alt="treatment_icon_22"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Non-healing Fracture & Revision Surgery",
  subtitle: "Correcting Improper Bone Healing & Failed Surgeries",
  description:
    "Revision surgery is essential when fractures fail to heal correctly or remain unhealed for months. Known as nonunion or malunion, these cases require expert surgical intervention to relieve pain, restore function, and ensure the bone heals properly.",
  services: [
    {
      title: "Revision Internal Fixation",
      subtitle:
        "Adjusting or replacing implants like plates, screws, or rods to improve bone stability and support healing.",
      icon: <Screwdriver className="w-6 h-6" />,
    },
    {
      title: "Bone Grafting Techniques",
      subtitle:
        "Inserting natural or synthetic bone grafts to stimulate bone regrowth in nonunion or bone loss cases.",
      icon: <Bone className="w-6 h-6" />,
    },
    {
      title: "Corrective Osteotomy & External Fixation",
      subtitle:
        "Realigning malformed bones or applying external stabilizers in complex or infected fracture cases.",
      icon: <Ruler className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Supports complete healing of stubborn fractures",
    "Corrects deformities caused by malalignment",
    "Relieves pain and restores daily mobility",
    "Minimizes risk of future joint or bone complications",
  ],
  highlights: {
    title: "Healing What Others Couldn't Fix",
    description:
      "Our expert revision surgery team specializes in nonunion and malunion fracture correction. Whether it's a failed implant, persistent pain, or improper healing—we deliver the care needed for long-term recovery and comfort.",
    button: "Explore Fracture Revision Options",
  },
  keywords: [
    "Nonunion fracture surgery Jaipur",
    "Malunion bone correction Rajasthan",
    "Revision fracture surgery specialist",
    "Bone grafting orthopedic Jaipur",
    "Failed fracture treatment revision",
  ],
};


export default function NonHealingFracture() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={revisionSurgeryData} />
      <Footer />
    </>
  );
}
