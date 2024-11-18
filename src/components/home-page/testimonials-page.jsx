import { db } from "@/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);

  const appAdvantages = [
    {
      photo: "/settings-tooth.svg",
      title: "Operational efficiency",
      description: "Automate ordering, payment and stock management.",
    },
    {
      photo: "/security-safe.svg",
      title: "Security data",
      description:
        "Strong security to protect your customer and business data.",
    },
    {
      photo: "/box-add.svg",
      title: "Stock management",
      description: "Track stock in real-time and avoid stock outs or wastage.",
    },
    {
      photo: "/driver-refresh.svg",
      title: "Easy to integrate",
      description:
        "The integration process with third-party services runs easily.",
    },
    {
      photo: "/money-change.svg",
      title: "Manage financial",
      description: "Better record all purchase transactions automatically.",
    },
    {
      photo: "/trend-up.svg",
      title: "Business Scalability",
      description: "Easily add & upgrade according to your business growth.",
    },
  ];

  const getTestimonials = async () => {
    const querySnapshot = await getDocs(
      query(collection(db, "testimonials"), orderBy("idx", "asc")),
    );
    const newTestimonials = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const exists = testimonials.some((item) => item.id === data.id);
      if (!exists) {
        newTestimonials.push({ id: doc.id, ...data });
      }
    });
    setTestimonials(newTestimonials);
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <section className="py-4 sm:py-20">
      <div className="flex flex-col gap-10 xl:flex-row xl:items-end">
        <div>
          <h4 className="text-3xl font-medium mb-10 sm:text-500-64">
            Ease in the Hand
          </h4>
          <p className="text-base text-grey-1 mb-8 sm:text-400-18">
            Using our app in business, especially in the restaurant industry,
            has many advantages. Here are some of them:
          </p>

          <div className="flex flex-wrap justify-center gap-4 xl:justify-start xl:gap-8">
            {appAdvantages?.map((advantage) => (
              <div key={advantage?.title} className="xl:w-48">
                <span className="inline-block w-16 mb-3">
                  <img src={advantage?.photo} alt={advantage?.title} />
                </span>
                <p className="font-medium text-lg mb-2">{advantage?.title}</p>
                <span className="inline-block text-sm text-grey-1 w-60 sm:text-400-16 xl:w-44">
                  {advantage?.description}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {testimonials?.length === 0 ? (
            <span className="flex justify-center items-center">
              Loading testimonials...
            </span>
          ) : (
            testimonials?.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col gap-6 rounded-[20px] p-8"
                style={{
                  backgroundColor: testimonial?.backgroundColor,
                  color: testimonial?.fontColor,
                }}
              >
                <p className="font-medium sm:text-500-24">
                  {testimonial?.quote}
                </p>
                <div className="flex items-center gap-3">
                  <span
                    className="inline-block size-14 rounded-full shrink-0"
                    style={{
                      backgroundColor: testimonial?.avatarColor,
                    }}
                  />
                  <div>
                    <p className="font-semibold text-base sm:text-600-18">
                      {testimonial?.person}
                    </p>
                    <span className="font-semibold text-sm sm:text-600-16">
                      {testimonial?.designation}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;
