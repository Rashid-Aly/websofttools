import React from "react";
import { NextSeo } from "next-seo";
import Sidebar from "../../blog/Slider/Sidebar";

const BlogPosts = [
  {
    id: 4,
    title: "Efficiency Boost: Top Download Managers for Faster Downloads",
    href: "/blogpostDetail/blogpostdetail4",
    description:
      "Maximize your download speed and efficiency with the top download managers available. Find out which tools can help you get your files faster.",
    content: `
      In a world where time is of the essence, having efficient download managers can make a significant difference. In this blog post, we'll introduce you to the top download managers that can boost your download speed and efficiency.

      <h2>Why Download Managers Matter</h2>
      Explore the importance of download managers in optimizing your download experience. From faster download speeds to the ability to pause and resume downloads, these tools offer essential features for a seamless downloading process.

      <h2>Top Download Managers</h2>
      We'll showcase the leading download managers in the market, providing insights into their features, user interface, and how they can enhance your overall download workflow.

      <h2>Maximizing Download Efficiency</h2>
      Learn tips and tricks for maximizing your download efficiency, whether you're downloading large files, managing multiple downloads simultaneously, or ensuring a stable and uninterrupted connection.

      <p>Join us as we dive into the world of download managers, helping you discover the tools that can make your downloading experience faster and more efficient!</p>
    `,
    imageUrl: "/images/blogs/efficiency.jpg",
    date: "Oct 11, 2023",
    datetime: "2023-10-11",
    category: { title: "Download Managers", href: "#" },
    author: {
      name: "Web Soft Tools Team",
      role: "Technology Writer",
      href: "#",
      imageUrl: "/images/ICON.png",
    },
  },
];

export default function BlogPostsDetail() {
  const post = BlogPosts[0];

  return (
    <>
      <NextSeo
        title={`Blog | ${post.title}`}
        description={post.description}
        canonical={`https://www.websofttools.com/blogs/${post.id}`}
      />
      <div className="flex h-[50vh] items-center justify-center  bg-Gradient">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">{post.title}</h2>
          <p className="mt-4 text-lg leading-8">{post.description}</p>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl gap-4 bg-white px-6 lg:px-8">
        <div className="flex gap-3">
          <div className="max-w-2xl lg:max-w-4xl">
            <article className="relative my-8 ">
              <img
                src={post.imageUrl}
                alt=""
                className="h-96 w-full rounded-2xl object-cover"
              />
              <div className="mt-6 flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-semibold leading-6 text-gray-900">
                  {post.title}
                </h3>
                <div
                  className="prose mt-4 max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
              <div className="mt-6 flex items-center border-t border-gray-900/5 pt-6">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="ml-4 text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>{post.author.name}</a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="mb-4 mt-4">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
