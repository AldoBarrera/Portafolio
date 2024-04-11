import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import SliderSize from '.'

jest.mock('components/Common/Slider', () => {
  return {
    __esModule: true,
    default: function Mock({ children }) {
      return <div data-testid="Mock Slider">{children}</div>
    }
  }
})

describe('<SliderSize />', () => {
  it('should render children as slide item', () => {
    renderWithTheme(
      <SliderSize size={3}>
        <div>slide 1</div>
        <div>slide 2</div>
        <div>slide 3</div>
      </SliderSize>
    )

    expect(
      screen.getByText(/slide 1/i).parentElement?.parentElement
    ).toHaveClass('SliderSize_Wrapper')

    expect(
      screen.getByText(/slide 2/i).parentElement?.parentElement
    ).toHaveClass('SliderSize_Wrapper')
  })
})
