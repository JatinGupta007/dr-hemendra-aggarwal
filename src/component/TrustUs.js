import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

export default function TrustUsSection() {
  return (
    <section className="py-12 px-6 md:px-20 mt-64 md:mt-30 lg:mt-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-16">
        {/* Left Image */}
        <div data-aos="fade-right" className="relative rounded-3xl">
          <Image
            src="/Images/trust_us.png" // Replace with your actual path
            alt="Doctor"
            width={600}
            height={500}
            className="w-full h-full"
          />

          <Image
            src="/Images/tick.svg"
            alt="High Quality"
            width={50}
            height={120}
            className="absolute top-0 right-26 z-6"
          />

          <Image
            src="/Images/circle.svg"
            alt="High Quality"
            width={180}
            height={180}
            className="absolute -top-16 right-10 animate-spin z-5"
          />
        </div>

        {/* Right Content */}
        <div>
          <p
            data-aos="fade-left"
            className="text-lg font-semibold text-[#197d85] mb-2"
          >
            Why Patients Trust Dr. Hemendra Agarwal
          </p>
          <h2
            data-aos="fade-left"
            className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight mb-4"
          >
            Top Orthopedic Surgeon <br /> in Jaipur with Trusted Patient
            Outcomes
          </h2>

          <hr data-aos="fade-left" className="w-24 border-teal-400 mb-4" />

          <p data-aos="fade-left" className="text-gray-600 mb-6">
            Dr. Hemendra Agarwal is one of the most respected orthopedic
            surgeons in Jaipur, known for combining modern surgical techniques
            with a deep commitment to patient care. From knee replacements to
            arthroscopic procedures, he offers customized treatment plans that
            restore mobility and relieve chronic pain. Patients from all over
            Rajasthan trust him for second opinions, revision surgeries, and
            sports injury recovery.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "15+ Years of Experience,",
              "3000+ Successful Surgeries",
              "400+ 5-Star Patient Reviews",
              "Practicing at SMS Hospital & Pratap Nagar Clinic",
            ].map((item, idx) => (
              <li
                data-aos="fade-left"
                data-aos-delay={`${idx * 100}`}
                key={idx}
                className="flex items-start gap-3 text-gray-700"
              >
                <FaCheck className="text-[#97a345] mt-1" />
                {item}
              </li>
            ))}
          </ul>

          <Link href="/about">
            <button
              data-aos="fade-left"
              className="bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 text-black px-6 py-3 rounded-full font-medium hover:opacity-80 transition-transform hover:scale-105"
            >
              Learn More About Dr. Agarwal
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
