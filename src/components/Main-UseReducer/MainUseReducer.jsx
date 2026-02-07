import "./MainUseReducer.css";

import { useReducer } from "react";

export default function MainUserReducer() {
  const initialStage = {
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
        throw new Error("No type matched...");
    }
  };
  const [state, dispatch] = useReducer(reducerFunc, initialStage);
  //   console.log(state);
  function handleClick(type) {
    if (type === "increment") {
      return dispatch({ type: "increment" });
    } else if (type === "decrement") {
      return dispatch({ type: "decrement" });
    }
  }

  function onChangeThoughts(e) {
    dispatch({ type: "thoughts", payload: e.target.value });
  }

  const paraStyle = {
    color: state.isColor ? "brown" : "white",
    fontSize: state.isColor ? "25px" : "20px",
  };
  return (
    <div className="main__use__reducer--container">
      <button
        className="button--add btn-common"
        onClick={() => handleClick("increment")}
      >
        +
      </button>
      <h1>{state.count}</h1>
      <button
        className="button--sub btn-common"
        onClick={() => handleClick("decrement")}
      >
        -
      </button>
      <input
        type="text"
        placeholder="type something"
        className="input-thoughts"
        value={state.thoughts}
        onChange={onChangeThoughts}
      />
      {state.thoughts && (
        <button onClick={() => dispatch({ type: "color" })}>
          Change text color below
        </button>
      )}
      {state.thoughts && <p style={paraStyle}>{state.thoughts}</p>}
    </div>
  );
}
