import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Select from '.'

describe('<Select />', () => {
  it('should render Select Option Input correctly', () => {
    renderWithTheme(
      <Select
        defaultOption="Select an option"
        options={['Option 1', 'Option 2', 'Option 3']}
      />
    )
  })

  it('should error message when form is invalid', () => {
    renderWithTheme(
      <Select
        defaultOption="Select an option"
        options={['Option 1', 'Option 2', 'Option 3']}
        error="You should select at least one option"
      />
    )

    expect(
      screen.getByText('You should select at least one option')
    ).toBeInTheDocument()
  })
})
