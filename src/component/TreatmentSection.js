/* eslint-disable @next/next/no-img-element */
import {
  GiMagnifyingGlass,
} from "react-icons/gi";

import Link from "next/link";


export default function TreatmentSection() {
  
  const treatments = [
    {
      icon: (
        <img
          src="/Images/treatment_icon_8.png"
          alt="treatment_icon_8"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Knee Replacement Surgery",
      desc: "Restore mobility and eliminate pain with advanced knee replacement solutions tailored to your needs.",
      href: "/expertise/Joint-Replacement-Surgery",
    },
    {
      icon: (
        <img
          src="/Images/treatment_icon_9.png"
          alt="treatment_icon_1"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Hip & Shoulder Joint Replacement",
      desc: "Regain joint function and improve quality of life with expert joint replacement procedures.",
      href: "/expertise/Joint-Replacement-Surgery/Hip-Replacement-Surgery",
    },
    {
      icon: (
        <img
          src="/Images/treatment_icon_2.png"
          alt="treatment_icon_2"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Arthroscopy (Knee, Shoulder, Ankle, Wrist)",
      desc: "Minimally invasive procedures for accurate diagnosis and quicker recovery.",
      href: "/expertise/Arthroscopy---Keyhole-Surgery",
    },
    {
      icon: (
        <img
          src="/Images/treatment_icon_13.png"
          alt="treatment_icon_3"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Ligament Reconstruction (ACL, PCL, Labral Tears)",
      desc: "Rebuild stability and strength with cutting-edge ligament reconstruction techniques.",
      href: "/expertise/Sports-Injury-&-Ligament-Reconstruction",
    },
    {
      icon: (
        <img
          src="/Images/treatment_icon_7.png"
          alt="treatment_icon_7"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Fracture & Trauma Surgery",
      desc: "Comprehensive care for all types of bone fractures and traumatic injuries.",
      href: "/expertise/Fracture-&-Trauma-Surgery",
    },
    {
      icon: (
        <img
          src="/Images/treatment_icon_4.png"
          alt="treatment_icon_2"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Sports Injury Management",
      desc: "Customized treatment plans to get athletes back in action swiftly and safely.",
      href: "/expertise/Sports-Injury-&-Ligament-Reconstruction",
    },
    {
      icon: (
        <img
          src="/Images/treatment_icon_5.png"
          alt="treatment_icon_5"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Foot, Ankle & Elbow Procedures",
      desc: "Specialized care for small joints to relieve pain and restore function.",
      href: "/expertise/Foot,-Ankle,-Hand-&-Wrist-Procedures",
    },
    {
      icon: (
        <img
          src="/Images/treatment_icon_6.png"
          alt="treatment_icon_6"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Shoulder Dislocation & Rotator Cuff Repair",
      desc: "Targeted treatments to stabilize shoulders and repair torn rotator cuffs.",
      href: "/expertise/Shoulder,-Elbow-&-Upper-Limb-Surgeries",
    },
    {
      icon: (
        <GiMagnifyingGlass className="text-5xl text-[#197d85] mx-auto mb-4" />
      ),
      title: "View Full List of Treatments",
      desc: "Looking for something specific? Explore our complete list of advanced orthopedic treatments tailored to your needs.",
      href: "/expertise"
    },
  ];

  return (
    <section className="py-3 lg:py-16 px-6 md:px-20 bg-white md:text-center">
      <h2
        data-aos="fade-down"
        className="text-4xl font-bold text-gray-800 mb-2"
      >
        Orthopedic Treatments We Offer
      </h2>
      <p data-aos="fade-down" className="text-lg text-gray-500 mb-4">
        Advanced Orthopedic Care Tailored to Your Needs
      </p>
      <p
        data-aos="fade-down"
        className="text-md text-gray-600 max-w-2xl mx-auto mb-12"
      >
        Whether you are dealing with knee pain, a sports injury, or require
        joint replacement - we’ve got you covered.
      </p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center mx-auto">
        {treatments.map((item, index) => (
          <Link href={item.href} data-aos="zoom-in" key={index}>
            <div className="bg-white w-86 h-60 p-6 rounded-2xl shadow-md hover:shadow-xl shadow-[#197d85] hover:scale-105 transform transition duration-300 ease-in-out">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
