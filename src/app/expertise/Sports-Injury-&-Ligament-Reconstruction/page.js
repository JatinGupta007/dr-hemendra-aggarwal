import SpecificExpertise from "@/component/SpecificExpertise";
import Navbar from "@/component/Header";
import Footer from "@/component/Footer";
import Image from "next/image";

const sportsInjuryData = {
  icon: (
    <Image
      src="/Images/treatment_icon_4.png"
      alt="treatment_icon_2"
      width={110}
      height={100}
      className="mx-auto"
    />
  ),
  title: "Sports Injury & Ligament Reconstruction",
  subtitle: "",
  description:
    "From athletes to everyday active individuals, ligament tears and soft tissue injuries can drastically affect performance and mobility. Dr. Agarwal is a trusted sports injury doctor in Jaipur, helping patients get back to full strength with personalized rehab protocols and advanced surgeries.",
  services: [
    {
      icon: (
        <Image
          src="/Images/treatment_icon_13.png"
          alt="treatment_icon_2"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "ACL Or PCL Reconstruction",
      subtitle: "Restore knee stability and function",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_15.png"
          alt="treatment_icon_2"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Meniscus Repair & Debridement",
      subtitle: "Preserve and heal meniscal tissue",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_6.png"
          alt="treatment_icon_2"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Shoulder Dislocation Surgery",
      subtitle: "Recurrent shoulder instability correction",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_14.png"
          alt="treatment_icon_2"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Labral Tear Repairs",
      subtitle: "Advanced shoulder and hip labral treatment",
    },
    {
      icon: (
        <Image
          src="/Images/treatment_icon_10.png"
          alt="treatment_icon_2"
          width={60}
          height={60}
          className="mx-auto"
        />
      ),
      title: "Sports Rehab & Return-to-Play Guidance",
      subtitle: "Personalized rehab for athletes",
    },
  ],
  benefits: [
    "Advanced arthroscopic surgeries",
    "Personalized rehabilitation plans",
    "Fast recovery for active lifestyle",
    "Minimally invasive techniques",
  ],
  highlights: {
    title: "Get Treated by Jaipur’s Top Ligament Surgeon",
    description:
      "Trusted by athletes and active individuals across Rajasthan for accurate diagnosis, advanced procedures, and return-to-sport support.",
    button: "Book Consultation Now",
  },
  keywords: [
    "sports injury doctor in Jaipur",
    "ligament surgeon in Jaipur",
    "ACL reconstruction Jaipur",
  ],
};

export default function SportsInjuryPage() {
  return (
    <>
      <Navbar />
      <SpecificExpertise data={sportsInjuryData} />
      <Footer />
    </>
  );
}
