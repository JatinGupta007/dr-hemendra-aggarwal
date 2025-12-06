import SpecificExpertise from "@/component/SpecificExpertise";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";
import Image from "next/image";

const upperLimbData = {
  icon: "/Images/treatment_icon_6.png",
  title: "Shoulder, Elbow & Upper Limb Surgeries",
  subtitle: "",
  about:
    "Persistent pain, stiffness, or instability in your shoulder or elbow may require specialist care. Dr. Agarwal provides advanced upper limb orthopedic solutions to restore strength, motion, and stability so you can return to daily life and sports with confidence.",

  // ✅ Added to match jointReplacementData structure
  recommended: [
    "Shoulder or elbow pain lasting more than a few weeks",
    "Recurrent shoulder dislocations or instability",
    "Difficulty lifting the arm overhead or rotating the shoulder",
    "Weakness, stiffness, or locking in the shoulder or elbow",
    "Pain during sports, gym, or overhead work that is not improving",
  ],

  modernTechniques: [
    "Arthroscopic (keyhole) shoulder and elbow surgery",
    "Rotator cuff and labrum repair using suture anchors",
    "Minimally invasive ligament reconstruction techniques",
    "Biologic augmentation (PRP and regenerative support)",
    "Advanced imaging-guided diagnosis and planning",
    "Customized rehabilitation protocols for athletes and active individuals",
  ],

  keyBenefits: [
    {
      title: "Improved Joint Stability",
      desc: "Reduces repeated dislocations and instability in the shoulder and elbow.",
    },
    {
      title: "Pain Relief",
      desc: "Helps relieve chronic pain caused by tendon tears, wear and tear, or sports injuries.",
    },
    {
      title: "Better Range of Motion",
      desc: "Restores overhead and rotational movements needed for daily activities and sports.",
    },
    {
      title: "Minimally Invasive Options",
      desc: "Arthroscopic techniques mean smaller cuts, less pain, and faster recovery.",
    },
    {
      title: "Sports & Lifestyle Recovery",
      desc: "Enables safe return to work, gym, and sporting activities with proper strength and control.",
    },
  ],

  services: [
    {
      icon: (
        <Image
          src="/Images/treatment_icon_22.png"
          alt="Recurrent shoulder dislocation icon"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Recurrent Shoulder Dislocations",
      subtitle:
        "Advanced procedures to restore joint stability and prevent future dislocations.",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_20.png"
          alt="Rotator cuff tear icon"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Rotator Cuff Tears",
      subtitle:
        "Arthroscopic and open repair techniques to restore shoulder strength and function.",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_21.png"
          alt="Tennis and golfer's elbow icon"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Tennis Elbow & Golfers Elbow",
      subtitle: "Pain relief procedures and tendon healing-focused treatments.",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_23.png"
          alt="Elbow ligament repair icon"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Elbow Ligament Repair & Realignment",
      subtitle: "Restoring elbow function, strength, and joint stability.",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_19.png"
          alt="Frozen shoulder icon"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Frozen Shoulder",
      subtitle:
        "Release procedures and guided therapy to free up shoulder movement.",
    },
  ],

  treatmentJourney: [
    {
      step: 1,
      title: "Clinical Evaluation",
      desc: "Detailed assessment of pain, movement, strength, and joint stability.",
    },
    {
      step: 2,
      title: "Imaging & Diagnosis",
      desc: "X-ray, MRI, or ultrasound to identify tendon tears, instability, or joint damage.",
    },
    {
      step: 3,
      title: "Personalized Treatment Plan",
      desc: "Non-surgical options first where possible, followed by surgery if needed.",
    },
    {
      step: 4,
      title: "Surgical Procedure",
      desc: "Arthroscopic or open surgery based on the condition and severity.",
    },
    {
      step: 5,
      title: "Rehabilitation & Strengthening",
      desc: "Targeted physiotherapy to regain motion, strength, and joint control.",
    },
    {
      step: 6,
      title: "Return to Activity",
      desc: "Gradual return to work, household tasks, gym, and sports with medical guidance.",
    },
  ],

  benefits: [
    "Minimally invasive upper limb surgeries",
    "Fast recovery and structured rehabilitation plans",
    "Trusted for complex shoulder and elbow disorders",
    "Expertise in both sports injuries and age-related conditions",
  ],

  highlights: {
    title: "Explore Shoulder & Elbow Treatments",
    description:
      "Regain full use of your upper limbs with the help of Jaipur’s trusted orthopedic expert. Get back to lifting, throwing, and living pain-free.",
    button: "Book Shoulder Specialist Now",
  },

  testimonials: [
    {
      name: "Rohit Saini",
      age: 32,
      surgery: "Recurrent Shoulder Dislocation Repair",
      quote:
        "My shoulder used to dislocate repeatedly during sports. After surgery with Dr. Agarwal, I regained complete stability. I’m confidently playing cricket again without fear.",
      rating: 5,
    },
    {
      name: "Anita Choudhary",
      age: 54,
      surgery: "Rotator Cuff Tear Repair",
      quote:
        "I struggled with severe shoulder pain for months. The arthroscopic repair and guided rehab helped me recover smoothly. I can now lift my arm and perform daily activities comfortably.",
      rating: 5,
    },
    {
      name: "Vikram Meena",
      age: 41,
      surgery: "Elbow Ligament Reconstruction",
      quote:
        "My elbow injury made even basic tasks painful. Dr. Agarwal’s treatment and physiotherapy plan restored my strength and full range of motion. Very satisfied with the care.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "When should I see a doctor for shoulder or elbow pain?",
      answer:
        "You should consult a specialist if pain lasts more than a few weeks, keeps coming back, or affects sleep, movement, or daily activities.",
    },
    {
      question: "Is surgery always needed for shoulder or elbow problems?",
      answer:
        "No. Many conditions improve with medications, injections, and physiotherapy. Surgery is suggested only when conservative treatment fails or in severe injuries.",
    },
    {
      question: "How long is the recovery after upper limb surgery?",
      answer:
        "Most patients can resume light activities in 2–4 weeks. Full recovery, including strength and sports-level use, may take 3–6 months depending on the procedure.",
    },
    {
      question: "Will I be able to lift my arm normally after surgery?",
      answer:
        "With proper surgery and rehabilitation, most patients regain good range of motion and strength, allowing them to perform daily and work-related tasks comfortably.",
    },
    {
      question: "Is arthroscopic surgery better than open surgery?",
      answer:
        "Arthroscopic surgery uses small cuts, causes less tissue damage, and often allows faster recovery. The best approach depends on your specific condition.",
    },
  ],

  // Optional: add for SEO consistency with other sections
  keywords: [
    "shoulder specialist in Jaipur",
    "elbow surgeon in Jaipur",
    "rotator cuff surgery Jaipur",
    "shoulder dislocation treatment Jaipur",
  ],
};

export default function ShoulderElbowPage() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={upperLimbData} />
      <Footer />
    </>
  );
}
