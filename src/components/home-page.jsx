import { Button } from "./ui/button";

const HomePage = () => {
  return (
    <section className="flex flex-col gap-5 py-4">
      <div className="bg-[#131315] rounded-[32px]">
        <div className="bg-[url('/landing-bg.svg')] bg-cover bg-no-repeat px-4 pt-4 pb-40 rounded-[32px] text-white">
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
      <div className="grid grid-cols-1 gap-4">
        <div>
          <img src="/sales-statistics.png" alt="Sales Statistics" />
        </div>
        <div className="flex gap-4">
          <div>
            <img src="/rating-review.png" alt="Rating review" />
          </div>
          <div>
            <img src="/total-partner.png" alt="Total Partner" />
          </div>
        </div>
        <div>
          <img src="/landing-testimonial.png" alt="Landing Testimonial" />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
