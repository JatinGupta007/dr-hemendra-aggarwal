import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import {Activity, Zap, Eye, Stethoscope} from 'lucide-react'
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const jointReplacementData = {
  icon: (
    <Image
      src="/Images/treatment_icon_1.png"
      alt="treatment_icon_1"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Joint Replacement",
  subtitle: "Total & Partial Knee Replacement",
  description:
    "Total and Partial Knee Replacement are surgical procedures designed to relieve severe knee pain and improve joint function when other treatments fail. These procedures involve replacing the damaged or worn-out surfaces of the knee joint with artificial components (prosthetics) that mimic the natural joint's movement.",
  services: [
    {
      title: "Why is Knee Replacement Needed?",
      subtitle:
        "Recommended for patients with severe arthritis, deformities, or injury-related joint damage.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Total Knee Replacement (TKR)",
      subtitle:
        "Entire knee joint is replaced — ideal for advanced arthritis affecting the whole joint.",
      icon: <Stethoscope className="w-6 h-6" />,
    },
    {
      title: "Partial Knee Replacement (PKR)",
      subtitle:
        "Only the damaged portion is replaced — preserves healthy ligaments and bone.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Surgical Approach",
      subtitle:
        "Performed under anesthesia using advanced tools and imaging for accurate implant placement.",
      icon: <Eye className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Significant pain relief",
    "Improved mobility and flexibility",
    "Faster recovery with minimally invasive techniques",
    "Long-lasting results with high-quality implants",
  ],
  highlights: {
    title: "Expert Knee Replacement in Jaipur",
    description:
      "Dr. Hemendra Agrawal performs Total and Partial Knee Replacement surgeries using advanced imaging, precision tools, and minimally invasive methods. Each procedure is tailored for optimal recovery and long-term success.",
    button: "Explore Knee Replacement Options",
  },
  keywords: [
    "total knee replacement Jaipur",
    "partial knee replacement Jaipur",
    "best knee replacement surgeon in Jaipur",
    "joint replacement surgery Jaipur",
    "orthopedic surgeon Jaipur",
  ],
};


export default function TotalKneeReplacement(){
  return(
    <>
    <Navbar />
    <SpecificExpertise data={jointReplacementData} />
    <Footer />
    </>
  )
}
