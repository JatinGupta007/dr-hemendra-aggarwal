// components/FacilitiesSection.tsx

import Image from "next/image";

const ConferenceAndMedia = () => {
  return (
    <section className="py-16 px-4 md:mx-auto mx-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#197d85] text-lg font-semibold mb-2">
          HAVE A LOOK AT
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-12">
          Conference And Media <br className="hidden md:block" />
          Latest Activities
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            { src: "/Images/media_img_1.jpg", alt: "Facility 1" },
            { src: "/Images/media_img_4.jpg", alt: "Facility 2" },
            { src: "/Images/media_img_3.jpg", alt: "Facility 3" },
            { src: "/Images/media_img_2.jpg", alt: "Facility 4" },
            { src: "/Images/media_img_5.jpg", alt: "Facility 5" },
            { src: "/Images/media_img_6.jpg", alt: "Facility 6" },
            { src: "/Images/media_img_7.jpg", alt: "Facility 7" },
            { src: "/Images/media_img_8.jpg", alt: "Facility 8" },
            { src: "/Images/media_img_9.jpg", alt: "Facility 9" },
            { src: "/Images/media_img_10.jpg", alt: "Facility 10" },
            { src: "/Images/media_img_11.jpg", alt: "Facility 11" },
            { src: "/Images/media_img_12.jpg", alt: "Facility 12" },
          ].map((img, idx) => (
            <div
              key={img.src}
              className="rounded-2xl overflow-hidden shadow-md flex items-center justify-center aspect-[5/4] bg-black/5"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={350}
                height={300}
                className="w-94 h-full object-fill"
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
