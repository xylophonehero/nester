import { useEffect, useState } from "react"
import tw, { styled } from "twin.macro"
import Container from "../general/Container"
import AccordianItem from "../general/AccordianItem"
import Tabs from "../general/Tabs"

const Tab = styled.button(({ isActiveTab }) => [
  tw`relative flex-1 py-5 font-bold text-center uppercase border text-gray-2 text-18`,
  isActiveTab && tw`text-purple after:(content absolute -bottom-1.5 w-full h-2 rounded-full bg-purple left-0)`
])

const TabbedAccordian = ({ data, sectionId }) =>
{
  const [tabIndex, setTabIndex] = useState(0)
  const [accordianIndex, setAccordianIndex] = useState(-1)

  useEffect(() =>
  {
    setAccordianIndex(-1)
  }, [tabIndex])

  return (
    <Container tw="max-w-4xl py-32" sectionId={sectionId}>
      <Tabs tabs={data.tabs} tabIndex={tabIndex} setTabIndex={setTabIndex} />
      <div tw="space-y-8">
        {data.tabs[tabIndex].items.map((item, index) => <AccordianItem
          key={item.id}
          item={item}
          isOpen={accordianIndex === index}
          open={() => setAccordianIndex(index)}
          close={() => setAccordianIndex(-1)}
        />)}
      </div>
    </Container>
  )
}

export default TabbedAccordian
