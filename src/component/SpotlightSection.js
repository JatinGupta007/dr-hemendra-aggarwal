/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaBookMedical } from "react-icons/fa6";
import Link from "next/link";

export default function SpotlightSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-5 lg:gap-16 px-6 py-12 md:px-20 bg-gray-50">
      {/* Left - Image */}
      <div
        data-aos="flip-right"
        className="flex-shrink-0 rounded-full overflow-hidden w-[300px] h-[300px] md:w-[460px] md:h-[440px]"
      >
        <img
          src="/Images/spotlight_img.png"
          alt="Doctor with patient"
          width={400}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right - Text Content */}
      <div className="max-w-xl">
        <h3
          data-aos="flip-left"
          className="text-[#197d85] font-semibold text-lg mb-1"
        >
          Knee Replacement Surgery
        </h3>
        <h2
          data-aos="flip-left"
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Looking for the Best Knee Replacement Surgeon in Jaipur?
        </h2>
        <hr
          data-aos="flip-left"
          className="border-t-2 border-[#197d85] w-20 mb-4"
        />
        <p data-aos="flip-left" className="text-gray-600 mb-4 leading-relaxed">
          Dr. Hemendra Agrawal is among the top-rated knee replacement surgeons
          in Jaipur, offering both total and partial replacements using
          minimally invasive techniques. Patients experience reduced pain,
          shorter hospital stays, and faster recovery. If you&apos;re concerned
          about mobility or knee arthritis, this procedure could change your
          life.
        </p>
        <ul className="text-gray-700 space-y-2 mb-6">
          <li data-aos="flip-left" className="flex gap-3 items-center">
            <input
              type="checkbox"
              defaultChecked
              className="accent-[#197d85] w-5 h-5"
            />
            Cost-effective treatment with insurance support
          </li>
          <li data-aos="flip-left" className="flex gap-3 items-center">
            <input
              type="checkbox"
              defaultChecked
              className="accent-[#197d85] w-5 h-5"
            />
            Advanced implants & robotic navigation (if available)
          </li>
          <li data-aos="flip-left" className="flex gap-3 items-center">
            <input
              type="checkbox"
              defaultChecked
              className="accent-[#197d85] w-5 h-5"
            />
            Transparent consultation & rehab guidance
          </li>
        </ul>

        <Link href="/expertise/joint-replacement">
          <button
            data-aos="flip-left"
            className="flex items-center gap-2 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40  hover:opacity-80 text-black px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105"
          >
            <FaBookMedical /> Learn More About Knee Replacement
          </button>
        </Link>
      </div>
    </section>
  );
}
