import "twin.macro"
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import FigureDetailed from "./FigureDetailed";
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = ({ items }) =>
{
  return (
    <div tw="width[300px] mx-auto">
      <CarouselProvider
        totalSlides={items.length}
        naturalSlideWidth={277}
        naturalSlideHeight={376}
      >
        <Slider>
          {items.map((item, index) => <Slide index={index} key={item.id} tw="width[277px]">
            <FigureDetailed figure={item} />
          </Slide>)}
        </Slider>
        <DotGroup />
      </CarouselProvider>
    </div>
  )
}

export default Carousel
