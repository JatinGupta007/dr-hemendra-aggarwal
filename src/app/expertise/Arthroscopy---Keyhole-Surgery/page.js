import React from "react";
import Image from "next/image";
import SpecificExpertise from "@/component/SpecificExpertise";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const arthroscopyData = {
  icon: (
    <Image
      src="/Images/treatment_icon_2.png"
      alt="treatment_icon_2"
      width={110}
      height={80}
      className="mx-auto"
    />
  ),
  title: "Arthroscopy - Keyhole Surgery",
  subtitle: "",
  description:
    "Minimally invasive procedure using advanced camera technology to diagnose and treat joint problems. Perfect for early-stage cartilage injuries and sports-related tears.",
  services: [
    {
      title: "Knee Arthroscopy (for Meniscus, ACL, PCL)",
      subtitle: "Meniscus, ACL, PCL",
      icon: (
        <Image
          src="/Images/treatment_icon_8.png"
          alt="treatment_icon_8"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
    },
    {
      title: "Shoulder Arthroscopy (for Rotator Cuff, Labrum)",
      subtitle: "Rotator Cuff, Labrum",
      icon: (
        <Image
          src="/Images/treatment_icon_6.png"
          alt="treatment_icon_8"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
    },
    {
      title: "Ankle, Wrist, & Elbow Arthroscopy",
      subtitle: "Ankle, Wrist, Elbow",
      icon: (
        <Image
          src="/Images/treatment_icon_5.png"
          alt="treatment_icon_8"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
    },
    {
      title: "Diagnostic & Corrective Keyhole Surgery",
      subtitle: "Corrective Keyhole",
      icon: (
        <Image
          src="/Images/treatment_icon_12.png"
          alt="treatment_icon_8"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
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
