import { renderWithTheme } from 'utils/tests/helpers'

import Container from '.'

describe('<Container />', () => {
  it('should render Container correctly', () => {
    const { container } = renderWithTheme(<Container />)

    expect(container.firstChild.firstChild).toHaveStyle({
      'max-width': '192rem',
      padding: '100px 0'
    })
  })
})
