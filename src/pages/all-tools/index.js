import React from "react";
import { Card } from "../../components";
import {
  BsFiletypeJson,
  BsFiletypeXml,
  BsFillImageFill,
  BsImages,
  BsYoutube,
  BsTiktok,
  BsCalculator,
} from "react-icons/bs";
import { HiArrowSmRight } from "react-icons/hi";
import { NextSeo } from "next-seo";

const AllTools = [
  {
    name: "TikTok Video Downloader",
    description: "Use this extension to download videos from TIKTOK.",
    href: "/video/tiktok-downloader",
    icon: BsTiktok,
  },
  {
    name: "Youtube Video Downloader",
    description: "Use this extension to download videos from YOUTUBE.",
    href: "/video/youtube-downloader",
    icon: BsYoutube,
  },
  {
    name: "Age Calculator",
    description: "Use this Calculator to calculate your age.",
    href: "/calculators/age-calculator",
    icon: BsCalculator,
  },
  {
    name: "Image Converter",
    description: "Use this extension to convert your image from JPEG to JPG.",
    href: "/converters/jpeg-to-jpg",
    icon: BsFillImageFill,
    arrow: HiArrowSmRight,
    icon1: BsImages,
  },
  {
    name: "JSON to XML",
    description: "Use this extension to convert your File from JSON to XML.",
    href: "/converters/json-to-xml",
    icon: BsFiletypeJson,
    arrow: HiArrowSmRight,
    icon1: BsFiletypeXml,
  },
];

const AllToolsPage = () => {
  return (
    <>
      <NextSeo
        title="All tools | Web Soft Tools"
        description="web-based productivity tool designed to boost efficiency in the fast-paced modern world. We aim to offer a solution that is accessible and user-friendly Tools to enhance your efficiency."
        canonical="https://www.websofttools.com/all-tools"
      />
      <div className=" bg-indigo-100 px-6 py-20">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Tools that make your life easier
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Websofttools: All Tools
            </p>
            <p className="mt-6 pb-16 text-lg leading-8 text-gray-600">
              Discover Websofttools: Your All-in-One Toolkit. Simplify media
              downloads, file conversion, and micro tool usage for effortless
              online tasks.
            </p>
          </div>

          <div className="m-auto ">
            <Card data={AllTools} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllToolsPage;
