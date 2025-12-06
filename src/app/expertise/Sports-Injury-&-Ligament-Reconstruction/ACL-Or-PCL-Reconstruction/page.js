import SpecificExpertise from "@/component/SpecificExpertise";
import Image from "next/image";
import { Activity, Link, Video} from "lucide-react";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";

const aclPclData = {
  icon: "/Images/treatment_icon_13.png",

  title: "ACL Or PCL Reconstruction",
  subtitle: "Restore Knee Stability with Advanced Ligament Repair",

  about:
    "ACL and PCL injuries commonly occur during sports, sudden twists, accidents, or falls. These ligaments control forward and backward movement of the knee. When torn, the knee becomes unstable, weak, and prone to further injury. ACL/PCL reconstruction uses grafts and arthroscopic techniques to fully restore knee stability and strength.",

  recommended: [
    "Sudden knee instability or 'giving way' during movement",
    "Difficulty running, jumping, or turning",
    "Swelling and pain after a twisting injury",
    "Torn ACL or PCL confirmed on MRI",
    "Inability to return to sports due to knee weakness",
    "Chronic instability affecting daily activities",
  ],

  modernTechniques: [
    "Arthroscopic ligament reconstruction through keyhole incisions",
    "Single-bundle and double-bundle reconstruction options",
    "Autografts (Hamstring or Patellar tendon) for active individuals",
    "Allograft (donor tissue) for complex tears",
    "Anatomic tunnel placement for natural knee biomechanics",
    "High-strength fixation devices for durable results",
  ],

  keyBenefits: [
    {
      title: "Restored Knee Stability",
      desc: "Reconstruction strengthens the knee and prevents further giving-way episodes.",
    },
    {
      title: "Return to Sports",
      desc: "Patients can safely return to athletics after structured rehab.",
    },
    {
      title: "Minimally Invasive Surgery",
      desc: "Arthroscopic techniques ensure less pain, faster recovery, and minimal scarring.",
    },
    {
      title: "Long-Term Joint Protection",
      desc: "Early surgery reduces the risk of cartilage damage and knee arthritis.",
    },
    {
      title: "Better Strength & Confidence",
      desc: "Improved muscle control and stability for daily activities and sports.",
    },
  ],

  services: [
    {
      title: "Arthroscopic Reconstruction",
      subtitle:
        "Minimally invasive surgery using a tiny camera and advanced tools to reconstruct the torn ligament.",
      icon: <Video className="w-6 h-6" />,
    },
    {
      title: "Tissue Graft Replacement",
      subtitle:
        "Replacement of the damaged ligament using grafts from your hamstring, patellar tendon, or donor tissue.",
      icon: <Link className="w-6 h-6" />,
    },
    {
      title: "Post-Surgery Rehab",
      subtitle:
        "Comprehensive physiotherapy to restore mobility, strength, and coordination for long-term knee health.",
      icon: <Activity className="w-6 h-6" />,
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Clinical Evaluation",
      desc: "Assessment of knee stability, range of motion, and ligament strength.",
    },
    {
      step: 2,
      title: "MRI & Diagnosis",
      desc: "Confirming ACL, PCL, or combined ligament injuries for accurate planning.",
    },
    {
      step: 3,
      title: "Prehabilitation",
      desc: "Strengthening exercises to prepare muscles before surgery.",
    },
    {
      step: 4,
      title: "Arthroscopic Reconstruction",
      desc: "Keyhole surgery to rebuild the torn ligament using grafts.",
    },
    {
      step: 5,
      title: "Rehabilitation Program",
      desc: "Phase-wise physiotherapy to restore motion, balance, and strength.",
    },
    {
      step: 6,
      title: "Return to Sport",
      desc: "Functional testing and clearance before returning to athletics.",
    },
  ],

  benefits: [
    "Restores knee strength and stability",
    "Safe return to sports and daily movements",
    "Minimally invasive with faster healing",
    "Prevents long-term joint damage and arthritis",
  ],

  highlights: {
    title: "Stabilize, Strengthen, Succeed",
    description:
      "Get back on your feet with confidence. Our ACL/PCL reconstruction uses advanced arthroscopic methods for strong, stable knees and a fast return to activity.",
    button: "Learn About Ligament Surgery",
  },

  testimonials: [
    {
      name: "Rohan Verma",
      age: 21,
      surgery: "ACL Reconstruction",
      quote:
        "I injured my knee while playing football. After ACL surgery and rehab, I’m back to sports stronger than ever.",
      rating: 5,
    },
    {
      name: "Kunal Shah",
      age: 34,
      surgery: "PCL Reconstruction",
      quote:
        "My knee felt unstable for months after an accident. The reconstruction surgery fixed the problem completely.",
      rating: 5,
    },
    {
      name: "Anita Joshi",
      age: 29,
      surgery: "Combined ACL/PCL Repair",
      quote:
        "I had severe ligament damage, but the treatment and rehab program restored full movement. Very satisfied!",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Is ACL/PCL reconstruction painful?",
      answer:
        "The procedure is done under anesthesia. Mild discomfort after surgery is manageable with medication and improves quickly.",
    },
    {
      question: "How long is recovery?",
      answer:
        "Most patients resume normal activities in 3–4 months and return to sports in 6–9 months, depending on rehab.",
    },
    {
      question: "Which graft is best?",
      answer:
        "Hamstring and patellar tendon grafts are commonly used. The surgeon recommends one based on your age, activity, and injury type.",
    },
    {
      question: "Can both ACL and PCL be repaired together?",
      answer:
        "Yes. Combined reconstruction is common in high-impact injuries and provides excellent long-term stability.",
    },
    {
      question: "Will my knee feel normal again?",
      answer:
        "With proper surgery and rehabilitation, most patients regain full strength, stability, and confidence.",
    },
  ],

  keywords: [
    "ACL surgery Jaipur",
    "PCL ligament reconstruction",
    "knee ligament repair Jaipur",
    "arthroscopic ACL PCL repair",
    "sports injury knee treatment",
  ],
};



export default function HipReplacement() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={aclPclData} />
      <Footer />
    </>
  );
}
