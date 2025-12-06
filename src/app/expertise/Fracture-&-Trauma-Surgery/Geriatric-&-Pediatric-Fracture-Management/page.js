import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Activity, Baby, ShieldCheck } from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const ageSpecificFractureData = {
  icon: "/Images/treatment_icon_17.png",

  title: "Geriatric & Pediatric Fracture Management",
  subtitle: "Fracture Care Tailored to Age-Specific Needs",

  about:
    "Fracture management in elderly and pediatric patients requires specialized techniques because bone structure, healing capacity, and long-term risks differ greatly across age groups. Older adults often have fragile bones due to osteoporosis, while children have developing bones and growth plates that must be preserved. Our age-specific approach ensures safe, accurate, and effective recovery for all patients.",

  recommended: [
    "Elderly patients with osteoporosis-related fractures",
    "Children with growth plate injuries or developing bone fractures",
    "Patients with slow or improper healing",
    "Fractures from falls, accidents, or sports injuries",
    "Multiple fractures requiring age-specific stabilization",
    "Recurrent fractures linked to bone weakness or activity level",
  ],

  modernTechniques: [
    "Growth plate–preserving techniques for children",
    "Flexible nails, K-wires, and casting for pediatric fractures",
    "Cement-augmented fixation for elderly osteoporotic bones",
    "Minimally invasive plating and nailing",
    "External fixation for unstable or multi-fragment fractures",
    "Advanced rehabilitation for safe and timely recovery",
  ],

  keyBenefits: [
    {
      title: "Age-Appropriate Healing",
      desc: "Treatments tailored to children’s growing bones and elderly patients’ fragile skeletons.",
    },
    {
      title: "Reduced Long-Term Complications",
      desc: "Helps avoid deformities in children and complications like immobility in elders.",
    },
    {
      title: "Faster, Safer Recovery",
      desc: "Optimized stabilization and early mobilization improve outcomes.",
    },
    {
      title: "Preservation of Growth Plates",
      desc: "Ensures proper bone development in children without long-term deformity.",
    },
    {
      title: "Holistic Care",
      desc: "Includes pain management, nutrition guidance, and physiotherapy for full recovery.",
    },
  ],

  services: [
    {
      title: "Geriatric Fracture Management",
      subtitle:
        "Stable fixation, early mobilization, and techniques designed for elderly patients with fragile bones or osteoporosis.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Pediatric Fracture Management",
      subtitle:
        "Growth plate–preserving treatment using casting, flexible nails, pins, or minimally invasive techniques tailored to developing bones.",
      icon: <Baby className="w-6 h-6" />,
    },
    {
      title: "Rehabilitation & Monitoring",
      subtitle:
        "Structured physiotherapy and growth monitoring to ensure proper healing and long-term function.",
      icon: <Activity className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Age-Specific Evaluation",
      desc: "Assessing bone quality, growth plate involvement, and fracture stability based on age.",
    },
    {
      step: 2,
      title: "Imaging & Diagnosis",
      desc: "X-rays, CT scans, or MRI to understand fracture type and personalize treatment.",
    },
    {
      step: 3,
      title: "Stabilization",
      desc: "Age-appropriate fixation using casts, splints, flexible nails, or plates.",
    },
    {
      step: 4,
      title: "Definitive Treatment",
      desc: "Surgical or conservative care depending on bone strength, fracture pattern, and patient needs.",
    },
    {
      step: 5,
      title: "Rehabilitation",
      desc: "Restoration of mobility, strength, and balance through guided physiotherapy.",
    },
    {
      step: 6,
      title: "Long-Term Follow-Up",
      desc: "Growth monitoring for children and bone health management for elderly patients.",
    },
  ],

  benefits: [
    "Faster healing tailored to age-specific needs",
    "Reduced risk of long-term deformity or disability",
    "Use of age-appropriate implants and methods",
    "Comprehensive rehab plans for full recovery",
  ],

  highlights: {
    title: "Safe and Specialized Fracture Healing for All Ages",
    description:
      "We provide advanced fracture care designed for children’s rapidly developing bones and elderly patients' fragile skeletal structures, ensuring safe, strong, and confident recovery throughout every stage.",
    button: "Explore Age-Specific Care",
  },

  testimonials: [
    {
      name: "Kavya Sharma",
      age: 8,
      surgery: "Pediatric Forearm Fracture",
      quote:
        "The team focused on protecting her growth plates. She healed quickly and regained full arm movement!",
      rating: 5,
    },
    {
      name: "Mahesh Verma",
      age: 72,
      surgery: "Hip Fracture Fixation",
      quote:
        "Timely surgery and guided rehab helped me walk again earlier than expected. Excellent geriatric care!",
      rating: 5,
    },
    {
      name: "Ritesh Jain",
      age: 14,
      surgery: "Flexible Nail Fixation",
      quote:
        "My son's fracture healed perfectly with minimal scarring. The pediatric-focused care made all the difference.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question:
        "Why is fracture care different for children and elderly patients?",
      answer:
        "Children have growth plates that require protection, while elderly bones may be weak due to osteoporosis. Each age group requires specific methods for proper healing.",
    },
    {
      question: "Do pediatric fractures heal faster?",
      answer:
        "Yes, children’s bones heal quicker, but improper treatment can affect long-term growth and alignment.",
    },
    {
      question: "Is surgery always needed for geriatric fractures?",
      answer:
        "Not always. However, many elderly fractures benefit from surgical stabilization to allow earlier mobility and prevent complications.",
    },
    {
      question: "How are growth plate fractures treated?",
      answer:
        "They are carefully aligned and stabilized using methods that protect bone development and prevent deformity.",
    },
    {
      question: "Is physiotherapy necessary after fracture treatment?",
      answer:
        "Yes. Rehab is vital for restoring strength, preventing stiffness, and ensuring proper long-term function.",
    },
  ],

  keywords: [
    "Geriatric fracture treatment Jaipur",
    "Pediatric orthopedic care Rajasthan",
    "Children bone fracture clinic",
    "Elderly bone injury treatment",
    "Growth plate injury specialist Jaipur",
  ],
};



export default function GariaticAndPediaticFractureManagement() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={ageSpecificFractureData} />
      <Footer />
    </>
  );
}
