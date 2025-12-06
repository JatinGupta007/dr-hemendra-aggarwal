import SpecificExpertise from "@/component/SpecificExpertise";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";
import Image from "next/image";

const sportsInjuryData = {
  icon: "/Images/treatment_icon_4.png",

  title: "Sports Injury & Ligament Reconstruction",
  subtitle: "",
  about:
    "From athletes to everyday active individuals, ligament tears and soft tissue injuries can drastically affect performance and mobility. Dr. Agarwal is a trusted sports injury doctor in Jaipur, helping patients get back to full strength with personalized rehab protocols and advanced surgeries.",

  recommended: [
    "Knee twisting injury during sports",
    "Recurrent shoulder dislocation or instability",
    "Locking, catching, or giving way of the knee",
    "Persistent pain or swelling after an ankle or knee injury",
    "Sports injury not improving with rest, ice, and medication",
  ],

  modernTechniques: [
    "Arthroscopic ACL and PCL reconstruction",
    "Anatomic single- and double-bundle ligament techniques",
    "Meniscus-preserving repair and root repair techniques",
    "All-inside and inside-out meniscal repair constructs",
    "Biologic augmentation with PRP and regenerative therapies",
    "Arthroscopic shoulder stabilization for athletes",
    "Structured return-to-sport testing and clearance protocols",
  ],

  keyBenefits: [
    {
      title: "Restored Joint Stability",
      desc: "Reconstruction of torn ligaments helps prevent giving-way episodes and re-injury.",
    },
    {
      title: "Safe Return to Sports",
      desc: "Step-wise rehab allows athletes to return to training and competition with confidence.",
    },
    {
      title: "Joint Preservation",
      desc: "Meniscus-preserving and cartilage-friendly techniques reduce long-term arthritis risk.",
    },
    {
      title: "Faster Recovery",
      desc: "Minimally invasive arthroscopy reduces pain, swelling, and downtime.",
    },
    {
      title: "Performance-Oriented Rehab",
      desc: "Sport-specific rehabilitation focuses on strength, agility, and coordination.",
    },
  ],

  services: [
    {
      icon: (
        <Image
          src="/Images/treatment_icon_13.png"
          alt="ACL PCL reconstruction icon"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "ACL Or PCL Reconstruction",
      subtitle: "Restore knee stability and function.",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_15.png"
          alt="meniscus repair icon"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Meniscus Repair & Debridement",
      subtitle: "Preserve and heal meniscal tissue.",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_6.png"
          alt="shoulder dislocation icon"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Shoulder Dislocation Surgery",
      subtitle: "Recurrent shoulder instability correction.",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_14.png"
          alt="labral tear icon"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Labral Tear Repairs",
      subtitle: "Advanced shoulder and hip labral treatment.",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_10.png"
          alt="sports rehab icon"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Sports Rehab & Return-to-Play Guidance",
      subtitle: "Personalized rehab for athletes.",
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Sports Injury Assessment",
      desc: "Detailed history, movement analysis, and clinical tests to understand the injury.",
    },
    {
      step: 2,
      title: "Imaging & Diagnosis",
      desc: "MRI, X-ray, or ultrasound to confirm ligament, cartilage, or meniscus damage.",
    },
    {
      step: 3,
      title: "Prehabilitation",
      desc: "Strengthening and mobility work before surgery to improve outcomes.",
    },
    {
      step: 4,
      title: "Arthroscopic Surgery",
      desc: "Minimally invasive ligament reconstruction or repair tailored to your sport.",
    },
    {
      step: 5,
      title: "Rehabilitation & Strength Training",
      desc: "Phase-wise rehab to rebuild strength, balance, and confidence.",
    },
    {
      step: 6,
      title: "Return-to-Sport Clearance",
      desc: "Functional testing and guidance before safely returning to full sports activity.",
    },
  ],

  benefits: [
    "Advanced arthroscopic surgeries",
    "Personalized rehabilitation plans",
    "Fast recovery for active lifestyle",
    "Minimally invasive techniques",
  ],

  highlights: {
    title: "Get Treated by Jaipur’s Top Ligament Surgeon",
    description:
      "Trusted by athletes and active individuals across Rajasthan for accurate diagnosis, advanced procedures, and return-to-sport support.",
    button: "Book Consultation Now",
  },

  testimonials: [
    {
      name: "Karan Singh",
      age: 26,
      surgery: "ACL Reconstruction",
      quote:
        "I injured my knee while playing football and feared I’d never play again. After ACL reconstruction and rehab with Dr. Agarwal, I’m back on the field and feel confident in my knee.",
      rating: 5,
    },
    {
      name: "Neha Gupta",
      age: 31,
      surgery: "Shoulder Labral Repair",
      quote:
        "My shoulder used to slip out during workouts. The surgery and structured rehab program helped me regain full strength and stability. I’m back to training without fear.",
      rating: 5,
    },
    {
      name: "Arjun Mehta",
      age: 19,
      surgery: "Meniscus Repair",
      quote:
        "As a college-level basketball player, my knee injury was terrifying. Meniscus repair with proper rehab saved my knee and my game.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Do all sports injuries need surgery?",
      answer:
        "No. Many sprains, strains, and minor tears can be treated with rest, physiotherapy, and medication. Surgery is recommended mainly for significant ligament tears, instability, or high-demand athletes.",
    },
    {
      question: "How long after ACL surgery can I return to sports?",
      answer:
        "Most athletes return to sports between 6–9 months after ACL reconstruction, depending on healing, strength, and functional tests.",
    },
    {
      question: "Is arthroscopic surgery safe for athletes?",
      answer:
        "Yes. Arthroscopic surgery is the standard for most sports injuries, offering smaller cuts, less pain, faster healing, and excellent visualization.",
    },
    {
      question: "Can I damage the ligament again after surgery?",
      answer:
        "Re-injury is possible if return to sports is rushed or rehab is incomplete. A structured rehab and proper clearance reduce this risk significantly.",
    },
    {
      question: "Is physiotherapy necessary after ligament surgery?",
      answer:
        "Absolutely. Physiotherapy is critical for regaining strength, motion, balance, and sport-specific performance.",
    },
  ],
};


export default function SportsInjuryPage() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={sportsInjuryData} />
      <Footer />
    </>
  );
}
