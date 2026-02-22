import "./ContextNew3.css";
import UserProvider4 from "../UserProvider4/user.js";
import { useContext } from "react";

export default function ContextNew3() {
  const { userDetails } = useContext(UserProvider4);
  //   console.log(props);
  return (
    <div className="context__new__3--container">
      <h2>Context New 3 Container</h2>
      <p>My name is {userDetails.username}</p>
      <p>Age is - {userDetails.age}</p>
      <p>Designation is {userDetails.designation}</p>
      {userDetails.isEligible && <p>I am eligible for this job.</p>}
    </div>
  );
}
