import React from 'react'
import tw, { styled } from "twin.macro"

const Tab = styled.button(({ isActiveTab }) => [
  tw`relative flex-1 py-5 font-bold text-center uppercase border text-gray-2 text-18`,
  isActiveTab && tw`text-purple after:(content absolute -bottom-1.5 w-full h-2 rounded-full bg-purple left-0)`
])

const Tabs = ({ tabs, tabIndex, setTabIndex }) =>
{
  return (
    <div tw="flex border-b-2 border-color[#A5A9B9] max-w-5xl mx-auto mb-12">
      {tabs.map((tab, index) => <Tab key={tab.id} isActiveTab={tabIndex === index} onClick={() => setTabIndex(index)}>
        {tab.tab || tab.name}
      </Tab>)}
    </div>
  )
}

export default Tabs
