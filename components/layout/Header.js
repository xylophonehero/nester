import "twin.macro"
import StrapiImage from "@/components/general/StrapiImage"
import header from "../../public/header.json"
import { getId } from "utils/getId"
import Link from "@/components/general/Link"
import NextLink from "next/link"
import Button from "@/components/general/Button"
import { FaHamburger } from "react-icons/fa"
import { BurgerMenu } from "assets/BurgerMenu"

const Header = () =>
{
  return (
    <div tw="sticky top-0 flex px-5 laptop:(px-30 h-20) items-center bg-purple height[60px] shadow-header z-30">
      <NextLink href="/">
        <a tw="width[140px] cursor-pointer">
          <StrapiImage image={header.logo} />
        </a>
      </NextLink>
      <div tw="flex-1" />
      <nav tw="hidden laptop:flex flex-row space-x-10 items-center">
        {header.menu.map((item) =>
        {
          switch (item.__component)
          {
            case "misc.dropdown":
              return <div key={getId(item)}>
                <p tw="text-white font-bold uppercase">{item.dropdown_text}</p>
              </div>
            case "atoms.text-link":
              return <div tw="text-white font-bold uppercase" key={getId(item)}>
                <Link link={item.link}>
                  {item.text}
                </Link>
              </div>
            case "atoms.button":
              return <Button key={getId(item)} button={{ ...item }} tw="px-16" />
            default:
              return null
          }
        })}
      </nav>
      <button tw="laptop:hidden text-white height[60px] width[60px] flex justify-center items-center ">
        <BurgerMenu />
      </button>
    </div>
  )
}

export default Header
