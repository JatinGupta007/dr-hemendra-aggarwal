import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Wrench, Hammer, MoveRight } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const internalFixationData = {
  icon: (
    <Image
      src="/Images/treatment_icon_16.png"
      alt="treatment_icon_19"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Internal Fixation (Plates, Screws, Rods)",
  subtitle: "Surgical Bone Stabilization with Durable Implants",
  description:
    "Internal Fixation is a surgical procedure that uses metal implants such as plates, screws, or rods to stabilize broken bones. It ensures accurate bone alignment, promotes faster healing, and allows quicker return to movement compared to traditional casts.",
  services: [
    {
      title: "Plates and Screws",
      subtitle:
        "Metal plates and screws are attached to the bone to hold fragments in place for proper healing.",
      icon: <Hammer className="w-6 h-6" />,
    },
    {
      title: "Intramedullary Rods or Nails",
      subtitle:
        "Long rods inserted into the bone canal to strengthen and align large bones like the femur or tibia.",
      icon: <MoveRight className="w-6 h-6" />,
    },
    {
      title: "Pins and Wires",
      subtitle:
        "Used for smaller bones, especially in the hands or wrists, to fix minor fractures securely.",
      icon: <Wrench className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Provides strong stabilization for complex fractures",
    "Allows early movement and functional recovery",
    "Prevents deformities and promotes accurate bone healing",
    "Durable implants ensure long-term support",
  ],
  highlights: {
    title: "Reliable Bone Healing Through Advanced Fixation",
    description:
      "Our internal fixation procedures use high-quality implants to ensure your bones heal safely and correctly, helping you get back to your normal routine faster.",
    button: "Learn About Bone Fixation",
  },
  keywords: [
    "Internal fixation surgery Jaipur",
    "Plates and screws orthopedic treatment",
    "Intramedullary nail fracture repair",
    "Rod and screw fracture fixation",
    "Orthopedic implant surgery Rajasthan",
  ],
};


export default function InternalFixation() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={internalFixationData} />
      <Footer />
    </>
  );
}
