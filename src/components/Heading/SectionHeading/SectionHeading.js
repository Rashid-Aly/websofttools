import React from "react";
import PropTypes from "prop-types";

const SectionHeading = ({ name, desc }) => {
  return (
    <>
      <div className=" px-3 sm:container">
        <p className="mt-20 text-center font-roboto text-h3 text-Primary">
          {name}
        </p>
        <p className="mt-6 text-center font-roboto text-Body1 text-[#828181]">
          {desc}
        </p>
      </div>
    </>
  );
};

export default SectionHeading;

SectionHeading.propTypes = {
  name: PropTypes.any,
  desc: PropTypes.any,
};
