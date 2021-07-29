import { EggBlue } from "assets/EggBlue"
import { EggPurple } from "assets/EggPurple"
import tw from "twin.macro"


export const Display = tw.p`text-32 tablet:text-48 desktop:text-64  font-bold`
export const H1 = tw.h1`text-28 tablet:text-36 desktop:text-48  font-bold mb-11`
export const H2 = tw.h2`text-21 tablet:text-28 desktop:text-36 font-bold`
export const H3 = tw.h3`text-18 tablet:text-21 desktop:text-28  font-bold mb-3`
export const H4 = tw.h4`text-16 tablet:text-18 desktop:text-21  font-bold mb-4.5 uppercase`
export const Body = tw.p`text-16 tablet:text-18 desktop:text-21`
export const P = tw.p`text-18`
export const UL = tw.ul`space-y-6 list-disc pl-6`
export const LI = tw.li`text-18`
export const OL = tw.ol`list-outside ml-12 my-4 space-y-3`
export const A = tw.a`text-blue hover:text-blue-1 cursor-pointer`
// export const H2 = ({ children }) => <h2 tw="text-21 tablet:text-28 laptop:text-36 font-heading font-bold">{children}</h2>
// export const H3 = ({ children }) => <h3 className="font-bold text-18 tablet:text-21 laptop:text-28 font-heading">{children}</h3>
// export const H4 = ({ children }) => <h4 className="font-bold text-16 tablet:text-18 laptop:text-21 font-heading">{children}</h4>
export const FooterText = tw.p`text-12 tablet:text-14 laptop:text-16 text-white leading-7!`


export const EggList = tw.ul`list-inside`
export const EggItem = ({ children, color = "purple", ...rest }) => <li tw="text-16 tablet:text-21 font-bold flex flex-row items-start mb-6"{...rest}>
  <div tw="flex-shrink-0 mr-2">
    {color.includes("blue") ? <EggBlue /> : <EggPurple />}
  </div>
  {children}
</li>