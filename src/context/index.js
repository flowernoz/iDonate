import React, { createContext, useState } from "react";

export const MyBooleanContext = createContext({
  isToggled: false,
  setIsToggled: () => {},
});

export const MyBooleanProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);
  const toggle = () => setIsToggled(!isToggled);

  return (
    <MyBooleanContext.Provider value={{ isToggled, toggle }}>
      {children}
    </MyBooleanContext.Provider>
  );
};
