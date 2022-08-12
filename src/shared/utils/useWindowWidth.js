import React, { useState, useEffect } from "react";

export const useWindowWidth = () => {
  let [width, setWidth] = useState(0);

  useEffect(() => {
    let windowWidth = window.innerWidth;

    let windowSize =
      windowWidth < 374
        ? "Default"
        : windowWidth >= 375 && windowWidth <= 768
        ? "sm"
        : windowWidth >= 769 && windowWidth <= 1023
        ? "md"
        : "lg";

    setWidth(windowSize);
  }, []);

  return width;
};
