import "./Context3.css";

import { useContext } from "react";
import UserContextVariable from "../UserProvider3/user";

export default function Context3() {
  const { state } = useContext(UserContextVariable);
  return (
    <div className="context__3--container">
      <h2>Context 3</h2>
      <h3>{state}</h3>
    </div>
  );
}
