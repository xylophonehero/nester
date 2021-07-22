import IframeResizer from "iframe-resizer-react"
import "twin.macro"

const Login = () =>
{
  return (
    // <iframe id="embed" src="https://app.nestertest.com/login" tw="w-full height[100vh]" />
    <iframe id="embed" src="http://localhost:3000" tw="w-full height[100vh]" />
    // <IframeResizer
    //   id="embed"
    //   log
    //   src="https://app.nestertest.com/login"
    //   tw="w-full"
    //   heightCalculationMethod="lowestElement"
    // />
  )
}

export default Login
