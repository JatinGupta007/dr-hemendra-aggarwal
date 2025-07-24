import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Bone, Syringe, Pill} from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const tennisGolferElbowData = {
  icon: (
    <Image
      src="/Images/treatment_icon_21.png"
      alt="treatment_icon_25"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Tennis Elbow & Golfer's Elbow",
  subtitle: "Elbow Pain Relief from Tendon Overuse Injuries",
  description:
    "Tennis Elbow and Golfer’s Elbow are painful tendon conditions caused by repetitive motion or strain. Treatment focuses on reducing pain, improving grip strength, and restoring elbow function through non-surgical and surgical methods.",
  services: [
    {
      title: "Conservative Treatment",
      subtitle:
        "Includes physiotherapy, rest, bracing, and medications to reduce inflammation and promote healing.",
      icon: <Pill className="w-6 h-6" />,
    },
    {
      title: "PRP & Steroid Injections",
      subtitle:
        "Platelet-rich plasma (PRP) or corticosteroid injections help reduce pain and stimulate tendon repair.",
      icon: <Syringe className="w-6 h-6" />,
    },
    {
      title: "Surgical Tendon Debridement",
      subtitle:
        "Performed arthroscopically or through open surgery to remove damaged tissue and restore elbow strength.",
      icon: <Bone className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Targeted pain relief for elbow overuse injuries",
    "Improved grip strength and arm stability",
    "Faster recovery with non-invasive treatments",
    "Reduces chances of recurrence through rehab",
  ],
  highlights: {
    title: "Specialized Care for Elbow Pain",
    description:
      "Our experts provide tailored treatment for tennis and golfer’s elbow, using advanced therapy and minimally invasive procedures for quick and lasting relief.",
    button: "Schedule Your Elbow Evaluation",
  },
  keywords: [
    "Tennis elbow treatment Jaipur",
    "Golfer’s elbow pain relief",
    "Elbow tendonitis specialist Rajasthan",
    "PRP injection for elbow India",
    "Best elbow surgeon near me",
  ],
};


export default function TennisGolferElbow() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={tennisGolferElbowData} />
      <Footer />
    </>
  );
}
