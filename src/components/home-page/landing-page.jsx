import { Button } from "../ui/button";
import RightSectionGrid from "./landing-page-components/right-section-grid";

const LandingPage = () => {
  return (
    <section className="flex flex-col gap-5 py-4 sm:py-7">
      <div className="bg-[#131315] rounded-[32px]">
        <div className="bg-[url('/landing-bg.svg')] bg-cover bg-no-repeat px-4 pt-4 pb-40 rounded-[32px] text-white sm:px-12 sm:pt-14">
          <span className="inline-block text-sm mb-8">
            All the features you need in one App for any kind of your business
            🚀
          </span>
          <h2 className="text-4xl mb-8">
            Manage your restaurant business so advanced
          </h2>
          <Button className="h-14 pl-6 pr-2">
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
