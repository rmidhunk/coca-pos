const BrandsPage = () => {
  return (
    <section className="py-4 sm:py-7">
      <div>
        <h3 className="text-sm font-medium text-center">
          Trusted by over 50 thousand restaurants in 10+ countries
        </h3>
        <div className="flex flex-wrap gap-8 p-8">
          <span className="w-16 mx-auto">
            <img src="/kfc-logo.svg" alt="KFC logo" />
          </span>
          <span className="w-16 mx-auto">
            <img src="/pizza-hut-logo.svg" alt="Pizza-hut logo" />
          </span>
          <span className="w-16 mx-auto">
            <img src="/mcdonald-logo.svg" alt="Mcdonald logo" />
          </span>
          <span className="w-16 mx-auto">
            <img src="/starbucks-logo.svg" alt="Starbucks logo" />
          </span>
          <span className="w-16 mx-auto">
            <img src="/burgerking-logo.svg" alt="Burgerking logo" />
          </span>
          <span className="w-16 mx-auto">
            <img src="/jco-logo.svg" alt="JCO logo" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default BrandsPage;
