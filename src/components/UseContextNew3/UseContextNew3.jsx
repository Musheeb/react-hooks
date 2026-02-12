import "./UseContextNew3.css";

import { CreatedContext } from "../ContextProvider1/context.js";
import { useContext } from "react";

export default function UseContextNew3() {
  const { username, age, profession } = useContext(CreatedContext);
  return (
    <div className="use__new__context__3--container">
      <h2>Context new 3 container</h2>
      <p>Name: {username}</p>
      <p>Age: {age}</p>
      <p>Profession: {profession}</p>
    </div>
  );
}
