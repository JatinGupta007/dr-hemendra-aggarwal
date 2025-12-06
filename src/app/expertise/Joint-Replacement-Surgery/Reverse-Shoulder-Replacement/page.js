import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Activity, Zap, Eye, Stethoscope } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const reverseShoulderReplacementData = {
  icon: "/Images/treatment_icon_19.png",

  title: "Reverse Shoulder Replacement",
  subtitle: "For Severe Shoulder Damage",

  about:
    "Reverse Shoulder Replacement is an advanced surgical procedure designed for patients with massive rotator cuff tears, severe arthritis, complex fractures, or failed prior shoulder surgeries. By reversing the natural ball-and-socket joint, the deltoid muscle takes over the lifting function, restoring shoulder stability and mobility.",

  recommended: [
    "Massive or irreparable rotator cuff tears",
    "Severe shoulder arthritis (cuff tear arthropathy)",
    "Failed previous shoulder surgeries",
    "Complex shoulder fractures (proximal humerus fractures)",
    "Chronic shoulder instability",
    "Loss of shoulder function affecting daily activities",
  ],

  modernTechniques: [
    "Reverse ball-and-socket shoulder joint reconstruction",
    "Minimally invasive and tissue-sparing surgical approaches",
    "Advanced 3D imaging and planning for precise implant positioning",
    "Use of durable prosthetic implants for long-term outcomes",
    "Deltoid muscle–based movement restoration techniques",
    "Computer-assisted navigation for improved alignment",
  ],

  keyBenefits: [
    {
      title: "Restored Arm Movement",
      desc: "Allows lifting the arm overhead even without a functioning rotator cuff.",
    },
    {
      title: "Significant Pain Relief",
      desc: "Reduces constant pain caused by arthritis, tears, or fractures.",
    },
    {
      title: "Improved Stability",
      desc: "Provides a stable shoulder joint in complex or failed cases.",
    },
    {
      title: "Faster Recovery",
      desc: "Encourages early movement with structured physiotherapy.",
    },
    {
      title: "Long-Term Durability",
      desc: "Advanced implant design ensures reliable long-term performance.",
    },
  ],

  services: [
    {
      title: "When is it Recommended?",
      subtitle:
        "For severe rotator cuff tears, failed surgeries, complex fractures, arthritis, or chronic instability.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Reversed Joint Mechanics",
      subtitle:
        "Ball placed on the shoulder blade and socket on the arm bone to compensate for damaged muscles.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Muscle Compensation",
      subtitle:
        "Deltoid muscle takes over lifting function, improving strength and stability.",
      icon: <Stethoscope className="w-6 h-6" />,
    },
    {
      title: "Quick Rehabilitation",
      subtitle:
        "Early guided movement to accelerate recovery and restore function.",
      icon: <Eye className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Shoulder Evaluation",
      desc: "Detailed examination of shoulder strength, mobility, and function.",
    },
    {
      step: 2,
      title: "Diagnostic Imaging",
      desc: "X-rays, CT scans, or MRI to assess rotator cuff damage and bone condition.",
    },
    {
      step: 3,
      title: "Personalized Surgical Planning",
      desc: "Implant selection and surgical strategy tailored to patient anatomy and needs.",
    },
    {
      step: 4,
      title: "Reverse Shoulder Replacement Surgery",
      desc: "Reversal of ball-and-socket joint and implant fixation.",
    },
    {
      step: 5,
      title: "Pain Control & Early Mobilization",
      desc: "Advanced anesthesia and early rehab begin within 24 hours.",
    },
    {
      step: 6,
      title: "Physiotherapy & Strength Training",
      desc: "Guided exercises to restore lifting ability, motion, and endurance.",
    },
    {
      step: 7,
      title: "Long-Term Recovery",
      desc: "Return to daily life, household work, and low-impact activities over 8–12 weeks.",
    },
  ],

  benefits: [
    "Better ability to lift and rotate the arm",
    "Improved shoulder stability",
    "Major pain reduction",
    "Effective solution for failed shoulder surgeries",
    "Long-lasting implant performance",
  ],

  highlights: {
    title: "Reverse Shoulder Replacement in Jaipur",
    description:
      "Expert care for complex shoulder issues using advanced reverse prosthetic design and proven surgical techniques.",
    button: "Know More About Shoulder Surgery",
  },

  testimonials: [
    {
      name: "Harish Sharma",
      age: 68,
      surgery: "Reverse Shoulder Replacement",
      quote:
        "I couldn’t lift my arm at all due to a massive cuff tear. After the surgery, I regained great movement and the pain is gone. Truly life-changing.",
      rating: 5,
    },
    {
      name: "Meena Solanki",
      age: 61,
      surgery: "Reverse Shoulder Procedure",
      quote:
        "After multiple failed treatments, this surgery finally gave me relief. I can now do daily activities without discomfort.",
      rating: 5,
    },
    {
      name: "Ramesh Verma",
      age: 72,
      surgery: "Complex Shoulder Arthritis Treatment",
      quote:
        "My shoulder was severely worn out. The reverse replacement helped me regain strength and stability. Very satisfied!",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Why is it called Reverse Shoulder Replacement?",
      answer:
        "Because the natural shoulder joint mechanics are reversed — the ball goes on the shoulder blade and the socket on the arm bone, helping other muscles compensate for damaged rotator cuff.",
    },
    {
      question: "Who is the best candidate for this surgery?",
      answer:
        "Patients with massive rotator cuff tears, arthritic damage, chronic instability, or failed previous shoulder surgeries.",
    },
    {
      question: "How long is the recovery period?",
      answer:
        "Most patients regain functional movement within 6–12 weeks, with full improvement continuing up to 6 months.",
    },
    {
      question: "Is the surgery painful?",
      answer:
        "Pain is significantly reduced with modern anesthesia and postoperative protocols. Most patients experience steady improvement each day.",
    },
    {
      question: "Will I regain full shoulder movement?",
      answer:
        "You can expect excellent functional motion, especially lifting and overhead activities, although extreme rotation may remain limited.",
    },
  ],

  keywords: [
    "reverse shoulder replacement Jaipur",
    "rotator cuff tear surgery Jaipur",
    "shoulder arthritis treatment Jaipur",
    "orthopedic shoulder specialist Jaipur",
  ],
};


export default function RiverseShoulderReplacement() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={reverseShoulderReplacementData} />
      <Footer />
    </>
  );
}
