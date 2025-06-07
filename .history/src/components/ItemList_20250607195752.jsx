import React, { useMemo } from "react";
export const ItemList = ({ people, stateInput }) => {
  const optim = useMemo(() => {
    return people
      .filter((item) => item.module.toLowerCase() === stateInput.toLowerCase())
      .map((item, index) => (
        <ul>
          <li
            key={item.name + index}
            style={{ fontFamily: "cursive", color: "teal" }}
          >
            Name - {item.name}, age - {item.age}, module - {item.module}
          </li>
        </ul>
      ));
  }, [people, stateInput]);
  return <>{optim}</>;
};
