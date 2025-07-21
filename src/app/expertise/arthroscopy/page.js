import React from "react";
import { Eye, Activity, Stethoscope, Zap } from "lucide-react";
import SpecificExpertise from "@/component/SpecificExpertise";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const arthroscopyData = {
  icon: <Eye className="w-8 h-8 text-[#197d85]" />,
  title: "Arthroscopy",
  subtitle: "Keyhole Surgery",
  description:
    "Minimally invasive procedure using advanced camera technology to diagnose and treat joint problems. Perfect for early-stage cartilage injuries and sports-related tears.",
  services: [
    {
      title: "Knee Arthroscopy",
      subtitle: "Meniscus, ACL, PCL",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Shoulder Arthroscopy",
      subtitle: "Rotator Cuff, Labrum",
      icon: <Stethoscope className="w-6 h-6" />,
    },
    {
      title: "Joint Arthroscopy",
      subtitle: "Ankle, Wrist, Elbow",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Diagnostic Surgery",
      subtitle: "Corrective Keyhole",
      icon: <Eye className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Faster recovery time",
    "Minimal pain and scarring",
    "Reduced risk of complications",
    "Outpatient procedure",
  ],
  highlights: {
    title: "Expert Arthroscopy in Jaipur",
    description:
      "Advanced keyhole surgery techniques for knee, shoulder, ankle, wrist, and elbow procedures.",
    button: "Explore Arthroscopic Treatments",
  },
  keywords: [
    "arthroscopy surgeon in Jaipur",
    "knee arthroscopy Jaipur",
    "ankle arthroscopy Jaipur",
  ],
};

export default function ExpertisePage() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={arthroscopyData} />
      <Footer />
    </>
  );
}
