/* eslint-disable react/jsx-key */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { FeaturedBlog, FeaturedPost } from "../../components";
import { NextSeo } from "next-seo";
import { useState } from "react";
import Sidebar from "./Slider/Sidebar";

const featuredPost = {
  id: 1,
  title: "Top 5 TikTok Video Downloader Apps for Web, Android, and iOS",
  href: "#",
  description:
    "Looking for the best TikTok video downloader apps? Discover the top 5 options for web, Android, and iOS platforms to download your favorite TikTok videos hassle-free.",
  date: "Oct 8, 2023",
  datetime: "2023-10-08",
  author: {
    name: "Web Soft Tools Team",
    href: "#",
    imageUrl: "/images/ICON.png",
  },
};

const posts = [
  {
    id: 1,
    title: "YouTube Video Downloaders: What You Need to Know About Quality",
    href: "#",
    description:
      "Discover the key factors that determine the quality of YouTube video downloaders. Learn how to choose the best tools for your video download needs.",
    date: "Oct 8, 2023",
    datetime: "2023-10-08",
    author: {
      name: "Web Soft Tools Team",
      href: "#",
      imageUrl: "/images/ICON.png",
    },
  },
  {
    id: 2,
    title: "How to Download YouTube Videos: A Step-by-Step Tutorial",
    href: "#",
    description:
      "Want to download YouTube videos? Follow our step-by-step tutorial to learn the easiest and safest ways to download your favorite videos from YouTube.",
    date: "Oct 8, 2023",
    datetime: "2023-10-08",
    author: {
      name: "Web Soft Tools Team",
      href: "#",
      imageUrl: "/images/ICON.png",
    },
  },
];

const BlogPosts = [
  {
    id: 1,
    title: "The Power of Downloaders: Simplifying Your Media Collection",
    href: "/blogpostDetail/blogpostdetail1",
    description:
      "Discover how downloaders can simplify your media collection management. Learn about the latest downloader tools and how they can enhance your digital library.",
    imageUrl: "/images/blogs/blog1.jpg",
    date: "Oct 8, 2023",
    datetime: "2023-10-08",
    category: { title: "Downloaders", href: "/video" },
    author: {
      name: "Web Soft Tools Team",
      role: "Technology Writer",
      href: "/blogpostDetail/blogpostdetail1",
      imageUrl: "/images/ICON.png",
    },
  },
  {
    id: 2,
    title: "Web Apps vs. Desktop Apps: Making the Right Choice",
    href: "/blogpostDetail/blogpostdetail2",
    description:
      "Explore the pros and cons of web apps and desktop software. Find out how to make the right choice for your specific needs and workflow.",
    imageUrl: "/images/blogs/webapp.jpg",
    date: "Oct 9, 2023",
    datetime: "2023-10-09",
    category: { title: "Software", href: "#" },
    author: {
      name: "Web Soft Tools Team",
      role: "Technology Writer",
      href: "/blogpostDetail/blogpostdetail2",
      imageUrl: "/images/ICON.png",
    },
  },
  {
    id: 3,
    title: "SaaS 101: Understanding the Benefits of Software as a Service",
    href: "/blogpostDetail/blogpostdetail3",
    description:
      "Learn the fundamentals of Software as a Service (SaaS) and discover its numerous benefits for businesses and individuals. Dive into the world of SaaS solutions.",
    imageUrl: "/images/blogs/saas.jpg",
    date: "Oct 10, 2023",
    datetime: "2023-10-10",
    category: { title: "SaaS", href: "#" },
    author: {
      name: "Web Soft Tools Team",
      role: "Technology Writer",
      href: "/blogpostDetail/blogpostdetail3",
      imageUrl: "/images/ICON.png",
    },
  },
  {
    id: 4,
    title: "Efficiency Boost: Top Download Managers for Faster Downloads",
    href: "/blogpostDetail/blogpostdetail4",
    description:
      "Maximize your download speed and efficiency with the top download managers available. Find out which tools can help you get your files faster.",
    imageUrl: "/images/blogs/efficiency.jpg",
    date: "Oct 11, 2023",
    datetime: "2023-10-11",
    category: { title: "Download Managers", href: "#" },
    author: {
      name: "Web Soft Tools Team",
      role: "Technology Writer",
      href: "/blogpostDetail/blogpostdetail4",
      imageUrl: "/images/ICON.png",
    },
  },
];

export default function Blog() {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visiblePosts = BlogPosts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(BlogPosts.length / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <NextSeo
        title="Blogs | Web Soft Tools"
        description="Learn how to grow your business with our expert advice"
        canonical="https://www.websofttools.com/blogs"
      />
      <div className="flex h-[50vh] items-center justify-center bg-Gradient">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Blogs
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
          <FeaturedBlog featuredPost={featuredPost} />
          <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
            <div className="-my-12 divide-y divide-gray-900/10">
              {posts.map((post) => (
                <FeaturedPost post={post} />
              ))}
            </div>
          </div>
        </div>
        <hr className="mt-4" />
        <div className="mx-auto mt-8 max-w-7xl bg-white px-6 lg:px-8">
          <div className="flex gap-3">
            <div className="max-w-2xl lg:max-w-4xl">
              <hr className="mt-4 h-1 bg-gray-900" />
              <h2 className="w-fit bg-gray-900 p-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                BLOG
              </h2>

              {visiblePosts.map((post) => (
                <a href={post.href}>
                  <article
                    key={post.id}
                    className="relative isolate mt-8 flex flex-col gap-8 lg:flex-row"
                  >
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                      <img
                        src={post.imageUrl}
                        alt=""
                        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover hover:border-4 hover:opacity-60"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-x-4 text-xs">
                        <time
                          dateTime={post.datetime}
                          className="text-gray-500"
                        >
                          {post.date}
                        </time>
                        <a
                          href={post.category.href}
                          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                          {post.category.title}
                        </a>
                      </div>
                      <div className="group relative max-w-xl">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <a href={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                          </a>
                        </h3>
                        <p className="mt-5 text-sm leading-6 text-gray-600">
                          {post.description}
                        </p>
                      </div>
                      <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                        <div className="relative flex items-center gap-x-4">
                          <img
                            src={post.author.imageUrl}
                            alt=""
                            className="h-10 w-10 rounded-full bg-gray-50"
                          />
                          <div className="text-sm leading-6">
                            <p className="font-semibold text-gray-900">
                              <a href={post.author.href}>
                                <span className="absolute inset-0" />
                                {post.author.name}
                              </a>
                            </p>
                            <p className="text-gray-600">{post.author.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>

            <Sidebar />
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="pagination">
            {pageNumbers.map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`pagination-button ${
                  currentPage === page ? "active" : ""
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  );
}
