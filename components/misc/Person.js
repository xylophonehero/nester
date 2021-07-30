import { BigEgg, Swirl } from "assets"
import { useRef } from "react"
import { BsPlus } from "react-icons/bs"
import tw, { styled } from "twin.macro"
import { StrapiImage } from '@/components/general'

const IconWrapper = styled.div(({ open }) => [
  tw`transition-transform duration-700 ease-in-out transform`,
  open && tw`rotate-225`
])

const HiddenPart = tw.div`absolute -mx-5 tablet:(w-auto -mx-28) laptop:-mx-14 desktop:-mx-28 bg-gray-0 top[240px] px-8 shadow-light-card (transition-max-height duration-700) overflow-hidden`

const Person = ({ person, open, setOpen, close }) =>
{
  const ref = useRef()
  let maxHeight = 0
  if (typeof ref.current !== "undefined" && open) maxHeight = ref.current.scrollHeight

  return (
    <div tw="width[320px] mx-16 relative" style={{ height: `${270 + (typeof ref.current !== "undefined" ? ref.current.scrollHeight : 200)}px` }}>
      <HiddenPart ref={ref} style={{ maxHeight: `${maxHeight}px` }}>
        <p tw="mt-48 whitespace-pre-line  text-18">{person.bio}</p>
        <p tw="text-purple text-18 mb-8 mt-6">Click here to read more</p>
      </HiddenPart>
      <div tw="relative pb-6 mb-8 px-6">
        <StrapiImage image={person.image} />
        <button tw="absolute bottom-0 right-0" onClick={open ? close : setOpen}>
          <BigEgg />
          <div tw="absolute inset-0 flex items-center justify-center text-28">
            <IconWrapper open={open}>
              < BsPlus tw="h-10 w-10" />
            </IconWrapper>
          </div>
        </button>
        <div tw="absolute bottom-0 left-0">
          <Swirl />
        </div>
      </div>
      <div tw="font-bold text-center  relative">
        <p tw="text-28 mb-2">{person.name}</p>
        <p tw="text-21 text-purple">{person.function}</p>
      </div>
    </div>
  )
}

export default Person
