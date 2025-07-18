/* eslint-disable @next/next/no-img-element */
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";
import Link from "next/link";

import { FiUsers } from "react-icons/fi";
import { HiOutlineMicrophone } from "react-icons/hi";

import {
  MdMedicalServices,
  MdVerified,
  MdSchool,
  MdWorkspacePremium,
} from "react-icons/md";

import {
  FaHandshake,
  FaCalendarCheck,
  FaMapMarkerAlt,
  FaHospitalAlt,
  FaUserMd,
  FaPhone,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const chooses = [
  {
    title:
      "I believe in treating patients, not just X-rays every case is unique and deserves personalized care.",
    date: "May 21, 2023",
    image: "/Images/choose.jpeg",
    featured: true,
  },
  {
    title: "Personalized Treatment Planning",
    date: "May 20, 2023",
    image: "/Images/choose_3.jpeg",
  },
  {
    title: "Post-operative Rehab Guidance & Long-term Follow-ups",
    date: "May 15, 2023",
    image: "/Images/choose_2.jpeg",
  },
  {
    title: "Clear Diagnosis & Transparent Communication",
    date: "May 10, 2023",
    image: "/Images/choose_4.jpeg",
  },
];

const Reasons = [
  {
    id: 1,
    title: "Senior Orthopedic Consultant  SMS Hospital",
    description: "SMS Hospital Jaipur - Senior Orthopedic Consultant",
    icon: <FaCalendarCheck className="text-3xl text-blue-500" />,
    position: "right",
  },
  {
    id: 2,
    title: "Private Clinic - Vaishali Nagar",
    description:
      "Private Clinic in Vaishali Nagar Jaipur - OPD, Procedures, Follow-ups",
    icon: <FaHospitalAlt className="text-3xl text-blue-500" />,
    position: "left",
  },
  {
    id: 3,
    title: "Emergency Consults Available",
    description: "Available 6 Days a Week | Emergency Consults on Call",
    icon: <FaUserMd className="text-3xl text-blue-500" />,
    position: "right",
  },
];

export default function Page() {
  return (
    <main>
      {/*Header*/}
      <Navbar />
      {/*Hero section */}
      <section className="flex flex-col lg:flex-row items-center gap-10 px-6 md:px-20 pt-16 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40">
        <div data-aos="fade-right">
          <img
            src="/Images/dr_hemendra-removebg.png"
            alt="Doctor"
            width={860}
            height={700}
            className="rounded-2xl"
          />
        </div>
        <div className="space-y-6 w-full lg:w-2xl">
          <h1
            data-aos="fade-left"
            className="text-4xl md:text-[46px] font-bold mb-8"
          >
            Hemendra Agarwal Experienced Orthopedic Surgeon in Jaipur
          </h1>
          <div
            data-aos="fade-left"
            className="flex flex-wrap items-center gap-4 mb-6"
          >
            <span className="bg-sky-50 px-3 py-1 rounded-full text-sm font-semibold flex items-center transition duration-200 hover:scale-105 hover:shadow-lg">
              Google Reviews <span className="ml-2">⭐⭐⭐⭐⭐</span>
            </span>
            <span className="flex items-center gap-2 bg-sky-50 px-3 py-1 rounded-full text-sm font-semibold transition duration-200 hover:scale-105 hover:shadow-lg">
              Practo Verified <MdVerified color="yellow" size={20} />
            </span>
            <span className="flex items-center gap-2 bg-sky-50 px-3 py-1 rounded-full text-sm font-semibold transition duration-200 hover:scale-105 hover:shadow-lg">
              SMS Hospital Consultant{" "}
              <MdMedicalServices color="yellow" size={20} />
            </span>
          </div>
          <h2 data-aos="fade-left" className="text-2xl font-semibold mb-6">
            Trusted by Thousands, Guided by Experience - Meet Dr. Hemendra
            Agarwal
          </h2>
          <p data-aos="fade-left" className="text-lg lg:w-xl pb-2">
            With over 15 years of clinical and surgical excellence, Dr. Hemendra
            Agarwal is a top-rated orthopedic surgeon in Jaipur, specializing in
            joint replacement, arthroscopy, ligament reconstruction, and sports
            injury management.
          </p>
        </div>
      </section>
      {/*Education & Experience  Section */}
      <section className="w-full px-6 md:px-20 pt-30 lg:pt-50">
        <div className="flex flex-col lg:flex-row w-full gap-12">
          {/* Navigation Arrows */}
          <div>
            <h2
              data-aos="fade-down"
              className="text-3xl md:text-5xl -mt-12 mb-24 lg:mb-16 font-bold text-[#197d85]"
            >
              Educational Background & Clinical Experience
            </h2>
          </div>
          {/* Cards Container with background */}
          <div className="relative flex-1 flex justify-center">
            <div
              className="absolute -top-28 lg:-left-8 md:left-5 w-screen md:w-full lg:w-[860px] h-full bg-gradient-to-b from-[#97a345]/40 to-[#197d85]/40 rounded-3xl z-0"
              style={{ filter: "blur(1px)" }}
            ></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 w-full justify-center">
              {/* Card 1 */}
              <div
                data-aos="fade-up"
                className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center w-full md:w-[380px] max-w-full"
              >
                <div className="mb-6">
                  <MdSchool className="text-6xl text-[#197d85] mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-[#24445c] mb-4">
                  Education
                </h3>
                <ul className="text-gray-500 space-y-3 text-center">
                  <li>MBBS - SMS Medical College, Jaipur</li>
                  <li>MS (Orthopedics) - Safdarjung Hospitalboard Delhi</li>
                  <li>
                    DNB (Orthopedics) - National Board of Examinations, New
                    Delhi
                  </li>
                  <li>
                    MNAMS - Member of National Academy of Medical Sciences
                  </li>
                  <li>
                    Fellowship in Joint Replacement Surgery – SICOT Fellowship,
                    Germany & Japan
                  </li>
                  <li>
                    Advanced Arthroscopy Training - Switzerland (Shoulder
                    & Sports Injury)
                  </li>
                </ul>
              </div>
              {/* Card 2 */}
              <div
                data-aos="fade-up"
                className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center w-full md:w-[380px] max-w-full"
              >
                <div className="mb-6">
                  <MdWorkspacePremium className="text-6xl text-[#197d85] mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-[#24445c] text-center mb-4">
                  15+ Years of Hands-On Orthopedic Experience
                </h3>
                <ul className="text-gray-500 text-center space-y-3">
                  <li>3000+ orthopedic surgeries performed successfully</li>
                  <li>10+ years of service at SMS Hospital Jaipur</li>
                  <li>
                    Founder & Director of private orthopedic clinic in Vaishali
                    Nagar Jaipur
                  </li>
                  <li>
                    Consulted over 25,000 patients with orthopedic conditions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Offered Section */}
      <section className="w-full px-6 md:px-20 py-10 mt-10">
        <h2
          data-aos="zoom-in"
          className="text-3xl md:text-4xl font-bold text-[#197d85] text-center mb-10"
        >
          Specialized Orthopedic Services Offered
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-7">
          <div className="w-full max-w-2xl">
            <ul className="space-y-5 text-lg md:text-xl">
              <li
                data-aos="flip-up"
                className="flex items-center gap-3 bg-gradient-to-r from-[#197d85]/10 to-[#97a345]/10 rounded-xl p-4 shadow-sm"
              >
                <span className="text-gray-600">
                  Knee Replacement Surgery (Primary & Revision)
                </span>
              </li>
              <li
                data-aos="flip-up"
                className="flex items-center gap-3 bg-gradient-to-r from-[#197d85]/10 to-[#97a345]/10 rounded-xl p-4 shadow-sm"
              >
                <span className="text-gray-600">
                  Hip & Shoulder Joint Replacement
                </span>
              </li>
              <li
                data-aos="flip-up"
                className="flex items-center gap-3 bg-gradient-to-r from-[#197d85]/10 to-[#97a345]/10 rounded-xl p-4 shadow-sm"
              >
                <span className="text-gray-500">
                  ACL / PCL Ligament Reconstruction
                </span>
              </li>
              <li
                data-aos="flip-up"
                className="flex items-center gap-3 bg-gradient-to-r from-[#197d85]/10 to-[#97a345]/10 rounded-xl p-4 shadow-sm"
              >
                <span className="text-gray-500">
                  Arthroscopic Surgeries (Knee, Shoulder, Ankle, Wrist)
                </span>
              </li>
              <li
                data-aos="flip-up"
                className="flex items-center gap-3 bg-gradient-to-r from-[#197d85]/10 to-[#97a345]/10 rounded-xl p-4 shadow-sm"
              >
                <span className="text-gray-500">Sports Injury Treatment</span>
              </li>
              <li
                data-aos="flip-up"
                className="flex items-center gap-3 bg-gradient-to-r from-[#197d85]/10 to-[#97a345]/10 rounded-xl p-4 shadow-sm"
              >
                <span className="text-gray-500">Fracture & Ttext-gray-500</span>
              </li>
              <li
                data-aos="flip-up"
                className="flex items-center gap-3 bg-gradient-to-r from-[#197d85]/10 to-[#97a345]/10 rounded-xl p-4 shadow-sm"
              >
                <span className="text-gray-500">
                  Shoulder Dislocation & Rotator Cuff Repair
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-[400px] space-y-5">
            <img
              data-aos="flip-up"
              src="/Images/dr_hemendra.jpg"
              alt="Dr. Hemendra Agarwal"
              className="rounded-2xl shadow-xl border border-gray-200 w-full h-auto max-w-[350px] object-cover"
            />
            <p data-aos="flip-up">
              Dr. Hemendra Agarwal is one of the few orthopedic doctors in
              Jaipur trained in advanced arthroscopy and minimally invasive
              joint replacement surgery.
            </p>
            <button
              data-aos="flip-up"
              className="bg-gradient-to-r from-[#197d87]/20 to-[#97a345]/20 text-black px-4 py-2 rounded-full shadow-lg hover:scale-105 transition duration-200"
            >
              View All Orthopedic Treatments →
            </button>
          </div>
        </div>
      </section>
      {/*Affiliation section */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-12 flex flex-col justify-between lg:flex-row items-center gap-12">
        {/* Left Grid of Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-2xl order-2 lg:order-1">
          <div
            data-aos="flip-right"
            className="bg-gradient-to-b from-[#197d85]/40 to-[#97a345]/40 text-center p-6 lg:h-[300px] lg:w-[200px] rounded-2xl flex flex-col items-center justify-around shadow-lg hover:shadow-lg transition-all"
          >
            <FiUsers className="text-[#197d85] text-7xl" />
            <p className="mt-4 text-white font-medium text-lg">
              Member - Indian Orthopaedic Association (IOA)
            </p>
          </div>
          <div
            data-aos="flip-right"
            className="bg-gradient-to-b from-[#197d85]/40 to-[#97a345]/40 text-center p-6 rounded-2xl flex flex-col items-center justify-around shadow-lg hover:shadow-lg transition-all"
          >
            <MdMedicalServices className="text-[#197d85] text-7xl" />
            <p className="mt-4 text-white font-medium text-lg">
              Registered Medical Practitioner - Rajasthan Medical Council
            </p>
          </div>
          <div className="max-w-md hidden lg:block"></div>
          <div className="max-w-md hidden lg:block"></div>
          <div
            data-aos="flip-left"
            className="bg-gradient-to-b from-[#197d85]/40 to-[#97a345]/40 lg:h-[300px] text-center p-6 rounded-2xl flex flex-col items-center justify-around shadow-lg hover:shadow-lg transition-all"
          >
            <HiOutlineMicrophone className="text-[#197d85] text-7xl" />
            <p className="mt-4 text-white font-medium text-lg">
              Regular Speaker at Orthopedic Conferences
            </p>
          </div>
          <div
            data-aos="flip-left"
            className="bg-gradient-to-b from-[#197d85]/40 to-[#97a345]/40 text-center p-6 rounded-2xl flex flex-col items-center justify-around shadow-lg hover:shadow-lg transition-all"
          >
            <FaHandshake className="text-[#197d85] text-7xl" />
            <p className="mt-4 text-white font-medium text-lg">
              Collaborates with Physical Therapists & Rehab Experts
            </p>
          </div>
        </div>

        {/* Right Heading */}
        <div data-aos="fade-left" className="order-1 lg:order-2 lg:text-right">
          <p className="text-[#2d7cc3] font-semibold tracking-wide text-lg">
            Trusted Member of Reputed Medical Organizations
          </p>
          <h2 className="text-4xl md:text-4xl font-bold text-[#1a2e40] mt-2 leading-snug">
            Professional Affiliations & Accreditations
          </h2>
        </div>
      </section>
      {/*Patient Approach section */}
      <section className="mx-auto px-6 md:px-20 py-10">
        <p
          data-aos="zoom-out"
          className="md:text-center text-[#197d85] font-semibold md:text-xl"
        >
          Why Patients Choose Dr. Hemendra Agarwal
        </p>
        <h2
          data-aos="zoom-out"
          className="md:text-center text-4xl md:text-5xl font-bold text-slate-800 mb-12"
        >
          Patient-Centered Approach
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Featured Blog */}
          <div data-aos="zoom-in" className="md:w-2/3">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img
                src={chooses[0].image}
                alt={chooses[0].title}
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                  {chooses[0].title}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-slate-500">{chooses[0].date}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Blogs */}
          <div className="md:w-3/5 flex flex-col space-y-6">
            {chooses.slice(1).map((post, index) => (
              <div
                data-aos="fade-left"
                key={index}
                className="flex bg-white shadow-md rounded-xl overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-24 h-35 object-cover"
                />
                <div className="p-3">
                  <h4 className="text-xl font-semibold text-slate-800 mb-1">
                    {post.title}
                  </h4>
                  <p className="text-xs text-slate-500">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*Clinic Location section */}
      <section className="max-w-7xl mx-auto px-7 md:px-20 py-16">
        <p
          data-aos="flip-up"
          className="text-center text-[#197d85] font-semibold md:text-xl md:mb-4"
        >
          Where You Can Consult Dr. Agarwal
        </p>
        <h2
          data-aos="flip-up"
          className="text-center text-4xl font-bold text-slate-800 mb-12"
        >
          Trusted Locations for Your Orthopedic Care
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border border-[#197d85]" />

          {Reasons.map((step) => (
            <div
              data-aos="fade-up"
              key={step.id}
              className={`flex flex-col items-center text-center md:items-${
                step.position === "left" ? "center md:mt-50" : "start"
              } md:text-${step.position} space-y-3 px-6 
              `}
            >
              <div className="bg-blue-100 rounded-full p-6 mb-2">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm max-w-sm">
                {step.description}
              </p>
              <span className="text-4xl text-blue-100 font-bold absolute md:static top-4 right-4">
                {step.id < 10 ? `0${step.id}` : step.id}
              </span>
            </div>
          ))}
        </div>

        {/* Buttons below */}
        <div
          data-aos="fade-down"
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <button className="flex items-center gap-2 bg-blue-50 text-blue-600 hover:bg-blue-100 px-5 py-2 rounded-full border border-blue-200 transition">
            <FaMapMarkerAlt /> View Clinic Locations
          </button>
          <Link href="/contact">
            <button className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 px-5 py-2 rounded-full transition">
              <FaPhone /> Book Appointment
            </button>
          </Link>
        </div>
      </section>
      {/*Patient Testimonial section */}
      <section className="max-w-7xl mx-auto px-7 md:px-20 pb-24 pt-6 text-center">
        <p
          data-aos="fade-down"
          className="text-blue-600 font-medium text-sm md:text-2xl mb-2"
        >
          Patient Testimonials
        </p>
        <h2
          data-aos="fade-down"
          className="text-3xl md:text-4xl font-bold text-slate-800 mb-12"
        >
          What Patients Say About Dr. Agarwal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {/* Card 1 */}
          <div
            data-aos="zoom-in"
            className="flex flex-col items-center bg-white rounded-xl p-6 shadow-md shadow-[#197d85]"
          >
            <img
              src="/Images/doctor_1.png"
              alt="Patient 1"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />

            <p className="text-blue-500 text-lg mb-2">
              Knee Replacement Patient
            </p>
            <p className="text-slate-500 text-sm">
              “Best orthopedic doctor in Jaipur. I had a knee replacement and
              walked in 3 days!”
            </p>
          </div>

          {/* Card 2 */}
          <div
            data-aos="zoom-in"
            className="flex flex-col items-center bg-white rounded-xl p-6 shadow-md shadow-[#197d85]"
          >
            <img
              src="/Images/doctor_2.png"
              alt="Patient 2"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />

            <p className="text-blue-500 text-lg mb-2">Consultation Feedback</p>
            <p className="text-slate-500 text-sm">
              “He explained everything in detail - very professional and kind.”
            </p>
          </div>

          {/* Card 3 */}
          <div
            data-aos="zoom-in"
            className="flex flex-col items-center bg-white rounded-xl p-6 shadow-md shadow-[#197d85]"
          >
            <img
              src="/Images/doctor_3.png"
              alt="Patient 3"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />

            <p className="text-blue-500 text-sm mb-2">Family Experience</p>
            <p className="text-slate-500 text-lg">
              “I trusted him with my father’s hip surgery - perfect results.”
            </p>
          </div>
        </div>
      </section>
      {/*Book Appointment section */}
      <section className="bg-sky-100 mt-20 rounded-2xl px-8 flex flex-col lg:flex-row items-center justify-between m-6 md:m-20">
        <div data-aos="fade-down" className="relative lg:w-230">
          <img
            src="/Images/dr_hemendra-removebg.png"
            alt="Dr. Hemendra Agarwal"
            width={600}
            height={400}
            className="object-top -mt-46"
          />
        </div>
        {/* Left Content */}
        <div className="lg:max-w-xl w-full">
          <h2
            data-aos="flip-up"
            className="text-2xl md:text-4xl font-semibold leading-tight mb-10"
          >
            Need expert orthopedic care in Jaipur? Dr. Hemendra Agarwal is here
            for you.
          </h2>
          <div
            data-aos="flip-up"
            className="flex flex-col md:flex-row flex-wrap items-center gap-5"
          >
            <Link href="/contact">
              <button className="flex items-center gap-2 bg-sky-200  hover:opacity-80 textblack  px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
                <FaCalendarCheck size={20} />
                Book Appointment
              </button>
            </Link>
            <a href="tel:+919210696045" target="_blank">
              <button className="flex items-center gap-2 bg-sky-200 hover:opacity-80 text-black px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
                <FaPhoneAlt size={20} />
                Call Now
              </button>
            </a>
            <a href="https://wa.me/919210696045" target="_blank">
              <button className="flex items-center gap-2 bg-sky-200 hover:opacity-80 text-black px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
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
