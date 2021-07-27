import { getId } from '@/utils/getId'
import { Link } from "@/components/general"
import React, { useRef } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import tw from 'twin.macro'

const HiddenMenu = tw.div`overflow-hidden  (transition-max-height duration-300 ease-linear)`


const MobileDropdown = ({ item, open, clickHandler, closeMenu }) =>
{
  const hiddenMenuRef = useRef()
  let maxHeight = 0
  if (open && hiddenMenuRef.current) maxHeight = hiddenMenuRef.current.scrollHeight

  return <div tw="text-center">
    <button tw="flex relative justify-center w-full mb-2 font-bold text-16 uppercase" onClick={clickHandler}>
      {item.dropdown_text} <span tw="ml-2"><FaChevronDown /></span>
    </button>
    <HiddenMenu ref={hiddenMenuRef} open={open} style={{ maxHeight: `${maxHeight}px` }}>
      {item.links.map((link) => <p tw="my-3 mx-2" key={getId(link)}>
        <Link link={link.link} onClick={closeMenu} tabIndex={open ? 0 : -1} >
          {link.text}
        </Link>
      </p>)}
    </HiddenMenu>
  </div>

}

export default MobileDropdown
