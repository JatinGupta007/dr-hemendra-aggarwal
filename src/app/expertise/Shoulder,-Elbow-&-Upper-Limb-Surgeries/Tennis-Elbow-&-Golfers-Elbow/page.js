import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Bone, Syringe, Pill} from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const tennisGolferElbowData = {
  icon: "/Images/treatment_icon_21.png",

  title: "Tennis Elbow & Golfer's Elbow",
  subtitle: "Elbow Pain Relief from Tendon Overuse Injuries",

  about:
    "Tennis Elbow (lateral epicondylitis) and Golfer’s Elbow (medial epicondylitis) are common overuse injuries caused by repetitive wrist and forearm motions. These conditions lead to pain, weakness, and difficulty gripping objects. Early treatment prevents chronic tendon degeneration and restores pain-free function.",

  recommended: [
    "Pain on the inner or outer side of the elbow",
    "Weak grip or difficulty lifting objects",
    "Pain during wrist movement or forearm rotation",
    "Repetitive strain from sports or manual work",
    "Persistent symptoms despite rest or medication",
  ],

  modernTechniques: [
    "Ultrasound-guided PRP injections for tendon healing",
    "Minimally invasive tendon debridement",
    "Arthroscopic release for chronic cases",
    "Targeted physiotherapy for muscle balance",
    "Ergonomic training and load management",
  ],

  keyBenefits: [
    {
      title: "Effective Pain Relief",
      desc: "Reduces inflammation and tendon irritation for long-term comfort.",
    },
    {
      title: "Improved Grip Strength",
      desc: "Strengthening programs restore power and stability in the forearm.",
    },
    {
      title: "Minimally Invasive Options",
      desc: "Advanced PRP therapy and arthroscopy ensure faster healing.",
    },
    {
      title: "Prevents Recurrence",
      desc: "Corrects underlying biomechanics to avoid repeated injury.",
    },
  ],

  services: [
    {
      title: "Conservative Treatment",
      subtitle:
        "Physiotherapy, bracing, rest, and anti-inflammatory medicines to calm pain and restore tendon function.",
      icon: <Pill className="w-6 h-6" />,
    },
    {
      title: "PRP & Steroid Injections",
      subtitle:
        "Ultrasound-guided PRP or steroid injections to stimulate healing, reduce pain, and accelerate recovery.",
      icon: <Syringe className="w-6 h-6" />,
    },
    {
      title: "Surgical Tendon Debridement",
      subtitle:
        "Arthroscopic or open removal of damaged tendon tissue for chronic or severe cases.",
      icon: <Bone className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Clinical Diagnosis",
      desc: "Detailed physical exam to identify tendon inflammation or degeneration.",
    },
    {
      step: 2,
      title: "Imaging & Assessment",
      desc: "Ultrasound or MRI to assess tendon damage and rule out other causes.",
    },
    {
      step: 3,
      title: "Conservative Management",
      desc: "Physiotherapy, braces, and ergonomic adjustments to reduce strain.",
    },
    {
      step: 4,
      title: "Advanced Injections",
      desc: "PRP or steroid treatments for faster and more effective healing.",
    },
    {
      step: 5,
      title: "Surgical Repair (If Needed)",
      desc: "Tendon debridement or release for severe or non-responding cases.",
    },
    {
      step: 6,
      title: "Rehabilitation",
      desc: "Strength training to restore normal function and prevent recurrence.",
    },
  ],

  benefits: [
    "Targeted pain relief for elbow overuse injuries",
    "Improved grip strength and arm stability",
    "Faster recovery with non-invasive treatments",
    "Lower recurrence risk with guided rehab",
  ],

  highlights: {
    title: "Specialized Care for Elbow Pain",
    description:
      "We offer comprehensive treatment for tennis and golfer’s elbow using modern therapies, minimally invasive techniques, and personalized rehabilitation plans to ensure long-term relief and full elbow function.",
    button: "Schedule Your Elbow Evaluation",
  },

  testimonials: [
    {
      name: "Rajat Sharma",
      age: 37,
      surgery: "Tennis Elbow PRP Therapy",
      quote:
        "I struggled with elbow pain for months. PRP treatment worked wonders. I’m back to gym workouts without discomfort.",
      rating: 5,
    },
    {
      name: "Megha Kaur",
      age: 42,
      surgery: "Golfer’s Elbow Conservative Therapy",
      quote:
        "Physiotherapy and bracing reduced my pain within weeks. Excellent, patient-focused care!",
      rating: 5,
    },
    {
      name: "Suresh Verma",
      age: 50,
      surgery: "Arthroscopic Tendon Repair",
      quote:
        "My chronic elbow pain is finally gone. Surgery was smooth, and recovery was faster than expected.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Is surgery necessary for tennis or golfer’s elbow?",
      answer:
        "No. Most patients improve with physiotherapy, bracing, and injections. Surgery is only for chronic or severe cases.",
    },
    {
      question: "Does PRP really help?",
      answer:
        "Yes, PRP promotes natural tendon healing and is especially effective for stubborn tendon injuries.",
    },
    {
      question: "How long does recovery take?",
      answer:
        "Mild cases improve within weeks, while chronic cases may take 2–3 months depending on treatment and rehab.",
    },
    {
      question: "Can it come back?",
      answer:
        "Repetitive strain can cause recurrence, but guided physiotherapy and ergonomic correction reduce the risk.",
    },
  ],

  keywords: [
    "Tennis elbow treatment Jaipur",
    "Golfer’s elbow pain relief",
    "Elbow tendonitis specialist Rajasthan",
    "PRP injection for elbow India",
    "Best elbow surgeon near me",
  ],
};


export default function TennisGolferElbow() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={tennisGolferElbowData} />
      <Footer />
    </>
  );
}
