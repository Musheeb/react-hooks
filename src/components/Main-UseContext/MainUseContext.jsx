import "./MainUseContext.css";

import MainUserContext2 from "../Main-UseContext2/MainUseContext2";
import { UserProvider } from "../UserProvider/UserProvider.jsx";

import { useState } from "react";

export default function MainUseContext() {
  const [user, setUser] = useState("John Doe");
  return (
    <div className="use__context__container">
      <h3>Component 1 - Hello, {user}</h3>
      <UserProvider user={user} setUser={setUser}>
        <MainUserContext2 />
      </UserProvider>
    </div>
  );
}
