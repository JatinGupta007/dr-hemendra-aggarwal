import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Slash, Move, CircleDashed, Droplets } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const kneeArthroscopyData = {
  icon: (
    <Image
      src="/Images/treatment_icon_8.png"
      alt="treatment_icon_9"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Knee Arthroscopy (for Meniscus, ACL, PCL)",
  subtitle: "Minimally Invasive Knee Treatment",
  description:
    "Knee Arthroscopy is a minimally invasive procedure that uses a small camera to diagnose and treat issues in the knee joint. It’s commonly used for repairing the meniscus and reconstructing ACL or PCL ligaments.",
  services: [
    {
      title: "Meniscus Tear Repair",
      subtitle: "Treats meniscus injuries due to twisting or sports trauma.",
      icon: <Slash className="w-6 h-6" />,
    },
    {
      title: "ACL / PCL Reconstruction",
      subtitle: "Restores knee stability using grafts for torn ligaments.",
      icon: <Move className="w-6 h-6" />,
    },
    {
      title: "Cartilage Cleaning",
      subtitle: "Removes loose fragments and damaged cartilage.",
      icon: <CircleDashed className="w-6 h-6" />,
    },
    {
      title: "Pain & Swelling Relief",
      subtitle: "Treats early arthritis and persistent knee inflammation.",
      icon: <Droplets className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Minimal cuts and reduced scarring",
    "Faster healing and less postoperative pain",
    "Quick return to sports and activities",
    "Same-day discharge in most cases",
  ],
  highlights: {
    title: "Trusted Knee Arthroscopy in Jaipur",
    description:
      "Get expert care for ligament injuries and meniscus repair using precision arthroscopy techniques. Minimal downtime, maximum recovery.",
    button: "Learn About Knee Arthroscopy",
  },
  keywords: [
    "knee arthroscopy Jaipur",
    "ACL surgery Jaipur",
    "PCL ligament repair Jaipur",
    "meniscus tear treatment Jaipur",
  ],
};

export default function kneeArthroscopy() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={kneeArthroscopyData} />
      <Footer />
    </>
  );
}
