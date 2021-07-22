import { createContext, useContext, useState } from 'react'

const UserContext = createContext(null)

const UserContextProvider = ({ children }) =>
{
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () =>
{
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error("Can't find UserContext provider")
  return ctx
}

export default UserContextProvider
