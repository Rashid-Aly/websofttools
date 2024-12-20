import React from "react";
import { Breadcrumb, Card } from "../../components";
import {
  BsFiletypeJson,
  BsFiletypeXml,
  BsFillImageFill,
  BsImages,
} from "react-icons/bs";
import { HiArrowSmRight } from "react-icons/hi";
import { NextSeo } from "next-seo";

const ConvertersData = [
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

const Index = () => {
  return (
    <>
      <NextSeo
        title="Converters | Web Soft Tools"
        description="Convert files hassle-free between various formats, including JPEG to JPG, Json to XML and much more. Websofttools supports a wide range of file types."
        canonical="https://www.websofttools.com/converters"
      />
      <div className="bg-Gradient p-6">
        <div className="px-3 sm:container">
          <div className="mt-20 py-8">
            <Breadcrumb
              pages={[
                { name: "Converters", href: "/converters", current: false },
              ]}
            />
          </div>

          <div className="mx-auto mt-4 max-w-7xl lg:px-8 ">
            <Card data={ConvertersData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
