import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Wrench, Settings2, Layers3 } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const shoulderDislocationData = {
  icon: (
    <Image
      src="/Images/treatment_icon_6.png"
      alt="treatment_icon_15"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Shoulder Dislocation Surgery",
  subtitle: "Restore Shoulder Stability After Recurrent Dislocations",
  description:
    "Shoulder Dislocation Surgery is performed to repair torn ligaments and soft tissues that lead to joint instability. It's especially beneficial for patients with frequent dislocations or injuries that don’t respond to physiotherapy or bracing.",
  services: [
    {
      title: "Arthroscopic Bankart Repair",
      subtitle:
        "Minimally invasive technique to fix torn labrum and ligaments.",
      icon: <Settings2 className="w-6 h-6" />,
    },
    {
      title: "Open Stabilization Surgery",
      subtitle:
        "Used in complex cases where more extensive repair is required.",
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      title: "Bone Block Procedures",
      subtitle:
        "For patients with bone loss or repeated dislocations requiring extra stability.",
      icon: <Layers3 className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Restores shoulder strength and joint stability",
    "Prevents repeated dislocations",
    "Minimally invasive methods allow faster recovery",
    "Enables return to sports and physical work",
  ],
  highlights: {
    title: "Freedom from Shoulder Instability",
    description:
      "Stop the cycle of dislocations and regain confidence in every movement. Our expert surgeons ensure safe, lasting shoulder stabilization with modern surgical techniques.",
    button: "Learn About Shoulder Surgery",
  },
  keywords: [
    "Shoulder dislocation surgery Jaipur",
    "Bankart repair Jaipur",
    "Recurrent shoulder instability treatment",
    "Minimally invasive shoulder repair",
    "Shoulder stabilization surgery Jaipur",
  ],
};


export default function ShoulderDislocationData() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={shoulderDislocationData} />
      <Footer />
    </>
  );
}
