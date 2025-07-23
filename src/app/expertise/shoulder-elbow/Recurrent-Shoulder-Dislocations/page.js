import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { ShieldCheck, Syringe, Bone} from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const shoulderDislocationData = {
  icon: (
    <Image
      src="/Images/treatment_icon_23.png"
      alt="treatment_icon_23"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Recurrent Shoulder Dislocations",
  subtitle: "Restoring Shoulder Stability & Preventing Future Injuries",
  description:
    "Recurrent shoulder dislocations often result from past trauma, ligament laxity, or labral tears. Surgical solutions help restore strength, prevent instability, and allow patients to return to sports or daily activities with confidence.",
  services: [
    {
      title: "Arthroscopic Bankart Repair",
      subtitle:
        "A keyhole procedure to reattach the torn labrum and tighten the joint capsule, reducing future dislocation risk.",
      icon: <Syringe className="w-6 h-6" />,
    },
    {
      title: "Latarjet Procedure",
      subtitle:
        "Bone grafting technique used when bone loss is present around the shoulder joint, ensuring added stability.",
      icon: <Bone className="w-6 h-6" />,
    },
    {
      title: "Capsular Shift Surgery",
      subtitle:
        "Surgically tightening the stretched shoulder capsule to improve joint strength and reduce instability.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Prevents frequent shoulder dislocations",
    "Strengthens the joint and restores range of motion",
    "Minimally invasive approach with quicker recovery",
    "Safe return to sports and overhead activities",
  ],
  highlights: {
    title: "Regain Shoulder Control & Confidence",
    description:
      "Our expert shoulder surgeons specialize in treating recurrent dislocations using proven techniques like Bankart Repair and Latarjet. Restore your joint’s stability and return to your active lifestyle—without fear of reinjury.",
    button: "Explore Shoulder Stabilization Options",
  },
  keywords: [
    "Recurrent shoulder dislocation surgery Jaipur",
    "Bankart repair specialist Rajasthan",
    "Shoulder instability treatment India",
    "Latarjet procedure for shoulder dislocation",
    "Shoulder ligament repair surgeon Jaipur",
  ],
};


export default function RecurrentShoulderDislocations() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={shoulderDislocationData} />
      <Footer />
    </>
  );
}
