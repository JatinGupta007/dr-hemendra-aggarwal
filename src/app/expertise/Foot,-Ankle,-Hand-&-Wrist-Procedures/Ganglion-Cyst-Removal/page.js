import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Scissors, Syringe, Hand } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const ganglionCystData = {
  icon: (
    <Image
      src="/Images/treatment_icon_28.png"
      alt="treatment_icon_32"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Ganglion Cyst Removal",
  subtitle: "Quick Relief from Cysts Without Recurrence",
  description:
    "Ganglion cysts are fluid-filled lumps near joints or tendons, most commonly found on the wrist, hand, or foot. While often harmless, they can cause discomfort or interfere with movement if not treated properly.",
  services: [
    {
      title: "Aspiration",
      subtitle:
        "Draining the cyst fluid using a needle to reduce swelling and discomfort—often the first line of treatment.",
      icon: <Syringe className="w-6 h-6" />,
    },
    {
      title: "Surgical Removal",
      subtitle:
        "Outpatient procedure to remove the cyst and its root entirely, preventing future recurrence.",
      icon: <Scissors className="w-6 h-6" />,
    },
    {
      title: "Supportive Care",
      subtitle:
        "Immobilization and rest to allow healing after treatment and avoid strain on the affected joint.",
      icon: <Hand className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Permanent removal of ganglion cyst",
    "Quick and minimally invasive procedure",
    "Relief from pain, numbness, and swelling",
    "Improved hand or foot function",
  ],
  highlights: {
    title: "Say Goodbye to Painful Lumps",
    description:
      "Our expert care ensures safe, effective cyst removal using the latest techniques—minimizing downtime and maximizing comfort.",
    button: "Consult for Cyst Removal",
  },
  keywords: [
    "Ganglion cyst removal Jaipur",
    "Wrist lump treatment",
    "Foot cyst surgery",
    "Best orthopedic hand surgeon",
    "Minimally invasive ganglion removal",
  ],
};


export default function GanglionCyst() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={ganglionCystData} />
      <Footer />
    </>
  );
}
