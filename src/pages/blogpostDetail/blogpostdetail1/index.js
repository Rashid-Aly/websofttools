import React from "react";
import { NextSeo } from "next-seo";
import Sidebar from "../../blog/Slider/Sidebar";

const BlogPosts = [
  {
    id: 1,
    title: "The Power of Downloaders: Simplifying Your Media Collection",
    description:
      "Discover how downloaders can simplify your media collection management. Learn about the latest downloader tools and how they can enhance your digital library.",
    content: `
      Downloaders have become an essential tool for managing and enhancing your media collection. In this blog post, we'll explore the various aspects of downloaders, including their features and benefits.

      <h2>The Latest Downloader Tools</h2>
      We'll delve into the cutting-edge downloader tools that have revolutionized the way we download and organize media. From high-speed downloaders to those with advanced file management capabilities, we'll cover it all.

      <h2>Enhancing Your Digital Library</h2>
      Learn how downloaders can significantly improve the organization of your digital library. Whether you're a movie enthusiast, music lover, or avid reader, these tools can streamline the process of acquiring and managing your favorite content.

      <h2>Case Studies and Success Stories</h2>
      Explore real-world case studies and success stories of individuals and organizations that have benefited from implementing downloaders. Discover how these tools have simplified their workflows and improved their overall media consumption experience.

      <p>Join us on this journey of exploring the power of downloaders and unlocking new possibilities for your media collection!</p>
    `,
    imageUrl: "/images/blogs/blog1.jpg",
    date: "Oct 8, 2023",
    datetime: "2023-10-08",
    category: { title: "Downloaders", href: "/video" },
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
        <div className="flex gap-8">
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
