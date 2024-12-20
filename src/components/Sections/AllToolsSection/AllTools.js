import React from "react";
import Card from "../../Card/Card";

const ConvertersData = [
  {
    name: "TikTok Video Downloader",
    description:
      "Download your favorite videos and audio from TikTok Use this extension to download videos from TIKTOK.",
    href: "/video/tiktok-downloader",
    imageUrl: "/images/toolsimgs/tiktok.png",
  },
  {
    name: "Youtube Video Downloader",
    description:
      "Download your favorite videos and audio from Youtube Use this extension to download videos from Youtube.",
    href: "/video/youtube-downloader",
    imageUrl: "/images/toolsimgs/youtube.png",
  },
  {
    name: "Age Calculator",
    description:
      "Simply want to check someone's age quickly, this user-friendly calculator provides a hassle-free solution.",
    href: "/calculators/age-calculator",
    imageUrl: "/images/toolsimgs/calculator.png",
  },
  {
    name: "Instagram video downloader",
    description:
      "Download your favorite videos and audio from Instagram Use this extension to download videos from Instagram.",
    href: "/video/Instagram-downloader",
    imageUrl: "/images/toolsimgs/Instagram.png",
  },
  {
    name: "JSON to XML",
    description:
      "Our JSON to XML Converter, a powerful and versatile tool designed to facilitate seamless data transformation...",
    href: "/converters/json-to-xml",
    imageUrl: "/images/toolsimgs/json to xml.png",
  },
  {
    name: "JPEG to JPG",
    description:
      "JPEG to JPG converts your image files online. Amongst many others, we support PNG, JPG, GIF, WEBP, and HEIC.",
    href: "/converters/json-to-xml",
    imageUrl: "/images/toolsimgs/imgconverter.png",
  },
];

const Index = () => {
  return (
    <>
      <div className=" bg-white">
        <div className=" px-3 sm:container">
          <div className="px-8 py-10 text-center">
            <h2 className="text-Subtile2 text-Secondary">
              Tools that make your life easier
            </h2>
            <p className="mt-2 text-h2 text-Primary">Websofttools: All Tools</p>
            <p className="px:[40%] mt-6 pb-12 text-Body1  text-[#828181] lg:px-[30%] ">
              Discover Websofttools: Your All-in-One Toolkit. Simplify media
              downloads, file conversion, and micro tool usage for effortless
              online tasks.
            </p>
          </div>

          <div className="m-auto ">
            <Card data={ConvertersData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
