import "./UseContextNew.css";

import { useReducer } from "react";

import UseContextNew2 from "../UseContextNew2/UseContxtNew2.jsx";
import CreatedContext from "../ContextProvider1/ContextProvider.jsx";

export default function UseContextNew() {
  const initialState = {
    username: "John Doe",
    age: 30,
    profession: "Fullstack Developer",
  };
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "username":
        return { ...state, username: action.payload };
      case "age":
        return { ...state, age: action.payload };
      case "profession":
        return { ...state, profession: action.payload };
      default:
        return new Error("No type found");
    }
  };
  const [stateObj, dispatch] = useReducer(reducerFunction, initialState);
  function handleChange(e) {
    dispatch({ type: "username", payload: e.target.value });
  }
  function handleAge(e) {
    dispatch({ type: "age", payload: e.target.value });
  }
  function handleProfession(e) {
    dispatch({ type: "profession", payload: e.target.value });
  }
  return (
    <div className="use__context__new--container">
      <h2>UseContext example at midnight</h2>
      <label htmlFor="username">Username: </label>
      <input
        id="username"
        type="text"
        placeholder="username"
        value={stateObj.username}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="age">Age: </label>
      <input
        type="number"
        placeholder="Enter your age"
        value={stateObj.age}
        onChange={handleAge}
      />
      <br />
      <label htmlFor="profession">Profession: </label>
      <input
        type="text"
        placeholder="Enter you profession"
        value={stateObj.profession}
        onChange={handleProfession}
      />
      <p>
        Hey it's me {stateObj.username}. I am {stateObj.age} old and I am a{" "}
        {stateObj.profession} in Heroku.
      </p>
      <CreatedContext
        username={stateObj.username}
        age={stateObj.age}
        profession={stateObj.profession}
      >
        <UseContextNew2 />
      </CreatedContext>
    </div>
  );
}
