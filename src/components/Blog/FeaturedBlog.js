import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import NextLink from "../reusable/Link/NextLink";

const FeaturedBlog = ({ featuredPost }) => {
  return (
    <>
      <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg ">
        <time
          dateTime={featuredPost.datetime}
          className="block text-sm leading-6 text-gray-600"
        >
          {featuredPost.date}
        </time>
        <h1
          id="featured-post"
          className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          {featuredPost.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          {featuredPost.description}
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
          <div className="flex">
            <NextLink
              href={featuredPost.href}
              className="text-sm font-semibold leading-6 text-indigo-600"
              aria-describedby="featured-post"
            >
              Continue reading <span aria-hidden="true">&rarr;</span>
            </NextLink>
          </div>
          <div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
            <Link
              href={featuredPost.author.href}
              className="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
            >
              <Image
                src={featuredPost.author.imageUrl}
                alt=""
                width={24}
                height={24}
                className="flex-none rounded-full bg-gray-50"
              />
              {featuredPost.author.name}
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default FeaturedBlog;

FeaturedBlog.propTypes = {
  featuredPost: PropTypes.shape({
    datetime: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    href: PropTypes.string,
    author: PropTypes.shape({
      href: PropTypes.string,
      imageUrl: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
};
