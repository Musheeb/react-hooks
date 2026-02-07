import "./MainUseContext4.css";
import { useContext } from "react";
import { UserContext } from "../UserProvider/UserContext.js";

export default function MainUseContext4() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="use__context__container__4">
      <h3>Component 4 - Bye {user}</h3>
    </div>
  );
}
