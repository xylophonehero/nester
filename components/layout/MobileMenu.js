import { Button, Link } from "@/components/general"
import { BurgerMenu } from "assets"
import { Fragment, useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import tw, { styled } from "twin.macro"
import { getId } from "utils"
import header from "data/header.json"

const Wrapper = styled.div(({ open }) => [
  tw`fixed inset-x-0 overflow-hidden top[60px] bg-purple h-full transition-max-height duration-500`,
  open && tw`max-height[calc(100vh - 60px)]`,
  !open && tw`max-h-0`,
])

const TextWrapper = styled.div(({ open }) => [
  // space-y-11?
  tw`flex flex-col items-center justify-center h-full space-y-6 font-bold text-white uppercase transition-opacity duration-500 desktop:text-18 text-16`,
  open && tw`opacity-100`,
  !open && tw`opacity-0`,
])

const MobileMenu = () =>
{
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <button tw="desktop:hidden text-white height[60px] width[60px] flex justify-center items-center" onClick={() => setMobileMenuOpen((prev) => !prev)} >
        <BurgerMenu />
      </button>
      <Wrapper open={mobileMenuOpen}>
        <TextWrapper open={mobileMenuOpen}>
          {header.menu.map((item) =>
          {
            switch (item.__component)
            {
              case "misc.dropdown":
                return <Fragment key={getId(item)}>
                  <p tw="flex">
                    {item.dropdown_text} <span tw="ml-2"><FaChevronDown /></span>
                  </p>

                  {item.links.map((link) => <p tw="" key={getId(link)}>
                    <Link link={link.link} onClick={() => setMobileMenuOpen(false)} >
                      {link.text}
                    </Link>
                  </p>)}

                </Fragment>
              case "atoms.text-link":
                return <div tw="" key={getId(item)}>
                  <Link link={item.link} onClick={() => setMobileMenuOpen(false)}>
                    {item.text}
                  </Link>
                </div>
              case "atoms.button":
                return <Button key={getId(item)} button={{ ...item }} tw="px-16" />
              default:
                return null
            }
          })}
        </TextWrapper>
      </Wrapper>
    </>
  )
}

export default MobileMenu
