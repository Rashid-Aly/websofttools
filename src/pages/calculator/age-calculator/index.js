/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-const-assign */
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Breadcrumb,
  Button,
  CalculatedAge,
  CustomDatePicker,
  DownloadGuide,
  Faq,
  PageHeading,
  SectionHeading,
} from "../../../components";

import { NextSeo } from "next-seo";

const AgeCalculatorGuides = [
  {
    name: "Enter Your Data",
    description:
      "Enter your date of birth and the date for which you want to calculate your age, then click the 'Calculate' button, and you're all set!",
    imageUrl: "/images/imageicons/Enter.png",
  },
  {
    name: "Understanding the Results",
    description:
      "The Age Calculator computes your age in five different units: years, days, minutes, and seconds.",
    imageUrl: "/images/imageicons/Thinking.png",
  },
  {
    name: "Viewing Age Breakdown",
    description:
      "Learn how to view your age breakdown in a clear and concise format, allowing you to understand your age in various time units effortlessly.",
    imageUrl: "/images/imageicons/Diagram.png",
  },
];

const CalculatorFaqs = [
  {
    question: "How does the Age Calculator work?",
    answer:
      "The Age Calculator calculates your age in five different units: years, months, days, minutes, and seconds. You simply provide your birthdate, and the calculator does the rest.",
  },
  {
    question: "Is the Age Calculator accurate?",
    answer:
      "Yes, our Age Calculator provides accurate results based on the information you input. It takes into account leap years and varying month lengths to ensure precision.",
  },
  {
    question: "Is the Age Calculator free to use?",
    answer:
      "Yes, our Age Calculator is completely free to use. You can calculate your age as many times as you like, without any limitations.",
  },
  {
    question: "Can I use the Age Calculator on my mobile device?",
    answer:
      "Yes, our Age Calculator is fully compatible with all devices, including smartphones and tablets. You can use it on the go, wherever you are.",
  },
  {
    question:
      "What are the different units for age calculation available in the calculator?",
    answer:
      "The Age Calculator provides your age in five different units: years, months, days, hours, minutes, and seconds.",
  },
  {
    question: "Is my personal information safe when using the Age Calculator?",
    answer:
      "Yes, we do not store any of the information you provide when using the Age Calculator. Your privacy is our top priority.",
  },
];

const AgeCalculator = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (startDate && endDate) {
      const birthDate = new Date(startDate);
      const endDateValue = new Date(endDate);

      if (birthDate > endDateValue) {
        // Show an error toast message
        toast.error("Date of birth needs to be earlier than the end date.");
      } else {
        const ageInSeconds = (endDateValue - birthDate) / 1000; // Calculate age in seconds

        const years = Math.floor(ageInSeconds / (60 * 60 * 24 * 365.25)); // Calculate years

        // Calculate total days without considering leap years
        const totalDays = Math.floor(ageInSeconds / (60 * 60 * 24));

        // Calculate remaining days after subtracting years
        const daysWithoutYears = totalDays - years * 365;

        // Calculate total months (approximately 30.44 days per month)
        const totalMonths = Math.floor(daysWithoutYears / 30.44);

        // Calculate remaining days after subtracting months
        const daysWithoutMonths = daysWithoutYears - totalMonths * 30.44;

        // Calculate total weeks (approximately 7 days per week)
        const totalWeeks = Math.floor(daysWithoutMonths / 7);

        // Calculate remaining days after subtracting weeks
        const daysWithoutWeeks = daysWithoutMonths - totalWeeks * 7;

        // Round down daysWithoutWeeks to ignore decimal part
        const days = Math.floor(daysWithoutWeeks);

        const totalHours = Math.floor(ageInSeconds / (60 * 60)); // Calculate total hours
        const totalMinutes = Math.floor(ageInSeconds / 60); // Calculate total minutes
        const totalSeconds = Math.floor(ageInSeconds); // Calculate total seconds

        setAge({
          years,
          months: totalMonths,
          weeks: totalWeeks,
          days, // Use the rounded down value of days
          totalDays,
          totalHours,
          totalMinutes,
          totalSeconds,
        });
        toast.success("Age calculated successfully.");
      }
    }
  };

  return (
    <>
      <NextSeo
        title="Age Calculator | Web Soft Tools"
        description="With a single click, you can calculate your age in Days, Hours, minutes and many other formats."
        canonical="https://www.websofttools.com/calculator/age-calculator"
      />
      <div className="bg-Gradient p-6">
        <div className="px:3 sm:container">
          <div className="mt-20 py-8">
            <Breadcrumb
              pages={[
                { name: "Calculator", href: "/calculator", current: false },
                {
                  name: "Age Calculator",
                  href: "#",
                  current: true,
                },
              ]}
            />
          </div>
          <div className="md:1/2 mx-auto my-16 p-6 sm:w-[60%]">
            <div className="text-center">
              <PageHeading
                headings={[
                  {
                    name: (
                      <h2 className="text-h2 text-Primary">Age Calculator</h2>
                    ),
                    description: (
                      <p className="font-roboto text-Body1 text-[#828181]">
                        Calculate your age in years, months, days, hours,
                        minutes and seconds.
                      </p>
                    ),
                  },
                ]}
              />
            </div>
            <div className="flex flex-col justify-between gap-2 md:flex-row ">
              <div className="w-full text-center md:w-1/2 ">
                <CustomDatePicker
                  selectedDate={startDate}
                  handleDateChange={(date) => setStartDate(date)}
                  placeholderText="Select Date of Birth"
                />
              </div>
              <div className="w-full text-center md:w-1/2">
                <CustomDatePicker
                  selectedDate={endDate}
                  handleDateChange={(date) => setEndDate(date)}
                  placeholderText="Select End Date"
                />
              </div>
            </div>
            <div className="my-5 rounded">
              <Button full roundedmd lg onClick={calculateAge}>
                Calculate
              </Button>
            </div>
            {/* Initialize the toast container */}
            <ToastContainer position="top-center" />{" "}
          </div>
        </div>
        {age !== null && <CalculatedAge age={age} />}
      </div>

      <div className="mt-20 px-3 sm:container">
        <SectionHeading name={"Age Calculator"} />
        <p className="mt-6 text-center font-roboto text-Body1 text-[#828181] lg:px-40">
          Experience the Age Calculator, a free online tool designed to
          calculate your age with precision. Whether you're on a desktop,
          smartphone (Android or iPhone), tablet, or iPad, our service caters to
          your needs, providing your age in years, months, days, minutes, and
          seconds. Your privacy is paramount—rest assured, we don't store any
          data. Try it today for accurate and secure age calculations.
        </p>
      </div>
      <div className="sm:containe mt-16 px-3 ">
        <SectionHeading
          name={"How to Use Age Calculator"}
          desc={
            "Master the Age Calculator with this step-by-step guide. Learn how to input your birthdate, perform calculations, and interpret the results effortlessly"
          }
        />
        <DownloadGuide Guides={AgeCalculatorGuides} />
      </div>
      <section className="mb-16 bg-[#EEFCFF] py-32 ">
        <div className="px-3 sm:container">
          <Faq faqs={CalculatorFaqs} />
        </div>
      </section>
    </>
  );
};

export default AgeCalculator;
