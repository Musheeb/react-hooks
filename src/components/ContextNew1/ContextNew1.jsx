import "./ContextNew1.css";
import ContextNew2 from "../ContextNew2/ContextNew2.jsx";
import UserProvider4New from "../UserProvider4/UserProvider4.jsx";

import { useState } from "react";

export default function ContextNew1() {
  const [user, setUser] = useState({
    username: "",
    age: null,
    designation: "",
    isEligible: false,
  });
  console.log(user);
  function handleUserDetails(e) {
    setUser({
      ...user,
      username: e.target.value,
    });
  }
  function handleAge(e) {
    setUser({
      ...user,
      age: e.target.value,
    });
  }
  function handleDesignation(e) {
    setUser({
      ...user,
      designation: e.target.value,
    });
  }
  function handleEligibility(e) {
    setUser({
      ...user,
      isEligible: e.target.value,
    });
  }
  return (
    <div className="context__new__1--container">
      <h2>Context New 1 Container</h2>
      <div className="context__new__1__content__container">
        <input
          type="text"
          placeholder="username"
          onChange={handleUserDetails}
        />
        <input type="number" placeholder="age" onChange={handleAge} />
        <input
          type="text"
          placeholder="designation"
          onChange={handleDesignation}
        />
        <div className="eligibility--container">
          <label htmlFor="eligibility">is eligible for interview?</label>
          <input
            id="eligibility"
            type="checkbox"
            onChange={handleEligibility}
          />
        </div>
      </div>
      <UserProvider4New userDetails={user}>
        <ContextNew2 />
      </UserProvider4New>
    </div>
  );
}
