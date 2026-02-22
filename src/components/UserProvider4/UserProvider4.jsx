import UserProvider4 from "./user.js";

export default function UserProvider4New({ children, userDetails }) {
  return (
    <UserProvider4.Provider value={{ userDetails }}>
      {children}
    </UserProvider4.Provider>
  );
}
