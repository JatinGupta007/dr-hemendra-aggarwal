import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Footprints, Hand, Armchair } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const smallJointArthroscopyData = {
  icon: "/Images/treatment_icon_5.png",

  title: "Ankle, Wrist, & Elbow Arthroscopy",
  subtitle: "Minimally Invasive Joint Repairs",

  about:
    "Ankle, Wrist, and Elbow Arthroscopy are minimally invasive ‘keyhole’ procedures used to diagnose and treat joint problems with high precision. Ideal for ligament tears, cartilage damage, loose fragments, and chronic joint pain, these techniques offer fast healing and minimal discomfort.",

  recommended: [
    "Chronic ankle, wrist, or elbow pain",
    "Ligament injuries or instability",
    "Cartilage tears or loose bone fragments",
    "TFCC tears in the wrist",
    "Tennis elbow not improving with physiotherapy",
    "Joint swelling, locking, or stiffness",
  ],

  modernTechniques: [
    "High-definition arthroscopic cameras for precision",
    "Keyhole incisions that minimize tissue damage",
    "Cartilage smoothing and microfracture techniques",
    "Ligament repair using arthroscopic sutures and anchors",
    "Debridement of loose fragments for pain-free movement",
    "Biologic augmentation such as PRP for faster healing",
  ],

  keyBenefits: [
    {
      title: "Minimal Incisions",
      desc: "Tiny cuts mean less pain, quicker healing, and minimal scars.",
    },
    {
      title: "Faster Recovery",
      desc: "Patients return to daily activities much sooner than open surgery.",
    },
    {
      title: "High Precision",
      desc: "Advanced tools allow accurate treatment inside small joints.",
    },
    {
      title: "Lower Risk",
      desc: "Reduced risk of infection and complications due to minimally invasive techniques.",
    },
    {
      title: "Improved Mobility",
      desc: "Restores smooth joint movement and reduces stiffness.",
    },
  ],

  services: [
    {
      title: "Ankle Arthroscopy",
      subtitle:
        "Treats ligament injuries, bone spurs, synovitis, and arthritis-related pain.",
      icon: <Footprints className="w-6 h-6" />,
    },
    {
      title: "Wrist Arthroscopy",
      subtitle: "For TFCC tears, ganglion cyst removal, and wrist instability.",
      icon: <Hand className="w-6 h-6" />,
    },
    {
      title: "Elbow Arthroscopy",
      subtitle:
        "Useful for tennis elbow, stiffness, cartilage wear, and loose bodies.",
      icon: <Armchair className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Clinical Assessment",
      desc: "Evaluation of joint pain, instability, and movement limitations.",
    },
    {
      step: 2,
      title: "Diagnostic Imaging",
      desc: "MRI or X-ray scans to identify ligament, cartilage, or bone problems.",
    },
    {
      step: 3,
      title: "Arthroscopic Planning",
      desc: "Deciding incision sites, instruments, and type of repair needed.",
    },
    {
      step: 4,
      title: "Arthroscopic Procedure",
      desc: "Small incisions are made to insert a camera and instruments for repair.",
    },
    {
      step: 5,
      title: "Early Mobilization",
      desc: "Movement begins early to prevent stiffness and promote healing.",
    },
    {
      step: 6,
      title: "Rehabilitation",
      desc: "Structured physiotherapy improves strength, stability, and joint function.",
    },
    {
      step: 7,
      title: "Return to Activities",
      desc: "Most patients resume normal activities within days or weeks.",
    },
  ],

  benefits: [
    "Tiny incisions and minimal scarring",
    "Fast healing with less pain",
    "Precise treatment for small joints",
    "Quick return to normal activities",
  ],

  highlights: {
    title: "Precision Arthroscopy for Small Joints",
    description:
      "Restore pain-free movement in your ankle, wrist, or elbow with expert arthroscopic care. Trusted surgical solutions in Jaipur using modern tools and techniques.",
    button: "Explore Small Joint Arthroscopy",
  },

  testimonials: [
    {
      name: "Ravi Kumar",
      age: 29,
      surgery: "Ankle Arthroscopy",
      quote:
        "I had an ankle ligament injury that wouldn't heal. Arthroscopy helped me recover quickly, and I was back to sports sooner than expected.",
      rating: 5,
    },
    {
      name: "Pooja Jain",
      age: 34,
      surgery: "Wrist TFCC Repair",
      quote:
        "My wrist pain was constant. After arthroscopy, the pain reduced drastically and mobility improved within weeks.",
      rating: 5,
    },
    {
      name: "Arvind Singh",
      age: 40,
      surgery: "Elbow Arthroscopy",
      quote:
        "My elbow was stiff and painful for months. The procedure was smooth, and recovery was quick. I can now lift and exercise normally.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Is arthroscopy painful?",
      answer:
        "No. Arthroscopy uses small incisions and causes much less pain than open surgery. Most patients recover comfortably.",
    },
    {
      question: "How soon can I return to work?",
      answer:
        "Most patients resume light work within a few days, depending on the joint and procedure.",
    },
    {
      question: "Is arthroscopy safe?",
      answer:
        "Yes. It’s one of the safest orthopedic techniques with very low complication rates.",
    },
    {
      question: "Will I need physiotherapy?",
      answer:
        "Yes. Physiotherapy is important to restore strength, stability, and mobility.",
    },
    {
      question: "Can arthroscopy treat sports injuries?",
      answer:
        "Absolutely. Arthroscopy is commonly used for ligament tears, cartilage injuries, and instability in athletes.",
    },
  ],

  keywords: [
    "ankle arthroscopy Jaipur",
    "wrist arthroscopy Jaipur",
    "elbow arthroscopy Jaipur",
    "TFCC repair Jaipur",
    "tennis elbow surgery Jaipur",
  ],
};



export default function SmallJointArthroscopy() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={smallJointArthroscopyData} />
      <Footer />
    </>
  );
}
