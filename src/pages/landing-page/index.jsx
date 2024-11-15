import HomePage from "@/components/home-page";
import Header from "@/components/header";
import BrandsPage from "@/components/brands-page";
import FeaturesPage from "@/components/features-page";
import PricingPage from "@/components/pricing-page";

const index = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header />
      <HomePage />
      <BrandsPage />
      <FeaturesPage />
      <PricingPage />
      {/* Testimonials */}
      {/* FAQs */}
      {/* index */}
      {/* footer */}
    </div>
  );
};

export default index;
