import React from 'react';
import { useState } from 'react';
import AuthContext from './AuthContext';

type Props = { children: JSX.Element };

export const AuthProvider = ({children}:Props) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");


  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn, user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
  }