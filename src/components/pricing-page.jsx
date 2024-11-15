import { Button } from "./ui/button";

const PricingPage = () => {
  return (
    <section className="py-4">
      <h4 className="text-3xl font-medium mb-3">Packages for your business</h4>
      <div className="flex justify-center">
        <div className="inline-block bg-background-blue rounded-full p-1">
          <Button className="bg-background-black">Mount</Button>
          <Button variant="ghost">Annual</Button>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
