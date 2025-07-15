import Image from "next/image";


export default function DoctorSection() {
  return (
    <section className="bg-[url('/Images/department_bg.svg')] mt-30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 m-20">
      {/* Left Content */}
      <div className="max-w-xl">
        <p className="font-semibold text-lg">About the Doctor</p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Dr. Hemendra Agarwal
        </h2>
        <p className="text-gray-800 mb-6">
          With degrees from top medical institutions and training in the latest
          orthopedic innovations, Dr. Agarwal blends experience, empathy, and
          efficiency in every procedure. He is known for his clinical clarity
          and surgical precision.
        </p>
        <ul className="space-y-2 text-gray-800 text-base mb-6">
          <li>🎓 MBBS, MS (Orthopedics)</li>
          <li>🏥 Consultant – SMS Hospital Jaipur</li>
          <li>💼 Director – Vaishali Nagar Clinic</li>
          <li>
            🧠 Special Interests: Joint Replacements, Arthroscopy, Sports
            Injuries
          </li>
        </ul>
      </div>

      {/* Right Image */}
      <div className="relative w-400">
        <Image
          src="/Images/hemendra.png"
          alt="Dr. Hemendra Agarwal"
          width={700}
          height={400}
          className="object-top -mt-46"
        />
        <button className="bg-gradient-to-r from-[#71a7e5] to-[#4e5ad7] text-xl ml-36  text-white font-semibold px-7 py-3 rounded-4xl flex items-center gap-2 shadow-md hover:opacity-80 transition">
          Full Doctor Bio →
        </button>
      </div>
    </section>
  );
}
