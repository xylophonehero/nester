
import FigureGrid from "@/components/sections/FigureGrid"
import Hero from "@/components/sections/Hero"
import ImageText from "@/components/sections/ImageText"
import CardGrid from "@/components/sections/CardGrid"
import CtaBlock from "@/components/sections/CtaBlock"
// import CardDetailedGrid from "@/components/sections/CardDetailedGrid"
import FigureDetailedGrid from "@/components/sections/FigureDetailedGrid"
import TabbedAccordian from "./sections/TabbedAccordian"
import BlockQuote from "./sections/BlockQuote"
import FinanceCardGrid from "./sections/FinanceCardGrid"
import Table from "./sections/Table"
import CheckCardColumn from "./sections/CheckCardColumn"
import PersonCarousel from "./sections/PersonCarousel"
import Blog from "./sections/Blog"

const DynamicComponent = ({ section, sectionId }) =>
{
  switch (section.__component)
  {
    case "section.hero":
      return <Hero data={section} sectionId={sectionId} />
    case "section.image-text":
      return <ImageText data={section} sectionId={sectionId} />
    case "section.figure-grid":
      return <FigureGrid data={section} sectionId={sectionId} />
    case "section.card-grid":
      return <CardGrid data={section} sectionId={sectionId} />
    case "section.cta-block":
      return <CtaBlock data={section} sectionId={sectionId} />
    case "section.card-detailed-grid":
      return <FigureDetailedGrid data={section} forceLayout="card_detailed" sectionId={sectionId} />
    case "section.figure-detailed-grid":
      return <FigureDetailedGrid data={section} sectionId={sectionId} />
    case "section.tabbed-accordian":
      return <TabbedAccordian data={section} sectionId={sectionId} />
    case "section.block-quote":
      return <BlockQuote data={section} sectionId={sectionId} />
    case "section.finance-card-grid":
      return <FinanceCardGrid data={section} sectionId={sectionId} />
    case "section.table":
      return <Table data={section} sectionId={sectionId} />
    case "section.check-card-column":
      return <CheckCardColumn data={section} sectionId={sectionId} />
    case "section.person-carousel":
      return <PersonCarousel data={section} sectionId={sectionId} />
    case "section.blog":
      return <Blog data={section} sectionId={sectionId} />
    default:
      return <p id={sectionID}>Could not find component for {section.__component}</p>
  }

}

export default DynamicComponent
