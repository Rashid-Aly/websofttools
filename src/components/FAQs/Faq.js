import PropTypes from "prop-types";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Faq({ faqs }) {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (itemKey) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [itemKey]: !prevState[itemKey],
    }));
  };

  // Split the faqs array into left and right columns
  const splitIndex = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, splitIndex);
  const rightFaqs = faqs.slice(splitIndex);

  return (
    <div className="px-3 sm:container">
      <h2 className="text-center text-h2 text-Primary">
        Frequently asked questions
      </h2>
      <div className="mt-12 grid grid-cols-1 gap-x-3.5 lg:grid-cols-2">
        <div className="space-y-4 md:col-span-1">
          {leftFaqs.map((faq) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              toggleItem={toggleItem}
              openItems={openItems}
            />
          ))}
        </div>
        <div className="mt-4 space-y-4 md:col-span-1 lg:mt-0">
          {rightFaqs.map((faq) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              toggleItem={toggleItem}
              openItems={openItems}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FaqItem({ faq, toggleItem, openItems }) {
  return (
    <div className="rounded-md border bg-white p-[20px] shadow-sm">
      <Disclosure>
        {() => (
          <>
            <Disclosure.Button
              className="w-full text-Primary"
              onClick={() => toggleItem(faq.question)}
            >
              <div className="flex items-center justify-between">
                <span className="text-Subtile1">{faq.question}</span>
                <span className="ml-auto">
                  {openItems[faq.question] ? (
                    <MinusSmallIcon
                      className="h-6 w-6 text-Primary"
                      aria-hidden="true"
                    />
                  ) : (
                    <PlusSmallIcon
                      className="h-6 w-6 text-Primary"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel>
              <p className="mt-3 text-Body1 text-lightBlack">{faq.answer}</p>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

Faq.propTypes = {
  faqs: PropTypes.array,
};

FaqItem.propTypes = {
  faq: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }),
  toggleItem: PropTypes.func.isRequired,
  openItems: PropTypes.object.isRequired,
};
