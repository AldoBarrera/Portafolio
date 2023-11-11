import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render Input correctly', () => {
    renderWithTheme(<Checkbox />)
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
  })
})
