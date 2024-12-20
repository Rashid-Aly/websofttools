import React from "react";
import { Breadcrumb, Card } from "../../components";
import videoData from "../../../data/Video/video.json";
import { NextSeo } from "next-seo";

const index = () => {
  const { videoPage } = videoData;
  return (
    <>
      <NextSeo
        title="Video Downloader | Web Soft Tools"
        description="Download your favorite videos and audio from TikTok and YouTube. Websofttools makes it simple to enjoy your media anytime, anywhere."
        canonical="https://www.websofttools.com/video"
      />
      <div className="bg-Gradient p-6">
        <div className="px-3 sm:container">
          <div className="mt-20 py-8">
            <Breadcrumb
              pages={[{ name: "video", href: "/video", current: false }]}
            />
          </div>
          <div className="mx-auto mt-4 max-w-7xl lg:px-8">
            <Card data={videoPage} />
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default index;
