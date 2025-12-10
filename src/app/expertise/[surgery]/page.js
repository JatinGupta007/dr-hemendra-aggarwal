import SpecificExpertise from "@/component/SpecificExpertise";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";
import Image from "next/image";
import { notFound } from "next/navigation";

import { SurgeryData } from "@/component/Data";



const jointReplacementData = {
  icon: "/Images/treatment_icon_8.png",
  title: "Joint Replacement Surgery",
  about:
    "Joint replacement surgery involves removing damaged joint surfaces and replacing them with artificial implants made of metal, plastic, or ceramic materials. This procedure restores function and eliminates pain in severely damaged joints.",
  recommended: [
    "Severe joint pain that limits daily activities",
    "Chronic stiffness and reduced mobility",
    "Difficulty walking, climbing stairs, or getting up",
    "Advanced arthritis or joint degeneration",
    "When conservative treatments no longer provide relief",
  ],
  modernTechniques: [
    "Minimally invasive surgical approaches",
    "Advanced, durable implant materials",
    "Accelerated recovery protocols",
    "Robotic-assisted joint replacement",
    "3D-printed patient-specific implants",
    "Cementless biologic fixation technology",
    "Soft-tissue balancing systems for precise alignment",
  ],
  keyBenefits: [
    {
      title: "Pain Relief",
      desc: "Significant reduction or complete elimination of chronic joint pain.",
    },

    {
      title: "Enhanced Quality of Life",
      desc: "Return to an active lifestyle with increased comfort and confidence.",
    },
    {
      title: "Faster Recovery",
      desc: "Modern minimally invasive techniques enable quicker rehabilitation and early mobilization.",
    },
    {
      title: "Long-Lasting Implant Durability",
      desc: "Advanced implant materials designed to last 15–25 years or more with proper care.",
    },

    {
      title: "Reduced Dependence on Medication",
      desc: "Less long-term reliance on painkillers and anti-inflammatory drugs.",
    },
  ],

  services: [
    {
      title: "Total & Partial Knee Replacement",
      subtitle: "For chronic knee arthritis and damage.",
      icon: (
        <Image
          src="/Images/treatment_icon_1.png"
          alt="treatment_icon_8"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
    },
    {
      title: "Hip Replacement Surgery",
      subtitle: "Smooth, pain-free hip joint mobility.",
      icon: (
        <Image
          src="/Images/treatment_icon_9.png"
          alt="treatment_icon_8"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
    },
    {
      title: "Shoulder & Elbow Replacement",
      subtitle: "Advanced joint solutions for arms.",
      icon: (
        <Image
          src="/Images/treatment_icon_6.png"
          alt="treatment_icon_8"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
    },
    {
      title: "Reverse Shoulder Replacement",
      subtitle: "Ideal for complex shoulder injuries.",
      icon: (
        <Image
          src="/Images/treatment_icon_19.png"
          alt="treatment_icon_8"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
    },
    {
      title: "Revision Joint Replacement Surgeries",
      subtitle: "Fixing or upgrading failed implants.",
      icon: (
        <Image
          src="/Images/treatment_icon_11.png"
          alt="treatment_icon_8"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
    },
    {
      title: "Painless & Quick Recovery Joint Surgery",
      subtitle: "Modern techniques for faster healing.",
      icon: (
        <Image
          src="/Images/treatment_icon_10.png"
          alt="treatment_icon_8"
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
      title: "Consultation & Diagnosis",
      desc: "Detailed evaluation of your condition and medical history.",
    },
    {
      step: 2,
      title: "X-Ray / MRI Evaluation",
      desc: "Advanced imaging to assess joint damage accurately",
    },
    {
      step: 3,
      title: "Personalized Treatment Plan",
      desc: "Customized surgical approach tailored to your needs.",
    },
    {
      step: 4,
      title: "Pre-Surgery Preparation",
      desc: "Health optimization and surgical planning",
    },
    {
      step: 5,
      title: "Joint Replacement Surgery",
      desc: "Minimally invasive procedure with advanced techniques.",
    },
    {
      step: 6,
      title: "Post-Operative Care",
      desc: "24/7 monitoring and pain management",
    },
    {
      step: 7,
      title: "Physiotherapy & Rehabilitation",
      desc: "Guided exercises to restore strength and mobility.",
    },
    {
      step: 8,
      title: "Follow-Up & Long-Term Care",
      desc: "Regular check-ups to ensure lasting joint health.",
    },
  ],
  benefits: [
    "Minimally Invasive Techniques",
    "Reduced Hospital Stay",
    "Expert Surgical Care",
    "Improved Quality of Life",
    "Affordable Joint Replacement in Jaipur",
  ],
  highlights: {
    title: "Looking for the best knee replacement surgeon in Jaipur?",
    description: "Book your consultation today and step into a pain-free life.",
    button: "Learn More About Joint Replacement",
  },
  testimonials: [
    {
      name: "Rajesh Kumar",
      age: 62,
      surgery: "Total Knee Replacement",
      quote:
        "I was able to walk with support just one day after surgery. Dr. Hemendra explained everything and made me feel very comfortable. Now I can walk without pain!",
      rating: 5,
    },
    {
      name: "Sunita Sharma",
      age: 58,
      surgery: "Hip Replacement",
      quote:
        "After years of hip pain, I finally decided to get surgery. Dr. Agrawal's expertise and care made the whole process smooth. I'm back to my daily activities now.",
      rating: 5,
    },
    {
      name: "Mohan Patel",
      age: 67,
      surgery: "Shoulder Replacement",
      quote:
        "The shoulder pain was affecting my sleep and daily life. Thanks to Dr. Agrawal's minimally invasive approach, my recovery was faster than expected. Highly recommended!",
      rating: 5,
    },
  ],
  faqs: [
    {
      question: "Is joint replacement surgery safe?",
      answer:
        "Yes, joint replacement surgery is a well-established and safe procedure with high success rates. Modern techniques, advanced implants, and experienced surgeons like Dr. Agrawal ensure minimal risks and excellent outcomes.",
    },
    {
      question: "How long does it take to recover?",
      answer:
        "Most patients start walking with support within 24-48 hours. Full recovery typically takes 6-12 weeks for normal activities, though this varies by individual. Our comprehensive physiotherapy program helps speed up recovery.",
    },
    {
      question: "How long do implants last?",
      answer:
        "Modern joint implants typically last 15-25 years or more with proper care. The longevity depends on factors like patient age, activity level, body weight, and implant quality.",
    },
    {
      question: "Can elderly patients undergo joint replacement?",
      answer:
        "Yes, age is not a barrier. We evaluate overall health and fitness rather than just age. Many patients in their 70s and 80s successfully undergo joint replacement and experience significant improvement in quality of life.",
    },
    {
      question: "When can I start walking after surgery?",
      answer:
        "Most patients begin walking with support (walker or crutches) within 24-48 hours after surgery. Early mobilization is a key part of our recovery protocol and helps prevent complications.",
    },
  ],
};
// Update the path as needed
export default function SurgeryPage({  params }) {
  const { surgery } = params;
  console.log("Surgery Param:", surgery);
  const normalize = (s) => s.replace(/\s+/g, "-").toLowerCase();
  const surgeryInfo = SurgeryData.find((item) => normalize(item.title) === surgery.toLowerCase());
  if (!surgeryInfo) return notFound();
  console.log("Surgery Info:", surgeryInfo);
  return (
    <>
      <Navbar />
      <SpecificExpertise data={surgeryInfo} />
      <Footer />
    </>
  );
}
