import "./Context1.css";

import Context2 from "../Context2/Context2.jsx";
import UserProviderWrapperComponent from "../UserProvider3/UserProviderComponent.jsx";

import { useReducer, useRef } from "react";

export default function Context1() {
  const ref = useRef(0);
  function reducerFunction(state, action) {
    switch (action.type) {
      case "add":
        return { ...state, count: state.count + 1 };
      case "subtract":
        return { ...state, count: state.count - 1 };
      default:
        return new Error("Nothing matched");
    }
  }
  const initialState = {
    count: 0,
  };
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  function handleClick(type) {
    dispatch({ type: type });
  }
  return (
    <div className="context__1--container">
      <button
        className="btn-useRef"
        onClick={() => {
          ref.current++;
          console.log(ref.current);
        }}
      >
        Increase Ref
      </button>
      <h2>Context 1</h2>
      <button className="btn-maths" onClick={() => handleClick("add")}>
        +
      </button>
      <button className="btn-maths" onClick={() => handleClick("subtract")}>
        -
      </button>
      <UserProviderWrapperComponent state={state.count}>
        <Context2 />
      </UserProviderWrapperComponent>
    </div>
  );
}
