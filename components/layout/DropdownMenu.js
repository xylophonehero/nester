import Link from "@/components/general/Link"
import { useUserContext } from "context/UserContext"
import React from 'react'
import { getId } from 'utils/getId'

const DropdownMenu = ({ links }) =>
{
  const { user } = useUserContext()
  return (
    <div tw="absolute top-full right-0 hidden pt-2 group-hocus:flex width[300px]  justify-end">
      <div tw="shadow-light-card bg-white rounded text-center  p-2 font-bold w-fit">
        {links.filter((link) => typeof link.showFor === "undefined" || link.showFor.includes(user.type))
          .map((link) => <Link tw="text-black uppercase hover:bg-gray-0 py-2 px-4 rounded block" key={link.text} link={link.link}>
            {link.text}
          </Link>
          )}
      </div>
    </div>
  )
}

export default DropdownMenu
