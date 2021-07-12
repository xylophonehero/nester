import { FaCheckCircle } from "react-icons/fa"
import "twin.macro"
import Container from "../general/Container"
import { H2 } from "../typography/Typography"

const Table = ({ data }) =>
{
  return (
    <Container data={data} tw="py-32">
      <table tw="mx-auto my-16 overflow-x-auto width[1100px] shadow-light-card">
        <thead>
          <td tw="width[350px]" />
          {[1, 2, 3].map((col_index) => <th tw="whitespace-pre-line width[250px] text-purple text-21 py-4" key={`table_head-${col_index}`}>
            {data.table[0][col_index]}
          </th>)}
        </thead>
        <tbody>
          {data.table.slice(1).map((row, row_index) =>
          {
            if (row.type === "category") return <tr tw="col-span-4 text-28 font-bold" key={row.category}>
              <th tw="text-left py-4 text-purple pl-4">{row.category}</th>
            </tr>
            return <tr key={row.category} tw="text-18 odd:bg-gray-0">
              <th tw="text-left py-5 pl-4">{row.category}</th>
              {[1, 2, 3].map((col_index) => <td tw="text-center" key={`table:${row_index}-${row.col_index}`}>
                {row[col_index] === "TRUE" ?
                  <FaCheckCircle tw="h-10 w-10 text-blue mx-auto" />
                  :
                  row[col_index]}
              </td>)}
            </tr>
          })}
        </tbody>
      </table>
      <H2 tw="text-center mb-12">{data.prebutton_text}</H2>

    </Container>
  )
}

export default Table
