import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useState } from "react";

const FaqPage = () => {
  const [showAccordian, setShowAccordian] = useState(0);

  const faqs = [
    {
      id: 0,
      question: "What are the common features in the Coca POS system?",
      answer:
        "Common features in a POS system include order management, payment integration, stock management, sales reporting, data analysis, table management (in restaurants), and customer support.",
    },
    {
      id: 1,
      question: "How does Coca POS help in managing stock?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, nobis nemo molestiae mollitia corporis doloremque possimus ipsum, magnam totam tenetur debitis excepturi odit aliquam enim modi quidem nisi commodi illum!",
    },
    {
      id: 2,
      question:
        "Can the Coca POS application be integrated with other systems?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, nobis nemo molestiae mollitia corporis doloremque possimus ipsum, magnam totam tenetur debitis excepturi odit aliquam enim modi quidem nisi commodi illum!",
    },
    {
      id: 3,
      question:
        "What is the average cost to purchase and implement a Coca POS?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, nobis nemo molestiae mollitia corporis doloremque possimus ipsum, magnam totam tenetur debitis excepturi odit aliquam enim modi quidem nisi commodi illum!",
    },
    {
      id: 4,
      question: "What about customer data security?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, nobis nemo molestiae mollitia corporis doloremque possimus ipsum, magnam totam tenetur debitis excepturi odit aliquam enim modi quidem nisi commodi illum!",
    },
  ];

  const handleAccordian = (index) => {
    if (showAccordian === index) {
      setShowAccordian(-1);
    } else {
      setShowAccordian(index);
    }
  };
  return (
    <section className="py-4">
      <div className="py-6 px-2 bg-background-blue rounded-[32px]">
        <div>
          <h4 className="text-3xl font-medium mb-10">
            Frequently Asked Questions
          </h4>
          <div className="inline-flex p-2 bg-white border border-border-1 rounded-full mb-2">
            <input
              type="text"
              placeholder="Type your question here"
              className="w-full text-sm p-1 outline-none bg-transparent"
            />
            <Button>Search</Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="inline-block bg-background-blue rounded-full p-1">
            <Button
              variant="outline"
              className="border-primary-orange text-primary-orange hover:text-primary-orange"
            >
              General
            </Button>
            <Button variant="ghost" className="text-grey-text">
              Transactions
            </Button>
            <Button variant="ghost" className="text-grey-text">
              Payment
            </Button>
            <Button variant="ghost" className="text-grey-text">
              Others
            </Button>
          </div>
          <ul className="flex flex-col">
            {faqs?.map((faq, idx) => (
              <li
                key={faq?.id}
                className="border-b border-border-1 pb-4 mb-4 last:border-none last:pb-0 last:mb-0"
                onClick={() => handleAccordian(idx)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <p
                    className={cn(
                      "font-medium text-base",
                      showAccordian === faq?.id
                        ? "text-primary-orange"
                        : "text-background-black",
                    )}
                  >
                    {faq?.question}
                  </p>
                  <span className="size-4 shrink-0">
                    <img
                      src={
                        showAccordian === faq?.id
                          ? "/minus-icon.svg"
                          : "/plus-icon.svg"
                      }
                      alt={
                        showAccordian === faq?.id ? "Minus icon" : "Plus icon"
                      }
                    />
                  </span>
                </div>
                <span
                  className={cn(
                    "text-sm block overflow-hidden transition-all duration-500 ease-in",
                    showAccordian === faq?.id ? "max-h-40" : "max-h-0",
                  )}
                >
                  {faq?.answer}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
