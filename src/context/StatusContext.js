import React, { useState, createContext } from "react";

export const StatusContext = createContext();

export const StatusProvider = (props) => {
  const [status, setStatus] = useState("all");

  return (
    <StatusContext.Provider value={[status, setStatus]}>
      {props.children}
    </StatusContext.Provider>
  );
};
