import SpecificExpertise from "@/component/SpecificExpertise";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";
import { Stethoscope, CheckCircle } from "lucide-react"; // Or any other icon you want

const jointReplacementData = {
  icon: <Stethoscope className="w-8 h-8 text-[#197d85]" />,
  title: "Joint Replacement Surgery",
  subtitle: "",
  description:
    "Joint pain limiting your movement? Dr. Hemendra Agarwal is an experienced joint replacement surgeon in Jaipur offering modern, minimally invasive procedures for patients with arthritis, cartilage damage, or failed past implants.",
  services: [
    {
      title: "Total & Partial Knee Replacement",
      subtitle: "For chronic knee arthritis and damage.",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      title: "Hip Replacement Surgery",
      subtitle: "Smooth, pain-free hip joint mobility.",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      title: "Shoulder & Elbow Replacement",
      subtitle: "Advanced joint solutions for arms.",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      title: "Reverse Shoulder Replacement",
      subtitle: "Ideal for complex shoulder injuries.",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      title: "Revision Joint Replacement Surgeries",
      subtitle: "Fixing or upgrading failed implants.",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      title: "Painless & Quick Recovery Joint Surgery",
      subtitle: "Modern techniques for faster healing.",
      icon: <CheckCircle className="w-5 h-5" />,
    },
  ],
  benefits: [
    "Minimally Invasive Techniques",
    "Reduced Hospital Stay",
    "Expert Surgical Care",
    "Improved Quality of Life",
    "Affordable Joint Replacement in Jaipur",
  ],
  highlights: {
    title: "Looking for the best knee replacement surgeon in Jaipur?",
    description: "Book your consultation today and step into a pain-free life.",
    button: "Learn More About Joint Replacement",
  },
  keywords: [
    "joint replacement surgeon in Jaipur",
    "knee replacement surgeon in Jaipur",
    "painless joint replacement Jaipur",
  ],
};
// Update the path as needed
export default function JointReplacementPage() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={jointReplacementData} />
      <Footer />
    </>
  );
}
