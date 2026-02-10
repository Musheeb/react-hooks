import "./UseRef1.css";

import { useState, useRef } from "react";

export default function UseRef1() {
  const [myNumber, setMyNumber] = useState(0);

  const inputOne = useRef();
  const inputTwo = useRef();

  function handleDollar() {
    // console.log(inputOne.current);
    inputOne.current.style.backgroundColor = "orange";
    inputOne.current.style.color = "black";
  }

  function handleRupee() {
    // console.log(inputTwo.current);
    inputTwo.current.style.backgroundColor = "aqua";
    inputTwo.current.style.color = "black";
  }

  return (
    <div className="use__ref__container">
      <h2>Example of Use Ref Hook</h2>
      <div>
        <label htmlFor="dollar">Dollar</label>
        <input
          ref={inputOne}
          id="dollar"
          type="text"
          className="input--box"
          value={myNumber}
          onChange={(e) => setMyNumber(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rupee">Rupee</label>
        <input
          ref={inputTwo}
          id="rupee"
          type="number"
          className="input--box"
          value={myNumber}
          onChange={(e) => setMyNumber(e.target.value)}
        />
      </div>
      <button
        className="btns-rupdol"
        onClick={() => {
          handleDollar();
        }}
      >
        Change Dollar
      </button>
      <button
        className="btns-rupdol"
        onClick={() => {
          handleRupee();
        }}
      >
        Change Rupee
      </button>
    </div>
  );
}
