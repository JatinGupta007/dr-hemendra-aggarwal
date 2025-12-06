import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Scissors, StretchHorizontal, Droplet } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const frozenShoulderData = {
  icon: "/Images/treatment_icon_19.png",

  title: "Frozen Shoulder",
  subtitle: "Restoring Mobility in Stiff and Painful Shoulders",

  about:
    "Frozen Shoulder, or Adhesive Capsulitis, is a condition where the shoulder capsule becomes inflamed, thickened, and tight. This leads to severe stiffness and pain, often progressing gradually through different phases. Early diagnosis and timely treatment help restore full shoulder mobility and prevent long-term disability.",

  recommended: [
    "Persistent shoulder stiffness for more than 2–3 weeks",
    "Pain during overhead activities or reaching behind the back",
    "Difficulty sleeping due to shoulder pain",
    "Post-injury or post-surgery stiffness",
    "Diabetes-related shoulder stiffness",
    "Significant restriction in daily movements",
  ],

  modernTechniques: [
    "Image-guided hydrodilatation for capsule expansion",
    "Arthroscopic capsular release for advanced stiffness",
    "High-precision physiotherapy protocols",
    "Ultrasound-guided steroid injections",
    "Minimally invasive keyhole treatment approaches",
  ],

  keyBenefits: [
    {
      title: "Restored Mobility",
      desc: "Releases the tightened joint capsule, allowing smooth movement.",
    },
    {
      title: "Pain Reduction",
      desc: "Targeted therapies reduce inflammation and nighttime pain.",
    },
    {
      title: "Minimally Invasive Options",
      desc: "Arthroscopy and hydrodilatation ensure quick recovery.",
    },
    {
      title: "Improved Quality of Life",
      desc: "Allows patients to return to routine tasks and physical activity.",
    },
    {
      title: "Customized Rehabilitation",
      desc: "Structured physiotherapy helps prevent recurrence.",
    },
  ],

  services: [
    {
      title: "Physiotherapy & Medication",
      subtitle:
        "Guided stretching, strengthening exercises, and anti-inflammatory medication to reduce pain and stiffness.",
      icon: <StretchHorizontal className="w-6 h-6" />,
    },
    {
      title: "Hydrodilatation",
      subtitle:
        "A minimally invasive procedure injecting sterile fluid into the joint capsule to expand it and improve range of motion.",
      icon: <Droplet className="w-6 h-6" />,
    },
    {
      title: "Arthroscopic Capsular Release",
      subtitle:
        "Precision keyhole surgery to release the thickened capsule and immediately restore shoulder mobility.",
      icon: <Scissors className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Clinical Assessment",
      desc: "Detailed shoulder evaluation to identify the phase of frozen shoulder.",
    },
    {
      step: 2,
      title: "Imaging Diagnosis",
      desc: "X-ray or MRI to rule out rotator cuff tears, arthritis, or other causes of stiffness.",
    },
    {
      step: 3,
      title: "Individualized Treatment Plan",
      desc: "Combination of physiotherapy, medications, and injections tailored to disease stage.",
    },
    {
      step: 4,
      title: "Hydrodilatation or Arthroscopic Release",
      desc: "Performed for patients with severe or long-standing stiffness.",
    },
    {
      step: 5,
      title: "Rehabilitation",
      desc: "Daily guided exercises to regain mobility and prevent capsule tightening.",
    },
    {
      step: 6,
      title: "Recovery & Maintenance",
      desc: "Follow-up visits and lifestyle modifications to ensure long-lasting improvement.",
    },
  ],

  benefits: [
    "Effective pain relief and shoulder mobility restoration",
    "Faster return to everyday tasks and active lifestyle",
    "Minimally invasive treatments for quicker healing",
    "Customized rehab plan ensures lasting results",
  ],

  highlights: {
    title: "Break Free from Shoulder Stiffness",
    description:
      "Our specialized treatment approach helps you move freely again—whether you're in the early freezing phase or have had long-standing shoulder stiffness.",
    button: "Schedule Your Shoulder Assessment",
  },

  testimonials: [
    {
      name: "Manoj Gupta",
      age: 48,
      surgery: "Hydrodilatation",
      quote:
        "My shoulder was so stiff that I couldn’t raise my arm. Hydrodilatation gave me instant relief, and physiotherapy helped me regain full mobility.",
      rating: 5,
    },
    {
      name: "Rekha Sharma",
      age: 55,
      surgery: "Capsular Release",
      quote:
        "After months of pain and limited movement, arthroscopic release changed everything. I feel normal again!",
      rating: 5,
    },
    {
      name: "Abhay Rathore",
      age: 42,
      surgery: "Non-surgical Treatment",
      quote:
        "Physiotherapy and medication worked wonderfully. My frozen shoulder is completely resolved.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How long does frozen shoulder last?",
      answer:
        "Frozen shoulder typically progresses through three phases and may last 6 months to 2 years without treatment. Early treatment shortens recovery time dramatically.",
    },
    {
      question: "Is surgery always required?",
      answer:
        "No. Most cases respond well to physiotherapy, medication, and hydrodilatation. Surgery is only recommended for persistent or severe stiffness.",
    },
    {
      question: "Is frozen shoulder related to diabetes?",
      answer:
        "Yes. Diabetics are more prone to frozen shoulder due to increased inflammation and capsule thickening.",
    },
    {
      question: "Will I regain full shoulder movement?",
      answer:
        "With proper treatment and rehabilitation, most patients recover excellent mobility and function.",
    },
    {
      question: "Can frozen shoulder recur?",
      answer:
        "It rarely recurs in the same shoulder, but may occur in the opposite shoulder, especially in diabetics.",
    },
  ],

  keywords: [
    "Frozen shoulder specialist Jaipur",
    "Adhesive capsulitis treatment India",
    "Shoulder stiffness doctor near me",
    "Best orthopedic for frozen shoulder",
    "Hydrodilatation for frozen shoulder",
  ],
};


export default function FrozenShoulder() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={frozenShoulderData} />
      <Footer />
    </>
  );
}
