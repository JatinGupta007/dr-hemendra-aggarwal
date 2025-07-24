import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Repeat2, ShieldCheck, MoveDiagonal, Snowflake } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const shoulderArthroscopyData = {
  icon: (
    <Image
      src="/Images/treatment_icon_6.png"
      alt="treatment_icon_10"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Shoulder Arthroscopy (for Rotator Cuff, Labrum)",
  subtitle: "Minimally Invasive Shoulder Surgery",
  description:
    "Shoulder Arthroscopy is a precise and less invasive surgical technique used to treat shoulder joint problems like rotator cuff tears, labrum injuries, and impingement syndrome. It involves tiny cuts and a camera-guided approach for faster recovery.",
  services: [
    {
      title: "Rotator Cuff Repair",
      subtitle: "Restores torn tendons from injury or overuse.",
      icon: <Repeat2 className="w-6 h-6" />,
    },
    {
      title: "Labrum Tear Fix (SLAP/Bankart)",
      subtitle: "Stabilizes the shoulder joint by repairing torn cartilage.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Impingement Relief",
      subtitle: "Removes bone spurs or inflamed tissues to relieve pain.",
      icon: <MoveDiagonal className="w-6 h-6" />,
    },
    {
      title: "Frozen Shoulder Treatment",
      subtitle: "Restores mobility and reduces joint stiffness.",
      icon: <Snowflake className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Tiny incisions and minimal scarring",
    "Faster healing and reduced postoperative pain",
    "High precision for tendon and cartilage repairs",
    "Quick return to daily routines and athletics",
  ],
  highlights: {
    title: "Expert Shoulder Arthroscopy in Jaipur",
    description:
      "Restore shoulder strength and flexibility with minimally invasive arthroscopy techniques. Trusted care for rotator cuff, labrum, and shoulder instability.",
    button: "Explore Shoulder Arthroscopy",
  },
  keywords: [
    "shoulder arthroscopy Jaipur",
    "rotator cuff surgery Jaipur",
    "labrum tear repair Jaipur",
    "shoulder pain treatment Jaipur",
  ],
};



export default function ShoulderArthroscopy() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={shoulderArthroscopyData} />
      <Footer />
    </>
  );
}
