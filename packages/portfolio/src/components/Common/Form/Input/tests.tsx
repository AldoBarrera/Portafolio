import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Input from '.'

describe('<Input />', () => {
  it('should render Input correctly', () => {
    renderWithTheme(
      <Input name="first-name" type="text" placeholder="First Name" />
    )

    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
  })

  it('should error message when form is invalid', () => {
    renderWithTheme(
      <Input
        name="first-name"
        type="text"
        placeholder="First Name"
        error="First Name is required"
      />
    )

    expect(screen.getByText('First Name is required')).toBeInTheDocument()
  })
})
