import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

import Image from "next/image";
import { classNames } from "../../utils/utils";

function StatsCard({ logo, logoalt, className }) {
  return (
    <div className={classNames("overflow-hidden", className)}>
      <Image
        src={logo}
        alt={logoalt || "company logo"}
        width={158}
        height={43}
      />
    </div>
  );
}

StatsCard.propTypes = {
  logo: PropTypes.string.isRequired,
  logoalt: PropTypes.string,
  className: PropTypes.string,
};

export default StatsCard;
