import { useRouter } from 'next/router'
import { createContext, useContext, useState, useRef, useEffect } from 'react'

const PERMITTED_DOMAIN = "https://app.nestertest.com"

const UserContext = createContext(null)

export const UserContextProvider = ({ children }) =>
{
  const [user, setUser] = useState(null)
  const ref = useRef()
  const router = useRouter()
  const routerRef = useRef(router)

  const logout = () =>
  {
    const win = ref.current.contentWindow
    win.postMessage("logoutUser", PERMITTED_DOMAIN)
    console.log("logout function sent from Next")
    setUser(null)
    router.push("/")
  }

  // Set up event listner and get initial User data from React's localstorage
  useEffect(() =>
  {
    const onMessageRecieved = (event) =>
    {
      if (event.origin === PERMITTED_DOMAIN && !event.data.includes("[iFrameSizer]"))
      {
        const message = JSON.parse(event.data)
        // Set user data
        if (["initial_load", "login"].includes(message?.type))
        {
          console.log(`${message.type} user data recieved from React`)
          setUser(message.user)
        }
        // Redirect if this is a login message
        if (message?.type === "login")
        {
          if (["Investor", "BasicInvestor"].includes(message.user.type))
          {
            routerRef.current.push("/opps", "/opps")
          }
          if (["Borrower", "Introducer", "BasicBorrower", "BasicIntroducer"].includes(message.user.type))
          {
            routerRef.current.push("/financings", "/financings")
          }
        }
      }
    }
    if (typeof window !== "undefined")
    {
      console.log("Next event listner set up")
      window.addEventListener('message', onMessageRecieved)
      setTimeout(() =>
      {
        const win = ref.current.contentWindow
        win.postMessage("getUser", PERMITTED_DOMAIN)
        console.log("getUser message sent from Next")
      }, 2000)
    }
    return () => window.removeEventListener('message', onMessageRecieved)
  }, [routerRef])

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      <iframe ref={ref} tw="hidden" src={PERMITTED_DOMAIN} id="ifr" />
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
