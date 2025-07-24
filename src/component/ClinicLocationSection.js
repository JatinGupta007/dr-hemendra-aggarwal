
import Link from "next/link";
import { LocateFixed, Navigation } from "lucide-react";
import { FaPhoneAlt} from "react-icons/fa";

export default function ClinicLocations() {
  return (
    <section className="md:py-16 p-7 md:px-20 rounded-2xl text-black">
      <div className="bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 rounded-2xl p-5 md:p-8">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-center mb-5 md:mb-16"
        >
          Visit Our Orthopedic Clinics in Jaipur
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mx-auto">
          {/* Card 1 */}
          <div
            data-aos="zoom-out"
            className="rounded-2xl p-5 w-full md:w-100 shadow-lg transform transition-all duration-300 hover:scale-105 bg-sky-50 hover:opacity-80 text-black"
          >
            <div className="mb-4 relative mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-inner bg-gray-100 group">
                <a
                  href="https://g.co/kgs/RFjQ2wV" // e.g., "https://www.google.com/maps/place/..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block group"
                  aria-label="Open map in new tab"
                >
                  {/* Map Preview */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.29600027931!2d75.83297209999999!3d26.798702100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc90a0fbec191%3A0xfad7f9958d424be5!2sORTHO-KLINIK-Dr%20Hemendra%20Agrawal%20senior%20Orthopedic%20Surgeon!5e0!3m2!1sen!2sin!4v1753001468755!5m2!1sen!2sin" // e.g., embedded map URL
                    width="100%"
                    height="200"
                    style={{ border: 0, pointerEvents: "none" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="hover:grayscale-0 transition-all duration-500"
                    title="Map Preview"
                  />

                  {/* Navigation Icon Overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Navigation className="w-5 h-5 text-[#197d85]" />
                  </div>

                  {/* Decorative Glow Effects */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#197d85]/10 to-[#97a345]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#97a345]/10 to-[#197d85]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </a>
              </div>
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
              <div className="relative rounded-2xl overflow-hidden shadow-inner bg-gray-100 group">
                <a
                  href="https://www.google.com/search?q=Narayana+Multispeciality+Hospital+%E2%80%93+Pratap+Nagar%2C+Jaipur&rlz=1C1CHZN_enIN1094IN1094&oq=Narayana+Multispeciality+Hospital+%E2%80%93+Pratap+Nagar%2C+Jaipur&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzM4NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" // e.g., "https://www.google.com/maps/place/..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block group"
                  aria-label="Open map in new tab"
                >
                  {/* Map Preview */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.413867637782!2d75.8253632!3d26.7949476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc999fe90f309%3A0x91760491563438ac!2sNarayana%20Hospital%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1753080256093!5m2!1sen!2sin" // e.g., embedded map URL
                    width="100%"
                    height="200"
                    style={{ border: 0, pointerEvents: "none" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="hover:grayscale-0 transition-all duration-500"
                    title="Map Preview"
                  />

                  {/* Navigation Icon Overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Navigation className="w-5 h-5 text-[#197d85]" />
                  </div>

                  {/* Decorative Glow Effects */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#197d85]/10 to-[#97a345]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#97a345]/10 to-[#197d85]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </a>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">
              Narayana Hospital Jaipur
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
              <div className="relative rounded-2xl overflow-hidden shadow-inner bg-gray-100 group">
                <a
                  href="https://g.co/kgs/riT4Q2w" // e.g., "https://www.google.com/maps/place/..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block group"
                  aria-label="Open map in new tab"
                >
                  {/* Map Preview */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.3616659387435!2d75.7357402!3d26.8284468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db591ca3cb9b9%3A0x2077186374def3fe!2sDR%20HEMENDRA%20AGRAWAL%20ORTHOPEDIC%20DOCTOR!5e0!3m2!1sen!2sin!4v1753001116217!5m2!1sen!2sin" // e.g., embedded map URL
                    width="100%"
                    height="200"
                    style={{ border: 0, pointerEvents: "none" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="hover:grayscale-0 transition-all duration-500"
                    title="Map Preview"
                  />

                  {/* Navigation Icon Overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Navigation className="w-5 h-5 text-[#197d85]" />
                  </div>

                  {/* Decorative Glow Effects */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#197d85]/10 to-[#97a345]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#97a345]/10 to-[#197d85]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </a>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">
              Mansarovar Clinic Jaipur
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
              className="flex items-center gap-2 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 text-black hover:opacity-80 px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105"
            >
              <FaPhoneAlt size={20} />
              <p>Call For Appointment</p>
            </button>
          </a>
          <Link href="/clinics">
            <button
              data-aos="fade-up"
              className="flex items-center gap-2 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 text-black hover:opacity-80 px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105"
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
