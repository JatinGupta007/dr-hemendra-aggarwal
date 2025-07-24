import SpecificExpertise from "@/component/SpecificExpertise";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";
import Image from "next/image";

const upperLimbData = {
  icon: (
    <Image
      src="/Images/treatment_icon_6.png"
      alt="treatment_icon_6"
      width={110}
      height={100}
      className="mx-auto"
    />
  ),
  title: "Shoulder, Elbow & Upper Limb Surgeries",
  subtitle: "",
  description:
    "Persistent pain or instability in your shoulder or elbow may require surgical intervention. Dr. Agarwal provides specialized upper limb orthopedic care that restores strength and stability.",
  services: [
    {
      icon: (
        <Image
          src="/Images/treatment_icon_22.png"
          alt="treatment_icon_6"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Recurrent Shoulder Dislocations",
      subtitle: "Advanced solutions to restore joint stability",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_20.png"
          alt="treatment_icon_6"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Rotator Cuff Tears",
      subtitle: "Arthroscopic and open repair techniques",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_21.png"
          alt="treatment_icon_6"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Tennis Elbow & Golfers Elbow",
      subtitle: "Pain relief and tendon healing procedures",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_23.png"
          alt="treatment_icon_6"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Elbow Ligament Repair & Realignment",
      subtitle: "Restoring function and reducing instability",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_19.png"
          alt="treatment_icon_6"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Frozen Shoulder",
      subtitle: "Release procedures and guided therapy",
    },
  ],
  benefits: [
    "Minimally invasive upper limb surgeries",
    "Fast recovery and rehabilitation plans",
    "Trusted for complex shoulder/elbow disorders",
    "Expert in both sports and age-related conditions",
  ],
  highlights: {
    title: "Explore Shoulder & Elbow Treatments",
    description:
      "Regain full use of your upper limbs with the help of Jaipur’s trusted orthopedic expert. Get back to lifting, throwing, and living pain-free.",
    button: "Book Shoulder Specialist Now",
  },
  keywords: [
    "shoulder dislocation treatment Jaipur",
    "rotator cuff surgery Jaipur",
  ],
};

export default function ShoulderElbowPage() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={upperLimbData} />
      <Footer />
    </>
  );
}
