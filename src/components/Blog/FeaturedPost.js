import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

const FeaturedPost = ({ post }) => {
  return (
    <div>
      <article className="py-12">
        <div className="group relative max-w-xl">
          <time
            dateTime={post.datetime}
            className="block text-sm leading-6 text-gray-600"
          >
            {post.date}
          </time>
          <h1 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
            <Link href={post.href}>
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h1>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            {post.description}
          </p>
        </div>
        <div className="mt-4 flex">
          <Link
            href={post.author.href}
            className="relative flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
          >
            <Image
              src={post.author.imageUrl}
              alt=""
              width={24}
              height={24}
              className="flex-none rounded-full bg-gray-50"
            />
            {post.author.name}
          </Link>
        </div>
      </article>
    </div>
  );
};

export default FeaturedPost;

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    datetime: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    href: PropTypes.string,
    author: PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
      imageUrl: PropTypes.string,
    }),
  }),
};
