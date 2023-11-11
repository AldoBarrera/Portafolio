import { renderWithTheme } from 'utils/tests/helpers'
import Recaptcha from '.'

describe('<Recaptcha />', () => {
  it('should render Recaptcha correctly', () => {
    renderWithTheme(<Recaptcha />)
  })
})
