import "./UseMemo1.css";

import { useState, useMemo } from "react";

const fib = (n) => {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
};

export default function UseMemo1() {
  const [num, setNum] = useState("");
  const [text, setText] = useState("");
  function handleNumberChange(e) {
    setNum(e.target.value);
  }
  function handleTextChange(e) {
    setText(e.target.value);
  }
  //   const fibNumber = useMemo(() => fib(num), [num]);
  //   const fibNumber = useMemo(() => fib(num), [num]);
  //   const fibNumber = useMemo(() => fib(num), [num]);
  //   const fibNumber = useMemo(() => fib(num), [num]);
  const fibNumber = useMemo(() => fib(num), [num]);
  //   console.log("Component Re-rendered");
  return (
    <div className="use__memo__1--container">
      <h2>Use memo example</h2>
      <input
        type="number"
        className="number--input"
        placeholder="Enter the number"
        value={num}
        onChange={handleNumberChange}
      />
      <p>Number: {fibNumber || "--"}</p>
      <input
        type="text"
        placeholder="Write something"
        value={text}
        onChange={handleTextChange}
      />
      <p>Text: {text ? text : "--"}</p>
    </div>
  );
}
