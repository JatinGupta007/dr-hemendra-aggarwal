import { CheckCircle } from "lucide-react";
import SpecificExpertise from "@/component/SpecificExpertise";
import Navbar from "@/component/Header";  
import Footer from "@/component/Footer";
import Image from "next/image";

const fractureTraumaData = {
  icon: (
          <Image
            src="/Images/treatment_icon_7.png"
            alt="treatment_icon_7"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
  title: "Fracture & Trauma",
  subtitle: "Surgery",
  description:
    "Dr. Hemendra Agarwal has handled thousands of emergency and complex fracture cases at SMS Hospital Jaipur. Whether you have a simple fracture or require implant surgery, you’ll receive immediate and expert care.",
  services: [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Open & Closed Reduction",
      subtitle: "Repositioning fractured bones",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Internal Fixation",
      subtitle: "Using plates, screws, and rods to stabilize bones",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Geriatric & Pediatric Fracture Management",
      subtitle: "Age-specific fracture care",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Complex Polytrauma Surgeries",
      subtitle: "Multiple injuries handled with precision",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Non-healing Fracture & Revision Surgery",
      subtitle: "Advanced solutions for failed fracture healing",
    },
  ],
  benefits: [
    "24x7 trauma & emergency readiness",
    "Minimally invasive fracture care",
    "Expertise in elderly and child trauma",
    "Trusted by thousands at SMS Hospital Jaipur",
  ],
  highlights: {
    title: "Get Emergency Trauma Care",
    description:
      "Immediate attention and surgical expertise for all types of fractures and injuries. Don’t delay care—restore mobility and reduce long-term complications.",
    button: "Contact Emergency Ortho Now",
  },
  keywords: [
    "orthopedic trauma surgeon in Jaipur",
    "fracture treatment Jaipur",
  ],
};

export default function FractureTraumaPage() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={fractureTraumaData} />
      <Footer />
    </>
  );
}