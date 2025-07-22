import SpecificExpertise from "@/component/SpecificExpertise";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

import { Dumbbell, CheckCircle} from "lucide-react";

const sportsInjuryData = {
  icon: <Dumbbell className="w-8 h-8 text-[#197d85]" />,
  title: "Sports Injury",
  subtitle: "& Ligament Reconstruction",
  description:
    "From athletes to everyday active individuals, ligament tears and soft tissue injuries can drastically affect performance and mobility. Dr. Agarwal is a trusted sports injury doctor in Jaipur, helping patients get back to full strength with personalized rehab protocols and advanced surgeries.",
  services: [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "ACL/PCL Reconstruction",
      subtitle: "Restore knee stability and function",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Meniscus Repair & Debridement",
      subtitle: "Preserve and heal meniscal tissue",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Shoulder Dislocation Surgery",
      subtitle: "Recurrent shoulder instability correction",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Labral Tear Repairs",
      subtitle: "Advanced shoulder and hip labral treatment",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Sports Rehab & Return-to-Play",
      subtitle: "Personalized rehab for athletes",
    },
  ],
  benefits: [
    "Advanced arthroscopic surgeries",
    "Personalized rehabilitation plans",
    "Fast recovery for active lifestyle",
    "Minimally invasive techniques",
  ],
  highlights: {
    title: "Get Treated by Jaipur’s Top Ligament Surgeon",
    description:
      "Trusted by athletes and active individuals across Rajasthan for accurate diagnosis, advanced procedures, and return-to-sport support.",
    button: "Book Consultation Now",
  },
  keywords: [
    "sports injury doctor in Jaipur",
    "ligament surgeon in Jaipur",
    "ACL reconstruction Jaipur",
  ],
};

export default function SportsInjuryPage() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={sportsInjuryData} />
      <Footer />
    </>
  );
}
