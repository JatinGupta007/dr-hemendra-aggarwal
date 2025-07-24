import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Hammer, Bone, Stethoscope } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const polytraumaData = {
  icon: (
    <Image
      src="/Images/treatment_icon_18.png"
      alt="treatment_icon_21"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Complex Polytrauma Surgeries",
  subtitle: "Comprehensive Care for Multiple Severe Injuries",
  description:
    "Complex Polytrauma Surgeries involve managing multiple serious injuries at once—commonly caused by road accidents, falls, or industrial trauma. These surgeries require precise coordination across medical disciplines to stabilize, treat, and rehabilitate the patient effectively.",
  services: [
    {
      title: "Damage Control Orthopedics (DCO)",
      subtitle:
        "Initial fracture stabilization using external fixators to prevent further trauma and prepare for definitive surgery.",
      icon: <Hammer className="w-6 h-6" />,
    },
    {
      title: "Definitive Fixation & Reconstruction",
      subtitle:
        "Use of internal fixation methods (plates, screws, rods) and soft tissue repair once the patient is stable.",
      icon: <Bone className="w-6 h-6" />,
    },
    {
      title: "Joint & Soft Tissue Recovery",
      subtitle:
        "Joint replacement or reconstruction, along with tendon, ligament, or nerve repair for complete functional restoration.",
      icon: <Stethoscope className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Life-saving early stabilization of critical injuries",
    "Reduces long-term disability through expert surgical care",
    "Enables faster recovery with targeted treatment plans",
    "Team-based approach ensures full-body rehabilitation",
  ],
  highlights: {
    title: "Saving Lives, Restoring Function",
    description:
      "Our polytrauma team specializes in critical injury management—ensuring each fracture, ligament, or organ damage is treated with precision and care. From emergency care to full rehabilitation, we’re with you every step.",
    button: "Learn More About Trauma Recovery",
  },
  keywords: [
    "Polytrauma surgeon Jaipur",
    "Multiple fracture treatment Rajasthan",
    "Road accident injury hospital",
    "Orthopedic trauma surgery Jaipur",
    "Complex injury rehabilitation specialist",
  ],
};


export default function ComplexPolytraumaSurgeries() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={polytraumaData} />
      <Footer />
    </>
  );
}
