import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Syringe, Footprints, Flame } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const plantarFasciitisData = {
  icon: (
    <Image
      src="/Images/treatment_icon_29.png"
      alt="treatment_icon_29"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Plantar Fasciitis",
  subtitle: "Heel Pain Relief for a Comfortable Step Forward",
  description:
    "Plantar Fasciitis is a leading cause of heel pain, resulting from inflammation in the thick band of tissue supporting the foot arch. It often causes stabbing pain during early morning steps or after standing for long periods.",
  services: [
    {
      title: "Non-Surgical Care",
      subtitle:
        "Includes rest, ice, anti-inflammatory medications, and stretching exercises to reduce pain and tension.",
      icon: <Footprints className="w-6 h-6" />,
    },
    {
      title: "Advanced Therapies",
      subtitle:
        "Shockwave therapy, corticosteroid injections, or PRP therapy for faster recovery in moderate to severe cases.",
      icon: <Flame className="w-6 h-6" />,
    },
    {
      title: "Surgical Intervention",
      subtitle:
        "Plantar fascia release surgery in rare cases when conservative treatments fail to provide relief.",
      icon: <Syringe className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Reduces sharp heel pain and swelling",
    "Enables walking and running without discomfort",
    "Supports foot alignment with custom orthotics",
    "Minimally invasive treatments available",
  ],
  highlights: {
    title: "Walk Without Pain Again",
    description:
      "Our personalized plantar fasciitis treatment plans focus on long-term relief and mobility restoration so you can move freely without heel pain holding you back.",
    button: "Schedule Your Foot Assessment",
  },
  keywords: [
    "Plantar fasciitis treatment Jaipur",
    "Heel pain specialist near me",
    "Foot pain orthopedic doctor",
    "Best orthotics for heel pain",
    "Shockwave therapy plantar fasciitis",
  ],
};


export default function PlantarFasciitis() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={plantarFasciitisData} />
      <Footer />
    </>
  );
}
