import React, { useCallback, useState } from "react";

import "./App.css";
import { SearchInput } from "./components/SearchInput";
import { CounterButton } from "./components/CounterButton";
import { ItemList } from "./components/ItemList";
function App() {
  const [stateInput, setStateInput] = useState("");
  const [count, setCount] = useState(0);
  const people = [
    { name: "Savanna", age: 12, module: "React" },
    { name: "Anna", age: 10, module: "JavaScript" },
    { name: "Andrei", age: 7, module: "React" },
    { name: "Alex", age: 19, module: "React" },
    { name: "Igor", age: 18, module: "React" },
    { name: "Kate", age: 12, module: "JavaScript" },
    { name: "Kate", age: 22, module: "JavaScript" },
    { name: "Alex", age: 19, module: "RTC" },
    { name: "Nikita", age: 100, module: "Redux" },
    { name: "Pavel", age: 97, module: "Redux" },
  ];
  const updateInput = useCallback(
    (value) => {
      setStateInput(value);
    },
    [stateInput]
  );
  const updateCount = useCallback(
    (value) => {
      setCount(value);
    },
    [count]
  );
  return (
    <>
      <SearchInput updateInput={updateInput} />
      <CounterButton updateCount={updateCount} />
      {count}
      <ItemList people={people} stateInput={stateInput} />
    </>
  );
}

export default App;
