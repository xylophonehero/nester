import useAnimation from '@/context/AnimationContext'
import styled from 'styled-components'
import tw from 'twin.macro'

const AnimationWrapper = styled.div(({ inView }) => [
  tw`transform opacity-100 mx-auto (transition duration-500)`,
  !inView && tw`scale-90 translate-y-48 opacity-0`
])

const BasicAnimation = ({ children, index, noAnimation, ...rest }) => {
  const { inView } = useAnimation()
  return (
    <AnimationWrapper inView={noAnimation || inView} style={{ transitionDelay: `${500 + (index * 300)}ms` }} {...rest}>
      {children}
    </AnimationWrapper>
  )
}

export default BasicAnimation
