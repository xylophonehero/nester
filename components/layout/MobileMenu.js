import { Button, Link } from "@/components/general"
import { BurgerMenu } from "assets"
import { Fragment, useEffect, useRef, useState } from "react"
import tw, { styled } from "twin.macro"
import NextLink from "next/link"
import { getId } from "utils"
import header from "../../public/header.json"
import { Dialog, Transition } from "@headlessui/react"
import MobileDropdown from "./MobileDropdown"

const Wrapper = styled.div(({ open }) => [
  tw`fixed inset-x-0 overflow-hidden top[60px] bg-purple h-full transition-max-height duration-500`,
  open && tw`max-height[calc(100vh - 60px)]`,
  !open && tw`max-h-0`,
])

const TextWrapper = styled.div(({ open }) => [
  // space-y-11?
  tw`flex flex-col opacity-0 items-center justify-center h-full space-y-8 font-bold text-white uppercase (transition-opacity duration-500) desktop:text-18 text-16`,
  open && tw`opacity-100`,
])

const TransitionWrapper = styled(Transition.Child)(() => [
  tw`w-screen overflow-y-hidden`,
  {
    "&.enter": tw`(transition-max-height duration-500 ease-in-out)`,
    "&.enterFrom": tw`max-h-0`,
    "&.enterTo": tw`max-h-full`,
    "&.leave": tw`(transition-max-height duration-500 ease-in-out)`,
    "&.leaveFrom": tw`max-h-full`,
    "&.leaveTo": tw`max-h-0`,
  }
])

const FakeHeader = styled.div(({ isOpen }) => [
  tw`sticky top-0 flex px-5 laptop:(px-20) desktop:px-24 items-center py-0 bg-transparent h-20 max-height[60px] desktop:(max-height[80px]) z-50 mr-0`,
  isOpen && tw`border-right[solid] border-purple`,
])

const OpenMenuButton = styled.button(({ isOpen }) => [
  tw`desktop:hidden text-white height[60px] width[60px] flex justify-center items-center transform (transition-transform duration-500)`,
  isOpen && tw`-rotate-90`
])


const MobileMenu = () => {
  let scrollWidth = 0
  if (typeof window !== "undefined") scrollWidth = window.innerWidth - document.body.offsetWidth
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenuIndex, setActiveMenuIndex] = useState(-1)
  const initialRef = useRef(null)
  useEffect(() => {
    if (!mobileMenuOpen) setActiveMenuIndex(-1)
  }, [mobileMenuOpen])
  return (
    <>
      <OpenMenuButton isOpen={mobileMenuOpen} onClick={() => setMobileMenuOpen((prev) => !prev)} >
        <BurgerMenu />
      </OpenMenuButton>
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog initialFocus={initialRef} tw="fixed inset-0 overflow-hidden z-50" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
          <div tw="absolute inset-0 overflow-hidden">
            {/* <Dialog.Overlay tw="absolute inset-0" /> */}
            <FakeHeader isOpen={mobileMenuOpen} style={{ borderRightWidth: `${mobileMenuOpen ? scrollWidth : 0}px` }}>
              <NextLink href="/" passHref >
                <a tw="width[140px] h-full cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
                  {/* <StrapiImage image={header.logo} /> */}
                </a>
              </NextLink>
              <div tw="flex-1" />
              <button ref={initialRef} tw="desktop:hidden text-white height[60px] width[60px] flex justify-center items-center rotate-90 transform" onClick={() => setMobileMenuOpen((prev) => !prev)} >
                {/* <BurgerMenu /> */}
              </button>
            </FakeHeader>

            <div tw="fixed inset-x-0 bottom-0 top[60px] desktop:top-20 max-w-full flex">
              <TransitionWrapper
                enter="enter"
                enterFrom="enterFrom"
                enterTo="enterTo"
                leave="leave"
                leaveFrom="leaveFrom"
                leaveTo="leaveTo"
              >
                <div tw="h-full flex flex-col bg-purple shadow-xl ">
                  <div tw="my-6 relative flex-1 px-4">
                    <TextWrapper open={mobileMenuOpen}>
                      {header.menu.map((item, index) => {
                        switch (item.__component) {
                          case "misc.dropdown":
                            return <MobileDropdown
                              key={getId(item)}
                              item={item}
                              open={index === activeMenuIndex}
                              clickHandler={() => setActiveMenuIndex(index === activeMenuIndex ? -1 : index)}
                              closeMenu={() => setMobileMenuOpen(false)}
                            />
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
                  </div>
                </div>
              </TransitionWrapper>
            </div>
          </div>
        </Dialog>
      </Transition.Root>


      {/* <Wrapper open={mobileMenuOpen}>
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
      </Wrapper> */}
    </>
  )
}

export default MobileMenu
