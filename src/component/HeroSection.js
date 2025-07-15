"use client"; // Only for app directory

import Image from "next/image";
import { TiTickOutline } from "react-icons/ti";
import { FaPhoneAlt, FaWhatsapp, FaCalendarCheck } from "react-icons/fa";

export default function HeroSection() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#197d85]/90 to-[#97a345]/90 h-[700px] flex items-center p-6 md:p-16 relative overflow-hidden">
        <div className="max-w-7xl w-full flex gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6 absolute left-24 z-11 w-2xl">
            <h1 className="text-4xl md:text-[62px] font-bold text-[] mb-6">
              Best Orthopedic Doctor in Jaipur Dr. Hemendra Agarwal
            </h1>
            <p className="text-[] text-xl w-xl mb-16">
              Renowned for expertise in joint replacement, arthroscopy, and
              sports injury treatment, Dr. Hemendra Agarwal brings 15+ years of
              trusted orthopedic care in Jaipur.
            </p>

            <div className="items-center space-x-4 pt-5 text-[] ">
              <p className="text-xl flex items-center">
                <TiTickOutline size={30} color="#97a345" /> Over 3000 Successful
                Surgeries
              </p>
              <p className="text-xl flex items-center">
                <TiTickOutline size={30} color="#97a345" />
                Modern Techniques & Minimally Invasive Surgery
              </p>
              <p className="text-xl flex items-center">
                <TiTickOutline size={30} color="#97a345" />
                Clinics in Vaishali Nagar & SMS Hospital Jaipur
              </p>
            </div>
          </div>
          {/* Stats Badge */}
          {/* <div className="flex items-center mt-6 p-4 rounded-full bg-white/70 backdrop-blur shadow-md w-fit">
        <div className="flex -space-x-2">
          <Image
            src="/Images/doctors_img.png"
            alt="user"
            width={40}
            height={40}
            className="rounded-full border-2 border-white"
          />
          <Image
            src="/avatars/avatar2.png"
            alt="user"
            width={40}
            height={40}
            className="rounded-full border-2 border-white"
          />
          <Image
            src="/avatars/avatar3.png"
            alt="user"
            width={40}
            height={40}
            className="rounded-full border-2 border-white"
          />
        </div>
        <div className="ml-4">
          <p className="font-semibold text-[#102c57]">150K+</p>
          <p className="text-xs text-[#375e8a]">Patient Recover</p>
        </div>
        <span className="ml-2 text-green-600 text-xl">✔</span>
      </div>
    </div> */}

          {/* Right Image */}
          <div className="flex justify-end absolute right-1 top-10">
            <Image
              src="/Images/doctors_img.png"
              alt="Doctor"
              width={860}
              height={700}
              className="z-10"
            />
          </div>

          {/* Doctors Badge
      /<div className="absolute top-10 right-0 bg-white p-4 rounded-xl shadow-lg flex flex-col items-center">
        {/* <Image
          src="/avatars/avatar-female.png"
          alt="doc"
          width={50}
          height={50}
          className="rounded-full border"
        />
        <p className="font-bold text-lg mt-2">870+</p>
        <p className="text-xs text-gray-500">Doctors</p>
      </div> */}
        </div>
      </section>
      <div className="absolute w-full left-6/25 bg-white rounded-2xl shadow-xl shadow-[#197d85]  px-12 py-16  max-w-[670px] -mt-16 flex flex-col md:flex-row justify-between items-center gap-8 z-12">
        <div className="flex items-center gap-8">
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#28D2DF] to-[#197d85]  hover:opacity-80 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
            <FaCalendarCheck size={20} />
            Book Appointment
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#28D2DF] to-[#197d85]  hover:opacity-80 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
            <FaPhoneAlt size={20} />
            <p>Call Now</p>
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#28D2DF] to-[#197d85]  hover:opacity-80 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
            <FaWhatsapp size={20} />
            <p>WhatsApp</p>
          </button>
        </div>
      </div>
    </>
  );
}
