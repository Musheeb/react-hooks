import { useState, useCallback } from "react";
import shuffle from "../../utils/shuffle.js";
import "./UseCallback1.css";
import Search from "../Search/Search";

const allUsers = ["alex", "john", "simon", "simona", "rainbow", "luca"];

export default function UsecallBack1() {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback(
    (typedText) => {
      //   console.log(users[0]);
      const filteredUsers = users.filter((user) => {
        return user.includes(typedText);
      });
      setUsers(filteredUsers);
    },
    [users],
  );

  return (
    <div className="use__callback__1--container">
      <h2>Use callback example</h2>
      <div className="shuffle__search--container">
        <button
          className="shuffle--button"
          onClick={() => setUsers(shuffle(allUsers))}
        >
          Shuffle
        </button>
        <Search onChange={handleSearch} />
      </div>
      {users.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </div>
  );
}
