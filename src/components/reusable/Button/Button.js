import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  className = "",
  lg = false,
  xl = false,
  full = false,
  disabled = false,
  rounded = false,
  roundedfull = false,
  roundedmd = false,
  ariaLabel = "",
  icon,
  ...props
}) => {
  // Define the base button classes
  const baseClasses =
    "relative flex items-center justify-center gap-2 bg-Secondary font-roboto text-Body1 text-white shadow-md bg-opacity-25 hover:shadow-lg";
  const sizeClasses = xl ? "px-7 py-3.5" : lg ? "px-6 py-2 " : "px-3.5 py-2";
  const widthClasses = full ? "w-full" : "";

  const roundedClasses = rounded
    ? "rounded"
    : roundedmd
    ? "rounded-md"
    : roundedfull
    ? "rounded-full"
    : "";
  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${widthClasses} ${
        disabled ? "cursor-not-allowed opacity-75 focus:ring-0" : ""
      } ${className} ${roundedClasses}`}
      aria-label={ariaLabel || undefined}
      {...props}
    >
      {children}
      {icon && <icon.type className="h-4 w-4" />}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string,
  full: PropTypes.string,
  disabled: PropTypes.string,
  ariaLabel: PropTypes.string,
  icon: PropTypes.element,
  rounded: PropTypes.string,
  roundedfull: PropTypes.string,
  roundedmd: PropTypes.string,
};
