import { db } from "@/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const FeaturesPage = () => {
  const [featuresContent, setFeaturesContent] = useState([]);

  const getFeaturesContent = async () => {
    const querySnapshot = await getDocs(
      query(collection(db, "featuresContent"), orderBy("idx", "asc")),
    );
    const newFeaturesContent = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const exists = featuresContent.some((item) => item.id === data.id);
      if (!exists) {
        newFeaturesContent.push({ id: doc.id, ...data });
      }
    });
    setFeaturesContent(newFeaturesContent);
  };

  useEffect(() => {
    getFeaturesContent();
  }, []);

  return (
    <section className="py-4 sm:py-16">
      <h4 className="text-3xl font-medium mb-10 sm:text-500-64">
        Complementary features for your business needs
      </h4>
      <div className="flex flex-col gap-4">
        {featuresContent?.map((feature) => (
          <div
            key={feature?.id}
            className="bg-background-blue py-10 px-8 rounded-[32px] flex flex-col gap-10"
          >
            <div>
              <img src="/features-card.png" alt="Features card" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h5 className="font-medium text-xl mb-3 sm:text-500-32">
                  {feature?.heading}
                </h5>
                <p className="text-base text-grey-1 mb-8 sm:text-400-18">
                  {feature?.content}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Button className="sm:text-600-16">Launch Demo</Button>
                <Button variant="outline" className="text-600-16">
                  More Info
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesPage;
