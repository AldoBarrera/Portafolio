import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import InputFile from '.'

describe('<InputFile />', () => {
  it('should render InputFile correctly', () => {
    renderWithTheme(<InputFile fileName="my_file.pdf" />)
  })

  it('should error message when form is invalid', () => {
    renderWithTheme(
      <InputFile
        fileName="my_file.pdf"
        name="first-name"
        type="text"
        placeholder="First Name"
        error="You should chose a file"
      />
    )

    expect(screen.getByText('You should chose a file')).toBeInTheDocument()
  })
})
