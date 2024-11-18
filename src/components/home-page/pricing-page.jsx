import { Button } from "../ui/button";

const PricingPage = () => {
  const pricingData = {
    plans: [
      { value: "" },
      { value: "Basic", bg: "#F1FAEB" },
      { value: "Business", bg: "#ECF6FF" },
      { value: "Enterprise", bg: "#F2ECFF" },
    ],
    tableData: [
      {
        field: "Price",
        basic: "$20/month",
        business: "$30/month",
        enterprise: "$50/month",
      },
      {
        field: "Unlimited Transactions",
        basic: true,
        business: true,
        enterprise: true,
      },
      { field: "Multi Outlet", basic: true, business: true, enterprise: true },
      {
        field: "Report Featured",
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        field: "Inventory Management",
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        field: "Direct report & teamreview",
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        field: "Employee Management System",
        basic: false,
        business: true,
        enterprise: true,
      },
      {
        field: "CRM And Promotion Features",
        basic: false,
        business: false,
        enterprise: true,
      },
      {
        field: "Third Party Application Integration",
        basic: false,
        business: false,
        enterprise: true,
      },
    ],
  };

  return (
    <section className="py-4 sm:py-9 xl:px-[140px]">
      <div className="mb-8 lg:flex lg:items-center lg:justify-between">
        <h4 className="text-3xl font-medium mb-3 sm:text-500-64">
          Packages for your business
        </h4>
        <div className="flex justify-center lg:shrink-0">
          <div className="inline-block bg-background-blue rounded-full p-1 lg:max-h-fit">
            <Button className="bg-background-black sm:text-500-14 lg:h-9">
              Month
            </Button>
            <Button variant="ghost" className="sm:text-500-14">
              Annual
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <table className="w-full border-separate border-spacing-x-3">
          <thead>
            <tr>
              {pricingData?.plans?.map((plan) => (
                <td
                  className="text-center text-600-24 w-40 rounded-t-[20px] [&:nth-child(2)]:text-green-2 [&:nth-child(3)]:text-[#3871A5] [&:nth-child(4)]:text-[#7256AF] [&:nth-child(2)>span]:bg-[#E0F2D4] [&:nth-child(3)>span]:bg-[#D4E8FA] [&:nth-child(4)>span]:bg-[#E6DBFF]"
                  key={plan?.value}
                  style={{ backgroundColor: plan?.bg }}
                >
                  {plan?.value && (
                    <span className="inline-block rounded-[20px] px-2 py-3 bg-[#E0F2D4] w-full h-full">
                      {plan?.value}
                    </span>
                  )}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {pricingData?.tableData?.map((item) => (
              <tr
                key={item?.id}
                className="border-y first:border-none last:border-none [&>*]:last:rounded-b-[20px]"
              >
                <td className="p-6 text-500-20">{item?.field}</td>
                {item?.field === "Price"
                  ? ["basic", "business", "enterprise"]?.map((plan) => (
                      <td
                        key={plan}
                        className="text-center text-600-24 [&:nth-child(2)]:bg-green-3 [&:nth-child(3)]:bg-[#ECF6FF] [&:nth-child(4)]:bg-[#F2ECFF]"
                      >
                        {item[plan]}
                      </td>
                    ))
                  : ["basic", "business", "enterprise"]?.map((plan) => (
                      <td
                        key={plan}
                        className="text-center w-20 mx-auto [&:nth-child(2)]:bg-green-3 [&:nth-child(3)]:bg-[#ECF6FF]  [&:nth-child(4)]:bg-[#F2ECFF]"
                      >
                        {item[plan] ? (
                          <img
                            src={`/${plan}-tick.svg`}
                            className="size-6 mx-auto"
                            alt={`${plan} Tick`}
                          />
                        ) : (
                          "-"
                        )}
                      </td>
                    ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PricingPage;
