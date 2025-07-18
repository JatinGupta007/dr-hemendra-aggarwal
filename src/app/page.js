import { Appointment } from "@/component/Appointment";
import ClinicLocations from "@/component/ClinicLocationSection";
import DoctorSection from "@/component/DoctorSection";
import FaqAccordion from "@/component/FaqAccordion";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import HeroSection from "@/component/HeroSection";
import SpotlightSection from "@/component/SpotlightSection";
import Testimonial from "@/component/TestimonialSection";
import TreatmentSection from "@/component/TreatmentSection";
import TrustUsSection from "@/component/TrustUs";

const faqs = [
  {
    question: "What is the cost of knee replacement surgery in Jaipur?",
    answer:
      "The cost of knee replacement surgery varies depending on the type of implant, procedure, and hospital. At a reputable orthopaedic clinic, an experienced orthopaedic doctor will assess your condition and recommend the most suitable and cost-effective treatment plan for long-term relief.",
  },
  {
    question: "Do I need surgery for ligament tear or can it heal naturally?",
    answer:
      "Some ligament tears may heal with rest and physiotherapy, while others—especially complete tears-may require surgery. Consulting a skilled orthopedic in Jaipur helps determine the right approach based on your condition, activity level, and recovery goals.",
  },
  {
    question: "Is arthroscopy better than open surgery?",
    answer:
      "Yes, arthroscopy is often a better option due to its minimally invasive nature, quicker recovery, and reduced risk of complications. A trained surgeon at a leading orthopaedic clinic can recommend arthroscopy for various joint issues, including ligament tears and cartilage damage.",
  },
  {
    question: "What recovery can I expect after joint replacement?",
    answer:
      "After joint replacement, patients typically begin recovery within a few days, with improvements in mobility and pain relief over the following weeks. An expert orthopaedic doctor provides a tailored rehabilitation plan to ensure safe, effective healing and faster return to normal activities.",
  },
  {
    question: "Which orthopedic doctor is best in Jaipur for sports injuries?",
    answer:
      "The best orthopedic in Jaipur for sports injuries is one with expertise in arthroscopy, sports medicine, and minimally invasive surgery. A knowledgeable orthopaedic doctor ensures accurate diagnosis and a customized treatment plan to restore strength and function efficiently.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <HeroSection />
      <TrustUsSection />
      <TreatmentSection />
      <SpotlightSection />
      <ClinicLocations />
      <DoctorSection />
      <Testimonial />
      <FaqAccordion faqs={faqs} />
      <Appointment />
      <Footer />
    </main>
  );
}
