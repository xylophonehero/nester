import { Button, Link, StrapiImage } from "@/components/general"
import { BurgerMenu } from "assets"
import { Fragment, useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import tw, { styled } from "twin.macro"
import NextLink from "next/link"
import { getId } from "utils"
import header from "data/header.json"
import { Dialog, Transition } from "@headlessui/react"

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

const TransitionWrapper = styled(Transition.Child)(() => [
  tw`w-screen `,
  {
    "&.enter": tw`duration-700 ease-in-out transition-max-height`,
    "&.enterFrom": tw`max-height[60px]`,
    "&.enterTo": tw`max-h-full`,
    "&.leave": tw`duration-700 ease-in-out transition-max-height`,
    "&.leaveFrom": tw`max-h-full`,
    "&.leaveTo": tw`max-height[60px]`,
  }
])

const FakeHeader = styled.div(({ isOpen }) => [
  tw`sticky top-0 flex px-5 laptop:(px-20 h-20) desktop:px-24 items-center bg-purple max-height[60px] desktop:(max-height[80px]) z-50 mr-0`,
  isOpen && tw`margin-right[15px]`,
])

const MobileMenu = () =>
{
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <button tw="desktop:hidden text-white height[60px] width[60px] flex justify-center items-center" onClick={() => setMobileMenuOpen((prev) => !prev)} >
        <BurgerMenu />
      </button>
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog tw="fixed inset-0 overflow-hidden z-50" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
          <div tw="absolute inset-0 overflow-hidden">
            {/* <Dialog.Overlay tw="absolute inset-0" /> */}

            <div tw="fixed inset-y-0 right-0 max-w-full flex">
              <TransitionWrapper
                enter="enter"
                enterFrom="enterFrom"
                enterTo="enterTo"
                leave="leave"
                leaveFrom="leaveFrom"
                leaveTo="leaveTo"
              >
                <div tw="h-full flex flex-col bg-purple shadow-xl ">
                  <FakeHeader isOpen={mobileMenuOpen}>
                    <NextLink href="/" passHref >
                      <a tw="width[140px] cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
                        <StrapiImage image={header.logo} />
                      </a>
                    </NextLink>
                    <div tw="flex-1" />
                    <button tw="desktop:hidden text-white height[60px] width[60px] flex justify-center items-center rotate-90 transform" onClick={() => setMobileMenuOpen((prev) => !prev)} >
                      <BurgerMenu />
                    </button>
                  </FakeHeader>
                  <div tw="my-6 relative flex-1 px-4 overflow-y-auto">
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
