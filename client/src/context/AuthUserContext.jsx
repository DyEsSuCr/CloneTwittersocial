import { createContext, useState } from 'react'

export const AuthUserContext = createContext()

export const AuthUserProvider = ({ children }) => {
  const initialValues = {
    username: null,
    email: null,
    auth: false
  }

  const [authUser, setAuthUser] = useState(initialValues)

  return <AuthUserContext.Provider value={{ authUser, setAuthUser }}> {children} </AuthUserContext.Provider>
}
