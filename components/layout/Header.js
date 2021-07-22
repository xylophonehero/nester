import "twin.macro"
import StrapiImage from "@/components/general/StrapiImage"
import header from "../../public/header.json"
import { getId } from "utils/getId"
import Link from "@/components/general/Link"
import NextLink from "next/link"
import Button from "@/components/general/Button"
import { FaChevronDown } from "react-icons/fa"
import { BurgerMenu } from "assets/BurgerMenu"
import { useState } from "react"
import MobileMenu from "./MobileMenu"
import { useUserContext } from "context/UserContext"

const Header = () =>
{
  const handleClick = () =>
  {
    const win = document.getElementById("ifr").contentWindow
    win.postMessage("getUser", "http://localhost:3000")
  }
  const { user } = useUserContext()

  return (
    <div tw="sticky top-0 flex px-5 laptop:(px-30 h-20) items-center bg-purple max-height[60px] desktop:(max-height[80px]) shadow-header z-30">
      <NextLink href="/">
        <a tw="width[140px] cursor-pointer">
          <StrapiImage image={header.logo} />
        </a>
      </NextLink>
      <div tw="flex-1" />
      <button onClick={handleClick}>Test</button>
      <nav tw="hidden laptop:flex flex-row items-center h-full">
        {header.menu.map((item) =>
        {
          switch (item.__component)
          {
            case "misc.dropdown":
              return <div className="group" tw="px-5 h-full flex items-center relative" key={getId(item)}>
                <p tw="text-white font-bold uppercase desktop:text-18 text-16 flex">
                  {item.dropdown_text} <span tw="ml-2"><FaChevronDown /></span>
                </p>
                <div tw="absolute top-full right-0 hidden pt-2 group-hocus:block">
                  <ul tw="shadow-light-card bg-white rounded text-center p-5 font-bold space-y-5">
                    {item.links.map((link) => <li tw="text-black uppercase" key={getId(link)}>
                      <Link link={link.link}>{link.text}</Link>
                    </li>)}
                  </ul>
                </div>
              </div>
            case "atoms.text-link":
              return <div tw="text-white font-bold uppercase desktop:text-18 text-16 px-5" key={getId(item)}>
                <Link link={item.link}>
                  {item.text}
                </Link>
              </div>
            case "atoms.button":
              if (!user) return <Button key={getId(item)} button={{ ...item }} size="tiny" tw="px-16" />
              return <p key={getId(item)}>
                An {JSON.parse(user).type} is logged in
              </p>
            default:
              return null
          }
        })}
      </nav>

      <MobileMenu />
    </div>
  )
}

export default Header
