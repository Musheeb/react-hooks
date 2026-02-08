import "./UseContext3.css";

import { UserProvider2 } from "../UserProvider2/userProvider2.js";
import { useContext } from "react";

export default function UseContext3() {
  const { state, dispatch } = useContext(UserProvider2);
  function changeUserDetails(event) {
    // console.log(event.target.value);
    dispatch({ type: event.target.id, payload: event.target.value });
  }
  return (
    <div className="use__context__3--container">
      <h2>Use Context 3</h2>
      <label htmlFor="username" className="use__context__3--label">
        Username -
      </label>
      <input
        type="text"
        id="username"
        placeholder={`${state.username}`}
        onChange={changeUserDetails}
      />
      <br />
      <label htmlFor="age" className="use__context__3--label">
        Age -
      </label>
      <input
        type="text"
        id="age"
        placeholder={`${state.age}`}
        onChange={changeUserDetails}
      />
      <br />
      <label htmlFor="sex" className="use__context__3--label">
        Sex -{" "}
      </label>
      <input
        type="text"
        id="sex"
        placeholder={`${state.sex}`}
        onChange={changeUserDetails}
      />
      <br />
      <label htmlFor="runs" className="use__context__3--label">
        Runs -{" "}
      </label>
      <input
        type="text"
        id="runs"
        placeholder={`${state.runs}`}
        onChange={changeUserDetails}
      />
    </div>
  );
}
