import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import CheckboxDropdownGroup from '.'

describe('<CheckboxDropdownGroup />', () => {
  it('should render CheckboxDropdownGroup correctly', () => {
    renderWithTheme(<CheckboxDropdownGroup />)
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
  })
})
