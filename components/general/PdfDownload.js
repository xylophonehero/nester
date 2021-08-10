import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
// import PdfViewer from './PdfViewer'
import { useState } from 'react'
import MyDocument from './Document'
import "twin.macro"
import { StyledButton } from './Button'

const PdfDownload = () =>
{
  const [isValid, setIsValid] = useState(false)
  const [months, setMonths] = useState({ startMonth: "", endMonth: "" })
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (e) =>
  {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formMonths = {
      startMonth: formData.get("startMonth"),
      endMonth: formData.get("endMonth"),
    }
    if (!formMonths.startMonth || !formMonths.endMonth)
    {
      setErrorMessage("Please pick both a start month and an end month")
      setIsValid(false)
    }
    else if (formMonths.startMonth > formMonths.endMonth)
    {
      setErrorMessage("Please pick an end month after the start month")
      setIsValid(false)
    } else
    {
      // Run async function to get data from API. On complete setIsValid(true) adn setData(ApiResponse)
      setErrorMessage("")
      setMonths(formMonths)
      setIsValid(true)
    }
  }

  return (
    <>
      <form tw="space-y-4 mb-8 w-full flex flex-col items-center max-width[300px] bg-gray-0 rounded-2xl p-4 shadow" onSubmit={handleSubmit}>
        <div tw="w-full">
          <label htmlFor="startMonth" tw="block text-14 font-medium text-gray-4 mb-1">
            Start date
          </label>
          <input
            type="month"
            name="startMonth"
            id="startMonth"
            tw="block w-full border-gray-2 rounded-md p-1"
          />
        </div>
        <div tw="w-full">
          <label htmlFor="endMonth" tw="block text-14 font-medium text-gray-4 mb-1">
            End date
          </label>
          <input
            type="month"
            name="endMonth"
            id="endMonth"
            tw="block w-full border-gray-2 rounded-md p-1"
          />
        </div>
        {errorMessage && <div tw="text-red-500">
          {errorMessage}
        </div>}
        <button type="submit" tw="mx-auto">
          <StyledButton size="small" color="purple_white" fit>
            Submit
          </StyledButton>
        </button>
      </form>
      {isValid && <PDFDownloadLink document={<MyDocument months={months} />} fileName="statement.pdf">
        {({ blob, url, loading, error }) =>
          <StyledButton size="medium" color="purple_white" fit>
            {loading ? 'Loading document...' : 'Download now!'}
          </StyledButton>
        }
      </PDFDownloadLink>}
    </>
  )
}

export default PdfDownload
