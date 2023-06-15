import { createContext, useContext } from "react";
import { usePeople } from "./hooks/usePeople";

export const Context = createContext();

export default function PeopleProvider({ children }) {
  const peopleData = usePeople();
  return <Context.Provider value={peopleData}>{children}</Context.Provider>;
}

export function usePeopleContext() {
  return useContext(Context);
}
