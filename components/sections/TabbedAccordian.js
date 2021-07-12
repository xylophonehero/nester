import { useState } from "react"
import tw, { styled } from "twin.macro"
import Container from "../general/Container"
import AccordianItem from "../general/AccordianItem"

const Tab = styled.button(({ isActiveTab }) => [
  tw`relative flex-1 py-5 font-bold text-center uppercase border text-gray-2 text-18`,
  isActiveTab && tw`text-purple after:(content absolute -bottom-1.5 w-full h-2 rounded-full bg-purple left-0)`
])

const TabbedAccordian = ({ data }) =>
{
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <Container tw="max-w-4xl py-32">
      <div tw="flex border-b-2 border-color[#A5A9B9]">
        {data.tabs.map((tab, index) => <Tab key={tab.id} isActiveTab={tabIndex === index} onClick={() => setTabIndex(index)}>
          {tab.tab}
        </Tab>)}
      </div>
      <div tw="space-y-8 my-8">
        {data.tabs[tabIndex].items.map((item) => <AccordianItem key={item.id} item={item} />)}
      </div>
    </Container>
  )
}

export default TabbedAccordian
