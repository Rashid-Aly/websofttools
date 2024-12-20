import React from "react";
import { NextSeo } from "next-seo";
import Sidebar from "../../blog/Slider/Sidebar";

const BlogPosts = [
  {
    id: 3,
    title: "SaaS 101: Understanding the Benefits of Software as a Service",
    href: "/blogpostDetail/blogpostdetail3",
    description:
      "Learn the fundamentals of Software as a Service (SaaS) and discover its numerous benefits for businesses and individuals. Dive into the world of SaaS solutions.",
    content: `
      Software as a Service (SaaS) has become a fundamental aspect of modern technology, providing businesses and individuals with innovative solutions and numerous benefits. In this blog post, we'll delve into the essentials of SaaS and explore the advantages it offers.

      <h2>The Fundamentals of SaaS</h2>
      Understand the core concepts of SaaS, including its subscription-based model, cloud-hosted delivery, and the accessibility it provides from any device with an internet connection.

      <h2>Benefits for Businesses</h2>
      Discover how SaaS can positively impact businesses by reducing costs, improving scalability, and streamlining software maintenance. We'll explore real-world examples of organizations that have embraced SaaS solutions to enhance their operations.

      <h2>Benefits for Individuals</h2>
      Learn how individuals can benefit from SaaS in terms of flexibility, collaboration, and access to cutting-edge software without the need for complex installations.

      <p>Join us on a journey into the world of SaaS, where we'll demystify its concepts and showcase how it can revolutionize the way businesses and individuals approach software solutions!</p>
    `,
    imageUrl: "/images/blogs/saas.jpg",
    date: "Oct 10, 2023",
    datetime: "2023-10-10",
    category: { title: "SaaS", href: "#" },
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
