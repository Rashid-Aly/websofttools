import React from "react";
import { OurTools } from "../../../components";

const BlogPosts = [
  {
    id: 1,
    title: "SaaS 101: Understanding the Benefits of Software as a Service",
    href: "/blogpostDetail/blogpostdetail3",
    description:
      "Learn the fundamentals of Software as a Service (SaaS) and discover its numerous benefits for businesses and individuals. Dive into the world of SaaS solutions.",
    imageUrl: "/images/blogs/saas.jpg",
    date: "Oct 10, 2023",
    datetime: "2023-10-10",
  },
  {
    id: 2,
    title: "Efficiency Boost: Top Download Managers for Faster Downloads",
    href: "/blogpostDetail/blogpostdetail4",
    description:
      "Maximize your download speed and efficiency with the top download managers available. Find out which tools can help you get your files faster.",
    imageUrl: "/images/blogs/efficiency.jpg",
    date: "Oct 11, 2023",
    datetime: "2023-10-11",
  },
  {
    id: 3,
    title: "Web Apps vs. Desktop Apps: Making the Right Choice",
    href: "/blogpostDetail/blogpostdetail2",
    description:
      "Explore the pros and cons of web apps and desktop software. Find out how to make the right choice for your specific needs and workflow.",
    imageUrl: "/images/blogs/webapp.jpg",
    date: "Oct 9, 2023",
    datetime: "2023-10-09",
  },
  {
    id: 4,
    title: "The Power of Downloaders: Simplifying Your Media Collection",
    href: "/blogpostDetail/blogpostdetail1",
    description:
      "Discover how downloaders can simplify your media collection management. Learn about the latest downloader tools and how they can enhance your digital library.",
    imageUrl: "/images/blogs/blog1.jpg",
    date: "Oct 8, 2023",
    datetime: "2023-10-08",
  },
];
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
    name: "Image Converter",
    description:
      "Download your favorite videos and audio from Facebook Use this extension to download videos from Facebook.",
    href: "/converters/jpeg-to-jpg",
    imageUrl: "/images/toolsimgs/imgconverter.png",
  },
  {
    name: "JSON to XML",
    description:
      "Our JSON to XML Converter, a powerful and versatile tool designed to facilitate seamless data transformation...",
    href: "/converters/json-to-xml",
    imageUrl: "/images/toolsimgs/json to xml.png",
  },
];

export default function Sidebar() {
  return (
    <div className="mx-auto bg-white px-6 lg:px-8">
      <div className="sticky bottom-0">
        <hr className="mt-4 h-1 bg-gray-900" />
        <h2 className="w-fit bg-gray-900 p-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          MOST VIEWED
        </h2>
        <div className="mt-8">
          {BlogPosts.map((post) => (
            // eslint-disable-next-line react/jsx-key
            <a href={post.href}>
              <article
                key={post.id}
                className="relative isolate  flex flex-col gap-4 lg:flex-row"
              >
                <div className="relative aspect-[8/3] sm:aspect-[2/1] lg:aspect-square lg:w-28 lg:shrink-0">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="absolute inset-0 h-20 w-28 border-white bg-gray-50 object-cover hover:border-4 hover:opacity-70"
                  />
                </div>
                <div>
                  <div className="group relative max-w-xl">
                    <h3 className="text-sm font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                  </div>
                  <div className="mt-3 flex items-center gap-x-4 text-sm font-semibold">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
      <div className="sticky top-[-400px] mt-16">
        <hr className="mt-6 h-1 bg-gray-900" />
        <h2 className="w-fit bg-gray-900 p-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          OUR TOOLS
        </h2>
        <div className="mx-auto">
          <OurTools data={ConvertersData} />
        </div>
      </div>
    </div>
  );
}
