import styled from 'styled-components'

const PathAnimationWrapper = styled.div(({ inView }) => [
  {
    "path": {
      "strokeDashoffset": inView ? "272" : "0",
      "transition": "stroke-dashoffset 300ms ease-in",
    }
  }
])

export default PathAnimationWrapper