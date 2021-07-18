import { Menu } from "@headlessui/react"
import { Fragment, useState } from "react"
import { BsChevronDown } from "react-icons/bs"
import { FaCheckCircle } from "react-icons/fa"
import tw, { styled } from "twin.macro"
import Container from "../general/Container"
import { H2 } from "../typography/Typography"

const formatTable = (table) =>
{
  let currentCat = { title: "none", rows: [] }
  const newTable = table.reduce((a, c) =>
  {
    switch (c.type)
    {
      case "head":
        break
      case "category":
        a.push(currentCat)
        currentCat = { title: c.category, rows: [] }
        break
      case "":
        currentCat.rows.push(c)
    }
    return a
  }, [])
  newTable.push(currentCat)
  return newTable
}

const MenuItem = styled.div(({ active }) => [
  tw`px-2 py-8 cursor-pointer`,
  active && tw` (bg-purple-shade)`
])

const Table = ({ data, sectionId }) =>
{
  const tableBody = formatTable(data.table)

  const [currentColIndex, setCurrentColIndex] = useState(1)


  return (
    <Container data={data} tw="py-32" sectionId={sectionId}>
      <div tw=" my-12 overflow-x-auto mx-auto">
        <table tw="hidden laptop:block width[1100px] mx-auto my-4">
          <thead tw="border-gray-0 border-2">
            <td tw="width[350px]" />
            {[1, 2, 3].map((colIndex) => <td tw="whitespace-pre-line width[250px] text-purple text-21 py-8 font-bold text-center" key={`table_head-${colIndex}`}>
              {data.table[0][colIndex]}
            </td>)}
          </thead>
          {tableBody.map((category, rowIndex) => <tbody key={category.title} tw="border-2 border-gray-0">
            {category.title !== "none" ? <tr tw="col-span-4 text-28 font-bold">
              <th tw="text-left py-4 text-purple pl-4">{category.title}</th>
            </tr> : <tr />}
            {category.rows.map((row) => <tr key={row.category} tw="text-18 even:bg-gray-0">
              <th tw="text-left py-5 pl-4">{row.category}</th>
              {[1, 2, 3].map((colIndex) => <td tw="text-center" key={`table:${rowIndex}-${colIndex}`}>
                {row[colIndex] === "TRUE" ?
                  <FaCheckCircle tw="h-10 w-10 text-blue mx-auto" />
                  :
                  row[colIndex]}
              </td>)}
            </tr>)}
          </tbody>)}
        </table>
      </div>
      <table tw="laptop:hidden mx-auto my-16 w-full relative">
        <thead tw="sticky top[60px] border-gray-0 border-2">
          <Menu>
            <td tw="laptop:whitespace-pre-line text-purple text-21  text-center font-bold bg-white">
              <Menu.Button tw="font-bold h-full w-full py-8 flex items-center justify-center px-4">
                <div tw="flex-1" />
                <div tw="flex-grow-0">{data.table[0][currentColIndex]}</div>
                <div tw="flex-1 pl-2">
                  <BsChevronDown tw="text-36 text-black" />
                </div>
              </Menu.Button>
              <Menu.Items tw="absolute top-full w-full bg-white shadow-light-card outline-none">
                {[1, 2, 3].map((index) => <Menu.Item key={index} >
                  {({ active }) =>
                    <MenuItem active={active} onClick={() => setCurrentColIndex(index)}>{data.table[0][index]}</MenuItem>
                  }
                </Menu.Item>)}
              </Menu.Items>
            </td>
          </Menu>
          {/* <th tw="whitespace-pre-line width[250px] text-purple text-21 py-8 text-center font-bold bg-white">
            {data.table[0][currentColIndex]}
          </th> */}
        </thead>
        {tableBody.map((category, rowIndex) => <tbody key={category.title} tw="border-gray-0 border-2">
          {category.title !== "none" ? <tr tw="text-21 font-bold">
            <th tw="text-center pb-4 text-purple pt-8">{category.title}</th>
          </tr> : <tr />}
          {category.rows.map((row) => <tr key={row.category} tw="text-16 tablet:text-18 even:bg-gray-0 min-height[80px]">
            <td tw="text-center flex flex-col tablet:(flex-row max-width[450px] justify-between items-center mx-auto) py-5" key={`table:${rowIndex}-${currentColIndex}`}>
              <p tw="mb-4 tablet:mb-0 font-bold">{row.category}</p>
              <p tw="tablet:(min-width[40px] text-center)">
                {row[currentColIndex] === "TRUE" ?
                  <FaCheckCircle tw="h-10 w-10 text-blue mx-auto" />
                  :
                  row[currentColIndex]}
              </p>
            </td>
          </tr>)}
        </tbody>)}
      </table>
      <H2 tw="text-center mb-12">{data.prebutton_text}</H2>

    </Container>
  )
}

export default Table
