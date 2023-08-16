import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [lists, setList] = useState([]);
  const [selectedListItemIndex, setSelectedListItemIndex] = useState("");

  return (
    <AppContext.Provider
      value={{
        lists,
        setList,
        selectedListItemIndex,
        setSelectedListItemIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
