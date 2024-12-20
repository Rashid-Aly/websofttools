/* eslint-disable no-empty-pattern */
/* eslint-disable react/prop-types */
"use client";
import PropTypes from "prop-types";
import React from "react";

export default function PageHeading({ headings }) {
  return (
    <div className="md:flex md:items-center md:justify-between">
      {headings.map((item, index) => (
        <div className="min-w-0 flex-1" key={index}>
          <h2 className="text-2xl font-bold capitalize leading-7 text-gray-900  sm:text-3xl sm:tracking-tight">
            {item.name}
          </h2>
          {item.description && (
            <p className="py-8 text-base font-medium text-gray-700">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

PageHeading.propTypes = {
  headings: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
  ),
};
