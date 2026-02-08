import { UserProvider2 } from "./userProvider2.js";

export default function UserProvider_2({ children, state, dispatch }) {
  return (
    <UserProvider2.Provider value={{ state, dispatch }}>
      {children}
    </UserProvider2.Provider>
  );
}
