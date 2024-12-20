import React from "react";
import { NextSeo } from "next-seo";
import Sidebar from "../../blog/Slider/Sidebar";

const BlogPosts = [
  {
    id: 2,
    title: "Web Apps vs. Desktop Apps: Making the Right Choice",
    href: "/blogpostDetail/blogpostdetail2",
    description:
      "Explore the pros and cons of web apps and desktop software. Find out how to make the right choice for your specific needs and workflow.",
    content: `
      When it comes to choosing between web apps and desktop software, it's essential to weigh the pros and cons to make an informed decision. In this blog post, we'll guide you through the considerations that will help you determine the right choice for your specific needs and workflow.

      <h2>Pros and Cons of Web Apps</h2>
      <p>Web apps offer accessibility from any device with an internet connection. They often come with automatic updates and require no installation. However, they may have limitations in terms of offline functionality and performance.</p>

      <h2>Pros and Cons of Desktop Apps</h2>
      <p>Desktop apps provide robust performance and can often work offline. They may offer more advanced features compared to web apps. However, they require installation, and updates may need manual intervention.</p>

      <h2>Making the Right Choice</h2>
      <p>Consider factors such as your specific use case, the need for offline access, performance requirements, and the features offered by each option. We'll provide insights and guidance to help you make an informed decision.</p>

      <p>Join us as we explore the world of web apps and desktop software, helping you make the right choice for a seamless and efficient workflow!</p>
    `,
    imageUrl: "/images/blogs/webapp.jpg",
    date: "Oct 9, 2023",
    datetime: "2023-10-09",
    category: { title: "Software", href: "#" },
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
