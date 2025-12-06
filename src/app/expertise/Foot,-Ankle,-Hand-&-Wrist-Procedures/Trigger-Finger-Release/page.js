import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Thermometer, Hammer, HandMetal} from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const triggerFingerData = {
  icon: "/Images/treatment_icon_29.png",

  title: "Trigger Finger Release",
  subtitle: "Quick Relief from Finger Locking & Pain",

  about:
    "Trigger Finger occurs when inflammation or thickening of the tendon sheath makes finger movement difficult. This causes the finger to catch, click, or lock in a bent position. While early treatment includes rest and medication, persistent cases are best treated with a minor surgical release for permanent relief.",

  recommended: [
    "Finger catching or locking while bending",
    "Painful clicking sensations in finger movement",
    "Finger stuck in bent or straight position",
    "Morning stiffness or finger swelling",
    "Difficulty gripping, holding objects, or writing",
    "Lack of improvement after splinting or medications",
  ],

  modernTechniques: [
    "Ultrasound-guided corticosteroid injections",
    "Percutaneous release using a fine needle",
    "Open surgical release for severe or recurring cases",
    "Microsurgical tools for minimal tissue damage",
    "Early mobilization protocols post-surgery",
    "Advanced physiotherapy for tendon glide restoration",
  ],

  keyBenefits: [
    {
      title: "Instant Relief",
      desc: "Removes catching and locking of the finger immediately after the release.",
    },
    {
      title: "Fast Healing",
      desc: "Minimally invasive procedure ensures quick recovery and early return to work.",
    },
    {
      title: "Restores Smooth Finger Motion",
      desc: "Improves grip, flexibility, and normal hand function.",
    },
    {
      title: "Low Recurrence",
      desc: "Releasing the tight pulley prevents future tendon trapping.",
    },
    {
      title: "Safe & Effective",
      desc: "A quick outpatient procedure with highly successful outcomes.",
    },
  ],

  services: [
    {
      title: "Conservative Care",
      subtitle:
        "Rest, splinting, anti-inflammatory medication, and steroid injections to reduce tendon sheath inflammation.",
      icon: <Thermometer className="w-6 h-6" />,
    },
    {
      title: "Trigger Finger Release Surgery",
      subtitle:
        "Minimally invasive percutaneous or open release to free the tendon and restore smooth finger movement.",
      icon: <Hammer className="w-6 h-6" />,
    },
    {
      title: "Post-Surgery Rehabilitation",
      subtitle:
        "Stretching and strengthening exercises to regain flexibility, prevent stiffness, and restore grip strength.",
      icon: <HandMetal className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Clinical Assessment",
      desc: "Evaluation of finger movement, catching, pain, and swelling.",
    },
    {
      step: 2,
      title: "Conservative Management",
      desc: "Splinting and injections for early-stage trigger finger.",
    },
    {
      step: 3,
      title: "Surgical Release",
      desc: "Quick outpatient procedure to release the tendon sheath.",
    },
    {
      step: 4,
      title: "Early Finger Movement",
      desc: "Encouraged immediately after surgery to prevent stiffness.",
    },
    {
      step: 5,
      title: "Rehabilitation",
      desc: "Exercises to improve tendon glide and strengthen the finger.",
    },
    {
      step: 6,
      title: "Full Function Restoration",
      desc: "Patients return to pain-free, normal finger use within days to weeks.",
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
      "Trigger Finger Release is a safe and effective solution when non-surgical care isn’t enough. Our expert-led treatment helps you regain comfort, flexibility, and full hand strength.",
    button: "Book Trigger Finger Consultation",
  },

  testimonials: [
    {
      name: "Ramesh Joshi",
      age: 52,
      surgery: "Trigger Finger Release",
      quote:
        "My finger used to lock painfully while working. After the release procedure, the relief was immediate. I’m back to writing and daily tasks comfortably.",
      rating: 5,
    },
    {
      name: "Sejal Gupta",
      age: 44,
      surgery: "Steroid Injection + Therapy",
      quote:
        "The clicking and pain were stopping me from cooking and gripping objects. The injection and exercises worked very well for me.",
      rating: 5,
    },
    {
      name: "Vijay Rathore",
      age: 60,
      surgery: "Percutaneous Release",
      quote:
        "A very quick procedure! No more finger locking, and I was able to use my hand normally within a few days.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Is trigger finger release painful?",
      answer:
        "No. The procedure is done with local anesthesia, and patients feel little to no discomfort.",
    },
    {
      question: "How soon will my finger move normally?",
      answer:
        "Most patients experience instant relief and can move their finger freely right after surgery.",
    },
    {
      question: "Can trigger finger return after surgery?",
      answer: "Recurrence is rare when the tendon sheath is released properly.",
    },
    {
      question: "Is surgery always required?",
      answer:
        "No. Many cases respond to splints, medication, or steroid injections. Surgery is recommended when symptoms persist.",
    },
    {
      question: "How long is the recovery?",
      answer:
        "Normal hand use typically returns within a few days, with full strength restored in 2–3 weeks.",
    },
  ],

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
