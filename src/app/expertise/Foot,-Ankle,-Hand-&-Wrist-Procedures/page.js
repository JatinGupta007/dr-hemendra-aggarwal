import SpecificExpertise from "@/component/SpecificExpertise";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";
import Image from "next/image";



const footAnkleHandWristData = {
  icon: "/Images/treatment_icon_5.png",
  title: "Foot, Ankle, Hand & Wrist Procedures",

  about:
    "Foot, ankle, hand, and wrist procedures address injuries and conditions affecting the small joints, tendons, ligaments, and soft tissues of the limbs. These treatments help restore function, reduce pain, and improve mobility using minimally invasive and advanced surgical techniques.",

  recommended: [
    "Chronic foot or ankle pain affecting mobility",
    "Heel pain, Achilles tendon injuries",
    "Sprains, ligament tears, or instability",
    "Hand or wrist fractures and deformities",
    "Carpal tunnel syndrome or trigger finger",
    "Tendon or nerve injuries in hand/wrist",
    "Arthritis pain in foot, ankle, or wrist",
  ],

  modernTechniques: [
    "Minimally invasive foot & ankle surgery",
    "Arthroscopic ligament and tendon repair",
    "Ultrasound-guided injections",
    "Endoscopic carpal tunnel release",
    "Tendon reconstruction techniques",
    "3D correction for deformities (bunions, flat foot)",
    "Biologic therapy for tendon and ligament healing",
  ],

  keyBenefits: [
    {
      title: "Improved Mobility",
      desc: "Restores joint and soft-tissue function for easier daily movements.",
    },
    {
      title: "Pain Reduction",
      desc: "Significant relief from chronic pain in foot, ankle, hand, and wrist.",
    },
    {
      title: "Minimally Invasive Options",
      desc: "Faster healing with smaller incisions and less discomfort.",
    },
    {
      title: "Better Grip & Stability",
      desc: "Enhanced strength and joint stability for routine activities.",
    },
    {
      title: "Corrects Deformities",
      desc: "Fixes bunions, flat feet, crooked fingers, and other structural issues.",
    },
  ],

  services: [
    {
      icon: (
        <Image
          src="/Images/treatment_icon_24.png"
          alt="treatment_icon_6"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Carpal Tunnel Syndrome",
      subtitle: "Relieve hand numbness with effective surgery",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_25.png"
          alt="treatment_icon_6"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Plantar Fasciitis",
      subtitle: "Heel pain treatment with custom plans",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_26.png"
          alt="treatment_icon_6"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Flat Foot, Bunions, and Toe Deformities",
      subtitle: "Realignment and correction procedures",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_27.png"
          alt="treatment_icon_6"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Ankle Sprains & Instability",
      subtitle: "Sports and trauma care for ankles",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_28.png"
          alt="treatment_icon_6"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Ganglion Cyst Removal",
      subtitle: "Safe, outpatient surgery for cysts",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_29.png"
          alt="treatment_icon_6"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Trigger Finger Release",
      subtitle: "Quick procedure to restore finger mobility",
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Consultation & Physical Evaluation",
      desc: "Detailed examination of joint mobility, strength, and pain areas.",
    },
    {
      step: 2,
      title: "Imaging & Diagnostic Tests",
      desc: "X-rays, MRI, or ultrasound to identify soft tissue and bone issues.",
    },
    {
      step: 3,
      title: "Personalized Treatment Plan",
      desc: "Customized surgical or non-surgical plan based on your condition.",
    },
    {
      step: 4,
      title: "Procedure (Minimally Invasive / Arthroscopy / Open)",
      desc: "Performed using high-precision techniques for optimal results.",
    },
    {
      step: 5,
      title: "Recovery & Hand/Foot Therapy",
      desc: "Specialized physiotherapy to restore strength and mobility.",
    },
    {
      step: 6,
      title: "Long-Term Follow-Up",
      desc: "Monitoring healing progress and preventing future injuries.",
    },
  ],

  benefits: [
    "Specialized care for hand, foot, and ankle issues",
    "Surgical & non-surgical treatments available",
    "Precise diagnosis and imaging support",
    "Minimally invasive techniques for faster healing",
  ],

  highlights: {
    title: "Looking for expert care for Foot, Ankle, Hand & Wrist problems?",
    description:
      "Get advanced treatment for ligament injuries, deformities, tendon tears, fractures, and nerve conditions with minimal pain.",
    button: "Book Consultation",
  },

  testimonials: [
    {
      name: "Vikas Sharma",
      age: 29,
      surgery: "Ankle Arthroscopy",
      quote:
        "My ankle pain from a sports injury is gone completely. The recovery was much faster than I expected!",
      rating: 5,
    },
    {
      name: "Reema Jain",
      age: 48,
      surgery: "Carpal Tunnel Release",
      quote:
        "I had severe numbness in my hands. The keyhole surgery gave instant relief. Amazing care and guidance!",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Are these procedures minimally invasive?",
      answer:
        "Yes, most foot, ankle, hand, and wrist procedures can be performed using arthroscopy or very small incisions.",
    },
    {
      question: "How long is the recovery period?",
      answer:
        "Many patients resume routine activities within 1–2 weeks. Complete recovery depends on the specific procedure.",
    },
    {
      question: "Do these surgeries relieve chronic pain?",
      answer:
        "Yes, surgeries like tendon repair, arthroscopy, and nerve release often provide significant, long-term pain relief.",
    },
    {
      question: "Is physiotherapy needed after surgery?",
      answer:
        "Yes, targeted physiotherapy helps restore strength, flexibility, and function.",
    },
  ],
};

export default function FootAnklePage() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={footAnkleHandWristData} />
      <Footer />
    </>
  );
}
