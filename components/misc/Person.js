import { BigEgg } from "assets/BigEgg"
import { Swirl } from "assets/Swirl"
import { FaPlus, FaTimes } from "react-icons/fa"
import "twin.macro"
import StrapiImage from '../general/StrapiImage'

const Person = ({ person, open, setOpen, close }) =>
{
  return (
    <div tw="width[320px] mx-16 relative height[1200px] laptop:height[900px]">
      {open && <div tw="absolute mx-0 tablet:-mx-28 bg-gray-0 top[240px] px-8 shadow-light-card">
        <p tw="mt-48 whitespace-pre-line mb-8 text-18">{person.bio}</p>
      </div>}
      <div tw="relative pb-6 mb-8 px-6">
        <StrapiImage image={person.image} />
        <button tw="absolute bottom-0 right-0 focus:outline-none" onClick={open ? close : setOpen}>
          <BigEgg />
          <div tw="absolute inset-0 flex items-center justify-center text-28">
            {open ?
              <FaTimes />
              :
              <FaPlus />
            }
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
