import { useEffect, useState } from "react"
import "twin.macro"
import { AccordianItem, Container, Tabs } from "@/components/general"

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
