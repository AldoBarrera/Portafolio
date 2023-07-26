import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import NavMobile from '.'

describe('<NavMobile />', () => {
  it('should render NavMobile with the links correctly', () => {
    renderWithTheme(<NavMobile />)
    expect(screen.getByRole('link', { name: /Pipelines/i })).toBeInTheDocument()
  })
})
