import UserContextVariable from "./user.js";

export default function UserProviderWrapperComponent({ children, state }) {
  return (
    <UserContextVariable.Provider value={{ state }}>
      {children}
    </UserContextVariable.Provider>
  );
}
