import ClinicLocations from "@/component/ClinicLocationSection";
import DoctorSection from "@/component/DoctorSection";
import FaqAccordion from "@/component/FaqAccordion";
import Header from "@/component/Header";
import HeroSection from "@/component/HeroSection";
import SpotlightSection from "@/component/SpotlightSection";
import Testimonial from "@/component/TestimonialSection";

import TreatmentSection from "@/component/TreatmentSection";
import TrustUsSection from "@/component/TrustUs";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <TrustUsSection />
      <TreatmentSection />
      <SpotlightSection />
      <ClinicLocations />
      <DoctorSection />
      <Testimonial />
      <FaqAccordion />
    </main>
  );
}
