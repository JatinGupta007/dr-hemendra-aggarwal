/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";

const reviews = [
  {
    name: "Abhishek Katara",
    location: "Jaipur, India",
    image: "/Images/vedant-tomar.jpeg",
    review:
      "Dr. Hemendra Agrawal is an outstanding orthopedic specialist. He takes the time to listen carefully to each patient, never rushing through appointments. His calm demeanor immediately puts one at ease, creating a truly comfortable experience. Not only does he explain procedures and treatment options in clear, patient-friendly language, but he also shows genuine care for your recovery and well-being.",
    rating: 4,
  },
  {
    name: "Manju singh",
    location: "Ajmer, India",
    image: "/Images/sarojini-singh.webp",
    review:
      "70 days since my knee ACL surgery. Now I am walking well and doing all the normal routine work. I am also driving. Dr. Hemender Sir is very good, your nature is very helpful. Thank you!",
    rating: 4.5,
  },
  {
    name: "Jasveer choudhary",
    location: "Pushkar, India",
    image: "/Images/rajni-gupta.jpeg",
    review: "I got my brother-in-law's ACL ligament operated by Dr. Hemendra and now he has no problem. I would like to thank Hemendra Sir a lot for this. And I would like to tell you that if anyone has any ortho related problem then one must meet Dr. Hemendra once. He is very talented and calm by nature. He provides excellent treatment at very low cost.",
    rating: 5,
  },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(1);

  return (
    <div className="mx-auto px-6 md:px-20 py-6">
      <h2
        data-aos="fade-down"
        className="text-center text-4xl md:text-6xl font-bold text-slate-800"
      >
        Some Reviews
      </h2>
      <p
        data-aos="fade-down"
        className="text-center font-bold text-[#197d85] text-xl md:text-3xl mt-1 mb-6"
      >
        OF OUR CLIENTS
      </p>

      <div className="flex flex-col justify-between items-center lg:flex-row gap-8 mt-5 lg:mt-16 pb-10 relative">
        {/* Left Column */}
        <div data-aos="flip-up" className="w-full lg:w-5/12 flex justify-center lg:flex-col gap-8 lg:gap-12 pt-3 relative z-10">
          {reviews.map((user, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 rounded-3xl lg:p-5 lg:w-4/5 cursor-pointer transition-all duration-300 ${
                index === 1 && "lg:self-end"
              } ${
                index === current
                  ? "bg-white shadow-[0_0_25px_#197d85]"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => setCurrent(index)}
            >
              <img
                src={user.image}
                alt={user.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="hidden lg:block">
                <h3 className="font-bold text-slate-800 uppercase text-2xl">
                  {user.name}
                </h3>
                <p className="text-lg text-slate-500">{user.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Vertical Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[#197d85] translate-x-[-50%] z-0">
          {/* Dots */}
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full absolute left-1/2 -translate-x-1/2 transition-all duration-300 mt-12 ${
                index === current
                  ? "bg-[#197d85] scale-125"
                  : "bg-[#197d85] scale-75"
              }`}
              style={{ top: `${index * 170 + 10}px` }}
            ></div>
          ))}
        </div>

        {/* Right Column */}
        <div data-aos="fade-left" className="w-full lg:w-5/12 flex items-start">
          {reviews[current].review && (
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <FaQuoteLeft className="text-2xl text-[#197d85] mb-4" />
              <p className="text-slate-400 text-xl leading-relaxed">
                {reviews[current].review}
              </p>
              <div className="flex text-[#197d85] text-xl mt-4 gap-1">
                {Array.from(
                  { length: parseInt(reviews[current].rating) },
                  (_, i) => (
                    <span key={i} className="flex items-center">
                      <FaStar />
                      {/* Show FaQuoteLeft after 4th star only if rating is 4.5 */}
                      {reviews[current].rating === 4.5 && i === 3 && (
                        <FaStarHalfAlt className="ml-1" />
                      )}
                    </span>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
