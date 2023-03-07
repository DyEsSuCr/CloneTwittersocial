import { createContext } from 'react'
import { useFetch } from '../hooks/useFetch'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const { data, loading, error } = useFetch('http://localhost:3000/api/users/')

  return <UserContext.Provider value={{ data, loading, error }}> {children} </UserContext.Provider>
}
