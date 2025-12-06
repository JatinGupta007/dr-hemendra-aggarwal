import React from "react";
import Image from "next/image";
import SpecificExpertise from "@/component/SpecificExpertise";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";


export const arthroscopyData = {
  icon: "/Images/treatment_icon_2.png",
  title: "Arthroscopy - Keyhole Surgery",
  about:
    "Arthroscopy, also known as keyhole surgery, is a minimally invasive procedure used to diagnose and treat joint problems. Through tiny incisions, a high-definition camera and micro-instruments allow precise treatment with minimal pain and faster recovery.",

  recommended: [
    "Persistent joint pain or swelling",
    "Sports injuries such as ligament or cartilage tears",
    "Meniscus tears in the knee",
    "Shoulder instability or rotator cuff injuries",
    "Loose bodies inside the joint",
    "Early-stage arthritis",
    "Unclear MRI or diagnostic reports requiring direct visualization",
  ],

  modernTechniques: [
    "High-definition arthroscopic imaging",
    "Micro-instrument minimally invasive repair",
    "Suture anchor fixation technology",
    "Meniscus preservation techniques",
    "Biologic augmentation (PRP, stem-cell assisted healing)",
    "Thermal shrinkage for ligament tightening",
    "Arthroscopic 360° shoulder stabilization",
  ],

  keyBenefits: [
    {
      title: "Minimally Invasive",
      desc: "Tiny incisions reduce pain, scarring, and recovery time.",
    },
    {
      title: "Early Return to Activity",
      desc: "Patients often resume routine activities much faster than open surgery.",
    },
    {
      title: "High Precision Treatment",
      desc: "Real-time joint visualization ensures accurate diagnosis and targeted repair.",
    },
    {
      title: "Lower Infection Risk",
      desc: "Smaller incisions significantly reduce postoperative infection risk.",
    },
    {
      title: "Less Tissue Damage",
      desc: "Surrounding muscles and ligaments remain largely undisturbed.",
    },
  ],

  services: [
    {
      title: "Knee Arthroscopy (for Meniscus, ACL, PCL)",
      subtitle: "Meniscus repair, ACL & PCL reconstruction",
      icon: (
        <Image
          src="/Images/treatment_icon_8.png"
          alt="knee arthroscopy icon"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
    },
    {
      title: "Shoulder Arthroscopy (for Rotator Cuff, Labrum)",
      subtitle: "Repair for rotator cuff tear & shoulder instability",
      icon: (
        <Image
          src="/Images/treatment_icon_6.png"
          alt="shoulder arthroscopy icon"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
    },
    {
      title: "Ankle, Wrist, & Elbow Arthroscopy",
      subtitle: "Ligament repair, scar tissue removal & joint stabilization",
      icon: (
        <Image
          src="/Images/treatment_icon_5.png"
          alt="ankle wrist elbow arthroscopy icon"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
    },
    {
      title: "Diagnostic & Corrective Keyhole Surgery",
      subtitle: "Advanced corrective procedures using micro-instruments",
      icon: (
        <Image
          src="/Images/treatment_icon_12.png"
          alt="diagnostic arthroscopy icon"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Consultation & Clinical Evaluation",
      desc: "Detailed assessment of symptoms, joint mobility, and overall function.",
    },
    {
      step: 2,
      title: "Imaging & Pre-operative Planning",
      desc: "MRI / X-ray to understand internal joint damage accurately.",
    },
    {
      step: 3,
      title: "Arthroscopic Procedure",
      desc: "Camera-guided repair using 2–3 small incisions with micro-instruments.",
    },
    {
      step: 4,
      title: "Recovery & Early Mobilization",
      desc: "Patients walk the same day or the next day with minimal discomfort.",
    },
    {
      step: 5,
      title: "Rehabilitation & Strengthening",
      desc: "Personalized physiotherapy to restore full joint function.",
    },
    {
      step: 6,
      title: "Follow-Up & Long-Term Joint Care",
      desc: "Scheduled assessments to ensure smooth and lasting recovery.",
    },
  ],

  benefits: [
    "Tiny incisions & minimal scarring",
    "Quick return to normal routine",
    "Reduced postoperative pain",
    "Lower complication risks",
    "Day-care procedure in most cases",
    "Highly effective for sports injuries",
  ],

  highlights: {
    title: "Looking for expert arthroscopy in Jaipur?",
    description:
      "Experience advanced keyhole surgery with minimal pain and quick recovery.",
    button: "Book Arthroscopy Consultation",
  },

  testimonials: [
    {
      name: "Amit Verma",
      age: 28,
      surgery: "ACL Reconstruction (Arthroscopy)",
      quote:
        "My knee feels brand new! I was walking comfortably within a few days and returned to sports in just a few months.",
      rating: 5,
    },
    {
      name: "Nidhi Sharma",
      age: 41,
      surgery: "Shoulder Arthroscopy",
      quote:
        "I suffered from shoulder pain for years. Arthroscopy fixed it with minimal pain and a fast recovery!",
      rating: 5,
    },
    {
      name: "Rohit Meena",
      age: 33,
      surgery: "Ankle Arthroscopy",
      quote:
        "The swelling and pain in my ankle disappeared after the procedure. Very smooth and professional experience.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Is arthroscopy painful?",
      answer:
        "Most patients experience minimal pain because the incisions are small and the technique is gentle.",
    },
    {
      question: "How soon can I walk after knee arthroscopy?",
      answer:
        "Many patients walk the same day or the next day depending on the procedure.",
    },
    {
      question: "Is arthroscopy better than open surgery?",
      answer:
        "Yes, arthroscopy offers faster healing, smaller scars, reduced pain, and a lower risk of complications.",
    },
    {
      question: "How long is the recovery period?",
      answer:
        "Office work: 3–7 days, Light sports: 4–6 weeks, Full recovery: 8–12 weeks.",
    },
    {
      question: "Who is a good candidate for arthroscopy?",
      answer:
        "Patients with meniscus tears, ligament injuries, loose bodies, shoulder instability, or unresolved joint pain.",
    },
  ],

};


export default function ExpertisePage() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={arthroscopyData} />
      <Footer />
    </>
  );
}
