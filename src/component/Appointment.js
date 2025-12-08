/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import Link from "next/link";

export const Appointment = () => {
  return (
    <section className="bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 rounded-2xl p-5 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 m-6 mb-12 md:mx-10 lg:m-20">
      {/* Left Content */}
      <div className="">
        <p data-aos="zoom-in" className="font-semibold text-lg">
          Quick Call-to-Action Line:
        </p>
        <h2
          data-aos="zoom-in"
          className="text-2xl md:text-4xl font-semibold leading-tight mb-4 uppercase"
        >
          Book Your Appointment With Jaipur’s Leading Orthopedic Surgeon
        </h2>
        <p data-aos="zoom-in" className="text-gray-800 mb-6 text-lg">
          Say goodbye to joint pain and sports injuries. Consult Dr. Hemendra
          Agrawal, Jaipur’s most trusted orthopedic specialist.
        </p>

        <div
          data-aos="zoom-in"
          className="flex flex-col md:flex-row flex-wrap items-center gap-8"
        >
          <Link href="/contact">
            <button className="flex items-center gap-2 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 text-black hover:opacity-80 px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
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
          <a href="https://g.co/kgs/RFjQ2wV" target="_blank">
            <button className="flex items-center gap-2 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 text-black hover:opacity-80 px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
              <TiLocation size={20} />
              <p>Visit Pratap Nagar Clinic</p>
            </button>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div data-aos="zoom-out" className="relative">
        <img
          src="/Images/appointment.jpeg"
          alt="Dr. Hemendra Agrawal"
          width={400}
          height={400}
          className="rounded-2xl"
        />
      </div>
    </section>
  );
};
