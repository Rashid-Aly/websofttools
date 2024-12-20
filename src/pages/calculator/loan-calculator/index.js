import React, { useState } from "react";
import {
  Breadcrumb,
  Button,
  CalculatedLoan,
  Dropdown,
  PageHeading,
} from "../../../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NextSeo } from "next-seo";

const item = [
  { name: "$" },
  { name: "₨" },
  { name: "₹" },
  { name: "؋" },
  { name: "﷼" },
  { name: "฿" },
];

const index = () => {
  const [amount, setAmount] = useState(null);
  const [rate, setRate] = useState(null);
  const [year, setYear] = useState(null);
  const [data, setData] = useState(null);
  const [selectedOption, setSelectedOption] = useState({
    name: "$",
  });

  const handleCalculate = () => {
    if (amount <= 0 || rate <= 0 || year <= 0 || !amount || !rate || !year) {
      toast.error(
        "Please enter a valid number for Amount, Rate, and Years, and ensure that each value is greater than zero.",
      );
      return;
    } else {
      const principal = amount;

      const interest = rate / 100 / 12;
      const payments = year * 12;

      var x = Math.pow(1 + interest, payments);
      var monthly = (principal * x * interest) / (x - 1);
      if (isFinite(monthly)) {
        const totalPayment = (monthly * payments).toFixed(2);
        const totalInterest = (monthly * payments - principal).toFixed(2);
        const monthPayment = monthly.toFixed(2);
        setData({
          totalPayment,
          totalInterest,
          monthPayment,
        });
        toast.success("Loan calculated successfully.");
      }
    }
  };
  const handleOptionChange = (item) => {
    setSelectedOption({ name: item.name });
  };
  return (
    <>
      <NextSeo
        title="Loan Calculator | Web Soft Tools"
        description="With a single click, you can manage your financial cost ."
        canonical="https://www.websofttools.com/calculator/loan-calculator"
      />
      <div className="bg-Gradient p-6">
        <div className="px:3 sm:container">
          <div className="mt-20 py-8">
            <Breadcrumb
              pages={[
                { name: "Calculator", href: "/calculator", current: false },
                {
                  name: "Loan Calculator",
                  href: "#",
                  current: true,
                },
              ]}
            />
          </div>
        </div>
        <div className="md:1/2 mx-auto my-16 p-6 sm:w-[60%]">
          <div className="text-center">
            <PageHeading
              headings={[
                {
                  name: (
                    <h2 className="text-h2 text-Primary">Loan Calculator</h2>
                  ),
                  description: (
                    <p className="font-roboto text-Body1 text-[#828181]">
                      Calculate your loan interest , total payment , monthly
                      payment
                    </p>
                  ),
                },
              ]}
            />
            <div className="md:w-50% w-full rounded-md border border-gray-300 bg-white px-5 shadow-sm">
              <div className="mt-5 flex w-full items-center rounded border border-gray-300 shadow-sm">
                <div className="w-[30%] text-center text-lg md:w-[20%]">
                  <Dropdown
                    bgColor={true}
                    items={item}
                    selected={selectedOption}
                    onChange={handleOptionChange}
                  />
                </div>
                <input
                  className="w-[70%] p-[9px] md:w-[85%]"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Loan amount "
                />
              </div>
              <div className="my-5 flex w-full items-center rounded border border-gray-300 shadow-sm">
                <span className="w-[30%] bg-gray-300 p-2 pl-3 text-left text-lg md:w-[20%]">
                  %
                </span>
                <input
                  className="w-[70%] p-[9px] md:w-[85%]"
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  placeholder="Interest rate (%)"
                />
              </div>
              <div className="flex w-full items-center rounded border border-gray-300 shadow-sm">
                <span className="w-[30%] bg-gray-300 p-2 pl-3 text-left text-lg md:w-[20%]">
                  Years
                </span>
                <input
                  className="w-[70%] p-[9px] md:w-[85%]"
                  type="number"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="Loan duration"
                />
              </div>
              <div className="my-5">
                <Button lg full roundedmd onClick={handleCalculate}>
                  Calculate
                </Button>
                <ToastContainer position="top-center" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {data !== null && (
        <CalculatedLoan data={data} currency={selectedOption} />
      )}
    </>
  );
};

export default index;
