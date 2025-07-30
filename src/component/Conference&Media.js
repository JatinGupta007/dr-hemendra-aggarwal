// components/FacilitiesSection.tsx

import Image from "next/image";

const ConferenceAndMedia = () => {
  return (
    <section className="py-16 px-4 md:mx-20 mx-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#197d85] text-lg font-semibold mb-2">
          HAVE A LOOK AT
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-12">
          Conference And Media <br className="hidden md:block" />
          Latest Activities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/Images/media_img_1.jpg"
              alt="Facility 1"
              width={500}
              height={400}
              className="w-full h-70 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/Images/media_img_4.jpg"
              alt="Facility 2"
              width={500}
              height={400}
              className="w-full h-70 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/Images/media_img_3.jpg"
              alt="Facility 3"
              width={500}
              height={400}
              className="w-full h-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceAndMedia;
