import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DoctorSection() {
  return (
    <section className="bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 mt-30 rounded-2xl p-5 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 m-6 md:m-20">
      {/* Left Content */}
      <div className="order-2 lg:order-1">
        <p data-aos="flip-right" className="font-semibold  text-lg">
          About the Doctor
        </p>
        <h2
          data-aos="flip-right"
          className="text-3xl md:text-4xl font-bold leading-tight mb-4"
        >
          Dr. Hemendra Agrawal
        </h2>
        <p data-aos="flip-right" className="text-gray-800 mb-6">
          With degrees from top medical institutions and training in the latest
          orthopedic innovations, Dr. Hemendra Agrawal blends experience,
          empathy, and efficiency in every procedure. He is known for his
          clinical clarity and surgical precision.
        </p>
        <ul className="space-y-2 text-gray-800 text-base mb-6">
          <li data-aos="flip-right">MBBS, MS (Orthopedics)</li>
          <li data-aos="flip-right">
            Consultant - Pratap Nagar Clinic, Mansarovar Clinic
          </li>
          <li data-aos="flip-right">Director - Narayana Hospital</li>
          <li data-aos="flip-right">
            pecial Interests: Joint Replacements, Arthroscopy, Sports Injuries
          </li>
        </ul>
      </div>

      {/* Right Image */}
      <div
        data-aos="fade-down"
        className="relative order-1 lg:order-2 lg:w-300"
      >
        <Image
          src="/Images/dr_hemendra.jpg"
          alt="Dr. Hemendra Agrawal"
          width={700}
          height={400}
          className="object-top -mt-20 rounded-4xl"
        />
        <Link href="/about">
          <button
            data-aos="fade-up"
            className="flex gap-2 items-center text-xl bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 text-black hover:opacity-80 px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105 mt-7 mx-auto"
          >
            Full Doctor Bio 
            <ArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
}
