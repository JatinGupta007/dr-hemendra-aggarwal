import SpecificExpertise from "@/component/SpecificExpertise";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";
import Image from "next/image";

const handFootData = {
  icon: (
    <Image
      src="/Images/treatment_icon_5.png"
      alt="treatment_icon_5"
      width={110}
      height={100}
      className="mx-auto"
    />
  ),
  title: "Foot, Ankle, Hand & Wrist Procedures",
  subtitle: "",
  description:
    "Pain or deformity in your feet, hands, or wrists can disrupt your daily activities. Dr. Hemendra Agarwal treats a wide range of peripheral orthopedic problems with both surgical and non-surgical options.",
  services: [
    {
      icon: (
        <Image
          src="/Images/treatment_icon_24.png"
          alt="treatment_icon_6"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Carpal Tunnel Syndrome",
      subtitle: "Relieve hand numbness with effective surgery",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_25.png"
          alt="treatment_icon_6"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Plantar Fasciitis",
      subtitle: "Heel pain treatment with custom plans",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_26.png"
          alt="treatment_icon_6"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Flat Foot, Bunions & Toe Deformities",
      subtitle: "Realignment and correction procedures",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_27.png"
          alt="treatment_icon_6"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Ankle Sprains & Instability",
      subtitle: "Sports and trauma care for ankles",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_28.png"
          alt="treatment_icon_6"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Ganglion Cyst Removal",
      subtitle: "Safe, outpatient surgery for cysts",
    },
    {
      icon: (
          <Image
            src="/Images/treatment_icon_29.png"
            alt="treatment_icon_6"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
      title: "Trigger Finger Release",
      subtitle: "Quick procedure to restore finger mobility",
    },
  ],
  benefits: [
    "Specialized care for hand, foot, and ankle issues",
    "Surgical & non-surgical treatments available",
    "Precise diagnosis and imaging support",
    "Minimally invasive techniques for faster healing",
  ],
  highlights: {
    title: "See Hand & Foot Surgery Options",
    description:
      "Return to your routine without pain or stiffness. Book a consultation with Dr. Agarwal to explore the best orthopedic solutions for your feet and hands.",
    button: "Consult for Hand/Foot Issues",
  },
  keywords: [
    "foot surgeon Jaipur",
    "hand surgeon in Jaipur",
    "carpal tunnel surgery Jaipur",
  ],
};

export default function FootAnklePage() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={handFootData} />
      <Footer />
    </>
  );
}
