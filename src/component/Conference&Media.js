// components/FacilitiesSection.tsx

import Image from "next/image";

const ConferenceAndMedia = () => {
  return (
    <section className="py-16 px-4 md:mx-auto mx-6 bg-white">
      <div className="mx-auto">
        <p className="text-[#197d85] text-lg font-semibold mb-2 md:px-5 lg:px-12">
          HAVE A LOOK AT
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-12 lg:px-12 md:px-5">
          Conference And Media <br className="hidden md:block" />
          Latest Activities
        </h2>

        <div className="flex flex-wrap gap-3 justify-center items-center">
          {[
            { src: "/Images/25.png", alt: "Facility 1" },
            { src: "/Images/18.png", alt: "Facility 2" },
            { src: "/Images/16.png", alt: "Facility 3" },
            { src: "/Images/17.png", alt: "Facility 4" },
            { src: "/Images/19.png", alt: "Facility 5" },
            { src: "/Images/20.png", alt: "Facility 6" },
            { src: "/Images/21.png", alt: "Facility 7" },
            { src: "/Images/22.png", alt: "Facility 8" },
            { src: "/Images/23.png", alt: "Facility 9" },
            { src: "/Images/24.png", alt: "Facility 10" },
            { src: "/Images/26.png", alt: "Facility 11" },
            { src: "/Images/27.png", alt: "Facility 12" },
          ].map((img, idx) => (
            <div
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              key={img.src}
              className="rounded-2xl overflow-hidden shadow-md flex items-center justify-center aspect-[5/4] bg-black/5"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={350}
                height={300}
                className=""
                style={{ background: "#fff" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferenceAndMedia;
