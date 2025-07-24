import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Hammer, Hand } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const fractureReductionData = {
  icon: (
    <Image
      src="/Images/treatment_icon_3.png"
      alt="treatment_icon_18"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Open & Closed Reduction",
  subtitle: "Fracture Alignment Procedures for Proper Bone Healing",
  description:
    "Open and Closed Reduction are procedures to realign broken bones and ensure proper healing. While closed reduction is a non-surgical method, open reduction involves surgery when the fracture is complex or displaced. Both aim to restore normal bone position and function.",
  services: [
    {
      title: "Closed Reduction",
      subtitle:
        "Non-surgical alignment of simple fractures using manual manipulation and immobilization.",
      icon: <Hand className="w-6 h-6" />,
    },
    {
      title: "Open Reduction",
      subtitle:
        "Surgical realignment of severe or complex fractures using internal fixation devices.",
      icon: <Hammer className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Corrects bone alignment to promote proper healing",
    "Improves mobility and reduces long-term complications",
    "Minimally invasive (closed) or precise surgical (open) treatment",
    "Faster recovery with proper fixation and physiotherapy",
  ],
  highlights: {
    title: "Precise Fracture Treatment for Complete Recovery",
    description:
      "Whether treated through a cast or surgery, our reduction procedures ensure that your bones heal in the right position, restoring your mobility and preventing future issues.",
    button: "Explore Fracture Treatments",
  },
  keywords: [
    "Fracture treatment Jaipur",
    "Closed reduction for broken bones",
    "Surgical fracture reduction Jaipur",
    "Open reduction internal fixation",
    "Bone alignment procedures",
  ],
};


export default function FractureReduction() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={fractureReductionData} />
      <Footer />
    </>
  );
}
