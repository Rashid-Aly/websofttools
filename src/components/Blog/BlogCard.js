import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import NextLink from "../reusable/Link/NextLink";

const BlogCard = ({ BlogPosts }) => {
  return (
    <div>
      <article className="flex flex-col items-start justify-between">
        <div className="relative w-full">
          <Image
            src={BlogPosts.imageUrl}
            alt=""
            width={500}
            height={300}
            className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="max-w-xl">
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            <time dateTime={BlogPosts.datetime} className="text-gray-500">
              {BlogPosts.date}
            </time>
            <NextLink
              href={BlogPosts.category.href}
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {BlogPosts.category.title}
            </NextLink>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <NextLink href={BlogPosts.href}>
                <span className="absolute inset-0" />
                {BlogPosts.title}
              </NextLink>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {BlogPosts.description}
            </p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <Image
              src={BlogPosts.author.imageUrl}
              alt=""
              width={40}
              height={40}
              className="rounded-full bg-gray-100"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <NextLink href={BlogPosts.author.href}>
                  {BlogPosts.author.name}
                </NextLink>
              </p>
              <p className="text-gray-600">{BlogPosts.author.role}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogCard;

BlogCard.propTypes = {
  BlogPosts: PropTypes.shape({
    datetime: PropTypes.string,
    imageUrl: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    href: PropTypes.string,
    category: PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
    }),
    author: PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
      imageUrl: PropTypes.string,
      role: PropTypes.string,
    }),
  }),
};
