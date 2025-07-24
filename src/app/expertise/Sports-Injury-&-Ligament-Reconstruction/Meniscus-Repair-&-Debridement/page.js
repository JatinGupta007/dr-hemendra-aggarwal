import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Crosshair, ShieldCheck, Scissors} from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const meniscusData = {
  icon: (
    <Image
      src="/Images/treatment_icon_15.png"
      alt="treatment_icon_14"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Meniscus Repair & Debridement",
  subtitle: "Treat Knee Cartilage Tears with Minimally Invasive Surgery",
  description:
    "Meniscus Repair & Debridement are keyhole procedures used to treat torn or damaged cartilage in the knee joint. Whether repairing or trimming the meniscus, these treatments reduce pain, restore stability, and prevent long-term complications.",
  services: [
    {
      title: "Meniscus Repair",
      subtitle:
        "Surgical stitching of torn cartilage to allow natural healing and full recovery.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Meniscus Debridement",
      subtitle:
        "Trimming or removing damaged portions of the meniscus to relieve pain and improve mobility.",
      icon: <Scissors className="w-6 h-6" />,
    },
    {
      title: "Arthroscopic Precision",
      subtitle:
        "Performed with high precision using a tiny camera and small incisions.",
      icon: <Crosshair className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Restores knee stability and smooth movement",
    "Reduces pain, swelling, and locking",
    "Minimally invasive with fast recovery",
    "Prevents long-term joint damage or arthritis",
  ],
  highlights: {
    title: "Strong Knees Start with the Meniscus",
    description:
      "Protect and restore your knees with expert meniscus surgery. Our minimally invasive approach ensures quick recovery, long-term joint health, and freedom from knee pain.",
    button: "Explore Meniscus Treatment",
  },
  keywords: [
    "Meniscus surgery Jaipur",
    "Knee cartilage repair",
    "Arthroscopic meniscus debridement",
    "Meniscus tear treatment Jaipur",
    "Keyhole meniscus surgery",
  ],
};


export default function Meniscus() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={meniscusData} />
      <Footer />
    </>
  );
}
