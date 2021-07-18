import tw, { styled } from "twin.macro"
import { BsPlus } from "react-icons/bs"
import { useRef } from "react"

const Item = styled.div(({ open }) => [
  tw`w-full rounded-lg bg-gray-0`,
  open && tw`shadow-card`,
])

const HiddenPart = styled.div(({ open }) => [
  tw`overflow-hidden text-left text-16 tablet:text-18 text-gray-4 px-7 transition-max-height`,
  // open && tw`block`,
  // !open && tw`max-h-0` 
])

const IconWrapper = styled.div(({ open }) => [
  tw`transition-transform transform`,
  open && tw`rotate-45`
])

const AccordianItem = ({ item, isOpen, open, close }) =>
{
  const ref = useRef()
  let maxHeight = 0
  if (typeof ref.current !== "undefined" && isOpen) maxHeight = ref.current.scrollHeight
  // const [open, setOpen] = useState(false)
  return (
    <Item open={isOpen} >
      <button tw="flex justify-between items-center w-full px-7 py-7 space-x-4" onClick={isOpen ? close : open}>
        <h3 tw="font-bold text-18 tablet:text-21 text-left">{item.title}</h3>
        <div tw="text-purple ">
          <IconWrapper open={isOpen}>
            < BsPlus tw="h-10 w-10" />
          </IconWrapper>
        </div>
      </button>
      <HiddenPart ref={ref} open={isOpen} style={{ maxHeight: `${maxHeight}px` }}>
        <div tw="pb-7">{item.description}</div>
      </HiddenPart>
    </Item>
  )
}

export default AccordianItem
