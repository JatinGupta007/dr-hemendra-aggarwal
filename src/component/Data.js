import Image from "next/image";

export const SurgeryData = [
  /* ---------------- Arthroscopy - Keyhole Surgery ---------------- */
  {
    icon: "/Images/treatment_icon_2.png",
    title: "Arthroscopy - Keyhole Surgery",
    about:
      "Arthroscopy, also known as keyhole surgery, is a minimally invasive procedure used to diagnose and treat joint problems. Through tiny incisions, a high-definition camera and micro-instruments allow precise treatment with minimal pain and faster recovery.",

    recommended: [
      "Persistent joint pain or swelling",
      "Sports injuries such as ligament or cartilage tears",
      "Meniscus tears in the knee",
      "Shoulder instability or rotator cuff injuries",
      "Loose bodies inside the joint",
      "Early-stage arthritis",
      "Unclear MRI or diagnostic reports requiring direct visualization",
    ],

    modernTechniques: [
      "High-definition arthroscopic imaging",
      "Micro-instrument minimally invasive repair",
      "Suture anchor fixation technology",
      "Meniscus preservation techniques",
      "Biologic augmentation (PRP, stem-cell assisted healing)",
      "Thermal shrinkage for ligament tightening",
      "Arthroscopic 360° shoulder stabilization",
    ],

    keyBenefits: [
      {
        title: "Minimally Invasive",
        desc: "Tiny incisions reduce pain, scarring, and recovery time.",
      },
      {
        title: "Early Return to Activity",
        desc: "Patients often resume routine activities much faster than open surgery.",
      },
      {
        title: "High Precision Treatment",
        desc: "Real-time joint visualization ensures accurate diagnosis and targeted repair.",
      },
      {
        title: "Lower Infection Risk",
        desc: "Smaller incisions significantly reduce postoperative infection risk.",
      },
      {
        title: "Less Tissue Damage",
        desc: "Surrounding muscles and ligaments remain largely undisturbed.",
      },
    ],

    // titles updated to match expertiseMenu subItems exactly
    services: [
      {
        title: "Knee Arthroscopy - Meniscus Repair",
        subtitle: "Meniscus repair, ACL & PCL reconstruction",
        icon: (
          <Image
            src="/Images/treatment_icon_12.png"
            alt="knee arthroscopy icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
      },
      {
        title: "Knee Arthroscopy - Meniscus Debridement",
        subtitle: "Meniscus repair, ACL & PCL reconstruction",
        icon: (
          <Image
            src="/Images/treatment_icon_11.png"
            alt="knee arthroscopy icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
      },
      {
        title: "Knee Arthroscopy - ACL Reconstruction",
        subtitle: "Meniscus repair, ACL & PCL reconstruction",
        icon: (
          <Image
            src="/Images/treatment_icon_13.png"
            alt="knee arthroscopy icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
      },
      {
        title: "Knee Arthroscopy - PCL Reconstruction",
        subtitle: "Meniscus repair, ACL & PCL reconstruction",
        icon: (
          <Image
            src="/Images/treatment_icon_14.png"
            alt="knee arthroscopy icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
      },
      {
        title: "Shoulder Arthroscopy - Rotator Cuff Repair",
        subtitle: "Repair for rotator cuff tear & shoulder instability",
        icon: (
          <Image
            src="/Images/treatment_icon_20.png"
            alt="shoulder arthroscopy icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
      },
      {
        title: "Shoulder Arthroscopy - Labrum Repair",
        subtitle: "Repair for rotator cuff tear & shoulder instability",
        icon: (
          <Image
            src="/Images/treatment_icon_18.png"
            alt="shoulder arthroscopy icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
      },
      {
        title: "Ankle Arthroscopy",
        subtitle: "Ligament repair, scar tissue removal & joint stabilization",
        icon: (
          <Image
            src="/Images/treatment_icon_5.png"
            alt="ankle wrist elbow arthroscopy icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
      },
      {
        title: "Wrist Arthroscopy",
        subtitle: "Ligament repair, scar tissue removal & joint stabilization",
        icon: (
          <Image
            src="/Images/treatment_icon_24.png"
            alt="ankle wrist elbow arthroscopy icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
      },
      {
        title: "Elbow Arthroscopy",
        subtitle: "Ligament repair, scar tissue removal & joint stabilization",
        icon: (
          <Image
            src="/Images/treatment_icon_21.png"
            alt="ankle wrist elbow arthroscopy icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
      },
      {
        title: "Diagnostic Arthroscopy",
        subtitle: "Advanced corrective procedures using micro-instruments",
        icon: (
          <Image
            src="/Images/treatment_icon_8.png"
            alt="diagnostic arthroscopy icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
      },
      {
        title: "Corrective Arthroscopy",
        subtitle: "Advanced corrective procedures using micro-instruments",
        icon: (
          <Image
            src="/Images/treatment_icon_7.png"
            alt="diagnostic arthroscopy icon"
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
        title: "Consultation & Clinical Evaluation",
        desc: "Detailed assessment of symptoms, joint mobility, and overall function.",
      },
      {
        step: 2,
        title: "Imaging & Pre-operative Planning",
        desc: "MRI / X-ray to understand internal joint damage accurately.",
      },
      {
        step: 3,
        title: "Arthroscopic Procedure",
        desc: "Camera-guided repair using 2-3 small incisions with micro-instruments.",
      },
      {
        step: 4,
        title: "Recovery & Early Mobilization",
        desc: "Patients walk the same day or the next day with minimal discomfort.",
      },
      {
        step: 5,
        title: "Rehabilitation & Strengthening",
        desc: "Personalized physiotherapy to restore full joint function.",
      },
      {
        step: 6,
        title: "Follow-Up & Long-Term Joint Care",
        desc: "Scheduled assessments to ensure smooth and lasting recovery.",
      },
    ],

    benefits: [
      "Tiny incisions & minimal scarring",
      "Quick return to normal routine",
      "Reduced postoperative pain",
      "Lower complication risks",
      "Day-care procedure in most cases",
      "Highly effective for sports injuries",
    ],

    highlights: {
      title: "Looking for expert arthroscopy in Jaipur?",
      description:
        "Experience advanced keyhole surgery with minimal pain and quick recovery.",
      button: "Book Arthroscopy Consultation",
    },

    testimonials: [
      {
        name: "Amit Verma",
        age: 28,
        surgery: "ACL Reconstruction (Arthroscopy)",
        quote:
          "My knee feels brand new! I was walking comfortably within a few days and returned to sports in just a few months.",
        rating: 5,
      },
      {
        name: "Nidhi Sharma",
        age: 41,
        surgery: "Shoulder Arthroscopy",
        quote:
          "I suffered from shoulder pain for years. Arthroscopy fixed it with minimal pain and a fast recovery!",
        rating: 5,
      },
      {
        name: "Rohit Meena",
        age: 33,
        surgery: "Ankle Arthroscopy",
        quote:
          "The swelling and pain in my ankle disappeared after the procedure. Very smooth and professional experience.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Is arthroscopy painful?",
        answer:
          "Most patients experience minimal pain because the incisions are small and the technique is gentle.",
      },
      {
        question: "How soon can I walk after knee arthroscopy?",
        answer:
          "Many patients walk the same day or the next day depending on the procedure.",
      },
      {
        question: "Is arthroscopy better than open surgery?",
        answer:
          "Yes, arthroscopy offers faster healing, smaller scars, reduced pain, and a lower risk of complications.",
      },
      {
        question: "How long is the recovery period?",
        answer:
          "Office work: 3–7 days, Light sports: 4–6 weeks, Full recovery: 8–12 weeks.",
      },
      {
        question: "Who is a good candidate for arthroscopy?",
        answer:
          "Patients with meniscus tears, ligament injuries, loose bodies, shoulder instability, or unresolved joint pain.",
      },
    ],
  },

  /* ---------------- Foot, Ankle, Hand & Wrist ---------------- */
  {
    icon: "/Images/treatment_icon_5.png",
    title: "Foot Ankle Hand and Wrist Procedures",
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

    // services titles updated to exactly match expertiseMenu subItems
    services: [
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
        title: "Carpal Tunnel Release",
        subtitle: "Relieve hand numbness with effective surgery",
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
        title: "Plantar Fasciitis",
        subtitle: "Heel pain treatment with custom plans",
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
        title: "Flat Foot Correction",
        subtitle: "Realignment and correction procedures",
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
        title: "Bunion Correction",
        subtitle: "Realignment and correction procedures",
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
        title: "Toe Deformity Correction",
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
        title: "Ankle Sprain",
        subtitle: "Sports and trauma care for ankles",
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
        title: "Ankle Instability",
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
      {
        name: "Pooja Mehta",
        age: 36,
        surgery: "Bunion Correction",
        quote: "Walking comfortable after recovery plan.",
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
      {
        question: "When should I see a specialist?",
        answer:
          "If symptoms persist despite conservative care for 4–6 weeks or if weakness/numbness is progressive.",
      },
    ],
  },

  /* ---------------- Fracture and Trauma Surgery ---------------- */
  {
    icon: "/Images/treatment_icon_7.png",
    title: "Fracture and Trauma Surgery",
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
        title: "Open Reduction",
        subtitle: "Repositioning fractured bones for natural alignment",
      },
      {
        icon: (
          <Image
            src="/Images/treatment_icon_12.png"
            alt="open closed reduction icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
        title: "Closed Reduction",
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
        title: "Internal Fixation with Plates",
        subtitle: "Stabilizing fractures using implants for proper healing",
      },
      {
        icon: (
          <Image
            src="/Images/treatment_icon_17.png"
            alt="internal fixation icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
        title: "Internal Fixation with Nails",
        subtitle: "Stabilizing fractures using implants for proper healing",
      },
      {
        icon: (
          <Image
            src="/Images/treatment_icon_15.png"
            alt="internal fixation icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
        title: "Internal Fixation with Screws",
        subtitle: "Stabilizing fractures using implants for proper healing",
      },
      {
        icon: (
          <Image
            src="/Images/treatment_icon_23.png"
            alt="geriatric pediatric icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
        title: "Pediatric Fracture Management",
        subtitle: "Child- and elderly-specific fracture care",
      },
      {
        icon: (
          <Image
            src="/Images/treatment_icon_22.png"
            alt="geriatric pediatric icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
        title: "Geriatric Fracture Management",
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
        title: "Complex Polytrauma",
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
        title: "Non-Healing Fracture",
        subtitle: "Advanced solutions for delayed or failed bone healing",
      },
      {
        icon: (
          <Image
            src="/Images/treatment_icon_20.png"
            alt="non healing fracture icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
        title: "Fracture Revision",
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
      {
        name: "Rakesh Singh",
        age: 52,
        injury: "Hip Fracture",
        quote: "Timely surgery reduced complications and improved outcome.",
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
      {
        question: "Is hardware removal necessary?",
        answer: "Only if symptomatic or at surgeon's recommendation.",
      },
    ],
  },

  /* ---------------- Joint Replacement Surgery ---------------- */
  {
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

    // service titles updated to exactly match expertiseMenu subItems
    services: [
      {
        title: "Total Knee Replacement",
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
        title: "Partial Knee Replacement",
        subtitle: "For chronic knee arthritis and damage.",
        icon: (
          <Image
            src="/Images/treatment_icon_2.png"
            alt="treatment_icon_8"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
      },
      {
        title: "Hip Replacement",
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
        title: "Elbow Replacement",
        subtitle: "Advanced joint solutions for arms.",
        icon: (
          <Image
            src="/Images/treatment_icon_21.png"
            alt="treatment_icon_8"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
      },
      {
        title: "Shoulder Replacement",
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
        title: "Painless and Quick Recovery Joint Replacement",
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
      description:
        "Book your consultation today and step into a pain-free life.",
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
  },

  /* ---------------- Shoulder, Elbow & Upper Limb ---------------- */
  {
    icon: "/Images/treatment_icon_6.png",
    title: "Shoulder Elbow and Upper Limb Surgeries",
    subtitle: "",
    about:
      "Persistent pain, stiffness, or instability in your shoulder or elbow may require specialist care. Dr. Agrawal provides advanced upper limb orthopedic solutions to restore strength, motion, and stability so you can return to daily life and sports with confidence.",

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
        desc: "Enables safe return to work, household tasks, gym, and sporting activities with proper strength and control.",
      },
    ],

    // services titles replaced to match expertiseMenu subitems exactly
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
        title: "Recurrent Shoulder Dislocation",
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
        title: "Rotator Cuff Tear Repair",
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
        title: "Tennis Elbow",
        subtitle:
          "Pain relief procedures and tendon healing-focused treatments.",
      },
      {
        icon: (
          <Image
            src="/Images/treatment_icon_19.png"
            alt="Tennis and golfer's elbow icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
        title: "Golfers Elbow",
        subtitle:
          "Pain relief procedures and tendon healing-focused treatments.",
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
        title: "Elbow Ligament Repair",
        subtitle: "Restoring elbow function, strength, and joint stability.",
      },
      {
        icon: (
          <Image
            src="/Images/treatment_icon_13.png"
            alt="Elbow realignment icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
        title: "Elbow Realignment",
        subtitle: "Restoring elbow function, strength, and joint stability.",
      },
      {
        icon: (
          <Image
            src="/Images/treatment_icon_6.png"
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
          "My shoulder used to dislocate repeatedly during sports. After surgery with Dr. Agrawal, I regained complete stability. I’m confidently playing cricket again without fear.",
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
          "My elbow injury made even basic tasks painful. Dr. Agrawal’s treatment and physiotherapy plan restored my strength and full range of motion. Very satisfied with the care.",
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

    keywords: [
      "shoulder specialist in Jaipur",
      "elbow surgeon in Jaipur",
      "rotator cuff surgery Jaipur",
      "shoulder dislocation treatment Jaipur",
    ],
  },

  /* ---------------- Sports Injury and Ligament Reconstruction ---------------- */
  {
    icon: "/Images/treatment_icon_4.png",
    title: "Sports Injury and Ligament Reconstruction",
    subtitle: "",
    about:
      "From athletes to everyday active individuals, ligament tears and soft tissue injuries can drastically affect performance and mobility. Dr. Agrawal is a trusted sports injury doctor in Jaipur, helping patients get back to full strength with personalized rehab protocols and advanced surgeries.",

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

    // services updated to exactly match expertiseMenu subitems
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
        title: "ACL Reconstruction",
        subtitle: "Restore knee stability and function.",
      },
      {
        icon: (
          <Image
            src="/Images/treatment_icon_14.png"
            alt="ACL PCL reconstruction icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
        title: "PCL Reconstruction",
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
        title: "Meniscus Repair",
        subtitle: "Preserve and heal meniscal tissue.",
      },
      {
        icon: (
          <Image
            src="/Images/treatment_icon_16.png"
            alt="meniscus repair icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
        title: "Meniscus Debridement",
        subtitle: "Preserve and heal meniscal tissue.",
      },
      {
        icon: (
          <Image
            src="/Images/treatment_icon_19.png"
            alt="shoulder dislocation icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
        title: "Shoulder Dislocation",
        subtitle: "Recurrent shoulder instability correction.",
      },
      {
        icon: (
          <Image
            src="/Images/treatment_icon_17.png"
            alt="labral tear icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
        title: "Labral Tear Repair",
        subtitle: "Advanced shoulder and hip labral treatment.",
      },
      {
        icon: (
          <Image
            src="/Images/treatment_icon_4.png"
            alt="sports rehab icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        ),
        title: "Sports Rehabilitation",
        subtitle: "Personalized rehab for athletes.",
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
        title: "Return-to-Play Guidance",
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
          "I injured my knee while playing football and feared I’d never play again. After ACL reconstruction and rehab with Dr. Agrawal, I’m back on the field and feel confident in my knee.",
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
  },
];

export const TreatmentsData = [
  // 1️⃣ Total Knee Replacement (TKR)
  {
    title: "Total Knee Replacement",
    icon: "/Images/treatment_icon_1.png",

    subtitle:
      "Advanced TKR surgery by Dr. Hemendra Agrawal – Restoring mobility, eliminating chronic knee pain, and improving quality of life with minimally invasive techniques.",

    howItHelps:
      "Total Knee Replacement removes the worn-out cartilage and replaces it with smooth, durable implants. This eliminates bone-on-bone friction, reduces chronic pain, improves knee motion, and restores your ability to walk comfortably.",

    whyDeteriorate:
      "The knee joint deteriorates due to age-related wear, severe osteoarthritis, rheumatoid arthritis, old injuries, obesity, or repeated stress on the joint. With time, cartilage wears away and causes painful friction, stiffness, swelling, and deformity.",

    benefits: [
      "Minimally invasive approach",
      "Quick recovery & reduced pain",
      "Long-lasting implants (15–20+ years)",
      "Highly accurate implant positioning",
      "Shorter hospital stay",
      "Improved walking ability",
      "Better knee alignment and stability",
    ],

    symptoms: [
      { title: "Persistent knee pain", description: "pain even during rest" },
      {
        title: "Difficulty walking",
        description: "pain while climbing stairs",
      },
      { title: "Severe stiffness", description: "especially after sitting" },
      { title: "Swelling", description: "frequent inflammation around knee" },
      {
        title: "Grinding or cracking sound",
        description: "bone-on-bone friction",
      },
      {
        title: "Knee deformity",
        description: "bow-leg or knock-knee appearance",
      },
      {
        title: "Reduced mobility",
        description: "difficulty squatting or bending",
      },
      {
        title: "Instability",
        description: "knee feels like it might collapse",
      },
    ],

    procedures: [
      {
        name: "Total Knee Replacement",
        bestFor: "Advanced osteoarthritis and cartilage loss",
        involves: "Complete resurfacing of thighbone, shinbone and kneecap",
        recovery: "6–8 weeks",
        description:
          "All damaged cartilage is replaced with metal and polyethylene implants for smooth movement.",
      },
      {
        name: "Robotic Knee Replacement",
        bestFor: "Patients requiring high precision alignment",
        involves: "Robot-assisted implant placement",
        recovery: "6–8 weeks",
        description:
          "Robotic mapping improves accuracy, reduces tissue damage, and improves long-term results.",
      },
      {
        name: "Minimally Invasive TKR",
        bestFor: "Patients seeking faster recovery",
        involves: "Smaller incision and muscle-sparing technique",
        recovery: "4–6 weeks",
        description:
          "Less tissue damage results in quicker healing, less pain, and faster mobility.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "1–2 Weeks Before Surgery",
        items: [
          "Blood tests & X-rays",
          "Prehabilitation physiotherapy",
          "Medication review",
          "Understanding implant options",
        ],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Anesthesia administration",
          "Removal of damaged cartilage",
          "Placement of implants",
          "Joint alignment check",
        ],
      },
      {
        phase: "Phase 3",
        title: "Days 1–3",
        items: [
          "Walking begins within 24 hours",
          "Pain control and monitoring",
          "Early physiotherapy for knee bending",
        ],
      },
      {
        phase: "Phase 4",
        title: "Weeks 1–6",
        items: [
          "Strengthening exercises",
          "Walking with minimal support",
          "Resume routine daily activities",
        ],
      },
      {
        phase: "Phase 5",
        title: "3–6 Months",
        items: [
          "Full mobility regained",
          "Normal lifestyle activities",
          "Long-term improvement in function",
        ],
      },
    ],

    highlights: {
      title: "Suffering from long-term knee pain?",
      description: "Advanced TKR can restore your movement and life.",
      button: "Know More",
    },

    testimonials: [
      {
        name: "Rajesh Kumar",
        age: 62,
        quote:
          "I was walking with support the very next day. The surgery changed my life completely!",
        rating: 5,
      },
      {
        name: "Kavita Sharma",
        age: 59,
        quote:
          "My knee pain is gone. I can now climb stairs and walk without fear. Wonderful experience!",
        rating: 5,
      },
      {
        name: "Dinesh Agarwal",
        age: 65,
        quote:
          "I delayed surgery for years. After TKR, I wish I had done it earlier. Excellent recovery!",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Is Total Knee Replacement painful?",
        answer:
          "Some discomfort is expected for a few days, but modern pain management makes recovery comfortable.",
      },
      {
        question: "How soon can I walk after surgery?",
        answer:
          "Most patients start walking within 24 hours with physiotherapist assistance.",
      },
      {
        question: "Is TKR safe for older patients?",
        answer:
          "Yes. Age is not a barrier as long as the patient is medically fit.",
      },
      {
        question: "Can I sit cross-legged after knee replacement?",
        answer:
          "Many patients can, depending on flexibility and implant type, but it should be discussed with your surgeon.",
      },
      {
        question: "How long does a knee implant last?",
        answer: "With proper care, modern implants last 15–20+ years.",
      },
    ],
  },

  // 2️⃣ Partial Knee Replacement (PKR)
  {
    title: "Partial Knee Replacement",
    icon: "/Images/treatment_icon_2.png",

    subtitle:
      "PKR is ideal when damage is limited to only one compartment of the knee, offering faster recovery and a more natural knee movement.",

    howItHelps:
      "Partial Knee Replacement replaces only the damaged portion of the knee while preserving healthy bone, ligaments, and cartilage. This provides smoother movement, quicker recovery, and a natural knee feel compared to total replacement.",

    whyDeteriorate:
      "The inner or outer side of the knee may wear out due to early arthritis, old injuries, ligament imbalance, obesity, or uneven pressure on one side. As cartilage breaks down, pain increases and mobility decreases.",

    benefits: [
      "Preserves healthy bone and ligaments",
      "More natural knee movement",
      "Smaller incision and less tissue damage",
      "Faster recovery than Total Knee Replacement",
      "Less pain and minimal blood loss",
      "Shorter hospital stay",
      "Suitable for younger, active patients",
    ],

    symptoms: [
      { title: "One-sided knee pain", description: "inner or outer knee only" },
      { title: "Pain during walking", description: "especially on slopes" },
      { title: "Localized stiffness", description: "not full knee stiffness" },
      { title: "Swelling", description: "recurring swelling after activity" },
      { title: "Uneven knee loading", description: "pain when standing long" },
      {
        title: "Grinding in one compartment",
        description: "cartilage thinning",
      },
      {
        title: "Pain improving with rest",
        description: "common in early arthritis",
      },
      {
        title: "Difficulty squatting fully",
        description: "partial knee restriction",
      },
    ],

    procedures: [
      {
        name: "Unicompartmental Knee Replacement",
        bestFor: "Medial or lateral compartment arthritis",
        involves: "Replacing only the worn-out side of the knee",
        recovery: "4–6 weeks",
        description:
          "The healthy part of the knee remains untouched, giving a natural walking pattern.",
      },
      {
        name: "Minimally Invasive PKR",
        bestFor: "Patients seeking faster recovery",
        involves: "Small incision and muscle-sparing technique",
        recovery: "3–5 weeks",
        description:
          "Less tissue damage allows rapid rehabilitation and faster return to routine.",
      },
      {
        name: "Robotic-Assisted PKR",
        bestFor: "Cases requiring highest accuracy",
        involves: "Robot-guided bone preparation and implant placement",
        recovery: "4–6 weeks",
        description:
          "Improves implant alignment and long-term knee performance.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Pre-Surgery (1–2 Weeks Before)",
        items: [
          "X-ray / MRI to confirm single-compartment damage",
          "Physiotherapy guidance",
          "Health evaluation and anesthesia clearance",
        ],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Small incision (5–7 cm)",
          "Removal of damaged cartilage",
          "Implant placement on the affected side only",
        ],
      },
      {
        phase: "Phase 3",
        title: "Week 1–2",
        items: [
          "Walking begins within 24 hours",
          "Swelling gradually decreases",
          "Knee bending exercises start",
        ],
      },
      {
        phase: "Phase 4",
        title: "Week 2–6",
        items: [
          "Return to office work",
          "Improved walking speed",
          "Strengthening and balance training",
        ],
      },
      {
        phase: "Phase 5",
        title: "2–3 Months",
        items: [
          "Full range of motion",
          "Active lifestyle restored",
          "Long-term comfort in daily activities",
        ],
      },
    ],

    highlights: {
      title: "Only one side of your knee is damaged?",
      description: "Partial Knee Replacement may be the perfect choice.",
      button: "Check Eligibility",
    },

    testimonials: [
      {
        name: "Suresh Gupta",
        age: 55,
        quote:
          "I walked comfortably within days. My knee feels completely natural again.",
        rating: 5,
      },
      {
        name: "Meena Trivedi",
        age: 52,
        quote:
          "I was scared of total knee replacement. PKR worked perfectly for my one-sided knee arthritis.",
        rating: 5,
      },
      {
        name: "Harish Sharma",
        age: 48,
        quote: "Very fast recovery! I returned to work in just a few weeks.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question:
          "Is Partial Knee Replacement better than Total Knee Replacement?",
        answer:
          "Yes, if arthritis is limited to only one compartment. It preserves most of the natural knee and offers faster recovery.",
      },
      {
        question: "How long does PKR last?",
        answer:
          "Modern PKR implants last 10–15 years or more if properly maintained.",
      },
      {
        question: "Can PKR be converted to TKR later?",
        answer:
          "Yes. If arthritis progresses, the remaining knee can later be replaced without difficulty.",
      },
      {
        question: "How soon can I walk after PKR?",
        answer: "Most patients walk the same or next day after surgery.",
      },
      {
        question: "Who is NOT a candidate for PKR?",
        answer:
          "Patients with rheumatoid arthritis, ligament damage, or arthritis in the whole knee are not suitable for PKR.",
      },
    ],
  },
  // 3️⃣ Hip Replacement
  {
    title: "Hip Replacement",
    icon: "/Images/treatment_icon_9.png",

    subtitle:
      "Modern hip replacement restores smooth movement, eliminates chronic pain, and improves walking ability with long-lasting implants.",

    howItHelps:
      "Hip Replacement removes the damaged ball-and-socket joint and replaces it with smooth, artificial components. This stops painful friction, restores mobility, and brings back comfortable walking and daily activities.",

    whyDeteriorate:
      "The hip joint deteriorates due to osteoarthritis, rheumatoid arthritis, aging, avascular necrosis (loss of blood supply), or previous injury. As cartilage wears away, bone rubs against bone causing severe pain and stiffness.",

    benefits: [
      "Smooth, pain-free hip movement",
      "Improved walking and mobility",
      "Long-lasting ceramic or metal implants",
      "Better hip stability and rotation",
      "Faster recovery with modern techniques",
      "Improved sitting and bending ability",
      "Reduced dependence on pain medications",
    ],

    symptoms: [
      {
        title: "Severe hip pain",
        description: "worsens with walking or standing",
      },
      { title: "Groin pain", description: "radiates to thigh and buttock" },
      {
        title: "Stiffness",
        description: "difficulty bending or rotating the hip",
      },
      { title: "Limping", description: "due to joint discomfort" },
      { title: "Pain while resting", description: "especially at night" },
      {
        title: "Difficulty sitting or getting up",
        description: "restricted motion",
      },
      { title: "Leg length difference", description: "in advanced arthritis" },
      {
        title: "Reduced activity",
        description: "daily tasks become difficult",
      },
    ],

    procedures: [
      {
        name: "Total Hip Replacement",
        bestFor: "Advanced arthritis or hip joint damage",
        involves: "Replacing both the ball and socket portions",
        recovery: "6–10 weeks",
        description:
          "Restores smooth and stable hip motion with durable implants.",
      },
      {
        name: "Minimally Invasive Hip Replacement",
        bestFor: "Patients seeking quicker recovery",
        involves: "Smaller incision and muscle-sparing technique",
        recovery: "4–8 weeks",
        description:
          "Less tissue damage leads to faster healing and reduced pain.",
      },
      {
        name: "Ceramic-on-Ceramic Hip Replacement",
        bestFor: "Young and active patients",
        involves: "Implants with ceramic surfaces for durability",
        recovery: "6–10 weeks",
        description:
          "Highly wear-resistant implants provide long-lasting performance.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Pre-Surgery (1–2 Weeks Before)",
        items: [
          "X-ray and MRI evaluation",
          "Prehabilitation physiotherapy",
          "Medical fitness and anesthesia clearance",
        ],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Anesthesia administration",
          "Damaged bone and cartilage removed",
          "New ball and socket implants inserted",
        ],
      },
      {
        phase: "Phase 3",
        title: "Week 1–3",
        items: [
          "Walking begins within 24–48 hours",
          "Pain gradually decreases",
          "Improved joint movement",
        ],
      },
      {
        phase: "Phase 4",
        title: "Month 1–3",
        items: [
          "Strengthening exercises",
          "Better hip stability",
          "Return to daily activities",
        ],
      },
      {
        phase: "Phase 5",
        title: "3–6 Months",
        items: [
          "Full hip mobility restored",
          "Comfortable walking and bending",
          "Long-term improvement in lifestyle",
        ],
      },
    ],

    highlights: {
      title: "Hip pain affecting your daily life?",
      description: "Modern hip replacement offers long-lasting relief.",
      button: "Know More",
    },

    testimonials: [
      {
        name: "Sunita Sharma",
        age: 58,
        quote:
          "I could walk comfortably again within weeks after my hip replacement. A life-changing experience!",
        rating: 5,
      },
      {
        name: "Ramesh Solanki",
        age: 64,
        quote:
          "My groin and hip pain vanished after surgery. I can now sit, walk, and sleep without discomfort.",
        rating: 5,
      },
      {
        name: "Meera Jain",
        age: 54,
        quote:
          "I feared surgery, but the recovery was surprisingly smooth. I’m back to my normal routine!",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Is hip replacement a safe procedure?",
        answer:
          "Yes. It is one of the most successful orthopedic surgeries with excellent long-term results.",
      },
      {
        question: "How long does the hip implant last?",
        answer:
          "Modern implants last 15–20 years or more, depending on activity level and care.",
      },
      {
        question: "Can I walk soon after surgery?",
        answer: "Most patients begin walking with support within 24–48 hours.",
      },
      {
        question: "When can I return to work?",
        answer:
          "Office work is usually possible within 3–4 weeks depending on recovery speed.",
      },
      {
        question: "Is hip replacement good for younger patients?",
        answer:
          "Yes. With durable ceramic or metal implants, younger active patients get excellent outcomes.",
      },
    ],
  },
  // 4️⃣ Shoulder Replacement
  {
    title: "Shoulder Replacement",
    icon: "/Images/treatment_icon_19.png",

    subtitle:
      "Effective for severe arthritis, rotator cuff tear arthropathy, shoulder stiffness, and chronic pain that does not improve with treatment.",

    howItHelps:
      "Shoulder Replacement removes the damaged ball-and-socket surfaces and replaces them with smooth artificial components. This restores arm movement, reduces pain, and improves daily activities like lifting, dressing, and sleeping comfortably.",

    whyDeteriorate:
      "The shoulder joint deteriorates due to osteoarthritis, massive rotator cuff tears, aging, rheumatoid arthritis, previous fractures, or chronic inflammation. When cartilage wears away, shoulder motion becomes painful and limited.",

    benefits: [
      "Significant pain relief",
      "Improved shoulder motion and flexibility",
      "Better sleep without shoulder discomfort",
      "Restored ability to lift and rotate the arm",
      "Advanced implants for long-lasting results",
      "Effective for rotator cuff tear arthropathy",
      "Faster recovery with minimally invasive techniques",
    ],

    symptoms: [
      {
        title: "Severe shoulder pain",
        description: "worse at night or at rest",
      },
      { title: "Stiffness", description: "difficulty lifting arm overhead" },
      {
        title: "Grinding sensation",
        description: "bone rubbing due to cartilage loss",
      },
      { title: "Weakness", description: "unable to lift or rotate the arm" },
      {
        title: "Pain during daily tasks",
        description: "like combing hair or dressing",
      },
      {
        title: "Loss of motion",
        description: "restricted forward or outward movement",
      },
      {
        title: "Swelling and inflammation",
        description: "around joint or upper arm",
      },
      {
        title: "Rotator cuff tear symptoms",
        description: "inability to raise arm",
      },
    ],

    procedures: [
      {
        name: "Total Shoulder Replacement",
        bestFor: "Severe arthritis and cartilage loss",
        involves: "Replacing ball-and-socket joint surfaces",
        recovery: "8–12 weeks",
        description:
          "Restores smooth and stable shoulder movement using metal and plastic implants.",
      },
      {
        name: "Reverse Shoulder Replacement",
        bestFor: "Massive rotator cuff tear or weak shoulder muscles",
        involves: "Reversing ball and socket position",
        recovery: "10–12 weeks",
        description:
          "Improves lifting ability when rotator cuff muscles are damaged.",
      },
      {
        name: "Partial Shoulder Replacement (Hemiarthroplasty)",
        bestFor: "Fractures or isolated humeral head damage",
        involves: "Replacing only the ball part of the shoulder",
        recovery: "6–10 weeks",
        description: "Preserves socket while restoring strength and movement.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Before Surgery (1–2 Weeks)",
        items: [
          "X-rays and MRI for joint evaluation",
          "Shoulder motion and strength assessment",
          "Physiotherapy guidance for preparation",
        ],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "General or regional anesthesia",
          "Replacement of damaged joint surfaces",
          "Placement of artificial implants",
        ],
      },
      {
        phase: "Phase 3",
        title: "Week 1–6",
        items: [
          "Pain control and swelling reduction",
          "Support with sling for initial weeks",
          "Gentle physiotherapy for mobility",
        ],
      },
      {
        phase: "Phase 4",
        title: "Month 1–3",
        items: [
          "Strengthening exercises",
          "Improvement in daily shoulder movement",
          "Return to light activities",
        ],
      },
      {
        phase: "Phase 5",
        title: "3–6 Months",
        items: [
          "Full motion recovery",
          "Return to routine and low-impact activities",
          "Long-term improvement in shoulder comfort",
        ],
      },
    ],

    highlights: {
      title: "Severe shoulder pain or stiffness?",
      description:
        "Shoulder replacement helps restore full movement and comfort.",
      button: "Explore More",
    },

    testimonials: [
      {
        name: "Mohan Patel",
        age: 67,
        quote:
          "After shoulder replacement, I regained full arm movement. I can now lift my hand without pain for the first time in years!",
        rating: 5,
      },
      {
        name: "Priya Singh",
        age: 53,
        quote:
          "My shoulder pain used to disturb my sleep every night. Surgery changed everything. Smooth recovery!",
        rating: 5,
      },
      {
        name: "Anil Verma",
        age: 60,
        quote:
          "I had a massive rotator cuff tear. Reverse shoulder replacement restored my arm strength. Excellent care!",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Is shoulder replacement safe?",
        answer:
          "Yes, it is a well-established and safe procedure with high success rates and long-lasting results.",
      },
      {
        question: "When can I lift my arm after surgery?",
        answer:
          "Gentle lifting begins in 4–6 weeks; full strength returns by 3–6 months depending on recovery.",
      },
      {
        question:
          "Is reverse shoulder replacement better for torn rotator cuff?",
        answer:
          "Yes. It is specifically designed for patients with large, irreparable rotator cuff tears.",
      },
      {
        question: "How long does the implant last?",
        answer:
          "Shoulder implants typically last 12–20 years with proper care.",
      },
      {
        question: "Will I need physiotherapy?",
        answer:
          "Yes, guided physiotherapy is essential for restoring motion, strength, and shoulder function.",
      },
    ],
  },

  // 5️⃣ Elbow Replacement
  {
    title: "Elbow Replacement",
    icon: "/Images/treatment_icon_21.png",

    subtitle:
      "Advanced treatment for severe arthritis, complex fractures, and elbow joint damage that restricts movement and daily activities.",

    howItHelps:
      "Elbow Replacement removes damaged joint surfaces and replaces them with a smooth hinge-like artificial implant. This restores bending and straightening movements, reduces pain, and improves strength for everyday tasks.",

    whyDeteriorate:
      "The elbow deteriorates due to rheumatoid arthritis, severe osteoarthritis, trauma, old fractures, or cartilage wear. When the joint surface breaks down, pain increases and movement becomes limited or unstable.",

    benefits: [
      "Smooth bending and straightening of the elbow",
      "Significant pain relief",
      "Better grip strength and stability",
      "Improved ability to lift light objects",
      "More natural arm movement",
      "Reduced stiffness and swelling",
      "Long-lasting comfort with modern implants",
    ],

    symptoms: [
      { title: "Severe elbow pain", description: "especially during movement" },
      {
        title: "Stiffness",
        description: "difficulty bending or straightening",
      },
      { title: "Swelling", description: "due to joint inflammation" },
      {
        title: "Weak grip strength",
        description: "difficulty holding objects",
      },
      {
        title: "Grinding sensation",
        description: "cartilage damage or bone contact",
      },
      {
        title: "Elbow deformity",
        description: "visible misalignment from arthritis or injury",
      },
      { title: "Instability", description: "elbow feels loose or weak" },
      {
        title: "Difficulty performing daily tasks",
        description: "like writing or lifting",
      },
    ],

    procedures: [
      {
        name: "Total Elbow Replacement",
        bestFor: "Severe arthritis or complex fractures",
        involves: "Replacing hinge joint with a metal and plastic prosthesis",
        recovery: "6–10 weeks",
        description:
          "Restores smooth and stable elbow movement with reduced pain.",
      },
      {
        name: "Partial Elbow Replacement",
        bestFor: "Fractures involving only part of the joint",
        involves: "Replacing damaged areas while keeping healthy structures",
        recovery: "4–8 weeks",
        description: "Ideal for isolated bone damage or radial head injuries.",
      },
      {
        name: "Revision Elbow Replacement",
        bestFor: "Failed previous implant or severe joint wear",
        involves: "Removing old implant and placing a new one",
        recovery: "8–12 weeks",
        description:
          "Used when previous surgeries fail or implants loosen with time.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Pre-Surgery (1–2 Weeks)",
        items: [
          "X-rays or CT scan to assess the joint",
          "Evaluation of nerve and muscle function",
          "Pre-surgery physiotherapy and medical clearance",
        ],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Anesthesia administration",
          "Removal of damaged bone and cartilage",
          "Placement of elbow prosthesis",
          "Stability and motion check",
        ],
      },
      {
        phase: "Phase 3",
        title: "Week 1–3",
        items: [
          "Pain reduction and initial healing",
          "Wearing a protective splint",
          "Gentle movement exercises begin",
        ],
      },
      {
        phase: "Phase 4",
        title: "Month 1–2",
        items: [
          "Strengthening exercises for grip and forearm",
          "Improved elbow flexibility",
          "Return to light daily activities",
        ],
      },
      {
        phase: "Phase 5",
        title: "2–4 Months",
        items: [
          "Stable, functional elbow movement",
          "Better strength and flexibility",
          "Long-term comfort and improved arm use",
        ],
      },
    ],

    highlights: {
      title: "Elbow pain limiting your daily life?",
      description:
        "Modern elbow replacement restores smooth movement and comfort.",
      button: "Know More",
    },

    testimonials: [
      {
        name: "Ajay Verma",
        age: 60,
        quote:
          "My elbow pain is completely gone. I can now bend my arm easily and perform my daily tasks without discomfort.",
        rating: 5,
      },
      {
        name: "Shalini Mehta",
        age: 48,
        quote:
          "After a complex fracture, I had limited movement. Elbow replacement helped me regain strength and flexibility.",
        rating: 5,
      },
      {
        name: "Manoj Sharma",
        age: 57,
        quote:
          "Smooth experience from start to finish. The surgery restored my elbow stability and function.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Is elbow replacement safe?",
        answer:
          "Yes, it is safe and widely performed for severe arthritis and complex fractures with excellent outcomes.",
      },
      {
        question: "How long does the elbow implant last?",
        answer:
          "Elbow implants typically last 10–15 years depending on usage and activity level.",
      },
      {
        question: "Can I lift weights after elbow replacement?",
        answer:
          "Light weights are allowed, but heavy lifting should be avoided to protect the implant.",
      },
      {
        question: "Can elbow replacement improve grip strength?",
        answer:
          "Yes, many patients experience improved grip strength once pain and stiffness are reduced.",
      },
      {
        question: "When can I return to normal routine?",
        answer:
          "Most patients resume daily tasks within 4–6 weeks depending on recovery progress.",
      },
    ],
  },
  // 6️⃣ Painless and Quick Recovery Joint Surgery
  {
    title: "Painless and Quick Recovery Joint Replacement",
    icon: "/Images/treatment_icon_10.png",

    subtitle:
      "Minimally invasive joint surgeries designed to reduce pain, minimize tissue damage, and help patients return to daily activities faster.",

    howItHelps:
      "Modern minimally invasive joint replacement uses small incisions, muscle-sparing techniques, and precision tools that reduce pain and speed up healing. Patients walk sooner, recover faster, and experience minimal discomfort compared to traditional surgery.",

    whyDeteriorate:
      "Joints deteriorate due to aging, arthritis, past injuries, obesity, overuse, and loss of cartilage. When cushioning wears down, joints become painful, stiff, and difficult to move—often requiring surgical correction.",

    benefits: [
      "Very small incisions and minimal tissue damage",
      "Faster healing and reduced hospital stay",
      "Less postoperative pain",
      "Better cosmetic results with minimal scarring",
      "Early walking and quick return to activities",
      "Improved joint stability and movement",
      "Highly accurate implant positioning with advanced tools",
    ],

    symptoms: [
      { title: "Joint pain", description: "affecting walking or movement" },
      {
        title: "Slow recovery with traditional treatments",
        description: "poor flexibility",
      },
      { title: "Swelling", description: "especially after activity" },
      {
        title: "Stiffness",
        description: "difficulty bending or rotating joints",
      },
      { title: "Weakness", description: "reduced strength or stability" },
      { title: "Pain at night", description: "disturbs sleep" },
      {
        title: "Difficulty performing routine tasks",
        description: "like walking or climbing stairs",
      },
      {
        title: "Reduced range of motion",
        description: "joint movement becomes restricted",
      },
    ],

    procedures: [
      {
        name: "Minimally Invasive Joint Replacement",
        bestFor: "Hip, knee, shoulder, or elbow arthritis",
        involves: "Small incisions, low tissue damage, quick healing",
        recovery: "2–4 weeks",
        description:
          "Muscle-sparing techniques minimize pain and speed up mobility.",
      },
      {
        name: "Robotic-Assisted Joint Surgery",
        bestFor: "Patients requiring perfect implant alignment",
        involves: "Robot-guided bone mapping and implant placement",
        recovery: "3–6 weeks",
        description:
          "Robotic precision improves long-term implant life and joint comfort.",
      },
      {
        name: "Day-Care Joint Surgery",
        bestFor: "Selected patients with stable health",
        involves: "Same-day discharge with fast recovery protocols",
        recovery: "1–3 weeks",
        description:
          "Allows patients to return home the same day with minimal discomfort.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Before Surgery (1–2 Weeks)",
        items: [
          "Diagnosis through X-ray or MRI",
          "Prehabilitation to strengthen muscles",
          "Medical fitness and planning",
        ],
      },
      {
        phase: "Phase 2",
        title: "During Surgery",
        items: [
          "Tiny incisions made",
          "Implants placed with precision tools",
          "Minimal blood loss and tissue handling",
        ],
      },
      {
        phase: "Phase 3",
        title: "After Surgery (24–48 Hours)",
        items: [
          "Early walking encouraged",
          "Pain control and swelling reduction",
          "Begin light mobility exercises",
        ],
      },
      {
        phase: "Phase 4",
        title: "Week 1–4",
        items: [
          "Strength and flexibility exercises",
          "Improved walking ability",
          "Return to routine work gradually",
        ],
      },
      {
        phase: "Phase 5",
        title: "1–3 Months",
        items: [
          "Full recovery for most daily activities",
          "Stable joint movement",
          "Long-term pain relief and comfort",
        ],
      },
    ],

    highlights: {
      title: "Looking for faster recovery after joint surgery?",
      description:
        "Minimally invasive techniques help you walk quickly with less pain.",
      button: "Start Consultation",
    },

    testimonials: [
      {
        name: "Rekha Gupta",
        age: 52,
        quote:
          "I recovered much faster than expected. The minimally invasive technique was truly painless and smooth!",
        rating: 5,
      },
      {
        name: "Arnav Sharma",
        age: 47,
        quote:
          "The robotic-assisted procedure gave me perfect alignment. I was walking the next day!",
        rating: 5,
      },
      {
        name: "Poonam Jain",
        age: 59,
        quote:
          "Excellent care. Very small cut, no major pain, and quick recovery. Highly recommended!",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Is minimally invasive surgery safe?",
        answer:
          "Yes, it is considered very safe and reduces pain, swelling, and recovery time compared to traditional surgery.",
      },
      {
        question: "How soon can I walk after surgery?",
        answer:
          "Most patients walk the same day or within 24 hours depending on the procedure.",
      },
      {
        question: "Does minimally invasive surgery reduce complications?",
        answer:
          "Yes, smaller incisions lower the chances of infection, bleeding, and muscle damage.",
      },
      {
        question: "Is the recovery really faster?",
        answer:
          "Yes, patients commonly return to routine activities within 2–4 weeks.",
      },
      {
        question: "Is robotic-assisted surgery better?",
        answer:
          "Robotic surgery provides precise implant alignment, which improves long-term comfort and joint function.",
      },
    ],
  },
  // Knee Arthroscopy – Meniscus Repair
  {
    title: "Knee Arthroscopy - Meniscus Repair",
    icon: "/Images/treatment_icon_12.png",

    subtitle:
      "Meniscus repair preserves the natural knee cushion, restores stability, and prevents long-term arthritis.",

    howItHelps:
      "The torn meniscus is stitched back to allow healing. This preserves natural knee shock absorption, reduces pain, and restores stability for long-term joint health.",

    whyDeteriorate:
      "Meniscus tears occur due to twisting injuries, sports trauma, aging, or degeneration. If untreated, the tear worsens and causes pain, swelling, and early arthritis.",

    benefits: [
      "Preserves natural knee function",
      "Reduces arthritis risk",
      "Faster recovery than open surgery",
      "Minimal pain and tiny incisions",
      "Better knee stability and mobility",
      "Ideal for young & active patients",
    ],

    symptoms: [
      { title: "Sharp knee pain", description: "after twisting injury" },
      { title: "Locking or catching", description: "knee gets stuck" },
      { title: "Swelling", description: "frequent inflammation" },
      { title: "Clicking sound", description: "during movement" },
      { title: "Difficulty squatting", description: "pain on deep bending" },
      { title: "Instability", description: "knee feeling weak" },
    ],

    procedures: [
      {
        name: "Arthroscopic Meniscus Repair",
        bestFor: "Vertical, bucket-handle, and root tears",
        involves: "Stitching the torn meniscus using suture anchors",
        recovery: "4–8 weeks",
        description:
          "Helps the meniscus heal naturally, preserving knee cushioning and stability.",
      },
      {
        name: "All-Inside Meniscus Repair",
        bestFor: "Posterior horn tears",
        involves: "Special implants placed arthroscopically",
        recovery: "4–6 weeks",
        description:
          "A modern technique requiring fewer incisions with excellent results.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Pre-Surgery",
        items: ["MRI scan", "Knee exam", "Physiotherapy to reduce swelling"],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: ["Small incisions", "Camera-guided repair", "Meniscus stitched"],
      },
      {
        phase: "Phase 3",
        title: "Week 1–3",
        items: ["Protected walking", "Pain control", "Begin gentle exercises"],
      },
      {
        phase: "Phase 4",
        title: "Week 4–8",
        items: ["Strengthening", "Improved bending", "Return to routine work"],
      },
      {
        phase: "Phase 5",
        title: "3–6 Months",
        items: ["Full recovery", "Return to sports", "Normal knee function"],
      },
    ],

    highlights: {
      title: "Meniscus tear troubling you?",
      description:
        "Early repair prevents arthritis and restores smooth knee movement.",
      button: "Book Consultation",
    },

    testimonials: [
      {
        name: "Amit Verma",
        age: 28,
        quote:
          "My knee feels stable again. I returned to sports within a few months!",
        rating: 5,
      },
      {
        name: "Sonia Rathore",
        age: 34,
        quote: "The catching pain disappeared completely. Excellent recovery!",
        rating: 5,
      },
      {
        name: "Rohit Singh",
        age: 23,
        quote: "Best treatment for sports injuries. Highly recommended!",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Is meniscus repair better than removal?",
        answer:
          "Yes. Repair preserves natural knee function and reduces arthritis risk.",
      },
      {
        question: "Can all tears be repaired?",
        answer:
          "Only specific tear patterns can be repaired. Others need debridement.",
      },
      {
        question: "When can I walk normally?",
        answer:
          "Most patients walk with support within a week and normally in 4–6 weeks.",
      },
      {
        question: "Is the surgery painful?",
        answer: "Very little pain due to minimally invasive arthroscopy.",
      },
      {
        question: "When can I play sports again?",
        answer:
          "Usually after 3–6 months depending on healing and physiotherapy.",
      },
    ],
  },

  // Knee Arthroscopy – Meniscus Debridement
  {
    title: "Knee Arthroscopy - Meniscus Debridement",
    icon: "/Images/treatment_icon_11.png",

    subtitle:
      "A minimally invasive procedure that trims damaged meniscus tissue to relieve pain, reduce swelling, and improve knee movement.",

    howItHelps:
      "Meniscus debridement removes the torn, unstable, or frayed portion of the meniscus that cannot be repaired. This reduces knee irritation, eliminates catching or locking, and improves joint mobility.",

    whyDeteriorate:
      "Degenerative tears, repetitive stress, aging, obesity, and old injuries cause the meniscus to wear out. These torn fragments irritate the joint, leading to pain, swelling, and difficulty bending the knee.",

    benefits: [
      "Quick procedure (20–30 minutes)",
      "Immediate pain relief in most cases",
      "Fast recovery time",
      "Improves knee movement",
      "Reduces locking or catching",
      "Smaller incisions with minimal scarring",
      "Ideal for degenerative or complex tears",
    ],

    symptoms: [
      { title: "Pain on movement", description: "especially while twisting" },
      { title: "Locking or catching", description: "knee gets stuck suddenly" },
      { title: "Swelling", description: "recurring after activity" },
      { title: "Clicking sound", description: "due to loose meniscal flap" },
      {
        title: "Difficulty squatting",
        description: "pain increases on bending",
      },
      { title: "Instability", description: "knee feels weak or wobbly" },
    ],

    procedures: [
      {
        name: "Arthroscopic Meniscus Debridement",
        bestFor: "Degenerative, radial, or complex tears",
        involves: "Trimming unstable meniscus tissue and smoothing edges",
        recovery: "2–4 weeks",
        description:
          "Removes torn fragments causing irritation, allowing smoother knee movement.",
      },
      {
        name: "Partial Meniscectomy",
        bestFor: "Large irreparable tears",
        involves:
          "Removing the torn segment while keeping healthy tissue intact",
        recovery: "3–5 weeks",
        description:
          "Designed to preserve as much natural meniscus as possible.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Before Surgery",
        items: [
          "MRI to confirm tear pattern",
          "Pain & swelling control",
          "Prehab physiotherapy",
        ],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Tiny incisions",
          "Camera-assisted removal of torn tissue",
          "Joint cleaning",
        ],
      },
      {
        phase: "Phase 3",
        title: "Week 1–2",
        items: [
          "Walking same or next day",
          "Pain reduction",
          "Light physiotherapy",
        ],
      },
      {
        phase: "Phase 4",
        title: "Week 2–4",
        items: ["Strengthening", "Normal walking", "Return to daily routine"],
      },
      {
        phase: "Phase 5",
        title: "1–2 Months",
        items: ["Full recovery", "Return to sports (doctor-guided)"],
      },
    ],

    highlights: {
      title: "Experiencing catching or locking in your knee?",
      description:
        "Meniscus debridement offers fast relief and quick return to movement.",
      button: "Book Consultation",
    },

    testimonials: [
      {
        name: "Ravi Sharma",
        age: 45,
        quote:
          "My knee locking stopped immediately after surgery. Walking became painless within days!",
        rating: 5,
      },
      {
        name: "Meena Rajpurohit",
        age: 52,
        quote:
          "Swelling and irritation reduced so quickly. I’m back to normal activities!",
        rating: 5,
      },
      {
        name: "Himanshu Jain",
        age: 33,
        quote: "Simple, fast procedure. Perfect for my degenerative tear.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Is debridement the same as meniscus removal?",
        answer:
          "No. Only the damaged portion is removed, not the whole meniscus.",
      },
      {
        question: "How soon can I walk?",
        answer: "Most patients walk the same day or next day.",
      },
      {
        question: "Is the relief permanent?",
        answer:
          "Yes, if the remaining cartilage is healthy and physiotherapy is followed.",
      },
      {
        question: "Is it painful?",
        answer: "Pain is very mild due to minimally invasive arthroscopy.",
      },
      {
        question: "When can I return to sports?",
        answer: "Most people resume sports in 4–6 weeks, depending on healing.",
      },
    ],
  },

  // Knee Arthroscopy – ACL Reconstruction
  {
    title: "Knee Arthroscopy - ACL Reconstruction",
    icon: "/Images/treatment_icon_13.png",

    subtitle:
      "A minimally invasive keyhole surgery that reconstructs the torn ACL using grafts to restore knee stability, strength, and function.",

    howItHelps:
      "ACL Reconstruction restores knee stability by replacing the torn ligament with a new graft. This prevents the knee from slipping or giving way, protects cartilage and meniscus from further damage, and allows safe return to sports and daily activities.",

    whyDeteriorate:
      "The ACL commonly tears during twisting injuries, sudden direction changes, road accidents, or sports like football, kabaddi, basketball, and cricket. Once torn, the ACL does not heal on its own because of limited blood supply, causing instability and recurrent knee injuries.",

    benefits: [
      "Restores knee stability",
      "Prevents repeated knee slipping episodes",
      "Protects meniscus from future damage",
      "Essential for athletes and active individuals",
      "Minimally invasive arthroscopic approach",
      "Faster healing with modern graft techniques",
      "Long-lasting ligament reconstruction",
    ],

    symptoms: [
      {
        title: "Knee giving way",
        description: "especially during walking or sports",
      },
      { title: "Sudden pop sound", description: "heard during injury" },
      { title: "Swelling", description: "rapid swelling after injury" },
      { title: "Instability", description: "feels unsafe on uneven surfaces" },
      {
        title: "Difficulty pivoting",
        description: "pain while turning or twisting",
      },
      { title: "Weakness", description: "reduced strength in injured leg" },
      {
        title: "Pain while running",
        description: "especially during acceleration",
      },
    ],

    procedures: [
      {
        name: "Arthroscopic ACL Reconstruction",
        bestFor: "Complete ACL tears and repeated instability",
        involves:
          "Using grafts (hamstring/patellar/quadriceps tendon) to reconstruct ACL",
        recovery: "6–9 months for sports; 6–8 weeks for routine work",
        description:
          "Most common and effective procedure for restoring knee stability using a minimally invasive approach.",
      },
      {
        name: "Anatomic Single-Bundle ACL Reconstruction",
        bestFor: "General population with instability",
        involves: "Reconstructing main functional bundle",
        recovery: "6–8 months",
        description:
          "Provides excellent knee stability while preserving natural motion.",
      },
      {
        name: "Double-Bundle ACL Reconstruction",
        bestFor: "Athletes requiring high rotational stability",
        involves: "Reconstructing both ACL bundles",
        recovery: "8–10 months",
        description:
          "Offers superior rotational control for high-performance sports.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Before Surgery",
        items: [
          "MRI to confirm ACL tear",
          "Prehabilitation to reduce swelling",
          "Strengthening quadriceps and hamstrings",
          "Choosing graft type",
        ],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Keyhole incisions",
          "Removal of torn ACL fibers",
          "Drilling tunnels for graft placement",
          "Securing graft with screws/buttons",
        ],
      },
      {
        phase: "Phase 3",
        title: "Weeks 1–4",
        items: [
          "Walking with support",
          "Reduced pain and swelling",
          "Early physiotherapy begins",
        ],
      },
      {
        phase: "Phase 4",
        title: "Weeks 6–12",
        items: [
          "Strengthening exercises",
          "Balance & proprioception training",
          "Light jogging",
        ],
      },
      {
        phase: "Phase 5",
        title: "Months 6–9",
        items: [
          "Return to sports after clearance",
          "Full knee stability restored",
          "Advanced athletic training",
        ],
      },
    ],

    highlights: {
      title: "Knee slipping again and again?",
      description:
        "ACL Reconstruction restores stability and protects your knee from long-term damage.",
      button: "Book ACL Specialist Appointment",
    },

    testimonials: [
      {
        name: "Karan Singh",
        age: 26,
        quote:
          "My knee used to give way while playing football. After ACL reconstruction and rehab, I’m back on the field stronger than ever!",
        rating: 5,
      },
      {
        name: "Neha Gupta",
        age: 31,
        quote:
          "The surgery was smooth and recovery was faster than expected. I can now run without fear.",
        rating: 5,
      },
      {
        name: "Sahil Meena",
        age: 22,
        quote:
          "Excellent stability after surgery. Best doctor for ligament injuries!",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Does ACL tear heal without surgery?",
        answer:
          "Complete ACL tears do not heal naturally. Without reconstruction, the knee remains unstable.",
      },
      {
        question: "When can I walk after ACL surgery?",
        answer: "Most patients walk with support within 1–3 days.",
      },
      {
        question: "Which graft is best for ACL reconstruction?",
        answer:
          "Hamstring and patellar tendon grafts are most common; the best choice depends on lifestyle and sports needs.",
      },
      {
        question: "Is ACL surgery painful?",
        answer:
          "Pain is mild to moderate initially but well controlled with medication.",
      },
      {
        question: "When can athletes return to sports?",
        answer:
          "Most athletes return to competitive sports between 6–9 months.",
      },
    ],
  },

  // Knee Arthroscopy – PCL Reconstruction
  {
    title: "Knee Arthroscopy - PCL Reconstruction",
    icon: "/Images/treatment_icon_14.png",

    subtitle:
      "A highly effective minimally invasive procedure that restores knee stability by reconstructing the torn Posterior Cruciate Ligament (PCL).",

    howItHelps:
      "PCL Reconstruction restores the function of the posterior cruciate ligament using tendon grafts. It eliminates backward shifting of the shinbone, improves stability, prevents further cartilage damage, and restores confidence during walking, running, or climbing.",

    whyDeteriorate:
      "The PCL commonly tears due to high-impact injuries such as road accidents, dashboard injuries, sports trauma, or falls. Since the PCL has limited healing capacity, untreated tears lead to instability, meniscus damage, knee arthritis, and long-term pain.",

    benefits: [
      "Restores backward stability of the knee",
      "Prevents further joint degeneration",
      "Minimally invasive arthroscopic technique",
      "Improves confidence during walking & sports",
      "Reduces pain and swelling",
      "Long-lasting ligament reconstruction",
      "Protects cartilage from future damage",
    ],

    symptoms: [
      { title: "Pain behind the knee", description: "especially after injury" },
      { title: "Knee instability", description: "shinbone moves backward" },
      { title: "Difficulty walking downhill", description: "knee feels weak" },
      { title: "Swelling", description: "recurs after activity" },
      { title: "Deep knee discomfort", description: "felt while bending" },
      { title: "Reduced performance", description: "sports ability decreases" },
      { title: "Knee giving way", description: "especially while running" },
    ],

    procedures: [
      {
        name: "Arthroscopic PCL Reconstruction",
        bestFor: "Complete PCL tears with instability",
        involves: "Reconstruction using hamstring or quadriceps tendon graft",
        recovery: "6–9 months",
        description:
          "A minimally invasive reconstruction replacing the torn PCL with a strong tendon graft.",
      },
      {
        name: "Single-Bundle PCL Reconstruction",
        bestFor: "General population with instability",
        involves: "Reconstructing the primary functional bundle of the PCL",
        recovery: "6–8 months",
        description:
          "Provides good stability and functional recovery for most patients.",
      },
      {
        name: "Double-Bundle PCL Reconstruction",
        bestFor: "High athletes or complex multi-ligament injuries",
        involves:
          "Reconstructing both PCL bundles for improved control and function",
        recovery: "8–10 months",
        description:
          "Offers enhanced rotational and posterior stability, ideal for demanding activities.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Before Surgery",
        items: [
          "MRI to confirm PCL tear",
          "Strengthening of quadriceps",
          "Reducing swelling through prehab",
          "Choosing suitable graft option",
        ],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Small arthroscopic incisions",
          "Cleaning torn ligament fibers",
          "Creating tunnels for graft",
          "Fixing graft securely",
        ],
      },
      {
        phase: "Phase 3",
        title: "Weeks 1–4",
        items: [
          "Knee brace support",
          "Walking with crutches",
          "Controlled knee bending",
          "Swelling and pain reduction",
        ],
      },
      {
        phase: "Phase 4",
        title: "Weeks 6–12",
        items: [
          "Strengthening exercises",
          "Improved stability",
          "Gradual increase in activity",
        ],
      },
      {
        phase: "Phase 5",
        title: "Months 6–9",
        items: [
          "Advanced rehab",
          "Return to sports after evaluation",
          "Full functional recovery",
        ],
      },
    ],

    highlights: {
      title: "Knee unstable after an accident?",
      description:
        "PCL Reconstruction restores stability and prevents long-term knee arthritis.",
      button: "Book PCL Specialist Consultation",
    },

    testimonials: [
      {
        name: "Rohit Sharma",
        age: 29,
        quote:
          "I injured my PCL in a bike accident. After reconstruction, my knee feels stable and pain-free!",
        rating: 5,
      },
      {
        name: "Vimal Yadav",
        age: 35,
        quote:
          "Excellent recovery and rehabilitation guidance. I am back to work without any fear or instability.",
        rating: 5,
      },
      {
        name: "Harshit Rathore",
        age: 25,
        quote:
          "The surgery and recovery were smooth. I can now run and gym without knee slipping.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Can PCL tears heal without surgery?",
        answer:
          "Partial tears may heal with physiotherapy, but complete tears with instability usually need reconstruction.",
      },
      {
        question: "Is PCL reconstruction more complex than ACL?",
        answer:
          "Yes, PCL surgery is technically more demanding due to ligament anatomy and depth of the joint.",
      },
      {
        question: "How long is recovery after PCL surgery?",
        answer:
          "Routine activities resume in 6–8 weeks; sports recovery may take 6–9 months.",
      },
      {
        question: "Is the surgery painful?",
        answer:
          "Pain is mild and controlled through medications, as the procedure is minimally invasive.",
      },
      {
        question: "Can I return to sports?",
        answer:
          "Yes, with proper rehab most patients return to sports in 6–9 months.",
      },
    ],
  },

  // Shoulder Arthroscopy – Rotator Cuff Repair
  {
    title: "Shoulder Arthroscopy - Rotator Cuff Repair",
    icon: "/Images/treatment_icon_20.png",

    subtitle:
      "A minimally invasive procedure that repairs torn rotator cuff tendons, restoring shoulder strength, motion, and pain-free function.",

    howItHelps:
      "Arthroscopic rotator cuff repair reattaches torn shoulder tendons to the bone using suture anchors. This restores shoulder stability, reduces pain, improves strength, and enables full range of motion needed for daily activities and sports.",

    whyDeteriorate:
      "Rotator cuff tears occur due to aging, sports injuries, falls, repetitive overhead activities, or degeneration. When torn, the tendon retracts and cannot reattach naturally—leading to weakness, chronic pain, and limited shoulder movement.",

    benefits: [
      "Minimally invasive keyhole surgery",
      "Faster recovery compared to open surgery",
      "Restores shoulder strength",
      "Reduces chronic pain and night pain",
      "Improves lifting and overhead activities",
      "Lower risk of complications",
      "Strong tendon-to-bone healing",
    ],

    symptoms: [
      {
        title: "Severe shoulder pain",
        description: "especially during lifting",
      },
      { title: "Night pain", description: "pain increases while sleeping" },
      { title: "Weakness", description: "difficulty lifting objects" },
      { title: "Limited range of motion", description: " stiff shoulder" },
      { title: "Clicking sound", description: "during overhead activity" },
      { title: "Pain radiating to arm", description: "common in cuff tears" },
      { title: "Difficulty combing hair", description: "reduced arm movement" },
    ],

    procedures: [
      {
        name: "Arthroscopic Rotator Cuff Repair",
        bestFor: "Full-thickness or partial tendon tears",
        involves: "Reattaching torn tendon to bone using suture anchors",
        recovery: "3–6 months",
        description:
          "A precise and minimally invasive repair that restores tendon strength and mobility.",
      },
      {
        name: "Double-Row Rotator Cuff Repair",
        bestFor: "Large or retracted tears",
        involves: "Two rows of anchors for stronger fixation",
        recovery: "4–6 months",
        description:
          "Provides a larger healing surface and stronger biomechanical stability.",
      },
      {
        name: "Partial Tear Debridement",
        bestFor: "Small frayed tears",
        involves: "Cleaning damaged tendon edges",
        recovery: "2–4 weeks",
        description:
          "Removes inflamed or frayed tissue to reduce pain and irritation.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Before Surgery",
        items: [
          "MRI to assess tear size",
          "Pain control & physiotherapy",
          "Strength assessment",
          "Pre-surgery counselling",
        ],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Small arthroscopic incisions",
          "Cleaning damaged tendon edges",
          "Reattaching tendon with anchors",
          "Shoulder stabilization",
        ],
      },
      {
        phase: "Phase 3",
        title: "Weeks 1–6",
        items: [
          "Arm immobilizer sling",
          "Passive shoulder exercises",
          "Pain & swelling reduction",
        ],
      },
      {
        phase: "Phase 4",
        title: "Weeks 6–12",
        items: [
          "Active motion exercises",
          "Strengthening rotator cuff muscles",
          "Improved shoulder mobility",
        ],
      },
      {
        phase: "Phase 5",
        title: "Months 3–6",
        items: [
          "Return to normal activities",
          "Advanced strengthening",
          "Full functional recovery",
        ],
      },
    ],

    highlights: {
      title: "Shoulder pain disrupting sleep?",
      description:
        "Rotator cuff repair restores strength and eliminates night pain effectively.",
      button: "Book Shoulder Specialist Consultation",
    },

    testimonials: [
      {
        name: "Anita Choudhary",
        age: 54,
        quote:
          "My shoulder pain was unbearable, especially at night. After surgery, I sleep peacefully and can lift my arm normally!",
        rating: 5,
      },
      {
        name: "Rohit Saini",
        age: 32,
        quote:
          "I regained full overhead movement after my rotator cuff repair. Completely satisfied with the treatment!",
        rating: 5,
      },
      {
        name: "Deepak Verma",
        age: 47,
        quote:
          "The arthroscopic procedure was smooth and recovery was faster than expected.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Can rotator cuff tears heal without surgery?",
        answer:
          "Small partial tears may improve with physiotherapy, but complete tears usually need surgical repair.",
      },
      {
        question: "Is the surgery painful?",
        answer:
          "Pain is mild to moderate initially but well-controlled with medications.",
      },
      {
        question: "How long do I need to wear a sling?",
        answer:
          "Most patients wear a sling for 3–6 weeks depending on tear size.",
      },
      {
        question: "When can I return to work?",
        answer:
          "Desk jobs: 2–3 weeks. Physical work: 2–3 months. Heavy labor: 4–6 months.",
      },
      {
        question: "Can I lift weights after surgery?",
        answer:
          "Yes, but only after full recovery and surgeon approval—usually after 3–6 months.",
      },
    ],
  },

  //Shoulder Arthroscopy – Labrum Repair
  {
    title: "Shoulder Arthroscopy - Labrum Repair",
    icon: "/Images/treatment_icon_18.png",

    subtitle:
      "A minimally invasive arthroscopic procedure that repairs torn shoulder labrum to restore stability, prevent dislocations, and eliminate chronic pain.",

    howItHelps:
      "Labrum repair reattaches the torn cartilage rim (labrum) to the shoulder socket using suture anchors. This restores shoulder stability, prevents repeated dislocations, reduces pain, and improves performance in daily activities and sports.",

    whyDeteriorate:
      "Labrum tears commonly occur due to shoulder dislocations, sports injuries, heavy lifting, falls, or repetitive overhead activities. Once torn, the labrum cannot heal fully on its own due to limited blood supply, leading to instability and chronic pain.",

    benefits: [
      "Restores shoulder stability",
      "Prevents repeated dislocations",
      "Improves overhead movement",
      "Reduces chronic pain",
      "Minimally invasive keyhole surgery",
      "Faster healing compared to open surgery",
      "Strengthens shoulder capsule",
    ],

    symptoms: [
      {
        title: "Shoulder dislocation episodes",
        description: "slipping out repeatedly",
      },
      { title: "Deep shoulder pain", description: "especially with rotation" },
      { title: "Clicking or popping sound", description: "during movement" },
      { title: "Weakness", description: "difficulty lifting arm" },
      { title: "Instability", description: "shoulder feels loose or unsafe" },
      {
        title: "Limited range of motion",
        description: "difficulty overhead tasks",
      },
      {
        title: "Pain during sports",
        description: "especially throwing or overhead activity",
      },
    ],

    procedures: [
      {
        name: "Arthroscopic Bankart Repair",
        bestFor: "Repeated shoulder dislocations",
        involves: "Reattaching torn labrum using anchors",
        recovery: "3–6 months",
        description:
          "Repairs the front labrum to restore stability in patients with recurrent dislocations.",
      },
      {
        name: "SLAP Tear Repair",
        bestFor: "Superior labrum tears (common in athletes)",
        involves: "Anchor-based repair of the top labrum",
        recovery: "4–6 months",
        description:
          "Often used for throwers, gym enthusiasts, and overhead athletes.",
      },
      {
        name: "Labrum Debridement",
        bestFor: "Frayed or minor labral damage",
        involves: "Smoothing torn labrum edges",
        recovery: "2–4 weeks",
        description:
          "Reduces pain and irritation when the tear is small and stable.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Before Surgery",
        items: [
          "MRI to confirm labrum tear",
          "Strength & mobility assessment",
          "Pain/swelling control",
          "Pre-surgery counselling",
        ],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Small arthroscopic incisions",
          "Cleaning torn tissue",
          "Reattaching labrum with anchors",
          "Shoulder stabilization procedure",
        ],
      },
      {
        phase: "Phase 3",
        title: "Weeks 1–6",
        items: [
          "Shoulder sling immobilization",
          "Passive physiotherapy",
          "Reduced pain & improved comfort",
        ],
      },
      {
        phase: "Phase 4",
        title: "Weeks 6–12",
        items: [
          "Active shoulder exercises",
          "Strengthening rotator cuff",
          "Improved stability & motion",
        ],
      },
      {
        phase: "Phase 5",
        title: "Months 3–6",
        items: [
          "Full range of motion",
          "Advanced strengthening",
          "Return to sports after clearance",
        ],
      },
    ],

    highlights: {
      title: "Shoulder slipping out frequently?",
      description:
        "Labrum repair restores stability and prevents future dislocations.",
      button: "Book Shoulder Stability Consultation",
    },

    testimonials: [
      {
        name: "Varun Mehra",
        age: 27,
        quote:
          "My shoulder used to pop out often. After labrum repair, I feel completely stable—even during workouts!",
        rating: 5,
      },
      {
        name: "Priya Rathod",
        age: 34,
        quote:
          "The surgery relieved my deep shoulder pain. My overhead movement is now smooth and pain-free.",
        rating: 5,
      },
      {
        name: "Sanjay Bhati",
        age: 29,
        quote:
          "Highly effective result! No more dislocations and full strength regained.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Do labrum tears heal without surgery?",
        answer:
          "Small frayed tears may improve with physiotherapy, but detached labrum tears usually require surgical repair.",
      },
      {
        question: "Why does the shoulder dislocate repeatedly?",
        answer:
          "A torn labrum weakens the shoulder socket, causing the joint to slip out repeatedly.",
      },
      {
        question: "How long should I wear a sling?",
        answer:
          "Typically 3–6 weeks depending on the severity of the tear and repair.",
      },
      {
        question: "When can I return to gym workouts?",
        answer:
          "Light training begins in 2–3 months; overhead lifting after 4–6 months.",
      },
      {
        question: "Is the surgery safe?",
        answer:
          "Yes, arthroscopy is minimally invasive with excellent outcomes and quicker recovery.",
      },
    ],
  },

  //Ankle Arthroscopy
  {
    title: "Ankle Arthroscopy",
    icon: "/Images/treatment_icon_5.png",

    subtitle:
      "A minimally invasive keyhole surgery used to diagnose and treat ankle pain, ligament injuries, cartilage damage, and chronic instability.",

    howItHelps:
      "Ankle arthroscopy uses a tiny camera and instruments inserted through small incisions to clean, repair, or remove damaged tissues. It reduces pain, improves motion, treats instability, and speeds up recovery compared to open surgery.",

    whyDeteriorate:
      "The ankle joint deteriorates due to repeated sprains, ligament tears, cartilage wear, sports injuries, or untreated trauma. Loose bodies, scar tissue, and inflammation may develop inside the joint, leading to chronic pain and stiffness.",

    benefits: [
      "Minimally invasive with tiny incisions",
      "Quick recovery compared to open surgery",
      "Effective for chronic ankle pain",
      "Improves stability and joint function",
      "Removes scar tissue and loose fragments",
      "Reduces inflammation and swelling",
      "Ideal for athletes and active individuals",
    ],

    symptoms: [
      {
        title: "Chronic ankle pain",
        description: "persistent pain after injury",
      },
      { title: "Swelling", description: "returns after walking or sports" },
      { title: "Instability", description: "ankle gives way frequently" },
      {
        title: "Locking sensation",
        description: "loose fragments inside joint",
      },
      { title: "Stiffness", description: "difficulty bending the ankle" },
      { title: "Clicking or grinding", description: "cartilage damage" },
      { title: "Difficulty running", description: "pain on uneven ground" },
    ],

    procedures: [
      {
        name: "Arthroscopic Debridement",
        bestFor: "Loose bodies, scar tissue, early arthritis",
        involves: "Cleaning damaged cartilage & inflamed tissue",
        recovery: "2–4 weeks",
        description:
          "Relieves pain by removing debris and smoothing joint surfaces.",
      },
      {
        name: "Ligament Tightening (Broström Procedure – Arthroscopic)",
        bestFor: "Chronic ankle instability after repeated sprains",
        involves: "Reconstructing and tightening stretched ligaments",
        recovery: "6–10 weeks",
        description: "Improves ankle stability and prevents future sprains.",
      },
      {
        name: "Cartilage Repair / Microfracture",
        bestFor: "Osteochondral defects (cartilage injury)",
        involves: "Stimulating new cartilage growth",
        recovery: "3–6 months",
        description:
          "Helps regenerate cartilage and reduces long-term arthritis risk.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Before Surgery",
        items: [
          "Clinical examination",
          "X-ray / MRI to analyze damage",
          "Swelling and pain control",
          "Prehabilitation exercises",
        ],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "2–3 tiny incisions",
          "Camera inserted into ankle",
          "Cleaning or repairing damaged tissues",
          "Ligament tightening if required",
        ],
      },
      {
        phase: "Phase 3",
        title: "Week 1–2",
        items: [
          "Walking with support",
          "Pain and swelling reduction",
          "Early range-of-motion exercises",
        ],
      },
      {
        phase: "Phase 4",
        title: "Weeks 3–6",
        items: [
          "Strengthening exercises",
          "Improved balance",
          "Return to basic activities",
        ],
      },
      {
        phase: "Phase 5",
        title: "6–12 Weeks",
        items: [
          "Functional training",
          "Return to jogging",
          "Full recovery for daily routine",
        ],
      },
    ],

    highlights: {
      title: "Ankle pain not improving after an injury?",
      description:
        "Arthroscopy offers quick relief from chronic ankle issues with tiny incisions.",
      button: "Book Ankle Specialist Consultation",
    },

    testimonials: [
      {
        name: "Riya Jain",
        age: 24,
        quote:
          "I had constant ankle swelling since a sports injury. Arthroscopy fixed it completely—I'm back to running!",
        rating: 5,
      },
      {
        name: "Abhishek Rathore",
        age: 30,
        quote:
          "My ankle used to twist frequently. The arthroscopic ligament tightening restored full stability.",
        rating: 5,
      },
      {
        name: "Sneha Gupta",
        age: 28,
        quote:
          "Pain-free walking within days! Highly recommend ankle arthroscopy for chronic pain.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Is ankle arthroscopy painful?",
        answer:
          "Pain is minimal due to small incisions and is easily controlled with medication.",
      },
      {
        question: "How soon can I walk?",
        answer:
          "Most patients walk with support on the same or next day depending on the procedure.",
      },
      {
        question: "Is it good for chronic ankle sprains?",
        answer:
          "Yes, ligament tightening procedures are highly effective for instability caused by repeated sprains.",
      },
      {
        question: "Will the swelling stop permanently?",
        answer:
          "Yes, once loose bodies and inflamed tissue are removed, swelling usually resolves.",
      },
      {
        question: "Can athletes return to sports?",
        answer:
          "Most athletes return to full sports within 6–12 weeks depending on healing and physiotherapy.",
      },
    ],
  },

  //Wrist Arthroscopy
  {
    title: "Wrist Arthroscopy",
    icon: "/Images/treatment_icon_24.png",

    subtitle:
      "A minimally invasive procedure used to diagnose and treat wrist pain, ligament injuries, cartilage damage, and joint instability using tiny keyhole incisions.",

    howItHelps:
      "Wrist arthroscopy allows direct visualization of small wrist joints. It removes inflamed tissue, repairs torn ligaments, and treats cartilage damage with great precision—reducing pain, improving grip strength, and restoring hand function.",

    whyDeteriorate:
      "Wrist injuries from falls, sports, repetitive strain, or sudden twisting can damage cartilage and ligaments. Over time, untreated tears lead to chronic pain, instability, swelling, and limited wrist movement.",

    benefits: [
      "Minimally invasive keyhole surgery",
      "Faster healing compared to open wrist surgery",
      "Restores joint stability",
      "Reduces pain and swelling",
      "Improves grip strength",
      "Very small scars",
      "High diagnostic accuracy for complex wrist problems",
    ],

    symptoms: [
      {
        title: "Chronic wrist pain",
        description: "pain that persists after injury",
      },
      {
        title: "Weak grip",
        description: "difficulty lifting or holding objects",
      },
      { title: "Clicking sound", description: "felt during movement" },
      { title: "Swelling", description: "especially after activity" },
      { title: "Wrist instability", description: "feels loose or weak" },
      {
        title: "Difficulty rotating the hand",
        description: "pain during twisting motions",
      },
      { title: "Stiffness", description: "reduced range of motion" },
    ],

    procedures: [
      {
        name: "TFCC (Triangular Fibrocartilage Complex) Repair",
        bestFor: "Tears causing ulnar wrist pain",
        involves: "Suture repair of torn wrist cartilage",
        recovery: "6–10 weeks",
        description:
          "Restores stability and eliminates pain near the little finger side of the wrist.",
      },
      {
        name: "Wrist Debridement",
        bestFor: "Cartilage wear, loose bodies, inflammation",
        involves: "Cleaning damaged tissue and smoothing joint surfaces",
        recovery: "2–4 weeks",
        description: "Reduces irritation and improves smooth wrist movement.",
      },
      {
        name: "Ligament Repair (Scapholunate / Lunotriquetral)",
        bestFor: "Wrist instability from ligament tears",
        involves: "Arthroscopic repair or tightening of torn ligaments",
        recovery: "8–12 weeks",
        description: "Improves grip strength and prevents long-term arthritis.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Before Surgery",
        items: [
          "X-ray / MRI for detailed diagnosis",
          "Physical examination for stability",
          "Pain & swelling control",
          "Discussion of treatment plan",
        ],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Tiny 2–3 mm incisions",
          "Camera inserted into wrist joint",
          "Repair or debridement of damaged tissues",
          "Bandaging and wrist immobilisation",
        ],
      },
      {
        phase: "Phase 3",
        title: "Week 1–3",
        items: [
          "Pain reduction",
          "Gradual wrist mobility exercises",
          "Splint support (if ligament repaired)",
        ],
      },
      {
        phase: "Phase 4",
        title: "Weeks 3–8",
        items: [
          "Strengthening exercises",
          "Improved grip strength",
          "Return to daily activities",
        ],
      },
      {
        phase: "Phase 5",
        title: "8–12 Weeks",
        items: [
          "Full functional motion",
          "Return to sports or heavy use (doctor-guided)",
          "Long-term stability achieved",
        ],
      },
    ],

    highlights: {
      title: "Wrist pain not improving with rest?",
      description:
        "Arthroscopy provides accurate diagnosis and effective treatment with minimal downtime.",
      button: "Book Wrist Specialist Consultation",
    },

    testimonials: [
      {
        name: "Mahima Singh",
        age: 29,
        quote:
          "My wrist pain lasted months after a fall. After arthroscopy, the pain vanished and my grip strength returned!",
        rating: 5,
      },
      {
        name: "Amit Verma",
        age: 34,
        quote:
          "Very small cuts, quick recovery, and no more clicking in my wrist. Excellent treatment.",
        rating: 5,
      },
      {
        name: "Radhika Lakhawat",
        age: 26,
        quote:
          "I had a TFCC tear. Arthroscopy repaired it perfectly, and I’m back to yoga and daily activities.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Is wrist arthroscopy painful?",
        answer:
          "Pain is minimal due to tiny incisions and controlled effectively with medication.",
      },
      {
        question: "How soon can I use my hand?",
        answer:
          "Light use in 2–3 days; full use depends on whether repair or debridement was done.",
      },
      {
        question: "Is it safe for ligament injuries?",
        answer:
          "Yes, it is the preferred method for diagnosing and treating wrist ligament tears.",
      },
      {
        question: "Will it improve grip strength?",
        answer:
          "Yes, once stability is restored, grip strength improves significantly.",
      },
      {
        question: "Can wrist arthroscopy prevent arthritis?",
        answer:
          "Early treatment of tears and loose bodies can prevent long-term joint degeneration.",
      },
    ],
  },

  //Elbow Arthroscopy
  {
    title: "Elbow Arthroscopy",
    icon: "/Images/treatment_icon_21.png",

    subtitle:
      "A minimally invasive keyhole procedure used to treat elbow stiffness, loose bodies, arthritis, ligament injuries, and chronic pain with faster recovery and minimal scarring.",

    howItHelps:
      "Elbow arthroscopy uses a tiny camera and instruments to remove scar tissue, repair damaged cartilage, treat ligament tears, and eliminate loose bone fragments. This improves elbow movement, reduces pain, and restores normal arm function.",

    whyDeteriorate:
      "Elbow joint degeneration occurs due to sports injuries, repetitive strain, trauma, arthritis, old fractures, or ligament damage. Over time, scar tissue, bone spurs, and loose fragments accumulate, causing stiffness, locking, and chronic pain.",

    benefits: [
      "Minimally invasive with tiny incisions",
      "Improves elbow motion and flexibility",
      "Reduces chronic pain and stiffness",
      "Removes loose bodies causing locking",
      "Treats ligament injury effectively",
      "Faster recovery than open surgery",
      "Ideal for athletes, laborers, and active individuals",
    ],

    symptoms: [
      {
        title: "Elbow stiffness",
        description: "difficulty bending or straightening",
      },
      {
        title: "Clicking or locking",
        description: "joint gets stuck during movement",
      },
      { title: "Swelling", description: "persistent inflammation" },
      {
        title: "Pain while lifting",
        description: "discomfort during daily tasks",
      },
      { title: "Weak grip", description: "reduced strength due to elbow pain" },
      { title: "Tenderness", description: "pain on inner or outer elbow" },
      {
        title: "Reduced range of motion",
        description: "difficulty in full extension or flexion",
      },
    ],

    procedures: [
      {
        name: "Arthroscopic Loose Body Removal",
        bestFor: "Locking, catching, or clicking of the elbow",
        involves: "Cleaning bone fragments, cartilage pieces, and scar tissue",
        recovery: "2–4 weeks",
        description:
          "Provides immediate relief from locking and improves smooth joint motion.",
      },
      {
        name: "Arthroscopic Debridement",
        bestFor: "Early arthritis and cartilage damage",
        involves: "Smoothing rough surfaces and removing inflamed tissue",
        recovery: "3–6 weeks",
        description:
          "Reduces pain and improves flexibility in arthritic elbows.",
      },
      {
        name: "Ligament Repair (UCL / LCL)",
        bestFor: "Sports-related elbow instability",
        involves: "Repairing or tightening torn elbow ligaments",
        recovery: "8–12 weeks",
        description:
          "Restores stability needed for throwing or lifting activities.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Before Surgery",
        items: [
          "X-ray / MRI for diagnosis",
          "Swelling and pain control",
          "Assessment of elbow motion and strength",
          "Discussion of surgical plan",
        ],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Small incisions for camera and instruments",
          "Removal of loose bodies or scar tissue",
          "Cartilage smoothing or ligament repair",
          "Bandaging and immobilization if needed",
        ],
      },
      {
        phase: "Phase 3",
        title: "Week 1–3",
        items: [
          "Pain and swelling reduction",
          "Early elbow motion exercises",
          "Wearing a brace (for ligament repairs)",
        ],
      },
      {
        phase: "Phase 4",
        title: "Weeks 3–8",
        items: [
          "Strengthening the forearm and elbow",
          "Restoring grip strength",
          "Return to light routine activities",
        ],
      },
      {
        phase: "Phase 5",
        title: "8–12 Weeks",
        items: [
          "Full elbow movement",
          "Return to sports (doctor-guided)",
          "Stable, pain-free elbow function",
        ],
      },
    ],

    highlights: {
      title: "Elbow pain or stiffness limiting your daily activities?",
      description:
        "Elbow arthroscopy offers fast recovery, minimal pain, and excellent long-term results.",
      button: "Book Elbow Specialist Consultation",
    },

    testimonials: [
      {
        name: "Rahul Khatri",
        age: 36,
        quote:
          "My elbow used to lock and click all the time. After arthroscopy, the movement is smooth and pain-free!",
        rating: 5,
      },
      {
        name: "Kajal Sharma",
        age: 42,
        quote:
          "Great improvement in flexibility. I can now straighten my arm completely!",
        rating: 5,
      },
      {
        name: "Jagdish Verma",
        age: 48,
        quote:
          "Quick recovery and minimal pain. Perfect treatment for chronic elbow stiffness.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Is elbow arthroscopy painful?",
        answer:
          "Pain is minimal due to small incisions and controlled with medications.",
      },
      {
        question: "How long until I regain full motion?",
        answer:
          "Most patients regain good motion within 3–6 weeks depending on the procedure.",
      },
      {
        question: "Can elbow arthroscopy treat arthritis?",
        answer:
          "Yes, early to moderate arthritis can be treated by removing scar tissue and smoothing cartilage.",
      },
      {
        question: "Will I need physiotherapy?",
        answer:
          "Yes. Physiotherapy is essential for restoring strength and flexibility.",
      },
      {
        question: "When can athletes return to sports?",
        answer:
          "Most return in 8–12 weeks after ligament repairs; sooner after simple debridement.",
      },
    ],
  },
  //Diagnostic Arthroscopy
  {
    title: "Diagnostic Arthroscopy",
    icon: "/Images/treatment_icon_8.png",

    subtitle:
      "A minimally invasive procedure used to directly view the inside of a joint using a tiny camera when MRI or X-rays do not give clear answers.",

    howItHelps:
      "Diagnostic arthroscopy allows the surgeon to look inside the joint in real time to identify cartilage tears, ligament damage, loose bodies, inflammation, and early arthritis. It is the gold standard when imaging reports are inconclusive.",

    whyDeteriorate:
      "Joints may deteriorate due to injuries, repetitive stress, inflammation, early arthritis, or undiagnosed soft-tissue damage. Hidden issues may not appear on X-ray or MRI, making arthroscopy essential for accurate diagnosis and faster treatment.",

    benefits: [
      "Most accurate way to diagnose joint problems",
      "Identifies injuries not visible on MRI or X-ray",
      "Helps plan precise treatment",
      "Very small incisions with minimal pain",
      "Quick recovery and same-day discharge",
      "Prevents long-term complications by early detection",
      "Allows immediate corrective surgery if needed",
    ],

    symptoms: [
      {
        title: "Unexplained joint pain",
        description: "pain with no clear cause on MRI",
      },
      { title: "Swelling", description: "recurrent or persistent swelling" },
      { title: "Locking or catching", description: "mechanical symptoms" },
      { title: "Instability", description: "joint feels weak or gives way" },
      {
        title: "Stiffness",
        description: "restricted movement without clear reason",
      },
      {
        title: "Clicking sensations",
        description: "painful or loud joint noises",
      },
      {
        title: "Suspected cartilage injury",
        description: "not visible on imaging",
      },
    ],

    procedures: [
      {
        name: "Diagnostic Knee Arthroscopy",
        bestFor: "Unclear knee pain, swelling, meniscus tears",
        involves:
          "Camera-based evaluation of cartilage, ligaments, and meniscus",
        recovery: "1–2 weeks",
        description:
          "Used when MRI findings do not match symptoms. Provides direct visualization for accurate diagnosis.",
      },
      {
        name: "Diagnostic Shoulder Arthroscopy",
        bestFor: "Uncertain shoulder pain or instability",
        involves:
          "Visual assessment of rotator cuff, labrum, and joint surfaces",
        recovery: "1–2 weeks",
        description:
          "Helps identify subtle tears and impingement not seen in scans.",
      },
      {
        name: "Diagnostic Ankle/Wrist Arthroscopy",
        bestFor: "Unclear pain, instability, or cartilage injury",
        involves: "Inspection of joint lining, ligaments, and cartilage",
        recovery: "1–2 weeks",
        description: "Ideal for sports injuries that imaging fails to reveal.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Before Procedure",
        items: [
          "X-ray or MRI review",
          "Identify symptoms not explained by imaging",
          "Discuss findings and expectations",
          "Routine blood tests",
        ],
      },
      {
        phase: "Phase 2",
        title: "Procedure Day",
        items: [
          "Small incisions for camera insertion",
          "Joint visualization in real time",
          "Identify tears, loose bodies, or early arthritis",
          "Possible immediate correction if needed",
        ],
      },
      {
        phase: "Phase 3",
        title: "Day 1–3",
        items: [
          "Mild pain management",
          "Bandage care",
          "Start gentle movement exercises",
        ],
      },
      {
        phase: "Phase 4",
        title: "Week 1–3",
        items: [
          "Return to routine activities",
          "Physiotherapy for mobility",
          "Review findings and start proper treatment plan",
        ],
      },
      {
        phase: "Phase 5",
        title: "3–6 Weeks",
        items: [
          "Full motion restored",
          "Start strengthening if needed",
          "Treatment for diagnosed condition begins",
        ],
      },
    ],

    highlights: {
      title: "Unexplained joint pain despite normal MRI?",
      description:
        "Diagnostic arthroscopy provides the most accurate way to identify hidden joint problems.",
      button: "Book Diagnostic Evaluation",
    },

    testimonials: [
      {
        name: "Ritika Meena",
        age: 34,
        quote:
          "My MRI looked normal, but arthroscopy found a hidden cartilage tear. After treatment, my pain is gone!",
        rating: 5,
      },
      {
        name: "Aman Sethi",
        age: 29,
        quote:
          "I had persistent knee swelling for months. Diagnostic arthroscopy finally gave answers and relief.",
        rating: 5,
      },
      {
        name: "Prem Singh",
        age: 40,
        quote:
          "Best decision! The surgeon identified the exact cause of pain that no scan could show.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Why is diagnostic arthroscopy needed when MRI exists?",
        answer:
          "MRI can miss small tears, loose bodies, or early arthritis. Arthroscopy gives a direct, clear view inside the joint.",
      },
      {
        question: "Is diagnostic arthroscopy painful?",
        answer:
          "Pain is minimal and controlled with anesthesia. Recovery is quick.",
      },
      {
        question: "How long does the procedure take?",
        answer: "Usually 20–30 minutes depending on the joint and findings.",
      },
      {
        question: "Can treatment be done during the same arthroscopy?",
        answer:
          "Yes. If a problem is found, the surgeon can correct it immediately.",
      },
      {
        question: "How soon can I return to work?",
        answer: "Most patients resume routine work within 2–3 days.",
      },
    ],
  },

  //Corrective Arthroscopy
  {
    title: "Corrective Arthroscopy",
    icon: "/Images/treatment_icon_7.png",

    subtitle:
      "A minimally invasive procedure used to correct mechanical joint problems such as scar tissue, bone spurs, cartilage defects, and failed previous surgeries.",

    howItHelps:
      "Corrective arthroscopy fixes the underlying mechanical issues inside a joint—such as scar tissue, instability, cartilage defects, or loose bodies. It restores smooth movement, reduces pain, and prevents long-term joint damage.",

    whyDeteriorate:
      "Joints deteriorate due to previous untreated injuries, poor healing, arthritis, ligament damage, failed past surgeries, or repetitive stress. These issues create abnormal joint mechanics, leading to stiffness, pain, locking, and instability.",

    benefits: [
      "Corrects underlying mechanical joint problems",
      "Prevents long-term arthritis progression",
      "Restores smooth and stable joint movement",
      "Improves joint alignment and function",
      "Minimally invasive with tiny incisions",
      "Faster recovery than open surgery",
      "Effective even after failed previous surgery",
    ],

    symptoms: [
      {
        title: "Recurrent joint pain",
        description: "pain returning after treatment",
      },
      {
        title: "Joint stiffness",
        description: "restricted movement due to scar tissue",
      },
      { title: "Instability", description: "joint feels loose or gives way" },
      {
        title: "Clicking or locking",
        description: "loose body or cartilage flap",
      },
      { title: "Swelling", description: "repeated inflammation" },
      {
        title: "Failed previous surgery",
        description: "persistent issues after surgery",
      },
      {
        title: "Deformity or maltracking",
        description: "joint not moving smoothly",
      },
    ],

    procedures: [
      {
        name: "Arthroscopic Debridement & Scar Tissue Removal",
        bestFor: "Stiff joints, post-surgery adhesions",
        involves: "Removing thick scar tissue and inflamed lining",
        recovery: "3–6 weeks",
        description:
          "Restores joint motion and reduces stiffness caused by adhesions.",
      },
      {
        name: "Arthroscopic Cartilage Smoothing / Microfracture",
        bestFor: "Cartilage defects or wear",
        involves: "Stimulating new cartilage growth",
        recovery: "6–10 weeks",
        description: "Improves joint surface and reduces pain during movement.",
      },
      {
        name: "Arthroscopic Bone Spur Removal",
        bestFor: "Impingement, painful clicking",
        involves: "Shaving off bone overgrowth",
        recovery: "4–6 weeks",
        description:
          "Restores normal joint mechanics and eliminates impingement.",
      },
      {
        name: "Revision Arthroscopy",
        bestFor: "Failed previous surgeries",
        involves: "Correcting incomplete repairs or complications",
        recovery: "6–12 weeks",
        description:
          "Used when earlier surgeries did not fully solve the problem.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Before Surgery",
        items: [
          "MRI and X-ray evaluation",
          "Identify failed healing or mechanical issues",
          "Assessment of joint motion and strength",
          "Discuss revision or corrective plan",
        ],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Tiny incisions for arthroscope and tools",
          "Removal of scar tissue or bone spurs",
          "Correcting cartilage defects or instability",
          "Bandaging and early motion instructions",
        ],
      },
      {
        phase: "Phase 3",
        title: "Week 1–3",
        items: [
          "Pain and swelling reduction",
          "Start gentle range-of-motion therapy",
          "Prevent formation of new scar tissue",
        ],
      },
      {
        phase: "Phase 4",
        title: "Weeks 3–8",
        items: [
          "Strengthening surrounding muscles",
          "Balance and stability training",
          "Improved joint movement",
        ],
      },
      {
        phase: "Phase 5",
        title: "2–4 Months",
        items: [
          "Full return to routine activities",
          "Restored joint mechanics",
          "Long-term pain relief and improved function",
        ],
      },
    ],

    highlights: {
      title: "Persistent joint pain even after treatment?",
      description:
        "Corrective arthroscopy can identify and fix problems that previous scans or surgeries missed.",
      button: "Book Corrective Arthroscopy Consultation",
    },

    testimonials: [
      {
        name: "Deepak Chouhan",
        age: 38,
        quote:
          "My knee was stiff after earlier surgery. Corrective arthroscopy removed scar tissue and restored full movement!",
        rating: 5,
      },
      {
        name: "Meena Rathore",
        age: 44,
        quote:
          "I had recurring shoulder pain even after physiotherapy. Corrective arthroscopy finally solved it!",
        rating: 5,
      },
      {
        name: "Harshit Sharma",
        age: 30,
        quote:
          "Bone spur removal through arthroscopy brought instant relief. Amazing improvement!",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "When is corrective arthroscopy needed?",
        answer:
          "It is performed when pain or stiffness persists despite treatment, or after failed previous surgery.",
      },
      {
        question: "Is recovery fast after corrective arthroscopy?",
        answer:
          "Yes, most patients recover within 4–8 weeks depending on the correction performed.",
      },
      {
        question: "Can corrective arthroscopy fix instability?",
        answer:
          "Yes, ligament tightening and revision techniques help restore stability.",
      },
      {
        question: "Will scar tissue return after surgery?",
        answer: "Proper physiotherapy reduces the chances significantly.",
      },
      {
        question:
          "Is it safe to undergo corrective surgery after a failed previous surgery?",
        answer:
          "Yes, arthroscopy is minimally invasive and much safer for revision procedures.",
      },
    ],
  },

  //ACL Reconstruction
  {
    title: "ACL Reconstruction",
    icon: "/Images/treatment_icon_13.png",

    subtitle:
      "Arthroscopic ACL reconstruction restores knee stability after ligament tears, helping patients return to sports and active life safely.",

    howItHelps:
      "ACL reconstruction replaces the torn ligament with a strong graft, restoring stability, preventing knee buckling, and protecting the meniscus from further damage.",

    whyDeteriorate:
      "ACL deteriorates due to twisting injuries, sudden stops while running, jumping, or collisions. Once torn, it cannot heal on its own due to limited blood supply.",

    benefits: [
      "Restores knee stability",
      "Prevents further meniscus damage",
      "Improves sports performance",
      "Minimally invasive keyhole procedure",
      "High success rate in athletes",
      "Reduced risk of long-term arthritis",
    ],

    symptoms: [
      { title: "Knee instability", description: "feeling of knee giving way" },
      { title: "Swelling", description: "immediate or recurrent swelling" },
      {
        title: "Pain while pivoting",
        description: "difficulty turning or twisting",
      },
      { title: "Reduced confidence", description: "fear of knee collapsing" },
      { title: "Difficulty running or jumping", description: "poor control" },
    ],

    procedures: [
      {
        name: "Arthroscopic ACL Reconstruction",
        bestFor: "Complete ACL tear",
        involves: "Using grafts from hamstring or patellar tendon",
        recovery: "4–6 months",
        description:
          "A minimally invasive procedure where the torn ACL is replaced with a strong tendon graft.",
      },
      {
        name: "Anatomic Single-Bundle ACL Reconstruction",
        bestFor: "Most athletes",
        involves: "Reproducing the natural ACL anatomy",
        recovery: "4–6 months",
        description:
          "Restores knee rotation and stability close to natural joint movement.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Before Surgery",
        items: ["MRI scan", "Prehab strengthening", "Swelling control"],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: ["Arthroscopy", "Graft placement", "Fixation with screws"],
      },
      {
        phase: "Phase 3",
        title: "Week 1–4",
        items: [
          "Walk with support",
          "Quadriceps activation",
          "Swelling reduction",
        ],
      },
      {
        phase: "Phase 4",
        title: "Month 2–4",
        items: ["Strength training", "Balance therapy", "Light jogging"],
      },
      {
        phase: "Phase 5",
        title: "Month 4–6",
        items: ["Sports-specific training", "Return-to-sport readiness"],
      },
    ],

    highlights: {
      title: "Struggling with knee instability after injury?",
      description:
        "ACL reconstruction restores stability and protects your knee from long-term damage.",
      button: "Book ACL Consultation",
    },

    testimonials: [
      {
        name: "Karan Singh",
        age: 26,
        quote:
          "I’m back to football after ACL reconstruction. Confidence restored!",
        rating: 5,
      },
      {
        name: "Rohit Verma",
        age: 31,
        quote: "My knee no longer gives way. Excellent recovery experience.",
        rating: 5,
      },
      {
        name: "Naveen Sharma",
        age: 22,
        quote: "Returned to running in a few months. Best orthopedic care!",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Is ACL reconstruction necessary?",
        answer:
          "Yes, if instability affects daily life or the patient wishes to return to sports.",
      },
      {
        question: "Can ACL heal without surgery?",
        answer: "No, complete tears do not heal naturally.",
      },
      {
        question: "When can I run again?",
        answer: "Most patients begin light running by 8–12 weeks.",
      },
      {
        question: "Is physiotherapy required?",
        answer: "Yes, it is critical for full recovery and stability.",
      },
      {
        question: "When can I return to sports?",
        answer: "Usually 6–9 months depending on strength and control.",
      },
    ],
  },

  // PCL Reconstruction
  {
    title: "PCL Reconstruction",
    icon: "/Images/treatment_icon_14.png",

    subtitle:
      "PCL reconstruction restores backward stability of the knee after high-impact injuries or accidents.",

    howItHelps:
      "The torn PCL is replaced using a tendon graft, restoring knee stability, preventing further cartilage damage, and improving walking and climbing ability.",

    whyDeteriorate:
      "PCL injuries usually occur due to accidents, dashboard injuries, falls, or hyperflexion. The ligament has limited healing capacity, leading to chronic instability.",

    benefits: [
      "Restores backward knee stability",
      "Improves walking and stair climbing",
      "Reduces knee buckling",
      "Prevents early arthritis",
      "Minimally invasive procedure",
      "Better long-term joint protection",
    ],

    symptoms: [
      {
        title: "Pain behind the knee",
        description: "especially while bending",
      },
      { title: "Instability", description: "knee slips backward" },
      { title: "Difficulty descending stairs", description: "poor control" },
      { title: "Swelling", description: "repeated inflammation" },
      {
        title: "Reduced athletic performance",
        description: "weak push-off strength",
      },
    ],

    procedures: [
      {
        name: "Arthroscopic PCL Reconstruction",
        bestFor: "Complete PCL tears",
        involves: "Using hamstring or allograft tissue",
        recovery: "4–6 months",
        description:
          "Replaces the torn PCL with a strong graft to restore knee biomechanics.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Before Surgery",
        items: ["MRI", "Strength testing", "Prehab exercises"],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: ["Arthroscopy", "Graft placement", "Joint balancing"],
      },
      {
        phase: "Phase 3",
        title: "Week 1–4",
        items: ["Brace support", "Swelling management", "Basic mobility"],
      },
      {
        phase: "Phase 4",
        title: "Month 2–4",
        items: ["Strengthening", "Balance training"],
      },
      {
        phase: "Phase 5",
        title: "Month 4–6",
        items: ["Light jogging", "Advanced training"],
      },
    ],

    highlights: {
      title: "Backward knee instability?",
      description:
        "PCL reconstruction restores natural stability and prevents long-term deterioration.",
      button: "Book PCL Consultation",
    },

    testimonials: [
      {
        name: "Ankit Yadav",
        age: 34,
        quote: "PCL surgery restored my knee strength. I'm fully active again!",
        rating: 5,
      },
      {
        name: "Harsh Raj",
        age: 29,
        quote: "No more instability while walking downhill. Excellent care!",
        rating: 5,
      },
      {
        name: "Ramesh Saini",
        age: 40,
        quote: "Recovery was smooth. Now I can walk and climb without fear.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Is PCL surgery required for all tears?",
        answer:
          "Partial tears may heal with physiotherapy, but complete tears often need surgery.",
      },
      {
        question: "How long is recovery?",
        answer: "Full recovery takes 4–6 months.",
      },
      {
        question: "Is walking difficult after PCL injury?",
        answer:
          "Yes, especially downward walking due to backward shift of the tibia.",
      },
      {
        question: "Can PCL heal naturally?",
        answer: "It may heal poorly and remain loose.",
      },
      {
        question: "When can I return to sports?",
        answer: "Usually after 6–9 months of rehabilitation.",
      },
    ],
  },
  // Meniscus Repair
  {
    title: "Meniscus Repair",
    icon: "/Images/treatment_icon_15.png",

    subtitle:
      "Arthroscopic meniscus repair restores the natural cushioning of the knee, preserves joint health, and prevents early arthritis.",

    howItHelps:
      "Meniscus repair stitches the torn cartilage back together, allowing it to heal naturally. This preserves knee shock absorption, prevents arthritis, and maintains long-term joint stability.",

    whyDeteriorate:
      "The meniscus deteriorates due to twisting injuries, sports trauma, sudden knee rotation, aging, and repetitive stress. Tears reduce knee cushioning, leading to pain, swelling, and early cartilage wear.",

    benefits: [
      "Preserves natural knee cartilage",
      "Prevents early osteoarthritis",
      "Restores knee stability",
      "Best long-term outcome for young & active patients",
      "Minimally invasive arthroscopic procedure",
      "Better shock absorption for joint longevity",
      "Allows return to sports after healing",
    ],

    symptoms: [
      { title: "Sharp knee pain", description: "especially during twisting" },
      {
        title: "Locking or catching",
        description: "knee gets stuck during movement",
      },
      { title: "Swelling", description: "repeated or persistent swelling" },
      {
        title: "Limited bending",
        description: "pain while squatting or sitting",
      },
      { title: "Instability", description: "feeling of slipping or popping" },
      {
        title: "Clicking sensations",
        description: "painful clicking inside knee",
      },
    ],

    procedures: [
      {
        name: "Arthroscopic Meniscus Repair",
        bestFor: "Tears in vascular (red-red or red-white) zone",
        involves: "Suture anchors to reconnect torn meniscus",
        recovery: "8–12 weeks",
        description:
          "The preferred treatment for young or active patients to preserve meniscus structure and prevent arthritis.",
      },
      {
        name: "All-Inside Meniscus Repair",
        bestFor: "Vertical or peripheral tears",
        involves: "Special arthroscopic devices for internal stitching",
        recovery: "8–10 weeks",
        description:
          "Minimally invasive technique with faster surgery time and strong fixation.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Before Surgery",
        items: ["MRI evaluation", "Swelling control", "Strength preparation"],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Keyhole incisions",
          "Tear assessment",
          "Meniscus stitching with anchors",
        ],
      },
      {
        phase: "Phase 3",
        title: "Week 1–3",
        items: [
          "Brace support",
          "Partial weight-bearing",
          "Controlled bending exercises",
        ],
      },
      {
        phase: "Phase 4",
        title: "Week 4–8",
        items: [
          "Strength training",
          "Full bending gradually allowed",
          "Walking normally",
        ],
      },
      {
        phase: "Phase 5",
        title: "Month 3–4",
        items: ["Jogging", "Return to sports training", "Final strengthening"],
      },
    ],

    highlights: {
      title: "Meniscus tear causing locking or sharp pain?",
      description:
        "Early repair helps preserve knee function and prevents early arthritis.",
      button: "Book Meniscus Consultation",
    },

    testimonials: [
      {
        name: "Arjun Mehta",
        age: 21,
        quote:
          "My knee used to lock every time I played basketball. After meniscus repair, I’m back on the court pain-free!",
        rating: 5,
      },
      {
        name: "Shalini Gupta",
        age: 32,
        quote:
          "Swelling and pain vanished after surgery. My knee feels stable again!",
        rating: 5,
      },
      {
        name: "Vignesh Rao",
        age: 28,
        quote:
          "Doctor preserved my meniscus instead of removing it. Best long-term decision for my knee health.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Is meniscus repair better than removal?",
        answer:
          "Yes. Repair preserves knee cushioning and prevents early arthritis. Removal is only used if the tear cannot be repaired.",
      },
      {
        question: "How long does it take to heal?",
        answer:
          "Around 8–12 weeks depending on tear type and healing response.",
      },
      {
        question: "Can all tears be repaired?",
        answer:
          "Repairs are best for tears with good blood supply. Complex degenerative tears may require alternative treatment.",
      },
      {
        question: "When can I walk normally?",
        answer: "Most patients walk without support by 4–6 weeks.",
      },
      {
        question: "When can I return to sports?",
        answer:
          "Most athletes return to sports within 3–4 months after proper rehabilitation.",
      },
    ],
  },
  // Meniscus Debridement
  {
    title: "Meniscus Debridement",
    icon: "/Images/treatment_icon_16.png",

    subtitle:
      "Arthroscopic meniscus debridement removes the damaged or frayed part of the meniscus to relieve pain, eliminate locking, and restore smooth knee motion.",

    howItHelps:
      "Debridement trims the torn or loose fragments of the meniscus that cause pain, catching, and swelling. This immediately improves knee movement and reduces mechanical symptoms.",

    whyDeteriorate:
      "The meniscus deteriorates due to degenerative changes, age-related wear, twisting injuries, or sports trauma. Degenerated tears cannot be repaired because blood supply is poor, making debridement the best option.",

    benefits: [
      "Immediate pain relief",
      "Eliminates locking and catching",
      "Quick recovery compared to repair",
      "Minimally invasive arthroscopic surgery",
      "Effective for degenerative or complex tears",
      "Allows early return to routine activities",
      "Improves knee mobility and comfort",
    ],

    symptoms: [
      {
        title: "Sharp knee pain",
        description: "especially during twisting or weight-bearing",
      },
      { title: "Locking or catching", description: "knee gets stuck suddenly" },
      { title: "Swelling", description: "recurrent fluid accumulation" },
      { title: "Difficulty squatting", description: "pain at deep bend" },
      { title: "Stiffness", description: "limited flexibility" },
      { title: "Clicking or popping", description: "painful internal noises" },
    ],

    procedures: [
      {
        name: "Arthroscopic Partial Meniscectomy",
        bestFor: "Degenerative or irreparable tears",
        involves: "Removing loose or torn meniscus fragments",
        recovery: "2–4 weeks",
        description:
          "The frayed and unstable portions of the meniscus are trimmed to recreate a smooth, stable edge.",
      },
      {
        name: "Arthroscopic Meniscus Shaving",
        bestFor: "Minor fraying or surface tears",
        involves: "Smoothing rough cartilage edges",
        recovery: "1–3 weeks",
        description:
          "Improves knee motion and reduces irritation for patients with mild degenerative tears.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Before Surgery",
        items: [
          "MRI to assess tear pattern",
          "Swelling reduction",
          "Basic mobility exercises",
        ],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Arthroscopic evaluation",
          "Trimming the damaged meniscus portion",
          "Smoothing rough edges to prevent catching",
        ],
      },
      {
        phase: "Phase 3",
        title: "Week 1–2",
        items: [
          "Walking without support",
          "Pain and swelling reduction",
          "Range-of-motion exercises",
        ],
      },
      {
        phase: "Phase 4",
        title: "Week 2–4",
        items: [
          "Strengthening quadriceps",
          "Light activities",
          "Balance therapy",
        ],
      },
      {
        phase: "Phase 5",
        title: "1–2 Months",
        items: [
          "Return to sports",
          "Full functional training",
          "Long-term joint maintenance",
        ],
      },
    ],

    highlights: {
      title: "Experiencing painful clicking or locking?",
      description:
        "Meniscus debridement offers fast relief for degenerative or complex tears that cannot be repaired.",
      button: "Book Meniscus Treatment",
    },

    testimonials: [
      {
        name: "Harshit Tiwari",
        age: 37,
        quote:
          "I had severe locking for months. After debridement, I was walking pain-free within days!",
        rating: 5,
      },
      {
        name: "Jyoti Pandey",
        age: 42,
        quote:
          "My knee pain disappeared quickly. Recovery was much faster than expected.",
        rating: 5,
      },
      {
        name: "Mahesh Rathore",
        age: 50,
        quote:
          "Perfect treatment for my degenerative meniscus tear. I feel completely normal now.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Is debridement better than repair?",
        answer:
          "Debridement is recommended when the tear cannot heal or be repaired due to poor blood supply or degeneration.",
      },
      {
        question: "How soon can I walk?",
        answer: "Most patients walk the same day or next day.",
      },
      {
        question: "Will a part removal cause problems later?",
        answer:
          "Removing only the damaged part reduces symptoms. Minor long-term arthritis risk exists, which is why strengthening is important.",
      },
      {
        question: "When can I return to work?",
        answer:
          "Desk work in 2–3 days, physical work in 2–3 weeks depending on comfort.",
      },
      {
        question: "Is the procedure safe?",
        answer:
          "Yes, arthroscopic debridement is very safe and commonly performed.",
      },
    ],
  },
  // Shoulder Dislocation Surgery
  {
    title: "Shoulder Dislocation",
    icon: "/Images/treatment_icon_19.png",

    subtitle:
      "Advanced arthroscopic and open techniques to stabilize the shoulder joint, prevent repeated dislocations, and restore full function.",

    howItHelps:
      "Shoulder dislocation surgery tightens or repairs torn ligaments and stabilizes the ball-and-socket joint. This prevents future dislocations, reduces pain, restores strength, and allows safe return to sports and overhead activities.",

    whyDeteriorate:
      "Recurrent shoulder dislocations occur when the ligaments, capsule, or labrum become stretched or torn after an injury. Once damaged, these tissues cannot stabilize the joint properly, causing repeated slipping or dislocation.",

    benefits: [
      "Prevents repeated shoulder dislocations",
      "Restores joint stability for daily and athletic activities",
      "Minimally invasive arthroscopic techniques",
      "Improves overhead arm movements",
      "Reduces pain and fear of dislocation",
      "Enhances sports performance",
      "Long-term protection from cartilage damage",
    ],

    symptoms: [
      {
        title: "Recurrent shoulder slipping",
        description: "feeling of joint popping out",
      },
      {
        title: "Pain during overhead activities",
        description: "throwing or lifting",
      },
      { title: "Weakness", description: "reduced arm strength" },
      { title: "Clicking or catching", description: "labrum-related symptoms" },
      {
        title: "Instability",
        description: "fear or apprehension while moving arm",
      },
      {
        title: "Loss of range of motion",
        description: "difficulty lifting arm fully",
      },
    ],

    procedures: [
      {
        name: "Arthroscopic Bankart Repair",
        bestFor: "Labrum tears causing recurrent dislocations",
        involves: "Reattaching the torn labrum using suture anchors",
        recovery: "10–12 weeks",
        description:
          "The most common and effective surgery for young patients with repeated shoulder dislocations.",
      },
      {
        name: "Capsular Shift / Tightening",
        bestFor: "Loose joint capsule",
        involves: "Tightening stretched ligaments",
        recovery: "3–4 months",
        description:
          "Reduces excess laxity and improves shoulder stability significantly.",
      },
      {
        name: "Latarjet Procedure",
        bestFor: "Significant bone loss in frequent dislocations",
        involves: "Transferring bone fragment to strengthen the socket",
        recovery: "3–6 months",
        description:
          "Provides strong, reliable stability for athletes or high-demand patients.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Before Surgery",
        items: ["MRI scan", "Instability tests", "Strength assessment"],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Arthroscopy or open stabilization",
          "Labrum repair or bone grafting",
          "Ligament tightening",
        ],
      },
      {
        phase: "Phase 3",
        title: "Week 1–3",
        items: ["Arm in sling", "Pain control", "Gentle passive movement"],
      },
      {
        phase: "Phase 4",
        title: "Week 4–8",
        items: [
          "Active movement",
          "Strength recovery",
          "Shoulder stability exercises",
        ],
      },
      {
        phase: "Phase 5",
        title: "Month 3–6",
        items: [
          "Sports-specific training",
          "Advanced strengthening",
          "Safe return to full activities",
        ],
      },
    ],

    highlights: {
      title: "Shoulder slipping again and again?",
      description:
        "Early surgical stabilization prevents long-term damage and restores confidence in movement.",
      button: "Book Shoulder Instability Consultation",
    },

    testimonials: [
      {
        name: "Rohit Saini",
        age: 32,
        quote:
          "My shoulder dislocated five times. After surgery, I feel completely stable and back to my game.",
        rating: 5,
      },
      {
        name: "Anita Choudhary",
        age: 54,
        quote:
          "No more slipping or pain! I can lift my arm freely and sleep without discomfort.",
        rating: 5,
      },
      {
        name: "Vikas Solanki",
        age: 28,
        quote:
          "The stability I gained after surgery changed everything. I'm back to gym workouts!",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Do all shoulder dislocations require surgery?",
        answer:
          "No. However, recurrent dislocations or ligament tears usually need surgical repair to prevent long-term damage.",
      },
      {
        question: "How long is recovery?",
        answer:
          "Basic recovery takes 10–12 weeks, full strength and sports return in 3–6 months.",
      },
      {
        question: "Can I lift weights after surgery?",
        answer: "Yes, but gradually after 2–3 months with proper guidance.",
      },
      {
        question: "What happens if I ignore repeated dislocations?",
        answer:
          "It increases the risk of cartilage loss, labrum tears, and early arthritis.",
      },
      {
        question: "Is arthroscopic surgery safe?",
        answer: "Yes. It is minimally invasive with a very high success rate.",
      },
    ],
  },
  //Labral Tear Repair
  {
    title: "Labral Tear Repair",
    icon: "/Images/treatment_icon_17.png",

    subtitle:
      "Arthroscopic labral repair restores stability, eliminates pain, and improves joint function by fixing torn cartilage in the shoulder or hip.",

    howItHelps:
      "Labral repair reattaches the torn cartilage rim (labrum) to the bone using suture anchors. This restores joint stability, prevents further wear, reduces pain, and improves overall mobility and strength.",

    whyDeteriorate:
      "The labrum tears due to trauma, repetitive overhead activities, sports injuries, shoulder dislocation, hip impingement, or age-related degeneration. Once torn, it does not heal properly on its own due to poor blood supply.",

    benefits: [
      "Restores joint stability",
      "Eliminates catching, popping, or locking",
      "Improves shoulder or hip range of motion",
      "Reduces pain significantly",
      "Prevents early arthritis caused by instability",
      "Minimally invasive arthroscopic procedure",
      "Enables safe return to sports and overhead activities",
    ],

    symptoms: [
      { title: "Deep joint pain", description: "felt inside shoulder or hip" },
      {
        title: "Clicking or popping",
        description: "painful catching sensation",
      },
      { title: "Instability", description: "joint feels loose or weak" },
      {
        title: "Decreased range of motion",
        description: "difficulty lifting or rotating arm",
      },
      {
        title: "Pain during overhead activities",
        description: "throwing, lifting, gym exercises",
      },
      {
        title: "Locking sensation",
        description: "joint gets stuck during movement",
      },
    ],

    procedures: [
      {
        name: "Arthroscopic Labrum Repair",
        bestFor: "Torn shoulder or hip labrum with instability",
        involves: "Reattaching labrum using anchors and sutures",
        recovery: "8–12 weeks",
        description:
          "Most common and effective technique to restore normal joint function and eliminate instability.",
      },
      {
        name: "SLAP Repair (Shoulder)",
        bestFor: "Superior labrum tear from throwing or heavy lifting",
        involves: "Fixation of the upper labrum and biceps anchor",
        recovery: "10–12 weeks",
        description:
          "Ideal for athletes, gym-goers, and overhead workers with painful snapping.",
      },
      {
        name: "Hip Labrum Repair",
        bestFor: "Tears due to femoroacetabular impingement (FAI)",
        involves: "Reattaching labrum to improve hip seal and joint stability",
        recovery: "10–14 weeks",
        description:
          "Helps restore smooth hip motion and prevents long-term degeneration.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Before Surgery",
        items: ["MRI scan", "Range-of-motion tests", "Strength assessment"],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Arthroscopic evaluation of tear",
          "Cleaning damaged edges",
          "Anchor placement to reattach labrum",
        ],
      },
      {
        phase: "Phase 3",
        title: "Week 1–3",
        items: [
          "Brace or sling support",
          "Gentle passive exercises",
          "Pain management",
        ],
      },
      {
        phase: "Phase 4",
        title: "Week 4–8",
        items: [
          "Active range of motion",
          "Strength building",
          "Stability training",
        ],
      },
      {
        phase: "Phase 5",
        title: "Month 3–5",
        items: [
          "Sports training",
          "Rotational strengthening",
          "Return to overhead or hip-intensive activities",
        ],
      },
    ],

    highlights: {
      title: "Experiencing painful clicking or instability in shoulder or hip?",
      description:
        "Labral repair restores stability, eliminates pain, and protects the joint from long-term damage.",
      button: "Book Labrum Repair Consultation",
    },

    testimonials: [
      {
        name: "Neha Gupta",
        age: 29,
        quote:
          "My shoulder would pop painfully for months. After labrum repair, it's stable and pain-free!",
        rating: 5,
      },
      {
        name: "Aditya Rathod",
        age: 24,
        quote:
          "As a tennis player, the labrum tear affected my game. Surgery helped me return stronger.",
        rating: 5,
      },
      {
        name: "Ramesh Yadav",
        age: 36,
        quote:
          "Hip labrum repair gave me back my mobility. I no longer limp or feel stiffness.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Can a labrum tear heal without surgery?",
        answer:
          "Small tears may improve with physiotherapy, but most moderate-to-large tears require arthroscopic repair.",
      },
      {
        question: "Is labrum repair painful?",
        answer:
          "Pain is mild and decreases quickly with medication and physiotherapy.",
      },
      {
        question: "How long until I can lift weights?",
        answer:
          "Most patients resume weight training gradually after 8–12 weeks.",
      },
      {
        question: "What happens if a labrum tear is untreated?",
        answer:
          "It may lead to recurrent instability, chronic pain, and early arthritis.",
      },
      {
        question: "When can I return to sports?",
        answer:
          "Most athletes return to full sports after 3–5 months of rehabilitation.",
      },
    ],
  },
  //Sports Rehabilitation
  {
    title: "Sports Rehabilitation",
    icon: "/Images/treatment_icon_4.png",

    subtitle:
      "A structured, science-based recovery program designed to restore strength, flexibility, balance, and performance after sports injuries or surgeries.",

    howItHelps:
      "Sports rehabilitation helps athletes recover safely and return to peak performance through targeted exercises, muscle retraining, balance drills, and personalized strength programs. It prevents re-injury and improves overall biomechanics.",

    whyDeteriorate:
      "Sports injuries occur due to overuse, poor technique, muscle imbalance, ligament tears, inadequate warm-up, or trauma. Without proper rehabilitation, joints remain weak and unstable, increasing the risk of repeated injuries and long-term damage.",

    benefits: [
      "Faster recovery from sports injuries",
      "Restores full strength and flexibility",
      "Improves balance, coordination, and control",
      "Prevents future injuries through biomechanics correction",
      "Customized athlete-specific training",
      "Safe return to sports with improved confidence",
      "Enhances performance and endurance",
    ],

    symptoms: [
      {
        title: "Weakness after injury",
        description: "unable to generate full strength",
      },
      {
        title: "Reduced flexibility",
        description: "tightness affecting movement",
      },
      { title: "Instability", description: "fear of knee/ankle giving way" },
      {
        title: "Recurrent pain",
        description: "persistent discomfort during sports",
      },
      {
        title: "Decreased performance",
        description: "slow speed or poor endurance",
      },
      {
        title: "Loss of confidence",
        description: "fear of movement after injury",
      },
    ],

    procedures: [
      {
        name: "Strengthening Program",
        bestFor: "Post-surgery or muscle weakness",
        involves: "Progressive resistance and core strengthening",
        recovery: "4–12 weeks",
        description:
          "Builds strength in target muscle groups to restore athletic readiness.",
      },
      {
        name: "Neuromuscular Training",
        bestFor: "Instability after knee or ankle injury",
        involves:
          "Balance drills, coordination training, proprioceptive exercises",
        recovery: "4–10 weeks",
        description:
          "Improves joint control, reduces instability, and boosts performance.",
      },
      {
        name: "Sports-Specific Conditioning",
        bestFor: "Athletes returning to running, jumping, or contact sports",
        involves: "Agility, sprint training, plyometrics",
        recovery: "4–12 weeks",
        description:
          "Mimics real sports demands to ensure safe and confident return to competition.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Initial Assessment",
        items: ["Strength testing", "Movement screening", "Injury evaluation"],
      },
      {
        phase: "Phase 2",
        title: "Early Rehab (Week 1–3)",
        items: ["Pain control", "Gentle mobility", "Activation exercises"],
      },
      {
        phase: "Phase 3",
        title: "Mid Rehab (Week 3–8)",
        items: ["Strength training", "Balance exercises", "Core stabilization"],
      },
      {
        phase: "Phase 4",
        title: "Advanced Rehab (Week 8–12)",
        items: [
          "Agility drills",
          "Plyometric training",
          "Sports simulation exercises",
        ],
      },
      {
        phase: "Phase 5",
        title: "Return to Sport",
        items: [
          "Functional testing",
          "Endurance evaluation",
          "Final clearance by specialist",
        ],
      },
    ],

    highlights: {
      title: "Want to return stronger after an injury?",
      description:
        "A structured rehab program helps athletes recover safely and perform better than before.",
      button: "Start Sports Rehab Program",
    },

    testimonials: [
      {
        name: "Kunal Mehra",
        age: 22,
        quote:
          "Rehabilitation helped me return to football stronger than before. Excellent program!",
        rating: 5,
      },
      {
        name: "Aisha Rani",
        age: 27,
        quote:
          "My knee stability improved dramatically after ACL rehab. I feel confident again!",
        rating: 5,
      },
      {
        name: "Prakash Sharma",
        age: 30,
        quote:
          "The sports-specific training boosted my speed and endurance. Highly recommended!",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Do athletes need rehabilitation after injury?",
        answer:
          "Yes. Rehab restores strength, stability, and performance while reducing risk of re-injury.",
      },
      {
        question: "How long does sports rehab take?",
        answer:
          "Depending on injury, it may last 4–12 weeks or longer for major ligament injuries.",
      },
      {
        question: "Is rehabilitation required after surgery?",
        answer:
          "Absolutely. Surgery fixes the structure; rehab restores strength and function.",
      },
      {
        question: "Can I return to sports without full rehab?",
        answer:
          "Not recommended. Returning too early increases chances of re-injury or chronic pain.",
      },
      {
        question: "Is sports rehab different from normal physiotherapy?",
        answer:
          "Yes. Sports rehab is performance-oriented, focusing on speed, agility, and sports-specific movements.",
      },
    ],
  },

  //Return-to-Play Guidance
  {
    title: "Return-to-Play Guidance",
    icon: "/Images/treatment_icon_10.png",

    subtitle:
      "A scientifically designed step-by-step protocol to ensure athletes return to sports safely, confidently, and without risk of reinjury.",

    howItHelps:
      "Return-to-Play (RTP) guidance evaluates strength, flexibility, biomechanics, balance, confidence, and sport-specific skills to determine when an athlete is ready to resume training or competition. This prevents reinjury and ensures long-term performance.",

    whyDeteriorate:
      "Athletes risk reinjury if they return too early after ligament tears, fractures, muscle injuries, or surgery. Weakness, poor balance, unhealed tissues, and lack of neuromuscular control can compromise safety. RTP protocols help bridge this gap.",

    benefits: [
      "Safe and structured return to sports",
      "Prevents reinjury and long-term complications",
      "Improves strength, confidence, and control",
      "Customized for each athlete’s sport",
      "Ensures complete physical and psychological readiness",
      "Performance-based testing for accurate clearance",
      "Scientifically standardized RTP milestones",
    ],

    symptoms: [
      {
        title: "Fear of movement",
        description: "hesitation or lack of confidence during activity",
      },
      {
        title: "Instability",
        description: "joint feels weak or unstable after injury",
      },
      {
        title: "Reduced endurance",
        description: "difficulty sustaining performance",
      },
      {
        title: "Sport-specific limitations",
        description: "unable to sprint, jump, or pivot",
      },
      {
        title: "Coordination issues",
        description: "poor neuromuscular control",
      },
      {
        title: "Pain on high-intensity activity",
        description: "returns during training",
      },
    ],

    procedures: [
      {
        name: "Functional Strength Testing",
        bestFor: "Post-ACL, PCL, shoulder, ankle injuries",
        involves: "Single-leg tests, hop tests, muscle symmetry assessment",
        recovery: "2–6 weeks depending on athlete condition",
        description:
          "Determines if the athlete has regained at least 90% strength and control needed for safe sports participation.",
      },
      {
        name: "Sport-Specific Simulations",
        bestFor: "Athletes returning to running, jumping, or contact sports",
        involves:
          "Agility, plyometrics, rapid direction change, acceleration drills",
        recovery: "Variable",
        description:
          "Mimics real-game movements to ensure the athlete can perform safely.",
      },
      {
        name: "Psychological Readiness Assessment",
        bestFor: "Post-injury fear or hesitation",
        involves: "Confidence scoring, fear-avoidance screening",
        recovery: "Continuous",
        description:
          "Ensures the athlete is mentally prepared to return to competition without fear.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Early RTP Evaluation",
        items: ["Strength analysis", "Balance tests", "Pain assessment"],
      },
      {
        phase: "Phase 2",
        title: "Controlled Training",
        items: [
          "Low-impact drills",
          "Mobility restoration",
          "Foundational strength building",
        ],
      },
      {
        phase: "Phase 3",
        title: "Advanced Sports Training",
        items: [
          "Agility and speed work",
          "Jump and pivot training",
          "High-intensity conditioning",
        ],
      },
      {
        phase: "Phase 4",
        title: "Performance Testing",
        items: [
          "Hop tests",
          "Endurance tests",
          "Sport-specific movement evaluation",
        ],
      },
      {
        phase: "Phase 5",
        title: "Clearance & Return",
        items: [
          "Final medical evaluation",
          "Strength symmetry check",
          "Gradual return to full competition",
        ],
      },
    ],

    highlights: {
      title: "Ready to return to sports after injury?",
      description:
        "A structured RTP protocol ensures you return stronger, safer, and without fear of reinjury.",
      button: "Start RTP Evaluation",
    },

    testimonials: [
      {
        name: "Rehan Ali",
        age: 23,
        quote:
          "Return-to-play guidance gave me the confidence to sprint and jump again after ACL surgery!",
        rating: 5,
      },
      {
        name: "Simran Kaur",
        age: 19,
        quote:
          "The testing was thorough and accurate. I felt fully prepared to return to basketball.",
        rating: 5,
      },
      {
        name: "Mahendra Singh",
        age: 28,
        quote:
          "RTP protocol ensured I didn’t rush back. Now I’m stronger and injury-free.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Why is return-to-play testing important?",
        answer:
          "It prevents athletes from returning too early, reducing reinjury risk significantly.",
      },
      {
        question: "When can I return to sports after injury?",
        answer:
          "Depends on injury type—ACL: 6–9 months, meniscus: 3–4 months, ankle sprain: 4–6 weeks.",
      },
      {
        question: "Is RTP required after surgery?",
        answer:
          "Yes, it ensures full strength, coordination, and mental readiness.",
      },
      {
        question: "What if I skip RTP testing?",
        answer:
          "Skipping RTP increases your chances of re-injury by 3–5 times.",
      },
      {
        question: "Does RTP differ for each sport?",
        answer:
          "Yes. Football, cricket, basketball, running, and combat sports require sport-specific evaluation.",
      },
    ],
  },

  //Open Reduction
  {
    title: "Open Reduction",
    icon: "/Images/treatment_icon_3.png",

    subtitle:
      "A surgical procedure used to realign broken bones when closed methods are not sufficient, restoring proper anatomical position for safe healing.",

    howItHelps:
      "Open Reduction allows the surgeon to directly visualize the fracture, realign bone fragments accurately, and prepare the site for stable fixation. This ensures proper bone healing, prevents deformity, and restores limb function.",

    whyDeteriorate:
      "Fractures fail to align naturally when bone pieces are displaced, rotated, or trapped in soft tissue. High-impact injuries, complex breaks, and delayed treatment may prevent natural healing without surgical correction.",

    benefits: [
      "Precise bone alignment",
      "Restores normal anatomy",
      "Prevents long-term deformity",
      "Improves healing success",
      "Reduces risk of arthritis later",
      "Essential for complex fractures",
      "Allows early mobilization with fixation",
    ],

    symptoms: [
      { title: "Severe deformity", description: "visible bone misalignment" },
      {
        title: "Inability to move limb",
        description: "movement causes sharp pain",
      },
      {
        title: "Rotated or shortened limb",
        description: "abnormal bone position",
      },
      {
        title: "Open wound fracture",
        description: "bone visible or skin broken",
      },
      { title: "Unstable fracture", description: "bone shifts on movement" },
    ],

    procedures: [
      {
        name: "Open Reduction with Internal Fixation (ORIF)",
        bestFor: "Displaced long bone fractures",
        involves: "Open incision, realignment, fixation using plates/screws",
        recovery: "8–12 weeks",
        description:
          "The most common method where bones are realigned and stabilized with implants.",
      },
      {
        name: "Open Reduction without Fixation",
        bestFor: "Fractures that can remain stable after alignment",
        involves: "Bone exposure and correction",
        recovery: "6–8 weeks",
        description:
          "Used rarely when fixation is not required, mainly in pediatric or simple fractures.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Initial Evaluation",
        items: ["X-rays", "CT scan if needed", "Neurovascular assessment"],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Anesthesia",
          "Bone exposure",
          "Alignment correction",
          "Fixation",
        ],
      },
      {
        phase: "Phase 3",
        title: "Week 1–3",
        items: ["Wound care", "Pain management", "Gentle limb movement"],
      },
      {
        phase: "Phase 4",
        title: "Week 4–8",
        items: ["Load-bearing training", "Strengthening exercises"],
      },
      {
        phase: "Phase 5",
        title: "2–6 Months",
        items: ["Full activity", "Bone strengthening", "Final healing"],
      },
    ],

    highlights: {
      title: "Have a severe or displaced fracture?",
      description:
        "Open Reduction restores bone alignment and prevents long-term disability.",
      button: "Consult Trauma Specialist",
    },

    testimonials: [
      {
        name: "Mukesh Yadav",
        age: 42,
        quote:
          "My leg fracture was badly displaced. After open reduction, I recovered fully and can walk normally again.",
        rating: 5,
      },
      {
        name: "Ritu Sharma",
        age: 29,
        quote:
          "The surgery helped restore my arm alignment perfectly. Very professional care.",
        rating: 5,
      },
      {
        name: "Harbhajan Singh",
        age: 55,
        quote:
          "Without this surgery, my bone would not have healed correctly. Excellent treatment!",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Why is open reduction needed?",
        answer:
          "It is required when bones are too displaced or unstable to heal naturally with closed methods.",
      },
      {
        question: "Is open reduction safe?",
        answer:
          "Yes. It is a standard trauma procedure with high success when performed by an experienced surgeon.",
      },
      {
        question: "How long is recovery?",
        answer:
          "Most patients recover in 8–12 weeks depending on fracture type.",
      },
      {
        question: "Will I have a scar?",
        answer: "A small surgical scar is expected, but it fades over time.",
      },
      {
        question: "Can the bone become weak after surgery?",
        answer:
          "No. Once healed, the bone becomes strong, especially with proper physiotherapy.",
      },
    ],
  },
  // Closed Reduction
  {
    title: "Closed Reduction",
    icon: "/Images/treatment_icon_12.png",

    subtitle:
      "A non-surgical procedure used to realign broken bones without making any incision. Ideal for stable or moderately displaced fractures.",

    howItHelps:
      "Closed Reduction restores proper bone alignment through external manipulation. It helps bones heal naturally, reduces pain, prevents deformity, and often avoids the need for surgery when the fracture is stable.",

    whyDeteriorate:
      "Fractures may shift or remain misaligned due to muscle pull, swelling, or impact force. If not corrected, bones may heal in the wrong position, causing deformity, chronic pain, or limited movement. Closed reduction corrects this early.",

    benefits: [
      "Non-surgical procedure",
      "No incision or scar",
      "Quick and effective alignment",
      "Faster recovery time",
      "Reduced pain after repositioning",
      "Lower complication risk than surgery",
      "Ideal for children and simple fractures",
    ],

    symptoms: [
      {
        title: "Visible bone displacement",
        description: "limb looks crooked or rotated",
      },
      {
        title: "Severe swelling",
        description: "after injury due to fractured bone movement",
      },
      {
        title: "Painful limb motion",
        description: "movement causes increased pain",
      },
      {
        title: "Shortened limb appearance",
        description: "bone not in correct length",
      },
      { title: "Limited movement", description: "due to misalignment or pain" },
    ],

    procedures: [
      {
        name: "Manual Closed Reduction",
        bestFor: "Stable fractures that can be aligned without surgery",
        involves: "Manipulating the limb externally to correct bone position",
        recovery: "4–8 weeks",
        description:
          "The most common technique where the surgeon gently realigns the fracture without incisions.",
      },
      {
        name: "Closed Reduction Under Anesthesia",
        bestFor: "Painful or complex fractures",
        involves: "Muscle relaxation using sedation for smooth realignment",
        recovery: "4–8 weeks",
        description:
          "Allows easier correction when pain or muscle tightness prevents manual reduction.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Initial Assessment",
        items: ["X-ray evaluation", "Pain control", "Fracture stability check"],
      },
      {
        phase: "Phase 2",
        title: "Closed Reduction Procedure",
        items: [
          "Sedation (if needed)",
          "Bone manipulation",
          "Post-reduction X-ray",
        ],
      },
      {
        phase: "Phase 3",
        title: "Immobilization",
        items: ["Plaster cast", "Splinting", "Limb elevation"],
      },
      {
        phase: "Phase 4",
        title: "Weeks 2–6",
        items: [
          "Regular X-rays",
          "Pain management",
          "Avoid weight-bearing (if needed)",
        ],
      },
      {
        phase: "Phase 5",
        title: "6–12 Weeks",
        items: ["Cast removal", "Physiotherapy", "Return to daily activities"],
      },
    ],

    highlights: {
      title: "Fracture but don’t want surgery?",
      description:
        "Closed Reduction may realign your bone safely without any incision or implants.",
      button: "Book Fracture Evaluation",
    },

    testimonials: [
      {
        name: "Aarav Sharma",
        age: 12,
        quote:
          "My wrist fracture healed perfectly with closed reduction. No surgery needed at all!",
        rating: 5,
      },
      {
        name: "Rakesh Jangid",
        age: 34,
        quote:
          "Immediate relief after the bone was realigned. The cast helped me recover fully.",
        rating: 5,
      },
      {
        name: "Nisha Rathore",
        age: 27,
        quote:
          "I was worried about surgery, but closed reduction fixed my fracture beautifully.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Does closed reduction hurt?",
        answer:
          "The procedure may be uncomfortable, but sedation or anesthesia is used to reduce pain.",
      },
      {
        question: "Is closed reduction safe?",
        answer:
          "Yes, it is a widely used, safe, non-surgical method for suitable fractures.",
      },
      {
        question: "Will the bone shift again?",
        answer:
          "Regular follow-up X-rays ensure that the bone stays aligned during healing.",
      },
      {
        question: "How long do I need to wear a cast?",
        answer:
          "Most patients need a cast for 4–6 weeks depending on the fracture.",
      },
      {
        question: "Do all fractures need surgery?",
        answer:
          "No. Many simple or stable fractures heal well with closed reduction and casting.",
      },
    ],
  },
  // Internal Fixation with Plates
  {
    title: "Internal Fixation with Plates",
    icon: "/Images/treatment_icon_16.png",

    subtitle:
      "A surgical procedure where metal plates and screws are used to stabilize broken bones, ensuring proper alignment and faster healing.",

    howItHelps:
      "Internal fixation with plates provides rigid stabilization of a fractured bone. The plate holds bone fragments in their correct position, allowing natural healing, early movement, reduced pain, and prevention of deformity or improper union.",

    whyDeteriorate:
      "Fractures may shift due to muscle pull, poor stability, severe displacement, or complex fracture patterns. Without fixation, the bone may not heal properly, leading to deformity, chronic pain, and limited mobility. Plates maintain perfect alignment throughout healing.",

    benefits: [
      "Extremely stable fixation",
      "Allows early movement and faster recovery",
      "Prevents bone displacement during healing",
      "Ideal for complex or multi-fragment fractures",
      "Restores normal bone shape and function",
      "Lower risk of malunion or non-union",
      "Suitable for upper and lower limb fractures",
    ],

    symptoms: [
      {
        title: "Severe bone displacement",
        description: "limb appears crooked or bent",
      },
      {
        title: "Inability to move limb",
        description: "due to instability or pain",
      },
      {
        title: "Severe swelling or bruising",
        description: "from fracture impact",
      },
      { title: "Grinding sensation", description: "bone fragments rubbing" },
      {
        title: "Visible deformity",
        description: "misaligned or shortened limb",
      },
      { title: "Unstable fracture", description: "movement causes sharp pain" },
    ],

    procedures: [
      {
        name: "Open Reduction and Internal Fixation (ORIF) with Plates",
        bestFor: "Severely displaced or multi-fragment fractures",
        involves: "Aligning bone fragments and fixing them with metal plates",
        recovery: "8–12 weeks",
        description:
          "Bone is exposed surgically, aligned properly, and stabilized using titanium or stainless steel plates and screws.",
      },
      {
        name: "Bridge Plating",
        bestFor: "Comminuted fractures (multiple small pieces)",
        involves: "Plate acts as a splint without touching bone fragments",
        recovery: "10–14 weeks",
        description:
          "Allows natural healing while maintaining structural stability without disturbing the fracture zone.",
      },
      {
        name: "Locked Plate Fixation",
        bestFor: "Osteoporotic bone or elderly patients",
        involves: "Plate screws lock into the plate for extra strength",
        recovery: "8–12 weeks",
        description:
          "Provides excellent support for weak or brittle bones, reducing risk of implant failure.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Pre-Surgical Evaluation",
        items: [
          "X-ray & CT scan",
          "Fracture mapping",
          "Pain control",
          "Surgical planning",
        ],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Anesthesia",
          "Exposure of fracture site",
          "Bone realignment",
          "Plate and screw fixation",
          "Post-fixation X-ray",
        ],
      },
      {
        phase: "Phase 3",
        title: "Week 1–2",
        items: ["Wound care", "Swelling control", "Gentle movement exercises"],
      },
      {
        phase: "Phase 4",
        title: "Weeks 3–8",
        items: ["Physiotherapy", "Strengthening", "Gradual weight-bearing"],
      },
      {
        phase: "Phase 5",
        title: "8–12 Weeks",
        items: [
          "Return to routine activities",
          "Bone healing confirmation via X-ray",
        ],
      },
    ],

    highlights: {
      title: "Need stable fixation for a severe fracture?",
      description:
        "Internal fixation with plates offers rigid support and quick recovery for complex fractures.",
      button: "Book Fracture Consultation",
    },

    testimonials: [
      {
        name: "Harshit Goyal",
        age: 29,
        quote:
          "My forearm fracture was fixed with plates. I regained full movement within weeks—excellent outcome!",
        rating: 5,
      },
      {
        name: "Neeraj Gupta",
        age: 42,
        quote:
          "The surgery was smooth, and the bone aligned perfectly. I could use my arm much earlier than expected.",
        rating: 5,
      },
      {
        name: "Shalini Rathod",
        age: 33,
        quote:
          "After a complex leg fracture, plating gave me stability and confidence during recovery.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Are plates permanent?",
        answer:
          "Plates can stay lifelong unless they cause irritation. Removal is optional and only needed in rare cases.",
      },
      {
        question: "When can I start moving the limb?",
        answer:
          "Most patients can begin gentle movement within a few days after surgery, depending on the fracture.",
      },
      {
        question: "Is plate fixation safe?",
        answer:
          "Yes, it is one of the most successful and reliable methods for stabilizing fractures.",
      },
      {
        question: "How long until the bone heals completely?",
        answer:
          "Typically 8–12 weeks, but healing varies based on age, bone quality, and fracture severity.",
      },
      {
        question: "Can plates break or loosen?",
        answer:
          "Rarely. Modern titanium/steel plates are extremely strong, but improper weight-bearing too early may cause issues.",
      },
    ],
  },
  // Internal Fixation with Nails
  {
    title: "Internal Fixation with Nails",
    icon: "/Images/treatment_icon_17.png",

    subtitle:
      "A surgical procedure where a strong metal rod (nail) is inserted inside the bone to stabilize long bone fractures such as femur, tibia, and humerus fractures.",

    howItHelps:
      "Intramedullary nailing stabilizes long bones from within the bone canal. It provides strong internal support, allows early walking, ensures proper alignment, reduces pain, and promotes faster bone healing with minimal soft tissue damage.",

    whyDeteriorate:
      "Long bone fractures become unstable due to muscle pull, trauma force, or bone displacement. Without internal support, the bone may heal incorrectly or not heal at all. Nails hold the bone firmly from the inside, ensuring correct alignment.",

    benefits: [
      "Very strong internal stabilization",
      "Early weight-bearing and faster walking ability",
      "Minimal soft tissue damage",
      "Ideal for femur, tibia, and humerus fractures",
      "Lower infection risk than open plating",
      "Excellent healing rates",
      "Suitable for high-energy trauma and sports injuries",
    ],

    symptoms: [
      {
        title: "Severe limb pain",
        description: "especially after leg or arm injury",
      },
      {
        title: "Inability to bear weight",
        description: "leg cannot support body weight",
      },
      {
        title: "Visible deformity",
        description: "limb appears bent or rotated",
      },
      { title: "Swelling & bruising", description: "due to internal bleeding" },
      {
        title: "Abnormal movement",
        description: "fractured bone moves unnaturally",
      },
    ],

    procedures: [
      {
        name: "Intramedullary Nailing (IM Nailing)",
        bestFor: "Femur, tibia, humerus, and long bone fractures",
        involves: "A metal nail inserted inside the bone canal",
        recovery: "6–12 weeks",
        description:
          "The most common and powerful fixation method for long bone fractures, offering quick recovery and excellent stability.",
      },
      {
        name: "Locked Intramedullary Nailing",
        bestFor: "Unstable or comminuted fractures",
        involves: "Nail locked with screws at both ends",
        recovery: "10–14 weeks",
        description:
          "Provides rigid support for fractures with multiple fragments and prevents rotation or shortening.",
      },
      {
        name: "Reamed & Unreamed Nailing",
        bestFor: "Trauma patients with different fracture patterns",
        involves: "Preparing or not preparing the canal before nail insertion",
        recovery: "6–12 weeks",
        description:
          "Chosen based on fracture type and patient condition to maximize healing and stability.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Pre-Surgical Assessment",
        items: [
          "X-rays / CT scan",
          "Fracture alignment assessment",
          "Pain control",
        ],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Anesthesia",
          "Small incision near knee/hip/shoulder",
          "Insertion of metal nail",
          "Locking screws placement",
          "Final alignment X-ray",
        ],
      },
      {
        phase: "Phase 3",
        title: "Week 1–2",
        items: ["Swelling reduction", "Gentle physiotherapy", "Limb elevation"],
      },
      {
        phase: "Phase 4",
        title: "Weeks 3–8",
        items: [
          "Walking training",
          "Strengthening exercises",
          "Gradual weight-bearing",
        ],
      },
      {
        phase: "Phase 5",
        title: "8–12 Weeks",
        items: ["Bone union confirmed", "Return to routine activity"],
      },
    ],

    highlights: {
      title: "Fracture requiring strong internal support?",
      description:
        "Intramedullary nailing is the preferred treatment for long bone fractures with excellent healing results.",
      button: "Book Trauma Consultation",
    },

    testimonials: [
      {
        name: "Deepak Saini",
        age: 30,
        quote:
          "My femur fracture healed extremely well after IM nailing. I was able to walk much sooner than expected!",
        rating: 5,
      },
      {
        name: "Asha Kumari",
        age: 52,
        quote:
          "The surgery was quick, and the recovery was smooth. My leg feels strong and stable now.",
        rating: 5,
      },
      {
        name: "Farhan Khan",
        age: 25,
        quote:
          "After a sports injury, IM nailing helped me return to training with full confidence.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Is intramedullary nailing painful?",
        answer:
          "Some discomfort occurs initially, but pain reduces significantly within a few days of surgery.",
      },
      {
        question: "When can I start walking after nailing?",
        answer:
          "Most patients begin partial weight-bearing within days and full walking in a few weeks based on healing.",
      },
      {
        question: "Are nails permanent?",
        answer:
          "They can stay permanently unless they cause irritation. Removal is optional and only needed in rare cases.",
      },
      {
        question: "How long does bone healing take?",
        answer:
          "Most long bones heal in 8–12 weeks, depending on fracture type and patient health.",
      },
      {
        question: "Is intramedullary nailing safe?",
        answer:
          "Yes, it is one of the safest and most effective fixation methods, widely used globally for long bone fractures.",
      },
    ],
  },
  // Internal Fixation with Screws
  {
    title: "Internal Fixation with Screws",
    icon: "/Images/treatment_icon_15.png",

    subtitle:
      "A precise orthopedic procedure where specialized metal screws are used to stabilize fractures, fix bone fragments, and restore natural alignment.",

    howItHelps:
      "Internal fixation with screws provides strong, targeted stabilization for fractures. Screws hold bone fragments tightly in place, allowing proper healing, restoring joint integrity, and enabling early movement without deformity.",

    whyDeteriorate:
      "Fractures may shift due to muscle tension, trauma force, or instability. Without fixation, bone fragments may heal in the wrong position, causing chronic pain, deformity, and limited joint movement. Screws prevent fragment movement during healing.",

    benefits: [
      "Highly precise bone stabilization",
      "Minimal soft tissue damage",
      "Promotes faster bone healing",
      "Ideal for small bone and joint fractures",
      "Allows early mobility",
      "Reduces risk of malunion or non-union",
      "Suitable for hand, foot, ankle, wrist, hip, and spine fractures",
    ],

    symptoms: [
      {
        title: "Localized severe pain",
        description: "especially over the injured bone",
      },
      {
        title: "Swelling or bruising",
        description: "around the fracture site",
      },
      {
        title: "Joint instability",
        description: "movement feels loose or unstable",
      },
      { title: "Restricted movement", description: "unable to move normally" },
      { title: "Visible deformity", description: "bone appears misaligned" },
    ],

    procedures: [
      {
        name: "Cancellous Screw Fixation",
        bestFor: "Soft, spongy bone fractures (hip, wrist, ankle)",
        involves: "Large-thread screws for better grip",
        recovery: "6–10 weeks",
        description:
          "Provides strong fixation in areas with softer bone, ensuring stable healing.",
      },
      {
        name: "Cortical Screw Fixation",
        bestFor: "Hard, dense bone fractures",
        involves: "Fine-thread screws for rigid stabilization",
        recovery: "8–12 weeks",
        description:
          "Used for diaphyseal (shaft) fractures requiring high stability.",
      },
      {
        name: "Lag Screw Fixation",
        bestFor: "Fractures where compression is needed",
        involves: "Tightens bone fragments together using compression",
        recovery: "6–10 weeks",
        description:
          "Essential for joint fractures to prevent post-traumatic arthritis.",
      },
      {
        name: "Screw + Plate Combination",
        bestFor: "Complex fractures",
        involves: "Screws used to secure plates for added strength",
        recovery: "8–14 weeks",
        description:
          "Enhances fixation strength for unstable or multi-fragment fractures.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Pre-Surgery Evaluation",
        items: [
          "X-rays",
          "CT scan (if needed)",
          "Pain control",
          "Surgery planning",
        ],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Anesthesia",
          "Precise screw insertion",
          "Alignment check",
          "Post-op imaging",
        ],
      },
      {
        phase: "Phase 3",
        title: "Week 1–2",
        items: ["Wound care", "Pain management", "Gentle movement"],
      },
      {
        phase: "Phase 4",
        title: "Weeks 3–6",
        items: ["Physiotherapy", "Strength restoration", "Gradual movement"],
      },
      {
        phase: "Phase 5",
        title: "6–12 Weeks",
        items: ["Bone healing confirmation", "Return to daily activity"],
      },
    ],

    highlights: {
      title: "Need precise stabilization for a fracture?",
      description:
        "Internal fixation with screws offers strong, targeted support for excellent healing outcomes.",
      button: "Book Fracture Consultation",
    },

    testimonials: [
      {
        name: "Meena Rajpurohit",
        age: 48,
        quote:
          "My ankle fracture healed very well with screw fixation. I could walk comfortably much earlier than expected!",
        rating: 5,
      },
      {
        name: "Jagdish Solanki",
        age: 36,
        quote:
          "The screw fixation was precise and painless. Full movement returned in a few weeks.",
        rating: 5,
      },
      {
        name: "Ritvik Chouhan",
        age: 22,
        quote:
          "After a wrist fracture, screw fixation helped me return to sports quickly and safely!",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Are screws permanent?",
        answer:
          "Yes, they can remain permanently unless they cause irritation. Removal is only needed in rare cases.",
      },
      {
        question: "Is screw fixation safe?",
        answer:
          "It is a very safe and commonly used orthopedic procedure with excellent success rates.",
      },
      {
        question: "How long before I can move the joint?",
        answer:
          "Most patients start gentle movement within a few days depending on fracture stability.",
      },
      {
        question: "Will the screws cause pain later?",
        answer:
          "No. Most patients do not feel screws at all once healing is complete.",
      },
      {
        question: "How long does complete healing take?",
        answer:
          "Typically 6–12 weeks depending on the bone involved and patient health.",
      },
    ],
  },
  //Pediatric Fracture Management
  {
    title: "Pediatric Fracture Management",
    icon: "/Images/treatment_icon_23.png",

    subtitle:
      "Specialized care for bone fractures in children, using minimally invasive and child-friendly techniques to ensure correct growth, alignment, and fast recovery.",

    howItHelps:
      "Children's bones heal differently than adults—they are softer, grow rapidly, and can remodel over time. Pediatric fracture management focuses on precise alignment, minimal intervention, growth plate protection, and ensuring normal limb development.",

    whyDeteriorate:
      "Children's fractures may worsen due to active movements, unstable fracture patterns, growth plate involvement, or inadequate immobilization. Untreated misalignment can affect bone growth, causing deformity, gait issues, or restricted movement.",

    benefits: [
      "Child-friendly, minimally invasive treatments",
      "Faster bone healing than adults",
      "Protection of growth plates (physes)",
      "Better natural remodeling of bones",
      "Reduced hospital stay",
      "Safer sedation and immobilization techniques",
      "High recovery success rate",
    ],

    symptoms: [
      { title: "Pain and swelling", description: "after a fall or injury" },
      {
        title: "Difficulty moving limb",
        description: "child avoids using the affected arm/leg",
      },
      { title: "Visible deformity", description: "bent or crooked appearance" },
      { title: "Tenderness", description: "child cries when area is touched" },
      {
        title: "Reduced mobility",
        description: "limping or unwillingness to walk",
      },
      { title: "Bruising", description: "around affected bone" },
    ],

    procedures: [
      {
        name: "Closed Reduction & Casting",
        bestFor: "Most simple or moderately displaced fractures",
        involves: "Realigning bone without surgery and applying a plaster cast",
        recovery: "3–6 weeks",
        description:
          "Most children heal well with casting due to strong bone remodeling ability.",
      },
      {
        name: "Elastic Intramedullary Nailing (TENS / ESIN)",
        bestFor: "Long bone fractures (femur, tibia, forearm)",
        involves: "Flexible titanium nails inserted inside the bone",
        recovery: "6–10 weeks",
        description:
          "Minimally invasive technique widely used for pediatric fractures requiring surgery.",
      },
      {
        name: "Growth Plate (Physeal) Fracture Management",
        bestFor: "Fractures involving growth plates",
        involves: "Precise alignment and gentle fixation",
        recovery: "4–8 weeks",
        description:
          "Ensures the growth plate heals properly to avoid future deformities.",
      },
      {
        name: "K-Wire Fixation",
        bestFor: "Elbow, wrist, or hand fractures",
        involves: "Thin wires inserted to stabilize bones",
        recovery: "3–6 weeks",
        description:
          "A minimally invasive method for quick stabilization and early recovery.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Initial Evaluation",
        items: ["Pain assessment", "X-ray imaging", "Growth plate examination"],
      },
      {
        phase: "Phase 2",
        title: "Treatment Selection",
        items: ["Casting", "Reduction", "K-wires or nails if needed"],
      },
      {
        phase: "Phase 3",
        title: "Weeks 1–2",
        items: ["Pain control", "Swelling reduction", "Activity restriction"],
      },
      {
        phase: "Phase 4",
        title: "Weeks 3–6",
        items: [
          "Cast maintenance",
          "Follow-up X-rays",
          "Bone alignment monitoring",
        ],
      },
      {
        phase: "Phase 5",
        title: "6–12 Weeks",
        items: ["Cast removal", "Physiotherapy (if needed)", "Return to play"],
      },
    ],

    highlights: {
      title: "Worried about your child’s fracture?",
      description:
        "Children heal quickly with the right treatment. Early care ensures normal growth and long-term bone health.",
      button: "Book Pediatric Ortho Consultation",
    },

    testimonials: [
      {
        name: "Reyansh Sharma",
        age: 8,
        quote:
          "My son’s arm fracture healed perfectly with a cast. The doctor made the whole process very comforting.",
        rating: 5,
      },
      {
        name: "Pooja Chouhan",
        age: 12,
        quote:
          "I recovered quickly after my leg fracture. The treatment was smooth and painless!",
        rating: 5,
      },
      {
        name: "Aarohi Patel",
        age: 6,
        quote:
          "Her wrist fracture was treated gently. She was back to playing within weeks!",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Do children heal faster than adults?",
        answer:
          "Yes, children have strong bone remodeling ability, resulting in quicker and more reliable healing.",
      },
      {
        question: "Are growth plate fractures serious?",
        answer:
          "They can be. Proper treatment is essential to avoid future deformities or limb length differences.",
      },
      {
        question: "Will my child need surgery?",
        answer:
          "Most fractures heal with casting alone. Surgery is needed only for unstable or displaced fractures.",
      },
      {
        question: "When can kids return to sports?",
        answer:
          "Most children return to normal activities in 4–8 weeks, depending on the fracture type.",
      },
      {
        question: "Are metal nails or wires removed later?",
        answer:
          "Yes, TENS nails and K-wires are usually removed after healing, often with a minor procedure.",
      },
    ],
  },
  //Geriatric Fracture Management
  {
    title: "Geriatric Fracture Management",
    icon: "/Images/treatment_icon_22.png",

    subtitle:
      "Specialized treatment for fractures in elderly patients, focusing on early mobility, safe stabilization, and preventing long-term complications.",

    howItHelps:
      "Geriatric fracture management ensures safe and effective healing for elderly patients whose bones are often weak due to osteoporosis. Treatment focuses on rapid stabilization, early walking, preventing complications like bed sores or pneumonia, and restoring independence.",

    whyDeteriorate:
      "Elderly bones are brittle due to osteoporosis and reduced calcium absorption. Minor falls can cause serious fractures. Without proper treatment, fractures may heal poorly, lead to immobility, joint stiffness, blood clots, infections, or long-term disability.",

    benefits: [
      "Early mobilization to prevent complications",
      "Tailored surgical and non-surgical options",
      "Special care for osteoporosis-related fractures",
      "Faster pain relief and functional recovery",
      "Lower risk of pneumonia, bed sores, and clots",
      "Improved long-term independence",
      "Bone health optimization for future fracture prevention",
    ],

    symptoms: [
      { title: "Sudden severe pain", description: "after even minor falls" },
      {
        title: "Inability to bear weight",
        description: "hip or leg pain prevents walking",
      },
      { title: "Swelling or bruising", description: "around the injury site" },
      { title: "Deformity", description: "limb appears rotated or shortened" },
      {
        title: "Reduced mobility",
        description: "difficulty standing or moving",
      },
      {
        title: "Fragility fractures",
        description: "fractures from routine daily activities",
      },
    ],

    procedures: [
      {
        name: "Hip Fracture Fixation / Replacement",
        bestFor:
          "Neck of femur, intertrochanteric, or subtrochanteric fractures",
        involves:
          "Fixation with screws/plates or partial/total hip replacement",
        recovery: "6–12 weeks",
        description:
          "Early surgery allows elderly patients to stand and walk sooner, preventing complications.",
      },
      {
        name: "Intramedullary Nailing for Long Bones",
        bestFor: "Femur, tibia, and humerus fractures",
        involves: "Strong internal nail to stabilize weak bones",
        recovery: "8–12 weeks",
        description:
          "Ideal for osteoporotic bone due to high strength and stability.",
      },
      {
        name: "Vertebral Compression Fracture Treatment",
        bestFor: "Spinal fractures due to osteoporosis",
        involves:
          "Bracing, medication, or minimally invasive vertebroplasty/kyphoplasty",
        recovery: "4–8 weeks",
        description: "Restores spine alignment and reduces severe back pain.",
      },
      {
        name: "Wrist & Ankle Fracture Management",
        bestFor: "Fragility fractures of the upper and lower limb",
        involves: "Casting, plating, or ligament repair depending on severity",
        recovery: "4–8 weeks",
        description: "Optimized for bone quality and functional independence.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Emergency Assessment",
        items: ["Pain control", "X-ray / CT scan", "Fall risk evaluation"],
      },
      {
        phase: "Phase 2",
        title: "Stabilization & Treatment",
        items: [
          "Surgery or casting",
          "Osteoporosis assessment",
          "Walking aid support",
        ],
      },
      {
        phase: "Phase 3",
        title: "Week 1–2",
        items: [
          "Early mobilization",
          "Prevent pressure sores",
          "Breathing exercises",
        ],
      },
      {
        phase: "Phase 4",
        title: "Weeks 3–6",
        items: [
          "Strength training",
          "Balance exercises",
          "Nutritional support",
        ],
      },
      {
        phase: "Phase 5",
        title: "6–12 Weeks",
        items: [
          "Return to daily activities",
          "Fall prevention training",
          "Bone health maintenance",
        ],
      },
    ],

    highlights: {
      title: "Caring for an elderly patient with a fracture?",
      description:
        "Timely treatment and safe mobilization reduce complications and restore independence effectively.",
      button: "Get Elderly Fracture Care",
    },

    testimonials: [
      {
        name: "Shobha Devi",
        age: 72,
        quote:
          "After my hip fracture, I was able to stand the next day. The care and recovery plan were excellent!",
        rating: 5,
      },
      {
        name: "Gopal Meena",
        age: 68,
        quote:
          "My wrist fracture healed well without complications. Very gentle and expert care for elderly patients.",
        rating: 5,
      },
      {
        name: "Kiran Joshi",
        age: 75,
        quote:
          "Post-surgery rehab helped me walk confidently again. Highly recommended for senior fracture treatment.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Do elderly patients heal slower?",
        answer:
          "Healing may take slightly longer due to weaker bones, but proper stabilization and nutrition support help greatly.",
      },
      {
        question: "Is surgery safe for senior citizens?",
        answer:
          "Yes. Modern anesthesia, minimally invasive techniques, and early mobilization make surgery safe and effective.",
      },
      {
        question: "Why is early mobilization important?",
        answer:
          "It prevents pneumonia, pressure sores, blood clots, muscle loss, and improves overall survival.",
      },
      {
        question: "Can osteoporosis be treated?",
        answer:
          "Yes. Vitamin D, calcium, medications, and weight-bearing exercises help improve bone strength.",
      },
      {
        question: "When can elderly patients return to daily activities?",
        answer:
          "Most regain basic mobility within 4–8 weeks, depending on fracture type and treatment.",
      },
    ],
  },
  // Complex Polytrauma Surgery
  {
    title: "Complex Polytrauma",
    icon: "/Images/treatment_icon_18.png",

    subtitle:
      "Advanced surgical management for patients with multiple severe injuries, ensuring life-saving stabilization, coordinated fracture care, and rapid functional recovery.",

    howItHelps:
      "Polytrauma care focuses on saving life first, then restoring function. It uses a coordinated, multi-specialty approach to stabilize fractures, control bleeding, protect vital organs, and ensure safe recovery. Surgical treatment prioritizes survival, early mobilization, and long-term rehabilitation.",

    whyDeteriorate:
      "High-impact accidents often cause multiple fractures, internal bleeding, nerve injuries, and organ damage. Without rapid and coordinated treatment, complications such as shock, infection, disability, or organ failure can occur. Polytrauma surgery prevents life-threatening deterioration.",

    benefits: [
      "Life-saving emergency intervention",
      "Multiple fractures stabilized in one treatment plan",
      "Reduces risk of organ failure and shock",
      "Faster recovery through damage-control surgery",
      "Early mobilization to prevent complications",
      "Comprehensive rehabilitation support",
      "Coordinated care from orthopedic, trauma, and critical care teams",
    ],

    symptoms: [
      {
        title: "Severe pain in multiple areas",
        description: "after high-impact trauma",
      },
      {
        title: "Bleeding or open wounds",
        description: "external or internal bleeding signs",
      },
      {
        title: "Difficulty breathing",
        description: "possible chest injury or shock",
      },
      {
        title: "Inability to move limbs",
        description: "multiple fractures or nerve injury",
      },
      { title: "Loss of consciousness", description: "head injury or shock" },
      {
        title: "Visible deformity",
        description: "fractures in multiple limbs",
      },
    ],

    procedures: [
      {
        name: "Damage Control Orthopedics (DCO)",
        bestFor: "Unstable patients with life-threatening injuries",
        involves: "Temporary stabilization using external fixators",
        recovery: "Varies depending on injury severity",
        description:
          "Prioritizes life-saving care first, then definitive fracture fixation once the patient is stable.",
      },
      {
        name: "Definitive Fracture Fixation",
        bestFor: "Stable polytrauma patients",
        involves: "Plating, nailing, or screw fixation of multiple fractures",
        recovery: "8–14 weeks",
        description:
          "Reconstruction of fractures to restore limb alignment and function.",
      },
      {
        name: "Soft Tissue & Wound Management",
        bestFor: "Open fractures or tissue loss",
        involves: "Debridement, suturing, grafts, or flap coverage",
        recovery: "4–12 weeks",
        description:
          "Prevents infection and helps healing of open or contaminated wounds.",
      },
      {
        name: "Critical Care & Organ Support",
        bestFor: "Patients with head, chest, or abdominal trauma",
        involves: "Monitoring, ventilation, transfusions, and ICU care",
        recovery: "Variable",
        description:
          "Ensures patient stability and survival while bone injuries are managed.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Initial Golden Hour Management",
        items: [
          "Airway, breathing, circulation stabilization",
          "Bleeding control",
          "Rapid X-rays and CT scan",
        ],
      },
      {
        phase: "Phase 2",
        title: "Damage Control Surgery",
        items: [
          "External fixators",
          "Wound cleaning",
          "Temporary stabilization",
          "ICU monitoring",
        ],
      },
      {
        phase: "Phase 3",
        title: "Definitive Surgery (Day 2–7)",
        items: [
          "Internal fixation of fractures",
          "Soft tissue reconstruction",
          "Organ repair if needed",
        ],
      },
      {
        phase: "Phase 4",
        title: "Weeks 1–6",
        items: [
          "Pain management",
          "Early physiotherapy",
          "Prevention of complications",
        ],
      },
      {
        phase: "Phase 5",
        title: "6–24 Weeks",
        items: [
          "Strength building",
          "Gait training",
          "Return to daily activities",
        ],
      },
    ],

    highlights: {
      title: "Suffered multiple injuries in an accident?",
      description:
        "Expert polytrauma care ensures survival, safe fracture healing, and long-term recovery.",
      button: "Get Emergency Trauma Care",
    },

    testimonials: [
      {
        name: "Nitin Yadav",
        age: 35,
        quote:
          "After a severe road accident, I had fractures in both legs. The coordinated trauma care saved my life and restored my mobility.",
        rating: 5,
      },
      {
        name: "Jyoti Prajapat",
        age: 28,
        quote:
          "I had multiple injuries after a fall. The team stabilized me quickly and managed all fractures perfectly.",
        rating: 5,
      },
      {
        name: "Rohit Chauhan",
        age: 40,
        quote:
          "The polytrauma team handled my chest injury and limb fractures with great expertise. I am walking again today thanks to them.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "What is polytrauma?",
        answer:
          "Polytrauma refers to multiple severe injuries affecting various parts of the body, often requiring life-saving treatment.",
      },
      {
        question: "Why is damage control surgery important?",
        answer:
          "It stabilizes the patient quickly, preventing shock and organ failure before performing major surgeries.",
      },
      {
        question: "How long does recovery take?",
        answer:
          "Recovery varies depending on injury severity—from weeks to several months.",
      },
      {
        question: "Are multiple surgeries common?",
        answer:
          "Yes, polytrauma patients often need staged surgeries to stabilize fractures and soft tissues.",
      },
      {
        question: "Can polytrauma patients return to normal life?",
        answer:
          "With proper surgery, rehab, and follow-up, many patients regain independence and mobility.",
      },
    ],
  },
  // Non-Healing Fracture Treatment
  {
    title: "Non-Healing Fracture",
    icon: "/Images/treatment_icon_19.png",

    subtitle:
      "Advanced treatment for fractures that fail to heal on time, using modern biological and surgical techniques to restore proper bone union and function.",

    howItHelps:
      "Non-healing fractures occur when the bone stops progressing toward recovery. Treatment restores stability, stimulates bone healing, corrects alignment issues, and eliminates chronic pain. Advanced techniques like bone grafting, re-fixation, and biological enhancers help the bone unite naturally.",

    whyDeteriorate:
      "Fractures may fail to heal due to poor blood supply, infection, instability, smoking, diabetes, severe bone loss, or improper fixation. When the bone stops healing, it causes persistent pain, swelling, and disability, requiring specialized intervention.",

    benefits: [
      "Restores bone union and stability",
      "Eliminates chronic pain",
      "Corrects deformity from improper healing",
      "Allows return to daily activity",
      "Uses advanced biological boosters",
      "High success rate with modern orthopedic techniques",
      "Improves long-term limb function",
    ],

    symptoms: [
      {
        title: "Persistent pain",
        description: "pain continues months after fracture",
      },
      {
        title: "Movement at fracture site",
        description: "bone feels unstable",
      },
      { title: "No improvement on X-ray", description: "visible gap in bone" },
      {
        title: "Swelling",
        description: "long-term inflammation around fracture",
      },
      {
        title: "Difficulty bearing weight",
        description: "leg feels weak or unstable",
      },
      { title: "Deformity", description: "bone alignment appears abnormal" },
    ],

    procedures: [
      {
        name: "Revision Fixation",
        bestFor: "Fractures treated previously but still unstable",
        involves: "Replacing or upgrading previous plates, screws, or nails",
        recovery: "8–14 weeks",
        description:
          "Provides stable fixation to support proper healing in previously failed fractures.",
      },
      {
        name: "Bone Grafting (Autograft / Allograft)",
        bestFor: "Bone gaps or poor healing",
        involves: "Bone tissue transplanted to stimulate healing",
        recovery: "8–16 weeks",
        description:
          "Gold standard treatment to enhance healing in non-union cases.",
      },
      {
        name: "Biological Enhancers (PRP, BMP, Stem Cells)",
        bestFor: "Delayed healing or biologically weak fractures",
        involves: "Injectable growth stimulators at fracture site",
        recovery: "6–12 weeks",
        description: "Boosts natural healing and bone regeneration.",
      },
      {
        name: "Intramedullary Nailing Revision",
        bestFor: "Long bone non-unions",
        involves: "Stronger nailing technique with reaming",
        recovery: "8–14 weeks",
        description:
          "Improves blood flow and stability, promoting solid union.",
      },
      {
        name: "External Fixation (Ilizarov Technique)",
        bestFor: "Complex non-unions or deformity correction",
        involves: "Circular frame providing strong external support",
        recovery: "12–24 weeks",
        description:
          "Allows alignment correction, bone transport, and stimulation for stubborn non-unions.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Initial Evaluation",
        items: [
          "X-ray or CT scan",
          "Blood tests for infection",
          "Assessment of bone stability",
        ],
      },
      {
        phase: "Phase 2",
        title: "Treatment Planning",
        items: [
          "Identify cause of non-union",
          "Choose fixation or biological treatment",
          "Prepare for surgery if needed",
        ],
      },
      {
        phase: "Phase 3",
        title: "Definitive Procedure",
        items: [
          "Revision fixation or bone grafting",
          "Biological enhancer application",
          "Realignment of fracture",
        ],
      },
      {
        phase: "Phase 4",
        title: "Weeks 2–6",
        items: [
          "Pain relief",
          "Swelling reduction",
          "Initial mobility exercises",
        ],
      },
      {
        phase: "Phase 5",
        title: "6–16 Weeks",
        items: [
          "Bone healing monitoring",
          "Strengthening exercises",
          "Gradual weight-bearing",
        ],
      },
    ],

    highlights: {
      title: "Fracture not healing even after months?",
      description:
        "Modern revision techniques and biological boosters can help your bone unite successfully.",
      button: "Consult for Non-Healing Fracture",
    },

    testimonials: [
      {
        name: "Mahendra Yadav",
        age: 45,
        quote:
          "My leg fracture was not healing for months. After revision surgery and bone grafting, it finally healed. I can walk normally now!",
        rating: 5,
      },
      {
        name: "Renu Sharma",
        age: 38,
        quote:
          "I suffered from non-union after an accident. The Ilizarov technique worked wonders for my recovery.",
        rating: 5,
      },
      {
        name: "Aakash Malhotra",
        age: 29,
        quote:
          "PRP and revision fixation helped my arm fracture heal perfectly. Highly recommended!",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Why do some fractures not heal?",
        answer:
          "Causes include infection, poor blood supply, smoking, unstable fixation, diabetes, and bone loss.",
      },
      {
        question: "Is non-union serious?",
        answer:
          "Yes. If untreated, it leads to long-term pain, deformity, and disability.",
      },
      {
        question: "Do all non-healing fractures require surgery?",
        answer:
          "Not always. Some are treated with biological enhancers, but many require surgical stabilization.",
      },
      {
        question: "How long after fracture can we detect non-union?",
        answer:
          "Most non-unions are identified after 3–6 months if there is no healing progress.",
      },
      {
        question: "Is bone grafting safe?",
        answer:
          "Yes. It is a common, highly successful method to stimulate bone healing.",
      },
    ],
  },

  // Fracture Revision Surgery
  {
    title: "Fracture Revision",
    icon: "/Images/treatment_icon_20.png",

    subtitle:
      "A specialized procedure performed when previous fracture surgery fails due to improper healing, implant failure, infection, or bone misalignment. Revision surgery restores stability, corrects deformity, and ensures proper bone union.",

    howItHelps:
      "Revision surgery removes failed implants, corrects alignment issues, stabilizes the bone with stronger fixation, and uses biological techniques like bone grafts to stimulate healing. It provides pain relief, restores limb function, and ensures long-term bone stability.",

    whyDeteriorate:
      "Fracture fixation fails when the bone receives inadequate stability, poor blood supply, infection, or improper implant placement. Conditions like diabetes, smoking, and severe fractures also increase the risk of failed healing, leading to the need for revision surgery.",

    benefits: [
      "Corrects deformity from failed surgery",
      "Restores alignment and stability",
      "Eliminates chronic pain caused by implant failure",
      "Promotes proper bone healing",
      "Stronger fixation using advanced implants",
      "High success rate with modern revision techniques",
      "Improves mobility and functional outcome",
    ],

    symptoms: [
      {
        title: "Persistent pain",
        description: "pain continues after months of initial surgery",
      },
      {
        title: "Implant failure",
        description: "plate or screw loosening, breakage, or migration",
      },
      {
        title: "Delayed or non-union",
        description: "fracture not healing as expected",
      },
      {
        title: "Deformity",
        description: "abnormal bone angulation or rotation",
      },
      { title: "Instability", description: "movement at fracture site" },
      { title: "Infection signs", description: "redness, discharge, fever" },
    ],

    procedures: [
      {
        name: "Implant Removal & Replacement",
        bestFor: "Loose, broken, or improperly placed implants",
        involves:
          "Removing failed hardware and replacing with stronger fixation",
        recovery: "8–12 weeks",
        description:
          "Ensures fresh stability and correct alignment for proper healing.",
      },
      {
        name: "Corrective Osteotomy",
        bestFor: "Deformity or malalignment after initial surgery",
        involves: "Cutting and realigning the bone",
        recovery: "10–14 weeks",
        description:
          "Restores natural bone shape, function, and proper weight-bearing.",
      },
      {
        name: "Revision Plating or Nailing",
        bestFor: "Unstable fractures or failed fixation",
        involves:
          "Upgrading to stronger plates, screws, or intramedullary nails",
        recovery: "8–14 weeks",
        description:
          "Provides improved stability and compression for better healing.",
      },
      {
        name: "Bone Grafting",
        bestFor: "Bone loss or non-union cases",
        involves: "Adding bone graft or synthetic substitutes",
        recovery: "8–16 weeks",
        description: "Stimulates new bone formation and fills bone gaps.",
      },
      {
        name: "Infection Debridement & Fixation",
        bestFor: "Infected fracture sites",
        involves: "Removing infected tissue and stabilizing bone again",
        recovery: "10–16 weeks",
        description:
          "Stops infection and restores healthy conditions for bone union.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Evaluation & Diagnosis",
        items: [
          "X-ray / CT scan",
          "Blood tests for infection",
          "Assessment of implant stability",
          "Identifying cause of failed healing",
        ],
      },
      {
        phase: "Phase 2",
        title: "Treatment Planning",
        items: [
          "Choosing revision hardware",
          "Deciding grafting requirement",
          "Planning deformity correction if needed",
        ],
      },
      {
        phase: "Phase 3",
        title: "Revision Surgery",
        items: [
          "Removal of failed implants",
          "Bone realignment",
          "New fixation placement",
          "Bone grafting if required",
        ],
      },
      {
        phase: "Phase 4",
        title: "Weeks 2–6",
        items: [
          "Pain reduction",
          "Controlled physiotherapy",
          "Swelling management",
          "Early mobilization",
        ],
      },
      {
        phase: "Phase 5",
        title: "6–16 Weeks",
        items: [
          "Progressive strengthening",
          "Bone healing monitoring with X-rays",
          "Gradual weight-bearing",
          "Full functional recovery",
        ],
      },
    ],

    highlights: {
      title: "Previous fracture surgery failed?",
      description:
        "Revision surgery corrects failed fixation and restores proper healing with advanced methods.",
      button: "Book Revision Surgery Consultation",
    },

    testimonials: [
      {
        name: "Harish Choudhary",
        age: 52,
        quote:
          "My previous plate broke, and the bone wasn’t healing. Revision surgery fixed everything. I can walk without pain now!",
        rating: 5,
      },
      {
        name: "Savita Meena",
        age: 40,
        quote:
          "I had a non-union for 8 months after my accident. Revision plating with bone grafting helped me recover completely.",
        rating: 5,
      },
      {
        name: "Anil Rathore",
        age: 34,
        quote:
          "The deformity from my earlier surgery was corrected perfectly. I regained full mobility after revision surgery.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "When is fracture revision surgery needed?",
        answer:
          "When the initial surgery fails due to implant issues, infection, non-union, or bone deformity.",
      },
      {
        question: "Is revision surgery more complex?",
        answer:
          "Yes, it requires specialized planning and expertise, but success rates are high with modern techniques.",
      },
      {
        question: "How long is recovery after revision surgery?",
        answer:
          "Most patients recover within 8–16 weeks depending on fracture severity and procedure.",
      },
      {
        question: "Can failed implants be safely removed?",
        answer:
          "Yes, removal and replacement with stronger fixation is commonly performed and safe.",
      },
      {
        question: "Does revision surgery guarantee healing?",
        answer:
          "While no surgery can guarantee 100%, modern revision techniques have over 90% success rates.",
      },
    ],
  },

  // Recurrent Shoulder Dislocation
  {
    title: "Recurrent Shoulder Dislocation",
    icon: "/Images/treatment_icon_22.png",

    subtitle:
      "Advanced treatment for repeated shoulder dislocations, restoring stability, strength, and confidence in daily and sports activities.",

    howItHelps:
      "Recurrent shoulder dislocation happens when the joint becomes loose and slips out repeatedly. Treatment strengthens and stabilizes the shoulder through arthroscopic or open procedures, repairing torn ligaments and restoring normal movement.",

    whyDeteriorate:
      "The shoulder joint becomes unstable when the ligaments, labrum, or capsule is torn due to injury or repeated dislocations. Each episode stretches tissues further, making the joint weaker and more likely to slip out again.",

    benefits: [
      "Restores shoulder stability",
      "Prevents repeated dislocations",
      "Improves strength and arm function",
      "Reduces pain and fear of movement",
      "Arthroscopic options with quick recovery",
      "Prevents long-term arthritis risk",
      "Safe return to sports and gym activities",
    ],

    symptoms: [
      {
        title: "Shoulder slipping out",
        description: "joint dislocates with minor activity",
      },
      { title: "Clicking or popping", description: "sounds during movement" },
      { title: "Weakness", description: "difficulty lifting or rotating arm" },
      {
        title: "Pain after overhead activity",
        description: "throwing or lifting",
      },
      {
        title: "Apprehension",
        description: "fear of shoulder slipping during movement",
      },
      {
        title: "Instability",
        description: "feeling of looseness in shoulder joint",
      },
    ],

    procedures: [
      {
        name: "Arthroscopic Bankart Repair",
        bestFor: "Torn labrum causing instability",
        involves: "Reattaching labrum and tightening ligaments",
        recovery: "8–12 weeks",
        description:
          "Minimally invasive technique for young patients and athletes with recurrent instability.",
      },
      {
        name: "Capsular Shift / Tightening",
        bestFor: "Loose joint capsule",
        involves: "Tightening stretched tissues",
        recovery: "10–12 weeks",
        description:
          "Reduces excess laxity and restores normal joint stability.",
      },
      {
        name: "Latarjet Procedure",
        bestFor: "Severe bone loss or repeated dislocations",
        involves: "Bone block transfer to stabilize joint",
        recovery: "12–16 weeks",
        description:
          "Gold standard for athletes or patients with high-risk recurrence.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Pre-Evaluation",
        items: [
          "Physical examination",
          "MRI or CT scan to evaluate labral tear",
          "Instability and strength assessment",
        ],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Arthroscopic or open repair",
          "Ligament tightening",
          "Stabilization procedure",
        ],
      },
      {
        phase: "Phase 3",
        title: "Weeks 1–4",
        items: [
          "Arm sling for support",
          "Pain control",
          "Gentle passive movement",
        ],
      },
      {
        phase: "Phase 4",
        title: "Weeks 4–10",
        items: [
          "Active shoulder exercises",
          "Strengthening rotator cuff",
          "Increasing range of motion",
        ],
      },
      {
        phase: "Phase 5",
        title: "3–6 Months",
        items: [
          "Return to sports activities",
          "Overhead use allowed gradually",
          "Full functional recovery",
        ],
      },
    ],

    highlights: {
      title: "Shoulder keeps slipping out?",
      description:
        "Advanced stabilization techniques can stop repeated dislocations and restore confidence.",
      button: "Book Shoulder Stability Consultation",
    },

    testimonials: [
      {
        name: "Amit Singh",
        age: 24,
        quote:
          "My shoulder used to dislocate even while sleeping. After arthroscopic repair, it feels completely stable!",
        rating: 5,
      },
      {
        name: "Priya Rathore",
        age: 29,
        quote:
          "As an athlete, recurrent dislocations were ruining my performance. The Latarjet procedure changed everything.",
        rating: 5,
      },
      {
        name: "Raghav Meena",
        age: 33,
        quote:
          "I regained full shoulder strength within a few months. No more fear of movement!",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Why does my shoulder keep dislocating?",
        answer:
          "Repeated dislocations weaken ligaments, labrum, and capsule, making the joint loose over time.",
      },
      {
        question: "Is surgery necessary for recurrent dislocations?",
        answer:
          "If shoulder dislocates more than once, surgery significantly reduces recurrence risk.",
      },
      {
        question: "How long is recovery after stabilization surgery?",
        answer:
          "Most patients return to normal activity in 2–3 months and sports in 4–6 months.",
      },
      {
        question: "Can physiotherapy alone fix shoulder instability?",
        answer:
          "It helps mild cases, but repeated dislocations usually require surgical repair.",
      },
      {
        question: "Will the shoulder be as strong as before?",
        answer:
          "Yes, with proper surgery and rehab, strength and stability are fully restored.",
      },
    ],
  },

  //Rotator Cuff Tear Repair
  {
    title: "Rotator Cuff Tear Repair",
    icon: "/Images/treatment_icon_20.png",

    subtitle:
      "Advanced arthroscopic and minimally invasive repair for torn shoulder tendons, restoring strength, motion, and pain-free function.",

    howItHelps:
      "Rotator cuff repair reattaches torn shoulder tendons to the bone, restoring stability, reducing pain, and allowing normal lifting, rotation, and daily activity. Modern arthroscopy ensures minimal pain and faster recovery.",

    whyDeteriorate:
      "Rotator cuff tendons deteriorate due to aging, overuse, sudden injury, repetitive overhead work, or untreated partial tears. Over time, tears enlarge, muscles weaken, and shoulder movement becomes painful and limited.",

    benefits: [
      "Restores shoulder strength",
      "Reduces pain drastically",
      "Improves arm lifting and rotation",
      "Prevents tear enlargement",
      "Arthroscopic (keyhole) procedure",
      "Quick return to routine activities",
      "Reduces long-term arthritis risk",
    ],

    symptoms: [
      {
        title: "Shoulder pain",
        description: "worse at night or while lifting",
      },
      { title: "Weakness", description: "difficulty raising arm overhead" },
      { title: "Clicking or popping", description: "during shoulder movement" },
      { title: "Limited motion", description: "hard to reach behind back" },
      { title: "Pain radiating to arm", description: "upper arm or elbow" },
      { title: "Loss of strength", description: "difficulty carrying weight" },
    ],

    procedures: [
      {
        name: "Arthroscopic Rotator Cuff Repair",
        bestFor: "Small to large tears",
        involves: "Keyhole tendon stitching using suture anchors",
        recovery: "8–12 weeks",
        description:
          "Most common method; minimally invasive, low pain, and fast recovery.",
      },
      {
        name: "Mini-Open Rotator Cuff Repair",
        bestFor: "Massive tears",
        involves: "Small incision with advanced tendon repair",
        recovery: "10–14 weeks",
        description:
          "Used when arthroscopy alone cannot repair severe or retracted tears.",
      },
      {
        name: "Superior Capsular Reconstruction (SCR)",
        bestFor: "Irreparable tears",
        involves: "Graft placement to restore stability",
        recovery: "12–16 weeks",
        description: "Provides stability when tendon cannot be reattached.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Pre-Surgery",
        items: [
          "MRI to evaluate tear size",
          "Pain and mobility assessment",
          "Physiotherapy to reduce stiffness",
        ],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: [
          "Arthroscopic tendon repair",
          "Suture anchor fixation",
          "Minimal tissue damage",
        ],
      },
      {
        phase: "Phase 3",
        title: "Weeks 1–4",
        items: [
          "Arm sling support",
          "Pain management",
          "Gentle passive exercises",
        ],
      },
      {
        phase: "Phase 4",
        title: "Weeks 4–10",
        items: [
          "Active range-of-motion exercises",
          "Gradual strengthening",
          "Shoulder control improvement",
        ],
      },
      {
        phase: "Phase 5",
        title: "3–6 Months",
        items: [
          "Full strength restoration",
          "Return to gym/sports",
          "Normal daily movement",
        ],
      },
    ],

    highlights: {
      title: "Shoulder pain affecting daily activities?",
      description:
        "Rotator cuff repair can restore full shoulder strength and motion.",
      button: "Book Shoulder Specialist Consultation",
    },

    testimonials: [
      {
        name: "Vijay Sharma",
        age: 48,
        quote:
          "I couldn’t lift my arm before surgery. After arthroscopic repair, my pain is gone and movement is normal!",
        rating: 5,
      },
      {
        name: "Neetu Chouhan",
        age: 52,
        quote:
          "Night pain was unbearable. Surgery and physiotherapy changed everything. Fantastic recovery!",
        rating: 5,
      },
      {
        name: "Harish Solanki",
        age: 39,
        quote:
          "As a gym-goer, my shoulder strength returned completely after the repair. Highly recommended.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Is rotator cuff tear repair necessary?",
        answer:
          "Yes, untreated tears get larger over time, causing weakness and arthritis.",
      },
      {
        question: "How long before I can lift my arm normally?",
        answer:
          "Light lifting begins after 6–8 weeks; full strength returns by 3–6 months.",
      },
      {
        question: "Is arthroscopy painful?",
        answer: "Pain is minimal due to keyhole surgery and modern anesthesia.",
      },
      {
        question: "Will the tear happen again?",
        answer:
          "With proper rehab, recurrence risk is low, especially after complete repairs.",
      },
      {
        question: "Can physiotherapy alone heal the tear?",
        answer:
          "Small partial tears may improve, but full tears require surgical repair.",
      },
    ],
  },

  //Tennis Elbow
  {
    title: "Tennis Elbow",
    icon: "/Images/treatment_icon_21.png",

    subtitle:
      "Advanced treatment for lateral epicondylitis (Tennis Elbow) using medication, physiotherapy, injections, and minimally invasive surgical options for long-term pain relief.",

    howItHelps:
      "Tennis elbow treatment reduces inflammation, repairs micro-tears in the tendon, restores grip strength, and prevents chronic pain. Modern therapies help patients return to daily activities, sports, and work comfortably.",

    whyDeteriorate:
      "The condition worsens due to repetitive strain, overuse, heavy lifting, improper wrist movement, untreated micro-tears, and age-related tendon degeneration. Continuous stress causes tendon wear, leading to persistent pain and weakness.",

    benefits: [
      "Fast pain reduction",
      "Improved grip strength",
      "Restored elbow mobility",
      "Reduced inflammation",
      "Minimally invasive options available",
      "Quick return to daily activities",
      "Prevents chronic tendon damage",
    ],

    symptoms: [
      {
        title: "Outer elbow pain",
        description: "pain increases while lifting",
      },
      { title: "Weak grip", description: "difficulty holding objects" },
      { title: "Burning sensation", description: "around elbow and forearm" },
      {
        title: "Pain on wrist extension",
        description: "while lifting or twisting",
      },
      { title: "Stiffness", description: "morning or post-activity stiffness" },
      {
        title: "Difficulty in daily tasks",
        description: "opening jars, shaking hands",
      },
    ],

    procedures: [
      {
        name: "Non-Surgical Treatment",
        bestFor: "Early & moderate cases",
        involves: "Physiotherapy, bracing, medication",
        recovery: "4–6 weeks",
        description:
          "Most cases improve without surgery using rest, therapy, and anti-inflammatory care.",
      },
      {
        name: "PRP Injection Therapy",
        bestFor: "Chronic or severe cases",
        involves: "Platelet-rich plasma injection for tendon healing",
        recovery: "3–6 weeks",
        description:
          "Stimulates natural tissue repair and reduces inflammation.",
      },
      {
        name: "Arthroscopic Release Surgery",
        bestFor: "Persistent pain after 6–12 months",
        involves: "Removal of damaged tendon tissue",
        recovery: "6–10 weeks",
        description:
          "Minimally invasive tendon release restores pain-free motion.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Initial Evaluation",
        items: [
          "Physical examination",
          "Pain assessment",
          "Strength and motion analysis",
        ],
      },
      {
        phase: "Phase 2",
        title: "Conservative Treatment",
        items: [
          "Physiotherapy",
          "Elbow bracing",
          "Anti-inflammatory medicines",
        ],
      },
      {
        phase: "Phase 3",
        title: "Advanced Therapy",
        items: ["PRP injection (if needed)", "Tendon healing treatments"],
      },
      {
        phase: "Phase 4",
        title: "Surgical Management (if required)",
        items: ["Arthroscopic tendon release", "Removal of damaged fibers"],
      },
      {
        phase: "Phase 5",
        title: "Rehabilitation",
        items: [
          "Strengthening exercises",
          "Grip training",
          "Return to full activity",
        ],
      },
    ],

    highlights: {
      title: "Elbow pain affecting your daily work?",
      description:
        "Modern Tennis Elbow treatments offer quick pain relief and long-term recovery.",
      button: "Book Elbow Pain Consultation",
    },

    testimonials: [
      {
        name: "Manoj Kumar",
        age: 43,
        quote:
          "I struggled with elbow pain for months. After PRP therapy and physiotherapy, my grip strength is back to normal!",
        rating: 5,
      },
      {
        name: "Sneha Jain",
        age: 36,
        quote:
          "Daily tasks like lifting or typing were painful. Treatment made a huge difference. Highly recommended!",
        rating: 5,
      },
      {
        name: "Kapil Verma",
        age: 29,
        quote:
          "As a badminton player, the pain was affecting my game. The recovery program restored full elbow function.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Does Tennis Elbow always need surgery?",
        answer:
          "No. Over 90% of cases improve with non-surgical treatment like physiotherapy and PRP.",
      },
      {
        question: "How long does recovery take?",
        answer:
          "Mild cases recover in 2–4 weeks; chronic cases may take 6–10 weeks.",
      },
      {
        question: "Is Tennis Elbow caused only by sports?",
        answer:
          "No. It also occurs due to typing, heavy lifting, painting, driving, and repetitive wrist movement.",
      },
      {
        question: "Can the condition return?",
        answer:
          "Yes, if repetitive strain continues. Strengthening and proper ergonomics prevent recurrence.",
      },
      {
        question: "Is PRP effective for Tennis Elbow?",
        answer:
          "Yes, PRP is highly effective for chronic cases by promoting natural tendon healing.",
      },
    ],
  },

  // Golfer’s Elbow Treatment
  {
    title: "Golfers Elbow",
    icon: "/Images/treatment_icon_19.png",

    subtitle:
      "Effective treatment for medial epicondylitis (Golfer’s Elbow), reducing inner elbow pain and restoring strength with modern therapies.",

    howItHelps:
      "Golfer’s Elbow treatment heals the inflamed or damaged tendons on the inner side of the elbow. It restores grip strength, reduces pain during lifting or twisting, and helps patients return to normal daily activities and sports.",

    whyDeteriorate:
      "Golfer’s Elbow worsens because of repetitive wrist flexion, improper lifting techniques, overuse of forearm muscles, heavy gripping activities, untreated tendon micro-tears, and age-related degeneration.",

    benefits: [
      "Reduces inner elbow pain",
      "Restores grip and wrist strength",
      "Improves flexibility",
      "Prevents tendon degeneration",
      "Fast return to normal activities",
      "Minimally invasive options available",
      "Effective for athletes and workers",
    ],

    symptoms: [
      {
        title: "Inner elbow pain",
        description: "worsens while gripping objects",
      },
      { title: "Weak grip", description: "difficulty holding bags or bottles" },
      { title: "Stiffness", description: "especially in morning" },
      { title: "Swelling or tenderness", description: "over the inner elbow" },
      {
        title: "Pain with wrist flexion",
        description: "lifting or twisting movements",
      },
      { title: "Radiating pain", description: "towards forearm or wrist" },
    ],

    procedures: [
      {
        name: "Conservative Therapy",
        bestFor: "Mild to moderate cases",
        involves: "Rest, physiotherapy, medications",
        recovery: "3–6 weeks",
        description:
          "Reduces inflammation and heals tendon micro-tears effectively.",
      },
      {
        name: "PRP Injection Therapy",
        bestFor: "Chronic or persistent symptoms",
        involves: "Platelet-rich plasma for tendon regeneration",
        recovery: "3–6 weeks",
        description: "Boosts natural healing and reduces chronic pain.",
      },
      {
        name: "Arthroscopic Tendon Release",
        bestFor: "Severe or non-responsive cases",
        involves: "Cleaning damaged tissue and releasing tight tendons",
        recovery: "6–10 weeks",
        description:
          "Minimally invasive surgery with excellent long-term results.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Assessment & Diagnosis",
        items: [
          "Clinical examination",
          "Pain and grip evaluation",
          "Ultrasound or MRI if needed",
        ],
      },
      {
        phase: "Phase 2",
        title: "Non-Surgical Management",
        items: [
          "Physiotherapy sessions",
          "Forearm strengthening",
          "Bracing and ergonomic correction",
        ],
      },
      {
        phase: "Phase 3",
        title: "Advanced Treatment",
        items: [
          "PRP injection",
          "Deep tissue therapy",
          "Shockwave therapy if required",
        ],
      },
      {
        phase: "Phase 4",
        title: "Surgical Option",
        items: ["Arthroscopic release", "Removal of damaged tendon fibers"],
      },
      {
        phase: "Phase 5",
        title: "Rehabilitation",
        items: [
          "Grip strengthening",
          "Range of motion exercises",
          "Return to full activity",
        ],
      },
    ],

    highlights: {
      title: "Inner elbow pain affecting grip?",
      description:
        "Modern treatment options offer quick relief and long-term healing.",
      button: "Book Golfer’s Elbow Consultation",
    },

    testimonials: [
      {
        name: "Anil Rathore",
        age: 47,
        quote:
          "I couldn’t lift anything without pain. After PRP therapy, my elbow feels completely normal!",
        rating: 5,
      },
      {
        name: "Ritika Sharma",
        age: 34,
        quote:
          "Physiotherapy and guided exercises helped me recover quickly. Highly recommended!",
        rating: 5,
      },
      {
        name: "Sameer Mehta",
        age: 29,
        quote:
          "As a gym trainer, Golfer’s Elbow impacted my daily work. Treatment restored my strength fully.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Is Golfer’s Elbow only for golfers?",
        answer:
          "No. It commonly affects people who lift weights, work on computers, drive, or perform repetitive hand movements.",
      },
      {
        question: "How long does recovery take?",
        answer:
          "Most cases recover in 4–6 weeks; chronic cases may take 8–10 weeks.",
      },
      {
        question: "Is PRP effective?",
        answer:
          "Yes, PRP is very effective for chronic or long-standing tendon pain.",
      },
      {
        question: "Does it require surgery?",
        answer:
          "Surgery is needed only in cases not responding to months of therapy.",
      },
      {
        question: "Can it come back?",
        answer:
          "Yes, if repetitive strain continues. Strengthening and ergonomic correction prevent recurrence.",
      },
    ],
  },

  // Elbow Ligament Repair
  {
    title: "Elbow Ligament Repair",
    icon: "/Images/treatment_icon_23.png",

    subtitle:
      "Advanced treatment to repair torn elbow ligaments, restore joint stability, and allow pain-free lifting, bending, and sports activity.",

    howItHelps:
      "Elbow ligament repair stabilizes the joint by repairing or reconstructing torn ligaments. This prevents excessive joint movement, reduces pain, improves strength, and allows safe return to daily activities, gym, and sports.",

    whyDeteriorate:
      "Elbow ligaments deteriorate due to trauma, falls, sports injuries, repeated strain, lifting heavy weights, or untreated dislocations. Over time, the joint becomes unstable and painful with reduced strength and mobility.",

    benefits: [
      "Restores natural elbow stability",
      "Reduces pain during lifting or bending",
      "Prevents recurrent elbow dislocations",
      "Allows safe return to sports and gym",
      "Improves grip and forearm strength",
      "Minimally invasive options available",
      "Prevents long-term arthritis and joint wear",
    ],

    symptoms: [
      {
        title: "Elbow instability",
        description: "feeling of joint 'giving way'",
      },
      {
        title: "Medial or lateral elbow pain",
        description: "pain when lifting or twisting",
      },
      {
        title: "Grip weakness",
        description: "difficulty holding objects firmly",
      },
      { title: "Clicking or catching", description: "during elbow movement" },
      { title: "Swelling", description: "especially after activity" },
      {
        title: "Limited bending or straightening",
        description: "painful range of motion",
      },
    ],

    procedures: [
      {
        name: "Arthroscopic Ligament Repair",
        bestFor: "Partial ligament tears",
        involves: "Keyhole repair using suture anchors",
        recovery: "6–10 weeks",
        description:
          "Minimally invasive method to repair torn fibers and restore stability with faster recovery.",
      },
      {
        name: "Open Ligament Reconstruction",
        bestFor: "Complete ligament tears or chronic instability",
        involves: "Reconstruction using tendon graft",
        recovery: "10–14 weeks",
        description:
          "Uses tissue graft to rebuild the damaged ligament, ideal for athletes or severe injuries.",
      },
      {
        name: "Ulnar Collateral Ligament (UCL) Repair",
        bestFor: "Throwing athletes or overhead workers",
        involves: "Repair or reconstruction of main stabilizing ligament",
        recovery: "12–16 weeks",
        description:
          "Gold-standard treatment for pitchers, gym athletes, and patients with valgus instability.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Evaluation & Diagnosis",
        items: [
          "Elbow stress tests",
          "MRI or ultrasound",
          "Assessment of instability and strength",
        ],
      },
      {
        phase: "Phase 2",
        title: "Pre-Surgery Preparation",
        items: [
          "Pain and swelling control",
          "Strengthening adjacent muscles",
          "Explaining surgical options",
        ],
      },
      {
        phase: "Phase 3",
        title: "Surgery Day",
        items: [
          "Arthroscopic or open ligament repair",
          "Stabilization with anchors or graft",
          "Post-operative dressing",
        ],
      },
      {
        phase: "Phase 4",
        title: "Weeks 1–6",
        items: [
          "Brace or splint support",
          "Gentle mobility exercises",
          "Pain control and inflammation reduction",
        ],
      },
      {
        phase: "Phase 5",
        title: "Weeks 6–12",
        items: [
          "Strength restoration",
          "Forearm and grip training",
          "Progressive mobility and stretching",
        ],
      },
      {
        phase: "Phase 6",
        title: "3–6 Months",
        items: [
          "Return to gym and sports",
          "Full stability achieved",
          "Long-term strengthening plan",
        ],
      },
    ],

    highlights: {
      title: "Elbow instability affecting your activity?",
      description:
        "Modern ligament repair techniques restore full elbow strength and stability.",
      button: "Book Elbow Specialist Consultation",
    },

    testimonials: [
      {
        name: "Rohit Verma",
        age: 27,
        quote:
          "My elbow used to slip during gym workouts. After ligament repair, it feels completely stable again!",
        rating: 5,
      },
      {
        name: "Sneha Khandelwal",
        age: 42,
        quote:
          "Lifting anything was painful earlier. Treatment restored my elbow strength beautifully.",
        rating: 5,
      },
      {
        name: "Aakash Sharma",
        age: 34,
        quote:
          "As a cricket bowler, elbow instability was ruining my game. Surgery and rehab helped me return stronger than ever.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Do all elbow ligament tears need surgery?",
        answer:
          "No. Mild tears improve with rest and physiotherapy. Surgery is needed only in severe or recurrent instability.",
      },
      {
        question: "How long is recovery after ligament repair?",
        answer:
          "Most patients regain good movement by 6 weeks and full strength by 3–6 months.",
      },
      {
        question: "Is ligament reconstruction better than repair?",
        answer:
          "Reconstruction is chosen when the ligament is completely torn, weak, or irreparable.",
      },
      {
        question: "Can I lift weights after surgery?",
        answer:
          "Yes, but only after 8–12 weeks depending on healing progress and medical advice.",
      },
      {
        question: "Is the surgery safe?",
        answer:
          "Yes. Modern techniques are minimally invasive with high success rates and low complications.",
      },
    ],
  },
  // Elbow Realignment Surgery
  {
    title: "Elbow Realignment",
    icon: "/Images/treatment_icon_13.png",

    subtitle:
      "Corrective surgery for elbow deformity, instability, or malalignment caused by injuries, fractures, or congenital conditions.",

    howItHelps:
      "Elbow realignment surgery (osteotomy or reconstruction) restores the normal alignment of bones and joint surfaces. This reduces pain, prevents nerve compression, improves range of motion, and restores natural elbow function.",

    whyDeteriorate:
      "Elbow alignment worsens due to improperly healed fractures, recurrent dislocations, childhood deformities, ligament injuries, or untreated trauma. Over time, this leads to chronic pain, stiffness, nerve pressure, and early arthritis.",

    benefits: [
      "Restores natural elbow alignment",
      "Reduces pain and stiffness",
      "Improves bending and straightening",
      "Prevents long-term arthritis",
      "Corrects deformity and instability",
      "Improves grip and arm strength",
      "Allows safe return to daily activities and work",
    ],

    symptoms: [
      {
        title: "Visible elbow deformity",
        description: "crooked or angled elbow shape",
      },
      {
        title: "Limited movement",
        description: "difficulty bending or straightening",
      },
      { title: "Persistent elbow pain", description: "worsens with activity" },
      { title: "Instability", description: "elbow feels loose or slips" },
      { title: "Weakness", description: "reduced arm strength" },
      {
        title: "Numbness",
        description: "nerve compression causing tingling in hand",
      },
    ],

    procedures: [
      {
        name: "Corrective Osteotomy",
        bestFor: "Malunited fractures or congenital deformities",
        involves: "Realigning bone by cutting and repositioning",
        recovery: "8–12 weeks",
        description:
          "Restores elbow alignment and function using plates or screws for fixation.",
      },
      {
        name: "Elbow Reconstruction",
        bestFor: "Severe deformity or instability",
        involves:
          "Combination of osteotomy, ligament repair, and alignment correction",
        recovery: "10–14 weeks",
        description:
          "Used when multiple structures require correction for stability and function.",
      },
      {
        name: "Ulnar Nerve Decompression (if needed)",
        bestFor: "Numbness and tingling due to deformity",
        involves: "Freeing compressed nerve at elbow",
        recovery: "6–10 weeks",
        description:
          "Relieves nerve pressure and improves sensation, especially in cubitus valgus/varus cases.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Diagnosis & Assessment",
        items: [
          "X-ray and CT scan for alignment mapping",
          "Movement and strength evaluation",
          "Nerve function assessment",
        ],
      },
      {
        phase: "Phase 2",
        title: "Pre-Surgical Planning",
        items: [
          "3D alignment planning if needed",
          "Discussing implant types",
          "Medical fitness check",
        ],
      },
      {
        phase: "Phase 3",
        title: "Surgery Day",
        items: [
          "Corrective osteotomy or reconstruction",
          "Bone repositioning for proper alignment",
          "Plate/screw fixation and nerve protection",
        ],
      },
      {
        phase: "Phase 4",
        title: "Weeks 1–6",
        items: [
          "Splint or brace support",
          "Gentle mobility exercises",
          "Pain and swelling management",
        ],
      },
      {
        phase: "Phase 5",
        title: "Weeks 6–12",
        items: [
          "Strength recovery",
          "Grip training",
          "Improved elbow range of motion",
        ],
      },
      {
        phase: "Phase 6",
        title: "3–6 Months",
        items: [
          "Full functional recovery",
          "Return to work, gym, and sports",
          "Long-term alignment stability",
        ],
      },
    ],

    highlights: {
      title: "Elbow deformity or instability?",
      description:
        "Corrective realignment surgery restores natural shape, movement, and strength.",
      button: "Book Elbow Correction Consultation",
    },

    testimonials: [
      {
        name: "Deepak Saini",
        age: 31,
        quote:
          "My elbow healed crooked after an accident. Realignment surgery fixed the shape and restored movement completely.",
        rating: 5,
      },
      {
        name: "Kajal Mehta",
        age: 27,
        quote:
          "I had nerve pain and deformity for years. After corrective osteotomy, everything improved drastically.",
        rating: 5,
      },
      {
        name: "Mohammed Arif",
        age: 40,
        quote:
          "My arm strength returned, and the deformity is gone. I feel much more confident now.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Is elbow realignment surgery necessary?",
        answer:
          "It is recommended when deformity causes pain, instability, nerve issues, or affects daily movement.",
      },
      {
        question: "How long does healing take?",
        answer:
          "Most patients regain strength by 8–12 weeks and full activity by 3–6 months.",
      },
      {
        question: "Will the elbow look normal after surgery?",
        answer:
          "Yes, corrective osteotomy restores normal alignment and appearance.",
      },
      {
        question: "Can the deformity come back?",
        answer: "No, once healed, bone alignment remains stable permanently.",
      },
      {
        question: "Is the surgery safe?",
        answer:
          "Yes, realignment surgery has high success rates when performed with modern techniques.",
      },
    ],
  },
  // Frozen Shoulder
  {
    title: "Frozen Shoulder",
    icon: "/Images/treatment_icon_6.png",

    subtitle:
      "Advanced treatment for Adhesive Capsulitis (Frozen Shoulder) to restore shoulder mobility, reduce stiffness, and eliminate chronic pain.",

    howItHelps:
      "Frozen shoulder treatment focuses on reducing inflammation, loosening the tightened shoulder capsule, and restoring the full range of motion. With physiotherapy, medications, injections, or minimally invasive arthroscopic release, patients regain smooth, pain-free shoulder function.",

    whyDeteriorate:
      "Frozen Shoulder worsens due to inflammation and thickening of the joint capsule, often triggered by diabetes, injury, prolonged immobility, thyroid issues, or post-surgery stiffness. Over time, the capsule becomes tighter, causing severe restriction and pain.",

    benefits: [
      "Restores full shoulder movement",
      "Reduces pain and stiffness",
      "Improves daily activities like dressing, reaching, lifting",
      "Accelerates recovery with guided therapy",
      "Arthroscopic options for severe stiffness",
      "Prevents long-term disability",
      "Effective for diabetic and post-trauma cases",
    ],

    symptoms: [
      {
        title: "Severe stiffness",
        description: "difficulty raising or rotating the arm",
      },
      { title: "Constant shoulder pain", description: "especially at night" },
      {
        title: "Limited range of motion",
        description: "trouble reaching back or overhead",
      },
      {
        title: "Difficulty sleeping",
        description: "pain increases when lying on shoulder",
      },
      { title: "Locking sensation", description: "shoulder feels 'stuck'" },
      {
        title: "Gradual worsening",
        description: "symptoms intensify over months",
      },
    ],

    procedures: [
      {
        name: "Conservative Management",
        bestFor: "Early-phase Frozen Shoulder",
        involves: "Medications, physiotherapy, heat therapy",
        recovery: "4–8 weeks",
        description:
          "Reduces inflammation and gradually improves range of motion through structured exercises.",
      },
      {
        name: "Hydrodilatation / Capsule Distension",
        bestFor: "Moderate stiffness",
        involves: "Fluid injection to stretch tight capsule",
        recovery: "2–4 weeks",
        description:
          "Relieves stiffness by expanding the joint capsule painlessly.",
      },
      {
        name: "Arthroscopic Capsular Release",
        bestFor: "Severe, long-standing Frozen Shoulder",
        involves: "Keyhole surgery to release tightened capsule",
        recovery: "6–10 weeks",
        description:
          "Highly effective for patients with severe limitations unresponsive to physiotherapy.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Freezing Stage (0–3 Months)",
        items: [
          "Increasing shoulder pain",
          "Progressive stiffness",
          "Limited movement",
        ],
      },
      {
        phase: "Phase 2",
        title: "Frozen Stage (3–9 Months)",
        items: [
          "Pain reduces gradually",
          "Stiffness remains severe",
          "Daily activities become difficult",
        ],
      },
      {
        phase: "Phase 3",
        title: "Thawing Stage (9–18 Months)",
        items: [
          "Movement slowly improves",
          "Physiotherapy accelerates recovery",
          "Shoulder function returns",
        ],
      },
      {
        phase: "Phase 4",
        title: "Advanced Treatment",
        items: [
          "Hydrodilatation or manipulation",
          "Arthroscopic capsular release if needed",
        ],
      },
      {
        phase: "Phase 5",
        title: "Rehabilitation",
        items: [
          "Stretching & mobility exercises",
          "Strength restoration",
          "Full return to daily activities",
        ],
      },
    ],

    highlights: {
      title: "Shoulder stiffness affecting your daily life?",
      description:
        "Modern Frozen Shoulder treatments restore movement faster and reduce long-term pain.",
      button: "Book Frozen Shoulder Consultation",
    },

    testimonials: [
      {
        name: "Reena Chhabra",
        age: 49,
        quote:
          "I could barely move my shoulder for months. Treatment and physiotherapy helped me regain full movement!",
        rating: 5,
      },
      {
        name: "Sanjay Rawat",
        age: 54,
        quote:
          "Hydrodilatation worked like magic. My pain reduced immediately and mobility improved quickly.",
        rating: 5,
      },
      {
        name: "Aarti Meena",
        age: 58,
        quote:
          "After arthroscopic release, I finally got my shoulder mobility back. Such a relief!",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "How long does Frozen Shoulder take to recover?",
        answer:
          "Without treatment, it may take 1–3 years. With therapy and advanced procedures, recovery is much faster.",
      },
      {
        question: "Is Frozen Shoulder more common in diabetic patients?",
        answer:
          "Yes. Diabetes significantly increases the risk and severity of Frozen Shoulder.",
      },
      {
        question: "Does physiotherapy really help?",
        answer:
          "Yes, structured physiotherapy is the most important part of treatment and restores shoulder movement.",
      },
      {
        question: "When is surgery needed?",
        answer:
          "Surgery is recommended when stiffness persists for months despite physiotherapy and injections.",
      },
      {
        question: "Will Frozen Shoulder come back?",
        answer:
          "Rarely. It usually occurs once, but good shoulder mobility and exercise reduce the risk.",
      },
    ],
  },

  // Carpal Tunnel Release
  {
    title: "Carpal Tunnel Release",
    icon: "/Images/treatment_icon_29.png",

    subtitle:
      "A highly effective procedure to relieve numbness, tingling, and hand weakness caused by Carpal Tunnel Syndrome.",

    howItHelps:
      "Carpal Tunnel Release reduces pressure on the median nerve by opening the tight ligament inside the wrist. This restores normal hand sensation, improves grip strength, and prevents long-term nerve damage.",

    whyDeteriorate:
      "Carpal Tunnel Syndrome worsens due to repeated wrist strain, diabetes, thyroid disorders, arthritis, or prolonged computer use. The ligament thickens over time, increasing pressure on the median nerve and causing severe numbness.",

    benefits: [
      "Immediate relief from hand numbness",
      "Improved grip strength",
      "Quick recovery (1–2 weeks)",
      "Minimally invasive option available",
      "Prevents permanent nerve damage",
      "High long-term success rate",
    ],

    symptoms: [
      {
        title: "Numbness & tingling",
        description: "especially thumb, index, and middle finger",
      },
      { title: "Night-time pain", description: "worsens during sleep" },
      { title: "Weak grip", description: "difficulty holding objects" },
      { title: "Finger stiffness", description: "especially in morning" },
      { title: "Shock-like sensation", description: "radiates up the arm" },
      { title: "Dropping objects", description: "due to weak pinch strength" },
    ],

    procedures: [
      {
        name: "Open Carpal Tunnel Release",
        bestFor: "Moderate-to-severe cases",
        involves: "Small incision to cut the tight ligament",
        recovery: "2–4 weeks",
        description:
          "A proven surgical method relieving pressure on the median nerve by releasing the transverse ligament.",
      },
      {
        name: "Endoscopic Carpal Tunnel Release",
        bestFor: "Patients wanting faster recovery",
        involves: "Tiny camera-assisted minimally invasive technique",
        recovery: "1–2 weeks",
        description:
          "A keyhole procedure with minimal pain and quicker return to activities.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Before Surgery",
        items: [
          "Nerve conduction test",
          "Wrist examination",
          "Medication review",
        ],
      },
      {
        phase: "Phase 2",
        title: "Surgery Day",
        items: ["Local anesthesia", "Ligament release", "10–15 min procedure"],
      },
      {
        phase: "Phase 3",
        title: "Week 1",
        items: [
          "Pain reduction",
          "Finger mobility exercises",
          "Light hand use",
        ],
      },
      {
        phase: "Phase 4",
        title: "Weeks 2–4",
        items: ["Strengthening", "Return to normal activities"],
      },
      {
        phase: "Phase 5",
        title: "Month 2–3",
        items: ["Full strength recovery", "Nerve healing continues"],
      },
    ],

    highlights: {
      title: "Hand numbness affecting your daily life?",
      description:
        "Carpal Tunnel Release offers fast relief with long-lasting results.",
      button: "Book Wrist Specialist Consultation",
    },

    testimonials: [
      {
        name: "Ritu Sharma",
        age: 42,
        quote:
          "I had constant numbness for months. Surgery gave instant relief!",
        rating: 5,
      },
      {
        name: "Mahesh Kothari",
        age: 50,
        quote:
          "Endoscopic release helped me return to work in just one week. Incredible result!",
        rating: 5,
      },
      {
        name: "Anjali Verma",
        age: 47,
        quote:
          "My hand strength improved so much after surgery. I can work comfortably again.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Is Carpal Tunnel surgery painful?",
        answer:
          "No, it is done under local anesthesia and patients feel minimal discomfort.",
      },
      {
        question: "How soon can I use my hand?",
        answer: "Light use begins the same day, full use within 1–2 weeks.",
      },
      {
        question: "Is endoscopic surgery better?",
        answer:
          "Both are effective, but endoscopic surgery allows faster recovery with a smaller scar.",
      },
      {
        question: "Will symptoms come back?",
        answer:
          "Recurrence is rare if post-surgery rehabilitation and ergonomic care are followed.",
      },
      {
        question: "Is the procedure safe for diabetic patients?",
        answer:
          "Yes, diabetic patients commonly undergo Carpal Tunnel Release with excellent outcomes.",
      },
    ],
  },

  // Plantar Fasciitis
  {
    title: "Plantar Fasciitis",
    icon: "/Images/treatment_icon_26.png",

    subtitle:
      "Evidence-based treatment for heel pain caused by plantar fascia inflammation, using conservative care and targeted procedures when needed.",

    howItHelps:
      "Treatment reduces inflammation of the plantar fascia, restores normal foot biomechanics, relieves heel pain, and improves walking comfort. A stepwise approach — rest, stretching, orthotics, physiotherapy, injections, and, rarely, minimal surgery — gives high success rates.",

    whyDeteriorate:
      "Plantar fascia irritation worsens due to overuse, prolonged standing, improper footwear, high-impact activities, tight calf muscles, sudden weight gain, or biomechanical foot problems. Continued strain prevents healing and increases pain.",

    benefits: [
      "Significant pain reduction",
      "Improved walking and standing tolerance",
      "Non-surgical success in most cases",
      "Custom orthotics restore foot mechanics",
      "Faster recovery with guided physiotherapy",
      "Minimally invasive options if conservative care fails",
    ],

    symptoms: [
      {
        title: "Heel pain",
        description: "sharp pain on first steps in the morning",
      },
      {
        title: "Pain after rest",
        description: "worse after long sitting then standing",
      },
      { title: "Tenderness", description: "palpable at the plantar heel" },
      { title: "Stiffness", description: "reduced ankle and toe extension" },
      {
        title: "Pain with activity",
        description: "increases with running or prolonged standing",
      },
    ],

    procedures: [
      {
        name: "Conservative Care",
        bestFor: "Most patients",
        involves:
          "Rest, stretching, night splints, shoe modification, physiotherapy",
        recovery: "4–12 weeks",
        description:
          "Stretching calf/plantar fascia, activity modification and orthotics resolve most cases without surgery.",
      },
      {
        name: "Orthotic & Heel Support",
        bestFor: "Biomechanical causes",
        involves: "Custom insoles, heel cups, supportive shoes",
        recovery: "2–8 weeks",
        description:
          "Corrects foot mechanics, reduces strain on the plantar fascia, and speeds recovery.",
      },
      {
        name: "Corticosteroid or PRP Injection",
        bestFor: "Persistent pain after conservative care",
        involves:
          "Targeted injection to reduce inflammation or stimulate healing",
        recovery: "2–6 weeks",
        description:
          "Short-term pain relief (steroid) or tissue healing support (PRP) depending on case.",
      },
      {
        name: "Extracorporeal Shockwave Therapy (ESWT)",
        bestFor: "Chronic plantar fasciitis",
        involves: "Focused shockwaves to stimulate healing",
        recovery: "4–12 weeks",
        description:
          "Non-invasive option effective for chronic, resistant heel pain.",
      },
      {
        name: "Endoscopic Plantar Fascia Release",
        bestFor: "Rare refractory cases",
        involves: "Partial release of plantar fascia via small incision",
        recovery: "6–12 weeks",
        description:
          "Surgery reserved for patients who fail comprehensive conservative treatment.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Initial 0–6 Weeks",
        items: [
          "Rest and activity modification",
          "Daily plantar fascia and calf stretching",
          "Use of heel pads and supportive footwear",
        ],
      },
      {
        phase: "Phase 2",
        title: "6–12 Weeks",
        items: [
          "Physiotherapy sessions",
          "Custom orthotics if needed",
          "Consider injection therapy for persistent cases",
        ],
      },
      {
        phase: "Phase 3",
        title: "3–6 Months",
        items: [
          "Escalation to ESWT if pain persists",
          "Gradual return to higher-impact activity",
          "Surgical discussion for refractory pain",
        ],
      },
      {
        phase: "Phase 4",
        title: "Post-Procedure Rehabilitation",
        items: [
          "Gradual loading exercises",
          "Gait correction",
          "Long-term strengthening and flexibility work",
        ],
      },
    ],

    highlights: {
      title: "Heel pain stopping you from walking?",
      description:
        "Most plantar fasciitis responds to simple measures. We tailor a plan to relieve pain and restore activity.",
      button: "Book Foot & Ankle Consultation",
    },

    testimonials: [
      {
        name: "Sunita Verma",
        age: 46,
        quote:
          "Morning heel pain made walking painful. With stretching, orthotics and therapy I’m back to my daily walks.",
        rating: 5,
      },
      {
        name: "Rakesh Jain",
        age: 52,
        quote:
          "Shockwave therapy helped when injections didn’t. Pain dropped and I resumed light jogging.",
        rating: 5,
      },
      {
        name: "Priya Kaur",
        age: 34,
        quote:
          "Custom insoles and physio fixed my heel pain without surgery. Highly recommend the conservative approach.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Will plantar fasciitis go away on its own?",
        answer:
          "Often yes, with rest and stretching, but many need guided physiotherapy and supportive footwear for reliable recovery.",
      },
      {
        question: "When should I try injections or ESWT?",
        answer:
          "Consider injections or ESWT after 6–12 weeks of good-quality conservative care if pain persists.",
      },
      {
        question: "Are custom orthotics necessary?",
        answer:
          "Not always, but orthotics help when foot mechanics contribute to plantar fascia strain.",
      },
      {
        question: "Is surgery common?",
        answer:
          "No. Surgery is rare and reserved for patients who don't respond to comprehensive non-surgical treatment.",
      },
      {
        question: "How soon can I return to running?",
        answer:
          "Gradual return after pain subsides and strength/flexibility are restored; often 6–12 weeks depending on recovery.",
      },
    ],
  },

  // Flat Foot Correction
  {
    title: "Flat Foot Correction",
    icon: "/Images/treatment_icon_27.png",

    subtitle:
      "Comprehensive treatment for flat feet (fallen arches) using orthotics, physiotherapy, and advanced surgical correction when needed.",

    howItHelps:
      "Flat Foot Correction restores the natural arch of the foot, improves alignment of the ankle and knee, reduces pain, and helps you walk and stand comfortably. Treatments include custom orthotics, gait correction, tendon repair, osteotomy, or minimally invasive flat-foot reconstruction.",

    whyDeteriorate:
      "Flat feet worsen due to tendon weakness (especially posterior tibial tendon), obesity, arthritis, injury, prolonged standing, improper footwear, or congenital deformity. With time, the arch collapses further, causing pain in the foot, ankle, knee, and lower back.",

    benefits: [
      "Improved walking comfort",
      "Better foot & ankle alignment",
      "Reduced pain during long standing",
      "Better sports performance",
      "Customized non-surgical options",
      "Permanent correction with surgery when required",
    ],

    symptoms: [
      { title: "Foot pain", description: "inner ankle or arch pain" },
      { title: "Swelling", description: "around the medial ankle" },
      { title: "Flat arch", description: "arch disappears on standing" },
      { title: "Tired feet", description: "after short walking" },
      {
        title: "Shoe wear changes",
        description: "inner edge of shoes wears out",
      },
      { title: "Knee or back pain", description: "due to misalignment" },
    ],

    procedures: [
      {
        name: "Custom Orthotics",
        bestFor: "Mild to moderate flat feet",
        involves: "Arch support insoles and heel stabilizers",
        recovery: "Immediate improvement",
        description:
          "Specially designed insoles support the arch, improve alignment, and reduce pain.",
      },
      {
        name: "Physiotherapy & Strengthening",
        bestFor: "Flexible flat feet",
        involves: "Posterior tibial tendon exercises and gait training",
        recovery: "4–12 weeks",
        description:
          "Strengthens foot muscles and improves foot mechanics to restore natural arch support.",
      },
      {
        name: "Tendon Repair / Reconstruction",
        bestFor: "Flat feet due to tendon damage",
        involves: "Repairing or reconstructing the posterior tibial tendon",
        recovery: "6–12 weeks",
        description: "Repairs weakened or torn tendons that support the arch.",
      },
      {
        name: "Calcaneal Osteotomy",
        bestFor: "Moderate-to-severe deformity",
        involves: "Repositioning heel bone to correct alignment",
        recovery: "8–12 weeks",
        description:
          "A bone cut to realign the foot and restore normal arch structure.",
      },
      {
        name: "Flat Foot Reconstruction Surgery",
        bestFor: "Severe or rigid flat feet",
        involves:
          "Combination of tendon repair, osteotomy, and ligament tightening",
        recovery: "3–6 months",
        description:
          "A comprehensive surgical correction that rebuilds the arch and restores proper foot alignment.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Evaluation & Non-Surgical Start",
        items: [
          "Foot examination & gait analysis",
          "Custom orthotic prescription",
          "Begin strengthening and stretching exercises",
        ],
      },
      {
        phase: "Phase 2",
        title: "4–12 Weeks",
        items: [
          "Consistent physiotherapy",
          "Footwear modification",
          "Activity training for proper mechanics",
        ],
      },
      {
        phase: "Phase 3",
        title: "3–6 Months",
        items: [
          "Consider advanced correction if pain persists",
          "MRI for tendon evaluation",
          "Surgical planning if required",
        ],
      },
      {
        phase: "Phase 4",
        title: "Post-Surgery Recovery (If Operated)",
        items: [
          "Immobilization for 4–6 weeks",
          "Progressive weight bearing",
          "Physiotherapy for full restoration",
        ],
      },
    ],

    highlights: {
      title: "Flat Feet Causing Pain or Fatigue?",
      description:
        "We offer advanced orthotic and surgical treatments to restore your natural arch and walking comfort.",
      button: "Book Foot & Ankle Specialist",
    },

    testimonials: [
      {
        name: "Aditya Mehra",
        age: 28,
        quote:
          "Custom insoles and therapy fixed my long-standing foot pain. I can walk long distances now!",
        rating: 5,
      },
      {
        name: "Kiran Gupta",
        age: 35,
        quote:
          "I had severe flat feet. The reconstruction surgery transformed my mobility completely.",
        rating: 5,
      },
      {
        name: "Radhika Sharma",
        age: 22,
        quote:
          "My foot fatigue during college walks is gone after treatment. Highly recommended.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Can flat feet be corrected without surgery?",
        answer:
          "Yes. Most flexible flat feet improve with physiotherapy, orthotics, and proper footwear.",
      },
      {
        question: "When is surgery needed?",
        answer:
          "Surgery is recommended if the arch has fully collapsed, pain persists, or the foot becomes stiff (rigid flat foot).",
      },
      {
        question: "Are insoles permanent?",
        answer:
          "Many patients need long-term arch support, especially for active lifestyles or demanding jobs.",
      },
      {
        question: "Can flat feet cause knee or back pain?",
        answer:
          "Yes. Misalignment from flat feet can affect your entire leg and spine mechanics.",
      },
      {
        question: "Is recovery from flat-foot surgery long?",
        answer:
          "Full recovery takes 3–6 months depending on the procedure, but results are long-lasting.",
      },
    ],
  },

  // Bunion Correction
  {
    title: "Bunion Correction",
    icon: "/Images/treatment_icon_25.png",

    subtitle:
      "Advanced treatment for painful bunions (Hallux Valgus) using minimally invasive techniques, realignment procedures, and modern osteotomy methods.",

    howItHelps:
      "Bunion correction realigns the big toe, removes painful bony bumps, reduces inflammation, and restores proper foot mechanics. It relieves pain, improves walking comfort, prevents deformity progression, and restores foot aesthetics.",

    whyDeteriorate:
      "Bunions worsen due to tight or improper footwear, family history, flat feet, arthritis, or abnormal foot mechanics. Over time, the big toe drifts outward, causing swelling, pain, and difficulty wearing normal shoes.",

    benefits: [
      "Pain-free walking and standing",
      "Better toe alignment",
      "Improved balance and foot mechanics",
      "Ability to wear normal footwear again",
      "Minimally invasive surgical options",
      "Reduced joint stress and swelling",
    ],

    symptoms: [
      {
        title: "Big toe pain",
        description: "especially while walking or wearing shoes",
      },
      { title: "Visible bony bump", description: "on the side of the big toe" },
      { title: "Redness & swelling", description: "over the joint" },
      { title: "Crossing toes", description: "big toe overlapping the others" },
      {
        title: "Limited movement",
        description: "difficulty bending the big toe",
      },
      { title: "Foot fatigue", description: "after short walking" },
    ],

    procedures: [
      {
        name: "Minimally Invasive Bunion Surgery (MIS)",
        bestFor: "Mild to moderate bunions",
        involves: "2–3 mm incisions with realignment using special burrs",
        recovery: "4–6 weeks",
        description:
          "A modern procedure using tiny cuts for realignment with less pain, swelling, and quicker recovery.",
      },
      {
        name: "Osteotomy Procedures",
        bestFor: "Moderate deformity",
        involves: "Cutting and shifting the metatarsal bone",
        recovery: "6–8 weeks",
        description:
          "Realigns the big toe joint by repositioning bones for long-term correction.",
      },
      {
        name: "Lapidus Procedure",
        bestFor: "Severe or recurrent bunions",
        involves: "Fusing the first metatarsal joint for stability",
        recovery: "8–12 weeks",
        description:
          "Ideal for hypermobility and severe deformities to prevent recurrence.",
      },
      {
        name: "Soft Tissue Correction",
        bestFor: "Early-stage bunions",
        involves: "Tendon release and tightening",
        recovery: "3–6 weeks",
        description:
          "Balances soft tissues around the joint to prevent worsening of the deformity.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Initial Evaluation",
        items: [
          "Foot X-ray for deformity measurement",
          "Footwear assessment",
          "Custom orthotic advice",
        ],
      },
      {
        phase: "Phase 2",
        title: "Non-Surgical Care (If Mild)",
        items: [
          "Toe spacers",
          "Wide toe-box shoes",
          "Anti-inflammatory treatments",
        ],
      },
      {
        phase: "Phase 3",
        title: "Surgery Day (If Required)",
        items: [
          "Minimally invasive correction",
          "Bone realignment",
          "Bandaging for support",
        ],
      },
      {
        phase: "Phase 4",
        title: "4–8 Weeks Recovery",
        items: [
          "Protective footwear",
          "Gradual weight-bearing",
          "Physiotherapy for toe mobility",
        ],
      },
    ],

    highlights: {
      title: "Bunion Pain Limiting Your Walking?",
      description:
        "Modern minimally invasive techniques can realign your foot with minimal discomfort and fast recovery.",
      button: "Book Foot Specialist",
    },

    testimonials: [
      {
        name: "Jyoti Sharma",
        age: 42,
        quote:
          "My bunion pain was unbearable. The minimally invasive surgery fixed the deformity beautifully with very little downtime.",
        rating: 5,
      },
      {
        name: "Ravi Malhotra",
        age: 50,
        quote:
          "I can finally wear normal shoes again. The correction was perfect and recovery smooth.",
        rating: 5,
      },
      {
        name: "Maya Kapoor",
        age: 33,
        quote:
          "The foot alignment has improved drastically, and the swelling is gone. Highly satisfied!",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Do bunions go away without surgery?",
        answer:
          "No. Bunions progressively worsen, but symptoms can be managed with footwear changes and orthotics.",
      },
      {
        question: "Is bunion surgery painful?",
        answer:
          "Modern minimally invasive techniques significantly reduce pain and swelling.",
      },
      {
        question: "How long before I can walk normally?",
        answer:
          "Most patients walk in protective footwear immediately and resume normal walking in 4–6 weeks.",
      },
      {
        question: "Can bunions come back?",
        answer:
          "Proper correction minimizes recurrence, especially with the Lapidus procedure for severe cases.",
      },
      {
        question: "When should I consider surgery?",
        answer:
          "If pain interferes with walking or shoes no longer fit, surgical correction is recommended.",
      },
    ],
  },

  // Toe Deformity Correction
  {
    title: "Toe Deformity Correction",
    icon: "/Images/treatment_icon_26.png",

    subtitle:
      "Treatment for common toe deformities (hammer, claw, mallet toes) using conservative measures and precise surgical correction when needed.",

    howItHelps:
      "Toe deformity correction restores toe alignment and function, relieves pressure and pain, improves gait and shoe comfort, and prevents calluses and ulcers. Treatment ranges from splints and padding to minimally invasive tendon/osteotomy procedures or fusion for rigid deformities.",

    whyDeteriorate:
      "Toe deformities progress due to muscle/tendon imbalance, long-term poor footwear (narrow toe box/high heels), arthritis, prior trauma, neuropathy, or untreated early deformity. Over time fixed contractures, pressure sores, and painful corns develop, worsening function and pain.",

    benefits: [
      "Relieves forefoot pain and pressure",
      "Improves ability to wear normal shoes",
      "Restores toe alignment and balance",
      "Prevents ulcers, corns, and calluses",
      "Minimally invasive options available",
      "Improves gait and walking comfort",
      "High success rate with appropriate procedure",
    ],

    symptoms: [
      {
        title: "Visible toe deformity",
        description: "hammer, claw or mallet toe posture",
      },
      {
        title: "Pain on shoe pressure",
        description: "blisters, corns, or calluses over toes",
      },
      {
        title: "Difficulty fitting shoes",
        description: "tight or painful footwear",
      },
      {
        title: "Toe stiffness",
        description: "difficulty straightening or bending toe",
      },
      {
        title: "Pain while walking",
        description: "especially on hard surfaces",
      },
      {
        title: "Open sores in neuropathy",
        description: "risk in diabetic patients",
      },
    ],

    procedures: [
      {
        name: "Conservative Care",
        bestFor: "Flexible or early deformities",
        involves: "Shoe modification, toe splints, padding, physiotherapy",
        recovery: "Immediate symptom relief; ongoing use",
        description:
          "Non-surgical measures relieve pressure, correct mild deformity, and delay need for surgery.",
      },
      {
        name: "Tendon Release / Transfer",
        bestFor: "Flexible deformities caused by muscle imbalance",
        involves: "Lengthening or transferring tendons to rebalance toe forces",
        recovery: "4–8 weeks",
        description:
          "Restores tendon balance allowing toe to straighten without bone cuts.",
      },
      {
        name: "Phalangeal Osteotomy (Toe Bone Realignment)",
        bestFor: "Moderate structural deformities",
        involves: "Small bone cuts and fixation to realign toe",
        recovery: "6–10 weeks",
        description: "Corrects bony alignment while preserving joint function.",
      },
      {
        name: "Arthrodesis (Toe Fusion)",
        bestFor: "Rigid, painful deformities or severe arthritis",
        involves: "Fusion of interphalangeal joint to hold toe straight",
        recovery: "8–12 weeks",
        description:
          "Provides permanent straightening and reliable pain relief for fixed deformities.",
      },
      {
        name: "Minimally Invasive Correction (Percutaneous)",
        bestFor: "Mild to moderate deformities seeking quick recovery",
        involves: "Small incisions with burr or needle techniques",
        recovery: "3–6 weeks",
        description:
          "Less tissue trauma, smaller scars and faster return to shoes.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Assessment & Conservative Start",
        items: [
          "Clinical exam and foot X-rays",
          "Shoe advice and orthotic trial",
          "Begin splints and toe exercises",
        ],
      },
      {
        phase: "Phase 2",
        title: "Trial of Non-Surgical Care (4–8 weeks)",
        items: [
          "Monitor symptom improvement",
          "Adjust padding/insoles",
          "Decide on surgical need if pain persists",
        ],
      },
      {
        phase: "Phase 3",
        title: "Surgery Day (If Required)",
        items: [
          "Day-care or short hospital stay",
          "Local or regional anesthesia",
          "Corrective procedure performed",
        ],
      },
      {
        phase: "Phase 4",
        title: "Early Recovery (0–6 weeks)",
        items: [
          "Protected weight bearing in special shoe",
          "Wound care and pain control",
          "Begin gentle toe mobilization",
        ],
      },
      {
        phase: "Phase 5",
        title: "Rehabilitation (6–12 weeks)",
        items: [
          "Gradual return to normal shoes",
          "Strengthening and gait retraining",
          "Final alignment assessment",
        ],
      },
    ],

    highlights: {
      title: "Toe pain or visible deformity?",
      description:
        "Early treatment prevents progression. We offer tailored conservative and surgical options to restore comfort and function.",
      button: "Book Foot Specialist Consultation",
    },

    testimonials: [
      {
        name: "Neeraj Kumar",
        age: 54,
        quote:
          "My hammer toe made walking painful. After a simple tendon correction I can wear normal shoes again.",
        rating: 5,
      },
      {
        name: "Sonia Patel",
        age: 39,
        quote:
          "Minimally invasive correction fixed my toe with almost no scar and quick recovery—very happy with the result.",
        rating: 5,
      },
      {
        name: "Ashok Mehta",
        age: 68,
        quote:
          "Fusion solved my painful rigid toe. I walk comfortably and the corns are gone.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Will toe correction change my foot function?",
        answer:
          "No. Properly planned correction restores normal toe mechanics and usually improves overall foot function.",
      },
      {
        question: "Is fusion the only option for rigid toes?",
        answer:
          "Fusion is best for rigid painful deformities; other options suit flexible deformities.",
      },
      {
        question: "How long before I can wear normal shoes?",
        answer:
          "Many return to wide-fitting shoes in 4–8 weeks; full normal footwear by 8–12 weeks depending on procedure.",
      },
      {
        question: "Are results permanent?",
        answer:
          "Yes—surgical corrections are long-lasting when underlying causes (shoe choice, biomechanics) are addressed.",
      },
      {
        question: "Is surgery safe for diabetics?",
        answer:
          "Yes, with careful pre-op assessment and wound care. Diabetic neuropathy increases risks and requires close follow-up.",
      },
    ],
  },

  // Ankle Sprain Treatment
  {
    title: "Ankle Sprain",
    icon: "/Images/treatment_icon_27.png",

    subtitle:
      "Comprehensive evaluation and treatment of ankle sprains to restore stability, reduce pain, and prevent long-term complications such as chronic instability.",

    howItHelps:
      "Ankle sprain treatment reduces pain and swelling, restores joint stability, prevents recurrent sprains, and helps you return to daily activities and sports safely. Advanced rehabilitation strengthens ligaments and improves balance to avoid future injuries.",

    whyDeteriorate:
      "Ankle sprains worsen due to untreated ligament tears, early return to sports, poor footwear, weak ankle muscles, flat feet, or failed initial healing. Repeated sprains loosen the ligaments and cause chronic instability and early joint wear.",

    benefits: [
      "Faster pain relief and swelling control",
      "Restoration of full ankle motion",
      "Prevents recurrent sprains",
      "Strong ligament healing",
      "Better balance and stability",
      "Safe return to sports",
      "Reduced risk of long-term arthritis",
    ],

    symptoms: [
      { title: "Sudden ankle pain", description: "after twisting injury" },
      { title: "Swelling & bruising", description: "around outer ankle" },
      { title: "Difficulty walking", description: "pain on weight bearing" },
      {
        title: "Instability",
        description: "ankle feels like it might give way",
      },
      { title: "Tenderness", description: "over lateral ligaments" },
      { title: "Recurrent sprains", description: "frequent twisting episodes" },
    ],

    procedures: [
      {
        name: "RICE Protocol (Rest, Ice, Compression, Elevation)",
        bestFor: "Fresh mild-to-moderate sprains",
        involves: "Immediate swelling and pain control",
        recovery: "1–2 weeks",
        description:
          "Standard early treatment reduces inflammation and helps ligaments begin healing.",
      },
      {
        name: "Physiotherapy & Strength Training",
        bestFor: "Grade 1–2 sprains and chronic instability",
        involves: "Strength, balance, and proprioception training",
        recovery: "4–8 weeks",
        description:
          "Prevents recurrence and restores full functional stability.",
      },
      {
        name: "Brace Support / Taping",
        bestFor: "Athletes or unstable ankles",
        involves: "External support during early phase",
        recovery: "Immediate support",
        description:
          "Improves stability during healing and allows safe movement.",
      },
      {
        name: "PRP / Regenerative Injection",
        bestFor: "Partial ligament tears",
        involves: "Platelet-rich plasma injection",
        recovery: "4–6 weeks",
        description:
          "Speeds up ligament healing and reduces long-term weakness.",
      },
      {
        name: "Arthroscopic Ligament Repair",
        bestFor: "Severe or recurrent sprains",
        involves: "Tightening or reconstruction of torn ligaments",
        recovery: "8–12 weeks",
        description:
          "Minimally invasive technique for chronic ligament instability.",
      },
      {
        name: "Broström Procedure",
        bestFor: "Chronic ankle instability",
        involves: "Ligament tightening with anchors",
        recovery: "10–12 weeks",
        description:
          "Gold-standard surgery for athletes with repeated ankle sprains.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Immediate Care (0–7 Days)",
        items: [
          "RICE therapy",
          "Avoid weight-bearing if severe",
          "Initial swelling reduction",
        ],
      },
      {
        phase: "Phase 2",
        title: "Early Recovery (Week 1–3)",
        items: [
          "Pain-free weight-bearing",
          "Ankle range-of-motion exercises",
          "Brace or taping support",
        ],
      },
      {
        phase: "Phase 3",
        title: "Rehabilitation (Week 3–8)",
        items: [
          "Strength training",
          "Balance & proprioception exercises",
          "Sport-specific training",
        ],
      },
      {
        phase: "Phase 4",
        title: "Advanced Care (If Chronic Instability)",
        items: [
          "MRI evaluation",
          "Ligament reconstruction planning",
          "Arthroscopic repair (if required)",
        ],
      },
    ],

    highlights: {
      title: "Ankle twisted during sports or walking?",
      description:
        "Get expert treatment to prevent recurrent sprains and restore full ankle strength.",
      button: "Book Ankle Specialist",
    },

    testimonials: [
      {
        name: "Abhishek Rana",
        age: 24,
        quote:
          "After my sprain, physiotherapy restored full strength. I’m back to running confidently.",
        rating: 5,
      },
      {
        name: "Priya Sharma",
        age: 30,
        quote:
          "I used to get repeated ankle sprains. The Broström surgery fixed the instability permanently.",
        rating: 5,
      },
      {
        name: "Kanishk Gupta",
        age: 19,
        quote:
          "PRP injection helped my ligament heal fast. Back to basketball in a month!",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "How do I know if my ankle sprain is serious?",
        answer:
          "Inability to walk, severe swelling, or bruising may indicate a ligament tear — an X-ray/MRI is recommended.",
      },
      {
        question: "How long does recovery take?",
        answer:
          "Mild sprains: 1–2 weeks. Moderate sprains: 4–8 weeks. Severe sprains may need surgery.",
      },
      {
        question: "Should I use a brace?",
        answer:
          "Yes. Bracing supports the ankle during healing and reduces risk of repeat injury.",
      },
      {
        question: "Do all ankle sprains need MRI?",
        answer:
          "Not all. MRI is required only if pain persists, swelling is severe, or instability continues.",
      },
      {
        question: "Can sprains lead to arthritis?",
        answer:
          "Repeated sprains or untreated tears can increase the risk of ankle arthritis.",
      },
    ],
  },

  //Ankle Instability
  {
    title: "Ankle Instability",
    icon: "/Images/treatment_icon_25.png",

    subtitle:
      "Evaluation and treatment for chronic ankle instability to restore stability, prevent re-injury, and return you safely to activity.",

    howItHelps:
      "Treatment strengthens the ligaments and muscles around the ankle, restores balance and proprioception, and corrects mechanical problems. This reduces giving-way episodes, pain, and long-term joint wear.",

    whyDeteriorate:
      "Instability progresses when initial ligament injuries are not fully healed, rehabilitation is incomplete, or repeated sprains occur. Weak muscles, poor balance, foot malalignment, or untreated nerve problems also prevent recovery and cause chronic instability.",

    benefits: [
      "Restores ankle stability",
      "Reduces risk of repeat sprains",
      "Improves balance and confidence",
      "Allows safe return to sports and work",
      "Prevents long-term cartilage damage",
      "Combines rehab and surgery when needed",
    ],

    symptoms: [
      {
        title: "Frequent giving way",
        description: "ankle feels unstable during walking or sport",
      },
      {
        title: "Recurrent sprains",
        description: "twisting injuries with minimal force",
      },
      {
        title: "Ongoing pain",
        description: "around the outer ankle after activity",
      },
      {
        title: "Swelling after exertion",
        description: "intermittent swelling after long walks or exercise",
      },
      {
        title: "Difficulty on uneven ground",
        description: "reduced confidence while walking outdoors",
      },
      {
        title: "Reduced performance",
        description: "cannot return to previous sports level",
      },
    ],

    procedures: [
      {
        name: "Physiotherapy & Proprioception Training",
        bestFor: "Most patients, first-line",
        involves: "Balance, strengthening, and neuromuscular exercises",
        recovery: "4–12 weeks",
        description:
          "Structured rehab restores muscle control and prevents re-injury in the majority of cases.",
      },
      {
        name: "Functional Bracing & Taping",
        bestFor: "Support during rehab or sport",
        involves: "External support to protect ligaments",
        recovery: "Immediate support; used for months as needed",
        description:
          "Provides stability during activity and allows safe progressive loading.",
      },
      {
        name: "PRP / Injection Therapy",
        bestFor: "Partial ligament tears or chronic symptoms",
        involves: "Biologic injections to promote healing",
        recovery: "4–8 weeks",
        description:
          "May help tissue healing and reduce symptoms when combined with rehab.",
      },
      {
        name: "Arthroscopic Assessment & Repair",
        bestFor: "Persistent mechanical symptoms or cartilage damage",
        involves: "Keyhole evaluation and targeted repair or debridement",
        recovery: "6–10 weeks",
        description:
          "Allows treatment of associated cartilage injuries and precise ligament repair.",
      },
      {
        name: "Broström-Gould Ligament Repair",
        bestFor: "Chronic lateral ligament instability",
        involves: "Open repair and reinforcement with local tissues",
        recovery: "10–12 weeks",
        description:
          "Gold-standard surgery for recurrent instability with high success rates.",
      },
      {
        name: "Ligament Reconstruction / Tendon Graft",
        bestFor: "Severe tears or failed previous repair",
        involves: "Use of tendon graft to reconstruct ligaments",
        recovery: "12–16 weeks",
        description:
          "Rebuilds strong ligament support when native tissue is insufficient.",
      },
      {
        name: "Correction of Foot/Ankle Alignment (Osteotomy)",
        bestFor: "Instability due to malalignment",
        involves: "Bone realignment to restore mechanics",
        recovery: "8–16 weeks",
        description:
          "Addresses underlying structural causes to improve long-term stability.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Assessment & Imaging",
        items: [
          "Clinical instability tests",
          "X-ray to rule out fractures",
          "MRI to check ligaments/cartilage",
        ],
      },
      {
        phase: "Phase 2",
        title: "Conservative Care (0–12 weeks)",
        items: [
          "Physiotherapy plan",
          "Bracing/taping during activity",
          "Activity modification",
        ],
      },
      {
        phase: "Phase 3",
        title: "Adjunct Therapies (4–12 weeks)",
        items: [
          "PRP or targeted injections if needed",
          "Progressive sport-specific training",
        ],
      },
      {
        phase: "Phase 4",
        title: "Surgical Planning (If Conservative Fails)",
        items: [
          "Choose repair vs reconstruction",
          "Correct alignment problems if required",
        ],
      },
      {
        phase: "Phase 5",
        title: "Post-Op Rehabilitation (10–16 weeks)",
        items: [
          "Protected weight bearing",
          "Gradual mobilization",
          "Strength & proprioception training",
        ],
      },
    ],

    highlights: {
      title: "Tired of your ankle giving way?",
      description:
        "We combine proven rehab and modern surgeries to restore lasting ankle stability.",
      button: "Book Ankle Instability Consultation",
    },

    testimonials: [
      {
        name: "Arjun Patel",
        age: 26,
        quote:
          "Repeated sprains stopped after focused rehab and a simple repair. I play football again without fear.",
        rating: 5,
      },
      {
        name: "Meera Joshi",
        age: 38,
        quote:
          "Bracing and physiotherapy restored my confidence. Later, a targeted repair fixed the remaining problem.",
        rating: 5,
      },
      {
        name: "Vikram Sen",
        age: 45,
        quote:
          "After failed conservative care elsewhere, ligament reconstruction gave me a stable ankle and no more pain.",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Will physiotherapy alone fix ankle instability?",
        answer:
          "Many patients improve significantly with structured physiotherapy and balance training. Surgery is reserved for those with persistent instability or mechanical problems.",
      },
      {
        question: "How soon can I return to sports after surgery?",
        answer:
          "Return to sport typically takes 3–6 months depending on the procedure and sport's demands; full contact sports may take longer.",
      },
      {
        question: "What is the success rate of Broström repair?",
        answer:
          "Broström repair has a high success rate (over 80–90%) for lateral ankle instability when combined with proper rehab.",
      },
      {
        question: "Can instability lead to arthritis?",
        answer:
          "Yes. Recurrent instability and abnormal joint loading increase the risk of ankle cartilage damage and early arthritis.",
      },
      {
        question: "How can I prevent recurrence?",
        answer:
          "Complete rehabilitation, appropriate footwear, ankle strengthening, proprioception training, and using braces during high-risk activities reduce recurrence risk.",
      },
    ],
  },

  //Ganglion Cyst Removal
  {
    title: "Ganglion Cyst Removal",
    icon: "/Images/treatment_icon_28.png",

    subtitle:
      "Safe and effective treatment for ganglion cysts using aspiration, minimally invasive removal, or surgical excision to relieve pain and prevent recurrence.",

    howItHelps:
      "Ganglion cyst removal eliminates the painful or cosmetic lump, restores smooth wrist/hand movement, and prevents compression on nearby nerves or tendons. Treatment options vary from needle aspiration to complete surgical excision depending on severity and recurrence.",

    whyDeteriorate:
      "Ganglion cysts form when joint fluid leaks out and collects in a sac. They may enlarge with repetitive movement, wrist strain, injury, or chronic tendon irritation. Without proper removal, they often return and can compress nerves causing pain or weakness.",

    benefits: [
      "Instant relief from lump-related discomfort",
      "Restores joint movement",
      "Reduces nerve compression symptoms",
      "Improves wrist/hand function",
      "Cosmetic improvement",
      "Minimally invasive surgical options",
      "Low recurrence when fully excised",
    ],

    symptoms: [
      {
        title: "Visible lump",
        description: "soft, fluid-filled bump near wrist, hand, ankle or foot",
      },
      {
        title: "Pain with movement",
        description: "especially gripping or twisting",
      },
      { title: "Numbness or tingling", description: "due to nerve pressure" },
      {
        title: "Weak grip strength",
        description: "difficulty lifting or holding objects",
      },
      { title: "Fluctuating size", description: "lump grows with activity" },
      {
        title: "Cosmetic concern",
        description: "patients bothered by appearance",
      },
    ],

    procedures: [
      {
        name: "Aspiration (Fluid Removal)",
        bestFor: "Small, uncomplicated cysts",
        involves: "Removing cyst fluid with a needle",
        recovery: "1–3 days",
        description:
          "Quick outpatient procedure; may need repeat sessions because recurrence is common.",
      },
      {
        name: "Steroid Injection",
        bestFor: "Inflamed cysts",
        involves: "Injection after aspiration",
        recovery: "2–5 days",
        description:
          "Reduces inflammation and delays recurrence, but may not cure permanently.",
      },
      {
        name: "Open Surgical Excision",
        bestFor: "Recurrent or large cysts",
        involves: "Removing cyst wall and stalk",
        recovery: "1–3 weeks",
        description: "Most reliable method with the lowest recurrence rate.",
      },
      {
        name: "Arthroscopic Cyst Removal",
        bestFor: "Wrist ganglions",
        involves: "Keyhole removal using small incisions",
        recovery: "1–2 weeks",
        description:
          "Less scarring, quicker healing, and high precision for wrist cysts.",
      },
      {
        name: "Immobilization & Physiotherapy",
        bestFor: "Post-treatment recovery",
        involves: "Brace support and strengthening",
        recovery: "2–4 weeks",
        description:
          "Ensures smooth recovery and reduces recurrence risk by improving joint mechanics.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Initial Assessment",
        items: [
          "Physical examination",
          "Ultrasound to confirm cyst",
          "Activity modification advice",
        ],
      },
      {
        phase: "Phase 2",
        title: "Non-Surgical Options",
        items: [
          "Aspiration of cyst",
          "Steroid injection (if inflamed)",
          "Wrist splint for temporary relief",
        ],
      },
      {
        phase: "Phase 3",
        title: "Surgical Removal (If Required)",
        items: [
          "Local anesthesia",
          "Open or arthroscopic excision",
          "Removal of cyst stalk",
        ],
      },
      {
        phase: "Phase 4",
        title: "Recovery (1–3 Weeks)",
        items: [
          "Wound care",
          "Physiotherapy for wrist motion",
          "Gradual return to activity",
        ],
      },
    ],

    highlights: {
      title: "Painful or recurring wrist lump?",
      description:
        "We provide minimally invasive and surgical options for complete and safe removal of ganglion cysts.",
      button: "Book Hand & Wrist Specialist",
    },

    testimonials: [
      {
        name: "Shalini Verma",
        age: 32,
        quote:
          "The cyst on my wrist was painful for years. Removal surgery was quick and recovery was smooth!",
        rating: 5,
      },
      {
        name: "Mohit Khanna",
        age: 27,
        quote:
          "Aspiration worked temporarily, but surgical excision gave a permanent solution. Highly satisfied.",
        rating: 5,
      },
      {
        name: "Riya Malhotra",
        age: 40,
        quote:
          "Arthroscopic removal left almost no scar. My hand feels normal again!",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Do ganglion cysts go away on their own?",
        answer:
          "Yes, some may shrink on their own, but many persist or return without treatment.",
      },
      {
        question: "Is removal painful?",
        answer:
          "Aspiration is nearly painless; surgical removal is done under local anesthesia with minimal discomfort.",
      },
      {
        question: "Is recurrence common?",
        answer:
          "Aspiration has a high recurrence rate, while surgical excision has the lowest recurrence.",
      },
      {
        question: "How soon can I use my hand after surgery?",
        answer:
          "Light activities are allowed in 2–5 days; full use in 1–3 weeks depending on procedure.",
      },
      {
        question: "Is a ganglion cyst cancerous?",
        answer:
          "No. Ganglion cysts are benign and not dangerous, but can cause discomfort or nerve compression.",
      },
    ],
  },

  //Trigger Finger Release
  {
    title: "Trigger Finger Release",
    icon: "/Images/treatment_icon_29.png",

    subtitle:
      "Effective treatment for Trigger Finger (stenosing tenosynovitis) using non-surgical therapy, injections, or minimally invasive release to restore smooth finger movement.",

    howItHelps:
      "Trigger Finger Release frees the trapped tendon, allowing the finger to bend and straighten smoothly. Treatment reduces pain, clicking, and locking, restores full grip strength, and prevents long-term stiffness.",

    whyDeteriorate:
      "Trigger Finger occurs when the tendon sheath becomes inflamed and narrowed. Repetitive hand use, diabetes, rheumatoid arthritis, and age-related tendon wear can worsen the condition. Without treatment, the finger may lock permanently.",

    benefits: [
      "Immediate relief from locking/clicking",
      "Restores normal finger movement",
      "Quick recovery and minimal downtime",
      "Improved grip and hand strength",
      "Very small incision (in surgical option)",
      "High success rate (95%+)",
      "Low recurrence after proper release",
    ],

    symptoms: [
      { title: "Clicking sound", description: "finger catches while bending" },
      {
        title: "Painful locking",
        description: "finger stuck in bent position",
      },
      {
        title: "Morning stiffness",
        description: "difficulty moving finger on waking",
      },
      {
        title: "Tenderness",
        description: "pain at base of the affected finger/thumb",
      },
      { title: "Nodule formation", description: "small lump in tendon sheath" },
      { title: "Weak grip", description: "difficulty holding objects" },
    ],

    procedures: [
      {
        name: "Activity Modification & Splinting",
        bestFor: "Early-stage trigger finger",
        involves: "Night splinting to rest the tendon",
        recovery: "2–6 weeks",
        description:
          "Helps reduce tendon irritation and prevents finger locking in early stages.",
      },
      {
        name: "NSAIDs & Physiotherapy",
        bestFor: "Mild-to-moderate cases",
        involves: "Anti-inflammatory therapy and tendon-gliding exercises",
        recovery: "2–4 weeks",
        description: "Reduces swelling and helps smooth tendon movement.",
      },
      {
        name: "Steroid Injection",
        bestFor: "Moderate cases not responding to splinting",
        involves: "Direct corticosteroid injection into the sheath",
        recovery: "1–2 weeks",
        description:
          "Most effective non-surgical treatment with 60–80% success rate.",
      },
      {
        name: "Percutaneous Release",
        bestFor: "Severe locking",
        involves: "Needle technique to release A1 pulley",
        recovery: "1–2 weeks",
        description:
          "Minimally invasive option done under local anesthesia with quick recovery.",
      },
      {
        name: "Open Surgical Release",
        bestFor: "Chronic, recurrent, or severe cases",
        involves: "Small incision to cut the tight A1 pulley",
        recovery: "1–3 weeks",
        description:
          "Gold-standard treatment with >95% success and minimal recurrence.",
      },
    ],

    timeline: [
      {
        phase: "Phase 1",
        title: "Early Management (0–4 Weeks)",
        items: [
          "Splinting at night",
          "Activity modification",
          "Anti-inflammatory medications",
        ],
      },
      {
        phase: "Phase 2",
        title: "Intermediate Care (Week 2–6)",
        items: [
          "Steroid injection if no improvement",
          "Tendon gliding exercises",
          "Ultrasound therapy (if needed)",
        ],
      },
      {
        phase: "Phase 3",
        title: "Surgical Release (If Required)",
        items: [
          "Local anesthesia",
          "Percutaneous or open release",
          "Immediate movement encouraged",
        ],
      },
      {
        phase: "Phase 4",
        title: "Recovery (1–3 Weeks)",
        items: [
          "Light use of hand",
          "Exercise for full mobility",
          "Grip strengthening",
        ],
      },
    ],

    highlights: {
      title: "Finger locking or painful snapping?",
      description:
        "Trigger Finger Release provides fast, long-lasting relief with high success rates.",
      button: "Book Hand Specialist",
    },

    testimonials: [
      {
        name: "Rohini Sharma",
        age: 47,
        quote:
          "My finger used to lock every morning. After a quick release procedure, I have full movement with zero pain!",
        rating: 5,
      },
      {
        name: "Gaurav Singh",
        age: 55,
        quote:
          "The steroid injection worked wonders for me. Instant relief and smooth movement.",
        rating: 5,
      },
      {
        name: "Mohammed Irfan",
        age: 38,
        quote:
          "Open release surgery fixed my severe trigger finger permanently. Fast procedure and recovery!",
        rating: 5,
      },
    ],

    faqs: [
      {
        question: "Is trigger finger permanent?",
        answer:
          "No. With timely treatment — splints, injections, or release — the condition is fully treatable.",
      },
      {
        question: "Is surgery the only cure?",
        answer:
          "No. Early cases respond well to splints & injections. Surgery is needed only if symptoms persist or finger locks frequently.",
      },
      {
        question: "Is the release procedure painful?",
        answer:
          "It is done under local anesthesia, so there is minimal discomfort and very fast recovery.",
      },
      {
        question: "How soon can I use my hand?",
        answer:
          "Most patients use their hand normally within 1–3 days after percutaneous/open release.",
      },
      {
        question: "Can it come back?",
        answer:
          "Recurrence is uncommon after proper surgical release, but may return after injection-only treatment.",
      },
    ],
  },
];
