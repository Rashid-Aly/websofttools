import React, { useState } from "react";
// import { toast } from "sonner";
import { Toaster } from "sonner";
import { BsYoutube } from "react-icons/bs";
import {
  Input,
  PageHeading,
  Breadcrumb,
  YoutubeComponent,
  Loader,
  SectionHeading,
  DownloadGuide,
  Faq,
  Button,
} from "../../../components";
import YoutubeData from "../../../../data/Video/youtube.json";
import { NextSeo } from "next-seo";

export default function YoutubeDownloader() {
  const [yt_url, setUrl] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { title, description, YoutubeGuides, faqs } = YoutubeData;

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = () => {
    if (inputValue) {
      // Check if inputValue is a valid YouTube URL
      if (
        /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/.test(inputValue)
      ) {
        setUrl(inputValue);
        setInputValue("");
      } else {
        console.log("Invalid YouTube URL");
        // You can show an error message here using toast or other methods.
      }
    }
  };

  return (
    <>
      <NextSeo
        title="Youtube Video Downloader | Web Soft Tools"
        description="With a single click, you can download videos from Youtube with different quality"
        canonical="https://www.websofttools.com/video/youtube-downloader"
      />
      <Toaster position="top-center" richColors />
      <div className="bg-Gradient p-6">
        <div className="px-3 sm:container">
          <div className="mt-20 py-8">
            <Breadcrumb
              pages={[
                { name: "Video", href: "/video", current: false },
                {
                  name: "Youtube video Downloader",
                  href: "#",
                  current: true,
                },
              ]}
            />
          </div>
          <div className="mx-auto my-10 md:w-1/2 ">
            <BsYoutube className="m-auto mb-3 h-16 w-16 text-red-600" />
            <div className="text-center">
              <PageHeading
                headings={[
                  {
                    name: (
                      <h2 className="text-h2 text-Primary">
                        Youtube video Downloader
                      </h2>
                    ),
                    description: (
                      <p className="font-roboto text-Body1 text-[#828181]">
                        Download and Save Youtube Videos
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
                placeholder="Drop Youtube video link here"
                value={inputValue}
                onChange={handleInputChange}
              />
              <Button
                rounded
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
      <div className="px-3 sm:container">
        {isLoading ? <Loader /> : ""}
        <YoutubeComponent yt_url={yt_url} setIsLoading={setIsLoading} />
      </div>
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <SectionHeading name={title} />
        <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
      </div>
      <div className="mx-auto max-w-7xl justify-center px-6 lg:px-8">
        <SectionHeading name={"The easiest youtube videos download"} />
        <DownloadGuide Guides={YoutubeGuides} />
      </div>
      <section className="mb-40 bg-[#EEFCFF] py-28 ">
        <div className="px-3 sm:container">
          <Faq faqs={faqs} />
        </div>
      </section>
    </>
  );
}
