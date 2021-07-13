import { useState } from "react"
import Flickity from "react-flickity-component"
import tw, { styled, theme } from "twin.macro"
import Container from "../general/Container"
import Person from "../misc/Person"

const Wrapper = styled.div({
  ...tw`my-12`,
  ".flickity-button": tw`height[50px] width[50px] bg-gray-0 rounded-full text-purple top[150px] absolute z-20 mx-4 tablet:mx-8 laptop:mx-16`,
})


const PersonCarousel = ({ data }) =>
{
  const [openIndex, setOpenIndex] = useState(-1)
  return (
    <Container data={data} tw="my-16" removeMargin>
      <Wrapper tw="my-12 relative">
        <Flickity

          options={{
            draggable: false,
            pageDots: false,
            cellAlign: "center",
            groupCells: "75%",
            // arrowShape: "M23.5 9L0.999999 9M0.999999 9L9 17M0.999999 9L9 1",
          }}
        >
          {data.people.map((person, index) => <Person
            key={person.id}
            person={person}
            open={index === openIndex}
            setOpen={() => setOpenIndex(index)}
            close={() => setOpenIndex(-1)}
          />)}
        </Flickity>
        <div tw="absolute right-0 top-0 bottom-0 w-1/6 bg-gradient-to-r to-white from-transparent z-10 hidden tablet:block" />
      </Wrapper>
    </Container>
  )
}

export default PersonCarousel
