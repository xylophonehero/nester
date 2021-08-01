import "twin.macro"
import { Body, Display, H2, H3, H4 } from "../typography"

const gridItems = [
  { text: "No. of Financing Arrangements", number: 1 },
  { text: "No. of defaults (Beyond 180 days)", number: 0 },
  { text: "Profit Arrears (Beyond 90 days)", number: 0 },
  { text: "No. of current defaults", number: 0 },
  { text: "Financings Arrangements repaid", number: 0 },
  { text: "Amount of Loss incurred by Investors", number: 0 },
]

const scoreItems = [
  { letter: "A", score1: "1.5%", score2: "1.2.3" },
  { letter: "B", score1: "1.5%", score2: "1.2.3" },
  { letter: "C", score1: "1.5%", score2: "1.2.3" },
]

const GridItem = ({ item }) => <div tw="flex space-x-8 items-center justify-between max-width[450px]">
  <H4 tw="mb-0 normal-case">{item.text}</H4>
  <H3 tw="text-purple mx-auto mb-0 text-center w-8">{item.number}</H3>
</div>

const ScoreItem = ({ item }) => <div tw="flex items-center justify-between laptop:max-width[300px]">
  <H3 tw="mb-0">Score</H3>
  <Display tw="text-purple">{item.letter}</Display>
  <div>
    <H3>{item.score1}</H3>
    <H3>{item.score2}</H3>
  </div>
</div>

const Stats = () => <>
  <div tw="bg-purple text-white w-full py-8 px-4 tablet:px-6">
    <div tw="max-w-6xl flex flex-col items-center space-y-8 text-center laptop:(flex-row text-left justify-between space-y-0) w-full mx-auto">
      <div>
        <H3 tw="normal-case font-bold mb-0 laptop:whitespace-pre-line">{"Average Finance to Value \n to Date"}</H3>
      </div>
      <div>
        <H3 tw="normal-case font-bold mb-2">£850,000</H3>
        <Body tw="laptop:whitespace-pre-line">{"Value of Properties \n Funded"}</Body>
      </div>
      <div>
        <H3 tw="normal-case font-bold mb-2">£431,00</H3>
        <Body tw="laptop:whitespace-pre-line">{"Total Financing \n Arrangements"}</Body>
      </div>
    </div>
  </div>
  <div tw="my-32 px-4 tablet:px-6">
    <div tw="max-w-6xl w-full mx-auto">
      <div tw="mb-24">
        <H2 tw="text-purple mb-8">2021</H2>
        <H3 tw="text-purple mb-8">Other actual performance data to consider</H3>
        <div tw="grid grid-cols-1 tablet:grid-cols-2 gap-8">
          {gridItems.map((item) => <GridItem key={item.text} item={item} />)}
        </div>
      </div>
      <div>
        <H3 tw="text-purple mb-8">Expected FCA default rates by Risk Scoring category</H3>
        <div tw="grid grid-cols-1 laptop:grid-cols-3 gap-8">
          {scoreItems.map((item) => <ScoreItem key={item.letter} item={item} />)}
        </div>
      </div>
    </div>
  </div>
</>

export default Stats