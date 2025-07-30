"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const images = [
  "award_img_1.jpg",
  "award_img_2.jpg",
  "award_img_3.jpg",
  "award_img_4.jpg",
  "award_img_5.jpg",
  "award_img_6.jpg",
];

const Recognitions = () => {
  const [sliderRef, instanceRef] =
    useKeenSlider({
      loop: true,
      slides: {
        perView: 1,
        spacing: 15,
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: { perView: 2, spacing: 15 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 20 },
        },
      },
    },
    [
      // Autoplay plugin
      (slider) => {
        let timeout;
        const clearNextTimeout = () => clearTimeout(timeout);

        const nextTimeout = () => {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, 2500);
        };

        slider.on("created", () => {
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]);

  return (
    <section className="bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 py-16 px-4 my-10">
      <div className="max-w-6xl mx-auto text-center relative">
        <h3 className="text-lg text-brown-600 font-medium mb-2">
          Honoring Our Commitment to Excellence in Experience, Expertise, and
          Care
        </h3>
        <h2 className="text-3xl font-semibold text-brown-800 mb-10">
          Recognitions & Achievements
        </h2>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="keen-slider__slide rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={`/Images/${src}`}
                  alt={`Recognition ${idx + 1}`}
                  width={500}
                  height={400}
                  className="w-full h-70 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
          >
            ◀
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recognitions;
