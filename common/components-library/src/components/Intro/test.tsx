import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Intro from '.'

describe('<Intro />', () => {
  it('should render Intro component correctly', () => {
    renderWithTheme(<Intro>My Intro</Intro>)

    expect(
      screen.getByRole('heading', { name: /my intro/i })
    ).toBeInTheDocument()
  })
})
