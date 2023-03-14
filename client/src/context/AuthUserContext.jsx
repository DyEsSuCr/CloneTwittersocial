import { createContext, useState } from 'react'

export const AuthUserContext = createContext()

export const AuthUserProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null)

  return <AuthUserContext.Provider value={{ authUser, setAuthUser }}> {children} </AuthUserContext.Provider>
}
