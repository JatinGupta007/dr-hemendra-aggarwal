import Footer from "@/component/Footer";
import Header from "@/component/Header";
import SubExpertise from "@/component/SubExpertise";
import { TreatmentsData } from "@/component/Data";

export default function TreatmentPage({ params }) {
  const { treatment } = params;
  console.log(treatment);
  const normalize = (s) => s.replace(/\s+/g, "-").toLowerCase();
  const treatmentInfo = TreatmentsData.find(
    (item) => normalize(item.title) === treatment.toLowerCase()
  );
  return (
    <>
      <Header />
      <SubExpertise pageData={treatmentInfo} />
      <Footer />
    </>
  );
}
