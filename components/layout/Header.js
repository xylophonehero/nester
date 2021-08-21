import tw, { styled } from "twin.macro"
import { StrapiImage, Link, Button } from "@/components/general"
import header from "../../public/header.json"
import { getId } from "utils"
import NextLink from "next/link"
import { FaChevronDown, FaUserAlt } from "react-icons/fa"
import { MobileMenu, DropdownMenu } from "@/components/layout"
import { useUserContext } from "context"
import { useRouter } from "next/router"

const userLinks = [
  { text: "Dashboard", link: { type: "internal", url: "/dashboard" }, showFor: "Investor,Borrower" },
  { text: "My profile", link: { type: "internal", url: "/profile" }, showFor: "Investor,Borrower" },
  { text: "My transactions", link: { type: "internal", url: "/transactions" }, showFor: "Investor" },
  { text: "Financings", link: { type: "internal", url: "/financings" }, showFor: "Borrower,Introducer" },
  { text: "Change password", link: { type: "internal", url: "/changepassword" }, showFor: "Investor,Borrower,Introducer,BasicInvestor,BasicBorrower,BasicIntroducer" },
]

const DropdownMenuWrapper = styled.div(() => [
  tw`relative flex items-center h-full px-5`,
  {
    ":focus-within .hover-wrapper": tw`visible`,
    ":focus-within .hover-menu": tw`scale-100 opacity-100`,
    ":focus-within .hover-tab": tw`rotate-180!`,
  }
])

const DropdownMenuText = styled.p(({ active }) => [
  tw`flex font-bold text-white uppercase cursor-default desktop:text-18 text-16 focus:outline-none`,
  active && tw`text-blue-2`
])

const Header = () =>
{
  const { user } = useUserContext()
  const { asPath: currentPath } = useRouter()
  return (
    <div tw="sticky top-0 flex px-5 laptop:(px-20 h-20) desktop:px-24 items-center bg-purple max-height[60px] desktop:(max-height[80px]) shadow-header z-50">
      <NextLink href="/" passHref>
        <a tw="width[140px] cursor-pointer">
          <StrapiImage image={header.logo} />
        </a>
      </NextLink>
      <div tw="flex-1" />
      <nav tw="hidden desktop:flex flex-row items-center h-full">
        <NextLink href="/about">About</NextLink>
        <NextLink href="/test">Test</NextLink>
        {header.menu.map((item) =>
        {
          switch (item.__component)
          {
            case "misc.dropdown":
              if (user && !item.types_allowed.includes(user.type) && item.types_allowed !== "All") return null
              return <DropdownMenuWrapper className="group" key={getId(item)}>
                <DropdownMenuText tabIndex={0} active={item.links.some((link) => link.link.url === currentPath)}>
                  {item.dropdown_text} <span className="hover-tab" tw="ml-2 text-white group-hover:rotate-180 transform transition-transform duration-300"><FaChevronDown /></span>
                </DropdownMenuText>
                <DropdownMenu links={item.links} />
              </DropdownMenuWrapper>
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
          <DropdownMenu links={userLinks} showLogout />
        </div>}
      </nav>

      <MobileMenu />
    </div>
  )
}

export default Header
