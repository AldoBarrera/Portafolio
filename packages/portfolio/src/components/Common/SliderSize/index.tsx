import { SliderSettings } from 'components/Common/Slider'
import { ChevronLeft } from '@styled-icons/boxicons-regular/ChevronLeft'
import { ChevronRight } from '@styled-icons/boxicons-regular/ChevronRight'
import { CircleFill } from '@styled-icons/bootstrap/CircleFill'
import Slider from 'components/Common/Slider'

import { SliderSizeWrapper } from './styles'

export type SliderSizeProps = {
  children: React.ReactNode
  size?: number
}

const buildSettings = (size = 1): SliderSettings => {
  return {
    customPaging: function renderDots() {
      return <CircleFill />
    },
    dots: true,
    dotsClass: 'slick-dots slick-dots-case-studies',
    infinite: false,
    lazyLoad: 'ondemand',
    arrows: true,
    nextArrow: <ChevronRight size={100} />,
    prevArrow: <ChevronLeft size={100} />,
    slidesToShow: size,
    slidesToScroll: size,
    responsive: [
      {
        breakpoint: 1560,
        settings: {
          slidesToShow: size,
          slidesToScroll: size
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: size,
          slidesToScroll: size,
          arrows: false
        }
      }
    ]
  }
}

const SliderSize = ({ size = 1, children }: SliderSizeProps) => {
  return (
    <SliderSizeWrapper>
      <Slider settings={buildSettings(size)}>{children}</Slider>
    </SliderSizeWrapper>
  )
}

export default SliderSize
