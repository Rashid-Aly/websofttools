/* eslint-disable react/prop-types */
import React from "react";
import * as AppIcons from "./AppIcons";
export * from "./AppIcons";

/**
 * Replaces the original LazyReactIcon component due to NextJs bug that causes
 * high memory usage and slow compile times with the 'react-icons' version of
 * the library.
 */

const ReactIcon = ({ icon, ...props }) => {
  const Icon = AppIcons[icon || "FaRobot"];

  return Icon ? <Icon {...props} /> : null;
};

export default ReactIcon;
