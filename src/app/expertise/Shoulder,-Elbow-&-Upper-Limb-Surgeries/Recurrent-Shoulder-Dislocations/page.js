import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { ShieldCheck, Syringe, Bone} from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const shoulderDislocationData = {
  icon: "/Images/treatment_icon_22.png",

  title: "Recurrent Shoulder Dislocations",
  subtitle: "Restoring Shoulder Stability & Preventing Future Injuries",

  about:
    "Recurrent shoulder dislocations occur when the shoulder repeatedly slips out of its socket due to ligament damage, labral tears, or joint laxity. Without proper treatment, each dislocation weakens the shoulder further, increasing the risk of chronic instability, pain, and long-term joint damage. Surgical stabilization procedures help restore structural integrity and prevent future episodes.",

  recommended: [
    "Repeated shoulder dislocations after initial injury",
    "Pain, cracking, or feeling of shoulder ‘giving way’",
    "Difficulty lifting the arm overhead",
    "Instability during sports or heavy activities",
    "Labral tear or bony defects seen on MRI/CT scan",
    "Athletes in overhead sports (cricket, swimming, volleyball)",
  ],

  modernTechniques: [
    "Arthroscopic Bankart repair with suture anchors",
    "Capsular shift for tightening stretched tissues",
    "Latarjet procedure for bone loss cases",
    "Remplissage technique for engaging Hill-Sachs lesions",
    "High-resolution imaging for precision diagnosis",
  ],

  keyBenefits: [
    {
      title: "Stable Shoulder Joint",
      desc: "Restores ligament support and prevents the ball from slipping out again.",
    },
    {
      title: "Return to Sports",
      desc: "Allows safe participation in overhead and contact sports.",
    },
    {
      title: "Minimally Invasive Options",
      desc: "Arthroscopic techniques ensure less pain and faster recovery.",
    },
    {
      title: "Reduced Re-Injury Risk",
      desc: "Prevents repeated shoulder damage and long-term arthritis.",
    },
    {
      title: "Improved Strength & Mobility",
      desc: "Restores full functional capability for daily use.",
    },
  ],

  services: [
    {
      title: "Arthroscopic Bankart Repair",
      subtitle:
        "Keyhole surgery that reattaches the torn labrum and tightens the capsule to restore stability.",
      icon: <Syringe className="w-6 h-6" />,
    },
    {
      title: "Latarjet Procedure",
      subtitle:
        "A bone block technique recommended for significant bone loss—provides strong and permanent stabilization.",
      icon: <Bone className="w-6 h-6" />,
    },
    {
      title: "Capsular Shift Surgery",
      subtitle:
        "Tightens stretched or weakened capsule tissue to prevent further dislocations.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Clinical Evaluation",
      desc: "Assessment of instability, muscle strength, and shoulder movement.",
    },
    {
      step: 2,
      title: "Imaging & Diagnosis",
      desc: "MRI and CT scan to evaluate labral tears, bone loss, or Hill-Sachs lesions.",
    },
    {
      step: 3,
      title: "Customized Treatment Plan",
      desc: "Choosing Bankart, Latarjet, or capsular shift based on injury severity.",
    },
    {
      step: 4,
      title: "Surgical Stabilization",
      desc: "Performed arthroscopically or through a small incision for precise ligament and bone correction.",
    },
    {
      step: 5,
      title: "Rehabilitation",
      desc: "Gradual strengthening and mobility exercises to restore stability.",
    },
    {
      step: 6,
      title: "Return to Sports",
      desc: "Functional testing and clearance typically after 3–6 months.",
    },
  ],

  benefits: [
    "Prevents frequent shoulder dislocations",
    "Strengthens the joint and restores range of motion",
    "Minimally invasive approach with quicker recovery",
    "Safe return to sports and overhead activities",
  ],

  highlights: {
    title: "Regain Shoulder Control & Confidence",
    description:
      "Our expert shoulder surgeons specialize in treating recurrent dislocations using proven techniques like Bankart Repair and Latarjet. Restore your joint’s stability and return to your active lifestyle—without fear of reinjury.",
    button: "Explore Shoulder Stabilization Options",
  },

  testimonials: [
    {
      name: "Rajat Mehra",
      age: 27,
      surgery: "Bankart Repair",
      quote:
        "My shoulder used to pop out during cricket. After surgery, I regained full stability and returned to sports confidently.",
      rating: 5,
    },
    {
      name: "Priya Singh",
      age: 31,
      surgery: "Latarjet Procedure",
      quote:
        "Years of repeated dislocations finally ended after the Latarjet surgery. My shoulder feels strong and secure now.",
      rating: 5,
    },
    {
      name: "Aditya Chauhan",
      age: 23,
      surgery: "Capsular Shift",
      quote:
        "My shoulder instability made daily activities difficult. After capsular tightening, the problem disappeared completely.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Why does the shoulder dislocate repeatedly?",
      answer:
        "Once the ligaments or labrum are torn, the shoulder loses stability. Without repair, it may continue dislocating even with small movements.",
    },
    {
      question: "Is arthroscopic surgery effective?",
      answer:
        "Yes. Bankart repair is highly successful for soft-tissue injuries and is minimally invasive.",
    },
    {
      question: "When is Latarjet needed?",
      answer:
        "Latarjet is recommended when significant bone loss or repeated failed dislocations occur.",
    },
    {
      question: "How long until I can return to sports?",
      answer:
        "Most patients return to sports within 3–6 months depending on recovery and rehab.",
    },
    {
      question: "Can shoulder instability worsen over time?",
      answer:
        "Yes. Repeated dislocations cause more ligament damage, bone loss, and early arthritis.",
    },
  ],

  keywords: [
    "Recurrent shoulder dislocation surgery Jaipur",
    "Bankart repair specialist Rajasthan",
    "Shoulder instability treatment India",
    "Latarjet procedure for shoulder dislocation",
    "Shoulder ligament repair surgeon Jaipur",
  ],
};



export default function RecurrentShoulderDislocations() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={shoulderDislocationData} />
      <Footer />
    </>
  );
}
