import React from "react";
import { Breadcrumb, Card } from "../../components";
import { BsCalculator } from "react-icons/bs";
import { NextSeo } from "next-seo";

const ConvertersData = [
  {
    name: "Age Calculator",
    description: "Use this Calculator to calculate your age.",
    href: "/calculators/age-calculator",
    icon: BsCalculator,
  },
  {
    name: "Loan Calculator",
    description: "Use this calculator to calculate your loan profit.",
    href: "/calculator/loan-calculator",
    icon: BsCalculator,
  },
];

const Index = () => {
  return (
    <>
      <NextSeo
        title="Calculators | Web Soft Tools"
        description="With a single click, you can calculate your financial cost and faimily ages."
        canonical="https://www.websofttools.com/calculator"
      />
      <div className=" bg-Gradient p-6">
        <div className="px-3 sm:container">
          <div className="mt-20 py-8">
            <Breadcrumb
              pages={[
                { name: "Calculators", href: "/calculator", current: false },
              ]}
            />
          </div>

          <div className="mx-auto  mt-4 max-w-7xl lg:px-8">
            <Card data={ConvertersData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
