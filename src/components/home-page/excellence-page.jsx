import { Button } from "../ui/button";

const ExcellencePage = () => {
  return (
    <section className="pt-4 sm:pt-6">
      <div className="bg-gradient-to-r from-background-black to-[#232329] text-white text-center rounded-t-[32px]">
        <div className="bg-[url('/excellence-section-bg.svg')] bg-cover bg-bottom bg-no-repeat pt-6 px-4 pb-60 sm:pt-20 sm:px-16 sm:bg-contain lg:bg-cover">
          <h4 className="text-3xl font-medium mb-6 sm:text-500-64">
            Gain Excellence with the Best POS Solutions
          </h4>
          <p className="text-base text-[#C2C2C2] mb-8 sm:text-400-18 xl:max-w-2xl xl:w-full xl:mx-auto">
            Provide an unforgettable customer experience with fast ordering,
            convenient payments, and better service.
          </p>
          <Button className="h-14 pl-6 pr-2">
            Get Started for Free{" "}
            <span>
              <img src="/circle-right-arrow.svg" alt="Right Arrow" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExcellencePage;
