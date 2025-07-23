import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Thermometer, Hammer, HandMetal} from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const triggerFingerData = {
  icon: (
    <Image
      src="/Images/treatment_icon_33.png"
      alt="treatment_icon_33"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Trigger Finger Release",
  subtitle: "Quick Relief from Finger Locking & Pain",
  description:
    "Trigger Finger occurs when inflammation in the tendon sheath causes a finger to catch or lock in a bent position. If conservative treatments fail, a minor surgical procedure can restore smooth, pain-free movement.",
  services: [
    {
      title: "Conservative Care",
      subtitle:
        "Includes rest, splinting, anti-inflammatory medication, and corticosteroid injections to reduce swelling.",
      icon: <Thermometer className="w-6 h-6" />,
    },
    {
      title: "Trigger Finger Release Surgery",
      subtitle:
        "Minimally invasive procedure to release the tight tendon sheath and restore normal finger movement.",
      icon: <Hammer className="w-6 h-6" />,
    },
    {
      title: "Post-Surgery Rehabilitation",
      subtitle:
        "Gentle stretching and hand exercises to regain flexibility and prevent recurrence.",
      icon: <HandMetal className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Instant relief from finger locking",
    "Smooth and pain-free hand motion",
    "Minimally invasive with fast healing",
    "Low recurrence with proper care",
  ],
  highlights: {
    title: "Restore Normal Hand Function Effortlessly",
    description:
      "Trigger Finger Release is a safe and effective solution when non-surgical care isn’t enough. Our expert-led treatment helps you regain hand comfort and strength.",
    button: "Book Trigger Finger Consultation",
  },
  keywords: [
    "Trigger finger treatment Jaipur",
    "Finger locking surgery",
    "Best hand surgeon near me",
    "Minimally invasive trigger release",
    "Finger pain doctor Jaipur",
  ],
};


export default function TriggerFinger() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={triggerFingerData} />
      <Footer />
    </>
  );
}
