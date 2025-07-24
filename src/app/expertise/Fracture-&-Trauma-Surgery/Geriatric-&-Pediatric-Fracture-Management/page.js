import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Activity, Baby, ShieldCheck } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const ageSpecificFractureData = {
  icon: (
    <Image
      src="/Images/treatment_icon_17.png"
      alt="treatment_icon_20"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Geriatric & Pediatric Fracture Management",
  subtitle: "Fracture Care Tailored to Age-Specific Needs",
  description:
    "Fracture treatment in elderly and pediatric patients requires special approaches due to differences in bone strength, healing ability, and long-term risks. Our care is customized to ensure safe, effective recovery for all age groups.",
  services: [
    {
      title: "Geriatric Fracture Management",
      subtitle:
        "Focuses on stable fixation, quick mobilization, and minimizing complications like immobility or osteoporosis-related delays.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Pediatric Fracture Management",
      subtitle:
        "Prioritizes growth plate preservation and deformity prevention using flexible nails, pins, or casting for developing bones.",
      icon: <Baby className="w-6 h-6" />,
    },
    {
      title: "Rehabilitation & Monitoring",
      subtitle:
        "Physiotherapy and continuous growth tracking help restore mobility and ensure proper long-term bone development.",
      icon: <Activity className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Faster healing tailored to age-specific needs",
    "Reduced risk of long-term deformity or disability",
    "Use of age-appropriate implants and methods",
    "Comprehensive rehab plans for full recovery",
  ],
  highlights: {
    title: "Safe and Specialized Fracture Healing for All Ages",
    description:
      "We provide advanced fracture care solutions designed for children’s growing bones and elderly patients' fragile skeletons, ensuring stability, safety, and confidence at every stage of recovery.",
    button: "Explore Age-Specific Care",
  },
  keywords: [
    "Geriatric fracture treatment Jaipur",
    "Pediatric orthopedic care Rajasthan",
    "Children bone fracture clinic",
    "Elderly bone injury treatment",
    "Growth plate injury specialist Jaipur",
  ],
};


export default function GariaticAndPediaticFractureManagement() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={ageSpecificFractureData} />
      <Footer />
    </>
  );
}
