/* eslint-disable @next/next/no-img-element */
import Navbar from "@/component/Header";
import FaqAccordion from "@/component/FaqAccordion";
import Footer from "@/component/Footer";
import Link from "next/link";

import { FaMedal, FaHospital } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import {
  FaAward,
  FaHospitalSymbol,
  FaChartLine,
  FaStethoscope,
  FaCalendarCheck,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const services = [
  {
    title: null,
    description: null,
    treatmentTitle: null,
    treatments: [],
    quote: null,
    buttonText: null,
  },

  {
    title: "Joint Replacement",
    description:
      "Joint pain limiting your movement? Dr. Hemendra Agarwal is an experienced joint replacement surgeon in Jaipur offering modern, minimally invasive procedures for patients with arthritis, cartilage damage, or failed past implants.",
    treatmentTitle: "Treatments Offered",
    treatments: [
      "Total & Partial Knee Replacement",
      "Hip Replacement Surgery",
      "Shoulder & Elbow Replacement",
      "Reverse Shoulder Replacement",
      "Revision Joint Replacement Surgeries",
      "Painless & Quick Recovery Joint Surgery",
    ],
    quote:
      "Looking for the best knee replacement surgeon in Jaipur? Book your consult today.",
    buttonText: "Learn More About Joint Replacement →",
  },
  {
    title: "Arthroscopy - Keyhole Surgery",
    description:
      "Arthroscopy is a minimally invasive procedure that allows your orthopedic surgeon to diagnose and treat joint problems using a small camera and instruments. It’s especially useful for early-stage cartilage injuries and sports-related tears.",
    treatmentTitle: "Treatments Offered",
    treatments: [
      " Knee Arthroscopy (for Meniscus, ACL, PCL)",
      "Shoulder Arthroscopy (for Rotator Cuff, Labrum)",
      "Ankle, Wrist, and Elbow Arthroscopy",
      "Diagnostic & Corrective Keyhole Surgery",
    ],
    quote:
      "Faster recovery, minimal pain, and reduced risk of complications with arthroscopy in Jaipur.",
    buttonText: "Explore Arthroscopic Treatments →",
  },

  {
    title: "Sports Injury & Ligament Reconstruction",
    description:
      "From athletes to everyday active individuals, ligament tears and soft tissue injuries can drastically affect performance and mobility. Dr. Agarwal is a trusted sports injury doctor in Jaipur, helping patients get back to full strength with personalized rehab protocols and advanced surgeries.",
    treatmentTitle: "Treatments Offered",
    treatments: [
      "ACL/PCL Reconstruction",
      "Meniscus Repair & Debridement",
      "Shoulder Dislocation Surgery",
      "Labral Tear Repairs",
      "Sports Rehab & Return-to-Play Guidance",
    ],
    quote: "",
    buttonText: "Get Treated by Jaipur’s Top Ligament Surgeon →",
  },

  {
    title: "Fracture & Trauma Surgery",
    description:
      "Dr. Hemendra Agarwal has handled thousands of emergency and complex fracture cases at SMS Hospital Jaipur. Whether you have a simple fracture or require implant surgery, you’ll receive immediate and expert care.",
    treatmentTitle: "Fracture Treatments",
    treatments: [
      "Open & Closed Reduction",
      "Internal Fixation (Plates, Screws, Rods)",
      "Geriatric & Pediatric Fracture Management",
      "Complex Polytrauma Surgeries",
      "Non-healing Fracture & Revision Surgery",
    ],
    quote: null,
    buttonText: "Get Emergency Trauma Care →",
  },

  {
    title: null,
    description: null,
    treatmentTitle: null,
    treatments: [],
    quote: null,
    buttonText: null,
  },
  {
    title: null,
    description: null,
    treatmentTitle: null,
    treatments: [],
    quote: null,
    buttonText: null,
  },
  {
    title: "Shoulder, Elbow & Upper Limb Surgeries",
    description:
      "Persistent pain or instability in your shoulder or elbow may require surgical intervention. Dr. Agarwal provides specialized upper limb orthopedic care that restores strength and stability.",
    treatmentTitle: "Conditions Treated",
    treatments: [
      "Recurrent Shoulder Dislocations",
      "Rotator Cuff Tears",
      "Tennis Elbow & Golfer’s Elbow",
      "Elbow Ligament Repair & Realignment",
      "Frozen Shoulder",
    ],
    quote: null,
    buttonText: "Explore Shoulder & Elbow Treatments →",
  },

  {
    title: "Foot, Ankle, Hand & Wrist Procedures",
    description:
      "Pain or deformity in your feet, hands, or wrists can disrupt your daily activities. Dr. Hemendra Agarwal treats a wide range of peripheral orthopedic problems with both surgical and non-surgical options.",
    treatmentTitle: "We Treat",
    treatments: [
      "Carpal Tunnel Syndrome",
      " Plantar Fasciitis",
      "Flat Foot, Bunions, and Toe Deformities",
      "Ankle Sprains & Instability",
      "Ganglion Cyst Removal",
      "Trigger Finger Release",
    ],
    quote: null,
    buttonText: "See Hand & Foot Surgery Options →",
  },
];

const highlights = [
  {
    icon: <FaAward size={55} color="#307bc4" />,
    text: "15+ Years of Expertise in orthopedic care",
  },
  {
    icon: <FaHospitalSymbol size={55} color="#307bc4" />,
    text: "Practicing at SMS Hospital & Vaishali Nagar Clinic",
  },
  {
    icon: <FaChartLine size={55} color="#307bc4" />,
    text: "3000+ Successful Surgeries with 95%+ Satisfaction",
  },
  {
    icon: <FaStethoscope size={55} color="#307bc4" />,
    text: "Rusted for ethical, accurate diagnosis",
  },
  {
    icon: <GiBrain size={55} color="#307bc4" />,
    text: "Personalized post-op rehab & recovery planning",
  },
];

const faqs = [
  {
    question: "What is the cost of knee replacement surgery in Jaipur?",
    answer:
      "The cost depends on implant type, hospital, and severity. We offer affordable packages with insurance assistance.",
  },
  {
    question: "How long is the recovery after ligament surgery?",
    answer:
      "Most patients return to basic activities in 2–4 weeks and sports in 3–6 months.",
  },
  {
    question: " Is arthroscopy better than open surgery?",
    answer:
      "Yes, arthroscopy offers smaller cuts, less pain, and quicker healing in most cases.",
  },
];

export default function ExpertisePage() {
  return (
    <main>
      {/*Header*/}
      <Navbar />
      {/*Hero section */}
      <section className="flex flex-col lg:flex-row items-center gap-10 px-6 md:px-20 py-10 bg-gradient-to-t from-[#197d85]/90 to-[#97a345]/90">
        {/* Title Section */}
        <div className="lg:w-3/2 space-y-5 order-2 lg:order-1">
          <h1 className="text-4xl md:text-6xl font-bold text-black">
            Our orthopedic treatments in Jaipur
          </h1>
          <p className="mt-4 text-lg text-black">
            If you&apos;re searching for the best orthopedic doctor in Jaipur,
            look no further. With over 15 years of experience and more than 3000
            successful surgeries, Dr. Hemendra Agarwal is known for delivering
            advanced, personalized treatments for joint, ligament, bone, and
            sports-related conditions.
          </p>
          <p>
            Patients from Vaishali Nagar, Mansarovar, Ajmer Road, and all across
            Rajasthan choose Dr. Agarwal for his compassionate care, modern
            techniques, and accurate diagnosis.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
            <div className="flex items-center bg-white  backdrop-blur mt-7 px-7 py-4 w-fit text-gray-800 rounded-2xl tracking-tight leading-tight shadow-lg">
              <FaHospital size={50} color="#307bc4" />
              <span className="ml-4 text-gray-500 text-lg">
                Clinics in Mahapura & SMS Hospital Jaipur
              </span>
            </div>
            <div className="flex items-center bg-white  backdrop-blur mt-7 px-7 py-4 w-fit text-gray-800 rounded-2xl tracking-tight leading-tight shadow-lg">
              <FaHospital size={50} color="#307bc4" />
              <span className="ml-4 text-gray-500 text-lg">
                Pratap Nagar Clinic - Jaipur
              </span>
            </div>
          </div>
        </div>
        <div className="relative w-full order-1 lg:order-2">
          <img
            src="/Images/expertise_img.png"
            alt="Expertise"
            className="w-200"
          />
          <div className="flex flex-col justify-center items-center bg-white backdrop-blur absolute top-10 p-4 text-gray-800 rounded-2xl tracking-tight leading-tight shadow-lg">
            <FaMedal size={50} color="#307bc4" className="mb-3" />
            <span className="ml-2 text-gray-500">
              15+ Years of <br /> Experience
            </span>
          </div>
          <div className="flex justify-center items-center bg-white backdrop-blur absolute bottom-8 lg:-right-10 p-4 text-gray-800 rounded-2xl tracking-tight leading-tight shadow-lg">
            <MdHealthAndSafety size={50} color="#307bc4" />
            <span className="ml-2 text-gray-500">
              3000+ Successful Surgeries
            </span>
          </div>
        </div>
      </section>
      {/*Services section */}
      <section className="px-6 md:px-20 mt-20">
        <h2 className="text-2xl md:text-3xl text-[#307bc4] font-semibold text-center mt-10 mb-4">
          Our Specialized Orthopedic Services
        </h2>
        <p className="text-xl md:text-2xl text-center mb-10 font-semibold text-slate-800">
          We offer a wide range of treatments tailored to your orthopedic
          condition - from conservative management to surgical excellence.
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-3xl p-6 bg-white transform transition-all duration-300  
          ${
            service.title !== null
              ? "bg-gradient-to-br from-[#d0f3f6] via-[#f1f5d0] to-[#e6f1e8] hover:scale-[1.03] hover:shadow-xl"
              : "bg-transparent shadow-none hidden lg:block"
          }`}
            >
              <h3 className="text-2xl font-semibold mb-3 text-slate-800">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-slate-800 mb-2">
                  {service.treatmentTitle}
                </h4>
                <ul className="text-slate-600 text-sm list-disc list-inside space-y-1">
                  {service.treatments.map((treatment, idx) => (
                    <li key={idx}>{treatment}</li>
                  ))}
                </ul>
              </div>

              <p className="text-slate-700 text-sm mb-5">{service.quote}</p>

              <button
                className={`bg-gradient-to-r from-[#28D2DF] to-[#197d85] text-white px-4 py-2 rounded-xl 
            font-medium text-sm shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg
            ${service.title === null ? "hidden" : "inline-block"}
          `}
              >
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>
      {/*Why choose us section */}
      <section className="py-20 bg-gradient-to-r from-[#197d85] to-[#97a345] text-white mx-7 md:mx-20 mt-24 mb-50 rounded-4xl">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-18">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center -mb-50">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white text-[#197d85] text-center w-full md:h-72 max-w-sm p-6 rounded-3xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:bg-[#197d85] hover:text-white"
              >
                <div className="mb-10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-1">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* clinic location section */}
      <section className="relative px-7 md:px-20 mb-4">
        <h2 className="text-4xl font-bold text-center mb-3 md:mb-10">
          Visit Our Clinics in Jaipur
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-7 lg:gap-32 relative">
          {/* Card 1 */}
          <div className="bg-white shadow-xl rounded-2xl p-6 w-full md:w-1/2 flex flex-col items-center text-center">
            <img
              src="/Images/location_1.webp"
              alt="SMS Hospital Jaipur"
              className="w-80 h-50 mb-4 rounded-2xl"
            />
            <h3 className="text-xl font-semibold mb-2">SMS Hospital Jaipur</h3>
            <p className="text-gray-600">For insured & emergency surgeries</p>
          </div>

          {/* Vertical Divider (only on md and above) */}
          <div className="hidden md:block w-1 h-100  bg-[#197d85]"></div>

          {/* Card 2 */}
          <div className="bg-white shadow-xl rounded-2xl p-6 w-full md:w-1/2 flex flex-col items-center text-center">
            <img
              src="/Images/location_2.webp"
              alt="Vaishali Nagar Clinic"
              className="w-80 h-50 mb-4 rounded-2xl"
            />
            <h3 className="text-xl font-semibold mb-2">
              Vaishali Nagar Clinic
            </h3>
            <p className="text-gray-600">
              For appointments, procedures & follow-ups
            </p>
          </div>
        </div>
        <p className="text-xl text-center font-semibold text-[#307bc4] mt-12 lg:mt-6">
          Both clinics equipped with latest diagnostics & OT facilities.
        </p>
        <div className="flex flex-wrap items-center justify-center mt-7 gap-8">
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#28D2DF] to-[#197d85]  hover:opacity-80 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
            Get Directions & Timing →
          </button>
          <a href="tel:+919210696045" target="_blank">
            <button className="flex items-center gap-2 bg-gradient-to-r from-[#28D2DF] to-[#197d85]  hover:opacity-80 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
              Call Now →
            </button>
          </a>
        </div>
      </section>
      {/*Q&A page */}
      <FaqAccordion faqs={faqs} />
      {/*Book appointment section */}
      <section className="bg-[url('/Images/department_bg.svg')] mt-28 rounded-2xl px-8 flex flex-col lg:flex-row items-center justify-between m-7 md:m-20">
        <div className="relative lg:w-250">
          <img
            src="/Images/dr_hemendra-removebg.png"
            alt="Dr. Hemendra Agarwal"
            width={600}
            height={400}
            className="object-top -mt-40"
          />
        </div>
        {/* Left Content */}
        <div className="lg:max-w-xl w-full">
          <p className="text-[#307bc4] text-lg font-semibold">
            Looking for a trusted orthopedic doctor near you in Jaipur?
          </p>
          <h2 className="text-3xl md:text-3xl font-semibold leading-tighter mb-7">
            Let Dr. Hemendra Agarwal help you get back on your feet with expert
            care, modern treatments, and long-term relief.
          </h2>
          <div className="flex items-center flex-wrap gap-5">
            <Link href="/contact">
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#28D2DF] to-[#197d85]  hover:opacity-80 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
                <FaCalendarCheck size={20} />
                Book Appointment
              </button>
            </Link>
            <a href="tel:+919210696045" target="_blank">
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#28D2DF] to-[#197d85] hover:opacity-80 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
                <FaPhoneAlt size={20} />
                Call Now
              </button>
            </a>
            <a href="https://wa.me/919210696045" target="_blank">
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#28D2DF] to-[#197d85]  hover:opacity-80 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
                <FaWhatsapp size={20} />
                <p>WhatsApp</p>
              </button>
            </a>
          </div>
        </div>

        {/* Right Image */}
      </section>
      {/*Footer*/}
      <Footer />
    </main>
  );
}
