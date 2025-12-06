import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Bone, Syringe, Stethoscope } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const rotatorCuffTearData = {
  icon: "/Images/treatment_icon_20.png",

  title: "Rotator Cuff Tears",
  subtitle: "Shoulder Tendon Repair for Strength & Mobility",

  about:
    "Rotator cuff tears occur when one or more of the shoulder tendons become damaged or detached from the bone. These tears may result from injury, overuse, aging, or repetitive overhead activities. Without early treatment, they can worsen over time and cause chronic pain, weakness, or limited shoulder motion.",

  recommended: [
    "Persistent shoulder pain lasting more than 2–3 weeks",
    "Weakness when lifting or rotating the arm",
    "Difficulty sleeping due to shoulder discomfort",
    "Sudden injury leading to loss of shoulder strength",
    "Failure of physiotherapy or medications",
    "Full-thickness or large tendon tears seen on MRI",
  ],

  modernTechniques: [
    "Arthroscopic tendon repair with suture anchors",
    "Minimally invasive biceps tenodesis when needed",
    "Biologic augmentation for faster healing",
    "Open repair for massive or complex tendon injuries",
    "Tendon grafting for chronic or irreparable tears",
  ],

  keyBenefits: [
    {
      title: "Reduced Shoulder Pain",
      desc: "Targets the root cause of pain by repairing damaged tendons.",
    },
    {
      title: "Restored Strength & Mobility",
      desc: "Improves the ability to lift, rotate, and use the arm normally.",
    },
    {
      title: "Minimally Invasive Options",
      desc: "Arthroscopy offers faster recovery with minimal scarring.",
    },
    {
      title: "Prevents Further Damage",
      desc: "Stops tendon retraction, muscle wasting, and long-term arthritis.",
    },
    {
      title: "Better Long-Term Shoulder Health",
      desc: "Ensures stable and strong shoulder function for daily life and sports.",
    },
  ],

  services: [
    {
      title: "Arthroscopic Rotator Cuff Repair",
      subtitle:
        "Minimally invasive keyhole surgery using suture anchors to reattach torn tendons to the bone.",
      icon: <Syringe className="w-6 h-6" />,
    },
    {
      title: "Open Surgical Repair",
      subtitle:
        "Recommended for large, chronic, or complex tears where direct visualization ensures strong fixation.",
      icon: <Bone className="w-6 h-6" />,
    },
    {
      title: "Tendon Grafting",
      subtitle:
        "Used when tendon tissue is insufficient; grafts restore shoulder strength and functional movement.",
      icon: <Stethoscope className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Clinical Evaluation",
      desc: "Assessment of shoulder pain, strength, and mobility to detect possible tendon tear.",
    },
    {
      step: 2,
      title: "Imaging Studies",
      desc: "MRI or ultrasound to confirm tear size, retraction, and tendon quality.",
    },
    {
      step: 3,
      title: "Personalized Treatment Plan",
      desc: "Selection of arthroscopic, open repair, or grafting depending on tear severity.",
    },
    {
      step: 4,
      title: "Surgical Repair",
      desc: "Tendon reattachment, smoothing of bone spurs, and stabilization of torn tissues.",
    },
    {
      step: 5,
      title: "Rehabilitation & Strengthening",
      desc: "Physiotherapy to restore range of motion, strength, and long-term shoulder function.",
    },
    {
      step: 6,
      title: "Return to Activity",
      desc: "Guided transition back to work, exercise, and overhead activities.",
    },
  ],

  benefits: [
    "Relieves shoulder pain and discomfort",
    "Restores lifting and rotation strength",
    "Minimally invasive approach enables faster healing",
    "Prevents future shoulder instability or arthritis",
  ],

  highlights: {
    title: "Regain Full Shoulder Function",
    description:
      "Our shoulder specialists use advanced arthroscopic techniques to treat rotator cuff tears effectively. From accurate diagnosis to complete recovery, we ensure personalized care every step of the way.",
    button: "Book Shoulder Consultation Today",
  },

  testimonials: [
    {
      name: "Deepak Sharma",
      age: 45,
      surgery: "Arthroscopic Rotator Cuff Repair",
      quote:
        "My shoulder pain was affecting my work and sleep. After arthroscopic repair, I regained full strength and motion. The recovery was smooth and quick.",
      rating: 5,
    },
    {
      name: "Neelam Gupta",
      age: 52,
      surgery: "Open Repair for Massive Tear",
      quote:
        "I had a large tear that required open surgery. The results were excellent—no more pain and full use of my arm.",
      rating: 5,
    },
    {
      name: "Arvind Singh",
      age: 39,
      surgery: "Tendon Grafting",
      quote:
        "My chronic tear was too advanced, but tendon grafting restored my shoulder function. Very grateful for the expert care!",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Can a rotator cuff tear heal without surgery?",
      answer:
        "Partial tears may improve with physiotherapy and medications, but complete tears often require surgical repair for full recovery.",
    },
    {
      question: "Is arthroscopic surgery better?",
      answer:
        "For most tears, yes. Arthroscopy is less invasive, causes less pain, and allows faster rehabilitation.",
    },
    {
      question: "How long is recovery after rotator cuff repair?",
      answer:
        "Most patients regain good function in 3–6 months, though full strength may take up to 9–12 months.",
    },
    {
      question: "What causes rotator cuff tears?",
      answer:
        "Injuries, repetitive overhead motions, aging, and degeneration are common causes.",
    },
    {
      question: "Can rotator cuff tears lead to arthritis?",
      answer:
        "Yes. Untreated tears may cause shoulder instability and lead to early arthritis.",
    },
  ],

  keywords: [
    "Rotator cuff tear surgery Jaipur",
    "Shoulder pain treatment Rajasthan",
    "Arthroscopic shoulder surgery India",
    "Tendon repair surgeon Jaipur",
    "Shoulder specialist near me",
  ],
};



export default function RotatorCuffTear() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={rotatorCuffTearData} />
      <Footer />
    </>
  );
}
