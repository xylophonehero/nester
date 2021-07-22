import { useUserContext } from "context/UserContext"
import { useEffect, useRef } from "react"

const PERMITTED_DOMAIN = "http://localhost:3000"

const useShareCookies = () =>
{
  const { setUser } = useUserContext()
  const setUserRef = useRef(setUser)
  const onMessageRecieved = (event) =>
  {
    if (event.origin === PERMITTED_DOMAIN)
    {
      console.log("message recieved from React ")
      const user = JSON.parse(event.data)
      setUserRef.current(user)
    }
  }
  useEffect(() =>
  {
    if (typeof window !== "undefined")
    {
      console.log("Next event listner set up")
      window.addEventListener('message', onMessageRecieved)
    }
    return () => window.removeEventListener('message', onMessageRecieved)
  }, [setUserRef])
}

export default useShareCookies