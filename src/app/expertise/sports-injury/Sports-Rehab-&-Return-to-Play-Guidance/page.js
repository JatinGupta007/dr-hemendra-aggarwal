import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Activity, Dumbbell } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const sportsRehabData = {
  icon: (
    <Image
      src="/Images/treatment_icon_4.png"
      alt="treatment_icon_17"
      width={60}
      height={60}
      className="mx-auto"
    />
  ),
  title: "Sports Rehab & Return-to-Play Guidance",
  subtitle: "Customized Recovery Plans for Safe Athletic Comeback",
  description:
    "Sports Rehabilitation & Return-to-Play Guidance helps athletes recover from injuries and safely return to their sport. Combining physiotherapy, strength training, and sport-specific drills, this program ensures full functional recovery while reducing the risk of re-injury.",
  services: [
    {
      title: "Strength & Flexibility Training",
      subtitle:
        "Targeted exercises to restore muscle balance and joint stability.",
      icon: <Dumbbell className="w-6 h-6" />,
    },
    {
      title: "Gradual Return-to-Play Programs",
      subtitle:
        "Stepwise plans to transition safely from rehab to competitive sport.",
      icon: <Activity className="w-6 h-6" />,
    },
  ],
  benefits: [
    "Accelerated recovery with structured guidance",
    "Reduced risk of re-injury through sport-specific rehab",
    "Personalized plans for individual sports and goals",
    "Holistic care involving fitness, therapy, and nutrition",
  ],
  highlights: {
    title: "Return Stronger and Smarter to Your Sport",
    description:
      "Our sports rehab program ensures you're physically and mentally prepared to compete again. We tailor every stage of your recovery to your sport and goals, ensuring peak performance and injury prevention.",
    button: "Start Your Rehab Journey",
  },
  keywords: [
    "Sports injury rehab Jaipur",
    "Athlete rehabilitation programs",
    "Return to play training Jaipur",
    "ACL recovery for athletes",
    "Rotator cuff sports rehab",
  ],
};


export default function SportsRehab() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={sportsRehabData} />
      <Footer />
    </>
  );
}
