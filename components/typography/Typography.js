import Image from "next/image"
import tw from "twin.macro"


export const Display = tw.p`text-36 tablet:text-48 laptop:text-64  font-bold`
export const H1 = tw.h1`text-28 tablet:text-36 laptop:text-48  font-bold mb-11`
export const H2 = tw.h2`text-21 tablet:text-28 laptop:text-36 font-bold`
export const H3 = tw.h3`text-18 tablet:text-21 laptop:text-28  font-bold mb-3`
export const H4 = tw.h4`text-16 tablet:text-18 laptop:text-21  font-bold mb-4.5 uppercase`
export const P = tw.p`text-18`
export const UL = tw.ul`space-y-2 list-disc list-inside`
export const LI = tw.li`text-18`
export const A = tw.a`text-blue hover:text-blue-1`
// export const H2 = ({ children }) => <h2 tw="text-21 tablet:text-28 laptop:text-36 font-heading font-bold">{children}</h2>
// export const H3 = ({ children }) => <h3 className="font-bold text-18 tablet:text-21 laptop:text-28 font-heading">{children}</h3>
// export const H4 = ({ children }) => <h4 className="font-bold text-16 tablet:text-18 laptop:text-21 font-heading">{children}</h4>
export const FooterText = tw.p`text-12 tablet:text-14 laptop:text-16 text-white leading-7!`


export const EggList = tw.ul`list-inside`
export const EggItem = ({ children, ...rest }) => <li tw="text-21 font-bold flex flex-row items-start mb-2"{...rest}>
  <div tw="flex-shrink-0 mr-2">
    <Image src="http://localhost:1337/uploads/Ellipse_4_2e336f54f6.svg" alt="list-item" width="27px" height="33px" objectPosition="bottom" />
  </div>
  {children}
</li>