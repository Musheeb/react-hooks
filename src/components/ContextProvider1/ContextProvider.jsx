import { CreatedContext } from "./context";

export default function ContextProvider({
  children,
  username,
  age,
  profession,
}) {
  return (
    <CreatedContext.Provider value={{ username, age, profession }}>
      {children}
    </CreatedContext.Provider>
  );
}
