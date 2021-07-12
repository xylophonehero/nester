import tw, { styled } from "twin.macro"
import { FaPlus, FaTimes } from "react-icons/fa"
import { useState } from "react"

const Item = styled.button(({ open }) => [
  tw`w-full py-4 rounded-lg bg-gray-0 px-7`,
  open && tw`shadow-card`,
])

const HiddenPart = styled.div(({ open }) => [
  tw`hidden mt-4 text-left text-18 text-gray-4`,
  open && tw`block`,
])

const AccordianItem = ({ item }) =>
{
  const [open, setOpen] = useState(false)
  return (
    <Item open={open} onClick={() => setOpen((prev) => !prev)}>
      <div tw="flex justify-between items-center">
        <h3 tw="font-bold text-21">{item.title}</h3>
        <div tw="text-purple">
          {open ? <FaTimes /> : < FaPlus />}
        </div>
      </div>
      <HiddenPart open={open}>
        {item.description}
      </HiddenPart>
    </Item>
  )
}

export default AccordianItem
