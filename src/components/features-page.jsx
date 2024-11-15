import { Button } from "./ui/button";

const FeaturesPage = () => {
  const featuresContent = [
    {
      id: 1,
      photo: "/features-card.png",
      heading: "Dashboard to monitor your business sales from anywhere",
      content:
        "Dashboard provides in-depth insight into the performance menu items. You can see popular and unsold menus, helping you to monitor your restaurant business sales.",
    },
    {
      id: 2,
      photo: "/features-card.png",
      heading: "Easier and better Desk Management",
      content:
        "Desk management becomes smoother with interactive table visualizations. You can manage orders, allocate tables and maximize restaurant capacity.",
    },
    {
      id: 3,
      photo: "/features-card.png",
      heading: "More efficient customer recording and monitoring",
      content:
        "Monitor order records to tailor orders to customer preferences, such as options to add or remove ingredients for a more personalized experience and better service.",
    },
  ];

  return (
    <section className="py-4">
      <h4 className="text-3xl font-medium mb-10">
        Complementary features for your business needs
      </h4>
      <div className="flex flex-col gap-4">
        {featuresContent?.map((feature) => (
          <div
            key={feature?.id}
            className="bg-background-blue py-10 px-8 rounded-[32px] flex flex-col gap-10"
          >
            <div>
              <img src={feature?.photo} alt="Features card" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h5 className="font-medium text-xl mb-3">{feature?.heading}</h5>
                <p className="text-base text-grey-text mb-8">
                  {feature?.content}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Button>Launch Demo</Button>
                <Button variant="outline">More Info</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesPage;
