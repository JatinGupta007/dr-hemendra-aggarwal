import Image from "next/image";
import Link from "next/link";
import { LocateFixed } from "lucide-react";
import { FaPhoneAlt} from "react-icons/fa";

export default function ClinicLocations() {
  return (
    <section className="md:py-16 p-7 md:px-20 rounded-2xl text-black">
      <div className="bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 rounded-2xl p-5 md:p-8">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-center mb-5 md:mb-16"
        >
          Visit Our Orthopedic Clinics in Jaipur
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div
            data-aos="zoom-out"
            className="rounded-2xl p-5 w-full md:w-100 shadow-lg transform transition-all duration-300 hover:scale-105 bg-sky-50 hover:opacity-80 text-black"
          >
            <div className="mb-4 relative mx-auto">
              <Image
                src="/Images/location_1.png"
                alt="Location Icon"
                width={350}
                height={150}
                className="rounded-2xl mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">
              Pratap Nagar Clinic
            </h3>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>Top-rated orthopedic doctor in clinic</li>
              <li>Modern infrastructure, diagnostics & OPD</li>
              <li>Back pain clinic in Jaipur</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div
            data-aos="zoom-out"
            className="rounded-2xl p-6 w-full md:w-100 shadow-lg transform transition-all duration-300 hover:scale-105 bg-sky-50 hover:opacity-80 text-black"
          >
            <div className="mb-4 relative mx-auto">
              <Image
                src="/Images/location_2.png"
                alt="Location Icon"
                width={350}
                height={150}
                className="rounded-2xl mx-auto h-45"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">
              SMS Hospital Jaipur
            </h3>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>Government hospital access</li>
              <li>Surgeries with insurance coverage</li>
              <li>Best joint replacement surgeon in Jaipur</li>
            </ul>
          </div>
          <div
            data-aos="zoom-out"
            className="rounded-2xl p-6 w-full md:w-100 shadow-lg transform transition-all duration-300 hover:scale-105 bg-sky-50 hover:opacity-80 text-black"
          >
            <div className="mb-4 relative mx-auto">
              <Image
                src="/Images/location_3.png"
                alt="Location Icon"
                width={350}
                height={150}
                className="rounded-2xl mx-auto h-45"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">
              Mansarovar Clinic - Jaipur
            </h3>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>Sports injury doctor in Jaipur</li>
              <li>Best orthopedic doctor in Mansarovar</li>
              <li>Orthopedic clinic in Mansarovar Jaipur</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center mt-15 justify-center gap-4 lg:gap-12">
          <a href="tel:+919210696045" target="_blank">
            <button
              data-aos="fade-up"
              className="flex items-center gap-2 bg-white  hover:opacity-80 text-[#197d85] px-6 py-3 rounded-xl font-bold shadow-lg transition-transform hover:scale-105"
            >
              <FaPhoneAlt size={20} />
              <p>Call For Appointment</p>
            </button>
          </a>
          <Link href="/clinics">
          <button
            data-aos="fade-up"
            className="flex items-center gap-2 bg-white  hover:opacity-80 text-[#197d85] font-bold px-6 py-3 rounded-xl shadow-lg transition-transform hover:scale-105"
          >
            <LocateFixed size={20} />
            <p>Get Direction</p>
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
