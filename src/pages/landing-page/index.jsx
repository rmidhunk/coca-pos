import BrandsPage from "@/components/brands-page";
import FaqPage from "@/components/faq-page";
import FeaturesPage from "@/components/features-page";
import Header from "@/components/header";
import HomePage from "@/components/home-page";
import PricingPage from "@/components/pricing-page";
import TestimonialsPage from "@/components/testimonials-page";

const index = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header />
      <HomePage />
      <BrandsPage />
      <FeaturesPage />
      {/* TODO: PricingPage */}
      <PricingPage />
      <TestimonialsPage />
      <FaqPage />
      {/* index */}
      {/* footer */}
    </div>
  );
};

export default index;
