import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Ruler, Hammer, Bone } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const revisionSurgeryData = {
  icon: "/Images/treatment_icon_19.png",

  title: "Non-healing Fracture & Revision Surgery",
  subtitle: "Correcting Improper Bone Healing & Failed Surgeries",

  about:
    "Some fractures fail to heal even after months of treatment (nonunion), while others heal improperly in a misaligned position (malunion). These situations cause pain, deformity, and loss of function. Revision surgery corrects unstable fixation, failed implants, bone loss, and misaligned healing—helping patients regain mobility and long-term bone stability.",

  recommended: [
    "Fractures not healing even after 3–6 months",
    "Persistent pain, swelling, or instability at fracture site",
    "Implant failure such as broken plates or loose screws",
    "Deformity due to bone healing in the wrong position",
    "Infection at a previous fracture site",
    "Nonunion caused by poor blood supply or osteoporosis",
  ],

  modernTechniques: [
    "Revision plating and intramedullary nailing",
    "Autograft and allograft bone grafting",
    "Bone transport and limb reconstruction methods",
    "External fixation for infected or complex fractures",
    "Corrective osteotomy to realign healed bones",
    "Biological enhancers like PRP & BMP for bone regeneration",
  ],

  keyBenefits: [
    {
      title: "Fixes Improper Bone Healing",
      desc: "Corrects deformities and improper alignment caused by malunion.",
    },
    {
      title: "Restores Bone Strength",
      desc: "Stable fixation and bone grafting promote strong, reliable bone healing.",
    },
    {
      title: "Relieves Chronic Pain",
      desc: "Addresses unresolved pain from unstable or non-healing fractures.",
    },
    {
      title: "Prevents Long-Term Complications",
      desc: "Stops future arthritis, deformity, or repeated fractures.",
    },
    {
      title: "Improves Function & Mobility",
      desc: "Restores normal limb movement for daily and work activities.",
    },
  ],

  services: [
    {
      title: "Revision Internal Fixation",
      subtitle:
        "Re-adjustment or replacement of implants such as plates, screws, rods, or nails to stabilize the fracture properly.",
      icon: <Hammer className="w-6 h-6" />,
    },
    {
      title: "Bone Grafting Techniques",
      subtitle:
        "Use of natural or synthetic bone grafts to stimulate healing in nonunion cases or areas with bone loss.",
      icon: <Bone className="w-6 h-6" />,
    },
    {
      title: "Corrective Osteotomy & External Fixation",
      subtitle:
        "Realignment of bones healed in the wrong shape, and application of external fixators in complex or infected cases.",
      icon: <Ruler className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Assessment & Imaging",
      desc: "X-rays, CT scans, and clinical evaluation to identify nonunion, malunion, or implant failure.",
    },
    {
      step: 2,
      title: "Treatment Planning",
      desc: "Choosing the best revision strategy—implant replacement, bone grafting, or corrective osteotomy.",
    },
    {
      step: 3,
      title: "Revision Surgery",
      desc: "Removal of damaged implants, correction of bone alignment, and placement of new fixation.",
    },
    {
      step: 4,
      title: "Bone Regeneration Support",
      desc: "Bone grafts or biological enhancers to promote healing.",
    },
    {
      step: 5,
      title: "Rehabilitation",
      desc: "Progressive physiotherapy to restore strength, flexibility, and movement.",
    },
    {
      step: 6,
      title: "Long-Term Follow-Up",
      desc: "Regular monitoring to ensure proper healing and implant stability.",
    },
  ],

  benefits: [
    "Supports complete healing of stubborn fractures",
    "Corrects deformities caused by malalignment",
    "Relieves pain and restores daily mobility",
    "Minimizes risk of future joint or bone complications",
  ],

  highlights: {
    title: "Healing What Others Couldn't Fix",
    description:
      "Our expert revision surgery team specializes in nonunion and malunion fracture correction. Whether it's a failed implant, persistent pain, or improper healing—we deliver the care needed for long-term recovery and comfort.",
    button: "Explore Fracture Revision Options",
  },

  testimonials: [
    {
      name: "Harish Sharma",
      age: 50,
      surgery: "Nonunion Tibia Revision",
      quote:
        "My fracture hadn’t healed for months. The revision surgery finally fixed it, and I’m walking without pain again.",
      rating: 5,
    },
    {
      name: "Priya Mehta",
      age: 38,
      surgery: "Corrective Osteotomy",
      quote:
        "My bone had healed crooked after an accident. They corrected the alignment perfectly. My leg is straight again!",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      age: 46,
      surgery: "Bone Grafting & Fixation",
      quote:
        "I had a failed implant before. The doctors replaced it and added bone grafting—now the pain is gone and the bone is strong.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Why do some fractures fail to heal?",
      answer:
        "Nonunion can occur due to poor blood supply, unstable fixation, infection, smoking, diabetes, or severe fracture patterns.",
    },
    {
      question: "Is revision surgery painful?",
      answer:
        "The procedure is done under anesthesia, and postoperative pain is managed effectively with medications.",
    },
    {
      question: "How long does healing take after revision surgery?",
      answer:
        "It depends on severity but typically takes 3–6 months for strong healing, supported by physiotherapy.",
    },
    {
      question: "Are bone grafts safe?",
      answer:
        "Yes. Natural or synthetic grafts are commonly used and proven safe to stimulate bone healing.",
    },
    {
      question: "Can incorrect alignment be fully corrected?",
      answer:
        "Yes. Corrective osteotomy realigns the bone to its natural position, improving function and appearance.",
    },
  ],

  keywords: [
    "Nonunion fracture surgery Jaipur",
    "Malunion bone correction Rajasthan",
    "Revision fracture surgery specialist",
    "Bone grafting orthopedic Jaipur",
    "Failed fracture treatment revision",
  ],
};



export default function NonHealingFracture() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={revisionSurgeryData} />
      <Footer />
    </>
  );
}
