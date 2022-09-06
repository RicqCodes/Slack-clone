import React, { useState } from "react";

const useGenerateRandomColor = () => {
  const [color, setColor] = useState("");

  const generateColor = () => {
    setColor(`#${Math.random().toString(16).slice(2, 8)}`);
  };

  return [color, generateColor];
};

export default useGenerateRandomColor;
