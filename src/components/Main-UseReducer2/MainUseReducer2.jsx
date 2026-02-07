import "./MainUseReducer2.css";

import { useReducer } from "react";

export default function MainUseReducer2() {
  const initialState = {
    count: 0,
    thoughts: "",
    isColor: false,
  };
  const reducerFunc = (state, action) => {
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
        throw new Error("No type matched");
    }
  };
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  function handleCounter(type) {
    if (type === "increment") {
      dispatch({ type: "increment" });
    } else if (type === "decrement") {
      dispatch({ type: "decrement" });
    } else {
      throw new Error("Type is invalid");
    }
  }

  function handleThoughtChanges(event) {
    dispatch({ type: "thoughts", payload: event.target.value });
  }

  function changeColorOnClick() {
    dispatch({ type: "color" });
  }

  const inputTextStyles = {
    color: state.isColor ? "aqua" : "white",
  };

  return (
    <div className="main__use__reducer__2--container">
      <button
        className="btn__use__reducer__2"
        onClick={() => handleCounter("increment")}
      >
        Plus
      </button>
      <span className="main__use__reducer__2--count">{state.count}</span>
      <button
        className="btn__use__reducer__2"
        onClick={() => handleCounter("decrement")}
      >
        Minus
      </button>
      <input
        type="text"
        placeholder="type something..."
        className="input__main__use__reducer__2--box"
        value={state.thoughts}
        onChange={handleThoughtChanges}
      />
      {state.thoughts && (
        <p
          className="input__written--text"
          style={inputTextStyles}
          onClick={changeColorOnClick}
        >
          {state.thoughts}
        </p>
      )}
    </div>
  );
}
