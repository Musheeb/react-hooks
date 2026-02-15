import "./UseContextNew3.css";

import { CreatedContext } from "../ContextProvider1/context.js";
import { useContext, useState, useMemo } from "react";

const fib = (n) => {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
};

export default function UseContextNew3() {
  console.log("Child component re-rendered");
  const [myNumber, setMyNumber] = useState("");
  const [myText, setMyText] = useState("");
  const { username, age, profession } = useContext(CreatedContext);
  const fibNumber = useMemo(() => fib(myNumber), [myNumber]);
  function handleFibNumber(e) {
    setMyNumber(Number(e.target.value));
  }
  function handleTextChange(e) {
    setMyText(e.target.value);
  }
  return (
    <div className="use__new__context__3--container">
      <h2>Context new 3 container</h2>
      <p>Name: {username}</p>
      <p>Age: {age}</p>
      <p>Profession: {profession}</p>
      <input
        id="input1"
        type="number"
        placeholder="enter you number..."
        value={myNumber}
        onChange={handleFibNumber}
      />
      <p>{fibNumber ? fibNumber : "--"}</p>
      <input
        id="input2"
        type="text"
        placeholder="enter something..."
        value={myText}
        onChange={handleTextChange}
      />
      <p>{myText ? myText : "--"}</p>
    </div>
  );
}
