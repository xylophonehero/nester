import { FaPlay } from "react-icons/fa"
import tw, { styled } from "twin.macro"
import { Link } from "@/components/general"


const StyledButton = styled.div(({ size, color, fit }) => [
  tw`px-8 py-2 font-bold uppercase transition-shadow duration-300 border shadow-none rounded-3.5xl hover:shadow-button flex items-center justify-center`,
  color === "purple_white" && tw`text-white bg-purple border-purple`,
  color === "white_purple" && tw`bg-white border-purple text-purple`,
  color === "blue_navy" && tw`bg-blue text-navy border-blue`,
  color === "blue_white" && tw`text-white bg-blue border-blue`,
  size === "tiny" && tw`text-14 py-3.5 px-9`,
  size === "small" && tw`text-14 py-3.5 px-9`,
  size === "medium" && tw`text-14 py-3.5 px-9 tablet:(text-16 py-5.25 px-12)`,
  size === "large" && tw`text-14 py-3.5 px-9 tablet:(text-16 py-5.25 px-12) desktop:(px-16 text-18 py-7)`,
  size === "responsive" && tw`text-14 py-4.5 px-9 tablet:(text-16 py-5.25 px-12) desktop:(px-16 text-18 py-7)`,
  fit && tw`w-fit`,
])


const Button = ({ button, size, fit, ...rest }) =>
{
  return (
    <Link link={button.link}>
      <StyledButton {...rest} size={button.size || "responsive"} color={button.color || "purple_white"} fit={fit}>
        {button.icon === "play" && <FaPlay tw="mr-2" />}
        {button.text}
      </StyledButton>
    </Link>
  )
}

export default Button
