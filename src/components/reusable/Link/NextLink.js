import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const NextLink = (props) => {
  const { href, title, className } = props;

  return (
    <Link href={href} className={className}>
      {title}
    </Link>
  );
};

export default NextLink;

NextLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};
