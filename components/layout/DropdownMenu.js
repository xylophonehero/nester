import { Link } from "@/components/general"
import { useUserContext } from "context"
import React from 'react'
import "twin.macro"

const DropdownMenu = ({ links, showLogout }) =>
{
  const { user, logout } = useUserContext()
  return (
    <div tw="absolute top-full right-0 invisible pt-2  group-hocus:(flex visible)">
      <div tw="shadow-light-card bg-white rounded text-center opacity-0 transform origin-top-left scale-50 p-2 font-bold w-fit transition duration-300 group-hocus:(opacity-100 scale-100)">
        {links.filter((link) => typeof link.showFor === "undefined" || link.showFor.includes(user.type))
          .map((link) => <Link tw="text-black uppercase hocus:bg-gray-0 py-2 px-4 rounded block whitespace-nowrap" key={link.text} link={link.link}>
            {link.text}
          </Link>
          )}
        {showLogout && <button tw="text-black uppercase hocus:bg-gray-0 py-2 px-4 rounded block w-full font-bold" onClick={logout}>
          Logout
        </button>}
      </div>
    </div>
  )
}

export default DropdownMenu
