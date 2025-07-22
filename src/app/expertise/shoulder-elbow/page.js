import { CheckCircle, Bone} from "lucide-react";
import SpecificExpertise from "@/component/SpecificExpertise";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const upperLimbData = {
  icon: <Bone className="w-8 h-8 text-[#197d85]" />,
  title: "Shoulder, Elbow &",
  subtitle: "Upper Limb Surgeries",
  description:
    "Persistent pain or instability in your shoulder or elbow may require surgical intervention. Dr. Agarwal provides specialized upper limb orthopedic care that restores strength and stability.",
  services: [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Recurrent Shoulder Dislocations",
      subtitle: "Advanced solutions to restore joint stability",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Rotator Cuff Tears",
      subtitle: "Arthroscopic and open repair techniques",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Tennis Elbow & Golfer’s Elbow",
      subtitle: "Pain relief and tendon healing procedures",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Elbow Ligament Repair & Realignment",
      subtitle: "Restoring function and reducing instability",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Frozen Shoulder",
      subtitle: "Release procedures and guided therapy",
    },
  ],
  benefits: [
    "Minimally invasive upper limb surgeries",
    "Fast recovery and rehabilitation plans",
    "Trusted for complex shoulder/elbow disorders",
    "Expert in both sports and age-related conditions",
  ],
  highlights: {
    title: "Explore Shoulder & Elbow Treatments",
    description:
      "Regain full use of your upper limbs with the help of Jaipur’s trusted orthopedic expert. Get back to lifting, throwing, and living pain-free.",
    button: "Book Shoulder Specialist Now",
  },
  keywords: [
    "shoulder dislocation treatment Jaipur",
    "rotator cuff surgery Jaipur",
  ],
};

export default function ShoulderElbowPage() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={upperLimbData} />
      <Footer />
    </>
  );
}
