import { createContext, useContext } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import tw from "twin.macro"

const AnimationContext = createContext(null)

const AnimationWrapper = styled.div(({ inView }) => [
  tw`transform opacity-100 mx-auto (transition duration-700)`,
  !inView && tw`scale-90 translate-y-48 opacity-0`
])

export const AnimationProvider = ({ children, noAnimation, ...rest }) => {
  const [ ref, inView ] = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: true
  })

  return <AnimationContext.Provider value={{ inView }}>
    <AnimationWrapper ref={ref} {...rest} inView={noAnimation || inView}>
      {children}
    </AnimationWrapper>
  </AnimationContext.Provider>
}

const useAnimation = () => {
  const context = useContext(AnimationContext)
  if (!context) throw new Error("Only call useAnimation withtin an AnimationProvider")
  return context
}

export default useAnimation
