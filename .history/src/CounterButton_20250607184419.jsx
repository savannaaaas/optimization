import React from "react";
export const CounterButton = ({ updateCount }) => {
  const handleClick = () => updateCount((count) => count + 1);
};
