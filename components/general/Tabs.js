import { Menu } from '@headlessui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import tw, { styled } from "twin.macro"

const Tab = styled.button(({ isActiveTab }) => [
  tw`relative flex-1 py-5 font-bold text-center uppercase text-gray-2 text-18`,
  isActiveTab && tw`text-purple after:(content absolute -bottom-1.5 w-full h-2 rounded-full bg-purple left-0)`
])

const MenuItem = styled.div(({ active }) => [
  tw`px-10 py-4 cursor-pointer`,
  active && tw`bg-purple-shade`,
])

const Tabs = ({ tabs, tabIndex, setTabIndex }) =>
{
  return (
    <>
      <div tw="hidden laptop:flex border-b-2 border-color[#A5A9B9] max-w-5xl mx-auto mb-12">
        {tabs.map((tab, index) => <Tab
          key={tab.id}
          tabIndex={tabIndex === index ? -1 : 0}
          isActiveTab={tabIndex === index}
          onClick={() => setTabIndex(index)}
        >
          {tab.name || tab.tag.name}
        </Tab>)}
      </div>
      <div tw="laptop:hidden relative z-10 ">
        <Menu>
          <Menu.Button tw="bg-gray-0 flex items-center justify-between px-10 rounded-3.5xl py-7 w-full mb-12">
            <span tw="font-bold text-purple text-16 uppercase">{tabs[tabIndex].name || tabs[tabIndex].tag.name}</span>
            <BsChevronDown tw="text-21" />
          </Menu.Button>
          <Menu.Items tw="absolute top-full w-full shadow-light-card bg-white text-purple font-bold mt-2 rounded-2xl overflow-hidden uppercase">
            {tabs.map((tab, index) => <Menu.Item key={tab.id}>
              {({ active }) => <MenuItem active={active} onClick={() => setTabIndex(index)}>
                {tab.name || tab.tag.name}
              </MenuItem>}
            </Menu.Item>)}
          </Menu.Items>
        </Menu>
      </div>
    </>
  )
}

export default Tabs
