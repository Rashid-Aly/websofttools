import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineCheckBox } from "react-icons/md";
import NextLink from "../../reusable/Link/NextLink";
import Button from "../../reusable/Button/Button";

const data = [
  {
    name: "Founded company",
    description: "Websofttools was founded in September 2023, marking the",
    icon: <MdOutlineCheckBox />,
  },
  {
    name: "Multi-Language Support",
    description:
      "We continued to expand our offerings in November 2023 by introducing multi...",
    icon: <MdOutlineCheckBox />,
  },
  {
    name: "Released Beta",
    description: "Websofttools reached a significant milestone in...",
    icon: <MdOutlineCheckBox />,
  },
  {
    name: "YouTube and TikTok Downloader",
    description: "In September 2023, we introduced our YouTube ...",
    icon: <MdOutlineCheckBox />,
  },
];

const AboutSection = () => {
  // Split the faqs array into left and right columns
  const splitIndex = Math.ceil(data.length / 2);
  const leftData = data.slice(0, splitIndex);
  const righData = data.slice(splitIndex);
  return (
    <>
      <div className="px-3 sm:container">
        <div className="flex items-center justify-between gap-14 lg:gap-14 ">
          <div className="hidden w-1/2 lg:flex xl:pt-10">
            <Image
              src="/images/Aboutus.png"
              width={500}
              height={500}
              layout="responsive"
              alt="Picture of the author"
            />
          </div>
          <div className="p-8 text-left lg:w-1/2">
            <h4 className="font-roboto text-h4 text-Primary">About us</h4>
            <h2 className="mt-2 pt-2 font-roboto text-h2 text-Primary">
              Discover Our Journey of Innovation and Efficiency
            </h2>
            <p className="mt-4 pr-4 font-roboto text-[18px] leading-9 text-[#828181]">
              At Websoftskills, we&apos;re more than just a software provider;
              we&apos;re a team of passionate innovators dedicated to
              revolutionizing the way you work.Our journey began with...
            </p>
            <div className="mt-5 gap-6 p-2 sm:flex sm:justify-between">
              <div className="-ml-2 w-full sm:w-1/2">
                {leftData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex w-full gap-2 py-4 xs:w-[98%]"
                    >
                      <div className="mt-[3px] text-[24px]">{item.icon}</div>
                      <div>
                        <h2 className="font-roboto text-h5 text-Primary">
                          {item.name}
                        </h2>
                        <p className="mt-2 font-roboto text-Body1 text-[#828181]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-full sm:w-1/2">
                {righData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex w-full gap-2 py-4 xs:w-[98%]"
                    >
                      <div className="mt-[4.5px] text-[24px]">{item.icon}</div>
                      <div>
                        <h2 className="font-roboto text-h5 text-Primary">
                          {item.name}
                        </h2>
                        <p className="mt-2 font-roboto text-Body1 text-[#828181]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <Button roundedfull icon={<BsArrowRight />} lg>
              <NextLink href="/about" title={"Learn more"} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
