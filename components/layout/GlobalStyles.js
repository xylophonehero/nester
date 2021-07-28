import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple`};
    ${tw`antialiased text-navy font-body`}
  }
  .purple{
    ${tw`font-bold text-purple`}
  }
  .blue{
    ${tw`font-bold text-blue`}
  }
  .bold{
    ${tw`font-bold`}
  }
  a{
    ${tw`focus:outline-none focus-visible:outline-black!`}
  }
  button{
    ${tw`focus:outline-none focus-visible:outline-black!`}
  }
  footer a {
    ${tw`focus-visible:outline-white!`}
  }
  footer button {
    ${tw`focus-visible:outline-white!`}
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles