/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "sonner";
import { Toaster } from "sonner";
import { BsTiktok } from "react-icons/bs";
import {
  Input,
  PageHeading,
  Breadcrumb,
  TiktokComponent,
  Faq,
  DownloadGuide,
  SectionHeading,
  Loader,
  Button,
} from "../../../components";
import TikTokData from "../../../../data/Video/Tiktok.json";
import { NextSeo } from "next-seo";

export default function TikTokDownloader() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { title, description, TiktokGuides, faqs } = TikTokData;

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = () => {
    if (!inputValue) {
      toast.error("Please Input a TikTok URL...");
    } else if (!/https?:\/\/(.+)?tiktok\.com\/(@.+|.+)/i.test(inputValue)) {
      toast.error("Invalid URL. Please input a valid TikTok URL...");
      setInputValue("");
    } else {
      setUrl(inputValue);
      setInputValue("");
    }
  };

  return (
    <>
      <NextSeo
        title="TikTok Video Downloader | Web Soft Tools"
        description="With a single click, you can download videos and audio from TikTok with or without watermark."
        canonical="https://www.websofttools.com/video/tiktok-downloader"
      />
      <Toaster position="top-center" richColors />
      <div className="bg-Gradient p-6">
        <div className=" px:3 sm:container">
          <div className="mt-20 py-8 ">
            <Breadcrumb
              pages={[
                { name: "Video", href: "/video", current: false },
                {
                  name: "Tiktok video Downloader",
                  href: "#",
                  current: true,
                },
              ]}
            />
          </div>
          <div className="mx-auto my-10 md:w-1/2 ">
            <BsTiktok className="m-auto mb-3 h-16 w-16 " />
            <div className="text-center">
              <PageHeading
                headings={[
                  {
                    name: (
                      <h2 className="text-h2 text-Primary">
                        Tiktok video Downloader
                      </h2>
                    ),
                    description: (
                      <p className="font-roboto text-Body1 text-[#828181]">
                        Download and Save TikTok Videos Without Watermark.
                      </p>
                    ),
                  },
                ]}
              />
            </div>
            <div className="my-5 flex items-center gap-5">
              <Input
                full
                roundedmd
                type="text"
                placeholder="Drop Tiktok video link here"
                value={inputValue}
                onChange={handleInputChange}
              />
              <Button
                roundedmd
                lg
                onClick={() => {
                  onSubmit();
                }}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl lg:px-8">
        {isLoading ? <Loader /> : ""}
        <TiktokComponent url={url} setIsLoading={setIsLoading} />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading name={title} />
        <p className="mt-6 text-center text-lg leading-8 text-gray-600">
          {description}
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <SectionHeading name={"How to Use TikTok Video Downloader"} />
        <DownloadGuide Guides={TiktokGuides} />
      </div>
      <section className="bg-[#EEFCFF] py-32 ">
        <div className="px-3 sm:container">
          <Faq faqs={faqs} />
        </div>
      </section>
    </>
  );
}

TikTokDownloader.propTypes = {
  setUrl: PropTypes.any,
};
