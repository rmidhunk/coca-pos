import { BarChartComponent } from "./bar-chart";

const RightSectionGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div>
        <BarChartComponent />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="bg-[#F2ECFF] rounded-[32px] p-4 flex flex-col justify-between h-64 sm:p-5 sm:flex-grow">
          <div>
            <div className="flex items-center gap-2 py-2 px-3 w-max bg-white rounded-full mb-2">
              <div className="size-6">
                <img src="/rating-review.svg" alt="Rating review" />
              </div>
              <span className="font-medium text-sm text-background-black">
                Rating Review
              </span>
            </div>
            <p className="text-grey-1 text-sm sm:text-400-14 sm:w-44">
              Reviews of some of our app restaurant industry companies.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-10">
              <img src="/star-icon.svg" alt="Star" />
            </div>
            <span className="font-semibold text-4xl">4.9</span>
          </div>
        </div>
        <div className="bg-[#6D6D6F] rounded-[32px] p-4 flex flex-col justify-between h-64 sm:p-5 sm:flex-grow">
          <div>
            <div className="flex items-center gap-2 py-2 px-3 w-max bg-[#222222] rounded-full">
              <div className="size-6">
                <img src="/total-partner.svg" alt="Total Partner" />
              </div>
              <span className="font-medium text-sm text-white">
                Total Partner
              </span>
            </div>
          </div>
          <div className="flex items-end gap-2 text-white">
            <span className="font-semibold text-5xl">50</span>
            <span className="font-semibold text-base">thousands</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 rounded-[20px] p-8 bg-[#FFF5EE] sm:px-5 sm:py-6">
        <p className="font-medium text-[#DC8558] sm:mb-8">
          “Deliver a better customer experience and increase their operational
          efficiency.”
        </p>
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex items-center gap-3 bg-white rounded-full p-2">
            <span className="inline-block size-10 rounded-full shrink-0 bg-[#F2D0B8]" />
            <div>
              <div className="">
                <p className="font-semibold text-sm text-background-black">
                  Patrick Fernandes
                </p>
                <span className="text-sm text-grey-1">CEO at Burger King</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 mt-4 sm:mt-0">
            <span>
              <img src="/left-arrow.svg" alt="Left" />
            </span>
            <span>
              <img src="/right-arrow.svg" alt="Right" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSectionGrid;
