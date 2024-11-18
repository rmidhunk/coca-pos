import { db } from "@/firebase";
import { cn } from "@/lib/utils";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const FaqPage = () => {
  const [showAccordian, setShowAccordian] = useState(0);
  const [faqs, setFaqs] = useState([]);

  const getFaqs = async () => {
    const querySnapshot = await getDocs(
      query(collection(db, "faqs"), orderBy("idx", "asc")),
    );
    const newFaqs = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const exists = faqs.some((item) => item.id === data.id);
      if (!exists) {
        newFaqs.push({ id: doc.id, ...data });
      }
    });
    setFaqs(newFaqs);
  };

  useEffect(() => {
    getFaqs();
  }, []);

  const handleAccordian = (index) => {
    if (showAccordian === index) {
      setShowAccordian(-1);
    } else {
      setShowAccordian(index);
    }
  };
  return (
    <section className="py-4 sm:py-10">
      <div className="py-6 px-2 bg-background-blue rounded-[32px] sm:px-14 sm:py-16">
        <div className="lg:flex">
          <h4 className="text-3xl font-medium mb-10 sm:text-500-64">
            Frequently Asked Questions
          </h4>
          <div className="flex justify-center">
            <div className="inline-flex p-2 bg-white border border-border-1 rounded-full mb-2 md:mb-6">
              <input
                type="text"
                placeholder="Type your question here"
                className="w-full text-sm p-1 outline-none bg-transparent"
              />
              <Button className="lg:h-14">Search</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="flex justify-center">
            <div className="inline-block bg-background-blue rounded-full p-1">
              <Button
                variant="outline"
                className="border-primary-orange text-primary-orange hover:text-primary-orange"
              >
                General
              </Button>
              <Button variant="ghost" className="text-grey-1">
                Transactions
              </Button>
              <Button variant="ghost" className="text-grey-1">
                Payment
              </Button>
              <Button variant="ghost" className="text-grey-1">
                Others
              </Button>
            </div>
          </div>
          <ul className="flex flex-col">
            {faqs.length === 0 ? (
              <span className="flex justify-center items-center">
                Loading FAQs...
              </span>
            ) : (
              faqs?.map((faq, idx) => (
                <li
                  key={faq?.idx}
                  className="border-b border-border-1 pb-4 mb-4 last:border-none last:pb-0 last:mb-0"
                  onClick={() => handleAccordian(idx)}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <p
                      className={cn(
                        "font-medium text-base sm:text-500-24",
                        showAccordian === faq?.idx
                          ? "text-primary-orange"
                          : "text-background-black",
                      )}
                    >
                      {faq?.question}
                    </p>
                    <span className="size-4 shrink-0 cursor-pointer">
                      <img
                        src={
                          showAccordian === faq?.idx
                            ? "/minus-icon.svg"
                            : "/plus-icon.svg"
                        }
                        alt={
                          showAccordian === faq?.idx
                            ? "Minus icon"
                            : "Plus icon"
                        }
                      />
                    </span>
                  </div>
                  <span
                    className={cn(
                      "text-sm block overflow-hidden transition-all duration-200 ease-in sm:text-400-20",
                      showAccordian === faq?.idx ? "max-h-48" : "max-h-0",
                    )}
                  >
                    {faq?.answer}
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
