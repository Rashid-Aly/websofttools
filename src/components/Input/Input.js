import React from "react";
import PropTypes from "prop-types";

const Input = ({
  className = "",
  type,
  placeholder,
  value,
  onChange,
  full = false,
  rounded = false,
  roundedfull = false,
  roundedmd = false,
  lg = false,
  xl = false,
  ...props
}) => {
  const roundedClasses = rounded
    ? "rounded"
    : roundedmd
      ? "rounded-md"
      : roundedfull
        ? "rounded-full"
        : "";
  const baseClasses =
    "border-[2px] border-opacity-10 font-roboto text-[#000000] shadow outline-none placeholder:font-roboto placeholder:text-[#828181] hover:border-Secondary";
  const widthClasses = full ? "w-full" : "";
  const sizeClasses = xl ? "px-5 py-5" : lg ? "px-4 py-3 " : "px-3 py-2";
  return (
    <input
      type={type}
      className={`${baseClasses} ${roundedClasses} ${widthClasses} ${sizeClasses} ${className}`}
      id="floatingInput"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

Input.propTypes = {
  type: PropTypes.any,
  placeholder: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.any,
  rounded: PropTypes.string,
  roundedfull: PropTypes.string,
  roundedmd: PropTypes.string,
  full: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string,
  className: PropTypes.string,
  props: PropTypes.any,
};

export default Input;
