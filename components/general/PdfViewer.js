import React from 'react'
import { PDFViewer } from "@react-pdf/renderer"
import MyDocument from './Document'
import "twin.macro"

const PdfViewer = ({ months }) =>
{
  return (
    <PDFViewer tw="w-full h-screen">
      <MyDocument months={months} />
    </PDFViewer>
  )
}

export default PdfViewer
