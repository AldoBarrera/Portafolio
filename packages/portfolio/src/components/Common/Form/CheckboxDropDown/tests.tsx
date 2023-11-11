import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import CheckboxDropdown from '.'

describe('<CheckboxDropdown />', () => {
  it('should render CheckboxDropdown correctly', () => {
    renderWithTheme(<CheckboxDropdown />)
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
  })
})
