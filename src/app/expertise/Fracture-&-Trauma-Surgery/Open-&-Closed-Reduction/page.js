import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Hammer, Hand } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const fractureReductionData = {
  icon: "/Images/treatment_icon_3.png",

  title: "Open & Closed Reduction",
  subtitle: "Fracture Alignment Procedures for Proper Bone Healing",

  about:
    "Open and Closed Reduction are essential procedures used to realign broken bones into their correct anatomical position. Closed reduction is performed without surgery for simple fractures, while open reduction is recommended for complex, displaced, or unstable fractures requiring surgical correction. Both aim to restore limb function, prevent deformity, and ensure proper healing.",

  recommended: [
    "Displaced or angulated bone fractures",
    "Fractures causing deformity or inability to move the limb",
    "Severe pain and swelling after trauma",
    "Joint dislocations accompanied by fractures",
    "Fractures not suitable for casting alone",
    "Open fractures or complex multi-fragment injuries (for open reduction)",
  ],

  modernTechniques: [
    "Image-guided closed reduction using X-ray or C-arm",
    "Minimally invasive fixation during open reduction",
    "High-strength plates, screws, and rods for stabilization",
    "Regional and general anesthesia for painless alignment",
    "Real-time fluoroscopic guidance for accuracy",
  ],

  keyBenefits: [
    {
      title: "Accurate Bone Alignment",
      desc: "Ensures bones heal correctly, maintaining limb function and appearance.",
    },
    {
      title: "Reduced Risk of Long-Term Complications",
      desc: "Prevents deformity, arthritis, and mobility issues caused by poor alignment.",
    },
    {
      title: "Faster Functional Recovery",
      desc: "Early mobilization is possible with proper reduction and fixation.",
    },
    {
      title: "Minimally Invasive Options",
      desc: "Closed reduction avoids surgery in simple fractures.",
    },
    {
      title: "Improved Stability with Fixation",
      desc: "Open reduction provides strong fixation in complex or unstable fractures.",
    },
  ],

  services: [
    {
      title: "Closed Reduction",
      subtitle:
        "Non-surgical alignment of simple fractures using manual manipulation, traction, and immobilization with splints or casts.",
      icon: <Hand className="w-6 h-6" />,
    },
    {
      title: "Open Reduction",
      subtitle:
        "Surgical realignment of displaced or complex fractures, often combined with internal fixation (ORIF) using plates, rods, or screws.",
      icon: <Hammer className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Immediate Assessment",
      desc: "Clinical evaluation and imaging to determine fracture type and severity.",
    },
    {
      step: 2,
      title: "Choice of Procedure",
      desc: "Closed or open reduction selected based on alignment, displacement, and joint involvement.",
    },
    {
      step: 3,
      title: "Reduction Procedure",
      desc: "Fracture is aligned manually (closed) or surgically (open) using modern fixation tools.",
    },
    {
      step: 4,
      title: "Immobilization",
      desc: "Casts, braces, or internal fixation are used to maintain proper bone alignment.",
    },
    {
      step: 5,
      title: "Rehabilitation",
      desc: "Guided physiotherapy to restore strength, mobility, and full limb function.",
    },
    {
      step: 6,
      title: "Follow-Up Imaging",
      desc: "Regular X-rays ensure the bone is healing correctly without displacement.",
    },
  ],

  benefits: [
    "Corrects bone alignment to promote proper healing",
    "Improves mobility and reduces long-term complications",
    "Minimally invasive (closed) or precise surgical (open) treatment",
    "Faster recovery with proper fixation and physiotherapy",
  ],

  highlights: {
    title: "Precise Fracture Treatment for Complete Recovery",
    description:
      "Whether treated through a cast or surgery, our reduction procedures ensure that your bones heal in the right position—restoring your mobility and preventing future deformities or joint problems.",
    button: "Explore Fracture Treatments",
  },

  testimonials: [
    {
      name: "Anuj Verma",
      age: 28,
      surgery: "Closed Reduction for Wrist Fracture",
      quote:
        "My wrist fracture was treated without surgery and aligned perfectly. Quick recovery and excellent care!",
      rating: 5,
    },
    {
      name: "Suman Mehra",
      age: 52,
      surgery: "Open Reduction for Ankle Fracture",
      quote:
        "The surgery restored my ankle alignment completely. I’m walking comfortably again after physiotherapy.",
      rating: 5,
    },
    {
      name: "Ravi Sharma",
      age: 34,
      surgery: "ORIF for Arm Fracture",
      quote:
        "My bone had shifted badly, but the open reduction fixed it perfectly with plates. Very satisfied with the results!",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Is closed reduction painful?",
      answer:
        "It is usually performed under local or regional anesthesia, ensuring minimal discomfort during the procedure.",
    },
    {
      question: "When is open reduction necessary?",
      answer:
        "When the fracture is severely displaced, involves a joint, or cannot be aligned manually, surgery becomes necessary.",
    },
    {
      question: "How long does recovery take?",
      answer:
        "Most fractures heal within 6–12 weeks depending on location, severity, and adherence to rehabilitation.",
    },
    {
      question: "Will I need a cast after reduction?",
      answer:
        "Closed reduction typically requires a cast or splint. Open reduction may use internal fixation that allows earlier movement.",
    },
    {
      question: "Can the bone shift again after reduction?",
      answer:
        "Proper immobilization and follow-up care help prevent displacement. Regular X-rays ensure stable healing.",
    },
  ],

  keywords: [
    "Fracture treatment Jaipur",
    "Closed reduction for broken bones",
    "Surgical fracture reduction Jaipur",
    "Open reduction internal fixation",
    "Bone alignment procedures",
  ],
};



export default function FractureReduction() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={fractureReductionData} />
      <Footer />
    </>
  );
}
