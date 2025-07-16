"use client"; // Only for app directory

import Image from "next/image";
import { TiTickOutline } from "react-icons/ti";
import { FaPhoneAlt, FaWhatsapp, FaCalendarCheck } from "react-icons/fa";

export default function HeroSection() {
  return (
    <main>
      <section className="bg-gradient-to-r from-[#197d85]/90 to-[#97a345]/90 lg:h-[700px] flex items-center p-6 md:p-16 lg:relative lg:overflow-hidden">
        <div className="lg:max-w-7xl lg:w-full flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:absolute lg:left-24 lg:z-11 lg:w-2xl">
            <h1 className="text-4xl lg:text-[62px] font-bold">
              Best Orthopedic Doctor in Jaipur Dr. Hemendra Agarwal
            </h1>
            <p className="text-xl lg:w-xl lg:mb-16">
              Renowned for expertise in joint replacement, arthroscopy, and
              sports injury treatment, Dr. Hemendra Agarwal brings 15+ years of
              trusted orthopedic care in Jaipur.
            </p>

            <div className="items-center space-x-4 space-y-3 pt-5">
              <p className="text-lg md:text-xl flex items-center gap-3">
                <TiTickOutline size={30} color="#97a345" /> 
                Over 3000 Successful Surgeries
              </p>
              <p className="text-lg md:text-xl flex items-center gap-3">
                <TiTickOutline size={30} color="#97a345" />
                Modern Techniques & Minimally Invasive Surgery
              </p>
              <p className="text-lg md:text-xl flex items-center gap-3">
                <TiTickOutline size={30} color="#97a345" />
                Clinics in Vaishali Nagar & SMS Hospital Jaipur
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex lg:justify-end lg:absolute lg:right-1 lg:top-10">
            <Image
              src="/Images/doctors_img.png"
              alt="Doctor"
              width={860}
              height={700}
              className="lg:z-10 w-100 lg:w-210"
            />
          </div>
        </div>
      </section>
      <div className="absolute mx-10 lg:w-full lg:left-1/5 bg-white rounded-2xl shadow-xl shadow-[#197d85] px-10 lg:px-12 py-8 lg:py-16  max-w-[670px] -mt-16 flex flex-col md:flex-row justify-between items-center gap-8 z-12">
        <div className="flex items-center flex-col md:flex-row gap-8">
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
    </main>
  );
}
