import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Activity, Link, Video} from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const aclPclData = {
  icon: (
    <Image
      src="/Images/treatment_icon_13.png"
      alt="treatment_icon_13"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "ACL Or PCL Reconstruction",
  subtitle: "Restore Knee Stability with Advanced Ligament Repair",
  description:
    "ACL and PCL reconstruction surgery repairs torn knee ligaments caused by sports injuries or trauma. Using tissue grafts and arthroscopic techniques, the surgery restores knee strength and helps prevent future damage.",
  services: [
    {
      title: "Arthroscopic Reconstruction",
      subtitle:
        "Minimally invasive surgery using a camera and tools through small incisions.",
      icon: <Video className="w-6 h-6" />,
    },
    {
      title: "Tissue Graft Replacement",
      subtitle:
        "Damaged ligament is replaced with a graft from your own body or a donor.",
      icon: <Link className="w-6 h-6" />,
    },
    {
      title: "Post-Surgery Rehab",
      subtitle:
        "Structured physiotherapy to restore full motion, strength, and balance.",
      icon: <Activity className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Restores knee strength and stability",
    "Safe return to sports and daily movements",
    "Minimally invasive with faster healing",
    "Prevents long-term joint damage and arthritis",
  ],
  highlights: {
    title: "Stabilize, Strengthen, Succeed",
    description:
      "Get back on your feet with confidence. Our ACL/PCL reconstruction uses advanced arthroscopic methods for strong, stable knees and a fast return to activity.",
    button: "Learn About Ligament Surgery",
  },
  keywords: [
    "ACL surgery Jaipur",
    "PCL ligament reconstruction",
    "knee ligament repair Jaipur",
    "arthroscopic ACL PCL repair",
    "sports injury knee treatment",
  ],
};


export default function HipReplacement() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={aclPclData} />
      <Footer />
    </>
  );
}
