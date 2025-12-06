import SpecificExpertise from "@/component/SpecificExpertise";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";
import Image from "next/image";

export const fractureTraumaData = {
  icon: "/Images/treatment_icon_7.png",

  title: "Fracture & Trauma Surgery",

  about:
    "Fracture and trauma surgery focuses on the rapid and precise treatment of broken bones and injury-related damage. From simple fractures to complex polytrauma cases, advanced surgical techniques help restore mobility, alignment, and function with faster healing.",

  recommended: [
    "Severe pain, swelling, or deformity after injury",
    "Inability to bear weight on a limb",
    "Visible bone displacement or open wounds",
    "Fractures from sports, accidents, or falls",
    "Non-healing or malunited fractures",
    "High-impact trauma involving multiple injuries",
  ],

  services: [
    {
      icon: (
        <Image
          src="/Images/treatment_icon_3.png"
          alt="open closed reduction icon"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Open & Closed Reduction",
      subtitle: "Repositioning fractured bones for natural alignment",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_16.png"
          alt="internal fixation icon"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Internal Fixation (Plates, Screws, Rods)",
      subtitle: "Stabilizing fractures using implants for proper healing",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_17.png"
          alt="geriatric pediatric icon"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Geriatric & Pediatric Fracture Management",
      subtitle: "Child- and elderly-specific fracture care",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_18.png"
          alt="polytrauma icon"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Complex Polytrauma Surgeries",
      subtitle: "Multiple fractures managed with precision and planning",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_19.png"
          alt="non healing fracture icon"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Non-healing Fracture & Revision Surgery",
      subtitle: "Advanced solutions for delayed or failed bone healing",
    },
  ],

  modernTechniques: [
    "Minimally invasive fracture fixation",
    "Locked plating and intramedullary nailing",
    "External fixation for complex trauma",
    "Image-guided surgical alignment",
    "Biologic bone healing stimulation",
    "Advanced implant technology for durability",
  ],

  keyBenefits: [
    {
      title: "Rapid Pain Relief",
      desc: "Immediate stabilization reduces severe pain and discomfort.",
    },
    {
      title: "Faster Mobilization",
      desc: "Modern fixation methods allow early movement and weight-bearing.",
    },
    {
      title: "Precise Bone Alignment",
      desc: "Restores natural structure and prevents long-term deformities.",
    },
    {
      title: "High Healing Success",
      desc: "Advanced implants and techniques promote healthy bone union.",
    },
    {
      title: "Reduced Complications",
      desc: "Lower risk of malunion, infection, or long-term disability.",
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Emergency Evaluation",
      desc: "Immediate assessment of fractures, wounds, and trauma stability.",
    },
    {
      step: 2,
      title: "Imaging & Diagnosis",
      desc: "X-ray, CT scan, or MRI for detailed fracture mapping.",
    },
    {
      step: 3,
      title: "Stabilization & Surgical Planning",
      desc: "Temporary splinting or fixation until surgery is performed.",
    },
    {
      step: 4,
      title: "Fracture Fixation Surgery",
      desc: "Internal or external fixation based on fracture type and severity.",
    },
    {
      step: 5,
      title: "Rehabilitation",
      desc: "Physiotherapy to restore strength and mobility.",
    },
    {
      step: 6,
      title: "Long-Term Healing & Follow-Up",
      desc: "Monitoring bone healing and preventing reinjury.",
    },
  ],

  benefits: [
    "24x7 trauma & emergency readiness",
    "Minimally invasive fracture care",
    "Expertise in elderly and pediatric fractures",
    "Trusted by thousands at SMS Hospital Jaipur",
  ],

  highlights: {
    title: "Get Emergency Trauma Care",
    description:
      "Immediate attention and surgical expertise for all types of fractures and injuries. Don’t delay care—restore mobility and reduce long-term complications.",
    button: "Contact Emergency Ortho Now",
  },

  testimonials: [
    {
      name: "Mahesh Gupta",
      age: 45,
      injury: "Leg Fracture (Road Accident)",
      quote:
        "I was brought in after a major accident. The surgical care and recovery guidance I received were exceptional. I’m walking normally again!",
      rating: 5,
    },
    {
      name: "Sejal Verma",
      age: 12,
      injury: "Wrist Fracture",
      quote:
        "My daughter's wrist fracture was treated with great care. The pediatric-friendly approach made her recovery smooth and stress-free.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How quickly should a fracture be treated?",
      answer:
        "Most fractures require immediate evaluation. Early stabilization reduces pain, prevents complications, and improves healing outcomes.",
    },
    {
      question: "Do all fractures need surgery?",
      answer:
        "No. Some fractures heal well with plaster or splints, while complex or displaced fractures may require surgical fixation.",
    },
    {
      question: "How long does a fracture take to heal?",
      answer:
        "Most fractures heal within 6–12 weeks depending on age, bone quality, and severity of the injury.",
    },
    {
      question: "Can elderly patients recover from fractures?",
      answer:
        "Yes. With proper fixation, early mobilization, and physiotherapy, elderly patients can recover safely and effectively.",
    },
  ],
};

export default function FractureTraumaPage() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={fractureTraumaData} />
      <Footer />
    </>
  );
}
