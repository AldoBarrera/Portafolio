import { renderWithTheme } from 'utils/tests/helpers'
import BackToTopButton from '.'

describe('<BackToTopButton />', () => {
  it('should render BackToTopButton correctly', () => {
    renderWithTheme(<BackToTopButton />)
  })
})
