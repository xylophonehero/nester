
import FigureGrid from "@/components/sections/FigureGrid"
import Hero from "@/components/sections/Hero"
import ImageText from "@/components/sections/ImageText"
import CardGrid from "@/components/sections/CardGrid"
import CtaBlock from "@/components/sections/CtaBlock"
import CardDetailedGrid from "@/components/sections/CardDetailedGrid"
import FigureDetailedGrid from "@/components/sections/FigureDetailedGrid"
import TabbedAccordian from "./sections/TabbedAccordian"
import BlockQuote from "./sections/BlockQuote"
import FinanceCardGrid from "./sections/FinanceCardGrid"
import Table from "./sections/Table"
import CheckCardColumn from "./sections/CheckCardColumn"
import PersonCarousel from "./sections/PersonCarousel"
import Blog from "./sections/Blog"

const DynamicComponent = ({ section }) =>
{
  switch (section.__component)
  {
    case "section.hero":
      return <Hero data={section} />
    case "section.image-text":
      return <ImageText data={section} />
    case "section.figure-grid":
      return <FigureGrid data={section} />
    case "section.card-grid":
      return <CardGrid data={section} />
    case "section.cta-block":
      return <CtaBlock data={section} />
    case "section.card-detailed-grid":
      return <CardDetailedGrid data={section} />
    case "section.figure-detailed-grid":
      return <FigureDetailedGrid data={section} />
    case "section.tabbed-accordian":
      return <TabbedAccordian data={section} />
    case "section.block-quote":
      return <BlockQuote data={section} />
    case "section.finance-card-grid":
      return <FinanceCardGrid data={section} />
    case "section.table":
      return <Table data={section} />
    case "section.check-card-column":
      return <CheckCardColumn data={section} />
    case "section.person-carousel":
      return <PersonCarousel data={section} />
    case "section.blog":
      return <Blog data={section} />
    default:
      return <p>Could not find component for {section.__component}</p>
  }

}

export default DynamicComponent
