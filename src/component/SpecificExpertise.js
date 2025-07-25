"use client";
import { usePathname } from "next/navigation";
import { CheckCircle, Clock, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SpecificExpertise({ data }) {
  const pathname = usePathname();
  console.log(pathname)
  const {
    title,
    subtitle,
    description,
    services,
    benefits,
    highlights,
    keywords,
  } = data;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 py-20 px-6 md:px-20">
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div
            data-aos="flip-up"
            className="inline-flex items-center justify-center w-30 h-30 bg-white rounded-2xl shadow-lg mb-6"
          >
            {data.icon}
          </div>

          <h1
            data-aos="flip-up"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4"
          >
            {title}
            <span
              data-aos="flip-up"
              className="block text-[#197d85] text-3xl md:text-4xl lg:text-5xl mt-2"
            >
              {subtitle}
            </span>
          </h1>

          <p
            data-aos="flip-up"
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap items-center justify-center gap-7 mb-16">
          {services.map((service, index) => (
            <Link
              key={index}
              href={
                pathname === `/expertise/${title.replaceAll(" ", "-")}`
                  ? `/expertise/${title.replaceAll(
                      " ",
                      "-"
                    )}/${service.title.replaceAll(" ", "-")}`
                  : "#"
              }
            >
              <div
                data-aos="zoom-in"
                className="group flex flex-col justify-center items-center w-86 h-60 bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20"
              >
                <div className="flex items-center justify-center w-18 h-18 bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-bold text-center text-lg text-black mb-2 group-hover:text-[#197d85] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {service.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-4 md:p-12 shadow-2xl border border-white/30">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                data-aos="fade-right"
                className="text-3xl md:text-4xl font-bold text-black mb-6"
              >
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#197d85]/90 to-[#97a345]/90">{title}</span>?
              </h2>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div
                    data-aos="fade-right"
                    key={index}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-[#97a345] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <div
                  data-aos="fade-right"
                  className="flex items-center space-x-2 bg-[#197d85]/10 px-4 py-2 rounded-full"
                >
                  <Clock className="w-5 h-5 text-[#197d85]" />
                  <span className="text-sm font-medium text-[#197d85]">
                    Quick Recovery
                  </span>
                </div>
                <div
                  data-aos="fade-right"
                  className="flex items-center space-x-2 bg-[#97a345]/10 px-4 py-2 rounded-full"
                >
                  <Shield className="w-5 h-5 text-[#97a345]" />
                  <span className="text-sm font-medium text-[#97a345]">
                    Safe Procedure
                  </span>
                </div>
              </div>
            </div>

            {/* Highlight Box */}
            <div data-aos="fade-left" className="relative">
              <div className="bg-gradient-to-br from-[#197d85]/20 to-[#97a345]/20 rounded-2xl p-4 md:p-8 text-center">
                <div
                  data-aos="fade-right"
                  className="bg-white rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  {data.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {highlights.title}
                </h3>
                <p className="text-gray-700 mb-6">{highlights.description}</p>

                <Link href="/contact">
                  <button className="group bg-gradient-to-r from-[#197d85]/50 to-[#97a345]/50 text-black px-3 md:px-8 py-1 md:py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center mx-auto space-x-1 md:space-x-2">
                    <span>{highlights.button}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#97a345]/30 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#197d85]/20 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Keyword Tags */}
        <div data-aos="fade-up" className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-7 justify-center">
            {keywords.map((keyword, index) => (
              <span
                key={index}
                className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-2xl text-sm font-medium text-gray-600 border border-white/40 capitalize"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
