export default function TreatmentSection() {
  const treatments = [
    {
      icon: "🦵",
      title: "Knee Replacement Surgery",
      desc: "Restore mobility and eliminate pain with advanced knee replacement solutions tailored to your needs.",
    },
    {
      icon: "🦴",
      title: "Hip & Shoulder Joint Replacement",
      desc: "Regain joint function and improve quality of life with expert joint replacement procedures.",
    },
    {
      icon: "🩺",
      title: "Arthroscopy (Knee, Shoulder, Ankle, Wrist)",
      desc: "Minimally invasive procedures for accurate diagnosis and quicker recovery.",
    },
    {
      icon: "🧠",
      title: "Ligament Reconstruction (ACL, PCL, Labral Tears)",
      desc: "Rebuild stability and strength with cutting-edge ligament reconstruction techniques.",
    },
    {
      icon: "🛠️",
      title: "Fracture & Trauma Surgery",
      desc: "Comprehensive care for all types of bone fractures and traumatic injuries.",
    },
    {
      icon: "🏃‍♂️",
      title: "Sports Injury Management",
      desc: "Customized treatment plans to get athletes back in action swiftly and safely.",
    },
    {
      icon: "🦶",
      title: "Foot, Ankle & Elbow Procedures",
      desc: "Specialized care for small joints to relieve pain and restore function.",
    },
    {
      icon: "🤕",
      title: "Shoulder Dislocation & Rotator Cuff Repair",
      desc: "Targeted treatments to stabilize shoulders and repair torn rotator cuffs.",
    },
    {
      icon: "🔍",
      title: "View Full List of Treatments",
      desc: "Looking for something specific? Explore our complete list of advanced orthopedic treatments tailored to your needs.",
    },
  ];

  return (
    <section className="py-3 lg:py-16 px-6 md:px-20 bg-white md:text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">
        Orthopedic Treatments We Offer
      </h2>
      <p className="text-lg text-gray-500 mb-4">
        Advanced Orthopedic Care Tailored to Your Needs
      </p>
      <p className="text-md text-gray-600 max-w-2xl mx-auto mb-12">
        Whether you are dealing with knee pain, a sports injury, or require
        joint replacement - we’ve got you covered.
      </p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center max-w-6xl mx-auto">
        {treatments.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl shadow-[#197d85] hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
