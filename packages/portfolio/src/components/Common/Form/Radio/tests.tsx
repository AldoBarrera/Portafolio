import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Radio from '.'

describe('<Radio />', () => {
  it('should render Radio correctly', () => {
    renderWithTheme(<Radio />)
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
  })
})
