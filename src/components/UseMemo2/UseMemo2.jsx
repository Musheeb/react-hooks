import "./UseMemo2.css";

import { useState, useMemo } from "react";

const fib = (n) => {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
};

export default function UseMemo2() {
  //   console.log("Use memo component is re-renrederd");
  const [myNumber, setMyNumber] = useState("");
  const [myText, setMyText] = useState("");
  const fibNumber = useMemo(() => fib(myNumber), [myNumber]);
  function handleChange(e) {
    setMyNumber(e.target.value);
  }
  function handleText(e) {
    setMyText(e.target.value);
  }
  return (
    <div className="use__memo__2--container">
      <input
        type="number"
        placeholder="enter the number..."
        onChange={handleChange}
        value={myNumber}
      />
      {fibNumber ? <p>{fibNumber}</p> : <p>--</p>}
      <input
        type="text"
        placeholder="enter some text..."
        onChange={handleText}
        value={myText}
      />
      {myText ? <p>{myText}</p> : <p>--</p>}
    </div>
  );
}
