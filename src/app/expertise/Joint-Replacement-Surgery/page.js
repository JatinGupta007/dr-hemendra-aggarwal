import SpecificExpertise from "@/component/SpecificExpertise";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";
import Image from "next/image";

const jointReplacementData = {
  icon: (
    <Image
      src="/Images/treatment_icon_8.png"
      alt="treatment_icon_8"
      width={110}
      height={100}
      className="mx-auto"
    />
  ),
  title: "Joint Replacement Surgery",
  subtitle: "",
  description:
    "Joint pain limiting your movement? Dr. Hemendra Agarwal is an experienced joint replacement surgeon in Jaipur offering modern, minimally invasive procedures for patients with arthritis, cartilage damage, or failed past implants.",
  services: [
    {
      title: "Total & Partial Knee Replacement",
      subtitle: "For chronic knee arthritis and damage.",
      icon: (
        <Image
          src="/Images/treatment_icon_1.png"
          alt="treatment_icon_8"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
    },
    {
      title: "Hip Replacement Surgery",
      subtitle: "Smooth, pain-free hip joint mobility.",
      icon: (
        <Image
          src="/Images/treatment_icon_9.png"
          alt="treatment_icon_8"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
    },
    {
      title: "Shoulder & Elbow Replacement",
      subtitle: "Advanced joint solutions for arms.",
      icon: (
        <Image
          src="/Images/treatment_icon_6.png"
          alt="treatment_icon_8"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
    },
    {
      title: "Reverse Shoulder Replacement",
      subtitle: "Ideal for complex shoulder injuries.",
      icon: (
        <Image
          src="/Images/treatment_icon_19.png"
          alt="treatment_icon_8"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
    },
    {
      title: "Revision Joint Replacement Surgeries",
      subtitle: "Fixing or upgrading failed implants.",
      icon: (
        <Image
          src="/Images/treatment_icon_11.png"
          alt="treatment_icon_8"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
    },
    {
      title: "Painless & Quick Recovery Joint Surgery",
      subtitle: "Modern techniques for faster healing.",
      icon: (
        <Image
          src="/Images/treatment_icon_10.png"
          alt="treatment_icon_8"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
    },
  ],
  benefits: [
    "Minimally Invasive Techniques",
    "Reduced Hospital Stay",
    "Expert Surgical Care",
    "Improved Quality of Life",
    "Affordable Joint Replacement in Jaipur",
  ],
  highlights: {
    title: "Looking for the best knee replacement surgeon in Jaipur?",
    description: "Book your consultation today and step into a pain-free life.",
    button: "Learn More About Joint Replacement",
  },
  keywords: [
    "joint replacement surgeon in Jaipur",
    "knee replacement surgeon in Jaipur",
    "painless joint replacement Jaipur",
  ],
};
// Update the path as needed
export default function JointReplacementPage() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={jointReplacementData} />
      <Footer />
    </>
  );
}
