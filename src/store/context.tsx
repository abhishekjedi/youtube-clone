import { createContext } from "react";
import { useState, useCallback } from "react";

const intitalValue: {
  term: string;
  termChangeHandler: (value: string) => void;
} = {
  term: "New",
  termChangeHandler: (value = "") => {},
};

export const DataContext = createContext(intitalValue);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [term, setTerm] = useState("New");
  const termChangeHandler = useCallback((value: string) => {
    setTerm(value);
  }, []);
  return (
    <DataContext.Provider value={{ term, termChangeHandler }}>
      {children}
    </DataContext.Provider>
  );
};
