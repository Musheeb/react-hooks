import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import MainUserReducer from "./components/Main-UseReducer/MainUseReducer.jsx";

function App() {
  function reducerFunc(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "thoughts":
        return { ...state, thoughts: action.payload };
      case "color":
        return { ...state, isColor: !state.isColor };
      default:
        throw new Error("Error occured in reducer method");
    }
  }
  const [state, dispatch] = useReducer(reducerFunc, {
    count: 0,
    thoughts: "",
    isColor: false,
  });
  // console.log("state is - ", state);
  // const [count, setCount] = useState(0);
  // const [thoughts, setThoughts] = useState("");
  // const [isColor, setIsColor] = useState(false);

  function handleOnChange(event) {
    // setThoughts(event.target.value);
    dispatch({ type: "thoughts", payload: event.target.value });
  }

  const styles = {
    color: !state.isColor ? "#bbb" : "green",
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input
          type="text"
          className="input--text"
          placeholder="Write your thoughts..."
          onChange={handleOnChange}
          value={state.thoughts}
        />
        <button
          className="button--subtract"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Subtract count by 1
        </button>
        <button onClick={() => dispatch({ type: "increment" })}>
          count is {state.count}
        </button>
        {state.thoughts && (
          <p
            className="text--paragraph"
            style={styles}
            onClick={() => {
              dispatch({ type: "color" });
            }}
          >
            {state.thoughts}
          </p>
        )}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <MainUserReducer />
    </>
  );
}

export default App;
