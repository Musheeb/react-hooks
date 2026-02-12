import "./UseRef2.css";

import { useRef, useState } from "react";

export default function UseRef2() {
  const [selected, setSelected] = useState(false);
  const inputOne = useRef(null);
  const inputTwo = useRef(null);
  //   console.log(selected);
  function handleChangeColors() {
    setSelected((prevVal) => !prevVal);
    inputOne.current.style.backgroundColor = "yellow";
  }
  function handleFocusInputs() {
    inputTwo.current.focus();
  }
  return (
    <div className="use__ref__2--container">
      <h2>Another example of Use Ref Hook</h2>
      <div>
        <label
          htmlFor="name"
          style={{ cursor: "pointer" }}
          onClick={() => inputOne.current.focus()}
        >
          Name:{" "}
        </label>
        <input
          ref={inputOne}
          type="text"
          id="name"
          style={{ color: selected ? "black" : "aqua" }}
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label
          htmlFor="profession"
          style={{ cursor: "pointer" }}
          onClick={() => inputTwo.current.focus()}
        >
          Profession:{" "}
        </label>
        <input
          ref={inputTwo}
          type="text"
          id="profession"
          placeholder="Enter your profession"
        />
      </div>
      <button className="use__ref__2--btn" onClick={handleChangeColors}>
        Change colors
      </button>
      <button className="use__ref__2--btn" onClick={handleFocusInputs}>
        Focus inputs
      </button>
    </div>
  );
}
