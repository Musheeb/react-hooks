import "./UseCallback2.css";
import { useState, useCallback } from "react";
import Search2 from "../Search2/Search2";
import shuffle2 from "../../utils/shuffle2.js";

const usersArray = [
  "Ruben",
  "Dembele",
  "Kante",
  "Vardy",
  "Kane",
  "Hulk",
  "Pablo",
  "Ben",
  "Dwarshius",
  "Lawrene",
  "Djeko",
];

export default function UseCallback2() {
  const [users, setUsers] = useState(usersArray);
  const handleSearch = useCallback(
    (text) => {
      const filterUsers = users.filter((user) => {
        return user.includes(text);
      });
      setUsers(filterUsers);
    },
    [users],
  );
  function handleClick() {
    setUsers(shuffle2(usersArray));
  }
  return (
    <div className="use__callback__2--container">
      <h2>Use callback example 2</h2>
      <button className="shuffle--btn" onClick={handleClick}>
        Shuffle
      </button>
      <Search2 onChange={handleSearch} />
      {users.map((user) => {
        return <p key={user}>{user}</p>;
      })}
    </div>
  );
}
