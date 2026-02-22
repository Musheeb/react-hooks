import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import MainUserReducer from "./components/Main-UseReducer/MainUseReducer.jsx";
import MainUseReducer2 from "./components/Main-UseReducer2/MainUseReducer2.jsx";
import MainUseContext from "./components/Main-UseContext/MainUseContext.jsx";
import UseContext1 from "./components/UseContext1/UseContext1.jsx";
import UseContextNew from "./components/UseContextNew/UseContextNew.jsx";
import Context1 from "./components/Context1/Context1.jsx";
import UseRef1 from "./components/UseRef1/UseRef1.jsx";
import UseRef2 from "./components/UseRef2/UseRef2.jsx";
import UseMemo1 from "./components/UseMemo1/UseMemo1.jsx";
import UseMemo2 from "./components/UseMemo2/UseMemo2.jsx";
import UsecallBack1 from "./components/UseCallback1/UseCallback1.jsx";
import UseCallback2 from "./components/UseCallback2/UseCallback2.jsx";
import Routing from "./components/Routing/Routing.jsx";
import ContextNew1 from "./components/ContextNew1/ContextNew1.jsx";

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

  function handleOnChange(event) {
    // setThoughts(event.target.value);
    dispatch({ type: "thoughts", payload: event.target.value });
  }

  const styles = {
    color: !state.isColor ? "#bbb" : "green",
  };

  return (
    <>
      <ContextNew1 />
      <Routing />
      <UseCallback2 />
      <UsecallBack1 />
      <UseMemo2 />
      <UseContextNew />
      <UseMemo1 />
      <UseRef2 />
      <UseRef1 />
      <Context1 />
      <UseContext1 />
      <MainUseContext />
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
      <MainUseReducer2 />
      <MainUserReducer />
    </>
  );
}

export default App;
