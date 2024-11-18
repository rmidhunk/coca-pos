import { Button } from "../ui/button";
import RightSectionGrid from "./landing-page-components/right-section-grid";

const LandingPage = () => {
  return (
    <section className="flex flex-col gap-5 py-4 sm:py-7 xl:flex-row">
      <div className="bg-[#131315] rounded-[32px] xl:w-2/3">
        <div className="bg-[url('/landing-bg.svg')] bg-cover bg-no-repeat px-4 pt-4 pb-40 rounded-[32px] text-white sm:px-12 sm:pt-14 xl:h-full xl:bg-contain xl:bg-bottom">
          <span className="inline-block text-sm mb-8 text-grey-2 sm:font-normal">
            All the features you need in one App for any kind of your business
            🚀
          </span>
          <h2 className="text-4xl mb-8 sm:text-heading">
            Manage your restaurant business so advanced
          </h2>
          <Button className="h-14 pl-6 pr-2 sm:text-600-16">
            Get Started for Free{" "}
            <span>
              <img src="/circle-right-arrow.svg" alt="Right Arrow" />
            </span>
          </Button>
        </div>
      </div>
      <RightSectionGrid />
    </section>
  );
};

export default LandingPage;
