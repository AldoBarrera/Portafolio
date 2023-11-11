import { renderWithTheme } from 'utils/tests/helpers'
import CardSliderLocations from '.'
import cardSliderLocationsMock from './mock'

const Card = () => <div data-testid="Mock Card" />
const img = ({ src, alt }) => <img src={src} alt={alt} />
jest.mock('next/image', () => img)

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { id: 'page' }
  })
}))

jest.mock('components/Common/Slider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Slider"></div>
    }
  }
})

jest.mock('components/Common/Card', () => {
  return {
    __esModule: true,
    default: Card
  }
})

describe('<CardSliderLocations />', () => {
  it('should render CardSliderLocations correctly', () => {
    renderWithTheme(<CardSliderLocations {...cardSliderLocationsMock} />)
  })
})
