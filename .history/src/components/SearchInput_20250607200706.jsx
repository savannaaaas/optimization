import React, { useRef } from "react";
export const SearchInput = ({ updateInput }) => {
  const ref = useRef(null);
  const handleChange = (event) => {
    if (event.key === "Enter") {
      updateInput(ref.current.value);
    }
  };
  return (
    <>
      <input
        ref={ref}
        type="text"
        onKeyDown={handleChange}
        placeholder="Введите название модуля"
        style={{
          margin: "15px",
          padding: "15px",
          backgroundColor: "white",
          border: "6px solid teal",
          borderRadius: "10px",
          color: "black",
        }}
      />
    </>
  );
};
