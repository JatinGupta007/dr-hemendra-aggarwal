"use client"; // Only for app directory

import Image from "next/image";
import { TiTickOutline } from "react-icons/ti";
import { FaPhoneAlt, FaWhatsapp, FaCalendarCheck } from "react-icons/fa";
import Link from "next/link";

export default function HeroSection() {
  return (
    <main>
      <section className="bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 lg:h-[700px] flex items-center p-6 md:p-16 lg:relative lg:overflow-hidden">
        <div className="lg:max-w-7xl lg:w-full flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:absolute lg:left-24 lg:z-11 lg:w-2xl">
            <h1
              data-aos="fade-right"
              className="text-3xl lg:text-[36px] font-bold"
            >
              Best Orthopedic Doctor in Jaipur <br /> Dr. Hemendra Agrawal
            </h1>
            <p data-aos="fade-left" className="text-xl lg:w-xl lg:mb-16">
              Renowned for expertise in joint replacement, arthroscopy, and
              sports injury treatment, Dr. Hemendra Agrawal brings 14+ years of
              trusted orthopedic care in Jaipur.
            </p>

            <div
              data-aos="fade-right"
              className="items-center space-x-4 space-y-3 pt-5"
            >
              <p className="text-lg md:text-xl flex items-center gap-3">
                <TiTickOutline size={30} color="black" />
                14+ years of Exprience & 20,000 + Surgeries
              </p>
              <p className="text-lg md:text-xl flex items-center gap-3">
                <TiTickOutline size={30} color="black" />
                Modern Techniques & Minimally Invasive Surgery
              </p>
              <p className="text-lg md:text-xl flex items-center gap-3">
                <TiTickOutline size={30} color="black" />
                Clinics in Pratap Nagar & SMS Hospital Jaipur
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div
            data-aos="fade-down"
            className="flex lg:justify-end lg:absolute lg:right-1 lg:top-10"
          >
            <Image
              src="/Images/doctors_img.png"
              alt="Doctor"
              width={860}
              height={700}
              className="lg:z-10 w-100 lg:w-188"
            />
          </div>
        </div>
      </section>
      <div
        data-aos="fade-up"
        className="absolute mx-10 lg:w-full left-5 md:left-5 lg:left-1/5 xl:left-2/9 bg-white rounded-2xl shadow-xl shadow-[#197d85] px-10 lg:px-12 py-8 lg:py-16  max-w-[670px] -mt-20 flex flex-col md:flex-row justify-between items-center gap-8 z-12"
      >
        <div className="flex items-center flex-col md:flex-row gap-8">
          <Link href="/contact">
            <button className="flex items-center gap-2  hover:opacity-80 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 text-black px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
              <FaCalendarCheck size={20} />
              Book Appointment
            </button>
          </Link>
          <a href="tel:+919210696045" target="_blank">
            <button className="flex items-center gap-2 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 text-black hover:opacity-80 px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
              <FaPhoneAlt size={20} />
              Call Now
            </button>
          </a>
          <a href="https://wa.me/919210696045" target="_blank">
            <button className="flex items-center gap-2 hover:opacity-80 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 text-black-6 px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
              <FaWhatsapp size={20} />
              <p>WhatsApp</p>
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
