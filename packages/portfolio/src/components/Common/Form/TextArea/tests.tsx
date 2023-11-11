import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import TextArea from '.'

describe('<TextArea />', () => {
  it('should render TextArea correctly', () => {
    renderWithTheme(<TextArea placeholder="Your message goes here" />)

    expect(
      screen.getByPlaceholderText('Your message goes here')
    ).toBeInTheDocument()
  })

  it('should show error message if there is no message in the textarea input', () => {
    renderWithTheme(
      <TextArea
        placeholder="Your message goes here"
        error="Message is required"
      />
    )

    expect(screen.getByText('Message is required'))
  })
})
