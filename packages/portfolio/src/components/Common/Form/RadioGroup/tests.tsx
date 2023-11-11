import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import RadioGroup from '.'

describe('<RadioGroup />', () => {
  it('should render RadioGroup correctly', () => {
    renderWithTheme(
      <RadioGroup name="first-name" type="text" placeholder="First Name" />
    )
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
  })
})
