import BrandsPage from "@/components/home-page/brands-page";
import ExcellencePage from "@/components/home-page/excellence-page";
import FaqPage from "@/components/home-page/faq-page";
import FeaturesPage from "@/components/home-page/features-page";
import FooterPage from "@/components/home-page/footer-page";
import Header from "@/components/home-page/header";
import LandingPage from "@/components/home-page/landing-page";
import PricingPage from "@/components/home-page/pricing-page";
import TestimonialsPage from "@/components/home-page/testimonials-page";

const index = () => {
  return (
    <div className="w-full px-3 container mx-auto sm:px-6 2xl:px-10">
      <Header />
      <LandingPage />
      <BrandsPage />
      <FeaturesPage />
      <PricingPage />
      <TestimonialsPage />
      <FaqPage />
      <ExcellencePage />
      <FooterPage />
    </div>
  );
};

export default index;
