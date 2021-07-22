import "twin.macro"
import StrapiImage from "@/components/general/StrapiImage"
import header from "../../public/header.json"
import { getId } from "utils/getId"
import Link from "@/components/general/Link"
import NextLink from "next/link"
import Button from "@/components/general/Button"
import { FaChevronDown, FaUserAlt } from "react-icons/fa"
// import { BurgerMenu } from "assets/BurgerMenu"
import { useState } from "react"
import MobileMenu from "./MobileMenu"
import { useUserContext } from "context/UserContext"
import DropdownMenu from "./DropdownMenu"

const userLinks = [
  { text: "Dashboard", link: { type: "internal", url: "/dashboard" }, showFor: "Investor,Borrower" },
  { text: "My profile", link: { type: "internal", url: "/profile" }, showFor: "Investor,Borrower" },
  { text: "My transactions", link: { type: "internal", url: "/transactions" }, showFor: "Investor" },
  { text: "Financings", link: { type: "internal", url: "/financings" }, showFor: "Borrower" },
  { text: "Change password", link: { type: "internal", url: "/changepassword" }, showFor: "Investor,Borrower,Basic" },
  { text: "Logout", link: { type: "internal", url: "/" }, showFor: "Investor,Borrower,Basic" },
]

const Header = () =>
{
  const handleClick = () =>
  {
    const win = document.getElementById("ifr").contentWindow
    win.postMessage("getUser", "http://localhost:3000")
  }
  const { user } = useUserContext()
  console.log({ user })
  return (
    <div tw="sticky top-0 flex px-5 laptop:(px-20 h-20) desktop:px-30 items-center bg-purple max-height[60px] desktop:(max-height[80px]) shadow-header z-30">
      <NextLink href="/">
        <a tw="width[140px] cursor-pointer">
          <StrapiImage image={header.logo} />
        </a>
      </NextLink>
      <div tw="flex-1" />
      {/* <button onClick={handleClick}>Test</button> */}
      <nav tw="hidden laptop:flex flex-row items-center h-full">
        {header.menu.map((item) =>
        {
          switch (item.__component)
          {
            case "misc.dropdown":
              if (user && !["All", user.type].includes(item.types_allowed)) return null
              return <div className="group" tw="px-5 h-full flex items-center relative" key={getId(item)}>
                <p tw="text-white font-bold uppercase desktop:text-18 text-16 flex cursor-default">
                  {item.dropdown_text} <span tw="ml-2"><FaChevronDown /></span>
                </p>
                <DropdownMenu links={item.links} />
              </div>
            case "atoms.text-link":
              return <div tw="text-white font-bold uppercase desktop:text-18 text-16 px-5" key={getId(item)}>
                <Link link={item.link}>
                  {item.text}
                </Link>
              </div>
            case "atoms.button":
              if (!user) return <Button key={getId(item)} button={{ ...item }} size="tiny" tw="px-16" />
            default:
              return null
          }
        })}
        {user && <div className="group" tw="px-5 h-full flex items-center relative">
          <p tw="text-white font-bold uppercase desktop:text-18 text-16 flex">
            <FaUserAlt />
          </p>
          <DropdownMenu links={userLinks} />
        </div>}
      </nav>

      <MobileMenu />
    </div>
  )
}

export default Header
