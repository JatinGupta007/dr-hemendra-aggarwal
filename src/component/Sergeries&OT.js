import Image from "next/image";

const SugeriesAndOT = () => {
  return (
    <section className="py-16 px-4 bg-white md:mx-auto mx-6">
      <div className="mx-auto">
        <p className="text-[#197d85] text-lg font-semibold mb-2 md:px-5 lg:px-12">
          HAVE A LOOK AT
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-12 lg:px-12 md:px-5">
          Our Surgeries and OT <br className="hidden md:block" />
          Latest Activities
        </h2>

        <div className="flex flex-wrap gap-3 justify-center items-center">
          {[
            { src: "/Images/28.png", alt: "Facility 1" },
            { src: "/Images/29.png", alt: "Facility 2" },
            { src: "/Images/30.png", alt: "Facility 3" },
            { src: "/Images/31.png", alt: "Facility 4" },
            { src: "/Images/32.png", alt: "Facility 5" },
            { src: "/Images/33.png", alt: "Facility 6" },
            { src: "/Images/34.png", alt: "Facility 7" },
            { src: "/Images/35.png", alt: "Facility 8" },
            { src: "/Images/36.png", alt: "Facility 9" },
            { src: "/Images/37.png", alt: "Facility 10" },
            { src: "/Images/38.png", alt: "Facility 11" },
            { src: "/Images/39.png", alt: "Facility 12" },
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

export default SugeriesAndOT;
