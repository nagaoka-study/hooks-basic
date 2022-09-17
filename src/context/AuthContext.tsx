import React, { createContext, useState } from "react";

type Props = { children: React.ReactNode };
export const AuthContext = createContext<InitialState | null>(null);

type InitialState = {
  userAuth: boolean;
  setUserAuth: React.Dispatch<React.SetStateAction<boolean>>;
};
export const AuthProvider: React.VFC<Props> = ({ children }) => {
  const [userAuth, setUserAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
