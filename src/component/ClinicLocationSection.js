import Image from "next/image";
 // Update path if needed
import { LocateFixed } from "lucide-react";
import { FaPhoneAlt, FaWhatsapp, FaCalendarCheck } from "react-icons/fa";

export default function ClinicLocations() {
  return (
    <section className="py-16 px-20 rounded-2xl text-white">
      <div className="bg-gradient-to-r from-[#197d85]/90 to-[#97a345]/80 rounded-2xl p-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Visit Our Orthopedic Clinics in Jaipur
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="rounded-2xl p-6 w-full md:w-100 shadow-lg transform transition-all duration-300 hover:scale-105 bg-[#197d85] hover:opacity-80 text-white">
            <div className="mb-4 relative mx-auto">
              <Image
                src="/Images/location_1.webp"
                alt="Location Icon"
                width={350}
                height={150}
                className="rounded-2xl mx-auto w-100 h-50"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">
              Vaishali Nagar Clinic
            </h3>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>Top-rated orthopedic doctor in Vaishali Nagar Jaipur</li>
              <li>Modern infrastructure, diagnostics & OPD</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl p-6 w-full md:w-100 shadow-lg transform transition-all duration-300 hover:scale-105 bg-[#197d85] hover:opacity-80 text-white">
            <div className="mb-4 relative mx-auto">
              <Image
                src="/Images/location_2.webp"
                alt="Location Icon"
                width={350}
                height={150}
                className="rounded-2xl mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">
              SMS Hospital Jaipur
            </h3>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>Government hospital access</li>
              <li>Ideal for surgeries with insurance coverage</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center mt-15 justify-center gap-12">
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#28D2DF] to-[#197d85]  hover:opacity-80 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
            <FaPhoneAlt size={20} />
            <p>Call For Appointment</p>
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#28D2DF] to-[#197d85]  hover:opacity-80 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
            <LocateFixed size={20} />
            <p>Get Direction</p>
          </button>
        </div>
      </div>
    </section>
  );
}
