import "./UseContext1.css";

import UseContext2 from "../UseContext2/UseContext2";
import UserProvider_2 from "../UserProvider2/UserProvider2.jsx";

import { useReducer } from "react";

export default function UseContext1() {
  const initialState = {
    username: "Harry Brook",
    age: 25,
    sex: "Male",
    runs: 1234,
  };
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "username":
        return { ...state, username: action.payload };
      case "age":
        return { ...state, age: Number(action.payload) };
      case "sex":
        return { ...state, sex: action.payload };
      case "runs":
        return { ...state, runs: Number(action.payload) };
      default:
        throw new Error("No action type found.");
    }
  };
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  //   console.log("Current state - ", state);
  return (
    <div className="use__context__1--container">
      <h2>Use Context 1</h2>
      <p className="text__use__context__1">{`My name is ${state.username}. I am ${state.age} years old (${state.sex}). I have scored ${state.runs} so far in my T20 international career.`}</p>
      <UserProvider_2 state={state} dispatch={dispatch}>
        <UseContext2 />
      </UserProvider_2>
    </div>
  );
}
