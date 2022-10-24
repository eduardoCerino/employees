import React from 'react'

interface AppContextInterface {
    loggedIn: boolean,
    setLoggedIn: (loggedIn: boolean) => void,
    user:string,
    setUser: (user: string) => void
  }
const AuthContext = React.createContext <AppContextInterface | null> (null)

export default AuthContext