import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Activity, Dumbbell } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const sportsRehabData = {
  icon: "/Images/treatment_icon_10.png",

  title: "Sports Rehab & Return-to-Play Guidance",
  subtitle: "Customized Recovery Plans for Safe Athletic Comeback",

  about:
    "Sports Rehabilitation & Return-to-Play Guidance is designed to help athletes recover from injuries, regain optimal performance, and safely resume their sport. Through structured physiotherapy, strength conditioning, and sport-specific training, athletes rebuild confidence, prevent re-injury, and return stronger than before.",

  recommended: [
    "Athletes recovering from ligament injuries (ACL, PCL, MCL)",
    "Post-surgery rehab for knee, shoulder, or ankle injuries",
    "Muscle strains, sprains, or overuse injuries",
    "Recurrent sports injuries or instability",
    "Athletes needing clearance for competitive sport",
    "Those aiming to improve performance after injury",
  ],

  modernTechniques: [
    "Strength & conditioning for sport-specific demands",
    "Neuromuscular training for stability and control",
    "Plyometrics and agility drills for explosive movement",
    "Biomechanical analysis for gait and performance correction",
    "Return-to-sport functional testing protocols",
    "Personalized load-management and progression planning",
  ],

  keyBenefits: [
    {
      title: "Accelerated Recovery",
      desc: "Scientifically structured rehab speeds healing while maintaining performance capacity.",
    },
    {
      title: "Reduced Re-Injury Risk",
      desc: "Targeted strengthening and technique correction help prevent recurring injuries.",
    },
    {
      title: "Sport-Specific Conditioning",
      desc: "Training plans tailored to each sport enhance readiness and performance.",
    },
    {
      title: "Confidence & Mental Readiness",
      desc: "Athletes return to their sport physically strong and mentally prepared.",
    },
  ],

  services: [
    {
      title: "Strength & Flexibility Training",
      subtitle:
        "Targeted exercises to restore muscle balance, joint stability, and full athletic movement.",
      icon: <Dumbbell className="w-6 h-6" />,
    },
    {
      title: "Gradual Return-to-Play Programs",
      subtitle:
        "Stepwise progression from physiotherapy to sport-specific drills and competitive re-entry.",
      icon: <Activity className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Initial Assessment",
      desc: "Evaluation of injury history, strength, mobility, and sport-specific requirements.",
    },
    {
      step: 2,
      title: "Rehabilitation Planning",
      desc: "Customized program targeting strength, mobility, balance, and functional movement.",
    },
    {
      step: 3,
      title: "Progressive Strength Training",
      desc: "Muscle conditioning, flexibility, endurance, and stabilization exercises.",
    },
    {
      step: 4,
      title: "Sport-Specific Drills",
      desc: "Agility, plyometric, and technique training tailored to the athlete’s sport.",
    },
    {
      step: 5,
      title: "Functional Testing",
      desc: "Return-to-play tests ensuring readiness and minimizing re-injury risk.",
    },
    {
      step: 6,
      title: "Safe Return to Play",
      desc: "Guided transition back to training, competition, and peak performance.",
    },
  ],

  benefits: [
    "Accelerated recovery with structured guidance",
    "Reduced risk of re-injury through sports-specific rehab",
    "Personalized plans aligned with athlete goals",
    "Holistic approach including fitness, therapy, and nutrition",
  ],

  highlights: {
    title: "Return Stronger and Smarter to Your Sport",
    description:
      "Our sports rehab program ensures you're physically and mentally prepared to compete again. We tailor every stage of your recovery to your sport and goals, ensuring peak performance and injury prevention.",
    button: "Start Your Rehab Journey",
  },

  testimonials: [
    {
      name: "Rohan Mehta",
      age: 21,
      surgery: "ACL Post-Rehab Program",
      quote:
        "The structured rehab gave me my confidence back. I returned to football stronger and faster than before!",
      rating: 5,
    },
    {
      name: "Simran Kaur",
      age: 28,
      surgery: "Shoulder Sports Rehab",
      quote:
        "After my shoulder injury, I feared I’d never lift again. The rehab plan rebuilt my strength safely.",
      rating: 5,
    },
    {
      name: "Aditya Sharma",
      age: 24,
      surgery: "Ankle Instability Rehab",
      quote:
        "The return-to-play guidance helped me avoid re-injury. I’m back to running at full pace!",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How long does sports rehab take?",
      answer:
        "It depends on the injury. Mild strains may take 2–4 weeks, while ligament injuries may require 3–6 months for complete readiness.",
    },
    {
      question: "Is rehab different for each sport?",
      answer:
        "Yes. Each sport has unique demands, so we tailor strength, agility, and movement patterns specifically for your sport.",
    },
    {
      question: "Do I need rehab even if pain has reduced?",
      answer:
        "Yes. Returning too early without proper strength and stability increases re-injury risk.",
    },
    {
      question: "Will I be able to compete at the same level again?",
      answer:
        "With proper rehab and guidance, most athletes return stronger and more confident than before.",
    },
  ],

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
