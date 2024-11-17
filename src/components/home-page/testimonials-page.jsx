import { db } from "@/firebase";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

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
    <section className="py-4">
      <div className="flex flex-col gap-10">
        <div>
          <h4 className="text-3xl font-medium mb-10">Ease in the Hand</h4>
          <p className="text-base text-grey-text mb-8">
            Using our app in business, especially in the restaurant industry,
            has many advantages. Here are some of them:
          </p>

          <div className="grid grid-cols-1 gap-4">
            {appAdvantages?.map((advantage) => (
              <div key={advantage?.title}>
                <span className="inline-block w-16 mb-3">
                  <img src={advantage?.photo} alt={advantage?.title} />
                </span>
                <p className="font-medium text-lg mb-2">{advantage?.title}</p>
                <span className="inline-block text-sm text-grey-text w-60">
                  {advantage?.description}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {testimonials?.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col gap-6 rounded-[20px] p-8"
              style={{
                backgroundColor: testimonial?.backgroundColor,
                color: testimonial?.fontColor,
              }}
            >
              <p className="font-medium">{testimonial?.quote}</p>
              <div className="flex items-center gap-3">
                <span
                  className="inline-block size-14 rounded-full shrink-0"
                  style={{
                    backgroundColor: testimonial?.avatarColor,
                  }}
                />
                <div>
                  <p className="font-semibold text-base">
                    {testimonial?.person}
                  </p>
                  <span className="font-semibold text-sm">
                    {testimonial?.designation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;
