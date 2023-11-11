import { screen } from '@testing-library/react'
import { Settings } from 'react-slick'
import { renderWithTheme } from 'utils/tests/helpers'

import Slider from '.'

const settings: Settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

describe('<Slider />', () => {
  it('should render children as slide item', () => {
    const { container } = renderWithTheme(
      <Slider settings={settings}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Slider>
    )

    expect(
      screen.getByText(/slide 1/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(
      screen.getByText(/slide 2/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(container.firstChild).toMatchSnapshot()
  })
})
